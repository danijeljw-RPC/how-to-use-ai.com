import { describe, expect, it } from 'vitest';
import { canonicalHostRedirect } from '../src/lib/canonical-host';

describe('canonical host redirect', () => {
  it('permanently redirects www to the apex host, keeping path and query', () => {
    const response = canonicalHostRedirect(new URL('https://www.how-to-use-ai.com/blog/ai-is-not-magic/?ref=x'));
    expect(response?.status).toBe(301);
    expect(response?.headers.get('location')).toBe('https://how-to-use-ai.com/blog/ai-is-not-magic/?ref=x');
  });

  it('upgrades plain HTTP on the production apex to HTTPS', () => {
    const response = canonicalHostRedirect(new URL('http://how-to-use-ai.com/books/?ref=x'));
    expect(response?.status).toBe(301);
    expect(response?.headers.get('location')).toBe('https://how-to-use-ai.com/books/?ref=x');
  });

  it('sends plain-HTTP www straight to the HTTPS apex in one hop', () => {
    const response = canonicalHostRedirect(new URL('http://www.how-to-use-ai.com/'));
    expect(response?.status).toBe(301);
    expect(response?.headers.get('location')).toBe('https://how-to-use-ai.com/');
  });

  it('leaves the apex host, localhost, and workers.dev untouched', () => {
    expect(canonicalHostRedirect(new URL('https://how-to-use-ai.com/'))).toBeNull();
    expect(canonicalHostRedirect(new URL('http://localhost:4321/'))).toBeNull();
    expect(canonicalHostRedirect(new URL('http://127.0.0.1:8787/'))).toBeNull();
    expect(canonicalHostRedirect(new URL('https://how-to-use-ai.example.workers.dev/'))).toBeNull();
  });
});
