# Readable signed-book pricing

Move existing author prices/shipping from Wrangler JSON strings into signedBookPricing in src/lib/store/catalogue.ts. Preserve author changes to digital AUD/NZD amounts and all unrelated work, including root price-convert.sh. No changes to API contract shape, activation flags or supported delivery countries (AU/NZ). Checkout uses typed partial currency maps and validates positive integer book amounts/nonnegative integer shipping; absent rates stay unavailable.

Update checkout, environment types/example, Wrangler configuration, signed-order regression test and store documentation. Regenerate binding declarations. Validate actual checkout parameters against centralized amounts and selected address country, disabled state, unsupported countries and missing rates. Run check/tests/build. No deployment or broad commit. User authorised autonomous decisions. No ADR/OI dependencies.

Validation complete: signed Checkout regression failed before implementation because no environment JSON existed; after migration 95 tests pass, Astro check has zero errors/warnings/hints and build is clean. Existing supported-country and readiness restrictions retained. No deployment performed.
