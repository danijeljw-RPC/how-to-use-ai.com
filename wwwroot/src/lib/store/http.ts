import { isSameOrigin, isAcceptedFormContentType } from '../validation';
import { verifyTurnstile } from '../turnstile';
import { createStripeClient, verifyStripeEvent } from '../stripe';
import {
  emailAddress,
  cookieSession,
  consumeLogin,
  rateLimit,
  SESSION_COOKIE,
} from './auth';
import { tokenHash } from './tokens';
import { startCheckout, StoreError } from './checkout';
import { acceptStoreEvent } from './webhook';
import { enqueueAccess, deliverOutbox } from './email';
import { authReady, storeMode, paymentModeReady, type StoreEnv } from './types';
export const privateHeaders = {
  'cache-control': 'no-store, private',
  'referrer-policy': 'no-referrer',
  'x-robots-tag': 'noindex, nofollow',
};
export function message(status: number, text: string) {
  return new Response(text, {
    status,
    headers: { ...privateHeaders, 'content-type': 'text/plain; charset=utf-8' },
  });
}
export function redirect(path: string, cookie?: string) {
  return new Response(null, {
    status: 303,
    headers: {
      ...privateHeaders,
      location: path,
      ...(cookie ? { 'set-cookie': cookie } : {}),
    },
  });
}
export async function boundedText(request: Request, limit = 8192) {
  if (Number(request.headers.get('content-length') ?? 0) > limit)
    throw new StoreError('Request is too large.', 413);
  const reader = request.body?.getReader();
  if (!reader) return '';
  let length = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > limit) {
      await reader.cancel();
      throw new StoreError('Request is too large.', 413);
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.length;
  }
  return new TextDecoder().decode(bytes);
}
export async function storeForm(request: Request) {
  if (request.method !== 'POST') throw new StoreError('Use POST.', 405);
  if (!isSameOrigin(request))
    throw new StoreError('Cross-origin submissions are not accepted.', 403);
  if (!isAcceptedFormContentType(request.headers.get('content-type')))
    throw new StoreError('Use a browser form.', 415);
  const raw = await boundedText(request);
  const form = await new Request(request.url, {
    method: 'POST',
    headers: { 'content-type': request.headers.get('content-type')! },
    body: raw,
  }).formData();
  return form;
}
export async function storeResponse(operation: () => Promise<Response>) {
  try {
    return await operation();
  } catch (error) {
    if (error instanceof StoreError)
      return message(error.status, error.message);
    // Avoid logging provider errors that may include addresses or secret request data.
    console.error(JSON.stringify({ event: 'store_request_failed' }));
    return message(
      503,
      'The store is temporarily unavailable. Please try again or contact hello@repasscloud.com.',
    );
  }
}
export async function handleAccess(request: Request, env: StoreEnv) {
  return storeResponse(async () => {
    const form = await storeForm(request);
    if (!authReady(env) || !env.SITE_DB || !env.TURNSTILE_SECRET_KEY)
      throw new StoreError('Email sign-in is not available yet.', 503);
    const email = emailAddress(String(form.get('email') ?? ''));
    if (!email) throw new StoreError('Enter a valid email address.');
    const verify = await verifyTurnstile({
      secret: env.TURNSTILE_SECRET_KEY,
      token: String(form.get('turnstileToken') ?? ''),
      expectedAction: 'store-access',
      remoteIp: request.headers.get('cf-connecting-ip') ?? undefined,
    });
    if (!verify.ok)
      throw new StoreError('Please complete bot verification.', 403);
    const now = Math.floor(Date.now() / 1000),
      mode = storeMode(env);
    const ip = await tokenHash(
      request.headers.get('cf-connecting-ip') ?? 'local',
    );
    if (!(await rateLimit(env.SITE_DB, `access-ip-${mode}-${ip}`, now, 10)))
      throw new StoreError(
        'Too many requests. Try again in fifteen minutes.',
        429,
      );
    if (
      await rateLimit(
        env.SITE_DB,
        `access-email-${mode}-${await tokenHash(email)}`,
        now,
        1,
        60,
      )
    ) {
      await enqueueAccess(env.SITE_DB, email, mode, now);
      await deliverOutbox({ db: env.SITE_DB, env });
    }
    return redirect('/downloads/?sent=1');
  });
}
export async function handleVerify(request: Request, env: StoreEnv) {
  return storeResponse(async () => {
    const form = await storeForm(request);
    if (!env.SITE_DB) throw new StoreError('Sign-in is unavailable.', 503);
    const session = await consumeLogin(
      env.SITE_DB,
      String(form.get('token') ?? ''),
      storeMode(env),
      Math.floor(Date.now() / 1000),
    );
    if (!session)
      throw new StoreError(
        'This sign-in link is expired or has already been used. Request another at /downloads/.',
        410,
      );
    return redirect(
      '/downloads/',
      `${SESSION_COOKIE}=${session}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800`,
    );
  });
}
export async function handleLogout(request: Request, env: StoreEnv) {
  return storeResponse(async () => {
    await storeForm(request);
    const session = cookieSession(request);
    if (session && env.SITE_DB)
      await env.SITE_DB.prepare(
        "UPDATE store_auth SET used_at=? WHERE token_hash=? AND mode=? AND kind='session'",
      )
        .bind(
          Math.floor(Date.now() / 1000),
          await tokenHash(session),
          storeMode(env),
        )
        .run();
    return redirect(
      '/downloads/',
      `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
    );
  });
}
export async function handleStoreCheckout(request: Request, env: StoreEnv) {
  return storeResponse(async () => {
    const form = await storeForm(request);
    if (!env.SITE_DB) throw new StoreError('Checkout is unavailable.', 503);
    if (form.get('terms') !== 'yes')
      throw new StoreError('Please accept the purchase terms.');
    const client = createStripeClient(
      env.STRIPE_SECRET_KEY ?? 'sk_test_unconfigured',
    );
    const url = await startCheckout({
      db: env.SITE_DB,
      env,
      session: cookieSession(request),
      format: String(form.get('format') ?? ''),
      currency: String(form.get('currency') ?? ''),
      country: String(form.get('country') ?? ''),
      create: (params, key) =>
        client.checkout.sessions.create(params, { idempotencyKey: key }),
    });
    return redirect(url);
  });
}
export async function handleStoreWebhook(request: Request, env: StoreEnv) {
  return storeResponse(async () => {
    if (request.method !== 'POST') throw new StoreError('Use POST.', 405);
    // Webhooks remain active when checkout is switched off, so existing paid orders can finish.
    if (!env.STRIPE_WEBHOOK_SECRET || !paymentModeReady(env) || !env.SITE_DB)
      throw new StoreError('Payments are not configured.', 503);
    const signature = request.headers.get('stripe-signature');
    if (!signature) throw new StoreError('Invalid signature.', 400);
    const raw = await boundedText(request, 262144);
    let event;
    try {
      event = await verifyStripeEvent(
        raw,
        signature,
        env.STRIPE_WEBHOOK_SECRET,
      );
    } catch {
      throw new StoreError('Invalid signature.', 400);
    }
    const client = createStripeClient(env.STRIPE_SECRET_KEY!);
    if (event.type === 'charge.dispute.created') {
      const dispute = event.data.object as {
        charge: string | { id: string };
        payment_intent?: string;
      };
      if (!dispute.payment_intent) {
        const charge = await client.charges.retrieve(
          typeof dispute.charge === 'string'
            ? dispute.charge
            : dispute.charge.id,
        );
        dispute.payment_intent =
          typeof charge.payment_intent === 'string'
            ? charge.payment_intent
            : charge.payment_intent?.id;
      }
    }
    const result = await acceptStoreEvent({
      db: env.SITE_DB,
      env,
      event,
      retrieve: (id) =>
        client.checkout.sessions.retrieve(id, {
          expand: ['line_items.data.price.product'],
        }),
    });
    return Response.json(
      { ok: true, outcome: result },
      { headers: privateHeaders },
    );
  });
}
