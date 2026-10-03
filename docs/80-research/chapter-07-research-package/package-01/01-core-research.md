# Core Research — Chapter 7: AI at Work

## 1. The central claim: AI as a workplace multiplier

### What the evidence supports

There is now credible experimental and field evidence that generative AI can improve speed and/or quality on particular knowledge-work tasks.

**Professional writing.** Noy and Zhang ran a preregistered experiment involving 453 college-educated professionals completing occupation-specific, midlevel writing tasks. Participants given ChatGPT completed tasks around 40% faster on average, while independent quality scores rose around 18%. The gains also reduced measured performance inequality between workers.

Source: Shakked Noy and Whitney Zhang, “Experimental evidence on the productivity effects of generative artificial intelligence,” *Science*, 2023.  
https://doi.org/10.1126/science.adh2586

**Customer support.** Brynjolfsson, Li and Raymond studied the deployment of a generative-AI assistant to 5,172 customer-support agents. In the final *Quarterly Journal of Economics* paper, access increased issues resolved per hour by about 15% on average. Gains were substantially larger among less experienced and lower-skilled agents. The effects for highly skilled agents were smaller and included some evidence of speed gains coupled with modest quality reductions.

Source: Erik Brynjolfsson, Danielle Li and Lindsey R. Raymond, “Generative AI at Work,” *Quarterly Journal of Economics*, 2025.  
https://doi.org/10.1093/qje/qjae044

**Knowledge work is jagged, not uniformly improved.** Dell'Acqua and colleagues conducted a preregistered experiment with 758 knowledge workers from Boston Consulting Group. On 18 realistic consulting tasks selected to sit within GPT-4's capabilities, AI users completed 12.2% more tasks, were 25.1% faster, and produced higher-quality work. On a separate complex managerial task deliberately selected to sit outside the AI capability frontier, AI users were 19% less likely to produce the correct answer.

Source: Fabrizio Dell'Acqua et al., “Navigating the Jagged Technological Frontier,” *Organization Science*, 2026.  
https://doi.org/10.1287/orsc.2025.21838

### Stronger explanatory concept: the “jagged technological frontier”

For a non-technical reader, this concept may be more valuable than another list of AI features.

The research shows that AI capability does not rise smoothly with how difficult a task looks to a human. Two tasks that seem equally demanding can fall on opposite sides of the model's capability boundary. This makes “AI is good for easy tasks and bad for hard tasks” too simplistic.

A practical beginner interpretation is:

- test AI on the kind of task you actually need;
- do not assume success on one task transfers to the next;
- maintain an independent way to recognise a bad answer;
- use stronger checking when the consequence of error is higher.

### Important counter-evidence

METR's randomised trial with 16 experienced open-source developers covered 246 real tasks in mature repositories the developers knew well. With early-2025 AI tools allowed, developers took 19% longer. Before the tasks, they predicted AI would make them 24% faster; even after the study they believed it had made them about 20% faster.

The authors explicitly warn against generalising this narrow result to all software development. Its value for Chapter 7 is not “AI slows programmers”; it is the more general lesson that **perceived productivity and measured productivity can diverge**.

Source: Joel Becker, Nate Rush, Beth Barnes and David Rein, METR, 10 July 2025.  
https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

### Editorial implication

The supplied chapter's “workplace multiplier” framing is defensible if it is not presented as universal. Research supports something closer to:

> AI can multiply output on well-matched tasks, but the benefit is uneven and depends on the task, the user, the tool, and the quality of oversight.

That is an editorial synthesis, not a direct quotation from any source.

---

## 2. Drafting reports and other workplace writing

### Why this is a strong use case

Drafting is one of the best-supported Chapter 7 use cases because it maps closely to the writing tasks tested in controlled research. Generative models are effective at transforming existing material into a requested style, structure or length.

Useful transformations include:

- rough notes → structured first draft
- long draft → executive summary
- technical explanation → non-technical version
- bullet points → narrative
- narrative → table or action list
- one tone → another tone
- unstructured status notes → “completed / blocked / next steps”

The safest and most useful pattern is often **transformation of known source material**, rather than asking the model to supply missing facts from memory.

### Practical distinction: drafting vs authorship of facts

A model can help arrange or phrase factual material without being trusted as the origin of those facts. This distinction is important for beginners.

For example:

- Lower risk: “Using only these project notes, draft a one-page update.”
- Higher risk: “Write our quarterly project update and fill in anything missing.”

The first constrains the source material. The second invites unsupported completion.

### What still requires checking

Depending on stakes, check:

