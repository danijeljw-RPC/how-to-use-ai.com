# 06 — Scams, Fake Apps, Thin Wrappers and Subscription Traps

## Executive finding

The draft is right to include this section, but two claims need care:

1. It is reasonable to say that **documented AI-themed scams, malicious apps/extensions/sites and deceptive subscription patterns exist and deserve active checking**.
2. The research does **not** justify a quantified claim that "most AI products are legitimate" or that scams represent a particular percentage of the AI market. The safer wording is that legitimate products and legitimate third-party applications clearly exist at scale, while documented malicious/deceptive products make basic verification worthwhile.

Security-vendor incident counts should not be presented as prevalence among ordinary users.

---

# 1. Fake AI apps / fleeceware

Sophos documented five Android/iOS apps in 2023 that used ChatGPT-like naming/positioning while providing limited functionality and charging recurring subscription fees. Sophos characterised these as "fleeceware": apps designed to generate recurring charges rather than steal credentials in the classic malware sense.

Source: Sophos, *Fake ChatGPT Apps Scam Users Out of Money, Sophos Reports*, 2023-05: https://www.sophos.com/en-us/press/press-releases/2023/05/fake-chatgpt-apps-scam-sophos-reports

**Evidence type:** security-vendor investigation; establishes examples, not prevalence.  
**General lesson:** presence in an official app store and use of a famous AI name/logo do not prove the developer is the famous provider or that the price/value is reasonable.

## What a beginner can check

- developer/legal entity name;
- link from the real provider website;
- subscription price and cadence;
- app-store in-app purchase list;
- whether the product claims to be "official";
- independent reviews/reports beyond store ratings;
- cancellation route.

---

# 2. Malicious browser extensions

Guardio documented a 2023 Chrome extension presented as a ChatGPT-related tool that reportedly stole Facebook session cookies/account access. It was distributed through the Chrome Web Store and had more than 9,000 users when removed, according to Guardio.

Source: Guardio Labs, *FakeGPT #2... Facebook Account Stealer*, 2023-03-22: https://guard.io/labs/fakegpt-2-open-source-turned-malicious-in-another-variant-of-the-facebook-account-stealer

Meta also reported finding malware families posing as ChatGPT and similar tools and warned that some malicious browser extensions could provide working AI functionality while also carrying malicious behaviour.

Source: Meta, *Meta's Q1 2023 Security Reports*, 2023-05: https://about.fb.com/news/2023/05/metas-q1-2023-security-reports/

**General lesson:** "it works" is not proof an extension is safe. A malicious extension can provide the advertised feature and still misuse broad browser/account access.

**Important limitation:** old example, but durable attack pattern. Mark as historical case; use a newer example if one is available at final publication.

---

# 3. Fake AI websites/advertisements distributing malware

Google/Mandiant reported in 2025 on fake AI video-generation websites promoted through social advertising that delivered malware and attempted to steal credentials, cookies, payment data and social-media account information.

Source: Google Cloud / Mandiant, *Cybercriminals Weaponize Fake AI Websites to Distribute Malware*, 2025-05-27: https://cloud.google.com/blog/topics/threat-intelligence/cybercriminals-weaponize-fake-ai-websites/

**Evidence type:** security-vendor threat research; large ad/detection observations are not population prevalence.  
**General lesson:** high demand for new AI capabilities creates an effective lure. Reach the product through a verified official source rather than an unsolicited ad/download link.

---

# 4. Phishing / fake support / fake billing

AI providers are now sufficiently well known to be impersonated in ordinary phishing patterns: account warnings, payment issues, upgrades, fake support numbers and "download this new AI app" messages.

The chapter does not need provider-specific phishing examples to teach the durable pattern:

- do not call a support number from an unsolicited ad/pop-up;
- navigate to the provider's official site/app directly;
- verify sender domains;
- do not install software from a billing/security warning;
- never provide passwords/MFA codes to "support".

This largely overlaps Chapter 9. Keep Chapter 13 focused on **verifying the AI service being purchased/installed**.

