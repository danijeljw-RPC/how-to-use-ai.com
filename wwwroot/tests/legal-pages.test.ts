import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { dev } from 'astro';
import { fileURLToPath } from 'node:url';

let server: Awaited<ReturnType<typeof dev>>;
let origin: string;

beforeAll(async () => {
  server = await dev({
    root: fileURLToPath(new URL('..', import.meta.url)),
    server: { host: '127.0.0.1', port: 0 },
  });
  origin = `http://127.0.0.1:${server.address.port}`;
}, 20_000);

afterAll(async () => {
  await server.stop();
});

describe('published legal pages', () => {
  it('serves the complete site-specific privacy policy', async () => {
    const response = await fetch(`${origin}/privacy/`);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toMatch(/<h1[^>]*>Privacy Policy<\/h1>/);
    expect(html).toContain('Effective:</strong> 24 September 2026');
    expect(html).toContain('24. Contact');
    expect(html).toContain('https://repasscloud.com/legal/privacy-policy/');
    expect(html).not.toContain('Launch policy:');
  });

  it('serves the complete website terms', async () => {
    const response = await fetch(`${origin}/terms/`);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toMatch(/<h1[^>]*>Website Terms<\/h1>/);
    expect(html).toContain('25. Contact');
    expect(html).toContain('South Australia, Australia');
    expect(html).toContain('https://repasscloud.com/legal/terms-of-service/');
    expect(html).not.toContain('Launch policy:');
  });

  it('serves the site-specific refund policy', async () => {
    const response = await fetch(`${origin}/refund/`);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toMatch(/<h1[^>]*>Refund Policy<\/h1>/);
    expect(html).toContain('No blanket “no refunds” rule applies.');
    expect(html).toContain('ABN 74642243801');
    expect(html).toContain('https://repasscloud.com/legal/refund-policy/');
  });

  it("links only the site's own legal routes in the footer", async () => {
    const response = await fetch(`${origin}/`);
    const html = await response.text();

    expect(html).toContain('href="/privacy/"');
    expect(html).toContain('href="/terms/"');
    expect(html).toContain('href="/refund/"');
    expect(html).not.toContain('RePass Cloud policies');
    expect(html).not.toContain('href="https://repasscloud.com/legal/');
    expect(html).not.toContain('href="https://repasscloud.com/contact/"');
  });
});


describe('retailer purchase pages while direct commerce is disabled', () => {
  it('renders all 13 regional Kindle links without direct checkout or placeholder destinations', async () => {
    const response = await fetch(`${origin}/purchase/`);
    const html = await response.text();
    expect(response.status).toBe(200);
    const links = [...html.matchAll(/href="(https:\/\/www\.amazon\.[^"]+\/dp\/B0HLYQSMQT)"/g)].map((match) => match[1]);
    expect(links).toHaveLength(13);
    expect(new Set(links).size).toBe(13);
    expect(links).toContain('https://www.amazon.com.au/dp/B0HLYQSMQT');
    expect(html).toContain('Pre-order the Kindle Edition');
    expect(html).toContain('PDF download');
    expect(html).toContain('EPUB download');
    expect(html).toContain('Black and white paperback');
    expect(html).toContain('Colour paperback');
    expect(html).not.toContain('action="/api/checkout/"');
    expect(html).not.toContain('href="https://play.google.com');
    expect(html).not.toContain('href="https://books.apple.com');
    expect(html).toContain('rel="external noopener noreferrer"');
  });

  it('makes retailer purchases discoverable from home and Book 1 without enabling checkout', async () => {
    for (const path of ['/', '/books/ai-for-normal-people/']) {
      const response = await fetch(`${origin}${path}`);
      const html = await response.text();
      expect(response.status).toBe(200);
      expect(html).toContain('href="/purchase/"');
      expect(html).toContain('Pre-order Kindle Edition');
      expect(html).not.toContain('action="/api/checkout/"');
    }
  });
});


describe('store pages before activation', () => {
  it('shows approved prices for selectable currencies and the bundle', async () => {
    const html = await (await fetch(`${origin}/purchase/?currency=jpy`)).text();
    expect(html).toContain('PDF + EPUB bundle');
    expect(html).toContain('1,199');
    expect(html).toContain('1,599');
    expect(html).not.toContain('action="/api/checkout/"');
  });
  it('serves a private library page without exposing a purchase or download token', async () => {
    const response = await fetch(`${origin}/downloads/`);
    const html = await response.text();
    expect(response.status).toBe(200);
    expect(response.headers.get('cache-control')).toContain('no-store');
    expect(response.headers.get('referrer-policy')).toBe('same-origin');
    expect(html).toContain('Your book library');
    expect(html).not.toContain('/api/download/?token=');
    expect(html).toContain('Direct purchases are not available yet.');
  });
});

describe('purchase support and regional retailers', () => {
  it('shows a distinct inbox confirmation after requesting sign-in', async () => {
    const response = await fetch(`${origin}/downloads/?sent=1`);
    const html = await response.text();
    expect(response.status).toBe(200);
    expect(html).toContain('<h1>Check your inbox</h1>');
    expect(html).toContain('hello@repasscloud.com');
    expect(html).toContain('15 minutes');
    expect(html).toContain('Try again or use another email');
    expect(html).not.toContain('action="/api/store/access/"');
    expect(html).not.toContain('Your book library</h1>');
  });
  it('prefills purchase support and asks for the purchase email/reference', async () => {
    const html = await (await fetch(`${origin}/contact/?subject=purchase-support`)).text();
    expect(html).toContain('value="Purchase support"');
    expect(html).toContain('order reference');
    expect(html).toContain('manual review');
  });
  it('uses contact support, the official badge and labelled decorative region flags', async () => {
    const html = await (await fetch(`${origin}/purchase/`)).text();
    expect(html).toContain('href="/contact/?subject=purchase-support"');
    expect(html).toContain('/images/available-at-amazon.png');
    expect((html.match(/class="region-flag" aria-hidden="true"/g) ?? []).length).toBe(13);
    expect(html).toContain('United States');
    expect(html).toContain('Australia');
    expect(html).not.toContain('mailto:hello@repasscloud.com');
  });
});
