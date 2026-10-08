import { layout, type TemplateInput } from "./layout";
export function signedOrderEmail(
  input: TemplateInput & {
    reference: string;
    edition?: string;
    total: string;
    book?: string;
    shipping?: string;
    country?: string;
  },
) {
  return layout(
    input,
    "Your signed-book order",
    `Thank you for ordering ${input.edition ?? "a signed paperback"} of AI for Normal People.`,
    [
      `Order reference: ${input.reference}`,
      ...(input.book ? [`Book: ${input.book}`] : []),
      ...(input.shipping ? [`Delivery: ${input.shipping}`] : []),
      `Total paid: ${input.total}`,
      ...(input.country ? [`Delivery country: ${input.country}`] : []),
      "Your order is recorded for manual dispatch. We will contact you with delivery details. This order does not include digital downloads.",
    ],
  );
}