- numbers and dates
- names and job titles
- project status
- causal explanations (“the delay happened because…”)
- quotations
- policy or legal statements
- links and references
- commitments made on behalf of the organisation

### Conventional alternative

If the task is a fixed, recurring report whose contents come from structured data, a conventional template, database query, dashboard or deterministic automation may be more reliable than generating the whole document afresh with an LLM. AI is strongest where interpretation and language transformation are genuinely useful.

---

## 3. Summarising meetings

### Capability

AI can convert meeting transcripts or rough notes into:

- decisions
- action items
- named owners where explicitly stated
- open questions
- risks or blockers
- topic summaries
- follow-up email drafts

Current workplace products increasingly integrate this directly. Microsoft Teams recap, for example, can generate summaries, notes and tasks from meeting records/transcripts, while Microsoft itself warns that AI-generated content can be inaccurate or incomplete and should be checked.

Source: Microsoft Support, “Recap in Microsoft Teams.”  
https://support.microsoft.com/en-us/teams/meetings/recap-in-microsoft-teams

### A critical distinction missing from the current template

There are two separate workflows:

**A. Summarising notes that already exist.**  
The user has notes they are entitled to use and asks AI to reorganise them.

**B. Creating a recording/transcript so AI can summarise it.**  
The system records or transcribes people, creating an additional information asset that may be stored, retained, accessed or processed by other services.

Workflow B raises additional questions about:

- company policy
- participant notification
- privacy
- workplace surveillance law
- consent requirements where applicable
- data retention
- where recordings/transcripts are stored
- whether sensitive matters should be recorded at all

### Australian context

The OAIC notes that workplace monitoring and surveillance are not governed by one simple national rule; state and territory laws can be relevant. The eventual chapter should therefore avoid a blanket statement such as “you always need consent” or “one person's consent is enough”. Readers should follow their organisation's rules and applicable law.

Source: OAIC, “Workplace monitoring and surveillance.”  
https://www.oaic.gov.au/privacy/your-privacy-rights/surveillance-and-monitoring/workplace-monitoring-and-surveillance

OAIC observations on video-conferencing services also emphasise transparency, secure defaults, retention/data-location issues and limiting secondary uses.

Source: OAIC, “Observations following the joint statement on global privacy expectations of video teleconferencing companies.”  
https://www.oaic.gov.au/news/media-centre/observations-following-the-joint-statement-on-global-privacy-expectations-of-video-teleconferencing-companies

### Verification problem specific to meeting notes

Meeting summaries can create a false sense of an official record. The source transcript may itself be imperfect, and the summariser can then introduce another layer of error.

Useful checking questions:

- Was the decision actually made, or merely discussed?
- Was that person actually assigned the task?
- Is the deadline explicit or inferred?
- Did the summary omit a disagreement or condition?
- Does the wording make a tentative statement sound final?

This is a strong practical example of why “summary” does not mean “ground truth”.

---

## 4. Customer support

### Why this deserves prominence

Customer support has unusually strong real-world evidence. The Brynjolfsson, Li and Raymond study is more useful than a hypothetical support example because it measures deployment inside an actual support environment.

Key findings from the final 2025 paper:

- 5,172 support agents studied;
- access to an AI assistant increased issues resolved per hour by approximately 15% on average;
- less experienced/lower-skilled agents gained more;
- the tool appears to help diffuse some behaviours associated with stronger agents;
- effects were not identical across worker groups.

Source:  
https://doi.org/10.1093/qje/qjae044

### Practical workplace uses

- condense a long customer thread before replying;
- suggest a first-pass answer grounded in an approved knowledge base;
- rewrite an answer to match brand tone;
- extract the customer's requested outcome;
- identify unresolved questions;
- translate or simplify support information;
- create an internal handover summary.

### Human review matters most when

- refunds, warranties or contractual rights are involved;
- the customer is vulnerable or distressed;
- the issue is unusual;
- the answer relies on a policy or regulation;
- the model has access to customer personal information;
- the AI is proposing an action rather than merely drafting text.

### Important nuance

The customer-support study should not be translated into “AI improves every support worker by 15%”. It measured a particular system, organisation and period. Its larger lesson is that AI can provide material gains in a repetitive, language-heavy environment and that gains can vary by worker experience.

---

## 5. Presentations

### Current capability

Modern workplace assistants can turn existing documents or outlines into draft presentations, create slide structures, add speaker notes, and assist with rewriting or visual arrangement.

Microsoft's current PowerPoint Copilot documentation describes creating a draft presentation from source material and expects the user to review, edit and verify generated content.

Source: Microsoft Support, “Prepare your presentation with Microsoft Copilot.”  
https://support.microsoft.com/en-us/microsoft-365-copilot/prepare-your-presentation-with-microsoft-365-copilot

