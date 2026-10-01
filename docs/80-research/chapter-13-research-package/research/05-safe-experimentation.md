# 05 — Safe Experimentation

## Core proposition

The draft's safest-test idea is strong:

> Start with a low-stakes task you understand well enough to judge.

This is useful because it simultaneously tests usability, output quality and fit without making the first experiment consequential.

However, the final chapter should define "low stakes" with concrete boundaries.

---

# 1. What "low stakes" means

A low-stakes test is one where a wrong answer, leaked input, unexpected charge or failed action would be inconvenient rather than seriously harmful.

## Good beginner tests

- rewrite a non-confidential draft the user already wrote;
- summarise a public article and compare with the article;
- brainstorm meal ideas without health/financial constraints;
- explain a topic the user already knows;
- create a fictional itinerary rather than booking travel;
- generate a mock image using non-sensitive source material;
- ask for code/explanation in a toy example rather than production credentials/repository data;
- transcribe a short recording made specifically for the test.

## Poor first tests

- uploading identity documents;
- tax returns/bank statements;
- passwords, API keys or recovery codes;
- private health records;
- confidential client/customer files;
- another person's personal information without a clear basis/permission;
- active legal dispute material;
- production source code containing secrets;
- allowing a new agent to send email, buy items or modify cloud files before understanding confirmations/permissions.

The point is not that these categories can never be used with any AI system. It is that they are inappropriate material for **first-trust testing** of an unfamiliar consumer tool.

---

# 2. Authoritative privacy support for caution

OAIC's guidance for commercially available AI products recommends, as a best-practice starting position for organisations, not entering personal information — particularly sensitive information — into publicly available generative AI tools.

Source: OAIC, *Guidance on privacy and the use of commercially available AI products*: https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products

This supports the chapter's practical low-stakes approach without needing to claim that every public AI service is unsafe.

---

# 3. Testing accuracy with something known

A useful sequence:

1. choose a task where the user knows what a good result looks like;
2. ask the tool to perform it without excessive coaching;
3. inspect factual errors, omissions and whether it follows constraints;
4. correct the tool or repeat with a more precise instruction;
5. decide whether the improvement is good enough for the intended real task.

## Limitation

Passing known/easy tasks does not prove performance on unfamiliar/harder tasks. The exercise tests **basic fit and failure visibility**, not global accuracy.

---

# 4. Testing sources/citations

A simple high-value test for research-capable tools:

- ask a factual question requiring sources;
- open one or two cited primary sources;
- find the claim in the source;
- check whether the AI strengthened/weakened/changed what the source said;
- inspect publication date and jurisdiction.

This directly operationalises Chapters 4 and 11.

A tool that presents citations can still:

- cite a real source for the wrong proposition;
- rely on an outdated source;
- privilege weak/SEO sources over primary material;
- merge claims from several sources incorrectly.

---

# 5. Safe information boundaries

For a beginner-oriented chapter, the easiest rule is to distinguish:

## Never suitable as casual test data
- passwords/passcodes;
- recovery codes;
- authentication tokens/API keys;
- full payment-card/bank login credentials;
- identity-document images/numbers unless a service specifically requires them for a legitimate purpose and the user has verified the service;
- security questions/answers.

## High-sensitivity data requiring a deliberate provider/context decision
- medical/health records;
- tax/financial records;
- legal documents;
- intimate personal information;
- children's data;
- biometric/voice/face data;
- work/customer/confidential information;
- other people's private correspondence.

## Low-stakes test data
- public information;
- invented examples;
- drafts stripped of names/identifiers;
- fictional data;
- content the user would be comfortable posting publicly (as a conservative first-test heuristic, not a permanent rule).

---

# 6. Account security basics

An AI account can contain unusually rich information: chats, files, payment details, memories, connected apps and sometimes action permissions.

Practical baseline:

- use a unique strong password where password login is used;
- enable multi-factor authentication where offered;
- protect the email/identity account used for sign-in;
- review account sessions/devices if supported;
- do not approve unexpected OAuth/"sign in with" permission screens without reading access requested;
- revoke access when a third-party tool is no longer used.

This is ordinary account security, but the value of AI chat/file history makes it especially relevant.

---

# 7. App and browser permissions

Use platform-level permission controls after the trial, not just at install time.

Apple and Android both provide permission-management interfaces for camera, microphone, contacts, photos, location and other data. Chrome documents powerful extension permissions including browsing history/tabs and clipboard access.

Sources:
- Apple: https://support.apple.com/en-au/guide/iphone/iph168c4bbd5/ios
- Android: https://support.google.com/googleplay/answer/9431959?hl=en
- Chrome Web Store: https://support.google.com/chrome_webstore/answer/186213?hl=en

