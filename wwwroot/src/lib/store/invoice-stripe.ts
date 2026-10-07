import {createStripeClient} from '../stripe';
import {invoiceNumber} from './invoice';
import {storeMode,paymentModeReady,type StoreEnv} from './types';
interface ReferenceClient {
 updateSession(id:string,metadata:Record<string,string>):Promise<unknown>;
 updatePayment(id:string,data:{metadata:Record<string,string>;description:string}):Promise<unknown>;
}
export async function syncInvoiceReferences(env:StoreEnv,options:{session?:string;client?:ReferenceClient;now?:number}={}){
 if(!env.SITE_DB||!paymentModeReady(env))return;
 const db=env.SITE_DB,mode=storeMode(env),now=options.now??Math.floor(Date.now()/1000);
 const stripe=createStripeClient(env.STRIPE_SECRET_KEY!,{timeout:5000,maxNetworkRetries:0});
 const client=options.client??{
  updateSession:(id,metadata)=>stripe.checkout.sessions.update(id,{metadata}),
  updatePayment:(id,data)=>stripe.paymentIntents.update(id,data),
 } satisfies ReferenceClient;
 const rows=(await db.prepare(`SELECT i.number,i.session_id,o.payment_id FROM store_invoices i JOIN store_orders o ON o.session_id=i.session_id AND o.mode=i.mode WHERE i.mode=? AND i.stripe_synced_at IS NULL AND i.next_sync_at<=? ${options.session?'AND i.session_id=?':''} ORDER BY i.next_sync_at,i.number LIMIT 10`).bind(mode,now,...(options.session?[options.session]:[])).all<{number:number;session_id:string;payment_id:string|null}>()).results;
 for(const row of rows){
  const claimed=await db.prepare('UPDATE store_invoices SET next_sync_at=? WHERE number=? AND stripe_synced_at IS NULL AND next_sync_at<=?').bind(now+600,row.number,now).run();
  if(!claimed.meta.changes)continue;
  const reference=invoiceNumber(row.number,'live');
  const metadata={invoice_number:reference,site_invoice_key:invoiceNumber(row.number,mode),checkout_session_id:row.session_id};
  try{
   await client.updateSession(row.session_id,metadata);
   if(row.payment_id)await client.updatePayment(row.payment_id,{metadata,description:`${reference} · AI for Normal People · How-To-Use-AI.com`});
   await db.prepare('UPDATE store_invoices SET stripe_synced_at=?,sync_error=NULL WHERE number=?').bind(now,row.number).run();
  }catch(error){
   const denied=typeof error==='object'&&error!==null&&'statusCode' in error&&error.statusCode===403;
   await db.prepare('UPDATE store_invoices SET next_sync_at=?,sync_error=? WHERE number=?').bind(now+300,denied?'permission_denied':'stripe_update_failed',row.number).run();
   console.error(JSON.stringify({event:'invoice_stripe_reference_failed',invoice:reference,mode,code:denied?'permission_denied':'stripe_update_failed'}));
  }
 }
}
