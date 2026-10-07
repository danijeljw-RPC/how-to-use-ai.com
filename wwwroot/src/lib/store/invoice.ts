import { PDFDocument, rgb, type PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { invoiceFont } from './invoice-font';
import { invoiceLogo } from './invoice-logo';
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
  const logo=await doc.embedPng(fromBase64(invoiceLogo));
  const navy=rgb(.025,.075,.17), grey=rgb(.36,.41,.48), line=rgb(.86,.89,.92), pale=rgb(.95,.97,.99);
  let page:PDFPage=doc.addPage([595.28,841.89]);
  const money=(value:number)=>priceLabel(value,snapshot.currency);
  const write=(value:string,x:number,y:number,size=11,color=navy)=>page.drawText(value,{x,y,size,font,color});
  const right=(value:string,y:number,size=11,color=navy)=>write(value,545-font.widthOfTextAtSize(value,size),y,size,color);
  const rule=(y:number)=>page.drawLine({start:{x:50,y},end:{x:545,y},thickness:.7,color:line});
  function block(values:string[],x:number,y:number,width:number){
    for(const value of values){
      let row='';
      for(const word of value.replace(/[\r\n\t]+/g,' ').match(/.{1,40}(?:\s|$)|\S{1,40}/gu)??[]){
        const next=row+word;
        if(font.widthOfTextAtSize(next,11)>width&&row){if(y<150){page=doc.addPage([595.28,841.89]);y=780;}write(row.trim(),x,y);y-=16;row=word;}else row=next;
      }
      if(row){if(y<150){page=doc.addPage([595.28,841.89]);y=780;}write(row.trim(),x,y);y-=16;}
    }
    return y;
  }
  page.drawRectangle({x:0,y:716,width:595.28,height:125.89,color:navy});
  page.drawImage(logo,{x:50,y:743,width:230,height:46});
  right('Invoice',766,30,rgb(1,1,1));right('Paid',740,12,rgb(.65,.84,.96));
  rule(712);
  write(invoiceNumber(number,'live'),50,690,13);
  right(new Intl.DateTimeFormat('en-AU',{day:'numeric',month:'long',year:'numeric',timeZone:'Australia/Adelaide'}).format(new Date(snapshot.date*1000)),690);
  const sellerLines=[snapshot.seller.company,`ABN ${snapshot.seller.abn}`,snapshot.seller.product,snapshot.seller.email];
  const sellerWidth=Math.max(...sellerLines.map(value=>font.widthOfTextAtSize(value,11)));
  const sellerX=545-sellerWidth;
  write('Bill to',50,647,11,grey);write('From',sellerX,647,11,grey);
  const sellerEnd=block(sellerLines,sellerX,625,sellerWidth+1);
  const address=snapshot.buyer.address;
  const buyerEnd=block([snapshot.buyer.business_name,snapshot.buyer.name,snapshot.buyer.email,address?.line1,address?.line2,address?[address.city,address.state,address.postal_code].filter(Boolean).join(' '):null,address?.country,...(snapshot.buyer.tax_ids??[]).filter(t=>t.value).map(t=>`${t.type==='au_abn'?'ABN':t.type.toUpperCase()}: ${t.value}`)].filter((v):v is string=>!!v),50,625,225);
  let y=Math.min(sellerEnd,buyerEnd)-35;
  if(y<380){page=doc.addPage([595.28,841.89]);write('Invoice · continued',50,785,20);y=730;}
  page.drawRectangle({x:50,y:y-12,width:495,height:32,color:pale});
  write('Description',62,y,11,grey);write('Qty',382,y,11,grey);right('Amount',y);
  y-=45;write('AI for Normal People',62,y,14);write('1',388,y);right(money(snapshot.subtotal),y);
  write(catalogue[snapshot.format].label,62,y-20,11,grey);
  y-=48;rule(y);y-=28;
  write('Subtotal',345,y);right(money(snapshot.subtotal),y);y-=24;
  if(snapshot.discount){write('Discount',345,y);right(`−${money(snapshot.discount)}`,y);y-=24;}
  if(snapshot.shipping){write('Delivery',345,y);right(money(snapshot.shipping),y);y-=24;}
  page.drawRectangle({x:315,y:y-36,width:230,height:49,color:navy});
  write('Total paid',329,y-17,13,rgb(1,1,1));
  const total=money(snapshot.total);write(total,531-font.widthOfTextAtSize(total,17),y-17,17,rgb(1,1,1));
  y-=64;write('Balance due',345,y);right(money(0),y);
  if(snapshot.seller.gst==='not-registered')write('No GST charged. Seller is not registered for GST.',50,y-45,10,grey);
  rule(104);write('Thank you for your purchase.',50,82,12);
  write('Purchase support · hello@repasscloud.com',50,61,10,grey);
  right('how-to-use-ai.com',61,10);
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
