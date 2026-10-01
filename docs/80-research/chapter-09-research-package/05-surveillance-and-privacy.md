# Chapter 9 Research — Surveillance and Privacy

Research date: 2026-10-01

## Executive research takeaways

- Surveillance and privacy overlap but are not identical. **Surveillance is observation/monitoring/inference; privacy concerns what information is collected, inferred, used, retained, combined, shared and controlled.**
- AI can lower the practical cost of analysing huge volumes of video, audio, text and behavioural data. The chapter should distinguish what is technically possible from what is actually deployed and lawful.
- Australian facial-recognition cases provide unusually strong, concrete examples: Clearview AI and Bunnings show that “publicly available” images and “crime prevention” purposes do not remove Privacy Act obligations.
- “Facial recognition is illegal in Australia” is false as a blanket statement. Australian law imposes a high bar in many contexts, particularly because biometric information can be sensitive information, but lawfulness depends on purpose, consent/exception, notice, proportionality and other facts.
- Privacy risk for ordinary AI users is broader than “does the provider train on my chat?” It also includes retention, human review, connected data sources, memory, third-party sharing, inference, legal disclosure, breaches and other people's data.
- Product privacy controls change quickly and differ across consumer/business/enterprise offerings. Any provider-specific settings in the book should be dated and rechecked before publication.

---

# 1. Surveillance: what AI changes

AI can automate tasks that previously required significant human labour:

- locating/identifying faces across many camera feeds;
- transcribing recorded speech at scale;
- searching hours of recordings by topic/word/person;
- scoring worker activity;
- analysing licence plates or movement patterns;
- linking records from multiple sources;
- inferring attributes or interests from behavioural data;
- monitoring communications for patterns.

The key shift is often **economic and operational scale**, not that surveillance was impossible before.

A beginner-friendly sentence:

> AI can turn a mountain of footage, recordings or records from something humans could theoretically inspect into something organisations can search and analyse routinely.

---

# 2. Four questions that prevent overstatement

For every surveillance example, ask:

1. **Possible?** Can a system technically do it?
2. **Deployed?** Is anyone actually using it in this setting?
3. **Legal?** Is the use lawful in that jurisdiction and context?
4. **Accepted?** Even if lawful, do affected people regard it as proportionate or legitimate?

The existing draft collapses some of these. The final chapter should not.

---

# 3. Australian facial-recognition case — Clearview AI

Clearview AI built a face-search database by scraping images available online, including social-media material.

In a 2021 determination, the Australian Information Commissioner found Clearview AI had breached multiple Australian Privacy Principles, including by collecting sensitive biometric information without consent. In August 2024 the OAIC said the original determination stood and described the company's indiscriminate collection of Australian facial images from publicly available internet sources.

### What this demonstrates

- public visibility does not mean unrestricted reuse is automatically lawful;
- biometric templates can be sensitive information;
- AI can transform scattered photographs into a searchable surveillance capability;
- collection scale and purpose matter.

**Source:** OAIC, *Statement on Clearview AI*, 21 August 2024.  
https://www.oaic.gov.au/news/media-centre/statement-on-clearview-ai

### Strong generic analogy

A photo posted publicly used to be one image among billions. A face-search engine changes what can practically be done with that image by turning it into a key for searching a huge collection.

---

# 4. Australian facial-recognition case — Bunnings

Bunnings used facial-recognition technology in more than 60 Australian stores between 2018 and 2021 in an effort to identify repeat offenders associated with theft and violence.

The Privacy Commissioner issued a determination in 2024. In February 2026 the Administrative Review Tribunal affirmed findings that Bunnings contravened APP 1 and APP 5 relating to open/transparent privacy management and notice. The Tribunal also examined whether an exception to consent requirements applied, including questions of effectiveness, less intrusive alternatives and proportionality.

The Privacy Commissioner did not appeal the ART decision. OAIC updated retail facial-recognition guidance in July 2026 and described a **high bar** for lawful use in high-volume publicly accessible settings.

### Why this is exceptionally useful for Chapter 9

It is not a cartoon “company spies on shoppers” story. It contains a genuine trade-off:

