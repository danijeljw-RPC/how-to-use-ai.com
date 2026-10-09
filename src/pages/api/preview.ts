import type { APIRoute } from 'astro';
import { siteEnv } from '../../lib/runtime-env';
import { handlePreviewRequest } from '../../lib/http-handlers';

export const prerender = false;

export const ALL: APIRoute = ({ request }) => handlePreviewRequest(request, siteEnv());
