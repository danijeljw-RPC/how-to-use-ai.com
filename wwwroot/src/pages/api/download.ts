import type { APIRoute } from 'astro';
import { siteEnv } from '../../lib/runtime-env';
import { downloadFile } from '../../lib/store/download';
import { storeResponse, message } from '../../lib/store/http';
export const prerender = false;
export const ALL: APIRoute = ({ request, url }) => storeResponse(async () => {
  if (request.method !== 'GET') return message(405, 'Use GET.');
  const env = siteEnv();
  if (!env.SITE_DB) return message(503, 'Downloads are unavailable.');
  return downloadFile({ db: env.SITE_DB, env, token: url.searchParams.get('token') ?? '' });
});