- the retailer cited serious theft/violence and staff/customer safety;
- facial recognition is highly privacy-invasive;
- legality depends on safeguards, notice, necessity/proportionality and applicable exceptions.

That is exactly the kind of non-sensational tension the chapter needs.

**Sources:**

- OAIC, *OAIC statement on Administrative Review Tribunal's Bunnings decision*, 4 February 2026.  
  https://www.oaic.gov.au/news/media-centre/oaic-statement-on-administrative-review-tribunals-bunnings-decision
- OAIC, *Privacy Commissioner statement on Administrative Review Tribunal's Bunnings decision*, 5 March 2026.  
  https://www.oaic.gov.au/news/media-centre/privacy-commissioner-statement-on-administrative-review-tribunals-bunnings-decision
- OAIC, updated FRT guidance announcement, 29 July 2026.  
  https://www.oaic.gov.au/news/media-centre/privacy-commissioner-publishes-updated-guidance-on-facial-recognition-in-retail-spaces

**Recheck before publication:** current case law/guidance.

---

# 5. Emotion recognition / affect detection

Systems marketed as inferring emotion from facial expressions, voice or behaviour should be treated cautiously.

A major 2019 scientific review led by Lisa Feldman Barrett concluded that facial movements do not map consistently and specifically onto internal emotional states in the simple way many commercial claims assume.

### Beginner lesson

A camera can detect a facial movement. Inferring “this person is angry, dishonest, engaged or suitable for a job” is a much stronger claim.

**Source:** Barrett et al., *Emotional Expressions Reconsidered: Challenges to Inferring Emotion From Human Facial Movements*, *Psychological Science in the Public Interest* (2019).  
https://pubmed.ncbi.nlm.nih.gov/31313636/

## EU regulatory signal

The EU AI Act prohibits certain uses of emotion-recognition systems in workplaces and educational institutions, subject to defined exceptions such as medical/safety purposes.

**Source:** EU AI Act Service Desk, Article 5.  
https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-5

**Recheck before publication.**

---

# 6. Workplace surveillance and algorithmic management

AI-enabled workplace monitoring can include:

- activity measurement;
- productivity scoring;
- automated shift/task allocation;
- call/content analysis;
- performance recommendations;
- monitoring of communications;
- predictive scheduling.

This overlaps with Chapter 7, so Chapter 9 should focus on the broader risk: **automation makes fine-grained monitoring and scoring easier to scale.**

The OECD and ILO have published current work on algorithmic management, worker autonomy, monitoring and psychosocial risks.

**Sources:**

- OECD, *Algorithmic management in the workplace* (2025).  
  https://www.oecd.org/en/publications/algorithmic-management-in-the-workplace_287c13c4-en.html
- OECD, *How widespread is algorithmic management in workplaces?* (2025).  
  https://www.oecd.org/en/publications/how-widespread-is-algorithmic-management-in-workplaces_cda7a114-en.html
- ILO, *AI systems at work: changing the psychosocial work environment* (2026).  
  https://www.ilo.org/publications/ai-systems-work-changing-psychosocial-work-environment

---

# 7. Privacy risks for ordinary AI users

## 7.1 What you type or upload

Prompts can contain:

- names;
- work material;
- health information;
- legal/financial information;
- client details;
- children's details;
- confidential documents;
- information about other people who did not choose to use the tool.

Chapter 7 already covers workplace confidentiality. Chapter 9 should broaden the point: **privacy risk can affect the user and third parties.**

## 7.2 Training use is only one question

A product saying “we do not train on your data” does not automatically answer:

- how long data is retained;
- whether human reviewers may access it;
- whether memory/personalisation stores information separately;
- which subprocessors receive it;
- whether abuse/safety logs are retained;
- what happens after deletion;
- whether data is disclosed under legal process;
- whether connected apps/files are accessed;
- what enterprise administrators can see.

## 7.3 Connected AI features

Assistants increasingly connect to email, files, calendars, browsers and operating-system context. This can improve usefulness while expanding the data accessible to the service.

A beginner-friendly principle:

> The more useful an assistant becomes because it can “see” your digital life, the more important it is to understand what it can access, what it retains, and who controls the account.

## 7.4 Inference

AI can infer attributes that a person never directly typed: interests, likely preferences, relationships, health-related indicators or identity patterns from combinations of ordinary data.

