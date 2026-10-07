export const currencies = [
  'usd',
  'gbp',
  'eur',
  'jpy',
  'brl',
  'cad',
  'mxn',
  'aud',
  'nzd'
] as const;
export type StoreCurrency = (typeof currencies)[number];
export type Asset = 'pdf' | 'epub';
export type StoreFormat = Asset | 'bundle' | 'signed';
export const catalogue = {
  pdf: { label: 'PDF download', assets: ['pdf'] as Asset[] },
  epub: { label: 'EPUB download', assets: ['epub'] as Asset[] },
  bundle: { label: 'PDF + EPUB bundle', assets: ['pdf', 'epub'] as Asset[] },
  signed: { label: 'Signed paperback', assets: [] as Asset[] },
};
// Author-approved values in Stripe minor units. JPY is zero-decimal.
const single = {
  usd: 799,
  gbp: 599,
  eur: 699,
  jpy: 1199,
  brl: 4099,
  cad: 1099,
  mxn: 13900,
  aud: 1099,
  nzd: 1299
};
const bundle = {
  usd: 1099,
  gbp: 799,
  eur: 899,
  jpy: 1599,
  brl: 5599,
  cad: 1499,
  mxn: 19900,
  aud: 1499,
  nzd: 1799,
};
// Signed-paperback amounts in minor units (JPY uses whole yen).
// A delivery destination also needs a rate in the buyer's selected currency.
// Checkout currently supports AU/NZ only; other supplied rates are retained
// here for a future expansion. Add an approved NZ rate before offering NZ.
export const signedBookPricing = {
  prices: {
    aud: 4500,
    nzd: 4800,
    usd: 3100,
    gbp: 2400,
    eur: 2800,
    jpy: 4950,
    cad: 4500,
  },
  shipping: {
    AU: { aud: 1200 },
    NZ: { nzd: 1500 },
    US: { usd: 800 },
    GB: { gbp: 600 },
    DE: { eur: 700 },
    JP: { jpy: 1320 },
    CA: { cad: 1200 },
  },
} as const satisfies {
  prices: Partial<Record<StoreCurrency, number>>;
  shipping: Record<string, Partial<Record<StoreCurrency, number>>>;
};

export function amountFor(
  format: Exclude<StoreFormat, 'signed'>,
  currency: StoreCurrency,
): number {
  return (format === 'bundle' ? bundle : single)[currency];
}
export function priceLabel(amount: number, currency: StoreCurrency) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: currency.toUpperCase(),
    currencyDisplay: 'code',
  }).format(amount / (currency === 'jpy' ? 1 : 100));
}
export function isStoreFormat(value: string): value is StoreFormat {
  return Object.hasOwn(catalogue, value);
}
export function isCurrency(value: string): value is StoreCurrency {
  return currencies.includes(value as StoreCurrency);
}
