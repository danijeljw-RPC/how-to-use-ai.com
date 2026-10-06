import type { APIRoute } from 'astro';
import { siteEnv } from '../../../lib/runtime-env';
import { handleVerify } from '../../../lib/store/http';
export const prerender = false;
export const ALL: APIRoute = ({ request }) => handleVerify(request, siteEnv());
