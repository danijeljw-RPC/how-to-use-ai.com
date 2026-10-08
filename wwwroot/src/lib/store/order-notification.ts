import { isPhysicalFormat } from './catalogue';
import { catalogue, priceLabel } from './catalogue';
import { invoiceNumber, type InvoiceSnapshot } from './invoice';
import type { EmailMessage } from '../email/mailersend';

export function orderNotification(snapshot: InvoiceSnapshot, number: number, shippingJSON: string | null, payment: string | null): EmailMessage {
  const reference = invoiceNumber(number, 'live');
  const physical = isPhysicalFormat(snapshot.format);
  const shipping = shippingJSON ? JSON.parse(shippingJSON) : null;
  const address = shipping?.address;
  const money = (amount: number) => priceLabel(amount, snapshot.currency).replace(/\u00a0/g, ' ');
  const stripePath = payment ? `payments/${payment}` : `no-cost-orders/${snapshot.session}`;
  return {
    subject: `${snapshot.mode === 'test' ? '[TEST] ' : ''}${physical ? 'Physical book order — dispatch required' : 'New book order'} — ${reference}`,
    text: [
      snapshot.mode === 'test' ? 'TEST ORDER — do not dispatch.' : 'New completed order.',
      `Invoice: ${reference}`,
      `Order / Checkout Session: ${snapshot.session}`,
      `Date: ${new Date(snapshot.date * 1000).toISOString()}`,
      `Buyer: ${snapshot.buyer.email}`,
      `Buyer name: ${snapshot.buyer.name ?? snapshot.buyer.business_name ?? 'Not supplied'}`,
      `Product: AI for Normal People — ${catalogue[snapshot.format].label}`,
      'Quantity: 1',
      `Subtotal: ${money(snapshot.subtotal)}`,
      `Discount: ${money(snapshot.discount)}`,
      `Shipping: ${money(snapshot.shipping)}`,
      `Total: ${money(snapshot.total)}`,
      ...(physical ? [
        '', 'DELIVERY DETAILS', `Recipient: ${shipping?.name ?? 'Not supplied'}`,
        ...['line1','line2','city','state','postal_code','country'].map(key => address?.[key]).filter(Boolean),
        'Fulfilment: manual publisher dispatch.',
      ] : []),
      '', `Stripe: https://dashboard.stripe.com/${snapshot.mode === 'test' ? 'test/' : ''}${stripePath}`,
    ].join('\n'),
  };
}
