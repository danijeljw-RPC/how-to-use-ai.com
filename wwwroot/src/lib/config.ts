export interface SiteEnvironment {
  SITE_URL?: string;
  PREVIEW_DOWNLOAD_URL?: string;
  TURNSTILE_SITE_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  COMMERCE_ENABLED?: string;
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  STRIPE_PRICE_EBOOK?: string;
  STRIPE_PRICE_PRINT?: string;
  RETAILER_AMAZON_URL?: string;
  RETAILER_APPLE_BOOKS_URL?: string;
  RETAILER_OTHER_URL?: string;
}

export type BookFormat = 'ebook' | 'print';

export interface EnabledCommerceConfig {
  enabled: true;
  secretKey: string;
  webhookSecret: string;
  prices: Partial<Record<BookFormat, string>> & { ebook: string };
}

export type CommerceConfig =
  | EnabledCommerceConfig
  | { enabled: false; reason: 'disabled' | 'incomplete-configuration' };

export interface RetailerLink {
  label: string;
  url: string;
}

export function isCommerceEnabled(value: string | undefined): boolean {
  return value === 'true';
}

export function getCommerceConfig(env: SiteEnvironment): CommerceConfig {
  if (!isCommerceEnabled(env.COMMERCE_ENABLED)) {
    return { enabled: false, reason: 'disabled' };
  }

  if (!env.STRIPE_SECRET_KEY || !env.STRIPE_WEBHOOK_SECRET || !env.STRIPE_PRICE_EBOOK) {
    return { enabled: false, reason: 'incomplete-configuration' };
  }

  return {
    enabled: true,
    secretKey: env.STRIPE_SECRET_KEY,
    webhookSecret: env.STRIPE_WEBHOOK_SECRET,
    prices: {
      ebook: env.STRIPE_PRICE_EBOOK,
      ...(env.STRIPE_PRICE_PRINT ? { print: env.STRIPE_PRICE_PRINT } : {}),
    },
  };
}

function asHttpsUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export function getSiteUrl(env: SiteEnvironment): URL {
  const value = asHttpsUrl(env.SITE_URL);
  if (!value) throw new Error('SITE_URL must be an absolute HTTPS URL');
  return new URL(value);
}

export function getPreviewUrl(env: SiteEnvironment): URL | undefined {
  const value = asHttpsUrl(env.PREVIEW_DOWNLOAD_URL);
  return value ? new URL(value) : undefined;
}

export function getRetailers(env: SiteEnvironment): RetailerLink[] {
  const candidates = [
    ['Amazon', env.RETAILER_AMAZON_URL],
    ['Apple Books', env.RETAILER_APPLE_BOOKS_URL],
    ['Other retailer', env.RETAILER_OTHER_URL],
  ] as const;

  return candidates.flatMap(([label, value]) => {
    const url = asHttpsUrl(value);
    return url ? [{ label, url }] : [];
  });
}
