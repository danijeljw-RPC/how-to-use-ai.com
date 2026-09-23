# Research Map — Chapter 4 Plan → Evidence

This is the fast navigation layer. Read `chapter-04-plan.md` first.

## 1. Introduction — Finishing the Picture

**Research objective:** present limitations as the other half of capability rather than a reversal of Chapter 3.

Useful framing:
- “Can perform a task” is not the same as “can be trusted without verification.”
- Current frontier developers still publish hallucination/factuality evaluations, so improved capability has not made factual reliability a solved problem.
- Tools expand what systems can do and also create new error surfaces.

Strong sources:
- NIST AI 600-1: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- OpenAI GPT-5.6 system-card update: https://deploymentsafety.openai.com/gpt-5-6-august-update
- Google DeepMind FACTS: https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/

## 2. Hallucinations: Not a Rare Bug, a Natural Consequence

Key points:
- “Hallucination” has no single universally agreed taxonomy; NIST uses **confabulation** for confidently stated erroneous/false content.
- Generation is not an automatic truth lookup.
- Sparse/conflicting/outdated evidence and training/evaluation incentives can yield plausible false output.
- Abstention, search, retrieval and verification can reduce errors; avoid claiming a fixed inevitable rate.
- Fabricated citations are a strong concrete example.

Strong sources:
- OpenAI, *Why language models hallucinate*: https://openai.com/index/why-language-models-hallucinate/
- Venkit et al. 2024: https://aclanthology.org/2024.emnlp-main.375/
- Farquhar et al. 2024: https://www.nature.com/articles/s41586-024-07421-0
- Mata v. Avianca: https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1%3A2022cv01461/575368/54/

Research file: `01-hallucinations-and-confidence.md`

## 3. No True Understanding

Key points:
- Define “understanding” before making the claim.
- Form-vs-meaning is a major skeptical argument.
- A competing position argues that conceptual relationships inside LLMs may instantiate meaningful representations in at least some senses.
- Formal linguistic competence vs broader functional/world competence is a useful middle framework.
- The chapter does not need to settle philosophy to teach the reader not to infer human-like grounded understanding from fluency.

Strong sources:
- Bender & Koller 2020: https://aclanthology.org/2020.acl-main.463/
- Mitchell & Krakauer 2023: https://pubmed.ncbi.nlm.nih.gov/36943882/
- Mahowald et al. 2024: https://www.sciencedirect.com/science/article/pii/S1364661324000275
- Piantadosi & Hill 2022: https://arxiv.org/abs/2208.02957

Research file: `02-understanding-consciousness-emotion-intent-morality.md`

## 4. No Consciousness, No Emotions, No Intent, No Morality

### Consciousness

Safe core: conversational behaviour does not establish subjective consciousness.

Do not overclaim: current scientific/philosophical debate is not closed.

Source:
- Butlin et al. 2026: https://pubmed.ncbi.nlm.nih.gov/41219038/

### Emotion

Safe core: models can recognise/generate emotional language; this does not establish felt emotion.

Sources:
- EmotionQueen: https://aclanthology.org/2024.findings-acl.128/
- Wenger et al. 2026: https://www.nature.com/articles/s44271-025-00387-3

### Intent

Safe core: agents can pursue goals operationally; that does not settle human-like subjective intention.

Sources:
- Anthropic agents: https://www.anthropic.com/research/trustworthy-agents
- OpenAI agents: https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/

### Morality

Safe core: models can perform moral reasoning and follow trained principles; moral agency/responsibility is a separate question.

Sources:
- Anthropic Constitution: https://www.anthropic.com/constitution
- SEP, Computing and Moral Responsibility: https://plato.stanford.edu/entries/computing-responsibility/
- SEP, Ethics of AI and Robotics: https://plato.stanford.edu/entries/ethics-ai/

Research file: `02-understanding-consciousness-emotion-intent-morality.md`

## 5. No Common Sense

Key points:
- Historical benchmarks documented substantial gaps.
- Modern LLMs can answer many simple common-sense questions.
- Complex, implicit and multi-hop common-sense reasoning remains more brittle.
- Cultural common sense is not universal.
- Durable formulation: “do not assume dependable human-grounded common sense.”

