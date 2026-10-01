# 03 — Research for Evaluating a New AI Tool

## Summary

The current draft's checklist is a strong start but too short for paid, connected, sensitive, or consequential use. The best editorial approach is probably **two-tiered**:

- a short, memorable everyday screen before trying a low-risk tool;
- a deeper screen before paying, uploading personal/confidential material, connecting accounts, giving broad permissions, or relying on the output for consequential work.

This is an editorial possibility, not the final checklist.

The strongest durable sequence is:

1. **Need** — what exact task is this solving, and do I already have something that can do it?
2. **Trust** — who makes it, is the source/install location genuine, and does the company provide identifiable support/policy information?
3. **Data** — what will it collect, retain, share, train on, remember, or send to third parties?
4. **Access** — what permissions/accounts can it see or act on, and are those permissions proportionate to the feature?
5. **Reliability** — how will I judge output quality, sources and limitations?
6. **Cost/exit** — what happens after the trial, how is usage billed/limited, how do I cancel, export and delete?
7. **Suitability** — is it appropriate for the user's age, accessibility needs, workplace context and intended commercial use?

The later writer should compress this into the book's voice rather than reproduce the list mechanically.

---

# 1. Need: "What specific task do I need it for?"

This remains the most important first question.

Why it works:

- reduces novelty-driven subscriptions;
- prevents a category list becoming a shopping list;
- makes comparison concrete;
- gives the user a success criterion;
- encourages checking built-in tools first.

A weak answer is "I want to use more AI." A stronger answer is "I want to summarise long meeting transcripts" or "I want hands-free drafting because typing is difficult".

## Suggested research-backed test

Before evaluating product claims, define:

- input: what will I give it?
- desired output: what should it produce/do?
- frequency: one-off, occasional or recurring?
- consequence of failure: annoying, costly, private, safety-relevant?
- existing alternative: can a current app/device do it?

This turns "best AI" into a fit-for-purpose question.

---

# 2. Trial/value: "Can I test it without committing?"

The draft's free/low-cost trial question is useful but needs a trap-aware qualification: a free trial is not risk-free if it requires payment details, auto-renews, makes cancellation difficult, or uses a credit system that is hard to understand.

Australian subscription research supports checking cancellation **before** signing up rather than waiting until the end of a trial.

Sources:
- CPRC, *Let Me Out — Subscription trap practices in Australia*, 2024-08-20: https://cprc.org.au/report/let-me-out/
- Westpac, *Subscription shock...*, 2025-08-11: https://www.westpac.com.au/about-westpac/media/media-releases/2025/11-august1/

## Durable questions

- Is a card required for the trial?
- What date does paid billing begin?
- Monthly, weekly, annual, credit/token, or usage-based?
- Is the advertised price introductory?
- Is the renewal amount shown clearly?
- Where is cancellation located?
- Can cancellation be completed through the same platform used to subscribe?
- Is unused credit lost?
- Are generation/usage limits visible before purchase?

**Recheck before publication:** Australian subscription-contract reforms commence 2027-07-01 and may change the legal baseline, but these questions remain useful regardless of law.

---

# 3. Company and legitimacy

The current draft needs a stronger legitimacy check. Fake AI apps/sites/extensions often borrow famous names or visual branding.

Australian Competition and Consumer Commission guidance for checking whether a business is genuine recommends checking more than the business's own claims/reviews and warns about fake reviews.

Source: ACCC, *Checking a business is genuine* (current): https://www.accc.gov.au/consumers/stay-protected/checking-a-business-is-genuine

## Useful checks for a beginner

- Who is the developer/company shown in the app store or website footer?
- Does the company name match the brand being claimed?
- Is the install link reached from the provider's genuine website or official app-store listing?
- Is there a real privacy policy and terms page naming the legal entity?
- Are contact/support details plausible?
- Is the domain slightly misspelled or using an unexpected top-level domain?
- Are all reputation claims only on the seller's own page?
- Does the app claim to be "official" without the developer identity matching?

## Important caveat

A small/new company is not inherently suspicious. A large company is not inherently privacy-preserving. The point is identity/transparency, not brand prestige.

---

# 4. Privacy and data handling

The draft currently compresses this into "what happens to the information you put into it?" That is the right umbrella question, but research shows it needs decomposition because different controls affect different data flows.

## Questions worth researching/checking

### Training
- Are conversations/inputs used to improve/train models?
- Is this default on or opt-in?
- Can the user turn it off?
- Does feedback override the usual training choice for the associated conversation?

