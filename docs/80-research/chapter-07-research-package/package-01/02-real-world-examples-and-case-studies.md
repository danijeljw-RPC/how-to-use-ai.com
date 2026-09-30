# Real-World Examples and Case Studies

This file collects the strongest documented examples found for Chapter 7. Each example includes what happened, what it demonstrates, how it could fit, whether it can be adapted for the book/website, and caveats.

## Example 1 — Professional writing became faster and better in a controlled experiment

### What it is

A preregistered experiment by MIT researchers Shakked Noy and Whitney Zhang tested ChatGPT on occupation-specific professional writing tasks.

### What happened

453 college-educated professionals completed midlevel writing tasks. Participants assigned access to ChatGPT completed them around 40% faster on average and received quality scores around 18% higher.

### Chapter 7 relevance

Direct support for:

- drafting reports;
- transforming rough material into a first draft;
- writing as one of the more evidence-supported office use cases.

### What it demonstrates

**Capability / productivity gain**, with experimental evidence.

### Reader value

This is stronger than saying “AI saves time writing reports” based on intuition. It gives the reader evidence that writing assistance can be substantial while keeping the claim bounded to tasks similar to those studied.

### Can it be recreated?

A companion website could run a simple demonstration rather than attempt to replicate the experiment:

1. give a reader a short fictional set of project notes;
2. ask them to produce a one-page stakeholder update manually;
3. then use AI for a different but similar fictional set;
4. compare time-to-usable-draft, corrections required, and final quality.

This would be an educational exercise, **not a scientific replication**.

### Caveats

- specific writing tasks, not every form of professional work;
- the model used in 2023 differs from current systems;
- speed to first answer is not the same as speed to approved final document.

### Original source

Noy, S. and Zhang, W. (2023), “Experimental evidence on the productivity effects of generative artificial intelligence,” *Science* 381(6654), 187–192.  
https://doi.org/10.1126/science.adh2586

---

## Example 2 — AI assistance increased customer-support throughput, especially for less experienced workers

### What it is

A large field study of a generative-AI assistant used by customer-support agents.

### What happened

The final study covered 5,172 agents. AI access increased issues resolved per hour by about 15% on average. Gains were larger among less experienced/lower-skilled workers, suggesting the system helped make useful patterns or knowledge more accessible.

### Chapter 7 relevance

This is the strongest case study for the template's customer-support section.

### What it demonstrates

**Capability / productivity gain / variation by worker experience.**

### Reader value

It shows that “AI at work” is not only about writing a memo in a chatbot. AI can sit inside an existing workflow and assist workers with recurring language-heavy tasks.

### Can it be recreated?

A safe demonstration can use a fictional customer thread:

- customer has sent six messages;
- three facts are scattered across the conversation;
- one request remains unresolved;
- AI must return “what the customer wants / important facts / missing information / draft response”.

Then the reader checks the AI output against the source thread.

This teaches both speed and verification.

### Caveats

- do not present 15% as a universal support productivity number;
- organisation, tool, workflow and worker experience matter;
- customer support may involve personal or confidential data, so use an approved system.

### Original source

Brynjolfsson, E., Li, D. and Raymond, L.R. (2025), “Generative AI at Work,” *Quarterly Journal of Economics* 140(2), 889–942.  
https://doi.org/10.1093/qje/qjae044

---

## Example 3 — The same AI helped on many consulting tasks and hurt on another

### What it is

The BCG “jagged frontier” experiment, later published in *Organization Science*.

### What happened

758 knowledge workers participated. Across 18 realistic tasks inside the AI capability frontier, AI users completed 12.2% more tasks and were 25.1% faster, with higher quality. On a complex managerial task selected outside the frontier, users with AI were 19% less likely to reach the correct answer.

### Chapter 7 relevance

Potentially the chapter's most useful evidence because it combines benefit and failure in one study.

Supports:

- the central “workplace multiplier” theme;
- verification;
- research and analysis;
- a warning against assuming AI is good at a task because a neighbouring task went well.

### What it demonstrates

**Capability + limitation + overreliance risk + task fit.**

### Reader value

The beginner takeaway is memorable:

> AI capability has an uneven edge. The hard part is that the edge is not always obvious in advance.

The chapter can explain this without maths or machine-learning details.

### Can it be recreated/adapted?

A website exercise could show two apparently similar tasks:

- Task A: reorganise well-defined project information into a decision matrix;
- Task B: answer a question where a crucial fact contradicts the obvious pattern.

The goal would be to teach checking, not to mimic the exact BCG experiment.

### Caveats

- GPT-4-era study; the exact frontier moves as systems change;
- specific consulting tasks;
- do not turn “jagged frontier” into a permanent map of which tasks current AI can/cannot do.

### Original source

Dell'Acqua, F. et al. (2026), “Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality,” *Organization Science* 37(2), 403–423.  
https://doi.org/10.1287/orsc.2025.21838

---

## Example 4 — Experienced developers thought AI sped them up even when the measured result showed the opposite

### What it is

METR randomised 246 real development tasks across 16 experienced open-source developers, allowing AI on some tasks and disallowing it on others.

