# 04 — Privacy and Data in Practice

## Core finding

The strongest beginner lesson is not a product-specific toggle. It is this distinction:

> **Training, storage, memory, history, human review, sharing, connected-app access, and deletion are separate questions.** Turning one off does not automatically turn the others off.

Current mainstream provider documentation repeatedly demonstrates this.

---

# 1. Australian privacy baseline

## OAIC guidance specifically on commercially available AI

The Office of the Australian Information Commissioner (OAIC) published guidance for organisations using commercially available AI products. Key points useful to Chapter 13 include:

- existing privacy obligations apply to personal information entered into AI systems and personal information produced by them;
- organisations should conduct due diligence before deploying AI;
- privacy should be considered from the design/deployment stage rather than after rollout;
- OAIC recommends, as a best-practice starting position, not entering personal information — especially sensitive information — into publicly available generative AI tools;
- organisations should consider third-party access/disclosure, data accuracy and human oversight;
- AI use should be reviewed over time rather than treated as "set and forget".

Source: OAIC, *Guidance on privacy and the use of commercially available AI products*, published 2024-10-21, updated 2025-01-17: https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products

**Use in chapter:** strong Australian authority for the general principle "do not start by feeding an untested public AI tool sensitive personal information".

**Limitation:** primarily organisational guidance, not a consumer buying guide.

## Australian Privacy Principles relevant to AI-tool use

Relevant APP themes include:

- APP 1: open/transparent management;
- APP 3/5: collection and notice;
- APP 6: use/disclosure;
- APP 8: cross-border disclosure;
- APP 10: data quality;
- APP 11: security and destruction/de-identification in some circumstances;
- APP 12: access;
- APP 13: correction.

Source: OAIC, *Australian Privacy Principles quick reference*: https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference

### Cross-border data

APP 8 creates obligations for covered APP entities before disclosing personal information overseas and can make the Australian entity accountable for some overseas recipient conduct.

Source: OAIC, *Chapter 8: APP 8 Cross-border disclosure of personal information*, updated 2025-10-03: https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information

**Consumer lesson:** "where is my data stored?" can matter, but a beginner should not be led to believe geography alone determines privacy quality. Provider terms, applicable law, subprocessors and organisational obligations all matter.

## Small-business coverage gap

A major Australian nuance: many small businesses with annual turnover of $3 million or less are not covered by the Privacy Act unless an exception applies (for example, some health service providers, businesses trading in personal information, Commonwealth contractors and others).

Source: OAIC, *Small business*: https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business

**Why this matters to Chapter 13:** a reader should not assume every Australian AI app/vendor is subject to the same Privacy Act obligations merely because it operates as a business.

## Access/delete rights: avoid importing GDPR assumptions

Australia provides access/correction rights through APPs for covered entities and security/destruction obligations in certain circumstances. It does **not** provide a general GDPR-equivalent right to erasure/data portability/object in the same form.

Sources:
- OAIC, *Access your personal information*: https://www.oaic.gov.au/privacy/your-privacy-rights/your-personal-information/access-your-personal-information
- OAIC, *Australian entities and the European Union General Data Protection Regulation*: https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/more-guidance/australian-entities-and-the-european-union-general-data-protection-regulation

**Durable lesson:** "I can delete it because privacy law gives everyone a right to be forgotten" is not a safe Australian assumption.

---

# 2. Children's privacy in Australia

The Privacy and Other Legislation Amendment Act 2024 required the OAIC to develop a Children's Online Privacy Code. OAIC's current page states the final code must be ready and registered by 2026-12-10.

Source: OAIC, *Children's Online Privacy Code*: https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code

**Status at research date (2026-10-01):** not yet final.  
**Recheck before publication:** mandatory.

Durable lesson regardless of final text: age suitability and children's privacy deserve an explicit product-evaluation step, especially for services designed to encourage extended personal conversation.

---

# 3. Representative current provider practices

The following named examples are **not recommendations**. They are evidence used to derive product-independent lessons. Details were accessed 2026-10-01 and are volatile.

## OpenAI / ChatGPT consumer controls

OpenAI's current Data Controls page states:

- switching off "Improve the model for everyone" prevents **new** conversations from being used to train OpenAI models;
- it does not delete or hide saved chats;
- Temporary Chats do not appear in history, do not create/update memories and are not used for model improvement;
- Temporary Chats may still be retained for up to 30 days for safety;
- available controls vary by account/plan/workspace.

Source: OpenAI Help Center, *Data controls in ChatGPT*, accessed 2026-10-01: https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt

### Deletion is not a single object

OpenAI's current retention documentation says deleted saved chats are removed from the user's view immediately and scheduled for permanent deletion within 30 days, subject to de-identification or legal/security exceptions. It also says files saved separately in Library are not deleted merely by deleting the chat that used them; projects/GPT knowledge have their own retention lifecycle.

