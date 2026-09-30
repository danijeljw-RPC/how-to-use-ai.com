# Confidentiality, Company Policy, and Tool Types

## Core reader principle

> Before putting work information into AI, know what information you are handling, which exact system/account will receive it, and what your organisation permits.

This is more accurate than “never paste work data into AI” and safer than “enterprise AI is private.”

---

# Confidentiality is about the information and the recipient system

A task such as “summarise this client complaint” can be a perfectly ordinary AI use **if** the organisation permits it and the information is appropriate for the approved system.

The same task can be inappropriate if copied into an unapproved public account with customer personal information or commercially sensitive material.

This distinction is valuable because it avoids portraying workplace AI as inherently unsafe.

---

# Information categories worth recognising

The chapter does not need a legal taxonomy. A relatable list can include:

- customer/client contact details and account information;
- employee information;
- health or sensitive personal information encountered professionally;
- contracts and negotiation positions;
- non-public pricing;
- financial results before publication;
- internal strategy;
- unreleased products/features;
- intellectual property and source code;
- credentials, passwords and API keys;
- security vulnerabilities/incidents;
- confidential supplier information;
- internal investigations or complaints.

The practical question is not merely “is this secret?” but “am I authorised to disclose this information to this service for this purpose?”

---

# Australian privacy guidance

## OAIC: commercially available AI products

The Office of the Australian Information Commissioner says organisations should conduct due diligence on AI products, including intended uses, human oversight, privacy/security risks and who can access personal information entered or generated.

It recommends, as a matter of best practice, that organisations not enter personal information — particularly sensitive information — into publicly available generative AI tools because of the privacy risks.

It also recommends minimising the amount of personal information supplied to an AI system.

**Source:** OAIC, *Guidance on privacy and the use of commercially available AI products*, published 21 October 2024, updated 17 January 2025.  
https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products

### Editorial use

This supports:

- the confidentiality test;
- the minimum-data test;
- checking the product rather than assuming all AI services behave alike;
- keeping human oversight in professional workflows.

### Do not overextend

This is Australian privacy guidance for covered organisations. It should not be presented as a universal legal rule for every reader or country.

---

# Removing a name is not necessarily de-identification

A common misconception is that deleting a person's name automatically makes a record safe to share.

Re-identification can remain possible through combinations of contextual details such as:

- job title plus a small team;
- exact date/time plus location;
- rare medical condition;
- customer industry plus transaction value plus region;
- unique complaint history;
- uncommon demographic combinations.

For business confidentiality, information can remain commercially sensitive even when no individual can be identified at all.

### Practical example

Original:

> “Please summarise this complaint from Maria Santos, CFO of Acme Mining, about the $4.72m renewal negotiated on 18 September.”

Removing only the name may leave enough detail to identify the person/company or expose confidential commercial information.

A safer synthetic/abstract version for a non-approved tool might be:

> “Summarise this fictional complaint from a senior finance contact about a large contract renewal. Identify the customer's requested remedy and unanswered questions.”

Whether even the abstracted version is permitted still depends on organisation policy.

---

# Minimum-data thinking

The strongest practical principle is not “redact everything.” It is:

> Give the system only the information genuinely needed for the task, subject to organisational policy.

Techniques that may help in lower-stakes examples:

- replace names with roles;
- use synthetic/dummy data;
- provide only the relevant excerpt rather than a complete file;
- describe the pattern rather than upload a live customer record;
- remove credentials/secrets entirely;
- use an approved managed system when real sensitive data is genuinely required.

**Caveat:** redaction and abstraction are not foolproof. Unique combinations can still identify people or disclose confidential facts.

---

# Public, personal, business and organisation-managed tools are not one category

Current product documentation shows several distinct questions:

1. Are prompts/outputs used for model training by default?
2. How long are conversations retained?
3. Can administrators/auditors access logs?
4. Which connected systems/data can the assistant access?
5. What contractual terms apply?
6. What region/data-residency options exist?
7. Which security/access controls are available?
8. What happens when users submit feedback?
9. Does a web-search or third-party integration have separate data handling?

The chapter does not need to compare every vendor. It can use these as evidence for one rule: **exact product and account type matter.**

---

# Current vendor examples — time-sensitive

All entries below reflect documentation retrieved 30 September 2026 and should be rechecked before publication.

## OpenAI business products

OpenAI currently states that, by default, it does not use inputs or outputs from ChatGPT Enterprise, ChatGPT Business, ChatGPT Edu, ChatGPT for Healthcare, ChatGPT for Teachers or the API platform to train/improve its models. The page also describes encryption, retention options for qualifying products and organisation controls.