### What happened

Developers took 19% longer when AI was allowed in this specific early-2025 setting. Beforehand, they expected a 24% speed-up. After the study, they still believed AI had sped them up by about 20%.

### Chapter 7 relevance

Useful as a counter-hype sidebar or in the discussion of verification/productivity.

### What it demonstrates

**Limitation / productivity measurement / perception gap.**

### Reader value

It offers a practical question beyond “does AI feel faster?”:

> Is the whole task actually finishing sooner once prompting, reading, correction and rework are included?

### Can it be recreated/adapted?

A companion exercise could ask users to measure “time to acceptable final output” across several recurring tasks for a week rather than relying on impression.

### Caveats

This example must be handled carefully:

- tiny, specialised sample;
- highly experienced developers;
- mature repositories familiar to them;
- early-2025 tools;
- authors explicitly say it does not show AI slows most developers.

### Original source

Becker, J., Rush, N., Barnes, B. and Rein, D. (2025), METR.  
https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

---

## Example 5 — AI reduced email time, but did not reduce meetings

### What it is

Microsoft Research studied a six-month cross-industry randomised field experiment involving 6,000 workers, half of whom received generative AI integrated into email, document and meeting applications.

### What happened

Workers who used the tool spent around three fewer hours — about 25% less — on email per week; the intent-to-treat estimate was 1.4 hours. Documents appeared to be completed moderately faster. There was no significant change in time spent in meetings.

### Chapter 7 relevance

Supports a subtle point: AI may more easily change work an individual controls than work requiring coordination with other people.

### What it demonstrates

**Capability + organisational constraint.**

### Reader value

This is a useful antidote to the idea that adding AI to every application automatically removes all workplace friction.

### Can it be recreated/adapted?

The chapter can ask the reader to identify tasks in two buckets:

- “I can change this myself” — drafting, sorting, summarising, preparing;
- “this requires other people to change too” — recurring meetings, approval chains, organisational dependencies.

### Caveats

The details are specific to the experiment and product context. Do not translate the findings into a guarantee that an email assistant will save every user three hours.

### Original source

Dillon, E., Jaffe, S., Immorlica, N. and Stanton, C. (2025), “Shifting Work Patterns with Generative AI,” Microsoft Research.  
https://www.microsoft.com/en-us/research/publication/shifting-work-patterns-with-generative-ai/

---

## Example 6 — Australian courts provide a concrete verification failure

### What it is

Australian courts have dealt with filings containing non-existent authorities associated with use of generative AI. Justice Needham's 2025 Federal Court speech discusses Australian examples including *Valu v Minister for Immigration and Multicultural Affairs (No 2) [2025] FedCFamC2G 95*.

The Federal Court subsequently published a dedicated Generative AI Practice Note in April 2026.

### What happened

The cases illustrate a basic failure mode: AI can produce legal citations that look legitimate but do not correspond to real authorities. The Federal Court's practice note explicitly warns that generated results may be inaccurate, entirely fictitious or plainly wrong and reinforces the user's responsibility to meet existing legal and professional duties.

### Chapter 7 relevance

Excellent for “Verification at Work”.

### What it demonstrates

**Failure / fabricated source / professional consequence / verification requirement.**

### Reader value

A fabricated court case is easy to understand even for readers with no legal background. The key lesson is transferable:

> A citation-looking object is not evidence that the cited source exists.

The same logic applies to reports, research papers, policies, statistics and product documentation.

### Can it be recreated/adapted?

Do **not** encourage readers to deliberately generate fake legal citations. A safer book/website demonstration is:

- provide a fictional AI research answer containing several links/citations;
- show a verification checklist;
- require the reader to open each cited source and confirm it supports the claim.

### Caveats

- legal practice has specialised professional obligations;
- do not imply every hallucination has legal consequences;
- use the example to teach verification, not legal advice.

### Original sources

Federal Court of Australia, GPN-AI, 16 April 2026:  
https://www.fedcourt.gov.au/law-and-practice/practice-documents/practice-notes/gpn-ai

Justice Needham, “AI and the courts in 2025,” 27 June 2025:  
https://www.fedcourt.gov.au/digital-law-library/judges-speeches/justice-needham/needham-j-20250627

---

## Example 7 — Current meeting recap products show both capability and warning labels

### What it is

Microsoft Teams recap can use meeting recordings/transcripts to generate AI-supported summaries, notes and tasks.

### What happened

The feature makes the Chapter 7 scenario tangible: meeting material can be transformed automatically into structured outputs. Microsoft's own documentation also warns users that generated content can be inaccurate or incomplete.

### Chapter 7 relevance

Supports “Summarising Meetings”.

### What it demonstrates

**Current capability + product-integrated workflow + need to verify.**

### Reader value

It bridges the gap between “paste notes into a chatbot” and the way many readers will encounter AI — already embedded in software their organisation licenses.

### Can it be recreated/adapted?

Yes. Use a deliberately fictional meeting transcript on the companion website and generate:

- decisions;
- actions;
- owners;
- unanswered questions.

