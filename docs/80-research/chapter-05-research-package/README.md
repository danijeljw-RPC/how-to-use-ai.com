# Chapter 05 Research Package — Talking to AI Properly

**Project:** *How To Use AI.com*  
**Purpose:** research input for a later chapter-writing AI  
**Prepared:** 2026-09-24  
**Scope authority:** `chapter-05-plan.md`

## What this package is

This package researches the approved Chapter 5 plan. It is deliberately **not a draft of Chapter 5**. The material is broader and more technical than the eventual chapter so a later writing system can select, simplify, and editorially shape what it needs.

The plan establishes four core beginner-facing levers:

1. context;
2. specificity;
3. examples; and
4. iteration.

It also requires simple before/after examples, a conversational rather than “prompt engineering guru” framing, a warning that irrelevant padding is not useful context, and a link back to the earlier explanation that generative AI produces likely continuations rather than guaranteed truth.

## Package contents

- `chapter-05-plan.md` — exact supplied plan used as the authoritative scope.
- `01-core-research.md` — detailed research organised around the planned chapter sections.
- `02-evidence-debates-and-caveats.md` — empirical evidence, competing guidance, limitations, and claims that should be stated carefully.
- `03-examples-analogies-and-editorial-options.md` — candidate demonstrations and analogies for the eventual writer; these are research/editorial options, not final chapter prose.
- `04-additional-findings.md` — useful findings not explicit in the plan, including clarifying questions, output contracts, nondeterminism, model differences, and the distinction between context, memory, and context windows.
- `05-source-catalogue.md` — bibliography working list with direct URLs and notes on what each source supports.

## Research approach

Sources were deliberately mixed rather than relying on a single vendor or school of thought. The package prioritises:

- current first-party guidance from OpenAI, Anthropic, Google, Microsoft, and AWS;
- peer-reviewed or major-conference research from ACL, EMNLP, CHI, ICML, ICLR, TACL, and PMLR;
- NIST guidance on generative-AI risks;
- UNESCO human-centred generative-AI guidance;
- university educational material where it adds beginner-facing framing.

The strongest recurring agreement across sources is that users generally get more useful output by making the task clearer, supplying relevant background, specifying important constraints, showing examples when needed, and refining the request based on what the model produces. The strongest caution is that these are **heuristics, not guarantees**: results can vary across models, wording, formatting, example order, context placement, and sampling.

## Recommended use by the chapter-writing AI

Treat `chapter-05-plan.md` as binding for chapter scope and tone. Use the other files as a research reservoir. Prefer durable beginner-facing principles over model-specific recipes. Do not turn the chapter into a catalogue of prompting techniques. Do not imply that a sufficiently clever prompt can eliminate hallucinations, guarantee correctness, or make every model behave the same way.

Where the research contains competing recommendations, preserve the disagreement or choose the most durable formulation. In particular, avoid universal claims such as “always use examples,” “always write long prompts,” “always tell the model to think step by step,” or “there is one perfect prompt formula.”

## Citation convention

Research notes refer to sources as `[S01]`, `[S02]`, etc. Full bibliographic details and URLs are in `05-source-catalogue.md`.
