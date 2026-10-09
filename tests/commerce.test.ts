import { describe, expect, it } from 'vitest';
import { buildCheckoutSessionParams } from '../src/lib/commerce';

describe('Checkout request construction', () => {
  const config = {
    enabled: true as const,
    secretKey: 'sk_test_fake',
    webhookSecret: 'whsec_fake',
    prices: { ebook: 'price_ebook', print: 'price_print' },
  };

  it('maps an allow-listed format to the server-configured Price', () => {
    expect(buildCheckoutSessionParams('ebook', config, new URL('https://example.com'))).toMatchObject({
      mode: 'payment',
      line_items: [{ price: 'price_ebook', quantity: 1 }],
      success_url: 'https://example.com/checkout/success/?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://example.com/checkout/cancel/',
      metadata: { format: 'ebook' },
    });
  });

  it('rejects a format with no configured server-side Price', () => {
    const ebookOnly = { ...config, prices: { ebook: 'price_ebook' } };
    expect(() => buildCheckoutSessionParams('print', ebookOnly, new URL('https://example.com'))).toThrow('not configured');
  });
});
