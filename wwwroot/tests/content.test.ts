import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { bookOne, series } from '../src/content/books';
import { site } from '../src/content/site';

const root = resolve(import.meta.dirname, '..');
const routeFiles = [
  'src/pages/index.astro',
  'src/pages/books/index.astro',
  'src/pages/books/ai-for-normal-people.astro',
  'src/pages/preview.astro',
  'src/pages/purchase.astro',
  'src/pages/blog/index.astro',
  'src/pages/blog/[slug].astro',
  'src/pages/contact.astro',
  'src/pages/privacy.astro',
  'src/pages/terms.astro',
  'src/pages/checkout/success.astro',
  'src/pages/checkout/cancel.astro',
  'src/pages/404.astro',
  'src/pages/api/newsletter.ts',
  'src/pages/api/contact.ts',
  'src/pages/api/preview.ts',
  'src/pages/api/checkout.ts',
  'src/pages/api/stripe/webhook.ts',
];

describe('launch content contracts', () => {
  it('uses verified series and Book 1 metadata', () => {
    expect(series.title).toBe('How To Use AI.com');
    expect(series.progression).toHaveLength(5);
    expect(bookOne).toMatchObject({
      title: 'AI for Normal People',
      subtitle: 'Understanding Artificial Intelligence Without the Hype',
      descriptor: 'No technical skills required',
    });
    expect(bookOne.topics).toContain('What AI can actually do');
    expect(site.author).toBe('Danijel-James Wynyard-McClay');
  });

  it('declares every approved route', () => {
    for (const file of routeFiles) expect(readFileSync(resolve(root, file), 'utf8')).not.toHaveLength(0);
  });

  it('keeps form markup accessible and action-specific', () => {
    const newsletter = readFileSync(resolve(root, 'src/components/NewsletterForm.astro'), 'utf8');
    const contact = readFileSync(resolve(root, 'src/pages/contact.astro'), 'utf8');
    expect(newsletter).toMatch(/<label[\s\S]*for="newsletter-email"/);
    expect(newsletter).toContain('newsletter-signup');
    expect(newsletter).toContain('aria-live="polite"');
    expect(contact).toMatch(/<label[\s\S]*for="contact-message"/);
    expect(contact).toContain('contact-message');
    expect(contact).toContain('aria-live="polite"');
  });

  it('does not hardcode unconfirmed sales facts in content data', () => {
    const content = [
      readFileSync(resolve(root, 'src/content/books.ts'), 'utf8'),
      readFileSync(resolve(root, 'src/content/site.ts'), 'utf8'),
    ].join('\n');
    expect(content).not.toMatch(/\bISBN\b|testimonial|endorsement|publication date|page count/i);
    expect(content).not.toMatch(/\$\d|£\d|€\d/);
  });

  it('keeps purchase links server-configured with safe external attributes', () => {
    const purchase = readFileSync(resolve(root, 'src/pages/purchase.astro'), 'utf8');
    expect(purchase).toContain('getRetailers');
    expect(purchase).toContain('rel="external noopener noreferrer"');
    expect(purchase).toContain('getCommerceConfig');
  });
  it('points forms and links at trailing-slash API routes so trailingSlash: always never redirects a POST', () => {
    const markup = routeFiles
      .filter((file) => file.endsWith('.astro'))
      .concat('src/components/NewsletterForm.astro')
      .map((file) => readFileSync(resolve(root, file), 'utf8'))
      .join('\n');
    const apiRefs = markup.match(/"\/api\/[^"]*"/g) ?? [];
    expect(apiRefs.length).toBeGreaterThan(0);
    for (const ref of apiRefs) expect(ref).toMatch(/\/"$/);
  });
});