### Retention
- How long are ordinary chats/files retained?
- What happens after deletion?
- Are temporary/private chats still retained for safety/security?
- Are human-reviewed conversations retained separately/longer?
- Can legal obligations extend retention?

### Human access
- Can employees or contractors review a subset of interactions for safety, quality or feedback?
- Is reviewed content de-identified?
- How long can reviewed content remain?

### Memory/personalisation
- Does the product maintain a separate memory/profile?
- Does deleting a chat remove remembered facts?
- Does turning off memory delete existing memories or only stop future use?

### Connected services
- Can it read email, files, calendar, browser pages, screen content, repositories or cloud drives?
- Is access read-only or can it take actions?
- Does access persist until revoked?
- Do third-party apps have their own terms/retention?

### Sharing/third parties
- Is user data shared with subprocessors, advertising partners or analytics services?
- Can conversation-sharing links be forwarded?
- Is a "shared link" effectively public to anyone who obtains it?

### Export/deletion
- Can the user export history/data?
- Is account deletion different from chat deletion?
- Are saved files/projects/shared links deleted separately?

Representative current provider evidence is in `04-privacy-and-data.md` and `11-companion-website-material.md`.

---

# 5. Permissions: is requested access proportionate?

"Excessive permissions" should be explained functionally rather than with a blanket list.

Examples:

- microphone access for a voice conversation feature: expected;
- camera access for visual assistance: expected while using that feature;
- contacts access for a simple image generator: harder to justify;
- permission to read every page visited by a browser extension: high-impact and deserves scrutiny;
- calendar access for an assistant that schedules meetings: plausible, but action permissions raise consequence.

Current platform guidance shows users can review and revoke permissions.

Sources:
- Apple Support (AU), *Control access to hardware features on iPhone*: https://support.apple.com/en-au/guide/iphone/iph168c4bbd5/ios
- Google/Android, *Change app permissions on your Android phone*: https://support.google.com/googleplay/answer/9431959?hl=en
- Chrome Web Store Help, *Permissions requested by apps and extensions*: https://support.google.com/chrome_webstore/answer/186213?hl=en

## Durable principle

> Judge a permission against the feature you are using. The question is not "does this app ask for permissions?" but "does this feature reasonably need this level of access?"

## Browser-extension special case

Chrome documents permissions that can include browsing history, tabs and browsing activity, bookmarks, copied text, and more. An AI extension that can read web pages may legitimately need broad page access, but that also means it can potentially see sensitive content loaded in those pages. This is a high-value beginner warning.

---

# 6. Accuracy and reliability

The chapter should not create a fake binary of "general chat = unreliable; research AI = reliable." Research-oriented systems can still misquote, misunderstand, use weak sources, or attach a citation that does not support the exact generated claim.

## Useful evaluation questions

- Does the tool expose sources when the task needs them?
- Can the user open those sources directly?
- Does the cited source actually support the generated statement?
- Does it distinguish current web information from model-generated synthesis?
- Does it clearly label uncertainty/limitations?
- Can it answer a known test question accurately?
- Can it follow a constraint consistently across several attempts?
- Can the user reproduce/verify the result independently?

## Known-answer testing: useful but limited

The draft's recommendation to try a question the user already knows is sound as an interface/reliability smoke test. It can reveal obvious hallucination or instruction-following problems.

But a tool passing easy known-answer tests does **not** prove it will be accurate on unfamiliar or complex tasks. The later writer should say that this is a first check, not certification.

## Sources/citations test

A useful mini-demonstration for the website/book:

1. ask for a factual answer with sources;
2. open the strongest cited source;
3. check whether the exact claim is present/supported;
4. note whether the AI overstated the source.

This directly connects Chapter 13 back to Chapter 4 and Chapter 11.

---

# 7. Paid versus free reliability

No robust general evidence supports "paid is always more accurate".

Provider pricing pages show paid plans commonly alter model access, limits, modalities, speed, storage, integrations and advanced features. Those differences may improve performance for specific tasks. But a subscription label does not eliminate hallucination or source mismatch.

**Suggested explanation:**

> Pay for a capability or limit you can identify, not for a vague assumption that money turns generated output into truth.

This is a durable consumer-value principle.

---

# 8. Cost transparency

Questions that matter:

- Is currency clear (especially if billed in USD to an Australian user)?
- Does the displayed price include GST?
- Monthly versus annual commitment?
- Auto-renewal?
- Introductory price versus renewal price?
- Per-user versus household/family?
- AI only for subscription owner?
- Usage caps?
- Credits/tokens: what does one credit buy, and does cost vary by model/task?
- Are extra credits automatically purchased or manually added?
- Is cancellation possible immediately without losing already-paid access?

