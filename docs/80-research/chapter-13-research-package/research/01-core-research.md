# 01 — Core Research

## 1. Testing the chapter's central framing: literacy over loyalty

### What "AI literacy" can reasonably mean

A useful academic anchor is Long and Magerko's 2020 CHI paper, which frames AI literacy around competencies needed to **effectively interact with and critically evaluate AI**, rather than simply knowing how to operate one interface. That formulation aligns well with the chapter's intended message because it is transferable across products.

Source: Duri Long & Brian Magerko, *What is AI Literacy? Competencies and Design Considerations*, CHI 2020, DOI: https://doi.org/10.1145/3313831.3376727

UNESCO's 2024 AI Competency Framework for Students is broader and education-focused, but useful for identifying durable components: a human-centred mindset, ethics, AI techniques/applications, and system design, across understand/apply/create levels. For an ordinary adult in Book 1, the relevant transferable subset is: understand what AI is doing at a high level, critically judge outputs and claims, recognise ethical/privacy implications, and know when/how to use it responsibly.

Source: UNESCO, *AI competency framework for students* (2024; page updated 2026-01-16): https://www.unesco.org/en/articles/ai-competency-framework-students

The EU's AI Act literacy material is workplace-focused rather than consumer education, but it reinforces the same principle: literacy depends on technical knowledge, experience, education, context, purpose, risk, and the people affected. The Commission's 2026 Q&A explicitly treats literacy as more than reading product instructions.

Source: European Commission, *AI Literacy — Questions & Answers* (current page accessed 2026-10-01): https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers

### Editorial conclusion

The chapter's framing is supported if it defines literacy as **judgment plus understanding**, not "being good at prompts". A useful durable distinction for the later writer:

- **Tool familiarity**: knowing where buttons are and how one service behaves today.
- **AI literacy**: knowing what kind of capability is appropriate, what can go wrong, what information is being entrusted, how to test output, how to compare claims, and when not to use AI.

The first dates quickly. The second transfers.

### Where "literacy over loyalty" needs qualification

The wording can accidentally suggest that loyalty is foolish or that switching frequently is desirable. Research and current product design suggest a more nuanced reality.

A user may rationally stay with a tool because it contains:

- conversation history;
- saved files/projects;
- memory/personalisation;
- custom instructions or preferences;
- account integrations and connected services;
- workflows shared with colleagues/family;
- accessibility setup;
- learned habits;
- a paid bundle they already need for other software;
- an employer-approved environment.

These are practical switching costs even when contractual lock-in is absent. This package does not have strong population-level evidence quantifying those switching costs specifically for AI assistants, so the later chapter should present them as **observable product/workflow considerations**, not a measured prevalence claim.

A safer interpretation of the core idea is:

> Learn principles that let you evaluate any tool. Then keep using a tool for as long as it continues to serve your needs, cost, privacy, and reliability requirements.

That preserves the approved framing without converting it into "switch often" advice.

## 2. Why product lists date quickly

There is direct evidence of churn at several levels.

### Rebrands

Google renamed Bard to Gemini in February 2024. This is a simple, beginner-friendly illustration that a printed brand guide can become stale even when the underlying service continues.

Source: Google, *Bard becomes Gemini: Try Ultra 1.0 and a new mobile app today*, 2024-02-08: https://blog.google/intl/en-africa/products/explore-get-answers/bard-becomes-gemini-try-ultra-10-and-a-new-mobile-app-today/

### Model retirements inside continuing products

OpenAI retired several ChatGPT models during February–March 2026, while Anthropic's platform documentation lists multiple Claude model retirements in 2025–2026. This is stronger evidence than generic "AI changes fast" rhetoric because it shows that even when the product name persists, the named model/interface available to readers can change in months.

Sources:
- OpenAI, *Retiring GPT-4o and other ChatGPT models* (current): https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models
- Anthropic, *Model deprecations* (current): https://docs.anthropic.com/en/docs/about-claude/model-deprecations

