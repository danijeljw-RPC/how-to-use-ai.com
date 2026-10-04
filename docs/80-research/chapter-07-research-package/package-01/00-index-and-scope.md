# Chapter 7 Research Package — AI at Work

**Book:** *How-To-Use-AI.com*  
**Chapter:** Chapter 7 — AI at Work  
**Research date:** 30 September 2026  
**Purpose:** Research material for a later chapter-writing system. This package is not a chapter draft.

## Source documents supplied for this task

Two Chapter 7 Markdown files were supplied:

- `chapter-07-ai-at-work.md`
- `chapter-07-ai-at-work(1).md`

The two supplied files are byte-for-byte identical. Their shared structure is therefore treated as both the authoritative Chapter 7 scope available for this task and the current chapter template to be evaluated critically. No differences between a separate plan and template have been invented.

The supplied scope covers:

- drafting reports
- summarising meetings
- customer support
- presentations
- spreadsheets
- research and brainstorming
- confidentiality
- company policy
- verification at work
- a core message that AI can act as a workplace multiplier

## Research objective

The strongest conclusion from the research is not simply that AI increases workplace productivity. The evidence is more useful and more interesting than that:

> Generative AI can be a substantial workplace multiplier when the task fits the tool, the information is appropriate to use, and the output is checked in proportion to the stakes. The effect is uneven: on some tasks AI produces large gains, while on other apparently similar tasks it can add work or reduce accuracy.

This is consistent with the chapter's intended direction while giving the later writer a stronger, evidence-based qualification to the phrase “workplace multiplier”.

## How this package is organised

1. [`01-core-research.md`](01-core-research.md)  
   Research organised around the chapter's main subjects: drafting, meetings, support, presentations, spreadsheets, research/brainstorming, confidentiality, policy, and verification.

2. [`02-real-world-examples-and-case-studies.md`](02-real-world-examples-and-case-studies.md)  
   Strong documented cases, experiments, and recreatable demonstrations, including what each example teaches and where it could fit.

3. [`03-debates-limitations-and-tradeoffs.md`](03-debates-limitations-and-tradeoffs.md)  
   Contrasting evidence, limitations, common misconceptions, and cases where conventional tools or human judgement are preferable.

4. [`04-template-improvement-observations.md`](04-template-improvement-observations.md)  
   Editorial/research observations about the supplied template. These are not rewritten chapter text.

5. [`05-additional-findings-and-companion-material.md`](05-additional-findings-and-companion-material.md)  
   Useful material discovered beyond the explicit template, plus diagrams, screenshots, exercises, tables, and companion-website possibilities.

6. [`06-source-catalogue.md`](06-source-catalogue.md)  
   Working bibliography with source type, date, URL, what each source supports, and important caveats.

## Evidence labels used in this package

To help the later chapter-writing system distinguish different kinds of evidence, notes use these informal labels:

- **Strong causal evidence** — randomised or controlled studies that directly measure a relevant outcome.
- **Strong observational / field evidence** — substantial real-world evidence without the same causal strength.
- **Survey evidence** — useful for adoption, attitudes, and self-reported effects, but not proof of causation.
- **Official guidance** — authoritative for policy, regulatory, governance, or product-operation claims within its scope.
- **Vendor documentation** — reliable for describing what a vendor says its current product does or how it handles data, but not independent evidence of productivity or quality.
- **Editorial inference** — a conclusion drawn from multiple sources for the eventual writer to consider, rather than a directly measured finding.

## Time sensitivity

Several areas in this chapter can change rapidly:

- product names and feature sets
- licence requirements
- enterprise privacy controls
- model accuracy and benchmark performance
- organisational AI policies
- regulation and legal guidance

Product and policy examples in this package were checked through **30 September 2026**. The later writing system should avoid wording current product capabilities as permanent facts. If publication occurs materially later, re-check current vendor documentation and Australian guidance.

## High-value findings at a glance

### 1. Productivity gains are real, but task-dependent

Controlled studies have found large gains in some professional writing and customer-support tasks. Noy and Zhang reported a roughly 40% reduction in completion time and an 18% improvement in quality on assigned professional writing tasks. Brynjolfsson, Li and Raymond found a 15% average increase in issues resolved per hour among customer-support agents, with especially large benefits for less experienced workers.

However, Dell'Acqua and colleagues found an important boundary: consultants using AI did better on tasks within the model's capabilities, but were 19% less likely to reach the correct answer on a deliberately selected task outside that capability frontier. METR later found experienced open-source developers took 19% longer on a specific set of real repository tasks when early-2025 AI tools were allowed.

The chapter therefore has unusually good evidence for a beginner-friendly lesson: **AI is not uniformly faster. Learn to recognise task fit and verify the result.**

### 2. The strongest use cases are often ordinary

Large-scale SME survey evidence from the OECD shows workplace AI use is often text generation and other routine support work rather than dramatic autonomous replacement of entire roles. This fits the chapter well: reports, email, meeting material, support, presentations and spreadsheet assistance are credible entry points precisely because they are mundane.

### 3. “Human review” needs to mean something concrete

A generic instruction to “check the answer” is not enough. Useful verification means comparing factual claims, figures, quotations, policy statements, citations, formulas, and decisions against the source material or another authoritative source. The higher the consequence of error, the stronger the verification should be.

Research on critical thinking also suggests that confidence in AI can reduce the amount of critical scrutiny users report applying, so the chapter should avoid treating the presence of a human as an automatic safety guarantee.

### 4. Confidentiality cannot be reduced to “AI tools store your data”

Data handling differs materially between public consumer products, enterprise accounts, APIs, and internally controlled systems. Some enterprise vendors state that organisational prompts and responses are not used to train foundation models by default, while interaction data can still be processed, logged, retained, administratively accessible, or subject to other controls.

For an Australian audience, OAIC guidance is particularly strong: organisations should conduct due diligence, consider who can access data, embed human oversight, and as a matter of best practice avoid entering personal — especially sensitive — information into publicly available generative-AI tools.

### 5. Meeting summarisation has two separate questions

There is a major difference between:

1. giving AI notes you already lawfully possess; and
2. recording/transcribing a meeting so AI can generate notes.

The second introduces privacy, workplace surveillance, recording, retention and participant-notification questions. These rules and policies vary, so the eventual chapter should not imply a universal consent rule.

### 6. Spreadsheets deserve a distinction between assistance and calculation

Current products can create formulas, PivotTables, charts, summaries, filters and data analysis from natural-language requests. This is useful. But the trustworthy final calculation should still live in inspectable spreadsheet logic wherever possible. The AI is particularly valuable as a translator between a user's intent and a deterministic formula or spreadsheet operation.

### 7. Research and brainstorming are not the same thing

AI is useful for generating questions, search terms, angles, counterarguments and an initial checklist. It should not be treated as the evidentiary source for a factual workplace decision. Source-backed research needs traceable evidence.

A separate creativity experiment found AI suggestions could improve individually judged creative output while making outputs more similar to one another. That is not a workplace brainstorming study, but it is useful adjacent evidence for a warning about anchoring and homogenisation.

## Recommended editorial stance for the later chapter writer

The research supports a chapter that is optimistic about useful workplace assistance without implying universal automation. A useful recurring pattern is:

**Task → context → AI first pass → human/source check → usable output**

For sensitive work, add a step before the prompt:

**Policy/data check → task → context → AI first pass → verification → output**

This is a research synthesis, not mandatory final wording.