---

# 5. Fake "AI investment/trading bot" claims

This is primarily Chapter 9 territory because the scam is an investment/fraud proposition using AI as credibility theatre.

Chapter 13 can mention it only as a boundary example:

> "AI-powered" is not evidence that an investment/trading product has a real advantage or that a seller is legitimate.

Do not let this section become financial-scam education; link back to Chapter 9/Scamwatch guidance.

---

# 6. "Get rich with AI" courses/schemes

Treat as a marketing-claim problem rather than claiming all AI courses are scams.

Useful checks:

- specific deliverable versus vague income promise;
- evidence of earnings and typical outcomes;
- refund terms;
- recurring membership/upsell structure;
- pressure/urgency;
- whether course value depends on recruiting others;
- whether testimonials can be independently verified.

Chapter 11's claim-evaluation method applies directly.

---

# 7. AI companion apps: privacy and manipulative design

Mozilla's 2024 *Privacy Not Included* investigation reviewed 11 romantic AI chatbots and gave all reviewed products its warning label, citing weak privacy/security/transparency practices across the sample. Mozilla reported large numbers of trackers in at least one tested app and limited user control/transparency across the group.

Source: Mozilla Foundation, *Creepy.exe: Mozilla Urges Public to Swipe Left on Romantic AI Chatbots Due to Major Privacy Red Flags*, 2024-02-14: https://www.mozillafoundation.org/en/blog/creepyexe-mozilla-urges-public-to-swipe-left-on-romantic-ai-chatbots-due-to-major-privacy-red-flags/

**Evidence type:** consumer/privacy advocacy investigation of a selected product set, not representative of all AI chatbots.  
**General lesson:** products designed to encourage intimate disclosure deserve a higher privacy bar than their friendly conversational interface may suggest.

Australia-specific child-safety findings are stronger/current for under-18 discussion; see eSafety sources in `05-safe-experimentation.md`.

---

# 8. Subscription traps and dark patterns

## Australian evidence

CPRC's 2024 Australian research reported:

- 75% of Australians with subscriptions had experienced some form of negative experience trying to cancel;
- 32% had felt pressured into keeping a subscription;
- 90% said they would be likely to purchase again from the same organisation if cancellation were quick/simple.

Source: CPRC, *Let Me Out — Subscription trap practices in Australia*, 2024-08-20: https://cprc.org.au/report/let-me-out/

CHOICE has also documented subscription traps as a form of dark pattern and previously cited Australian survey evidence of cancellation difficulty.

Source: CHOICE, *Subscription traps catching out consumers online*: https://www.choice.com.au/data-protection-and-privacy/data-collection-and-use/how-your-data-is-used/articles/subscription-traps

## AI-specific relevance

AI services frequently use:

- free tiers;
- free trials;
- recurring monthly/annual subscriptions;
- higher-priced premium tiers;
- credits/tokens for generation;
- add-on usage.

Therefore ordinary subscription literacy is directly relevant even where the trap is not "AI-specific".

---

# 9. Australian law: current and incoming

## Current baseline

The Australian Consumer Law already prohibits misleading/deceptive conduct and false/misleading representations in relevant circumstances and provides consumer guarantees for qualifying goods/services. Remedies depend on the circumstances.

Source: ACCC, *Consumer rights and guarantees*: https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees

For overseas online sellers, ACCC says businesses directly offering products/services to Australian consumers must follow the Australian Consumer Law, while practical enforcement/redress can be harder when a business is overseas.

Source: ACCC, *Buying online*: https://www.accc.gov.au/consumers/buying-products-and-services/buying-online

## Enacted 2026 reforms

The **Competition and Consumer Amendment (Unfair Trading Practices) Act 2026** was assented to on 2026-07-06 and, as enacted, commences on **2027-07-01**. It includes parts addressing unfair trading practices, drip pricing and subscription contracts.

Primary source: Federal Register of Legislation, Act No. 64, 2026: https://www.legislation.gov.au/C2026A00064

