import { layout, type TemplateInput } from "./layout";
export function digitalOrderEmail(
  input: TemplateInput & { format: string; reference: string },
) {
  return layout(
    input,
    "Your book downloads",
    `Thank you for purchasing AI for Normal People — ${input.format}.`,
    [
      `Order reference: ${input.reference}`,
      "Your purchase includes future editions of this book in the formats you bought. Sign in below to download the latest available files.",
    ],
  );
}
