import {brandAttachments} from "../branding";
export const sender = {
  email: "hello@repasscloud.com",
  name: "How-To-Use-AI.com · RePass Cloud",
};
export interface EmailContent {
  subject: string;
  html: string;
  text: string;
  attachments?: typeof brandAttachments;
}
export interface TemplateInput {
  siteUrl: string;
  loginUrl: string;
}
export function escape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
export function safeUrl(value: string, siteUrl: string) {
  const url = new URL(value),
    site = new URL(siteUrl);
  if (
    url.protocol !== "https:" ||
    site.protocol !== "https:" ||
    url.origin !== site.origin ||
    url.username ||
    url.password
  )
    throw new Error("Invalid email URL");
  return url.href;
}
export function layout(
  input: TemplateInput,
  subject: string,
  intro: string,
  details: string[] = [],
): EmailContent {
  const login = safeUrl(input.loginUrl, input.siteUrl),
    library = safeUrl(
      new URL("/downloads/", input.siteUrl).href,
      input.siteUrl,
    ),
    support = safeUrl(
      new URL("/contact/?subject=purchase-support", input.siteUrl).href,
      input.siteUrl,
    );
  const home = safeUrl(new URL("/", input.siteUrl).href, input.siteUrl);
  const wordmark = "cid:email-wordmark";
  const favicon = "cid:email-favicon";
  const publisher = "How-To-Use-AI.com is operated and published by RePass Cloud Pty Ltd, ABN 74642243801.";
  const expiry =
    "This sign-in link expires in 15 minutes and can be used once.";
  const notes = `${expiry} Request a fresh link from your book library. Download links last ten minutes. If you did not request this email, you can ignore it.`;
  const text = [
    subject,
    intro,
    ...details,
    "Sign in to your book library:",
    login,
    notes,
    `Book library: ${library}`,
    `Purchase support: ${support}`,
    "You can also reply to hello@repasscloud.com.",
    publisher,
  ].join("\n\n");
  const html = `<!doctype html><html lang="en"><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(subject)}</title></head><body style="margin:0;background:#eef3f9;color:#061532;font-family:Arial,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td align="center" style="padding:24px 12px"><table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;background:white"><tr><td style="padding:24px;background:#061532;color:white;font-size:18px;font-weight:bold"><a href="${escape(home)}" style="text-decoration:none;color:white"><img src="${escape(wordmark)}" alt="how-to-use-ai.com" width="260" height="52" style="display:block;border:0;width:260px;max-width:100%;height:auto;color:white"></a></td></tr><tr><td style="padding:28px;line-height:1.6"><h1 style="font-size:26px;line-height:1.2;margin:0 0 24px">${escape(subject)}</h1><p>${escape(intro)}</p>${details.map((d) => `<p>${escape(d)}</p>`).join("")}<p style="margin:28px 0"><a href="${escape(login)}" style="display:inline-block;background:#061532;color:white;text-decoration:none;padding:14px 20px;border-radius:4px;font-weight:bold">Sign in to your book library</a></p><p style="font-size:14px;color:#5e6f89">${escape(notes)}</p><p style="font-size:14px">If the button does not work, copy this address into your browser:<br><a style="overflow-wrap:anywhere;word-break:break-all;color:#0369a1" href="${escape(login)}">${escape(login)}</a></p><p><a href="${escape(library)}">Your book library</a> · <a href="${escape(support)}">Purchase support</a></p><p style="font-size:14px">You can also reply to hello@repasscloud.com.</p></td></tr><tr><td style="padding:20px 28px;border-top:1px solid #d3dbe7;font-size:12px;color:#5e6f89"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td width="40" style="vertical-align:top"><img src="${escape(favicon)}" alt="ai" width="28" height="28" style="display:block;border:0"></td><td style="font-size:12px;line-height:1.6;color:#5e6f89">${escape(publisher)}</td></tr></table></td></tr></table></td></tr></table></body></html>`;
  return { subject, html, text, attachments: brandAttachments };
}