Google Workspace similarly provides Gemini-assisted presentation and content workflows. Because these features change frequently, the eventual chapter should use them as examples of a category, not as a permanent inventory of buttons.

### Where AI is genuinely useful

- converting an existing report into a slide outline;
- proposing a logical narrative order;
- identifying the one-line takeaway for each slide;
- rewriting dense text into concise slide language;
- generating a first-pass speaker-note structure;
- creating alternative framings for different audiences.

### Where human judgement remains central

- deciding what the audience actually needs;
- choosing which evidence matters;
- confirming the numbers and claims;
- ensuring charts communicate the right comparison;
- removing clutter;
- handling sensitive or politically/organisationally delicate material;
- preserving the presenter's actual voice.

### Useful anti-hype point

Generating more slides faster is not necessarily increased productivity if the user then spends substantial time correcting facts, layout, verbosity or narrative. A useful metric is “time to an acceptable final presentation”, not “time to first generated deck”.

---

## 6. Spreadsheets

### Current capability

As of September 2026, mainstream spreadsheet assistants can do substantially more than explain a formula.

Microsoft Copilot in Excel can currently help users:

- generate and explain formulas;
- summarise data;
- identify trends and outliers;
- create charts and PivotTables;
- sort, filter and format;
- edit workbook structure;
- answer natural-language questions about workbook data.

Microsoft explicitly advises users to review, edit and verify generated content.

Sources:  
https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel  
https://support.microsoft.com/en-gb/excel/copilot/data-insights-with-copilot-in-excel

Google Gemini in Sheets can currently create tables and formulas, generate analysis/insights and charts, and perform actions such as filters, conditional formatting and PivotTables on eligible plans.

Source:  
https://support.google.com/docs/answer/14356410?hl=en

### A useful conceptual distinction

For beginners, it may help to distinguish three layers:

1. **Intent:** “I need the percentage change between last month and this month.”
2. **AI translation:** AI proposes a formula or spreadsheet operation.
3. **Deterministic spreadsheet logic:** the actual formula calculates the result.

This is often safer than asking a chatbot to calculate or infer a large set of numbers in prose. Once the correct formula is in the spreadsheet, it is inspectable, repeatable and recalculates when the underlying data changes.

### Evidence that complex spreadsheets remain difficult

SpreadsheetBench was created from 912 real questions drawn from Excel forums and accompanying real-world-style spreadsheets. Its original evaluation found a substantial gap between state-of-the-art LLM systems and human expert performance on complex manipulation tasks. Performance has evolved rapidly since publication, so benchmark scores should be treated as time-sensitive rather than permanent limits.

Source: Zeyao Ma et al., “SpreadsheetBench: Towards Challenging Real World Spreadsheet Manipulation,” 2024.  
https://arxiv.org/abs/2406.14991

### Good demonstration for the book/website

Use a small, auditable table and ask AI to:

- explain why a formula errors;
- propose the corrected formula;
- explain the formula in plain English;
- calculate two sample rows manually as a check.

This demonstrates the capability while teaching verification instead of blind trust.

### When ordinary spreadsheet features are better

Use normal spreadsheet functions, formulas, validation rules, Power Query/data transformation, PivotTables or macros/automation when the requirement is exact, stable and repeatable. AI is useful when the hard part is expressing the intent or figuring out how to build the logic.

---

## 7. Research at work

### What “research” should mean here

The template currently describes AI as useful for a “first pass”. That is a sound direction but should distinguish several different tasks:

- generating questions to investigate;
- identifying possible factors or perspectives;
- suggesting search terms;
- summarising provided documents;
- locating sources with a research/search system;
- making factual claims from model memory.

These are not equally reliable.

### Strong use pattern

For an unfamiliar work problem, AI can turn a blank page into a research plan:

- What questions should we answer?
- What evidence would distinguish the options?
- What assumptions are hidden in this proposal?
- What stakeholder perspectives might be missing?
- What search terms would find primary evidence?
- What would change the decision?

Then use authoritative sources, organisational records, databases or source-backed web research for factual claims.

### Weak use pattern

“Tell me everything important about supplier X and whether we should sign the contract” invites the model to combine research, evidence assessment and decision-making without traceability.

### Source discipline

If a claim matters to a decision, the chapter should encourage the reader to ask:

- What is the original source?
- Is the source current?
- Does it actually support the claim?
- Is it independent, or is it a vendor claim?
- Does it apply to our country, industry and circumstances?

This converts “verify AI” into a usable behaviour.

---

## 8. Brainstorming

### Capability

