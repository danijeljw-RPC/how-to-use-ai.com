import type { APIRoute } from 'astro';
import { siteEnv } from '../../lib/runtime-env';
import { getCommerceConfig } from '../../lib/config';
import { handleCheckoutRequest } from '../../lib/http-handlers';
import { logStructured } from '../../lib/logging';
import { createStripeClient } from '../../lib/stripe';

export const prerender = false;

export const ALL: APIRoute = ({ request }) => {
  const env = siteEnv();
  const commerce = getCommerceConfig(env);
  return handleCheckoutRequest(request, {
    env,
    createCheckout: async (params) => {
      if (!commerce.enabled) throw new Error('Commerce is unavailable');
      try {
        return await createStripeClient(commerce.secretKey).checkout.sessions.create(params);
      } catch (error) {
        const { type, code, name } = (error ?? {}) as { type?: string; code?: string; name?: string };
        logStructured({ event: 'checkout_create_failed', errorType: type ?? name ?? 'unknown', errorCode: code ?? 'none' });
        throw error;
      }
    },
    logger: logStructured,
  });
};