Then show the source transcript beside the generated notes and let the reader identify one deliberate ambiguity, such as a proposed deadline being mistaken for an agreed deadline.

### Caveats

- feature availability/licensing can change;
- recording and transcription have separate privacy/policy implications;
- product output is not an official record merely because it appears inside an enterprise platform.

### Source

Microsoft Support:  
https://support.microsoft.com/en-us/teams/meetings/recap-in-microsoft-teams

---

## Example 8 — Spreadsheet assistants can build real spreadsheet logic, but real-world spreadsheet manipulation remains challenging

### What it is

Current Excel and Google Sheets assistants can create formulas, charts, pivots and other spreadsheet operations from natural language. Separately, SpreadsheetBench tests LLM systems against hundreds of real spreadsheet manipulation problems.

### What happened

Vendor products now expose broad spreadsheet capabilities, while the SpreadsheetBench research demonstrates that complex real-world manipulation has historically remained difficult for LLM systems and changes rapidly as models improve.

### Chapter 7 relevance

Supports the spreadsheet section with both capability and limitation.

### What it demonstrates

**Practical technique + limitation + value of deterministic output.**

### Reader value

The important idea is not “AI can do spreadsheets for you”. It is:

> AI can help translate what you mean into a formula or spreadsheet operation that you can then inspect and test.

### Can it be recreated/adapted?

Very easily. Create a small fictional sales table with a deliberately broken lookup, date calculation or percentage formula. Ask AI to:

1. diagnose the error;
2. propose the corrected formula;
3. explain it in plain language;
4. calculate known test cases manually.

### Caveats

- current product features are highly time-sensitive;
- benchmark scores should not be frozen into a long-lived printed book;
- model-generated analysis can be persuasive but wrong, especially where source data is messy.

### Sources

Microsoft Excel:  
https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel

Google Sheets:  
https://support.google.com/docs/answer/14356410?hl=en

SpreadsheetBench:  
https://arxiv.org/abs/2406.14991

---

## Example 9 — Enterprise account type changes the confidentiality story

### What it is

OpenAI, Microsoft and Google all publish enterprise/business documentation describing data-handling commitments that differ from simplistic assumptions about public consumer chatbots.

### What happened

Examples current at the research date:

- OpenAI states business/enterprise/API inputs and outputs are not used to train or improve models by default.
- Microsoft states Copilot prompts, responses and Microsoft Graph data are not used to train foundation LLMs, while interaction history is stored under Microsoft 365 controls and can be managed through organisational retention/eDiscovery mechanisms.
- Google states qualifying Workspace organisational content is not used for model training outside the domain without permission; it also distinguishes users who do not have qualifying enterprise protections.

### Chapter 7 relevance

Directly improves “Confidentiality and Company Policy”.

### What it demonstrates

**Trade-off / configuration difference / misconception correction.**

### Reader value

The lesson is simple and practical:

> “ChatGPT”, “Copilot” or “Gemini” is not enough information to decide whether workplace data is appropriate. Account type, product, contract and organisational settings matter.

### Can it be recreated/adapted?

A table can compare fictional categories rather than promising exact vendor settings:

| Question | Public consumer tool | Approved enterprise tool | Internal system |
|---|---|---|---|
| Approved for company data? | Check | Often policy-defined | Policy-defined |
| Model-training treatment | Product/settings dependent | Contract/product dependent | Organisation-controlled |
| Retention/logging | Product dependent | Often administrator-controlled | Organisation-controlled |
| Connected company data | Usually limited | Often substantial | Depends on system |

Then link to current vendor policies on the website.

### Caveats

- these are vendor claims/documentation, not independent audits;
- wording and product terms can change;
- “not trained on” does not mean “not processed/stored/logged”.

### Sources

OpenAI: https://openai.com/business-data/  
Microsoft: https://learn.microsoft.com/en-us/deployoffice/privacy/microsoft-365-copilot  
Google: https://support.google.com/a/answer/14130944

---

## Example 10 — AI-supported creativity can improve individual output while narrowing diversity

### What it is

Doshi and Hauser experimentally gave some short-story writers access to LLM-generated ideas.

### What happened

AI access improved judged creativity, writing quality and enjoyment, especially for less creative writers. AI-assisted stories were also more similar to one another.

### Chapter 7 relevance

Supports brainstorming as a nuanced use case rather than a one-sided “AI gives you more ideas” claim.

### What it demonstrates

**Capability + trade-off / anchoring / possible homogenisation.**

### Reader value

It prompts a useful workplace question: if an entire team starts ideation from the same kind of model-generated list, are they broadening their thinking or converging on the same starting point?

### Can it be recreated/adapted?

A companion exercise could compare:

- ideas generated independently by several people before AI is shown;
- ideas generated after everyone sees the same AI seed list.

This would be an illustrative exercise, not a scientific replication.

### Caveats

The original experiment studied short-story writing, not business brainstorming. Any workplace application must be presented as an analogy or hypothesis, not a direct finding.

### Original source

Doshi, A.R. and Hauser, O.P. (2024), *Science Advances* 10(28), eadn5290.  
https://doi.org/10.1126/sciadv.adn5290
