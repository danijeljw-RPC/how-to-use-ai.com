import type { APIRoute } from 'astro';
import { siteEnv } from '../../../lib/runtime-env';
import { handleStoreWebhook } from '../../../lib/store/http';
export const prerender = false;
export const ALL: APIRoute = ({ request }) => handleStoreWebhook(request, siteEnv());
