# Practical Workflows and Role-Diverse Workplace Examples

## Purpose

This file supplies practical research and example material for ordinary professional readers. It intentionally avoids making software development the default workplace example.

# A reusable model for workplace AI tasks

Most strong Chapter 7 examples can be described with six questions:

1. **What is the worker trying to accomplish?**
2. **What reliable source material already exists?**
3. **What context does the AI actually need?**
4. **What information should be withheld, generalised or handled only in an approved system?**
5. **What output structure would make the result useful?**
6. **What parts require verification before use?**

This turns “prompt engineering” into ordinary professional communication.

---

# Drafting reports

## Strong use pattern

AI is best positioned as a structuring/drafting layer over supplied information rather than an autonomous source of organisational facts.

### Inputs that improve the request

- objective of the report;
- reporting period;
- intended audience;
- source notes or approved source documents;
- required sections;
- length;
- terminology;
- known risks/uncertainties;
- desired tone;
- explicit instruction not to invent missing facts.

### Good-fit tasks

- status reports;
- project updates;
- executive summaries;
- internal briefings;
- incident-summary structure;
- converting notes into readable prose;
- shortening a long draft;
- changing audience level while keeping the facts fixed;
- comparing two supplied versions and identifying differences.

### Failure modes

- invented milestones or reasons for delay;
- stronger conclusions than the evidence supports;
- altered or rounded numbers;
- missing qualifications;
- fabricated citations;
- confident completion of fields for which the user provided no data.

### Practical verification

Compare the final draft against the source notes section by section. Numbers, dates, names, status labels, commitments and citations deserve explicit checks.

---

# Documentation

## Strong use pattern

The worker possesses the organisational knowledge; AI helps make it structured, clearer and more consistent.

### Good-fit examples

- administrator turns rough procedural notes into a draft SOP;
- operations worker converts an incident timeline into a post-incident template;
- small business turns existing service information into FAQ drafts;
- team lead turns handover notes into a consistent checklist;
- subject-matter expert rewrites technical instructions for a non-technical audience;
- HR team standardises formatting and terminology across generic onboarding material.

## Critical distinction

> Documenting known information is different from inventing missing organisational knowledge.

If the source notes omit an approval step, AI can easily create a plausible one. That can make an invented process look official.

### Better instruction characteristic

Ask the model to mark missing information explicitly, e.g. “If the notes do not specify who approves a step, label it `Approval owner: not provided` rather than inferring one.”

---

# Customer support

## Useful assistance

- summarise a long support thread;
- list troubleshooting already attempted;
- identify the unresolved customer request;
- draft a response using supplied policy/knowledge-base material;
- rewrite technical language for a customer;
- prepare an escalation handover;
- translate or adjust tone, subject to organisational language-quality processes;
- suggest clarifying questions.

## AI preparation versus AI authority

A valuable conceptual line for the chapter:

> AI can prepare a response without having authority to decide what the company is allowed to promise.

### Subtle failure examples

- turns “we'll review whether a refund is possible” into “we will refund you”;
- quotes an obsolete return window from generic knowledge rather than the company's policy;
- misses that a customer has already completed a troubleshooting step;
- interprets frustration as abuse and escalates unnecessarily;
- includes another customer's details that were present in an improperly supplied context block.

## Evidence connection

The large customer-support field study is useful because it demonstrates that AI support can improve measured throughput and especially help newer workers, but it does not imply that autonomous customer replies are always desirable.

---

# Presentations

## Strong use pattern

AI helps organise and adapt **existing evidence**.

### Useful inputs

- audience and their prior knowledge;
- time available;
- presentation purpose;
- decision or outcome sought;
- source report/data;
- required sections;
- tone;
- number of slides or approximate pacing;
- facts/statistics that must come only from supplied sources.

### Good-fit assistance

- propose narrative order;
- identify a one-line takeaway for each slide;
- turn a report into an outline;
- simplify jargon;
- draft speaker-note structure;
- suggest visual forms (timeline, comparison, process diagram) without fabricating data;
- inspect an existing outline for repetition or missing transitions.

### Limitation worth stating

> AI can improve the organisation of a presentation; it cannot make weak evidence strong.