### Terms/settings change without product disappearance

Microsoft's current privacy documentation warns that an older Copilot privacy article applies only to the version before an app update on 2026-08-18 and points users to newer documentation. Anthropic and other providers have also changed consumer training choices/retention terms over time. This is especially relevant because a printed book can be technically accurate at publication yet misleading later if it says "go to this setting and switch this toggle".

Sources:
- Microsoft, *Microsoft Copilot privacy controls*: https://support.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-privacy-controls
- Anthropic Privacy Center, consumer training: https://privacy.anthropic.com/en/articles/10023580-is-my-data-used-for-model-training

### Durable lesson

The strongest evidence-backed argument is not "every tool disappears quickly". It is:

> Names, models, settings, prices, bundles and terms change at different speeds. A printed book should teach readers what to look for and keep volatile specifics on an updateable website.

## 3. Do beginners still benefit from a concrete starting point?

Yes. Avoiding product recommendations solves staleness and neutrality problems, but it creates a usability problem: a beginner can finish a conceptual taxonomy and still ask, "Fine, what do I actually do?"

The chapter can address this without naming a winner by giving a sequence:

1. Start with a real task, not a product search.
2. Check whether software/device you already use contains a suitable AI feature.
3. If not, identify the capability category needed.
4. Trial one legitimate service on a low-stakes task.
5. Apply the chapter's evaluation questions before connecting sensitive accounts or paying.
6. Use the companion website for current examples if the reader wants names.

This gives the beginner a concrete starting procedure while preserving the printed-book constraint.

## 4. What ordinary people actually use AI chatbots for

Pew Research Center's 2026 U.S. survey provides a useful non-Australian snapshot of ordinary adult uses. Among U.S. adults, 42% said they ever use AI chatbots to search for information; 38% of employed adults for work tasks; 25% for fun/entertainment; 24% for image/video creation/editing; 20% for medical advice; 20% diet/fitness information; 13% news; 10% emotional support/advice; 4% companionship.

Source: Pew Research Center, *Search and work are the most common uses for chatbots...*, 2026-06-11, survey conducted 2026-02-17 to 2026-02-23: https://www.pewresearch.org/chart/search-and-work-are-the-most-common-uses-for-chatbots-1-in-10-use-these-tools-for-emotional-support/

**Evidence type:** representative U.S. survey evidence, not Australian evidence.  
**Usefulness:** supports a task-first taxonomy and shows that "chat AI" already spans research, work, creativity, health information, entertainment and relational uses.  
**Limitation:** should not be presented as Australian prevalence.

Pew's age analysis also shows large age differences. For example, 20% of adults aged 65+ reported using chatbots to search for information, versus 54% among ages 18–29. That supports the plan's decision to remain beginner-friendly and to avoid assuming older readers already understand chatbot conventions.

Source: Pew Research Center, *How Americans' opinions and use of AI differ by age*, 2026-06-17: https://www.pewresearch.org/internet/2026/06/17/how-opinions-and-use-of-ai-differ-by-age/

Provider operational data is also useful but should be treated differently. OpenAI's 2026 Signals reporting says its consumer usage broadened across age/geography and that writing/information remained major work-related task groups. This says something about use **within ChatGPT**, not the whole AI market.

Source: OpenAI Signals, *How ChatGPT adoption broadened in early 2026*, 2026-05-11: https://openai.com/signals/research/2026q1-update/

## 5. Deciding whether another tool is needed at all

The draft's central question — "What task do I actually need this for?" — is strongly worth keeping.

### Why this matters more in 2026 than a simple six-app taxonomy suggests

AI capabilities are increasingly bundled into:

- office suites;
- search engines;
- phones and operating systems;
- email and document tools;
- cloud-storage subscriptions;
- browsers;
- creative suites;
- existing paid productivity plans.

Current examples are documented in `11-companion-website-material.md`. The general lesson for print is:

