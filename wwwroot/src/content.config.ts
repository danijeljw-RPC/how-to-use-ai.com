import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().min(1).max(100),
    description: z.string().min(1).max(180),
    order: z.number().int().positive(),
  }),
});

const legal = defineCollection({
  loader: glob({
    pattern: ['privacy-policy.md', 'terms-of-service.md', 'refund-policy.md'],
    base: new URL('../../repasscloud-legal-pack-2026-09-24/how-to-use-ai.com', import.meta.url),
  }),
});

export const collections = { articles, legal };
