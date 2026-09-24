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

  it('exposes local and parent-company legal routes in the footer', async () => {
    const response = await fetch(`${origin}/privacy/`);
    const html = await response.text();

    expect(html).toContain('href="/privacy/"');
    expect(html).toContain('href="/terms/"');
    expect(html).toContain('href="/refund/"');
    expect(html).toContain('href="https://repasscloud.com/legal/privacy-policy/"');
    expect(html).toContain('href="https://repasscloud.com/legal/terms-of-service/"');
    expect(html).toContain('href="https://repasscloud.com/legal/refund-policy/"');
  });
});
