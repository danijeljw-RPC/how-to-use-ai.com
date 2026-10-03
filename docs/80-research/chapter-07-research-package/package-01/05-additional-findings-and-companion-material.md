# Additional Findings and Companion Material

## 1. Workplace AI adoption is often mundane, which is useful for this chapter

The strongest beginner examples are not necessarily spectacular autonomous agents. OECD survey data suggests widespread use in supportive tasks, with text generation particularly prominent. That reinforces the chapter's focus on reports, communication, support and other day-to-day friction.

This gives the later writer permission to avoid “future of work” spectacle. A chapter about turning messy notes into an accurate summary can be more useful than a chapter about hypothetical fully autonomous companies.

Source: OECD, *Generative AI and the SME Workforce*, 2025.  
https://doi.org/10.1787/2d08b99d-en

---

## 2. Training and governance lag adoption

The OECD survey indicates that only a minority of GenAI-using SMEs had measures such as formal training, internal guidelines or structured research into legal/copyright/regulatory questions.

This creates an important practical message:

> Individual workers may encounter AI before their organisation has developed mature norms for using it.

The chapter can therefore legitimately tell readers to find the organisation's actual policy rather than assume either “everyone is using it, so it must be allowed” or “there is no written policy, so anything goes”.

---

## 3. A useful beginner taxonomy of workplace AI tasks

This is an editorial synthesis from the research, not an external standard.

### A. Transform

Change existing material without intentionally adding new facts.

Examples:

- summarise;
- rewrite;
- change tone;
- structure notes;
- convert prose to table;
- extract actions.

Often a good beginner category because the source material can be compared directly with the output.

### B. Generate

Create candidate material.

Examples:

- first draft;
- presentation outline;
- brainstorming list;
- customer-response draft.

Useful, but the user decides what survives.

### C. Analyse

Identify patterns, explanations or implications.

Examples:

- interpret survey comments;
- identify spreadsheet trends;
- compare options;
- identify risks.

Requires stronger checking because the model is adding interpretation, not only rearranging text.

### D. Decide or act

Make/recommend consequential decisions or perform actions.

Examples:

- approve/refuse a customer outcome;
- rank candidates;
- send a message automatically;
- change records;
- execute financial/operational actions.

Higher stakes and stronger governance/oversight requirements.

This taxonomy could help the reader understand why “using AI at work” is not one risk category.

---

## 4. Potential diagram — the workplace AI loop

A vertical/square Mermaid-style diagram could show:

**Check policy/data → Give task + context → AI produces first pass → Verify important parts → Human edits/decides → Final work**

A side arrow from **Verify important parts** back to **Give task + context** can show iteration when the answer is incomplete.

This would visually reuse the Chapter 5 prompting skills while adding the workplace guardrails.

### Alternate diagram — three gates

A compact three-gate graphic:

1. **Task gate:** Is AI a good fit?
2. **Data gate:** Am I allowed to give this information to this tool?
3. **Output gate:** How will I check what matters?

This may be more book-friendly than a wide flowchart.

---

## 5. Potential table — task, benefit, main risk, check

| Workplace task | Why AI can help | Main failure mode | Practical check |
| --- | --- | --- | --- |
| Draft report | structure and wording | invented/altered facts | compare to source notes/data |
| Meeting summary | compression/extraction | inferred decisions/actions | compare with transcript/notes |
| Customer support | thread summary/first response | wrong policy or entitlement | check approved knowledge base |
| Presentation | structure and concise language | unsupported claims/poor narrative | source-check + human edit |
| Spreadsheet | translate intent into formulas/analysis | wrong formula/range/interpretation | test known values and inspect formula |
| Research | generate questions/locate leads | fake/stale/misread sources | open primary/current source |
| Brainstorming | fast variety | anchoring/sameness | add independent/contrasting ideas |

This is a high-value summary visual because it links capability directly to oversight.

---

## 6. Potential demonstration — “same prompt, different risk”

Use the same underlying AI skill — summarisation — in three situations:

1. summarise a public news article;
2. summarise internal project notes;
3. summarise an employee performance file.

The language task is almost identical, but the confidentiality/privacy consequences are completely different.

This directly illustrates the National AI Centre point that the **same tool can create different risks depending on use case**.

Source:  
https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-foundations

---

## 7. Potential demonstration — “AI first draft” with visible source constraints

Provide fictional notes:

- Project Atlas shipped feature A on 14 September.
- Feature B is delayed because supplier testing is incomplete.
- New target date has **not** been agreed.
- Customer pilot begins 5 October.

Ask AI to produce a short stakeholder update **using only the supplied notes**.

The exercise can deliberately test whether the model invents a date for Feature B or turns “target not agreed” into a confident schedule.

The reader can compare source and output in seconds.

This teaches:

- context;
- constraints;
- hallucination/over-completion;
- verification;
- practical workplace drafting.

No external company information is needed.

---

## 8. Potential demonstration — meeting ambiguity