## Useful generic exercise

After trying a tool for a week:

1. open device/browser permission settings;
2. list what the app/extension can access;
3. ask whether each permission is still needed;
4. revoke anything unnecessary;
5. check whether the app still functions for the tasks actually used.

This is a strong companion-site walkthrough because platform screens will date.

---

# 8. Children and teenagers

eSafety's 2026 Australian evidence justifies more than a generic "supervise children" note.

Survey of 1,950 children aged 10–17 found:
- 78% had used an AI assistant;
- 8% had used an AI companion;
- among users of assistants/companions, 54% reported personal/social uses;
- 32% reported sharing personal or potentially sensitive information;
- 20% reported potentially inappropriate or harmful interactions.

Source: eSafety, *Talking to machines...*: https://www.esafety.gov.au/research/talking-to-machines-childrens-experiences-with-ai-assistants-and-companions

eSafety's separate transparency work on companion services found gaps in age assurance and safeguards in the services examined.

Source: eSafety, *Findings from transparency notices on AI companion apps: October 2025*: https://www.esafety.gov.au/industry/basic-online-safety-expectations/ai-services/findings-october-2025

## Practical safe-experimentation implications

Parents/carers should:
- check the service's current minimum age and whether there is a teen/child experience;
- distinguish a functional assistant from a companion designed for emotional/romantic engagement;
- discuss not sharing secrets, addresses, school details, intimate images or sensitive health/relationship information;
- understand reporting/blocking/parent controls;
- watch for in-app purchases/subscriptions;
- encourage verification of advice rather than treating the bot as an authority/person.

Keep child mental-health specifics within eSafety guidance; do not make Chapter 13 a clinical chapter.

---

# 9. Older adults

There is less Chapter-13-specific evidence that older adults are uniquely vulnerable to AI-tool subscription scams, so avoid stereotyping.

The useful research-backed point is that adoption/use patterns differ by age (Pew's U.S. 2026 data shows lower chatbot usage among older adults), while AI can also provide real accessibility/usability benefits through voice and reading support.

Safe experimentation for an older beginner should emphasise:

- genuine install/source verification;
- avoiding urgency claims;
- checking payment cadence;
- asking a trusted person for a second look at unfamiliar permission/payment screens if desired;
- using low-stakes tasks first;
- avoiding identity/banking information in general AI chats;
- understanding that fluent conversation can still be wrong.

These are beginner safeguards, not age-based claims about competence.

---

# 10. Small businesses

A small-business owner may use a consumer-looking tool for professional data, creating a higher consequence than personal experimentation.

Before trialling on customer/business material:

- check whether the business is covered by the Privacy Act or another confidentiality regime;
- identify whether customer/personal information is involved;
- prefer approved business/commercial account terms where appropriate;
- check training/retention/admin controls;
- test with synthetic or de-identified data first;
- ensure human review before customer-facing decisions/content;
- keep Chapter 7's workplace/company-policy principles in force.

Australian nuance: many businesses under $3m turnover can fall outside the Privacy Act unless an exception applies, but that exemption is not a reason to ignore privacy/security/customer trust.

Source: OAIC, *Small business*: https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business

---

# 11. Action-taking AI and prompt injection

Traditional chat mainly creates output for the user to inspect. Connected/agentic systems may also:

- browse websites;
- read emails/files;
- click buttons;
- send messages;
- create/delete/edit data;
- interact with external apps.

This creates a distinct safety issue: malicious instructions hidden in a webpage/document/email can attempt to influence the AI's behaviour (prompt injection/indirect prompt injection).

OpenAI's 2026 Lockdown Mode explicitly restricts connected features and reduces risk from malicious content for elevated-risk users, which provides current primary evidence that this attack surface is operationally relevant.

Source: https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/

## Book 1 boundary

Do not teach prompt-injection engineering. Teach one durable rule:

> The more an AI can see and do, the more important confirmation steps, narrow permissions and low-stakes testing become.

Chapter 14/Books 4–5 can take the deeper agent-security material.

---

# 12. Clean exit / offboarding

A safe experiment should include a way out.

Generic offboarding sequence:

1. export anything the user wants to keep;
2. cancel subscription/auto-renewal;
3. confirm cancellation date and remaining access;
4. delete chats/files/projects/memories as appropriate;
5. delete account if no longer needed;
6. revoke connected account/app permissions;
7. remove browser extension/mobile app;
8. check app-store/provider billing separately;
9. retain cancellation/refund confirmation.

Google Play explicitly warns that uninstalling an app does not cancel a subscription.

Source: https://support.google.com/googleplay/answer/7018481?hl=EN

This is an excellent antidote to subscription inertia and data lock-in.
