import { defineMiddleware } from 'astro:middleware';
import { canonicalHostRedirect } from './lib/canonical-host';

export const onRequest = defineMiddleware((context, next) => canonicalHostRedirect(context.url) ?? next());
