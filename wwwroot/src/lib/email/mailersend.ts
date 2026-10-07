import { sender, type EmailContent } from "./templates/layout";
export type EmailMessage = Omit<EmailContent, 'html'> & { html?: string };
export type EmailOutcome =
  | { kind: "accepted"; messageId: string; status: "queued" | "paused" }
  | { kind: "retry"; code: string; retryAfter: number }
  | { kind: "failed" | "ambiguous"; code: string };
export async function sendEmail(
  key: string,
  to: string,
  message: EmailMessage,
  request: typeof fetch = fetch,
): Promise<EmailOutcome> {
  try {
    const response = await request("https://api.mailersend.com/v1/email", {
      method: "POST",
      redirect: "manual",
      signal: AbortSignal.timeout(15000),
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        from: sender,
        reply_to: sender,
        to: [{ email: to }],
        ...message,
        settings: {
          track_clicks: false,
          track_opens: false,
          track_content: false,
        },
      }),
    });
    if (response.status === 429) {
      const raw = response.headers.get("retry-after") ?? "",
        seconds = Number(raw),
        date = Date.parse(raw);
      const delay = Number.isFinite(seconds)
        ? seconds
        : Number.isFinite(date)
          ? Math.ceil((date - Date.now()) / 1000)
          : 300;
      return {
        kind: "retry",
        code: "rate_limit",
        retryAfter: Math.max(300, Math.min(86400, delay)),
      };
    }
    if ([400, 401, 403, 404, 405, 413, 422].includes(response.status))
      return { kind: "failed", code: `http_${response.status}` };
    if (response.status !== 202)
      return { kind: "ambiguous", code: `http_${response.status}` };
    let body = "";
    const reader = response.body?.getReader();
    let bytes = 0;
    if (reader) {
      const decoder = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.byteLength;
        if (bytes > 32768) {
          await reader.cancel();
          return { kind: "ambiguous", code: "response_too_large" };
        }
        body += decoder.decode(value, { stream: true });
      }
      body += decoder.decode();
    }
    if (body.trim()) {
      let result: { warnings?: { type?: string }[] };
      try {
        result = JSON.parse(body);
      } catch {
        return { kind: "ambiguous", code: "invalid_response" };
      }
      if (
        result.warnings?.some(
          (w) => w.type === "ALL_SUPPRESSED" || w.type === "SOME_SUPPRESSED",
        )
      )
        return { kind: "failed", code: "suppressed" };
    }
    const id = response.headers.get("x-message-id");
    if (!id || !/^[a-zA-Z0-9_-]{1,200}$/.test(id))
      return { kind: "ambiguous", code: "missing_message_id" };
    return {
      kind: "accepted",
      messageId: id,
      status:
        response.headers.get("x-send-paused") === "true" ? "paused" : "queued",
    };
  } catch {
    return { kind: "ambiguous", code: "transport_failure" };
  }
}
