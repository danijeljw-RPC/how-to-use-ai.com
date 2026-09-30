# 00 — Chapter 8 Research Package README

# AI and Creativity

## Package purpose

This package is research support for **Book 1 — How To Use AI.com, Chapter 8: AI and Creativity**.

It is deliberately **not a chapter draft**. It provides a later chapter-writing system with substantially more evidence, nuance, examples and editorial options than should ultimately appear in the printed chapter.

The authoritative chapter scope remains `inputs/chapter-08-plan.md`. The current chapter text in `inputs/chapter-08-current-draft.md` is treated as a template to evaluate, not prose that must be preserved. The complete research specification is copied unchanged to `inputs/chapter-08-research-brief.md`.

**Research cut-off:** 30 September 2026 (Australia/Adelaide).

**Package scale:** approximately 32,600 research words across 12 Markdown research files, 56 catalogued sources, and 20 selected real-world examples/case studies, plus the three unmodified input files.

## Core conclusion of the research

The approved framing—

> AI changes creative workflows more than it replaces creativity itself.

—is useful as an organising idea, but it needs qualification.

The evidence does support a shift in **workflow**: generative systems can rapidly supply drafts, images, variants, musical material, video elements and design directions. They can lower the cost of producing options and make some creative tasks accessible to people who previously lacked the relevant craft or tools.

However, the simple distinction between **effort-heavy execution** and **judgement-heavy creativity** is not clean enough to describe professional creative work. Craft contains judgement. Choosing prompts, references, constraints, edits, timing, composition, wording and what to discard are all intertwined with execution. AI can also change the judgement process itself by shaping the option set a person sees, creating anchors, increasing fixation or narrowing the range of ideas considered. [S17] [S18] [S21]

A stronger formulation for the eventual writer to consider is:

> AI can change where human creative effort is spent. It can generate and transform material quickly, but people still make consequential decisions about direction, selection, meaning, quality, context, rights and whether the result is worth publishing. The balance differs by task, domain and workflow.

That keeps the approved chapter's intent without claiming that "execution" and "judgement" are separable substances.

## The three contested questions: research answer in one paragraph each

### Is AI stealing?

"Stealing" is not one factual or legal question. People use the word to describe several different concerns: copying works while constructing datasets; training on works without permission or payment; obtaining works from pirate sources; model memorisation and reproduction; generating substantially similar material; imitating a creator's style; commercial substitution; and a broader ethical claim that economic value is being extracted from creative labour without consent. These questions can have different legal answers even within one country. They also differ sharply between jurisdictions. Australia currently has no proposed TDM exception and uses specific fair-dealing exceptions; the US applies fact-specific fair-use analysis; the EU has statutory TDM exceptions including a broader exception subject to rights reservation; the UK in March 2026 moved away from its previously preferred broad opt-out exception and is still gathering evidence. [S01] [S03] [S08] [S11] [S14]

### Is AI replacing artists?

There is credible evidence that generative AI is substituting for **some tasks and commissions**, particularly in online freelance markets exposed to writing, translation and image generation. There is also evidence of complementary demand for AI/ML and higher-complexity work. This is better described as task substitution, price/competition pressure, job redesign and market reallocation than as a single answer about "artists." [S23] [S24] [S25] Creator surveys document serious fears and some reported losses, but those surveys are evidence of creator experience and sentiment, not economy-wide proof of occupation extinction. [S48] [S49] [S50]

### Does AI kill creativity?

The strongest current evidence rejects a simple yes/no answer. In one short-story experiment, access to generative-AI ideas improved average individual story ratings, especially for weaker writers, while making the set of stories more similar. [S17] In a visual ideation study, AI support increased fixation and reduced idea quantity, variety and originality. [S18] Other work finds effects vary by expertise and workflow stage. [S21] These studies support a careful claim: **AI can improve an individual's immediate output and still reduce diversity across a group or constrain exploration.** They do not establish that long-term use destroys—or strengthens—professional creative ability.

## Evidence hierarchy used in this package

When claims conflict, prefer the following order unless the question itself is about stakeholder attitudes:

1. Current legislation, court judgments and regulator/government documents.
2. Original peer-reviewed research and original datasets.
3. Current provider terms and official product/platform policies for claims about that provider.
4. Primary company operational data for claims about that company's service.
5. Creator surveys, unions, collecting societies and advocacy groups for creator experience and stated positions.
6. Credible secondary reporting and analysis, especially for rapidly developing litigation.
7. Marketing claims only for what a company says about itself, never as independent proof that the claim is true.

## Important cautions for the later chapter writer