> Before buying a dedicated AI subscription, check whether the capability is already included in software or a device you use — and then evaluate the privacy/access implications of that embedded feature just as you would a separate app.

### Subscription fatigue evidence

AI is joining an already crowded recurring-subscription environment. Australian research supports warning readers to evaluate recurring value, not just introductory novelty.

Consumer Policy Research Centre (CPRC) reported in 2024 that 75% of Australians with subscriptions had some form of negative cancellation experience and 32% had felt pressured to keep a subscription. This is not AI-specific, but it is directly relevant to AI products sold via free trials and auto-renewal.

Source: CPRC, *Let Me Out — Subscription trap practices in Australia*, 2024-08-20: https://cprc.org.au/report/let-me-out/

Westpac's 2025 commissioned survey of 1,995 Australian adults found 38% cited forgetting to cancel a trial before auto-renewal as a reason for overspending, and 30% reported losing up to $600 annually on duplicate/unused services. This is bank-commissioned research and should be labelled accordingly, not treated as official national expenditure data.

Source: Westpac, *Subscription shock: Aussies fork out hundreds on unused services*, 2025-08-11: https://www.westpac.com.au/about-westpac/media/media-releases/2025/11-august1/

ING's 2025 YouGov survey of 1,024 Australian adults similarly found unused subscriptions and forgotten trials. Again, it is commissioned commercial research, useful as corroboration rather than a single definitive prevalence measure.

Source: ING Australia, *8.4 million Aussies are currently paying for subscriptions they don't even use*, 2025-01-23: https://newsroom.ing.com.au/8-4-million-aussies-are-currently-paying-for-subscriptions-they-dont-even-use/

### Editorial implication

The draft question "Would I still want this if the free trial ended today?" is memorable and supported by the broader subscription evidence. It should be framed as a behavioural filter, not as a legal test.

## 6. Free versus paid: what research can and cannot support

The research does **not** support a durable blanket statement that paid AI is always more accurate than free AI, or that free AI is always "good enough".

Provider plan pages consistently sell paid tiers through combinations of:

- higher usage limits;
- access to additional or newer models;
- larger storage/context allowances;
- additional generation modes;
- faster service tiers;
- integrated productivity features;
- admin/security/governance features;
- commercial/workplace protections.

That can indirectly affect quality for a particular task, but "paid" itself is not an accuracy guarantee. A paid user can still receive fabricated or misleading output, and a free model can be excellent on a simple task.

**Research-backed editorial position:** explain paid tiers as buying **access, capacity and features**, with possible quality differences depending on which model/features are unlocked. Keep Chapter 4's verification rule unchanged regardless of tier.

## 7. Equity and access

A real tension exists:

- free tiers widen access and can be sufficient for many beginner tasks;
- some stronger models, larger limits, privacy/admin controls, or advanced modalities may sit behind paid tiers;
- bundled AI may feel "free" to a user who already pays for a productivity/cloud suite, while another person faces a new subscription cost;
- accessibility features can create substantial value even when the mainstream use case seems optional.

The chapter does not need to solve the equity question. It should avoid implying that a competent AI toolkit requires multiple paid subscriptions.

## 8. Core research conclusions for the later writer

Keep:
- literacy over tool loyalty;
- task-first decision making;
- low-stakes trial before trust;
- reluctance to publish a named ranked tool list;
- explicit warnings about privacy, subscriptions, permissions and scams.

Strengthen:
- definition of literacy;
- acknowledgement of rational switching costs;
- distinction between capability categories and products;
- "already built in" AI;
- two levels of evaluation depending on risk;
- clear explanation that paid does not equal correct;
- consumer/business tier differences;
- Australian consumer/privacy protections and their limits.

Avoid:
- implying six categories mean six apps;
- implying every reader should expand their toolkit;
- implying product loyalty is irrational;
- implying free means data-funded or paid means private;
- implying current named settings belong in the permanent printed text.
