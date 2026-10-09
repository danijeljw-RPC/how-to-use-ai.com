# Signed paperback: countries, prices and shipping

Edit the main checkout: `/Users/danijeljw/Developer/how-to-use-ai.com`.
Saving source files does not update the live website; build and deploy after edits.

## Enable or disable a delivery country

Open `src/lib/store/catalogue.ts` and edit `signedDeliveryCountries`:

```ts
{ code: 'AU', name: 'Australia', enabled: true },
{ code: 'NZ', name: 'New Zealand', enabled: true },
{ code: 'US', name: 'United States', enabled: true },
{ code: 'CA', name: 'Canada', enabled: false },
```

Change Canada to `enabled: true` to offer four countries. Change a country to
`enabled: false` to stop new checkouts for that destination. Existing completed
orders and invoices remain intact.

This list controls the country cards, server validation and delivery-description
names. You no longer need to edit a ternary country label in `StoreOffers.astro`,
an allow-list in `checkout.ts`, or a TypeScript country union separately.

For a new destination, add its ISO two-letter country code and display name to
this list. Stripe must support that shipping-address country. Then configure
prices and shipping for each physical edition you want to sell there.

## Set book prices and shipping

The same file contains two independent configurations:

- `signedBookPricing`: signed paperback (`signed`).
- `signedColourBookPricing`: signed paperback (colour edition) (`signed_colour`).

A country card appears only if that edition has **both** a book price and a
shipping rate for the currency selected by the customer. For example:

```ts
prices: { cad: 5500 },
shipping: { CA: { cad: 1200 } },
```

This means CAD 55.00 for the book and CAD 12.00 shipping to Canada. It does not
offer Canadian shipping in AUD unless you also add `CA: { aud: ... }` and an AUD
book price. Removing a country/currency shipping entry hides that combination.
Shipping `0` means free delivery; a book price must be positive.

Amounts are integers in currency minor units: `5500` = AUD 55.00. JPY is
zero-decimal, so `5950` = JPY 5,950. Selectable currencies are derived automatically from `single` (PDF/EPUB prices).
Add a matching `bundle` price for every currency; TypeScript checks that both
digital maps cover the same currencies. Adding a currency only to physical prices
does not add it to the selector. JPY and KRW use whole units when formatting prices.

### Configured prices

| Currency | Signed paperback | Signed colour paperback |
| --- | ---: | ---: |
| AUD | 45.00 | 55.00 |
| NZD | 48.00 | 58.00 |
| USD | 31.00 | 41.00 |
| GBP | 24.00 | 34.00 |
| EUR | 28.00 | 38.00 |
| JPY | 4,950 | 5,950 |
| CAD | 45.00 | 55.00 |

Both editions currently have shipping rates AU/AUD 12.00, NZ/NZD 15.00,
US/USD 8.00, GB/GBP 6.00, DE/EUR 7.00, JP/JPY 1,320 and CA/CAD 12.00.
Only AU, NZ and US are enabled initially. Stored rates alone do not enable a country.

## Product IDs and master switch

In `wrangler.jsonc`:

```json
"STORE_SIGNED_ENABLED": "true",
"STORE_PRODUCT_SIGNED": "prod_VOJlq52Ml8JvLM",
"STORE_PRODUCT_SIGNED_COLOUR": "prod_VOsxDHYrXKS1Uu"
```

Set `STORE_SIGNED_ENABLED` to `"false"` to disable both physical editions.
Each edition needs its own Product ID in the matching Stripe test/live account.
Missing a Product ID hides that edition. Website code supplies the price; no
separate Stripe Price ID is required.

## Validate and publish

From the repository root:

```sh
npm test
npm run check
npm run build
npx wrangler d1 migrations apply SITE_DB --remote
npx wrangler deploy
```

Migration 0007 adds `signed_colour` to the stored checkout formats while retaining
existing attempts and locks. Subsequent country/price edits do not need a new
database migration. Commit reviewed changes to main so future deployments include them.

## Test a destination

1. Open `/downloads/` and select its configured currency (AUD, NZD or USD).
2. Check the standard and colour prices and shipping amounts separately.
3. Start checkout for each edition. Stripe should show the correct Product and
   permit only the selected delivery country.
4. In test mode use `4242 4242 4242 4242`, a future expiry and any three-digit CVC.
5. Verify the saved order format/address, invoice and buyer confirmation.
6. Verify the plain-text physical-order notification to danijel@repasscloud.com
   identifies the edition and includes the delivery address. Test orders are not dispatched.

A book discount does not waive shipping. Physical purchases grant no digital
downloads. Completed physical purchases can be repeated; concurrent physical
checkouts for the same email share a temporary reservation.

Changing `[attempt.country as ...]` in `checkout.ts` only changes a TypeScript
assertion. The array still holds one destination, ensuring an AU shipping rate
cannot be used for a US address. Keep that restriction.
