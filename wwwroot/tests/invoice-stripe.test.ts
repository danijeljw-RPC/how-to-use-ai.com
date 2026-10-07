import {describe,it,expect,vi} from 'vitest';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync} from 'node:fs';
import {sqliteStore} from './helpers/sqlite-store';
import {syncInvoiceReferences} from '../src/lib/store/invoice-stripe';
function setup(payment:string|null='pi_reference'){
 const sql=new DatabaseSync(':memory:');for(const name of ['0002_digital_store.sql','0004_store_invoices.sql','0005_invoice_stripe_references.sql'])sql.exec(readFileSync(new URL(`../migrations/${name}`,import.meta.url),'utf8'));
 sql.prepare("INSERT INTO store_orders(session_id,mode,email,format,payment_id,amount,currency,status,created_at) VALUES ('cs_reference','test','buyer@example.com','pdf',?,1099,'aud','paid',1000)").run(payment);
 sql.prepare("INSERT INTO store_invoices(session_id,mode,email,snapshot_json,pdf_base64) VALUES ('cs_reference','test','buyer@example.com','{}','unchanged')").run();
 const client={updateSession:vi.fn().mockResolvedValue({}),updatePayment:vi.fn().mockResolvedValue({})};
 return {sql,env:{SITE_DB:sqliteStore(sql),STORE_MODE:'test',STRIPE_SECRET_KEY:'sk_test_fixture'},client};
}
describe('invoice references in Stripe',()=>{
 it('writes the visible invoice number to both objects once without changing the PDF',async()=>{
  const {sql,env,client}=setup();await syncInvoiceReferences(env,{client,now:1000});await syncInvoiceReferences(env,{client,now:2000});
  expect(client.updatePayment).toHaveBeenCalledTimes(1);
  expect(client.updatePayment).toHaveBeenCalledWith('pi_reference',expect.objectContaining({description:'HTUAI-0000001 · AI for Normal People · How-To-Use-AI.com',metadata:{invoice_number:'HTUAI-0000001',site_invoice_key:'TEST-HTUAI-0000001',checkout_session_id:'cs_reference'}}));
  expect(client.updateSession).toHaveBeenCalledWith('cs_reference',expect.objectContaining({invoice_number:'HTUAI-0000001'}));
  expect(sql.prepare('SELECT pdf_base64,stripe_synced_at FROM store_invoices').get()).toEqual({pdf_base64:'unchanged',stripe_synced_at:1000});sql.close();
 });
 it('retries denied/failed writes independently without granting or revoking purchases',async()=>{
  const {sql,env,client}=setup();client.updatePayment.mockRejectedValueOnce({statusCode:403});
  await syncInvoiceReferences(env,{client,now:1000});expect(sql.prepare('SELECT sync_error FROM store_invoices').get()?.sync_error).toBe('permission_denied');
  await syncInvoiceReferences(env,{client,now:1100});expect(client.updatePayment).toHaveBeenCalledTimes(1);
  await syncInvoiceReferences(env,{client,now:1301});expect(client.updatePayment).toHaveBeenCalledTimes(2);
  expect(sql.prepare('SELECT status FROM store_orders').get()?.status).toBe('paid');sql.close();
 });
 it('rotates a failed backlog so later invoices are not starved',async()=>{
  const {sql,env,client}=setup();
  for(let i=2;i<=11;i++){
   sql.prepare("INSERT INTO store_orders(session_id,mode,email,format,payment_id,amount,currency,status,created_at) VALUES (?,'test','buyer@example.com','pdf',?,1099,'aud','paid',1000)").run(`cs_${i}`,`pi_${i}`);
   sql.prepare("INSERT INTO store_invoices(session_id,mode,email,snapshot_json) VALUES (?,'test','buyer@example.com','{}')").run(`cs_${i}`);
  }
  client.updateSession.mockRejectedValue(new Error('provider unavailable'));
  await syncInvoiceReferences(env,{client,now:1000});
  expect(client.updateSession).toHaveBeenCalledTimes(10);
  await syncInvoiceReferences(env,{client,now:1300});
  expect(client.updateSession.mock.calls[10][0]).toBe('cs_11');sql.close();
 });
 it('links a free order to its Checkout session without inventing a payment',async()=>{
  const {sql,env,client}=setup(null);await syncInvoiceReferences(env,{client,now:1000});expect(client.updateSession).toHaveBeenCalledTimes(1);expect(client.updatePayment).not.toHaveBeenCalled();sql.close();
 });
});
