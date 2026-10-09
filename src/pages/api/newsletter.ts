import type { APIRoute } from 'astro';
import { siteEnv } from '../../lib/runtime-env';
import { handleNewsletterRequest } from '../../lib/http-handlers';
import { logStructured } from '../../lib/logging';

export const prerender = false;

export const ALL: APIRoute = ({ request }) => handleNewsletterRequest(request, {
  env: siteEnv(),
  db: siteEnv().SITE_DB,
  logger: logStructured,
});
