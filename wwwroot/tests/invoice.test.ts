import {describe,it,expect} from 'vitest';
import {PDFDocument} from 'pdf-lib';
import {renderInvoice,invoiceSeller,invoicePDF,base64,type InvoiceSnapshot} from '../src/lib/store/invoice';
import {invoiceResponse} from '../src/lib/store/invoice-http';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import {sqliteStore} from './helpers/sqlite-store';
import {tokenHash} from '../src/lib/store/tokens';
const snapshot:InvoiceSnapshot={seller:invoiceSeller,session:'cs_test_sample',mode:'test',date:1791356400,buyer:{email:'buyer@example.com',business_name:'Example Company Pty Ltd',name:'Zoë García',address:{line1:'123 Example Street',city:'Adelaide',state:'SA',postal_code:'5000',country:'AU'},tax_ids:[{type:'au_abn',value:'12345678901'}]},format:'bundle',currency:'aud',subtotal:1499,discount:300,shipping:0,total:1199};
function setup(){const sql=new DatabaseSync(':memory:');for(const name of ['0002_digital_store.sql','0004_store_invoices.sql','0005_invoice_stripe_references.sql'])sql.exec(readFileSync(new URL(`../migrations/${name}`,import.meta.url),'utf8'));return {sql,db:sqliteStore(sql)};}
describe('site purchase invoices',()=>{
 it('renders a branded paid PDF with business details and discounted total',async()=>{
  const bytes=await renderInvoice(snapshot,1);
  expect((await PDFDocument.load(bytes)).getPageCount()).toBe(1);
  expect(Buffer.from(bytes).toString('latin1')).not.toContain('/Subtype /Image');
  mkdirSync('.wrangler/invoice-preview',{recursive:true});writeFileSync('.wrangler/invoice-preview/TEST-HTUAI-0000001.pdf',bytes);
 });
 it('preserves an issued PDF and denies access to another buyer or mode',async()=>{
  const {sql,db}=setup();
  sql.prepare('INSERT INTO store_invoices(session_id,mode,email,snapshot_json) VALUES (?,?,?,?)').run(snapshot.session,'test',snapshot.buyer.email,JSON.stringify(snapshot));
  const first=await invoicePDF(db,snapshot.session,'test');
  expect(await invoicePDF(db,snapshot.session,'test')).toEqual(first);
  const session='a'.repeat(64);const hash=await tokenHash(session);
  sql.prepare("INSERT INTO store_auth(token_hash,mode,email,kind,expires_at,created_at) VALUES (?,'test',?,'session',?,0)").run(hash,'other@example.com',Math.floor(Date.now()/1000)+1000);
  const req=new Request(`https://how-to-use-ai.com/api/store/invoice/?order=${snapshot.session}`,{headers:{cookie:`__Host-book-session=${session}`}});
  expect((await invoiceResponse(req,{SITE_DB:db,STORE_MODE:'test'})).status).toBe(404);
  sql.prepare('UPDATE store_auth SET email=?').run(snapshot.buyer.email);
  const response=await invoiceResponse(req,{SITE_DB:db,STORE_MODE:'test'});
  expect(response.status).toBe(200);expect(response.headers.get('cache-control')).toContain('no-store');
  expect(base64(new Uint8Array(await response.arrayBuffer()))).toBe(first?.content);
  expect((await invoiceResponse(req,{SITE_DB:db,STORE_MODE:'live'})).status).toBe(401);
  sql.close();
 });
 it('renders Japanese business details using the licensed fallback font',async()=>{
  const bytes=await renderInvoice({...snapshot,buyer:{email:'buyer@example.com',business_name:'株式会社テスト'}},2,async()=>new Uint8Array(readFileSync('public/fonts/NotoSansJP-Regular.otf')));
  expect((await PDFDocument.load(bytes)).getPageCount()).toBe(1);
 });
 it('does not invent GST treatment for live invoices',async()=>{
  await expect(renderInvoice({...snapshot,mode:'live'},1)).rejects.toThrow('GST');
 });
});
