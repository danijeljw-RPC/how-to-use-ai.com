import Stripe from 'stripe';

export interface StripeVerificationOptions {
  tolerance?: number;
}

export function createStripeClient(secretKey: string): Stripe {
  return new Stripe(secretKey, { httpClient: Stripe.createFetchHttpClient() });
}

export async function verifyStripeEvent(
  rawBody: string,
  signature: string,
  webhookSecret: string,
  options: StripeVerificationOptions = {},
): Promise<Stripe.Event> {
  const stripe = createStripeClient('sk_test_signature_verification_only');
  return stripe.webhooks.constructEventAsync(rawBody, signature, webhookSecret, options.tolerance);
}
