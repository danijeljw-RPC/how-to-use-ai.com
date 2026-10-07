import { PDFDocument, rgb, type PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { invoiceFont } from './invoice-font';
import { brandAttachments } from '../email/branding';
import { catalogue, priceLabel, type StoreCurrency, type StoreFormat } from './catalogue';
import type { StoreDB, StoreEnv } from './types';
export const invoiceSeller = {
  company: 'RePass Cloud Pty Ltd', product: 'How-To-Use-AI.com',
  email: 'hello@repasscloud.com', abn: '74642243801',
  // Confirm before live invoicing. No GST claim is made in test documents.
  gst: 'unconfirmed' as 'unconfirmed' | 'not-registered' | 'registered',
};
export interface InvoiceSnapshot {
  seller: typeof invoiceSeller;
  session: string; mode: 'test'|'live'; date: number;
  buyer: { email: string; name?: string|null; business_name?:string|null;
    address?: {line1?:string|null;line2?:string|null;city?:string|null;state?:string|null;postal_code?:string|null;country?:string|null}|null;
    tax_ids?: {type:string;value:string|null}[]|null };
  format: StoreFormat; currency: StoreCurrency;
  subtotal: number; discount: number; shipping: number; total: number;
}
export function invoiceNumber(number: number, mode:string) { return `${mode==='test'?'TEST-':''}HTUAI-${String(number).padStart(7,'0')}`; }
export function base64(bytes:Uint8Array) {
  let text=''; for(let i=0;i<bytes.length;i+=8192) text+=String.fromCharCode(...bytes.subarray(i,i+8192));
  return btoa(text);
}
export function fromBase64(value:string) { return Uint8Array.from(atob(value),c=>c.charCodeAt(0)); }
export async function renderInvoice(snapshot:InvoiceSnapshot, number:number, fallbackFont?:()=>Promise<Uint8Array>):Promise<Uint8Array> {
  if(snapshot.mode==='live'&&snapshot.seller.gst!=='not-registered') throw new Error('Confirm GST before live invoicing');
  const doc=await PDFDocument.create();doc.registerFontkit(fontkit);
  let font=await doc.embedFont(fromBase64(invoiceFont),{subset:true});
  const supported=new Set(font.getCharacterSet());
  const buyerText=JSON.stringify(snapshot.buyer);
  if([...buyerText].some(c=>!supported.has(c.codePointAt(0)!))){
    if(!fallbackFont)throw new Error('Invoice font unavailable for buyer details');
    font=await doc.embedFont(await fallbackFont(),{subset:true});
    const fallbackSupported=new Set(font.getCharacterSet());
    if([...buyerText].some(c=>!fallbackSupported.has(c.codePointAt(0)!)))throw new Error('Unsupported invoice character');
  }
  const logo=await doc.embedPng(fromBase64(brandAttachments[0].content));
  const navy=rgb(.025,.075,.17), grey=rgb(.35,.4,.48);
  let page:PDFPage=doc.addPage([595.28,841.89]), y=785;
  function text(value:string,size=12,color=navy) {
    const words=value.replace(/[\r\n\t]+/g,' ').split(' ');let line='';
    for(const word of words){
      // Break long emails/references without overflowing the page.
      for(const part of word.match(/.{1,55}/gu)??['']) {
        const next=line?line+' '+part:part;
        if(font.widthOfTextAtSize(next,size)>490&&line){draw(line,size,color);line=part;}else line=next;
      }
    }
    if(line)draw(line,size,color);
  }
  function draw(value:string,size:number,color:ReturnType<typeof rgb>){
    if(y<85){page=doc.addPage([595.28,841.89]);y=785;}
    page.drawText(value,{x:50,y,size,font,color});y-=size*1.5;
  }
  page.drawImage(logo,{x:50,y:765,width:240,height:48});y=715;
  text(snapshot.mode==='test'?'TEST INVOICE — no money charged':snapshot.seller.gst==='registered'?'Tax Invoice':'Invoice',25);
  text(`${invoiceNumber(number,snapshot.mode)} · PAID`,14);
  text(`Issued: ${new Date(snapshot.date*1000).toISOString().slice(0,10)}`,11,grey);y-=18;
  text(snapshot.seller.company,16);text(`ABN ${snapshot.seller.abn}`);text(snapshot.seller.product);text(snapshot.seller.email);y-=20;
  text('Billed to',16);
  for(const field of [snapshot.buyer.business_name,snapshot.buyer.name,snapshot.buyer.email])if(field)text(field);
  const address=snapshot.buyer.address;
  if(address){for(const line of [address.line1,address.line2,[address.city,address.state,address.postal_code].filter(Boolean).join(' '),address.country])if(line)text(line);}
  for(const tax of snapshot.buyer.tax_ids??[])if(tax.value)text(`${tax.type.toUpperCase()}: ${tax.value}`);
  y-=20;
  text(`AI for Normal People — ${catalogue[snapshot.format].label}`,16);
  const money=(value:number)=>priceLabel(value,snapshot.currency);
  text(`Quantity: 1 · Book price: ${money(snapshot.subtotal)}`);
  if(snapshot.discount)text(`Promotion discount: −${money(snapshot.discount)}`);
  if(snapshot.shipping)text(`Delivery: ${money(snapshot.shipping)}`);
  y-=12;text(`Total paid: ${money(snapshot.total)}`,20);text('Balance due: 0',12);
  if(snapshot.seller.gst==='not-registered')text('Seller is not registered for GST. No GST charged.',11,grey);
  // Registered status requires confirmed per-sale treatment; never assume 1/11 for international sales.
  if(snapshot.mode==='test'&&snapshot.seller.gst==='unconfirmed')text('Test document only. GST treatment has not been configured.',11,grey);
  y-=15;text(`Payment reference: ${snapshot.session}`,10,grey);
  text('Purchase support: how-to-use-ai.com/contact/',11,grey);
  doc.setTitle(`${invoiceNumber(number,snapshot.mode)} — ${snapshot.seller.company}`);
  doc.setAuthor(snapshot.seller.company);
  return doc.save();
}
export async function invoicePDF(db:StoreDB,session:string,mode:string,env?:StoreEnv) {
  const row=await db.prepare('SELECT number,snapshot_json,pdf_base64 FROM store_invoices WHERE session_id=? AND mode=?').bind(session,mode).first<{number:number;snapshot_json:string;pdf_base64:string|null}>();
  if(!row)return null;
  if(!row.pdf_base64){
    const content=base64(await renderInvoice(JSON.parse(row.snapshot_json),row.number,env?.ASSETS?async()=>{
      const response=await env.ASSETS!.fetch(new Request('https://how-to-use-ai.com/fonts/NotoSansJP-Regular.otf'));
      if(!response.ok)throw new Error('Invoice font unavailable');
      return new Uint8Array(await response.arrayBuffer());
    }:undefined));
    await db.prepare('UPDATE store_invoices SET pdf_base64=? WHERE number=? AND pdf_base64 IS NULL').bind(content,row.number).run();
    row.pdf_base64=(await db.prepare('SELECT pdf_base64 FROM store_invoices WHERE number=?').bind(row.number).first<{pdf_base64:string}>())!.pdf_base64;
  }
  return {number:invoiceNumber(row.number,mode),content:row.pdf_base64};
}