Government announcement: https://ministers.treasury.gov.au/ministers/andrew-leigh-2025/media-releases/unfair-trading-tricks-and-traps-be-banned

**Status as of 2026-10-01:** enacted, not yet commenced.  
**Recheck before publication:** yes, especially implementation/regulations/guidance.

This is important because earlier sources describing unfair-trading/subscription-trap law as merely proposed are now outdated.

---

# 10. Australian enforcement example: low-price offer leading to subscription

In July 2026 the ACCC reported that the Federal Court ordered JustAnswer to pay $10 million in penalties for misleading pricing representations/affiliation claims. ACCC described consumers being presented with a low-price offer (including AU$2) and then enrolled into more expensive ongoing monthly subscriptions in the conduct at issue; refund orders also applied to affected consumers for the specified period.

Source: ACCC, *JustAnswer to pay $10m in penalties for misleading pricing representations and misleading affiliation claims*, 2026-07-08: https://www.accc.gov.au/media-release/justanswer-to-pay-10m-in-penalties-for-misleading-pricing-representations-and-misleading-affiliation-claims

**Not AI-specific.**  
**Why useful:** demonstrates the underlying subscription-design problem with a recent Australian enforcement action. Use generically in print if needed; avoid implying the defendant was an AI service.

---

# 11. International comparison: US "click to cancel"

The U.S. FTC adopted an expanded Negative Option Rule often called "click to cancel", but the U.S. Court of Appeals for the Eighth Circuit vacated the rule on procedural grounds on 2025-07-08 before its scheduled effective date.

Reliable secondary sources:
- Reuters, 2025-07-08: https://www.reuters.com/legal/legalindustry/us-click-cancel-rule-blocked-by-appeals-court-2025-07-08/
- DLA Piper, 2025-07-16: https://www.dlapiper.com/en/insights/publications/2025/07/ftcs-click-to-cancel-rule-voided

**Editorial lesson:** consumer rules change and court challenges matter; don't cite an announced rule as current law without checking status.

This comparison is optional in the printed chapter; Australia's enacted 2026 reform is more relevant.

---

# 12. Thin wrappers: define carefully

## What a wrapper is

In ordinary AI discussion, a "wrapper" is an app/service whose AI capability is built largely on another provider's model/API while adding its own interface, workflow, data, integrations or specialised behaviour.

## Why "wrapper" does not mean scam

Modern AI providers deliberately expose APIs/platforms so other businesses can build products on top. Third-party products may add substantial value through:

- domain workflow;
- data integration;
- collaboration;
- accessibility;
- specialised interface;
- quality control;
- compliance/admin/security;
- orchestration across multiple models;
- support.

Therefore the draft phrase "thin wrappers charge for access to a free or cheap underlying AI service" needs qualification.

## When the wrapper becomes a consumer concern

- misrepresents a third-party model as proprietary breakthrough technology;
- impersonates the underlying provider;
- hides recurring cost;
- charges a high price without making added value clear;
- passes sensitive prompts to third parties without clear disclosure;
- requests broad permissions unnecessary for the added feature;
- has weak support/refund/deletion processes.

## Beginner test

Don't ask "is this a wrapper?" Ask:

> "What am I paying this company to add, and what data/access am I giving it in return?"

This is fairer and more durable.

---

# 13. Weekly pricing and confusing credits

A weekly subscription can appear small in isolation while annualising to a high amount. The chapter can teach the arithmetic concept without naming current AI apps.

For example, a hypothetical **$9.99/week** is roughly **$519/year** before price changes/taxes. This is arithmetic, not a claim about a particular product.

Credit/token systems create a different problem: the user may not know whether one task costs 1 credit or 50, whether models have different rates, whether unused credits expire, or whether overages auto-purchase.

## Durable cost check

Convert recurring/credit pricing to the unit the user actually understands:

- weekly → monthly/yearly equivalent;
- annual → monthly equivalent;
- credits → typical tasks;
- per-user → household/team total.

