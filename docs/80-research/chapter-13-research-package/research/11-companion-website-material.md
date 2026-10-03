# Companion Website Material — Dated Product-Specific Research

**Research date / access date:** 2026-10-01 unless otherwise stated.  
**Purpose:** Named, volatile detail that can support `how-to-use-ai.com` but should generally not appear as a product recommendation in the printed chapter.

> These entries are evidence and maintenance leads, **not endorsements or rankings**. Provider pages establish what a provider currently says about its own product; they are not independent audits.

## 1. Why this belongs online

The printed chapter's durable principles are better served by saying:

- capabilities converge;
- privacy controls answer different questions;
- consumer and organisational tiers can differ;
- temporary modes may still retain data;
- deletion, memory and training are separate;
- product names/models/terms/prices change;
- leaving a service may require export/cancellation/revocation.

The website can then show how those principles apply to current services, with an as-of date and links to first-party documentation.

---

# Current product-change evidence

## Google: Bard became Gemini

- **Event:** Google renamed Bard to Gemini in February 2024 and introduced a paid Ultra-related offering/mobile app alongside the change.
- **Why useful:** an accessible example of a prominent AI product changing identity and packaging in a short period.
- **Durable principle:** a printed product list can age even when the underlying company/service continues.
- **Primary source:** https://blog.google/intl/en-africa/products/explore-get-answers/bard-becomes-gemini-try-ultra-10-and-a-new-mobile-app-today/
- **Recheck before publication:** low need for the historical fact; high need if using current Gemini plan names/features.

## OpenAI: ChatGPT model retirements

- **Current-source use:** OpenAI's Help Center documents retirement of multiple ChatGPT models during February–March 2026.
- **Why useful:** product guidance tied to a named model can date faster than guidance tied to capabilities and evaluation habits.
- **Primary source:** https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models
- **Recheck:** yes; model availability changes frequently.

## Anthropic: model deprecations

- **Current-source use:** Anthropic maintains a model-deprecation page and retirement schedule.
- **Why useful:** reinforces that model/product lifecycle changes are normal operational events, not exceptional failures.
- **Primary source:** https://docs.anthropic.com/en/docs/about-claude/model-deprecations
- **Recheck:** yes.

---

# Privacy/data control examples

## OpenAI / ChatGPT — consumer controls

### Current documented distinctions

OpenAI's current help documentation distinguishes:

- whether chats are used to improve models;
- chat-history visibility;
- Temporary Chat;
- file retention linked to chats/projects/custom GPTs;
- shared conversation links; and
- separate memory/personalisation behaviour documented elsewhere in the product/help system.

OpenAI says users can disable model-improvement use through Data Controls. Its retention documentation says deleted chats are generally scheduled for deletion within 30 days, subject to stated exceptions such as de-identification or legal/security obligations. Temporary Chat has separate temporary-retention behaviour rather than meaning that no copy ever exists.

- **Sources:**
  - https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt
  - https://help.openai.com/en/articles/8983778-chat-and-file-retention-in-chatgpt
  - https://help.openai.com/en/articles/7925741-sharing-conversations-and-scheduled-tasks-in-chatgpt
- **Durable lesson:** training, storage, deletion, memory and sharing are different controls.
- **Provider-claim limitation:** first-party description; implementation is not independently verified here.
- **Recheck:** mandatory before publication/website refresh.

### Legal-retention exception — historical example

OpenAI publicly described special preservation obligations arising from US litigation. Its later update states that standard retention practices resumed on **26 September 2025**, while a limited set of historical data remained subject to legal preservation.

- **Source:** https://openai.com/index/response-to-nyt-data-demands/
- **Durable lesson:** stated deletion/retention rules can have legal-hold exceptions; "delete" should not be interpreted as an unconditional promise that no preserved copy can exist under any legal circumstance.
- **Use:** good website evidence; in print, state only the generic principle unless the author wants a dated case.

### Shared conversation links and search indexing — historical example

In July 2025, reporting documented that some ChatGPT shared conversation links made discoverable by users could appear in search results. OpenAI then removed the discoverability experiment/feature.

