import type Stripe from 'stripe';
import type { BookFormat, EnabledCommerceConfig } from './config';

export function buildCheckoutSessionParams(
  format: BookFormat,
  config: EnabledCommerceConfig,
  siteUrl: URL,
): Stripe.Checkout.SessionCreateParams {
  const price = config.prices[format];
  if (!price) throw new Error(`The ${format} format is not configured for direct checkout`);

  return {
    mode: 'payment',
    line_items: [{ price, quantity: 1 }],
    success_url: new URL('/checkout/success/?session_id={CHECKOUT_SESSION_ID}', siteUrl).href,
    cancel_url: new URL('/checkout/cancel/', siteUrl).href,
    metadata: { format },
  };
}
