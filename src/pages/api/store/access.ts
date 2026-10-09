import type { APIRoute } from 'astro';
import { siteEnv } from '../../../lib/runtime-env';
import { handleAccess } from '../../../lib/store/http';
export const prerender = false;
export const ALL: APIRoute = ({ request }) => handleAccess(request, siteEnv());