Brainstorming is low-cost and often useful because the goal is not necessarily to obtain a factually correct single answer. AI can rapidly produce:

- alternative angles;
- names or headings;
- stakeholder questions;
- objections;
- assumptions;
- possible risks;
- ways to structure a proposal;
- options the user can reject or combine.

### Limitation: anchoring and sameness

Doshi and Hauser experimentally studied short-story writers given access to generative-AI ideas. AI-assisted stories were judged more creative, better written and more enjoyable, particularly for less creative writers, but the resulting stories were more similar to one another.

Source: Anil R. Doshi and Oliver P. Hauser, *Science Advances*, 2024.  
https://doi.org/10.1126/sciadv.adn5290

This was a creative-writing experiment, **not a workplace brainstorming experiment**, so the later chapter should not over-generalise it. It does support a useful adjacent possibility: when everyone asks similar models similar questions, ideation may become anchored around similar suggestions.

### Practical mitigation

A recreatable technique is to brainstorm independently before showing the group AI-generated options, or deliberately ask for contrasting frames rather than a single list. This is an editorial recommendation based on the evidence, not a tested conclusion from the study above.

---

## 9. Confidentiality and data handling

### The current template needs a more precise model

The statement “if you wouldn't paste it into a public forum, don't paste it into an AI tool” is memorable but too broad to teach how workplace AI actually differs by deployment.

A beginner-friendly model should distinguish at least:

- a public consumer AI account;
- an employer-approved enterprise account;
- an API or application covered by an organisational contract;
- an internally hosted or otherwise controlled system;
- AI embedded in an existing workplace product;
- third-party extensions, agents or connectors attached to that product.

These may differ in training use, retention, logging, administrative access, geographic processing, contractual protection, security controls and integration access.

### Australian privacy guidance

The OAIC's guidance on commercially available AI products is directly relevant to Chapter 7.

Important points include:

- Privacy Act obligations can apply to personal information used as input and to output containing personal information.
- Organisations should perform due diligence on products and intended use.
- They should consider testing, human oversight, privacy/security risks and who can access information.
- The OAIC recommends, as a matter of best practice, not entering personal information — particularly sensitive information — into publicly available generative-AI tools because of the privacy risks.

Source: OAIC, “Guidance on privacy and the use of commercially available AI products,” published 21 October 2024, updated 17 January 2025.  
https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products

### “Not used for training” does not mean “not stored”

This is a particularly useful misconception to correct.

For example, current Microsoft enterprise documentation states that prompts, responses and Microsoft Graph data used by Copilot are not used to train foundation LLMs. The same documentation also says interaction data, including prompts and responses, is stored in line with Microsoft 365 contractual commitments and can be subject to organisational retention/eDiscovery controls.

Source:  
https://learn.microsoft.com/en-us/deployoffice/privacy/microsoft-365-copilot

OpenAI currently states that, by default, it does not use data from its listed business/enterprise/API products to train or improve models.

Source:  
https://openai.com/business-data/

Google currently distinguishes qualifying Workspace enterprise use from users without qualifying protections; its Workspace documentation states that qualifying organisational content is not used for model training outside the domain without permission, while different terms can apply to other account types.

Source:  
https://support.google.com/a/answer/14130944

These are **vendor descriptions of their current services**, not independent privacy audits. The important teaching point is to check the exact product, plan, account and organisational configuration rather than making assumptions from a brand name.

### A practical pre-prompt checklist

Before using workplace information, a reader can ask:

1. Is this tool/account approved by my organisation?
2. What kind of data am I about to provide: public, internal, confidential, personal, sensitive, legally privileged, regulated?
3. Does this specific service retain, log, review or use the material for model improvement?
4. Who else can access the interaction — provider staff, administrators, connected apps, external agents?
5. Would the task still work with names/details removed or replaced?

This is a research-based editorial synthesis, not a legal checklist.

---

## 10. Company policy and governance

### Why “ask your manager or IT” is too narrow

That is still useful advice, but mature organisations may have more formal controls:

- approved/prohibited tools;
- data classifications;
- permitted use cases;
- disclosure requirements;
- procurement review;
- risk assessment;
- training;
- audit/recording requirements;
- human review requirements;
- rules for customer-facing or high-impact decisions.

### Australian National AI Centre guidance

The National AI Centre's current “Guidance for AI adoption: foundations” is explicitly intended for organisations starting AI adoption or using it in low-risk ways. It identifies six essential practices:

1. decide who is accountable;
2. understand impacts and plan accordingly;
3. measure and manage risks;
4. share essential information;
5. test and monitor;
6. maintain human control.

