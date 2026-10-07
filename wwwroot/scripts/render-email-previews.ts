import { mkdirSync, writeFileSync } from "node:fs";
import { signInEmail } from "../src/lib/email/templates/sign-in";
import { digitalOrderEmail } from "../src/lib/email/templates/digital-order";
import { signedOrderEmail } from "../src/lib/email/templates/signed-order";
const input = {
  siteUrl: "https://example.invalid",
  loginUrl:
    "https://example.invalid/store/verify/?token=PREVIEW-NOT-A-REAL-TOKEN",
};
mkdirSync(".wrangler/email-previews", { recursive: true });
for (const [name, message] of Object.entries({
  signIn: signInEmail(input),
  digitalOrder: digitalOrderEmail({
    ...input,
    format: "PDF + EPUB bundle",
    reference: "PREVIEW-NOT-A-PURCHASE",
  }),
  signedOrder: signedOrderEmail({
    ...input,
    reference: "PREVIEW-NOT-A-PURCHASE",
    book: "AUD 45.00",
    shipping: "AUD 12.00",
    total: "AUD 57.00",
    country: "AU",
  }),
})) {
  writeFileSync(`.wrangler/email-previews/${name}.html`, message.html);
  writeFileSync(`.wrangler/email-previews/${name}.txt`, message.text);
}
