import { describe, expect, it, vi } from 'vitest';
import {
  handleCheckoutRequest,
  handleContactRequest,
  handleNewsletterRequest,
  handlePreviewRequest,
  handleWebhookRequest,
} from '../src/lib/http-handlers';
import { FakeD1 } from './helpers/fake-d1';

function formRequest(path: string, fields: Record<string, string>, method = 'POST'): Request {
  return new Request(`https://example.com${path}`, {
    method,
    headers: { origin: 'https://example.com', 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(fields),
  });
}

function passingTurnstile() {
  return vi.fn<typeof fetch>().mockImplementation(async () => new Response(JSON.stringify({ success: true, action: 'newsletter-signup' })));
}

describe('launch endpoint handlers', () => {
  it('appends two newsletter submissions for the same email', async () => {
    const db = new FakeD1();
    const request = () => formRequest('/api/newsletter', {
      email: 'reader@example.com', consent: 'yes', sourcePage: '/preview/', turnstileToken: 'token',
    });
    const env = { TURNSTILE_SECRET_KEY: 'secret' };

    const fetcher = passingTurnstile();
    expect((await handleNewsletterRequest(request(), { env, db, fetcher })).status).toBe(201);
    expect((await handleNewsletterRequest(request(), { env, db, fetcher })).status).toBe(201);
    expect(db.newsletter).toHaveLength(2);
  });

  it('rejects newsletter Turnstile failure without a write', async () => {
    const db = new FakeD1();
    const response = await handleNewsletterRequest(formRequest('/api/newsletter', {
      email: 'reader@example.com', consent: 'yes', sourcePage: '/', turnstileToken: 'bad',
    }), {
      env: { TURNSTILE_SECRET_KEY: 'secret' }, db,
      fetcher: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify({ success: false }))),
    });
    expect(response.status).toBe(403);
    expect(db.newsletter).toHaveLength(0);
  });

  it('rejects cross-origin, invalid content type, oversized bodies, and invalid methods', async () => {
    const db = new FakeD1();
    const dependencies = { env: { TURNSTILE_SECRET_KEY: 'secret' }, db, fetcher: passingTurnstile() };
    expect((await handleNewsletterRequest(new Request('https://example.com/api/newsletter', {
      method: 'POST', headers: { origin: 'https://evil.example', 'content-type': 'application/x-www-form-urlencoded' }, body: 'email=x' }), dependencies)).status).toBe(403);
    expect((await handleNewsletterRequest(new Request('https://example.com/api/newsletter', {
      method: 'POST', headers: { origin: 'https://example.com', 'content-type': 'application/json' }, body: '{}' }), dependencies)).status).toBe(415);
    expect((await handleNewsletterRequest(new Request('https://example.com/api/newsletter', {
      method: 'POST', headers: { origin: 'https://example.com', 'content-type': 'application/x-www-form-urlencoded', 'content-length': '20000' }, body: 'email=x' }), dependencies)).status).toBe(413);
    expect((await handleNewsletterRequest(new Request('https://example.com/api/newsletter'), dependencies)).status).toBe(405);
  });

  it('stores one valid contact and stores nothing after failed Turnstile', async () => {
    const db = new FakeD1();
    const fields = { email: 'reader@example.com', message: 'A useful question', turnstileToken: 'token' };
    const env = { TURNSTILE_SECRET_KEY: 'secret' };
    const pass = vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify({ success: true, action: 'contact-message' })));
    expect((await handleContactRequest(formRequest('/api/contact', fields), { env, db, fetcher: pass })).status).toBe(201);
    const fail = vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify({ success: false })));
    expect((await handleContactRequest(formRequest('/api/contact', fields), { env, db, fetcher: fail })).status).toBe(403);
    expect(db.contacts).toHaveLength(1);
  });

  it('redirects to a configured preview and controls unavailable states', async () => {
    const redirect = await handlePreviewRequest(new Request('https://example.com/api/preview'), {
      PREVIEW_DOWNLOAD_URL: 'https://downloads.example.com/daily.pdf',
    });
    expect(redirect.status).toBe(307);
    expect(redirect.headers.get('location')).toBe('https://downloads.example.com/daily.pdf');
    expect((await handlePreviewRequest(new Request('https://example.com/api/preview'), {})).status).toBe(503);
    expect((await handlePreviewRequest(new Request('https://example.com/api/preview'), { PREVIEW_DOWNLOAD_URL: 'javascript:alert(1)' })).status).toBe(503);
  });

  it('rejects checkout while disabled before creating a Stripe session', async () => {
    const createCheckout = vi.fn();
    const response = await handleCheckoutRequest(formRequest('/api/checkout', { format: 'ebook' }), {
      env: { COMMERCE_ENABLED: 'false', SITE_URL: 'https://example.com' }, createCheckout,
    });
    expect(response.status).toBe(503);
    expect(createCheckout).not.toHaveBeenCalled();
  });

  it('emits a structured operator event for incomplete enabled commerce without secrets', async () => {
    const createCheckout = vi.fn();
    const logger = vi.fn();
    const response = await handleCheckoutRequest(formRequest('/api/checkout', { format: 'ebook' }), {
      env: { COMMERCE_ENABLED: 'true', SITE_URL: 'https://example.com', STRIPE_SECRET_KEY: 'do-not-log' },
      createCheckout,
      logger,
    });
    expect(response.status).toBe(503);
    expect(logger).toHaveBeenCalledWith({ event: 'checkout_configuration', outcome: 'incomplete-configuration' });
    expect(JSON.stringify(logger.mock.calls)).not.toContain('do-not-log');
  });

  it('creates checkout only with server allow-listed configuration', async () => {
    const createCheckout = vi.fn().mockResolvedValue({ url: 'https://checkout.stripe.com/c/pay/cs_test' });
    const env = {
      COMMERCE_ENABLED: 'true', SITE_URL: 'https://example.com', STRIPE_SECRET_KEY: 'sk_test_fake',
      STRIPE_WEBHOOK_SECRET: 'whsec_fake', STRIPE_PRICE_EBOOK: 'price_ebook',
    };
    const response = await handleCheckoutRequest(formRequest('/api/checkout', {
      format: 'ebook', priceId: 'price_attacker', successUrl: 'https://evil.example',
    }), { env, createCheckout });
    expect(response.status).toBe(303);
    expect(createCheckout).toHaveBeenCalledWith(expect.objectContaining({
      line_items: [{ price: 'price_ebook', quantity: 1 }],
      success_url: 'https://example.com/checkout/success/?session_id={CHECKOUT_SESSION_ID}',
    }));
  });

  it('passes the raw webhook body and signature once to the processor', async () => {
    const processWebhook = vi.fn().mockResolvedValue({ status: 200, outcome: 'processed' });
    const request = new Request('https://example.com/api/stripe/webhook', {
      method: 'POST', headers: { 'stripe-signature': 'signature' }, body: '{"id":"evt_1"}',
    });
    const response = await handleWebhookRequest(request, {
      env: { COMMERCE_ENABLED: 'false' }, db: new FakeD1(), processWebhook,
    });
    expect(response.status).toBe(200);
    expect(processWebhook).toHaveBeenCalledWith(expect.objectContaining({ rawBody: '{"id":"evt_1"}', signature: 'signature' }));
  });
});