Strong sources:
- Com² 2025: https://aclanthology.org/2025.acl-long.785/
- ACCORD 2025: https://aclanthology.org/2025.naacl-long.193/
- Commonsense Reasoning in Arab Culture 2025: https://aclanthology.org/2025.acl-long.380/
- CulturalBench 2025: https://aclanthology.org/2025.acl-long.1247/

Research file: `03-common-sense-cutoffs-and-training-data.md`

## 6. Knowledge Cutoffs and Training-Data Dependency

Key points:
- distinguish parametric/learned knowledge from retrieval;
- knowledge cutoff is model/version specific;
- search and file retrieval can bridge a cutoff;
- retrieval and synthesis are still fallible;
- training corpus composition, omissions, filtering and errors influence model behaviour;
- a model normally cannot identify an exact training source for an internally represented fact merely because it learned it during training.

Current dated examples:
- Anthropic model cutoffs: https://platform.claude.com/docs/en/models/overview
- Gemini 3.8 Flash card: https://deepmind.google/models/model-cards/gemini-3-8-flash/
- OpenAI current-events guidance: https://help.openai.com/en/articles/6639781
- OpenAI web search: https://developers.openai.com/api/docs/guides/tools-web-search

Training-data research:
- Dodge et al., C4: https://aclanthology.org/2021.emnlp-main.98/

Research file: `03-common-sense-cutoffs-and-training-data.md`

## 7. Why AI Can Be Wrong While Sounding Right

Key points:
- apparent/verbal certainty is not calibrated probability;
- calibration is not the same as correctness;
- models can contain useful uncertainty signals, but calibration is imperfect and task-dependent;
- sycophancy creates a related failure mode: agreement can be mistaken for validation.

Strong sources:
- Huang et al. 2024: https://aclanthology.org/2024.findings-emnlp.785/
- Kadavath et al. 2022: https://arxiv.org/abs/2207.05221
- Farquhar et al. 2024: https://www.nature.com/articles/s41586-024-07421-0
- Anthropic on sycophancy: https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models

Research file: `01-hallucinations-and-confidence.md`

## 8. Myth vs Reality

Ready-to-adapt material is distributed through the topic files and consolidated in `04-examples-debates-and-editorial-options.md`.

## 9. Core Takeaway

Research-supported synthesis:
- generative prediction is extremely useful;
- fluent generation is not equivalent to verified truth;
- strong linguistic behaviour is not, by itself, proof of human-like grounded understanding or subjective inner states;
- reliability depends on evidence, task, tools, data, model version and verification.

This supports the book's established Part 1 framing that AI is “pattern recognition at scale” while avoiding the dated implication that all modern AI systems are nothing more than text autocomplete.

## 10. Part 1 Recap

No separate new research requirement. The limitation material should complete the capability picture from Chapters 1–3.

## 11. Chapter Preview

No external research performed for the next chapter because its plan was not part of this task.

## Required-example map

| Plan item | Strong candidate material |
|---|---|
| Hallucination | fabricated citation; Mata v. Avianca as optional real case |
| Lack of true understanding | changed familiar riddle; form-vs-meaning debate |
| No consciousness | conversational self-report is not a consciousness test |
| No emotions | empathetic response vs felt emotion |
| No intent | agent goal pursuit vs subjective desire |
| No morality | ethical argument output vs moral agency/responsibility |
| No common sense | culture-specific etiquette; changed riddle; complex commonsense benchmarks |
| Knowledge cutoff | “current price/news” without vs with search |
| Training-data dependency | C4 corpus documentation; cultural/linguistic coverage |

## Additional findings worth considering

1. **Sycophancy:** agreement is not verification.
2. **Anthropomorphism:** human-like interaction encourages users to infer minds, feelings and intentions.
3. **Model/product/agent distinction:** prevents quickly dated “AI cannot…” claims.
4. **Tool failure:** access to more information/actions introduces retrieval and action errors.
5. **Benchmark caveats:** benchmark percentages are not everyday error rates.
6. **Cultural common sense:** “common” depends partly on community and context.
7. **Memory vs training:** product memory is not necessarily a model-weight update.

Details: `04-examples-debates-and-editorial-options.md`
