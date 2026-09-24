import { describe, expect, it } from 'vitest';
import { canonicalHostRedirect } from '../src/lib/canonical-host';

describe('canonical host redirect', () => {
  it('permanently redirects www to the apex host, keeping path and query', () => {
    const response = canonicalHostRedirect(new URL('https://www.how-to-use-ai.com/blog/ai-is-not-magic/?ref=x'));
    expect(response?.status).toBe(301);
    expect(response?.headers.get('location')).toBe('https://how-to-use-ai.com/blog/ai-is-not-magic/?ref=x');
  });

  it('leaves the apex host, localhost, and workers.dev untouched', () => {
    expect(canonicalHostRedirect(new URL('https://how-to-use-ai.com/'))).toBeNull();
    expect(canonicalHostRedirect(new URL('http://localhost:4321/'))).toBeNull();
    expect(canonicalHostRedirect(new URL('https://how-to-use-ai.example.workers.dev/'))).toBeNull();
  });
});