---

# 14. Cancellation and refunds

## Google Play

Google Play states that uninstalling an app does not cancel its subscription. Refund eligibility depends on circumstances/timing; users should not assume every unwanted renewal is automatically refundable.

Sources:
- cancellation: https://support.google.com/googleplay/answer/7018481?hl=EN
- refund policy: https://support.google.com/googleplay/answer/15574908?hl=en

## Apple

Apple provides subscription management and a process to request refunds for eligible purchases; eligibility is not automatic for every situation.

Source: Apple Support AU billing/refunds hub: https://support.apple.com/en-au/billing

## ACCC / card providers

ACCC online-buying guidance notes card-provider chargeback may be an option in some circumstances when an online problem cannot be resolved.

Source: https://www.accc.gov.au/consumers/buying-products-and-services/buying-online

**Book principle:** save receipts/cancellation confirmations and act quickly if a charge is unexpected.

---

# 15. Excessive permissions

Do not create a fixed "bad permissions" list. Match access to function.

### Reasonable examples
- microphone for real-time voice;
- camera for visual assistance;
- files for summarising a chosen file;
- calendar for scheduling;
- repository access for a coding assistant.

### Higher scrutiny
- always-on location without a location-dependent feature;
- contacts for a tool whose task has no social/contact function;
- broad "read and change all data on websites you visit" extension access for a narrow feature;
- email/file write access when only reading is required;
- permission to purchase/send/delete without confirmation.

Platform sources:
- Apple permission controls: https://support.apple.com/en-au/guide/iphone/iph168c4bbd5/ios
- Android permission controls: https://support.google.com/googleplay/answer/9431959?hl=en
- Chrome extension permissions: https://support.google.com/chrome_webstore/answer/186213?hl=en

---

# 16. Fake reviews and inflated claims

The ACCC states it is against the law for a business to create fake/misleading reviews or arrange for others to do so. ACCC lists warning signs such as bursts of extreme reviews, generic wording and suspicious similarity.

Source: ACCC, *Online reviews for products and services*: https://www.accc.gov.au/consumers/advertising-and-promotions/online-reviews-for-product-and-services

## AI-specific extension

AI-generated review text can make fake reviews cheaper/easier to produce, but the chapter does not need to prove whether a particular review was AI-generated. The stronger lesson is:

- do not treat star rating as sole evidence;
- look at review detail and distribution;
- use multiple independent sources;
- search for regulator/security/consumer reports;
- apply Chapter 11's "who benefits / what is actually demonstrated?" questions to capability claims.

---

# 17. Urgency-driven upsells

Common forms:

- countdown timers;
- "lifetime deal ends today";
- pop-ups after one generated result;
- artificial scarcity;
- repeated upgrade prompts framed as lost opportunity.

The research package does not assert all countdowns are fake. The durable lesson is behavioural:

> Artificial urgency is a reason to slow the purchase decision down, not speed it up.

This fits the chapter's "would I still want it after the free trial?" filter.

---

# 18. Recommended wording precision

Avoid:
- "Official app stores are safe." → They reduce some risk but malicious/deceptive apps have been documented there.
- "Thin wrappers are scams." → False; wrapper architecture can be legitimate/useful.
- "If it is free, you are the product." → Overbroad; free tiers can be subsidised, usage-limited, bundled, investor-funded, or use data in different ways. Check actual terms.
- "Paid tools protect your data." → Overbroad; payment and privacy are separate dimensions.
- "Most AI products aren't scams." → Probably directionally true in ordinary language but not quantified by the research assembled here; unnecessary claim.
- "AI subscription scams are common." → "Documented and worth checking for" is more supportable unless prevalence evidence is supplied.

Prefer:

> "Most readers will encounter legitimate AI products as well as opportunistic imitators, misleading offers and poor-value subscriptions. A few checks before installing or paying are cheaper than trying to unwind a bad choice later."

This is an editorial suggestion, not final book prose.
