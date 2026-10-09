import type Stripe from 'stripe';
import { buildCheckoutSessionParams } from './commerce';
import { getCommerceConfig, getPreviewUrl, getSiteUrl, type SiteEnvironment } from './config';
import { insertContactMessage } from './contact-repository';
import type { D1DatabaseLike } from './database';
import { processStripeWebhook, type WebhookOptions, type WebhookResult } from './fulfilment';
import { insertNewsletterSignup } from './newsletter-repository';
import type { StructuredLogger } from './logging';
import { verifyStripeEvent } from './stripe';
import { verifyTurnstile } from './turnstile';
import {
  isAcceptedFormContentType,
  isSameOrigin,
  parseCheckoutInput,
  parseContactInput,
  parseNewsletterInput,
} from './validation';

const MAX_FORM_BYTES = 16_384;
const NO_STORE = { 'cache-control': 'no-store' };

function json(status: number, body: Record<string, unknown>): Response {
  return Response.json(body, { status, headers: NO_STORE });
}

async function readBoundedForm(request: Request): Promise<{ ok: true; form: FormData } | { ok: false; response: Response }> {
  if (!isAcceptedFormContentType(request.headers.get('content-type'))) {
    return { ok: false, response: json(415, { ok: false, error: 'Use a standard browser form submission.' }) };
  }
  const declaredLength = Number(request.headers.get('content-length') ?? '0');
  if (Number.isFinite(declaredLength) && declaredLength > MAX_FORM_BYTES) {
    return { ok: false, response: json(413, { ok: false, error: 'The submitted form is too large.' }) };
  }
  try {
    const form = await request.formData();
    let measured = 0;
    for (const [key, value] of form.entries()) measured += key.length + (typeof value === 'string' ? value.length : value.size);
    if (measured > MAX_FORM_BYTES) return { ok: false, response: json(413, { ok: false, error: 'The submitted form is too large.' }) };
    return { ok: true, form };
  } catch {
    return { ok: false, response: json(400, { ok: false, error: 'The form could not be read.' }) };
  }
}

interface ProtectedHandlerDependencies {
  env: SiteEnvironment;
  db?: D1DatabaseLike;
  fetcher?: typeof fetch;
  logger?: StructuredLogger;
}

function requestCountry(request: Request): string | null {
  return request.headers.get('cf-ipcountry');
}

export async function handleNewsletterRequest(request: Request, dependencies: ProtectedHandlerDependencies): Promise<Response> {
  if (request.method !== 'POST') return new Response(null, { status: 405, headers: { ...NO_STORE, allow: 'POST' } });
  if (!isSameOrigin(request)) return json(403, { ok: false, error: 'Cross-origin submissions are not accepted.' });
  if (!dependencies.db || !dependencies.env.TURNSTILE_SECRET_KEY) {
    dependencies.logger?.({ event: 'newsletter_submission', outcome: 'unavailable' });
    return json(503, { ok: false, error: 'Signup is temporarily unavailable.' });
  }
  const read = await readBoundedForm(request);
  if (!read.ok) return read.response;
  const parsed = parseNewsletterInput(read.form);
  if (!parsed.ok) return json(400, { ok: false, error: parsed.error });
  const turnstile = await verifyTurnstile({
    secret: dependencies.env.TURNSTILE_SECRET_KEY,
    token: parsed.value.turnstileToken,
    expectedAction: 'newsletter-signup',
    remoteIp: request.headers.get('cf-connecting-ip') ?? undefined,
    fetcher: dependencies.fetcher,
  });
  if (!turnstile.ok) {
    dependencies.logger?.({ event: 'newsletter_submission', outcome: 'turnstile-rejected' });
    return json(403, { ok: false, error: 'Bot verification failed. Please try again.' });
  }
  await insertNewsletterSignup(dependencies.db, {
    email: parsed.value.email,
    consentVersion: parsed.value.consentVersion,
    sourcePage: parsed.value.sourcePage,
    requestCountry: requestCountry(request),
    userAgent: request.headers.get('user-agent'),
  });
  dependencies.logger?.({ event: 'newsletter_submission', outcome: 'recorded' });
  return json(201, { ok: true, message: 'Your address has been recorded for launch and coupon updates.' });
}

