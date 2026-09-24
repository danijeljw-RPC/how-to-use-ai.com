# Launch Site SEO Fixes Plan

## Status

Proposed — awaiting author review. No site code has been changed yet.

## Purpose

Fix the problems a Seobility on-page check of `https://how-to-use-ai.com/` found on 2026-09-24 (on-page score 81%, one critical issue). Only fix what helps real readers or search engines. Skip changes that exist only to satisfy the checker.

Source report: <https://www.seobility.net/en/seocheck/check/?url=https%3A%2F%2Fhow-to-use-ai.com%2F&mode=standard>

## Findings, Verified Against the Live Site and Source

Each finding was checked with `curl` against production and against `wwwroot/src` on 2026-09-24.

| # | Seobility finding | Severity | Verified cause | Action |
|---|---|---|---|---|
| 1 | HTTP → HTTPS redirect not configured correctly | Error (critical) | `http://how-to-use-ai.com/` returns `200` over plain HTTP. `http://www.` redirects to `http://` apex, not HTTPS. `canonical-host.ts` only rewrites the hostname and keeps the scheme. | Fix (P1) |
| 2 | Charset missing from HTTP header | Warning | Responses send `Content-Type: text/html` with no `; charset=utf-8`. The `<meta charset>` is present. | Fix (P1) |
| 3 | No favicon linked | Warning | `public/favicon.svg` exists and serves as `image/svg+xml`, but `BaseLayout.astro` never links it. | Fix (P1) |
| 4 | No Apple touch icon | Warning | Nothing in `public/` or `<head>`. | Fix (P2) |
| 5 | Title too short (175 of 580 px) | Warning | The homepage passes `title={site.name}`, so the layout outputs only "How To Use AI.com". | Fix (P2), wording needs the author (OI-0003) |
| 6 | H1 words not found in page text | Warning | H1: "AI, explained for people who have other things to do." The body copy never uses "explained", "people", "things" or "other". | Fix (P2), copy change |
| 7 | Only 216 words (under 250) | Error | The homepage is short: a hero, one principle and the series list. | Fix (P2), copy change, linked to #6 |
| 8 | Too many `<strong>` tags (7) | Warning | 5 are series-list titles (`index.astro`), 1 is the Callout title and 1 is the footer brand name. None of them is real emphasis. | Fix (P3) |
| 9 | Anchor text used more than once | Warning | `/` is linked by both the wordmark and "Home". `/contact/` is in both the header and footer navigation. This is normal site chrome. | Accept, no change |
| 10 | No external links | Nice to have | True. | Author decision (OI-0003) |
| 11 | Few social sharing options | Nice to have | True. Sharing widgets add third-party scripts and trackers, which clash with the privacy page and site weight. | Recommend decline (OI-0003) |
| 12 | "Himmelimherzen" shown as the HTML page label | — | Not on our site. It appears to come from the checker's own UI. | Ignore |

Areas that scored full marks (canonical, meta description, headings, HTTPS assets, compression, response time, backlinks) need no work.

## Proposed Changes

### P1 — Server and head fixes (no copy decisions needed)

1. **HTTPS redirect (finding 1)**
   - Primary fix: turn on **Always Use HTTPS** for the `how-to-use-ai.com` zone in Cloudflare (SSL/TLS → Edge Certificates). This is a dashboard setting, not code, so the author must do it or explicitly authorise it via API.
   - Defence in depth: extend `canonicalHostRedirect` so that both `http:` and `www.` requests get one `301` to `https://how-to-use-ai.com<path>`. This avoids a two-hop chain. Local dev (`localhost`) must be left alone.
   - Add `Strict-Transport-Security: max-age=31536000` to HTML responses, only once the redirect is confirmed working. Do not add `preload` until the author opts in, because preload is hard to reverse.
2. **Charset header (finding 2):** in `src/middleware.ts`, when the response `Content-Type` is `text/html` with no charset, rewrite it to `text/html; charset=utf-8`.
3. **Favicon (finding 3):** add `<link rel="icon" href="/favicon.svg" type="image/svg+xml" />` to `BaseLayout.astro`.

### P2 — Head and homepage content