Create a short fictional transcript:

> Priya: Could Alex own the vendor follow-up?  
> Alex: I can probably do it if legal sends the revised terms by Thursday.  
> Priya: Okay, let's revisit it Friday.

Ask AI for “decisions and action items with owners”.

A weak summary may convert this into “Alex will follow up with the vendor by Friday,” even though neither ownership nor deadline was firmly agreed.

This is a powerful beginner demonstration because the AI need not hallucinate a wild fact; it only needs to make an **overconfident inference**, which is common in summaries.

---

## 9. Potential demonstration — spreadsheet formula as auditable output

Provide a five-row table of sales and target values.

Ask:

- “Create a formula for percentage above/below target.”
- “Explain it in plain English.”
- “What should the result be for row 2 if sales are 120 and target is 100?”

Then show the formula calculating 20% and compare.

The teaching point is that AI can help build the spreadsheet while the spreadsheet remains the calculation engine.

---

## 10. Potential demonstration — research source checking

Create an AI-style answer containing three claims and three citations:

- one source directly supports its claim;
- one source exists but does not support the claim;
- one citation is fictional.

Ask the reader to classify each one by opening the link/source.

This demonstration would need carefully constructed fictional examples or openly licensed/current sources, but it can teach a highly transferable verification skill:

**existence → relevance → support**.

---

## 11. Companion website feature — live vendor privacy comparison

Because vendor policies change faster than a printed book, the website could maintain a dated comparison of major enterprise AI services with direct links to official data-handling documentation.

Fields could include:

- product/account category;
- training use of prompts/outputs;
- retention/history documentation;
- administrator controls;
- connector/integration notes;
- last checked date;
- direct source.

The book should teach the questions; the website can maintain the current answers.

Important: this should not become a simplistic “safe/unsafe” score. Organisational suitability depends on use and configuration.

---

## 12. Companion website feature — workplace task test

A small interactive worksheet could ask:

- What are you trying to do?
- Is the input public/internal/confidential/personal/sensitive?
- Is the AI tool approved?
- Does the output affect a customer, employee, legal/financial decision, or the public?
- What source can you use to verify it?

The result could suggest a **verification level**, not decide whether use is legally permitted.

This would operationalise the chapter without pretending to be legal/compliance advice.

---

## 13. Additional security finding — connectors and prompt injection

As AI systems gain access to email, documents, databases and actions, they can encounter untrusted instructions embedded in the material they read. The UK NCSC identifies prompt injection as a significant LLM weakness and notes risks can increase when LLMs connect to third-party applications and services.

Source:  
https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know

### Recommended chapter placement

Probably a short sidebar or website extension rather than a major Chapter 7 discussion. A beginner version could say:

> An assistant that can only draft text has a different risk profile from one that can read company systems or take actions. More access means more care about permissions and controls.

The detailed security mechanics belong in a later technical volume.

---

## 14. Additional governance finding — use-case accountability is more durable than brand lists

The Australian Government and National AI Centre both emphasise governance around AI **uses**, not merely a whitelist of brands.

This is important because:

- a single product can be used for both trivial and high-impact tasks;
- products add new capabilities and connectors;
- identical prompts may be acceptable with public data and inappropriate with sensitive data.

This is a more durable concept for a book than “Tool X is approved for Y” style guidance.

Sources:  
https://www.digital.gov.au/ai/ai-in-government-policy  
https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-foundations

---

## 15. Additional productivity finding — measure the whole workflow

The contrast between positive productivity studies and the METR developer study suggests a useful personal experiment for readers:

For one recurring task, measure:

- time to prepare the prompt/context;
- time waiting/interacting;
- time reading output;
- time correcting/verifying;
- total time to acceptable final result;
- errors/rework discovered later.

Compare with the previous workflow.

This prevents the common mistake of measuring “AI generated something in 20 seconds” rather than whether the work was genuinely completed faster.

This is an editorial practice derived from the research, not a standard experimental protocol.

---

## 16. Terminology worth defining briefly

### First draft

An initial version intended to be reviewed and changed, not the finished output.

### Grounding

Providing or connecting the AI to relevant source material so its answer can be based on that material rather than only general model knowledge. Avoid over-technical treatment.

### Hallucination / confabulation

An AI-generated statement that appears plausible but is unsupported or false. NIST's GenAI profile uses “confabulation” as a risk category; “hallucination” is more common public terminology.

NIST source:  
https://doi.org/10.6028/NIST.AI.600-1

### Human oversight

A person meaningfully supervising or checking the AI process/output, with enough information and authority to intervene. Avoid presenting “human in the loop” as a magical guarantee.

### Enterprise AI

A broad descriptive term for AI products/services configured and contracted for organisational use. It does **not** by itself imply a universal privacy/security configuration.

### System of record

The authoritative business source for a piece of information — for example, the actual CRM, finance system or approved policy document. This can be useful language for verification if explained simply.