export async function handleContactRequest(request: Request, dependencies: ProtectedHandlerDependencies): Promise<Response> {
  if (request.method !== 'POST') return new Response(null, { status: 405, headers: { ...NO_STORE, allow: 'POST' } });
  if (!isSameOrigin(request)) return json(403, { ok: false, error: 'Cross-origin submissions are not accepted.' });
  if (!dependencies.db || !dependencies.env.TURNSTILE_SECRET_KEY) {
    dependencies.logger?.({ event: 'contact_submission', outcome: 'unavailable' });
    return json(503, { ok: false, error: 'Contact is temporarily unavailable.' });
  }
  const read = await readBoundedForm(request);
  if (!read.ok) return read.response;
  const parsed = parseContactInput(read.form);
  if (!parsed.ok) return json(400, { ok: false, error: parsed.error });
  const turnstile = await verifyTurnstile({
    secret: dependencies.env.TURNSTILE_SECRET_KEY,
    token: parsed.value.turnstileToken,
    expectedAction: 'contact-message',
    remoteIp: request.headers.get('cf-connecting-ip') ?? undefined,
    fetcher: dependencies.fetcher,
  });
  if (!turnstile.ok) {
    dependencies.logger?.({ event: 'contact_submission', outcome: 'turnstile-rejected' });
    return json(403, { ok: false, error: 'Bot verification failed. Please try again.' });
  }
  await insertContactMessage(dependencies.db, {
    name: parsed.value.name,
    email: parsed.value.email,
    subject: parsed.value.subject,
    message: parsed.value.message,
    requestCountry: requestCountry(request),
  });
  dependencies.logger?.({ event: 'contact_submission', outcome: 'recorded' });
  return json(201, { ok: true, message: 'Your message has been recorded.' });
}

export async function handlePreviewRequest(request: Request, env: SiteEnvironment): Promise<Response> {
  if (request.method !== 'GET' && request.method !== 'HEAD') return new Response(null, { status: 405, headers: { allow: 'GET, HEAD' } });
  const preview = getPreviewUrl(env);
  if (!preview) {
    return new Response('<!doctype html><title>Preview unavailable</title><h1>The preview is temporarily unavailable.</h1><p>Please try again later.</p>', {
      status: 503,
      headers: { 'content-type': 'text/html; charset=utf-8', ...NO_STORE },
    });
  }
  return new Response(null, { status: 307, headers: { location: preview.href, 'cache-control': 'public, max-age=300' } });
}

interface CheckoutDependencies {
  env: SiteEnvironment;
  createCheckout: (params: Stripe.Checkout.SessionCreateParams) => Promise<{ url: string | null }>;
  logger?: StructuredLogger;
}

export async function handleCheckoutRequest(request: Request, dependencies: CheckoutDependencies): Promise<Response> {
  if (request.method !== 'POST') return new Response(null, { status: 405, headers: { ...NO_STORE, allow: 'POST' } });
  if (!isSameOrigin(request)) return json(403, { ok: false, error: 'Cross-origin submissions are not accepted.' });
  const commerce = getCommerceConfig(dependencies.env);
  if (!commerce.enabled) {
    dependencies.logger?.({ event: 'checkout_configuration', outcome: commerce.reason });
    return json(503, { ok: false, error: 'Direct checkout is not available.' });
  }
  const read = await readBoundedForm(request);
  if (!read.ok) return read.response;
  const parsed = parseCheckoutInput(read.form);
  if (!parsed.ok) return json(400, { ok: false, error: parsed.error });
  let siteUrl: URL;
  try {
    siteUrl = getSiteUrl(dependencies.env);
  } catch {
    return json(503, { ok: false, error: 'Direct checkout is not configured.' });
  }
  try {
    const session = await dependencies.createCheckout(buildCheckoutSessionParams(parsed.value.format, commerce, siteUrl));
    if (!session.url) return json(502, { ok: false, error: 'Checkout could not be started.' });
    return new Response(null, { status: 303, headers: { location: session.url, ...NO_STORE } });
  } catch {
    return json(503, { ok: false, error: 'That format is not available for direct checkout.' });
  }
}

interface WebhookDependencies {
  env: SiteEnvironment;
  db: D1DatabaseLike;
  processWebhook?: (options: WebhookOptions) => Promise<WebhookResult>;
  logger?: StructuredLogger;
}

export async function handleWebhookRequest(request: Request, dependencies: WebhookDependencies): Promise<Response> {
  if (request.method !== 'POST') return new Response(null, { status: 405, headers: { ...NO_STORE, allow: 'POST' } });
  const signature = request.headers.get('stripe-signature');
  if (!signature) return json(400, { ok: false, outcome: 'invalid-signature' });
  const rawBody = await request.text();
  const result = await (dependencies.processWebhook ?? processStripeWebhook)({
    rawBody,
    signature,
    config: getCommerceConfig(dependencies.env),
    db: dependencies.db,
    verify: verifyStripeEvent,
  });
  dependencies.logger?.({ event: 'stripe_webhook', outcome: result.outcome, status: result.status });
  return json(result.status, { ok: result.status < 300, outcome: result.outcome });
}
