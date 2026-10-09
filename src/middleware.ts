import { defineMiddleware } from 'astro:middleware';
import { canonicalHostRedirect } from './lib/canonical-host';
import { withSiteHeaders } from './lib/response-headers';

export const onRequest = defineMiddleware(async (context, next) =>
  canonicalHostRedirect(context.url) ?? withSiteHeaders(await next(), context.url));
