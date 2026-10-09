import { layout, type TemplateInput } from "./layout";
export function signInEmail(input: TemplateInput) {
  return layout(
    input,
    "Your book store sign-in link",
    "Sign in to view your purchases, download your latest editions or buy a book.",
  );
}
