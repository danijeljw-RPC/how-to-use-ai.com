import { describe, expect, it } from 'vitest';
import {
  isAcceptedFormContentType,
  isSameOrigin,
  parseCheckoutInput,
  parseContactInput,
  parseNewsletterInput,
} from '../src/lib/validation';

describe('request validation', () => {
  it('accepts browser form content types and rejects JSON', () => {
    expect(isAcceptedFormContentType('application/x-www-form-urlencoded')).toBe(true);
    expect(isAcceptedFormContentType('multipart/form-data; boundary=x')).toBe(true);
    expect(isAcceptedFormContentType('application/json')).toBe(false);
    expect(isAcceptedFormContentType(null)).toBe(false);
  });

  it('requires an exact same-origin Origin header', () => {
    expect(isSameOrigin(new Request('https://example.com/api', { headers: { origin: 'https://example.com' } }))).toBe(true);
    expect(isSameOrigin(new Request('https://example.com/api', { headers: { origin: 'https://evil.example' } }))).toBe(false);
    expect(isSameOrigin(new Request('https://example.com/api'))).toBe(false);
  });

  it('accepts a valid newsletter signup and normalizes the email', () => {
    const form = new FormData();
    form.set('email', ' Reader@Example.COM ');
    form.set('consent', 'yes');
    form.set('sourcePage', '/preview/');
    form.set('turnstileToken', 'token');

    expect(parseNewsletterInput(form)).toEqual({ ok: true, value: {
      email: 'reader@example.com',
      consentVersion: 'launch-v1',
      sourcePage: '/preview/',
      turnstileToken: 'token',
    } });
  });

  it.each([
    ['bad email', { email: 'not-an-email', consent: 'yes', sourcePage: '/', turnstileToken: 'x' }],
    ['missing consent', { email: 'a@example.com', sourcePage: '/', turnstileToken: 'x' }],
    ['HTML', { email: 'a@example.com', consent: 'yes', sourcePage: '<b>x</b>', turnstileToken: 'x' }],
    ['control characters', { email: 'a@example.com', consent: 'yes', sourcePage: '/\u0000', turnstileToken: 'x' }],
    ['missing token', { email: 'a@example.com', consent: 'yes', sourcePage: '/' }],
  ])('rejects newsletter input with %s', (_label, fields) => {
    const form = new FormData();
    Object.entries(fields).forEach(([key, value]) => form.set(key, value));
    expect(parseNewsletterInput(form).ok).toBe(false);
  });

  it('validates safe contact fields and their boundaries', () => {
    const form = new FormData();
    form.set('name', 'Reader');
    form.set('email', 'reader@example.com');
    form.set('subject', 'A question');
    form.set('message', 'A useful question without markup.');
    form.set('turnstileToken', 'token');
    expect(parseContactInput(form).ok).toBe(true);

    form.set('message', 'x'.repeat(5001));
    expect(parseContactInput(form).ok).toBe(false);
    form.set('message', '<script>alert(1)</script>');
    expect(parseContactInput(form).ok).toBe(false);
  });

  it('allow-lists checkout formats and ignores client price fields', () => {
    const form = new FormData();
    form.set('format', 'ebook');
    form.set('price', '1');
    form.set('priceId', 'price_attacker');
    form.set('successUrl', 'https://evil.example');
    expect(parseCheckoutInput(form)).toEqual({ ok: true, value: { format: 'ebook' } });
    form.set('format', 'audio');
    expect(parseCheckoutInput(form).ok).toBe(false);
  });
});