Named examples belong in the companion-site file because these details change quickly.

---

# 9. Exit test: how do I stop using it?

A powerful improvement to the current checklist is to ask about exit **before adoption**.

The user may need to:

- cancel recurring billing;
- export chat/history/files;
- delete chats;
- delete saved files/projects/memories separately;
- delete account data;
- revoke Google/Microsoft/Apple sign-in/app access;
- remove browser/mobile permissions;
- uninstall extensions/apps;
- remove shared conversation links;
- migrate useful prompts/templates/workflows.

This makes switching costs explicit and helps prevent the "I can always leave later" assumption.

Google Play explicitly notes that uninstalling an app does **not** cancel its subscription.

Source: Google Play Help, *Cancel, pause, or change a subscription on Google Play*: https://support.google.com/googleplay/answer/7018481?hl=EN

---

# 10. Age suitability and children

Age should be a first-class evaluation dimension, not an afterthought.

The OAIC is developing Australia's Children's Online Privacy Code, due to be finalised and registered by 2026-12-10. The code targets online services likely to be accessed by children and sits under the Privacy Act framework.

Source: OAIC, *Children's Online Privacy Code*: https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code

The eSafety Commissioner found in a 2026 representative survey of 1,950 Australian children aged 10–17 that 78% had used an AI assistant, 8% an AI companion, and among children who had used assistants/companions, 32% reported sharing personal or potentially sensitive information and 20% reported potentially inappropriate or harmful interactions.

Source: eSafety Commissioner, *Talking to machines...*: https://www.esafety.gov.au/research/talking-to-machines-childrens-experiences-with-ai-assistants-and-companions

## Beginner-facing checks for parents/carers

- minimum age in current terms;
- whether the product is a functional assistant or relational companion;
- parental/family controls;
- whether personalisation/memory encourages disclosure;
- content safeguards;
- reporting/blocking controls;
- whether chats can become sexual/relational;
- how data/training works for teen/child accounts;
- whether payment/in-app purchases are possible.

**Recheck before publication:** provider age requirements and the final Australian Children's Online Privacy Code.

---

# 11. Accessibility

A tool's accessibility should be checked both as:

1. **interface accessibility** — can the user actually operate the app with screen readers, keyboard navigation, captions, voice control, contrast/font needs?
2. **AI-enabled accessibility benefit** — can it describe images, transcribe speech, translate, simplify text or enable hands-free interaction?

Vision Australia actively covers adaptive technology and AI for blindness/low vision, illustrating that this is a practical user need rather than a speculative feature category.

Sources:
- Vision Australia, *Accessible Writing Tools and Technology — webinar recording*, 2026-06-23: https://www.visionaustralia.org/community/news/2026-06-23/accessible-writing-tools-and-technology-webinar-recording
- Vision Australia AI newsletters: https://www.visionaustralia.org/community/news/2026-07-27/vision-australia-ai-newsletter-july-2026

Product documentation should also be checked for warnings. Google's Guided Vision, for example, states that descriptions can contain errors and should not be used as a mobility/navigation or obstacle-detection aid.

---

# 12. Work use

Keep this short in Chapter 13 to avoid duplicating Chapter 7.

Evaluation needs to include:

- employer policy;
- whether the account is personal or organisation-managed;
- whether consumer and business data terms differ;
- what connected workplace data the tool can access;
- whether administrators can access/export conversations;
- whether confidential/customer data is approved for that service.

Representative providers document materially different consumer/commercial data practices; see `04-privacy-and-data.md`.

---

# 13. Commercial use

Keep this as a reminder only because Chapter 8 owns the detail.

A reader intending to publish/sell generated outputs should check current:

- output-use/commercial rights;
- attribution requirements if any;
- restrictions on inputs;
- indemnity/business terms where relevant;
- stock/training/licensing implications discussed in Chapter 8.

---

# 14. Recommended two-tier editorial model

## Tier A — everyday/low-stakes trial
Possible dimensions:
- What task?
- Is this the genuine app/site/company?
- Can I test it without sensitive data?
- Does it do the task well enough for me to judge?
- What will it cost after the trial?

## Tier B — before paying, connecting, or sharing sensitive data
Add:
- training/retention/human review;
- permissions and connected accounts;
- cancellation/renewal;
- export/deletion/offboarding;
- age/accessibility/work/commercial suitability;
- source/reliability behaviour;
- company/support/reputation.

This solves the tension between memorability and completeness better than forcing every reader through a long compliance checklist before asking for a recipe idea.