Source: OpenAI Help Center, *Chat and file retention in ChatGPT*: https://help.openai.com/en/articles/8983778-chat-and-file-retention-in-chatgpt

**General lesson:** deleting the visible conversation may not delete every related data object. Check saved files, projects, memories, shared links and connected services separately.

### Legal holds can override ordinary retention

In litigation with The New York Times, OpenAI was subject to a court-ordered preservation regime in 2025. OpenAI's October 2025 update says the indefinite-forward-retention obligation ended on 2025-09-26 and standard retention resumed, while a limited set of historical April–September 2025 user data remained subject to preservation.

Source: OpenAI, *How we're responding to The New York Times' data demands in order to protect user privacy*, published 2025-06-05, updated 2025-10-22: https://openai.com/index/response-to-nyt-data-demands/

**General lesson:** a provider's normal deletion policy can contain exceptions for legal obligations. "Delete" should not be described as an absolute promise independent of law.

### Shared links are not private

OpenAI's current shared-link documentation says personal-account shared links can be accessed by anyone with the link, lack per-recipient controls and configurable expiry, and are not intended for search-engine indexing — but that does not make them private.

Source: OpenAI Help Center, *Sharing conversations and scheduled tasks in ChatGPT*: https://help.openai.com/en/articles/7925741-sharing-conversations-and-scheduled-tasks-in-chatgpt

A 2025 short-lived discoverability option did result in shared conversations appearing in search results; the feature was withdrawn. Use this as a case study, not as a claim that private chats were automatically indexed.

Secondary source: Search Engine Journal, 2025-07-31: https://www.searchenginejournal.com/openai-is-pulling-shared-chatgpt-chats-from-google-search/552671/

**General lesson:** a share link should be treated as publication to anyone who obtains/forwards it; "not indexed" is not the same as access-controlled.

---

## Google / Gemini consumer data

Google's current Gemini Apps Privacy Hub states, among other things:

- Gemini Apps Activity has a default auto-delete period of 18 months, configurable to 3 months, 36 months or indefinite;
- a subset of chats can be reviewed by human reviewers/service providers;
- reviewed chats and related data can be retained for up to three years and are not necessarily deleted when the user deletes Gemini Apps Activity;
- changing Gemini settings does not automatically change separate Google settings such as Web & App Activity or Location History.

Source: Google, *Gemini Apps Privacy Hub*, accessed 2026-10-01: https://support.google.com/gemini/answer/13594961

**General lessons:**
- deleting ordinary activity may not delete separately retained reviewed data;
- one product's privacy toggle may not control the user's wider platform/account settings;
- human review is a distinct evaluation question.

---

## Anthropic / Claude consumer versus commercial

Anthropic's current consumer privacy page states that consumer chats/coding sessions may be used for model improvement if the user chooses to allow it, when content is flagged for safety review, or when otherwise explicitly opted in.

Source: Anthropic Privacy Center, consumer *Is my data used for model training?*, accessed 2026-10-01: https://privacy.anthropic.com/en/articles/10023580-is-my-data-used-for-model-training

Anthropic's current commercial product page states that commercial inputs/outputs are not used to train models by default, while explicit feedback/bug reports or opt-in can be treated differently. The page also states that feedback-related conversations may be stored for a longer period.

Source: Anthropic Privacy Center, commercial *Is my data used for model training?*, accessed 2026-10-01: https://privacy.anthropic.com/en/articles/7996868-is-my-data-used-for-model-training

**General lesson:** never generalise a consumer privacy statement to a business/API product or vice versa. The product/tier and account type matter.

---

## Microsoft / Copilot consumer and Microsoft 365 contexts

Microsoft's current privacy documentation distinguishes consumer Copilot contexts from Microsoft 365/organisational contexts. A legacy privacy-controls page explicitly warns that it applies only to an older app version, which itself is useful evidence of policy/interface churn.

Source: Microsoft Support, *Microsoft Copilot privacy controls*: https://support.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-privacy-controls

Microsoft's current Microsoft 365 consumer privacy page states that prompts, responses and file contents used with Copilot inside Microsoft 365 apps are not used to train foundation models.

Source: Microsoft Support, *Copilot in Microsoft 365 apps for home: your data and privacy*: https://support.microsoft.com/en-us/privacy/copilot-in-microsoft-365-apps-for-home-your-data-and-privacy

**General lesson:** "same brand" does not imply identical data treatment across product surfaces/account types.

---

# 4. Training-off does not mean storage-off

This misconception deserves explicit treatment.

Across current provider documentation, training and retention are separate controls/purposes. A provider may retain content for:

- user history;
- safety/security/abuse prevention;
- legal obligations;
- human review;
- feedback;
- service operation;
- workspace policies;
- saved projects/files/memory;

even when model-improvement training is disabled.

**Printed-book principle:**

> If you turn off model training, you have answered one privacy question: whether qualifying future interactions can be used to improve the model. You have not automatically answered how long the interaction is stored, who can review it, what the service remembers, or what connected services receive.