- **Provider help for current shared links:** https://help.openai.com/en/articles/7925741-sharing-conversations-and-scheduled-tasks-in-chatgpt
- **Contemporary secondary reporting:** https://www.searchenginejournal.com/openai-is-pulling-shared-chatgpt-chats-from-google-search/552671/
- **Durable lesson:** "shared link" is a publication/access decision; readers should not treat shared conversations as private simply because they originated in a private account.
- **Important caveat:** this was about deliberately shared/discoverable links, not arbitrary private chats being indexed.

### Current higher-risk protection feature

OpenAI introduced **Lockdown Mode** and elevated-risk labels to reduce risks from prompt injection/action-taking features for higher-risk users/use cases.

- **Source:** https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/
- **Durable lesson:** once assistants can read external content or act through connected services, evaluation expands from "what will it say?" to "what can it access and do?"
- **Scope:** Chapter 13 only needs the permission/risk lesson; agent mechanics belong later.

---

## Google Gemini — retention and human review

Google's current Gemini Apps Privacy Hub documents multiple controls and retention periods. As accessed on 2026-10-01, it describes:

- Gemini Apps Activity with an auto-delete setting (default described by Google as 18 months, with other choices available);
- some conversations being reviewed by human reviewers for service improvement/safety;
- reviewed conversations being disconnected from the account and retained separately for up to three years under the stated policy; and
- different handling when Gemini Apps Activity is off, including short-term retention for service/safety purposes.

- **Source:** https://support.google.com/gemini/answer/13594961
- **Durable lesson:** turning history/activity off does not necessarily mean zero short-term retention, and human-review retention can be governed separately.
- **Provider-claim limitation:** current first-party policy, not independent verification.
- **Recheck:** mandatory; defaults and wording can change.

---

## Anthropic Claude — consumer vs commercial data rules

Anthropic's current privacy help pages distinguish consumer and commercial use.

### Consumer

Anthropic says consumer chats may be used for model training when the user permits this through the applicable setting/choice, and may also be used in specified safety-review circumstances.

- **Source:** https://privacy.anthropic.com/en/articles/10023580-is-my-data-used-for-model-training

### Commercial/API/organisational products

Anthropic says it does not train its generative models on inputs/outputs from commercial products by default. Its documentation also describes separate treatment where a commercial user deliberately submits feedback; current terms should be checked for the exact feedback-retention period.

- **Source:** https://privacy.anthropic.com/en/articles/7996868-is-my-data-used-for-model-training

### Durable lesson

Do not assume a vendor has one universal data rule across free, paid-personal, business, enterprise and API offerings.

- **Recheck:** mandatory, especially feedback-retention language and plan boundaries.

---

## Microsoft Copilot / Microsoft 365 — consumer-product transition and data distinctions

Microsoft's help pages changed during 2026 as Copilot consumer experiences changed. One older privacy-controls page explicitly warns that it applies to an older Copilot version following an August 2026 app change. That alone is useful evidence for website maintenance: even first-party help articles can become product-version-specific.

- **Legacy/version-warning page:** https://support.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-privacy-controls
- **Current Microsoft 365 home privacy page:** https://support.microsoft.com/en-us/privacy/copilot-in-microsoft-365-apps-for-home-your-data-and-privacy

Microsoft's current Microsoft 365 home documentation states that prompts, responses and file content in the covered Microsoft 365 Copilot experience are not used to train foundation models.

- **Durable lesson:** always identify the exact product/tier/version before applying a privacy statement.
- **Recheck:** mandatory.

---

## Apple Intelligence / Private Cloud Compute — on-device versus cloud is not binary

Apple documents an architecture where some Apple Intelligence processing occurs on-device and some requests may use Private Cloud Compute for larger models, with specific privacy/security claims and technical design material.

