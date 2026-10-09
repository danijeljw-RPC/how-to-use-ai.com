import Stripe from 'stripe';
import { describe, expect, it } from 'vitest';
import { verifyStripeEvent } from '../src/lib/stripe';

describe('Stripe signature verification', () => {
  const secret = 'whsec_test_secret';
  const payload = JSON.stringify({ id: 'evt_1', type: 'checkout.session.completed', data: { object: { id: 'cs_1' } } });

  it('accepts a correctly signed raw payload', async () => {
    const signature = Stripe.webhooks.generateTestHeaderString({ payload, secret, timestamp: 1_800_000_000 });
    const event = await verifyStripeEvent(payload, signature, secret, { tolerance: Number.POSITIVE_INFINITY });
    expect(event.id).toBe('evt_1');
  });

  it('rejects a payload with an invalid signature', async () => {
    await expect(verifyStripeEvent(payload, 't=1,v1=invalid', secret)).rejects.toThrow();
  });
});
