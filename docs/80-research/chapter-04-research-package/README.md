# Chapter 04 Research Package — What AI Cannot Do

**Book:** *How To Use AI.com*  
**Research date:** 2026-09-24  
**Purpose:** Research dossier for a later chapter-writing AI. This package is **not a draft of Chapter 4**.

The included `chapter-04-plan.md` is the authoritative scope, structure, intent and acceptance criteria supplied by the author. The remaining files expand that plan with source-backed facts, technical nuance, competing interpretations, current examples, terminology and editorial options.

## Package contents

- `chapter-04-plan.md` — authoritative Chapter 4 plan; unchanged.
- `01-hallucinations-and-confidence.md` — hallucination/confabulation, factuality, calibration, confidence vs correctness, causes, mitigation and examples.
- `02-understanding-consciousness-emotion-intent-morality.md` — the major conceptual claims in Sections 3–4, including important scientific/philosophical disagreements.
- `03-common-sense-cutoffs-and-training-data.md` — common sense, cultural context, knowledge cutoffs, retrieval/search/tool augmentation and training-data dependency.
- `04-examples-debates-and-editorial-options.md` — candidate demonstrations, analogies, myth-vs-reality material, debates, wording cautions and additional findings.
- `05-source-catalogue.md` — bibliography working list with source details and notes on what each source supports.
- `06-research-map.md` — fast map from each planned Chapter 4 section to relevant research and strongest sources.
- `MANIFEST.md` — package metadata.

## How the chapter-writing AI should use this package

1. Read `chapter-04-plan.md` first and treat it as authoritative for chapter scope, sequence and tone.
2. Treat the research files as a **research pool**, not manuscript prose.
3. Prefer primary, official and peer-reviewed sources when selecting factual claims.
4. Preserve dates when discussing current models, products, knowledge cutoffs or benchmark results.
5. Distinguish a **base model**, an **AI product** that adds retrieval/search/files/memory, and an **agentic system** that can plan and act with tools.
6. Do not turn disputed philosophical questions into settled facts merely because the plan uses compact headings such as “No True Understanding” or “No Consciousness.”
7. Use old benchmarks as historical evidence, not as measurements of 2026 frontier-model performance.
8. Keep the chapter grounded and non-doomist: limitations are operating boundaries, not a reason to dismiss AI.
9. Do **not** use the unapproved Johnny scenario referenced in the plan.

## High-priority accuracy cautions discovered during research

### Hallucination is a systemic failure mode, but avoid claiming a fixed or inevitable rate

Generative models can produce plausible but false or unsupported content because generation is not an automatic truth-verification process. Inadequate evidence, imperfect training data, post-training incentives and evaluation methods all matter. OpenAI's 2025 research argues that common evaluation methods can reward guessing instead of abstention. Research also shows that uncertainty detection, retrieval, verification and better training can reduce errors.

A durable formulation is: **hallucination/confabulation is a structural failure mode of generative systems, not a rare software crash; its frequency and severity can nevertheless be reduced.**

### “No true understanding” is an active debate

Bender & Koller (2020) argue that linguistic form alone does not establish meaning. Piantadosi & Hill (2022) argue that internal conceptual relationships may capture important aspects of meaning. Mitchell & Krakauer (2023) survey the disagreement. Mahowald et al. (2024) distinguish formal linguistic competence from broader functional/world competence.

For a beginner chapter, the strongest practical claim is: **fluent language is not, by itself, evidence of human-like grounded understanding.**

### “No consciousness” is not a scientifically settled proposition

Butlin et al. (2026) describe significant uncertainty and propose theory-derived indicators for evaluating AI consciousness. There is no generally accepted conversational test by which a reader can infer subjective experience from a chatbot's fluent self-report.

A safer teaching point is: **do not treat first-person language, claims of feelings, or human-like conversation as proof of subjective consciousness.**

### Emotional behaviour is not the same claim as felt emotion

LLMs can recognise affective cues and generate responses that users rate as empathetic. Those observable capabilities do not establish subjective felt emotion. Separate “can produce the language of empathy” from “experiences empathy.”

### Intent needs a base-model/agent distinction

Modern agents can pursue user-given goals, plan, use tools, observe results and adjust. That is operational goal-directed behaviour. It does not resolve the philosophical question of whether an artificial system has human-like subjective intentions or desires.

### Morality needs an output/agency distinction

Models can discuss ethics, make normative recommendations, refuse actions and be trained toward explicit behavioural constitutions. That is different from establishing independent moral responsibility or moral agency.

### “No common sense” should not mean “cannot answer common-sense questions”

Modern models can perform strongly on many simple common-sense tasks. Recent research still finds weaknesses in complex, implicit, multi-hop and culturally situated common-sense reasoning. A durable formulation is: **do not assume dependable, human-grounded common sense across contexts.**

### Knowledge cutoffs apply to learned model knowledge, not necessarily the whole product

A base model has time-bounded learned knowledge. A product may add web search, retrieval, files or databases and therefore access newer information. Search does not make truth automatic: retrieval, source selection and synthesis can still fail.

### “Confidence” has multiple meanings

The chapter's planned diagram should distinguish:

- **apparent/verbal confidence** — how certain the prose sounds;
- **model uncertainty/calibration** — an estimate of probability or correctness;
- **actual correctness** — whether the claim is true.

A polished declarative sentence can be wrong. A hedged sentence can be correct.

## Research quality labels

- **Primary / official:** standards bodies, vendor technical documentation, model/system cards and court decisions.
- **Peer-reviewed:** ACL/EMNLP/NAACL, Nature, PNAS, Trends in Cognitive Sciences and similar venues.
- **Preprint / position:** useful but explicitly identified when material to the claim.
- **Commentary:** included only when it adds a clearly labelled perspective or caveat.