Do not imply that every inference is accurate; incorrect inference can itself cause harm.

## 7.5 Memorisation / extraction

Research has demonstrated that large language models can memorise portions of training data and, under some conditions, reproduce personal or copyrighted material.

A 2023 paper demonstrated scalable extraction of memorised training data from several language models, including an attack against then-current ChatGPT behaviour.

### Caveat

This demonstrates a **class of privacy risk**, not that a 2023 exploit remains effective against current systems in 2026.

**Source:** Nasr et al., *Scalable Extraction of Training Data from (Production) Language Models*, 2023.  
https://arxiv.org/abs/2311.17035

Earlier foundational work:  
https://arxiv.org/abs/2012.07805

---

# 8. OAIC guidance on generative AI

The OAIC has specific guidance for organisations using commercially available AI products and for developers training generative models.

Important principles include:

- Australian privacy obligations can apply to personal information in AI inputs and outputs;
- organisations should understand how providers collect, use, retain and disclose information;
- OAIC recommends organisations avoid entering personal/sensitive information into publicly available generative AI products where appropriate safeguards are absent;
- publicly available personal information is not automatically free of privacy obligations;
- sensitive information attracts stronger rules.

**Sources:**

- OAIC, *Guidance on privacy and the use of commercially available AI products*, updated 17 January 2025.  
  https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products
- OAIC, *Guidance on privacy and developing and training generative AI models*.  
  https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-developing-and-training-generative-ai-models

**Recheck before publication.**

---

# 9. Australian privacy-law changes relevant to Chapter 9

The Privacy and Other Legislation Amendment Act 2024 enacted significant reforms.

## 9.1 Statutory tort for serious invasions of privacy

The statutory tort commenced on 10 June 2025.

**Source:** OAIC.  
https://www.oaic.gov.au/privacy/your-privacy-rights/more-privacy-rights/statutory-tort-for-serious-invasions-of-privacy

## 9.2 Automated-decision transparency in privacy policies

New transparency requirements concerning substantially automated decisions are scheduled to commence on **10 December 2026**. Organisations subject to the requirements will need privacy policies to include prescribed information where substantially automated decisions significantly affect individuals' rights or interests and personal information is used in the decision.

### Timing

As of 2026-10-01, this commencement date is still in the future.

**Sources:**

- Privacy and Other Legislation Amendment Act 2024:  
  https://www.legislation.gov.au/C2024A00128/
- OAIC, APP 1 guidance:  
  https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information
- OAIC, *New resources on transparency for use of AI and automated decision-making*, 30 September 2026.  
  https://www.oaic.gov.au/news/media-centre/new-resources-on-transparency-for-use-of-ai-and-automated-decision-making

**Recheck before publication.**

---

# 10. Do people meaningfully read privacy policies?

The current draft's phrase “terms and conditions nobody reads in full” is rhetorically understandable but too absolute.

The OAIC's 2020 Australian Community Attitudes to Privacy Survey found only about one in five Australians both read privacy policies and were confident they understood them; respondents cited length and complexity as barriers.

### Better chapter language

> Consent can be legally documented without being meaningfully understood. Australian survey evidence has found that relatively few people read and feel confident understanding privacy policies, with length and complexity among the barriers.

**Source:** OAIC, Australian Community Attitudes to Privacy Survey 2020.  
https://www.oaic.gov.au/engage-with-us/research-and-training-resources/research/australian-community-attitudes-to-privacy-survey/australian-community-attitudes-to-privacy-survey-2020

### Caveat

2020 predates the generative-AI boom. Use it to support the privacy-policy behaviour point, not to measure current attitudes to AI specifically.

---

# 11. Representative mainstream AI privacy controls — dated snapshot

This section is **research for practical examples**, not a permanent product catalogue.

## OpenAI consumer services — current documentation checked 2026-10-01

OpenAI documents controls covering model-improvement use, memory/personalisation and Temporary Chats. Data handling differs by product/account/workspace.

**Source:**  
https://help.openai.com/en/articles/7039943-how-openai-handles-data-in-consumer-services

**Recheck before publication.**

## Google Gemini — documentation current September 2026