---

# 5. Temporary/private mode does not mean zero retention

Current OpenAI Temporary Chat documentation allows up to 30-day safety retention. Google's Gemini privacy controls likewise distinguish activity settings, human review and short-term service/security retention.

Therefore avoid phrases such as "temporary chat isn't stored" unless the provider's exact, current policy supports it and the statement is scoped carefully.

**Durable wording:** "Temporary/private modes usually reduce history, training or personalisation, but check what they still retain for safety, security or legal reasons."

---

# 6. Memory/personalisation is its own data surface

Memory improves convenience but creates a switching/privacy dimension.

A product may maintain:

- explicit saved memories;
- inferred preferences;
- conversation history used for personalisation;
- custom instructions/profile details;
- data from connected platform activity.

Deleting a conversation may not delete memory, and deleting memory may not delete conversation history. Microsoft's current legacy Copilot page explicitly separates memory deletion from conversation-history deletion; OpenAI similarly treats memory/history as distinct concepts in its current controls.

**Durable principle:** ask "what does it remember about me?" separately from "what chats are stored?"

---

# 7. Human review

Human review is neither automatically sinister nor irrelevant.

Providers use human review for combinations of:

- safety/abuse detection;
- quality evaluation;
- user-submitted feedback;
- model improvement;
- policy enforcement.

The privacy consequence depends on:

- what subset is reviewed;
- how identifiers are handled;
- who performs the review (employees/contractors);
- retention period;
- whether the user can opt out for particular purposes.

The chapter should not say "humans read your chats" as a blanket alarm. It should teach the reader to check whether human review can occur and under what conditions.

---

# 8. On-device versus cloud AI

"On-device" can reduce the amount of content sent to remote servers, but it is not a blanket privacy guarantee.

Apple's current Private Cloud Compute documentation is a useful architecture example: Apple says many tasks are processed locally, while more complex requests may be sent to Private Cloud Compute, which is designed for stateless processing and external verifiability. Apple also documents an Apple Intelligence Report so users can inspect some remote-processing activity.

Sources:
- Apple Security Research, *Private Cloud Compute Security Guide*: https://security.apple.com/documentation/private-cloud-compute/
- Apple (AU), *Apple Intelligence & Privacy*: https://www.apple.com/au/legal/privacy/data/en/intelligence-engine/

**Evidence limitation:** these are Apple's own technical/privacy claims and architecture documentation, not a general independent finding about all on-device AI.

**Durable lesson:** "on device" describes where some processing happens. Ask what features remain local, what goes to cloud services, and what third parties are involved.

---

# 9. AI that can read email, files, screens or browser pages

AI usefulness increasingly comes from context access. That creates a simple trade-off:

> More context can make the assistant more useful; more context also increases what a mistaken permission, compromised extension, prompt injection or provider breach could expose.

Evaluation should record:

- data scope (one file vs all files);
- duration (one-off vs persistent access);
- read vs write/action ability;
- whether the system asks for confirmation before consequential actions;
- whether connected third parties receive data;
- how access is revoked.

OpenAI's 2026 Lockdown Mode is a useful current example that disabling/restricting connected or action-taking features can reduce attack surface for elevated-risk users.

Source: https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/

---

# 10. Third-party wrappers and underlying providers

A third-party app can pass user prompts/files to another AI provider. This creates at least two privacy relationships:

1. the app developer's collection/analytics/account systems;
2. the model/API provider or other subprocessors.

The user may never interact directly with the underlying provider.

**Evaluation questions:**
- Does the app disclose subprocessors/model providers?
- Does it explain whether prompts are retained by the app, the model provider, both, or neither?
- Does the app add analytics/advertising trackers?
- Is deletion propagated downstream?

Do not imply that using an API/wrapper is inherently deceptive. Many legitimate products are intentionally built this way.

---

# 11. Australian rights and practical recourse

For an Australian beginner, the useful high-level hierarchy is:

- check provider privacy controls and policy first;
- for entities covered by the Privacy Act, APP rights/obligations may apply;
- OAIC provides complaint/guidance mechanisms;
- privacy rights depend on entity coverage and circumstances;
- do not assume GDPR rights apply merely because a service operates globally;
- if a product is overseas, practical enforcement/redress can be harder even where Australian law applies to conduct directed at Australia.

This is informational context, not legal advice.

---

# 12. Print-worthy durable principles

1. Do not equate training with storage.
2. Do not equate temporary mode with zero retention.
3. Do not equate deletion of one chat with deletion of every related object.
4. Do not equate memory with history.
5. Do not equate a shared link with private access control.
6. Do not assume personal and business tiers have the same data rules.
7. Do not assume built-in/on-device means all processing stays local.
8. The more accounts/files/screens a tool can access, the more carefully permissions should be evaluated.
9. Legal obligations can override ordinary retention promises.
10. Product-specific privacy settings belong on an updateable website, not as permanent print instructions.
