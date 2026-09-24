import type { APIRoute } from 'astro';
import { siteEnv } from '../../../lib/runtime-env';
import { handleWebhookRequest } from '../../../lib/http-handlers';
import { logStructured } from '../../../lib/logging';

export const prerender = false;

export const ALL: APIRoute = ({ request }) => handleWebhookRequest(request, {
  env: siteEnv(),
  db: siteEnv().SITE_DB,
  logger: logStructured,
});
