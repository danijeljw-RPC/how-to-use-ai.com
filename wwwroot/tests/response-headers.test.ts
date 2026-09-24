import { describe, expect, it } from 'vitest';
import { HSTS_HEADER, withSiteHeaders } from '../src/lib/response-headers';

const https = new URL('https://how-to-use-ai.com/');
const local = new URL('http://localhost:4321/');

describe('site response headers', () => {
  it('adds a UTF-8 charset to HTML responses that lack one', () => {
    const response = withSiteHeaders(new Response('<p>hi</p>', { headers: { 'content-type': 'text/html' } }), local);
    expect(response.headers.get('content-type')).toBe('text/html; charset=utf-8');
  });

  it('keeps an existing charset and leaves non-HTML content types alone', () => {
    const html = withSiteHeaders(new Response('', { headers: { 'content-type': 'text/html; charset=iso-8859-1' } }), local);
    expect(html.headers.get('content-type')).toBe('text/html; charset=iso-8859-1');
    const json = withSiteHeaders(new Response('{}', { headers: { 'content-type': 'application/json' } }), local);
    expect(json.headers.get('content-type')).toBe('application/json');
  });

  it('sends HSTS without preload on HTTPS only', () => {
    const secure = withSiteHeaders(new Response('', { headers: { 'content-type': 'text/html' } }), https);
    expect(secure.headers.get('strict-transport-security')).toBe(HSTS_HEADER);
    expect(HSTS_HEADER).not.toMatch(/preload|includeSubDomains/i);
    const insecure = withSiteHeaders(new Response('', { headers: { 'content-type': 'text/html' } }), local);
    expect(insecure.headers.has('strict-transport-security')).toBe(false);
  });

  it('preserves status, body, and other headers', async () => {
    const original = new Response('body', { status: 404, headers: { 'content-type': 'text/html', 'x-test': '1' } });
    const response = withSiteHeaders(original, https);
    expect(response.status).toBe(404);
    expect(response.headers.get('x-test')).toBe('1');
    expect(await response.text()).toBe('body');
  });
});
