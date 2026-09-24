import { describe, expect, it, vi } from 'vitest';
import { verifyTurnstile } from '../src/lib/turnstile';

describe('Turnstile verification', () => {
  it('accepts only a successful response with the expected action', async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify({
      success: true,
      action: 'newsletter-signup',
    }), { status: 200 }));

    expect(await verifyTurnstile({
      secret: 'secret', token: 'token', expectedAction: 'newsletter-signup', fetcher,
    })).toEqual({ ok: true });
  });

  it.each([
    ['missing', '', { success: true, action: 'newsletter-signup' }],
    ['wrong action', 'token', { success: true, action: 'contact-message' }],
    ['expired', 'token', { success: false, 'error-codes': ['timeout-or-duplicate'] }],
    ['invalid', 'token', { success: false, 'error-codes': ['invalid-input-response'] }],
  ])('rejects %s tokens', async (_label, token, payload) => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(payload)));
    expect((await verifyTurnstile({
      secret: 'secret', token, expectedAction: 'newsletter-signup', fetcher,
    })).ok).toBe(false);
  });

  it('fails closed on provider errors', async () => {
    const fetcher = vi.fn<typeof fetch>().mockRejectedValue(new Error('provider offline'));
    expect(await verifyTurnstile({
      secret: 'secret', token: 'token', expectedAction: 'newsletter-signup', fetcher,
    })).toEqual({ ok: false, reason: 'provider-error' });
  });
});
