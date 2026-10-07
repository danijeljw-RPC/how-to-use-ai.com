import { message,privateHeaders } from './http';
import { getBuyer,cookieSession } from './auth';
import { invoicePDF,fromBase64 } from './invoice';
import { storeMode,type StoreEnv } from './types';
export async function invoiceResponse(request:Request,env:StoreEnv){
  if(request.method!=='GET')return message(405,'Use GET.');
  if(!env.SITE_DB)return message(503,'Invoices are unavailable.');
  const mode=storeMode(env), buyer=await getBuyer(env.SITE_DB,cookieSession(request),mode,Math.floor(Date.now()/1000));
  if(!buyer)return message(401,'Sign in to your book library first.');
  const id=new URL(request.url).searchParams.get('order')??'';
  const owner=await env.SITE_DB.prepare('SELECT number FROM store_invoices WHERE session_id=? AND mode=? AND email=?').bind(id,mode,buyer.email).first();
  if(!owner)return message(404,'Invoice not found.');
  const invoice=await invoicePDF(env.SITE_DB,id,mode,env);
  if(!invoice)return message(404,'Invoice not found.');
  return new Response(fromBase64(invoice.content),{headers:{...privateHeaders,'content-type':'application/pdf','content-disposition':`attachment; filename="${invoice.number}.pdf"`}});
}
