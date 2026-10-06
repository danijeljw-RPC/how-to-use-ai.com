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