A polished deck is especially risky because presentation quality can make unsupported claims feel authoritative.

---

# Spreadsheet help

## Strong use pattern

AI is often valuable as an **explanation and formula-assistance layer** around a deterministic spreadsheet engine.

### Practical inputs

- Excel, Google Sheets, LibreOffice or other software;
- column names and data types;
- a small non-sensitive sample or synthetic equivalent;
- desired result;
- current formula;
- exact error message;
- handling requirements for blanks, dates, duplicates and text;
- known edge cases.

### Useful tasks

- explain an unfamiliar formula in plain language;
- propose a formula from a clearly specified requirement;
- diagnose a formula error;
- explain lookup choices;
- suggest dataset layout;
- explain pivot tables;
- suggest data-cleaning steps;
- suggest an appropriate chart type and explain why.

### Current vendor evidence

Microsoft's current Copilot in Excel documentation says it can perform workbook tasks but can make mistakes, misinterpret information or produce inaccurate results. Google similarly warns that Gemini-generated Sheets suggestions may be inaccurate or inappropriate. These warnings support the chapter's verification rule without requiring a dramatic hallucination story.

### Test pattern for ordinary readers

Before trusting an AI-suggested formula:

1. run it on rows where the expected answer is already known;
2. test a blank/missing-value case;
3. test an edge/boundary case;
4. compare totals to an independent calculation where stakes are meaningful;
5. understand enough of the formula to explain what it is doing.

### Important distinction

A formula can be syntactically valid and still encode the wrong business rule.

---

# Research assistance

## Strong uses

- identify terminology for a new topic;
- generate research questions;
- map stakeholder perspectives;
- identify categories of evidence needed;
- suggest candidate primary sources to locate;
- summarise documents the user has supplied;
- compare claims across supplied documents;
- identify unanswered questions;
- prepare questions for a subject-matter expert.

## Critical distinction

> AI can assist the research process. The model's answer is not itself research evidence.

### Verification workflow

1. Use AI to formulate questions or identify possible sources.
2. Open the actual source.
3. Check that the source exists and is what the AI says it is.
4. Check the specific claim against the source rather than merely seeing a matching title.
5. Prefer primary evidence for important claims.
6. Record which statements are source-derived and which are synthesis/inference.
7. Search independently for contradictory evidence.

## Citation failure evidence

The 2023 Scientific Reports study found substantial fabricated and erroneous citations in GPT-3.5 and GPT-4 under its experimental setup. These percentages are **historical model results, not current rates**, but the study remains useful evidence of the failure mechanism: bibliographic-looking output can be false.

---

# Brainstorming

## What research supports

Several experiments suggest AI can improve the rated creativity or usefulness of an individual's idea in some tasks, particularly for participants who otherwise perform less strongly.

At the same time, research has found a diversity trade-off: AI-assisted outputs can become more similar across people.

### Editorial implication

Do not frame brainstorming as “AI is creative” or “AI destroys creativity.” A more useful professional lesson is:

> AI can expand one person's option set while also nudging many people toward similar patterns.

### Practical anti-anchoring techniques worth presenting as examples

- generate human ideas first, then ask AI for missing categories;
- ask for several deliberately different perspectives rather than one “best” idea;
- ask the model to challenge rather than extend the current favourite;
- have team members ideate independently before seeing AI suggestions;
- use AI late in the session to test coverage rather than to define the starting direction.

These are editorially reasonable techniques derived from the diversity/anchoring evidence; they are not directly proven as a universal antidote.

---

# Role-diverse workplace example pool

## Administration — procedure from rough notes

**Objective:** turn scattered notes into a draft procedure.  
**AI contribution:** structure steps, headings and prerequisites; flag missing information.  
**Withhold/generalise:** employee/client identifiers if not necessary.  
**Verify:** sequence, responsible roles, approval points, systems and safety steps.  
**Lesson:** excellent example of AI documenting known information rather than inventing company process.

## Sales — interaction summary and follow-up preparation

**Objective:** turn an approved CRM interaction summary into next-call questions.  
**AI contribution:** identify stated needs, objections and unresolved questions.  
**Policy issue:** customer data may need to remain inside an approved CRM/AI environment.  
**Verify:** never let AI create commitments, discounts or product capabilities not in source material.  
**Lesson:** preparation is different from authority.

