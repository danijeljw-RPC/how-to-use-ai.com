import { describe, expect, it, vi } from 'vitest';
import { processStripeWebhook, type StripeWebhookEvent } from '../src/lib/fulfilment';
import { FakeD1 } from './helpers/fake-d1';

const enabledConfig = {
  enabled: true as const,
  secretKey: 'sk_test_fake',
  webhookSecret: 'whsec_fake',
  prices: { ebook: 'price_ebook' },
};

function event(type = 'checkout.session.completed'): StripeWebhookEvent {
  return {
    id: 'evt_1',
    api_version: '2026-09-24.dahlia',
    type,
    data: { object: {
      id: 'cs_1', payment_status: 'paid', payment_intent: 'pi_1',
      customer_details: { email: 'buyer@example.com' }, metadata: { format: 'ebook' },
    } },
  };
}

describe('Stripe webhook processing', () => {
  it('rejects an invalid signature before a database write', async () => {
    const db = new FakeD1();
    const verify = vi.fn().mockRejectedValue(new Error('bad signature'));
    const result = await processStripeWebhook({ rawBody: '{}', signature: 'bad', config: enabledConfig, db, verify });
    expect(result.status).toBe(400);
    expect(db.events).toHaveLength(0);
  });

  it('records a completed order and invokes fulfilment once', async () => {
    const db = new FakeD1();
    const fulfil = vi.fn().mockResolvedValue(undefined);
    const result = await processStripeWebhook({
      rawBody: '{}', signature: 'valid', config: enabledConfig, db,
      verify: vi.fn().mockResolvedValue(event()), fulfil,
      now: () => new Date('2026-09-24T02:00:00.000Z'), id: () => 'order-1',
    });
    expect(result).toEqual({ status: 200, outcome: 'processed' });
    expect(db.events).toHaveLength(1);
    expect(db.orders).toMatchObject([{ stripe_session_id: 'cs_1', stripe_payment_id: 'pi_1', format: 'ebook', status: 'paid', fulfilment_state: 'manual_pending' }]);
    expect(fulfil).toHaveBeenCalledTimes(1);
  });

  it('acknowledges a duplicate event without a second order or fulfilment', async () => {
    const db = new FakeD1();
    const fulfil = vi.fn().mockResolvedValue(undefined);
    const options = {
      rawBody: '{}', signature: 'valid', config: enabledConfig, db,
      verify: vi.fn().mockResolvedValue(event()), fulfil,
      now: () => new Date('2026-09-24T02:00:00.000Z'), id: () => crypto.randomUUID(),
    };
    expect((await processStripeWebhook(options)).outcome).toBe('processed');
    expect(await processStripeWebhook(options)).toEqual({ status: 200, outcome: 'duplicate' });
    expect(db.orders).toHaveLength(1);
    expect(fulfil).toHaveBeenCalledTimes(1);
  });

  it('acknowledges unrelated events without creating an order', async () => {
    const db = new FakeD1();
    const result = await processStripeWebhook({
      rawBody: '{}', signature: 'valid', config: enabledConfig, db,
      verify: vi.fn().mockResolvedValue(event('customer.created')),
    });
    expect(result).toEqual({ status: 200, outcome: 'ignored' });
    expect(db.events).toHaveLength(1);
    expect(db.orders).toHaveLength(0);
  });

  it('does not verify or fulfil while commerce is disabled', async () => {
    const verify = vi.fn();
    const fulfil = vi.fn();
    const result = await processStripeWebhook({
      rawBody: '{}', signature: 'anything', config: { enabled: false, reason: 'disabled' },
      db: new FakeD1(), verify, fulfil,
    });
    expect(result.status).toBe(503);
    expect(verify).not.toHaveBeenCalled();
    expect(fulfil).not.toHaveBeenCalled();
  });
});
