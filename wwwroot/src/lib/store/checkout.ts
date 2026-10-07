import { invoiceSeller } from './invoice';
import type Stripe from 'stripe';
import {
  amountFor,
  catalogue,
  signedBookPricing,
  isCurrency,
  isStoreFormat,
  type StoreCurrency,
  type StoreFormat,
} from './catalogue';
import { getBuyer, ownedAssets } from './auth';
import { storeMode, storeReady, type StoreDB, type StoreEnv } from './types';
export interface Attempt {
  id: string;
  mode: 'test' | 'live';
  email: string;
  format: StoreFormat;
  currency: StoreCurrency;
  amount: number;
  product_id: string;
  country: string | null;
  shipping_amount: number;
  session_id: string | null;
  state: string;
  expires_at: number;
  created_at: number;
}
export class StoreError extends Error {
  constructor(
    message: string,
    readonly status = 400,
  ) {
    super(message);
  }
}
export function signedSettings(
  env: StoreEnv,
  currency: string,
  country: string,
) {
  if (
    env.STORE_SIGNED_ENABLED !== 'true' ||
    !env.STORE_PRODUCT_SIGNED ||
    !['AU', 'NZ'].includes(country)
  )
    return null;
  if (!isCurrency(currency)) return null;
  const prices: Partial<Record<StoreCurrency, number>> = signedBookPricing.prices;
  const rates: Record<string, Partial<Record<StoreCurrency, number>>> =
    signedBookPricing.shipping;
  const amount = prices[currency];
  const shipping = rates[country]?.[currency];
  if (
    amount === undefined ||
    shipping === undefined ||
    !Number.isSafeInteger(amount) ||
    amount <= 0 ||
    !Number.isSafeInteger(shipping) ||
    shipping < 0
  ) return null;
  return { amount, shipping, product: env.STORE_PRODUCT_SIGNED };
}
export function productFor(env: StoreEnv, format: StoreFormat) {
  return {
    pdf: env.STORE_PRODUCT_PDF,
    epub: env.STORE_PRODUCT_EPUB,
    bundle: env.STORE_PRODUCT_BUNDLE,
    signed: env.STORE_PRODUCT_SIGNED,
  }[format];
}
export function editionConfigured(env: StoreEnv, format: StoreFormat) {
  if (!storeReady(env) || !productFor(env, format)) return false;
  if (format === 'signed') return env.STORE_SIGNED_ENABLED === 'true';
  return (
    !!env.BOOK_FILES &&
    catalogue[format].assets.every(
      (asset) => !!(asset === 'pdf' ? env.BOOK_PDF_KEY : env.BOOK_EPUB_KEY),
    )
  );
}
export function checkoutParams(
  attempt: Attempt,
  siteUrl: string,
): Stripe.Checkout.SessionCreateParams {
  const physical = attempt.format === 'signed';
  return {
    mode: 'payment',
    currency: attempt.currency,
    customer_email: attempt.email,
    allow_promotion_codes: true,
    name_collection: { business: { enabled: true, optional: true } },
    tax_id_collection: { enabled: true, required: 'never' },
    billing_address_collection: 'auto',
    line_items: [
      {
        price_data: {
          currency: attempt.currency,
          product: attempt.product_id,
          unit_amount: attempt.amount,
          tax_behavior: 'inclusive',
        },
        quantity: 1,
      },
    ],
    metadata: {
      project: 'how-to-use-ai.com',
      attempt: attempt.id,
      format: attempt.format,
      mode: attempt.mode,
    },
    payment_intent_data: {
      metadata: {
        project: 'how-to-use-ai.com',
        attempt: attempt.id,
        format: attempt.format,
        mode: attempt.mode,
      },
    },
    integration_identifier: `book_store_${attempt.id
      .replaceAll('-', '')
      .slice(0, 8)
      .split('')
      .map((hex) => 'abcdefghijklmnop'[parseInt(hex, 16)])
      .join('')}`,
    expires_at: attempt.expires_at,
    success_url: new URL('/checkout/success/', siteUrl).href,
    cancel_url: new URL('/checkout/cancel/', siteUrl).href,
    ...(physical
      ? {
          shipping_address_collection: {
            allowed_countries: [attempt.country as 'AU' | 'NZ'],
          },
          shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  currency: attempt.currency,
                  amount: attempt.shipping_amount,
                },
                display_name: `Delivery to ${attempt.country}`,
                tax_behavior: 'inclusive',
              },
            },
          ],
        }
      : {}),
  };
}
export async function startCheckout(options: {
  db: StoreDB;
  env: StoreEnv;
  session: string;
  format: string;
  currency: string;
  country?: string;
  create: (
    params: Stripe.Checkout.SessionCreateParams,
    key: string,
  ) => Promise<{ id: string; url: string | null; expires_at?: number }>;
  now?: () => number;
}) {
  const { db, env } = options,
    now = (options.now ?? (() => Math.floor(Date.now() / 1000)))(),
    mode = storeMode(env);
  if(mode==='live'&&invoiceSeller.gst!=='not-registered')
    throw new StoreError('Live checkout awaits confirmed invoice tax treatment.',503);
  const buyer = await getBuyer(db, options.session, mode, now);
  if (!buyer)
    throw new StoreError('Please verify your email before purchasing.', 401);
  if (!isStoreFormat(options.format) || !isCurrency(options.currency))
    throw new StoreError('Choose a valid edition and currency.');
  const format = options.format,
    currency = options.currency;
  if (!editionConfigured(env, format))
    throw new StoreError('That edition is not available yet.', 503);
  const owns = await ownedAssets(db, buyer.email, mode);
  if (catalogue[format].assets.some((asset) => owns.includes(asset)))
    throw new StoreError(
      'You already own part or all of this edition. Open your downloads instead.',
      409,
    );
  // Head checks ensure no payment starts for an absent release asset.
  for (const asset of catalogue[format].assets) {
    const file = await env.BOOK_FILES!.head(
      (asset === 'pdf' ? env.BOOK_PDF_KEY : env.BOOK_EPUB_KEY)!,
    );
    if (!file) throw new StoreError('That edition is not available yet.', 503);
  }
  const signed =
    format === 'signed'
      ? signedSettings(env, currency, options.country ?? '')
      : null;
  if (format === 'signed' && !signed)
    throw new StoreError(
      'Signed-copy delivery is not available for that country and currency.',
      503,
    );
  const attempt: Attempt = {
    id: crypto.randomUUID(),
    mode,
    email: buyer.email,
    format,
    currency,
    amount:
      signed?.amount ??
      amountFor(format as Exclude<StoreFormat, 'signed'>, currency),
    product_id: productFor(env, format)!,
    country: signed ? options.country! : null,
    shipping_amount: signed?.shipping ?? 0,
    session_id: null,
    state: 'creating',
    expires_at: (options.now ?? (() => Math.floor(Date.now() / 1000)))() + 1860,
    created_at: now,
  };
  const assets: string[] =
    format === 'signed' ? ['signed'] : catalogue[format].assets;
  try {
    await db.batch([
      db
        .prepare(
          `INSERT INTO store_attempts (id,mode,email,format,currency,amount,product_id,country,shipping_amount,expires_at,created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
        )
        .bind(
          attempt.id,
          mode,
          buyer.email,
          format,
          currency,
          attempt.amount,
          attempt.product_id,
          attempt.country,
          attempt.shipping_amount,
          attempt.expires_at,
          now,
        ),
      ...assets.map((asset) =>
        db
          .prepare(
            `INSERT INTO store_purchase_locks (mode,email,asset,attempt_id) VALUES (?,?,?,?)`,
          )
          .bind(mode, buyer.email, asset, attempt.id),
      ),
    ]);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes('store_asset_already_owned')
    )
      throw new StoreError(
        'You already own this edition. Open your downloads instead.',
        409,
      );
    if (
      error instanceof Error &&
      /UNIQUE.*store_purchase_locks/i.test(error.message)
    )
      throw new StoreError(
        'A purchase is already in progress. Finish it or wait for checkout to expire.',
        409,
      );
    throw error;
  }
  // Leave reservations on ambiguous network failure. Maintenance reconciles Stripe first.
  const session = await options.create(
    checkoutParams(attempt, env.SITE_URL!),
    `book-${mode}-${attempt.id}`,
  );
  if (!session.url || !session.url.startsWith('https://checkout.stripe.com/'))
    throw new StoreError('Checkout could not be started.', 503);
  await db
    .prepare(
      `UPDATE store_attempts SET session_id=?,expires_at=COALESCE(?,expires_at),state='open' WHERE id=? AND state='creating'`,
    )
    .bind(session.id, session.expires_at ?? null, attempt.id)
    .run();
  return session.url;
}