## Management — project decision/action extraction

**Objective:** transform project notes into decisions, actions, risks and open questions.  
**AI contribution:** structure and extraction.  
**Verify:** distinguish proposed from agreed; check owners/deadlines.  
**Lesson:** ideal bridge to the meeting worked example.

## Customer support — thread compression

**Objective:** understand a 20-message case before replying.  
**AI contribution:** one-sentence problem statement, troubleshooting attempted, unresolved issue, customer constraints.  
**Verify:** compare against thread; use current approved policy for any remedy.  
**Lesson:** saves rereading effort without transferring customer-service authority to the model.

## Marketing — angle generation from an existing brief

**Objective:** explore campaign approaches while keeping positioning fixed.  
**AI contribution:** generate alternative audience angles and objections.  
**Verify:** claims, pricing, product capabilities, legal/compliance language.  
**Lesson:** brainstorming is useful when grounded in the brief; beware homogenised generic copy.

## HR — clarify a generic job advertisement

**Objective:** make a role description clearer and more specific using an approved role profile.  
**AI contribution:** improve structure/readability, identify vague phrases.  
**Do not supply:** candidate personal information when not required.  
**Verify:** legal/HR policy requirements, actual responsibilities, salary/benefits.  
**Research warning:** Wiles/Horton shows that faster AI-written job posts can become more generic and worsen matching if employers accept them uncritically.

## Finance — explain a variance formula

**Objective:** understand why a spreadsheet variance formula behaves unexpectedly.  
**AI contribution:** explain formula logic and propose a corrected version from sample structure.  
**Verify:** test known rows and independent totals; keep actual confidential financial data inside approved systems.  
**Lesson:** AI as tutor/helper, spreadsheet as calculation engine.

## Operations — incident timeline to draft review structure

**Objective:** turn a factual incident timeline into headings such as impact, timeline, contributing factors, recovery and follow-up items.  
**AI contribution:** organise provided facts; generate questions for missing evidence.  
**Verify:** do not let AI infer root cause from temporal sequence.  
**Lesson:** structure without invented causality.

## Education — reorganise supplied teaching notes

**Objective:** turn existing notes into practice questions at several difficulty levels.  
**AI contribution:** transformation, question generation, explanation drafts.  
**Verify:** subject accuracy and suitability; privacy policy before using learner information.  
**Lesson:** professional use is not confined to corporate office work.

## Small business — FAQ from existing business information

**Objective:** produce a first FAQ draft from current service/pricing/shipping/returns information.  
**AI contribution:** identify common question categories and rewrite material clearly.  
**Verify:** current prices, terms, delivery promises and contact details.  
**Lesson:** a small business can gain leverage from information it already owns.

## Recruiting — interview preparation, not candidate judgement

**Objective:** create role-relevant interview questions from an approved job description.  
**AI contribution:** coverage and wording.  
**Avoid:** asking general-purpose AI to infer candidate personality or suitability from protected/personal information.  
**Verify:** alignment with organisational hiring policy.  
**Lesson:** assistance with process is different from delegating consequential judgement.

## Consulting — supplied research to issue map

**Objective:** organise a client's approved research pack into themes, gaps and questions.  
**AI contribution:** clustering and summarisation.  
**Verify:** source fidelity; avoid inferring facts beyond the supplied pack.  
**Lesson:** AI can accelerate synthesis while professional analysis remains the consultant's responsibility.

---

# When AI is not the best tool

Use a conventional tool or direct work when:

- the task is a deterministic calculation already handled by a spreadsheet/database;
- a template already produces the correct output faster;
- source information is too sensitive for the available/approved system;
- organisational policy prohibits the tool or use;
- the worker cannot realistically verify the result and consequences are meaningful;
- authoritative current information can be obtained directly from the official source faster;
- prompt/refinement/review cost exceeds the work saved;
- the task is so small that describing it takes longer than doing it;
- a purpose-built search/filter/query system is more precise;
- the task is a professional decision rather than drafting/analysis support.

This list supports a non-evangelical message: use AI where it improves the work, not merely where it is available.