4. **Apple touch icon (finding 4):** export a 180×180 `public/apple-touch-icon.png` from `favicon.svg` (solid background, no transparency) and link it with `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`.
5. **Homepage title (finding 5):** give the homepage its own longer title instead of the bare site name. The shared `site.name` stays as it is. Proposed wording (needs approval, OI-0003):
   - "How To Use AI.com — Plain-English AI Books for Beginners" (~450 px)
   - Adding `og:image` pointing at the Book 1 cover is optional but cheap, and it improves how shared links look.
6. **H1 alignment and word count (findings 6–7):** add about 60–100 words of real homepage copy that naturally repeats the H1's terms. For example, a short "Who this is for" paragraph: "Book 1 is written for people who have never used AI… explained in plain English… for people with other things to do." Draw on existing Book 1 framing (everyday examples such as Netflix, Google Maps and spam filters). Do not use keyword stuffing. The final copy needs author approval.

### P3 — Markup tidy-up

7. **Strong tags (finding 8):** switch the series-list titles in `index.astro` from `<strong>` to a styled `<span class="series-title">`, keeping the same look via `global.css`. Optionally do the same for the footer brand name. The Callout title can stay.

### Not planned

- Social sharing widgets (finding 11): recommend declining, see OI-0003.
- Deduplicating header and footer anchors (finding 9): standard navigation, and removing it would hurt usability.
- External links (finding 10): only if the author wants a real outbound reference (see OI-0003).

## Files Expected to Change

- `wwwroot/src/lib/canonical-host.ts` — HTTPS and www redirect in one hop
- `wwwroot/src/middleware.ts` — charset rewrite, and HSTS once the redirect is verified
- `wwwroot/src/layouts/BaseLayout.astro` — favicon, apple-touch-icon, optional `og:image`, per-page title override
- `wwwroot/src/pages/index.astro` — homepage title, extra copy, series-list markup
- `wwwroot/src/styles/global.css` — style for the series-list title span
- `wwwroot/public/apple-touch-icon.png` — new
- `wwwroot/tests/canonical-host.test.ts` — cases for `http://apex`, `http://www`, `https://www` and localhost
- `wwwroot/tests/security.test.ts` or a new middleware test — charset and HSTS headers
- `changelog.md`

Cloudflare dashboard (outside the repo): the zone's **Always Use HTTPS** setting.

## Dependencies on ADRs

- `ADR-03-0003-launch-site-cloudflare-workers.md` — site runs as an Astro Worker on custom domains
- `ADR-03-0004-production-site-and-stripe-test-mode.md` — production host is the `how-to-use-ai.com` apex
- `ADR-04-0001-book-01-style-baseline.md` — homepage copy must follow the plain-English, non-hype tone

No new ADR is needed unless the author chooses HSTS preload (hard to reverse) or adopts a site-wide SEO policy.

## Dependencies on OIs

- `docs/03-publishing/open-issues/OI-0003.md` — homepage title wording, new homepage copy, external links, social sharing, HSTS preload

## Risks

- A wrong redirect could loop or break local dev. Mitigation: unit tests, only redirect when the host is the production domain, and `curl` checks after deploy.
- Turning on HSTS before HTTPS works everywhere could lock visitors out. Mitigation: add HSTS only after verifying, with no `preload`.
- New homepage copy could drift into SEO-speak or hype. Mitigation: author approves the wording and it follows the style guide.
- The worktree is based on `main`. The chapter branches only change the preview PDF under `wwwroot`, so there should be no conflicts.

## Acceptance Criteria

- `curl -sI http://how-to-use-ai.com/` → `301` to `https://how-to-use-ai.com/`
- `curl -sI http://www.how-to-use-ai.com/` → one `301` to `https://how-to-use-ai.com/`
- HTML responses include `Content-Type: text/html; charset=utf-8`
- The homepage `<head>` links `favicon.svg` and `apple-touch-icon.png`, and both return `200`
- The homepage title is 50–60 characters and approved by the author
- The homepage has ≥ 250 words, and the H1's key terms appear in the body copy
- ≤ 6 `<strong>`/`<b>` tags on the homepage
- `npm test` and `npm run build` pass in `wwwroot`
- A Seobility re-check shows no errors (remaining warnings are only the intentionally declined items)

## Proposed Commit Message

```text
publishing: fix launch site https redirect, charset, favicon and homepage seo
```
