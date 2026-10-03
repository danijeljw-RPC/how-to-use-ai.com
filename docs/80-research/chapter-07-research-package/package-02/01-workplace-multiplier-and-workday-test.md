# AI as a Workplace Multiplier and the “Workday Test”

## Research question

How defensible is the chapter's central idea that AI can act as a workplace multiplier?

## Bottom line

The idea is supportable **if multiplier is described as conditional rather than automatic**. Multiple experiments and field studies show genuine gains in time, throughput or quality, but the effect varies sharply by task and worker. Other evidence shows slower completion, weaker downstream outcomes, or gains confined to a narrow part of the workflow.

A useful chapter formulation is:

> AI can multiply professional capability when it is well matched to the task and the result can be reviewed effectively.

This is more defensible than “AI makes workers more productive.”

---

## Evidence: professional writing tasks

### Noy and Zhang — Science, 2023

**Design:** Preregistered controlled experiment with 453 college-educated professionals performing occupation-specific mid-level writing tasks.

**Result:** Access to ChatGPT reduced average completion time by about 40% and increased evaluated output quality by about 18% in the experimental tasks.

**Additional observation:** The performance gap between stronger and weaker participants narrowed.

**Why useful to Chapter 7:** Strong evidence for report-like and drafting assistance, especially when the task is self-contained and language-heavy.

**Important limitation:** These experimental writing tasks did not reproduce the full complications of real organisational work: proprietary source material, approvals, stakeholder politics, factual verification, internal systems, and consequences for errors. Do not convert the result into “AI makes professional writing 40% faster in the workplace.”

**Source:** Noy, S. & Zhang, W. (2023), *Experimental evidence on the productivity effects of generative artificial intelligence*, Science. https://doi.org/10.1126/science.adh2586

---

## Evidence: customer support

### Brynjolfsson, Li and Raymond — NBER / Quarterly Journal of Economics

**Setting:** Staggered introduction of a generative-AI conversational assistant to 5,179 customer-support agents.

**Measured effect:** Productivity, measured as issues resolved per hour, increased about 14% on average.

**Heterogeneity:** Novice and lower-skilled workers gained much more — about 34% — while the impact on experienced/high-skilled workers was small.

**Other reported outcomes:** Improved customer sentiment, reduced escalation to managers, improved employee retention, and suggestive evidence of learning.

**Why useful:** This is one of the strongest examples for the chapter's “multiplier” idea because it shows augmentation inside a real workflow rather than generic text generation.

**Nuance:** The average conceals a large experience effect. The chapter should explicitly teach that the same AI tool can be more useful to one worker than another.

**Source:** Brynjolfsson, E., Li, D. & Raymond, L. R. (2023; published 2025), *Generative AI at Work*. https://www.nber.org/papers/w31161

---

## Evidence: the jagged capability frontier

### Dell'Acqua et al. / BCG consultants

**Setting:** 758 consultants completing realistic knowledge-work tasks with or without GPT-4.

**Inside the tested AI capability frontier:** AI-assisted consultants completed more tasks, worked faster, and produced higher-rated work.

**Outside the frontier:** On a task designed to expose a model weakness, AI-assisted participants were more likely to give an incorrect answer.

**Why useful:** This gives the chapter a non-technical concept for explaining why AI can be excellent at one work task and counterproductive at the next.

**Editorial concept:** Do not teach “AI is good at reports, bad at X” as a fixed list. Teach that task suitability is uneven and can move as tools improve.

**Source:** Dell'Acqua et al., *Navigating the Jagged Technological Frontier*. https://aiinstitute.hbs.edu/navigating-the-jagged-technological-frontier/

---

## Evidence: email and knowledge-work patterns

### Dillon, Jaffe, Immorlica and Stanton — NBER, 2025

**Setting:** Six-month randomised field experiment across 66 firms and 7,137 knowledge workers using generative AI integrated into existing workplace applications.

**Observed result:** Among treated workers who used the tool, time spent on email fell by roughly two hours per week in the second half of the experiment, with less work outside regular hours.

**What did not clearly change:** Researchers did not detect broad changes in the overall quantity or composition of work tasks from individual-level provision of the tool.

**Why useful:** Good corrective to narratives that adoption instantly transforms an entire job. It may first reduce friction in particular activities.

**Conflict/disclosure:** Some authors were Microsoft employees during the research. The paper records this relationship and states authors retained discretion over results and estimates.

**Source:** https://www.nber.org/papers/w33795

---

## Counterexample: experienced developers slowed down

### METR — 2025 RCT

**Setting:** 16 experienced open-source developers, 246 real tasks, mature projects on which developers had about five years of prior experience on average.

**Result:** Allowing early-2025 AI tools increased completion time by about 19% in this study.

**Perception gap:** Participants expected AI to make them faster and, after the experiment, still believed it had made them faster.

**Why useful:** Very strong illustration of the “workday test”: perceived speed and actual completion speed can differ.

**Do not overgeneralise:** This was a small and highly specialised technical setting. It does not prove that AI slows experienced workers generally.

**Source:** Becker, J., Rush, N., Barnes, E. & Rein, D. (2025). https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

---

## Counterexample: faster local task, worse downstream outcome

