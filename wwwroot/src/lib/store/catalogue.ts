export type StoreCurrency = (typeof currencies)[number];
export type Asset = 'pdf' | 'epub';
export type PhysicalFormat = 'signed' | 'signed_colour';
export type StoreFormat = Asset | 'bundle' | PhysicalFormat;
export const physicalFormats = ['signed', 'signed_colour'] as const;
export function isPhysicalFormat(format: string): format is PhysicalFormat {
  return physicalFormats.some(value => value === format);
}
// This single list controls both the visible offers and server-side validation.
export const signedDeliveryCountries = [
  { code: 'AU', name: 'Australia', enabled: true },
  { code: 'NZ', name: 'New Zealand', enabled: true },
  { code: 'US', name: 'United States', enabled: true },
  { code: 'CA', name: 'Canada', enabled: false },
  { code: 'GB', name: 'United Kingdom', enabled: false },
  { code: 'DE', name: 'Germany', enabled: false },
  { code: 'JP', name: 'Japan', enabled: false },
] as const;
export type SignedCountry = (typeof signedDeliveryCountries)[number]['code'];
export const catalogue = {
  pdf: { label: 'PDF download', assets: ['pdf'] as Asset[] },
  epub: { label: 'EPUB download', assets: ['epub'] as Asset[] },
  bundle: { label: 'PDF + EPUB bundle', assets: ['pdf', 'epub'] as Asset[] },
  signed: { label: 'Signed paperback', assets: [] as Asset[] },
  signed_colour: { label: 'Signed paperback (colour edition)', assets: [] as Asset[] },
};
// Author-approved values in Stripe minor units. JPY and KRW are zero-decimal.
const single = {
  aud: 899,       // A$8.99
  usd: 649,       // US$6.49
  eur: 549,       // €5.49
  gbp: 499,       // £4.99
  cad: 899,       // C$8.99
  nzd: 1099,      // NZ$10.99
  sgd: 799,       // S$7.99
  hkd: 4900,      // HK$49
  jpy: 990,       // ¥990
  cny: 3900,      // CN¥39
  inr: 59900,     // ₹599
  krw: 8900,      // ₩8,900
  myr: 2590,      // RM25.90
  thb: 19900,     // ฿199
  idr: 10900000,  // Rp109,000
  php: 39900,     // ₱399
  chf: 490,       // CHF 4.90
  sek: 5900,      // 59 kr
  nok: 5900,      // 59 kr
  dkk: 3900,      // 39 kr
  pln: 2490,      // 24.90 zł
  czk: 13900,     // 139 Kč
  brl: 2990,      // R$29,90
  mxn: 11900,     // MX$119
  zar: 10500,     // R105
  aed: 2300       // AED 23
};

// Derive selectable/accepted currencies from the configured digital prices.
export const currencies = Object.keys(single) as (keyof typeof single)[];

const bundle = {
  aud: 1299,       // A$12.99
  usd: 899,        // US$8.99
  eur: 799,        // €7.99
  gbp: 699,        // £6.99
  cad: 1299,       // C$12.99
  nzd: 1599,       // NZ$15.99
  sgd: 1099,       // S$10.99
  hkd: 6900,       // HK$69
  jpy: 1390,       // ¥1,390
  cny: 5500,       // CN¥55
  inr: 84900,      // ₹849
  krw: 12900,      // ₩12,900
  myr: 3590,       // RM35.90
  thb: 27900,      // ฿279
  idr: 14900000,   // Rp149,000
  php: 54900,      // ₱549
  chf: 690,        // CHF 6.90
  sek: 7900,       // 79 kr
  nok: 7900,       // 79 kr
  dkk: 5500,       // 55 kr
  pln: 3490,       // 34.90 zł
  czk: 19900,      // 199 Kč
  brl: 4290,       // R$42,90
  mxn: 16900,      // MX$169
  zar: 14900,      // R149
  aed: 3200        // AED 32
} satisfies Record<keyof typeof single, number>;
// Signed-paperback amounts in minor units (JPY uses whole yen).
// A delivery destination also needs a rate in the buyer's selected currency.
// Enable destinations in signedDeliveryCountries above; unused rates remain available for expansion.
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

export const signedColourBookPricing = {
  prices: { aud: 5500, nzd: 5800, usd: 4100, gbp: 3400, eur: 3800, jpy: 5950, cad: 5500 },
  shipping: {
    AU: { aud: 1200 }, NZ: { nzd: 1500 }, US: { usd: 800 },
    GB: { gbp: 600 }, DE: { eur: 700 }, JP: { jpy: 1320 }, CA: { cad: 1200 },
  },
} as const satisfies {
  prices: Partial<Record<StoreCurrency, number>>;
  shipping: Record<string, Partial<Record<StoreCurrency, number>>>;
};

export function amountFor(
  format: Exclude<StoreFormat, PhysicalFormat>,
  currency: StoreCurrency,
): number {
  return (format === 'bundle' ? bundle : single)[currency];
}
export function priceLabel(amount: number, currency: StoreCurrency) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: currency.toUpperCase(),
    currencyDisplay: 'code',
  }).format(amount / (['jpy', 'krw'].includes(currency) ? 1 : 100));
}
export function isStoreFormat(value: string): value is StoreFormat {
  return Object.hasOwn(catalogue, value);
}
export function isCurrency(value: string): value is StoreCurrency {
  return currencies.includes(value as StoreCurrency);
}