Gemini's Privacy Hub explains how Keep Activity settings, temporary chats, human review and retention interact. Google states that some human-reviewed data is disconnected from the account and can be retained for a longer period, while temporary or activity-disabled interactions have separate retention rules for service/safety.

**Source:**  
https://support.google.com/gemini/answer/13594961?pubDate=20260311

**Recheck before publication.**

## Microsoft Copilot — current privacy controls

Microsoft documents controls for conversation-history/model-training choices and memory/personalisation. Retention and feature behaviour are service/account dependent.

**Source:**  
https://support.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-privacy-controls

**Recheck before publication.**

### What these examples demonstrate

- “training” and “retention” are different questions;
- temporary/private modes still require careful reading of provider terms;
- consumer and enterprise products can have materially different rules;
- settings change, so screenshots are better suited to the companion website than a static printed chapter.

---

# 12. Privacy misconceptions

| Claim | Better explanation |
|---|---|
| “If it is online publicly, an AI company can do anything with it.” | Public availability does not erase privacy, copyright or other legal obligations. Clearview is a concrete Australian example. |
| “If the provider doesn't train on my chat, it is private.” | Training use is only one dimension; retention, access, connected data, subprocessors and legal disclosure still matter. |
| “Deleting a chat means every copy disappears instantly.” | Deletion processes can involve retention periods, backups, safety/legal obligations and separate memory systems. Provider terms must be checked. |
| “Privacy is dead, so sharing more cannot hurt.” | Additional data can enable new inferences, fraud, profiling and harms. Privacy is not all-or-nothing. |
| “Facial recognition is illegal in Australia.” | No blanket ban. Privacy and other law set requirements; some uses may be unlawful, others may be permissible depending on context. |
| “Facial recognition is perfectly accurate now.” | Accuracy varies by algorithm, conditions, demographic group and task; even a low false-match rate can produce problems at high scale. |

---

# 13. Practical actions for ordinary users

Before pasting/uploading information into an AI service:

1. **Would I send this to an external service provider?**
2. **Does it identify someone else?**
3. **Is it sensitive, confidential, medical, financial or legally privileged?**
4. **Do I understand the account/workspace's data settings?**
5. **Can I remove names or unnecessary details?**
6. **Would a local/enterprise-approved tool be more appropriate?**

For personal accounts:

- review training/model-improvement controls;
- review chat history and memory/personalisation separately;
- use temporary/private modes for appropriate low-risk tasks, while recognising they are not magic anonymity;
- periodically review connected apps/files;
- use account security/MFA where available.

For surveillance harms, individuals have limited control. Regulatory safeguards, organisational governance, procurement rules and law matter.

---

# 14. What belongs in the printed book vs companion site

## Printed book

- Clearview example;
- Bunnings trade-off;
- “training is not the only privacy question”;
- one compact pre-upload checklist;
- principle that public availability ≠ unrestricted use;
- distinction between possible/deployed/legal/accepted.

## Companion website

- current screenshots of ChatGPT/Gemini/Copilot privacy settings;
- live Australian reporting/complaint links;
- updated facial-recognition cases;
- regulator guidance updates;
- product-specific retention tables.

---

# 15. Core sources

- OAIC Clearview statement:  
  https://www.oaic.gov.au/news/media-centre/statement-on-clearview-ai
- OAIC Bunnings ART statement:  
  https://www.oaic.gov.au/news/media-centre/oaic-statement-on-administrative-review-tribunals-bunnings-decision
- OAIC updated retail FRT guidance announcement:  
  https://www.oaic.gov.au/news/media-centre/privacy-commissioner-publishes-updated-guidance-on-facial-recognition-in-retail-spaces
- OAIC commercial AI privacy guidance:  
  https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products
- OAIC generative-AI training guidance:  
  https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-developing-and-training-generative-ai-models
- Privacy and Other Legislation Amendment Act 2024:  
  https://www.legislation.gov.au/C2024A00128/
- Barrett et al. emotion-inference review:  
  https://pubmed.ncbi.nlm.nih.gov/31313636/
- ILO algorithmic work / psychosocial risks:  
  https://www.ilo.org/publications/ai-systems-work-changing-psychosocial-work-environment

