import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL ?? 'https://how-to-use-ai.com';

export default defineConfig({
  site: siteUrl,
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  // Sessions are unused; disabling them stops the adapter auto-provisioning a KV namespace.
  session: false,
  integrations: [sitemap({
    customPages: [
      new URL('/blog/ai-is-not-magic/', siteUrl).href,
      new URL('/blog/why-ai-feels-suddenly-new/', siteUrl).href,
    ],
  })],
  trailingSlash: 'always',
});
