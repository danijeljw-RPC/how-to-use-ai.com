import { describe, it, expect, vi } from "vitest";
import { sendEmail } from "../src/lib/email/mailersend";
import { signInEmail } from "../src/lib/email/templates/sign-in";
const message = signInEmail({
  siteUrl: "https://how-to-use-ai.com",
  loginUrl: "https://how-to-use-ai.com/store/verify/?token=example",
});
describe("MailerSend contract", () => {
  it("sends complete project content with fixed sender and no tracking", async () => {
    const send = vi
      .fn()
      .mockResolvedValue(
        new Response(null, {
          status: 202,
          headers: { "x-message-id": "mail-1" },
        }),
      );
    expect(
      await sendEmail("fixture", "buyer@example.com", message, send),
    ).toEqual({ kind: "accepted", messageId: "mail-1", status: "queued" });
    expect(send.mock.calls[0][1].redirect).toBe("manual");
    const body = JSON.parse(send.mock.calls[0][1].body);
    expect(body.from.email).toBe("hello@repasscloud.com");
    expect(body.reply_to.email).toBe("hello@repasscloud.com");
    expect(body.settings).toEqual({
      track_clicks: false,
      track_opens: false,
      track_content: false,
    });
    expect(body.html).toContain("Sign in");
    expect(body.text).toContain("15 minutes");
  });
  it.each([401, 403, 422])(
    "retains definitive %s rejection",
    async (status) => {
      expect(
        (
          await sendEmail(
            "fixture",
            "buyer@example.com",
            message,
            async () => new Response(null, { status }),
          )
        ).kind,
      ).toBe("failed");
    },
  );
  it.each([500, 503, 302])("does not retry uncertain %s", async (status) => {
    expect(
      (
        await sendEmail(
          "fixture",
          "buyer@example.com",
          message,
          async () => new Response(null, { status }),
        )
      ).kind,
    ).toBe("ambiguous");
  });
  it("classifies connection loss and missing message IDs as uncertain", async () => {
    expect(
      (
        await sendEmail("fixture", "buyer@example.com", message, async () => {
          throw new Error("offline");
        })
      ).kind,
    ).toBe("ambiguous");
    expect(
      (
        await sendEmail(
          "fixture",
          "buyer@example.com",
          message,
          async () => new Response(null, { status: 202 }),
        )
      ).kind,
    ).toBe("ambiguous");
  });
  it("honours rate limits without resending immediately", async () => {
    expect(
      await sendEmail(
        "fixture",
        "buyer@example.com",
        message,
        async () =>
          new Response(null, {
            status: 429,
            headers: { "retry-after": "600" },
          }),
      ),
    ).toEqual({ kind: "retry", code: "rate_limit", retryAfter: 600 });
  });
  it("records paused acceptance and suppressed failure", async () => {
    expect(
      await sendEmail(
        "fixture",
        "buyer@example.com",
        message,
        async () =>
          new Response(null, {
            status: 202,
            headers: { "x-message-id": "paused-1", "x-send-paused": "true" },
          }),
      ),
    ).toEqual({ kind: "accepted", messageId: "paused-1", status: "paused" });
    expect(
      (
        await sendEmail("fixture", "buyer@example.com", message, async () =>
          Response.json(
            { warnings: [{ type: "ALL_SUPPRESSED" }] },
            { status: 202 },
          ),
        )
      ).kind,
    ).toBe("failed");
  });
});

it("templates escape content and reject off-site or unsafe sign-in links", () => {
  expect(() =>
    signInEmail({
      siteUrl: "https://how-to-use-ai.com",
      loginUrl: "https://example.com/login",
    }),
  ).toThrow();
  expect(() =>
    signInEmail({
      siteUrl: "https://how-to-use-ai.com",
      loginUrl: "javascript:alert(1)",
    }),
  ).toThrow();
});