### Wiles and Horton — AI-written job posts

**Setting:** Field experiment in an online labour market. Employers were randomly offered AI-written first drafts of job advertisements.

**Local efficiency effect:** Employers with AI spent about 44% less time writing a post and were about 19% more likely to post a job.

**Downstream outcome:** AI-assisted postings did not increase matches; posts were more generic and less informative. MIT's report of the study says AI-written posts were 15% less likely to result in a hire.

**Why useful:** An unusually clear example showing that faster generation can be a misleading productivity metric. The employer saved time, but the overall workflow did not become more effective.

**Source:** Wiles, E. & Horton, J. J., *Generative AI and labor market matching efficiency*. https://john-joseph-horton.com/papers/generative-ai-and-labor-market-matching-efficiency/

**Accessible institutional summary:** https://mitsloan.mit.edu/ideas-made-to-matter/what-can-happen-when-employers-use-ai-to-write-job-posts

---

## Survey evidence: small and medium-sized businesses

### OECD — Generative AI and the SME Workforce, 2025

**Survey:** More than 5,000 SMEs across seven countries, fieldwork in late 2024.

**Reported use:** About 31% said generative AI was in use by the respondent or a colleague.

**Reported benefit:** 65% of AI-using SMEs reported that it improved employee performance; around one third reported reduced workload.

**Skill gap:** 39% of AI-using SMEs that had experienced a skills gap reported that generative AI helped compensate for it.

**Staffing:** 83% reported no change in overall staff need; 6% reported an increase and 9% a decrease.

**Important evidence label:** These are organisation-reported survey responses, not independently measured productivity effects.

**Why useful:** Supports ordinary small-business relevance and counters the idea that workplace AI belongs only to large technology companies.

**Source:** OECD (2025), *Generative AI and the SME Workforce: New Survey Evidence*. https://doi.org/10.1787/2d08b99d-en

---

# The “Workday Test”

## Proposed heuristic

> Did AI actually make the completed work easier, faster or better?

This is stronger than asking whether the AI generated something quickly.

## Whole-task accounting

For a practical demonstration, measure or at least notice:

| Stage | Possible saving | Possible cost |
| --- | --- | --- |
| Preparing context | Reuses existing notes/data | Cleaning/redacting context can take time |
| Prompting | Quickly frames the task | Repeated prompt repair can become work |
| Generation | Seconds rather than minutes | Fast output can encourage premature acceptance |
| Reading | Structured first pass | Long generic output can be slower to digest |
| Editing | Easier than a blank page | Heavy rewriting can erase the saving |
| Verification | Can target known claims | Source reconstruction can be expensive |
| Approval | Better-structured draft may help | Unclear provenance can slow approval |
| Downstream use | Faster handover/support | An error can create rework for many people |

## Chapter-ready scenarios

### Genuine gain

A project coordinator already has accurate status notes. AI converts them into a requested executive-summary structure. The coordinator checks dates, numbers and status against the source notes, makes a few edits, and sends it. The AI reduced structure/wording effort without inventing substantive content.

### Apparent gain that disappears

A worker asks AI to “write a market report” without supplying source material. It produces fluent claims and citations rapidly. The worker then has to find the sources, discover which citations exist, correct the numbers and rewrite the conclusion. Generation was fast; completion was not.

### Better conventional tool

A finance worker needs the exact total of a known column. A spreadsheet `SUM` or pivot table is deterministic, transparent and faster than asking a chatbot to reason from pasted values. AI may help explain how to create the formula, but should not replace the calculation engine without a reason.

### AI creates friction by replacing existing structure

A ticketing system already has reliable categorisation rules and templates for a common support request. Asking a general AI model to recreate the classification adds uncertainty and review work. Use AI where ambiguity or unstructured language is the problem; keep purpose-built deterministic systems where they are already better.

---

# Junior, experienced and expert workers

## What the evidence supports

The most consistent finding across several prominent studies is **heterogeneity**, not “juniors win” as a universal rule.

- Customer support: novice/lower-performing workers received much larger measured gains.
- Professional writing: lower-performing workers gained more, narrowing output-quality differences.
- Consulting study: participants below the baseline median saw larger gains on tasks inside the capability frontier.
- Experienced developer study: highly experienced developers on their own mature repositories were slowed in that setting.

## Why this might happen

Plausible mechanisms include:

- AI can expose novices to patterns/structures that experts already know;
- an expert may spend time correcting suggestions that are worse than their own first choice;
- novices may be more vulnerable to plausible errors because they have less domain knowledge;
- experts can potentially use AI at a higher abstraction level, but only when it complements rather than interrupts established workflows.

These mechanisms should be labelled as interpretations unless directly measured in the cited study.

## Defensible chapter statement

> AI often changes the value of experience rather than simply replacing it: a newer worker may gain access to useful patterns sooner, while an experienced worker may gain less — or even lose time — if the tool interrupts a workflow they already perform efficiently.

Add the immediate caveat: results vary by occupation and task.

---

# Strongest lesson for Chapter 7

“Workplace multiplier” should not mean “automatic accelerator.” It should mean that AI can amplify a worker's ability to turn existing information, judgement and objectives into useful work — when the task is suitable, the inputs are appropriate, and the output can be checked.