It also makes a particularly useful beginner point: **the same AI tool can create different risks depending on how it is used.** Drafting a marketing email is not equivalent to using AI to assess job applicants.

Source: National AI Centre, current guidance, published May 2026.  
https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-foundations

### Australian Government example

The Australian Government's Policy for the Responsible Use of AI in Government v2.0, effective 15 December 2025 for relevant Commonwealth entities, requires measures including accountable officials, transparency statements, strategic/operational approaches, use-case accountability, registers, training and impact assessment.

Source:  
https://www.digital.gov.au/ai/ai-in-government-policy

This is useful as a concrete demonstration that serious AI policy is about **specific use cases and accountability**, not merely banning or allowing “AI”.

---

## 11. Verification at work

### Verification is one of the chapter's most important sections

The supplied template correctly raises the stakes of errors at work, but “a human checks it” is too vague.

Useful verification methods differ by output:

| AI output | Stronger verification behaviour |
| --- | --- |
| Report facts | compare against project/system-of-record data |
| Meeting actions | compare with notes/transcript and confirm owners/deadlines |
| Customer-policy answer | check approved policy/knowledge-base source |
| Spreadsheet formula | inspect formula and test known cases |
| Research claim | open the cited primary source |
| Legal/policy claim | check current authoritative material or qualified advice |
| Presentation figure | trace to source data and recalculate where material |
| Summary | inspect whether important exceptions/conditions were dropped |

### Australian legal example: fabricated authorities

The Federal Court of Australia's 2026 Generative AI Practice Note explicitly warns that generative AI can create inaccurate, fictitious or plainly wrong results and requires users to remain guided by existing legal/professional responsibilities. The Court recognises potential efficiency benefits while requiring due care.

Source: Federal Court of Australia, “Use of Generative Artificial Intelligence Practice Note (GPN-AI),” 16 April 2026.  
https://www.fedcourt.gov.au/law-and-practice/practice-documents/practice-notes/gpn-ai

Justice Needham's 2025 speech describes Australian proceedings involving non-existent authorities produced through AI use, including *Valu v Minister for Immigration and Multicultural Affairs (No 2) [2025] FedCFamC2G 95*.

Source: Federal Court of Australia, “AI and the courts in 2025,” 27 June 2025.  
https://www.fedcourt.gov.au/digital-law-library/judges-speeches/justice-needham/needham-j-20250627

This is a strong local case study because it converts the abstract word “hallucination” into an understandable workplace failure: a polished-looking citation is not evidence that the cited case exists.

### Human oversight can itself fail

A 2025 CHI study surveyed 319 knowledge workers and collected 936 first-hand examples of GenAI use. Higher confidence in GenAI was associated with less reported critical-thinking effort; higher self-confidence was associated with more. Participants described critical thinking shifting toward verification, integration and task stewardship.

Source: Hao-Ping Lee et al., CHI 2025.  
https://doi.org/10.1145/3706598.3713778

This is self-reported survey evidence, not proof that AI causally damages critical thinking. It is still useful evidence against the simplistic assumption that merely putting a human “in the loop” guarantees careful scrutiny.

### Risk-proportionate checking

Not every AI output needs the same burden of checking.

A low-stakes internal brainstorm can tolerate suggestions that are incomplete or wrong because the user is selecting ideas. A client-facing claim about a contract, financial result, employment decision or regulatory requirement may require source-level confirmation and possibly specialist review.

A useful Chapter 7 lesson is therefore **verify according to consequence**, not “fact-check every adjective”.

---

## 12. Adoption and what ordinary workplaces are actually doing

The OECD's 2025 survey covered 5,232 SMEs across Austria, Canada, Germany, Ireland, Japan, Korea and the United Kingdom.

Key findings:

- about 31% reported someone in the business used generative AI;
- 65% of GenAI-using SMEs reported improved employee performance;
- 83% reported no change in overall staffing need;
- 39% of GenAI-using SMEs that had experienced a skill gap said AI helped compensate for it;
- concerns among non-adopters included suitability, copyright/legal/regulatory questions, information handling and employee skills;
- only a minority of adopting SMEs had measures such as structured training, internal guidelines or regulatory/copyright research.

Source: OECD, *Generative AI and the SME Workforce: New Survey Evidence*, 5 November 2025.  
https://doi.org/10.1787/2d08b99d-en

These are primarily **survey/self-reported findings**, not causal productivity measurements. Their value for Chapter 7 is showing that workplace adoption is broad enough to matter while governance and training often lag.

The report also helps counter a hype-heavy narrative: much workplace use is supportive and task-level rather than wholesale replacement of jobs or departments.