**Source:** https://openai.com/business-data/

**Do not infer:** this does not mean every OpenAI account has identical data handling, zero retention, or automatic suitability for any company information.

## Microsoft organisation Copilot products

Microsoft's current enterprise data protection documentation says prompts, responses and Microsoft Graph data under the described organisational Copilot protections are not used to train foundation models. It also states that organisational access controls, retention policies, audit capabilities and administrative settings can apply, depending on subscription.

**Source:** https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection

**Important nuance:** Microsoft documentation also says prompts/responses may be logged and retained for audit/eDiscovery. “Not used for training” is not the same as “not stored.”

## Google Workspace with Gemini

Google's Workspace privacy documentation currently says qualifying Workspace Gemini interactions stay within the organisation and prompts, Workspace content and generated responses are not used to train generative AI models outside the domain without permission.

**Source:** https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub

## Consumer Gemini Apps

Google's consumer Gemini Apps Privacy Hub currently distinguishes settings. As of 24 September 2026, when Keep Activity is on, activity may be used to improve services including training generative AI models and may involve human review. With Keep Activity off, future chats are not used to train models unless feedback is submitted, while chats are still retained for 72 hours for service/safety purposes.

**Source:** https://support.google.com/gemini/answer/13594961

**Editorial value:** Same brand, materially different context/settings. Avoid “Google trains on everything” or “turning history off means nothing is retained.”

## Anthropic commercial products

Anthropic currently says inputs and outputs from its commercial products such as Claude for Work and the API are not used for model training by default, except where users explicitly provide feedback/opt in or other stated exceptions apply.

**Source:** https://privacy.anthropic.com/en/articles/7996868-is-my-data-used-for-model-training

---

# The paid-account myth

A paid subscription does not itself establish that a tool is approved for company data.

Reasons:

- “paid individual” and “organisation-managed” can be different product categories;
- an employee's personal subscription may not be covered by the company's contract;
- administrators may require specific retention, logging, residency, identity and access controls;
- company policy can be stricter than vendor terms;
- integrations/plugins/connectors may create additional data flows.

A strong Myth vs Reality candidate:

**Myth:** “I pay for the AI, so work data is safe to use.”  
**Reality:** Payment alone does not tell you the applicable data handling, contract, settings or employer permission.

---

# Company policy: real public example

## Australian Government staff guidance

Digital.gov.au distinguishes public generative AI from enterprise/non-public tools and tells staff to follow agency policy first. It permits some public-AI use with appropriate information while restricting sensitive/personal information and emphasising critical assessment and accountability.

**Source:** https://www.digital.gov.au/policy/ai/staff-guidance-public-generative-ai

### Why useful

This is a concrete example of an organisation saying neither “ban AI” nor “anything goes.” It separates:

- tool category;
- information classification;
- permitted tasks;
- verification;
- accountability.

It directly supports Chapter 7's practical policy principle.

---

# Professional-body example: CPA Australia

CPA Australia's AI Hub states that responsibility for professional judgements and final outputs remains with the accountant, and that AI-generated information should be critically assessed and confidential information protected. It says the level of oversight should reflect the nature/sensitivity of the activity and consequences of inaccurate output.

**Source:** https://www.cpaaustralia.com.au/tools-and-resources/ai-hub

### Why useful beyond accounting

The accounting rules themselves are profession-specific, but the structure gives the chapter an excellent general principle:

> More consequential output deserves stronger review.

Use it as an attributed professional example rather than presenting CPA rules as universal workplace law.

---

# Company-policy checklist for an ordinary employee

Before using AI for work, a reader can look for:

- approved tools/workspaces;
- information classifications allowed/prohibited;
- rules for personal/customer data;
- requirements for human review;
- whether AI-assisted output needs disclosure/attribution;
- restrictions on automated decisions;
- recordkeeping requirements;
- restrictions on code/IP;
- whom to ask when uncertain.

A useful line for the eventual chapter:

> Access is not approval. A website loading on your work computer does not mean your organisation has approved every use of it.

This is a practical inference from organisational-control models, not a claim about every employer.

---

# Keep this proportionate

Chapter 7 does **not** need:

- a privacy-law tutorial;
- retention tables for every vendor;
- cybersecurity threat modelling;
- procurement due-diligence frameworks;
- detailed data-residency law;
- model-risk governance.

The evidence is here so the simple reader rule can be accurate.
