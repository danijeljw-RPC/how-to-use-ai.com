import type { APIRoute } from 'astro';
import { siteEnv } from '../../../lib/runtime-env';
import { storeResponse } from '../../../lib/store/http';
import { invoiceResponse } from '../../../lib/store/invoice-http';
export const prerender=false;
export const ALL:APIRoute=({request})=>storeResponse(()=>invoiceResponse(request,siteEnv()));