- **Jurisdiction matters.** Avoid "AI training is legal/illegal" and "AI-generated work is/isn't copyrighted" without country and factual context.
- **Do not conflate contract and copyright.** A provider can give a user permission to use an output commercially without that output necessarily receiving copyright protection. [S41] [S42] [S43]
- **Do not conflate copyright with style, voice or likeness.** A complaint about a recognisable style or cloned voice can raise contractual, passing-off/trademark, performer, personality/publicity or digital-replica questions even when ordinary copyright does not map neatly onto the complaint.
- **Do not call C2PA an AI detector.** Content Credentials can carry cryptographically bound provenance assertions. Absence of a credential does not prove an item is human-made; presence does not prove the depicted event is true. [S30]
- **Do not say models merely cut and paste.** Training generally changes model parameters rather than building a simple searchable archive. But do not say models can never copy either: memorisation and extraction have been demonstrated. [S26] [S27] [S28] [S29]
- **Do not make "human learning" the whole explanation.** It is an analogy with serious limits: machine training can involve automated copies, massive scale, repeated optimisation and different legal actors and market effects.
- **Distinguish observed effects from forecasts.** APRA AMCOS and other sector reports contain economically important forecasts, but forecasts are scenarios, not losses that have already occurred. [S50]
- **Do not assume polished equals reliable or original.** By 2026, generative media can be highly polished. The difficult problems increasingly concern control, consistency, provenance, rights, fit-to-brief, truthfulness and differentiation—not merely whether output "looks AI-generated."
- **Treat current court cases as unstable.** On 29 September 2026 the US Third Circuit affirmed Thomson Reuters' win against ROSS, but the appellate reasoning was still temporarily sealed at this research cut-off. [S09] [S10]
- **Recheck provider terms and platform policies immediately before publication.**

## File map

| File | Purpose |
|---|---|
| `00-readme.md` | Scope, synthesis, cautions and package map |
| `01-core-research.md` | Research mapped directly to the Chapter 8 structure |
| `02-creative-domains.md` | Writing, visual art, music/audio, video/film and design |
| `03-copyright-training-and-licensing.md` | Training data, copyright, jurisdictions, authorship, style, licensing, provenance |
| `04-creativity-research.md` | Definitions and empirical research on creativity, fixation, diversity and collaboration |
| `05-creative-labour-and-economics.md` | Task substitution, freelance evidence, entry-level work, abundance and market effects |
| `06-real-world-examples.md` | Selected high-value examples/case studies for book/website use |
| `07-contrasting-viewpoints.md` | Serious creator, rights-holder, developer/open-culture and policy positions |
| `08-template-improvement-observations.md` | Evidence-based critique of the current draft without rewriting it |
| `09-editorial-opportunities.md` | Possible tables, diagrams, demos, exercises, screenshots and website components |
| `10-source-catalogue.md` | Source metadata, URLs, usefulness and limitations |
| `11-additional-findings.md` | Important research beyond the minimum plan: abundance, replicas, provenance, accessibility, authenticity |
| `inputs/` | Unmodified user-provided plan, current draft and research brief |

## Material that belongs in the printed chapter versus the website

The printed chapter should probably stay selective. It needs enough law and evidence to prevent misleading statements, not a miniature copyright textbook.

Good printed-chapter candidates:

- the workflow continuum;
- one practical example in each required creative domain;
- the individual-uplift/collective-similarity creativity result;
- one labour-market example showing task substitution rather than "occupation disappears";
- a short four-jurisdiction warning, with Australia first;
- the five-way distinction between commercial permission, contractual ownership, copyright, exclusivity and non-infringement;
- the "generation is not retrieval, but memorisation can happen" explanation;
- one abundance/discoverability example;
- the reflection question.

Better companion-website candidates:

- live/current provider terms;
- current court-case tracker;
- detailed jurisdiction table;
- C2PA demonstrations;
- platform AI-disclosure policies;
- current music-upload/fraud statistics;
- detailed creator surveys;
- bias-prompt demonstrations;
- interactive human-first versus AI-first brainstorming experiments.

## Research gaps that remain genuinely weak

The research did **not** find strong evidence for several sweeping claims sometimes made in public discussion:

- long-term longitudinal evidence that ordinary generative-AI use causes permanent loss of creative skill;
- economy-wide evidence that "artists" as a broad occupational class are being replaced;
- clean causal evidence that removal of junior creative tasks has already damaged the future professional talent pipeline;
- robust evidence that audiences universally prefer human-created work once AI involvement is disclosed;
- a reliable universal method for determining whether arbitrary media was AI-generated.

These should be presented as open questions, emerging concerns or domain-specific observations—not established facts.

## Suggested chapter-writing discipline

For every significant claim, the later writer should ask:

1. Is this **observed evidence**, **survey sentiment**, **forecast**, **policy proposal**, **company claim**, **legal rule**, or **ethical argument**?
2. What jurisdiction, population, platform, creative domain and date does it describe?
3. Is the chapter accidentally moving from "some tasks" to "the profession"?
4. Is it treating "legal" as "ethical" or vice versa?
5. Is it treating short-term output quality as long-term creativity?
6. Is there a concrete example that would teach this better than an abstract statement?
7. Does the example empower the reader to make a decision rather than telling them what to think?