- **Private Cloud Compute security guide:** https://security.apple.com/documentation/private-cloud-compute/
- **Australian privacy page:** https://www.apple.com/au/legal/privacy/data/en/intelligence-engine/
- **Durable lesson:** "AI on my phone" does not automatically mean every request is processed only on the device. Evaluate which feature runs where and what the provider says is sent.
- **Provider-claim limitation:** architecture/privacy claims are first-party; PCC has unusually detailed technical documentation, but that is still distinct from a blanket independent guarantee.
- **Recheck:** yes, as feature architecture changes.

---

# Current capability convergence examples

These are **illustrations of convergence**, not recommendations.

## General assistants increasingly span categories

Current mainstream assistants commonly combine subsets of:

- conversational text;
- web/search/research;
- uploaded-document analysis;
- image generation/editing;
- spoken conversation;
- coding assistance;
- memory/personalisation; and
- connected-app actions.

The specific feature matrix changes too quickly for print. The website can maintain a dated matrix whose purpose is to show **overlap**, not to identify a winner.

### Suggested website table fields

| Product | Chat | Research/search | Image | Voice | Files | Coding | Connected actions | Data-control link | As-of date |
| --- |---:|---:|---:|---:|---:|---:|---:| --- | --- |

Do not use a weighted score or overall ranking. A feature tick does not show quality, limits, price or privacy.

---

# Current consumer-plan examples

## Microsoft 365 consumer AI bundling — Australia

Microsoft's Australian Microsoft 365 consumer page currently presents Copilot/AI features within subscription plans and also offers higher-priced Copilot-oriented tiers. Current extracted pricing included Microsoft 365 Personal at **AU$159/year or AU$16/month**, while higher tiers are substantially more expensive and the page describes automatic renewal. Prices are volatile and tax/promotional terms can change.

- **Source:** https://www.microsoft.com/en-au/microsoft-365-copilot/personal
- **Use:** website illustration of AI becoming embedded/bundled into software subscriptions readers may already use.
- **Do not use in print as:** a price comparison or value recommendation.
- **Recheck:** mandatory before any publication.

## Google AI plans — Australia

Google maintains an Australian AI-plan page describing free/paid AI-related storage and feature bundles.

- **Source:** https://one.google.com/intl/en_au/about/google-ai-plans/
- **Use:** evidence that AI capabilities can be bundled with broader cloud/storage services rather than sold as a standalone "AI subscription".
- **Pricing caution:** dynamic page content did not provide sufficiently stable extracted price evidence for this package; manually verify any price before website publication.
- **Recheck:** mandatory.

### Durable lesson from both examples

"Do I already pay for something that includes the capability?" is a sensible pre-purchase question, but bundled access does not answer whether the feature is suitable, private enough, accurate enough or worth any wider subscription price change.

---

# Platform permission and subscription controls

These are useful website links because the instructions change over time.

## Apple

- Review/change app permissions: https://support.apple.com/en-au/guide/iphone/iph168c4bbd5/ios
- App Privacy Report: https://support.apple.com/en-au/102188
- Billing/subscriptions/refunds entry point: https://support.apple.com/en-au/billing

## Android / Google Play

- App permissions: https://support.google.com/googleplay/answer/9431959?hl=en
- Cancel/change subscriptions: https://support.google.com/googleplay/answer/7018481?hl=EN
- Refunds: https://support.google.com/googleplay/answer/15574908?hl=en

Google Play specifically warns that **uninstalling an app does not cancel the subscription**.

## Chrome extensions

- Permission warnings: https://support.google.com/chrome_webstore/answer/186213?hl=en
- Manage extensions: https://support.google.com/chrome_webstore/answer/2664769

### Website opportunity

Maintain a single "review what an AI app can access" page with current platform screenshots and links. Avoid duplicating vendor instructions verbatim.

---

# Dated scam/security examples suitable for an online case library

## Sophos — fleeceware-style AI/chatbot apps (2023)

- **Finding:** Sophos documented five apps presented as ChatGPT-related tools in official mobile stores using aggressive subscription mechanics; the report labelled the pattern "fleeceware".
- **Source:** https://www.sophos.com/en-us/press/press-releases/2023/05/fake-chatgpt-apps-scam-sophos-reports
- **Evidence type:** security-vendor investigation.
- **Limitation:** selected cases, not prevalence across app stores.

