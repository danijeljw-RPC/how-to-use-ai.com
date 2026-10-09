import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
function stripe(args) {
  return JSON.parse(
    execFileSync('stripe', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }),
  );
}
const identity = stripe(['whoami', '--format', 'json']);
if (
  identity.account_id !== 'acct_1SJ3Xb4BF2uOrrJb' ||
  !identity.test_mode_key?.available
)
  throw new Error(
    'This script only runs in the authorised Peach Freestyle test account.',
  );
const existing = stripe(['products', 'list', '--limit', '100']).data;
const formats = {
  pdf: 'PDF download',
  epub: 'EPUB download',
  bundle: 'PDF + EPUB bundle',
};
const result = {
  mode: 'test',
  account: identity.account_id,
  products: {},
  checkedCurrencies: [],
};
for (const [format, label] of Object.entries(formats)) {
  let product = existing.find(
    (p) =>
      p.active &&
      p.metadata?.project === 'how-to-use-ai.com' &&
      p.metadata?.store_format === format,
  );
  if (!product)
    product = stripe([
      'products',
      'create',
      '--name',
      `AI for Normal People — ${label}`,
      '-d',
      'metadata[project]=how-to-use-ai.com',
      '-d',
      `metadata[store_format]=${format}`,
      '--idempotency',
      `how-to-use-ai-test-product-${format}-v1`,
    ]);
  if (product.livemode) throw new Error('Live product rejected.');
  result.products[format] = product.id;
}
const amounts = {
  usd: [799, 1099],
  gbp: [599, 799],
  eur: [699, 899],
  jpy: [1199, 1599],
  brl: [4099, 5599],
  cad: [1099, 1499],
  mxn: [13900, 19900],
  aud: [1149, 1549],
};
if (process.argv.includes('--validate-checkout')) {
  for (const [currency, prices] of Object.entries(amounts)) {
    for (const format of Object.keys(formats)) {
      const amount = prices[format === 'bundle' ? 1 : 0];
      const session = stripe([
        'checkout',
        'sessions',
        'create',
        '--mode',
        'payment',
        '--success-url',
        'https://how-to-use-ai.com/checkout/success/',
        '--cancel-url',
        'https://how-to-use-ai.com/checkout/cancel/',
        '--currency',
        currency,
        '-d',
        `line_items[0][price_data][currency]=${currency}`,
        '-d',
        `line_items[0][price_data][product]=${result.products[format]}`,
        '-d',
        `line_items[0][price_data][unit_amount]=${amount}`,
        '-d',
        'line_items[0][price_data][tax_behavior]=inclusive',
        '-d',
        'line_items[0][quantity]=1',
        '-d',
        'metadata[project]=how-to-use-ai-catalogue-validation',
      ]);
      if (
        session.livemode ||
        session.amount_subtotal !== amount ||
        session.currency !== currency
      )
        throw new Error('Checkout validation mismatch.');
      stripe(['checkout', 'sessions', 'expire', session.id]);
      result.checkedCurrencies.push({ currency, format, amount });
      console.log(
        `Verified ${format} ${currency.toUpperCase()} ${amount} minor units; test session expired.`,
      );
    }
  }
}
writeFileSync(
  new URL('../stripe-test-store.json', import.meta.url),
  JSON.stringify(result, null, 2) + '\n',
);
for (const [format, id] of Object.entries(result.products))
  console.log(`STORE_PRODUCT_${format.toUpperCase()}=${id}`);
