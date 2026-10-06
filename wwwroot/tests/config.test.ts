import { describe, expect, it } from 'vitest';
import { getCommerceConfig, getRetailers, getSiteUrl, isCommerceEnabled } from '../src/lib/config';

describe('commerce configuration', () => {
  it('enables commerce only for the literal string true', () => {
    expect(isCommerceEnabled('true')).toBe(true);
    expect(isCommerceEnabled('TRUE')).toBe(false);
    expect(isCommerceEnabled('1')).toBe(false);
    expect(isCommerceEnabled(undefined)).toBe(false);
  });

  it('fails closed when enabled without complete Stripe configuration', () => {
    const result = getCommerceConfig({ COMMERCE_ENABLED: 'true' });

    expect(result).toEqual({ enabled: false, reason: 'incomplete-configuration' });
  });

  it('returns complete server-only commerce configuration', () => {
    expect(getCommerceConfig({
      COMMERCE_ENABLED: 'true',
      STRIPE_SECRET_KEY: 'sk_test_fake',
      STRIPE_WEBHOOK_SECRET: 'whsec_fake',
      STRIPE_PRICE_EBOOK: 'price_ebook',
    })).toEqual({
      enabled: true,
      secretKey: 'sk_test_fake',
      webhookSecret: 'whsec_fake',
      prices: { ebook: 'price_ebook' },
    });
  });

  it('renders only valid HTTPS retailer destinations', () => {
    expect(getRetailers({
      RETAILER_AMAZON_URL: 'https://example.com/book',
      RETAILER_APPLE_BOOKS_URL: '',
      RETAILER_OTHER_URL: 'javascript:alert(1)',
    })).toEqual([{ label: 'Amazon', url: 'https://example.com/book' }]);
  });

  it('supports Google and Apple links only when valid HTTPS destinations exist', () => {
    expect(getRetailers({})).toEqual([]);
    expect(getRetailers({ RETAILER_GOOGLE_PLAY_BOOKS_URL: 'javascript:alert(1)' })).toEqual([]);
    expect(getRetailers({
      RETAILER_GOOGLE_PLAY_BOOKS_URL: 'https://play.google.com/store/books/details?id=example',
      RETAILER_APPLE_BOOKS_URL: 'https://books.apple.com/book/id123',
    }).map((retailer) => retailer.label)).toEqual(['Google Play Books', 'Apple Books']);
  });

  it('requires an absolute HTTPS canonical site URL', () => {
    expect(getSiteUrl({ SITE_URL: 'https://how-to-use-ai.com' }).href).toBe('https://how-to-use-ai.com/');
    expect(() => getSiteUrl({ SITE_URL: 'http://example.com' })).toThrow('SITE_URL');
    expect(() => getSiteUrl({})).toThrow('SITE_URL');
  });
});