## Guardio / Meta — malicious browser extension (2023)

- **Finding:** Guardio documented an AI-themed Chrome extension used to steal Facebook-account access; Meta separately documented malware campaigns using AI-tool lures.
- **Sources:**
  - https://guard.io/labs/fakegpt-2-open-source-turned-malicious-in-another-variant-of-the-facebook-account-stealer
  - https://about.fb.com/news/2023/05/metas-q1-2023-security-reports/
- **Evidence type:** security-vendor + platform threat reporting.
- **Durable lesson:** verify developer and requested browser permissions even when software appears in an official store.

## Mandiant — fake AI image/video sites delivering malware (2025)

- **Finding:** Google Threat Intelligence/Mandiant documented campaigns using fake AI media-generation sites as malware lures.
- **Source:** https://cloud.google.com/blog/topics/threat-intelligence/cybercriminals-weaponize-fake-ai-websites/
- **Evidence type:** threat-intelligence investigation.
- **Durable lesson:** "free premium AI generator" search ads/sites can be the lure itself; get software/services through independently verified official sources.

---

# Australian regulatory/current-law page candidates

## OAIC — commercially available AI products

- https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products
- Published 2024-10-21; updated 2025-01-17 according to the OAIC page.
- Strong source for data-minimisation and privacy due-diligence principles.

## Children's Online Privacy Code

- https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code
- As of 2026-10-01, development is ongoing; the final code is required by 10 December 2026.
- **Recheck after 2026-12-10.**

## Unfair Trading Practices / subscription reforms

- Legislation: https://www.legislation.gov.au/C2026A00064
- Ministerial overview: https://ministers.treasury.gov.au/ministers/andrew-leigh-2025/media-releases/unfair-trading-tricks-and-traps-be-banned
- **Status on 2026-10-01:** enacted/assented in 2026; commencement **1 July 2027** for the relevant reforms. Do not tell readers the new regime is already operative.
- **Recheck near/after 2027-07-01** for regulator guidance and commencement details.

---

# Australian accessibility/current-support page candidates

## Vision Australia

- Accessible writing tools and technology webinar recording (2026-06-23): https://www.visionaustralia.org/community/news/2026-06-23/accessible-writing-tools-and-technology-webinar-recording
- AI newsletter (2026-07-27): https://www.visionaustralia.org/community/news/2026-07-27/vision-australia-ai-newsletter-july-2026

## Google Guided Vision

- https://support.google.com/accessibility/android/answer/18365638?hl=en
- Google explicitly warns that generated descriptions can make mistakes and should not be relied on as a navigation/mobility aid.

### Durable lesson

Accessibility evaluation should ask both "does it enable something useful?" and "what happens when its generated description is wrong?"

---

# Website maintenance rules suggested by the research

For every named product/current-state card:

1. show **Last checked: YYYY-MM-DD**;
2. link the primary policy/help/pricing page;
3. state whether the information is provider-claimed, regulator-established, independently tested, or security-vendor observed;
4. avoid star ratings, "best" labels and blanket safety scores;
5. distinguish consumer/personal from business/enterprise/API versions;
6. do not reduce privacy to "trains / does not train";
7. include cancellation/export/delete links where relevant;
8. annualise recurring costs when displaying them, but show the billing period too;
9. retain historical change notes when a setting/default materially changes;
10. add a visible warning that screenshots and interfaces may have changed since the page was checked.

## Suggested refresh cadence

- **Monthly:** major provider privacy/help pages, product/tier names, pricing pages if published on the site.
- **Quarterly:** platform permission/cancellation instructions, scam/security case additions, feature-convergence matrix.
- **On legal milestones:** Children's Online Privacy Code after 2026-12-10; unfair-trading/subscription reforms approaching 2027-07-01.
- **Event-driven:** major provider rebrand, material privacy default change, product shutdown/model retirement, significant Australian enforcement action.

This current layer is the natural companion to a printed chapter whose advice is intentionally brand-independent.
