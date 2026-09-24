import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '..');

describe('advisory surface hardening', () => {
  it('uses the pass-through image service so no runtime image optimizer or Images binding is deployed', () => {
    const config = readFileSync(resolve(root, 'astro.config.mjs'), 'utf8');
    expect(config).toContain("imageService: 'passthrough'");
  });

  it('disables sessions so the adapter never auto-provisions a KV namespace', () => {
    const config = readFileSync(resolve(root, 'astro.config.mjs'), 'utf8');
    expect(config).toContain('session: false');
  });

  it('pins patched Astro and adapter lines that target Workers', () => {
    const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
    expect(Number(pkg.dependencies.astro.split('.')[0])).toBeGreaterThanOrEqual(7);
    expect(Number(pkg.dependencies['@astrojs/cloudflare'].split('.')[0])).toBeGreaterThanOrEqual(14);
    const wrangler = readFileSync(resolve(root, 'wrangler.jsonc'), 'utf8');
    expect(wrangler).not.toContain('pages_build_output_dir');
    expect(wrangler).toContain('"main": "@astrojs/cloudflare/entrypoints/server"');
  });

  it('escapes less-than characters before inserting JSON-LD into a script element', () => {
    const layout = readFileSync(resolve(root, 'src/layouts/BaseLayout.astro'), 'utf8');
    expect(layout).toContain("replaceAll('<', '\\\\u003c')");
    expect(layout).toContain('set:html={structuredDataJson}');
  });

  it('does not use server islands, view transitions, or define-vars scripts', () => {
    const files = [
      'src/layouts/BaseLayout.astro',
      'src/components/Header.astro',
      'src/components/Footer.astro',
      'src/components/NewsletterForm.astro',
    ].map((file) => readFileSync(resolve(root, file), 'utf8')).join('\n');
    expect(files).not.toMatch(/server:defer|transition:|define:vars/);
  });
});
