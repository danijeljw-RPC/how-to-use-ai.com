# Research — Common Sense, Knowledge Cutoffs and Training-Data Dependency

Supports planned Sections 5–6 and the tie-back to the chapter's “most likely answer”/confidence-correctness framing.

---

# Part A — Common sense

## 1. What “common sense” means in AI research

Common-sense reasoning is the use of background knowledge and ordinary inferences humans often leave unstated.

Examples:
- ice in sunlight tends to melt;
- a person normally cannot be in two distant places at once;
- an unsupported glass may fall;
- social situations carry unstated expectations;
- ambiguous references are often resolved with world knowledge;
- causal sequences imply likely consequences.

Useful categories include:
- physical common sense;
- causal common sense;
- social common sense;
- temporal reasoning;
- pragmatic language knowledge;
- cultural conventions.

“Common sense” is not one universal database. Some expectations vary by culture, location, profession, era and household.

---

## 2. Historical benchmark evidence

### CommonsenseQA

CommonsenseQA contains 12,247 questions designed to require background knowledge. In the 2019 paper, the best BERT-based baseline achieved 56% accuracy compared with 89% human performance.

**Source:** Alon Talmor et al., *CommonsenseQA: A Question Answering Challenge Targeting Commonsense Knowledge*, NAACL 2019.  
URL: https://aclanthology.org/N19-1421/  
DOI: https://doi.org/10.18653/v1/N19-1421

**Critical caveat:** those scores are historical. They should not be used to describe 2026 frontier models. Their value is that they demonstrate how researchers operationalised common-sense knowledge as a separate challenge.

---

## 3. Modern models can solve many simple common-sense problems

By 2025, research was explicitly noting that LLMs had acquired abundant simple/explicit common-sense knowledge and could show strong or human-like performance on some simple benchmarks.

**Source:** Kai Xiong et al., *Com²: A Causal-Guided Benchmark for Exploring Complex Commonsense Reasoning in Large Language Models*, ACL 2025.  
URL: https://aclanthology.org/2025.acl-long.785/  
DOI: https://doi.org/10.18653/v1/2025.acl-long.785

The same paper motivates a harder benchmark because **complex and implicit** common-sense knowledge, especially multi-step causal chains, remains substantially more difficult.

### ACCORD

ACCORD uses controlled multi-hop counterfactual reasoning and reports substantial degradation as common-sense reasoning complexity increases.

**Source:** François Roewer-Després et al., *ACCORD: Closing the Commonsense Measurability Gap*, NAACL 2025.  
URL: https://aclanthology.org/2025.naacl-long.193/

### Chapter implication

“No common sense” should not literally mean:
> “AI cannot answer common-sense questions.”

A stronger durable formulation is:
> “AI does not have dependable, human-grounded common sense that you can safely assume will generalise across unfamiliar, implicit or culturally specific situations.”

---

## 4. Common sense is culturally situated

A major weakness in a simplistic “AI lacks common sense” claim is the assumption that there is one universal common sense.

### Arab cultural common sense

A 2025 ACL paper built native-authored questions across 13 Arab countries and found substantial challenges for open-weight language models in culturally grounded common-sense reasoning, with variation across regions.

**Source:** Abdelrahman Sadallah et al., *Commonsense Reasoning in Arab Culture*, ACL 2025.  
URL: https://aclanthology.org/2025.acl-long.380/  
DOI: https://doi.org/10.18653/v1/2025.acl-long.380

### Cross-cultural transfer

A later 2025 study found that small numbers of culture-specific demonstrations could improve cross-cultural common-sense performance, showing that the limitation is not necessarily fixed.

**Source:** Saeed Almheiri et al., *Cross-Cultural Transfer of Commonsense Reasoning in LLMs: Evidence from the Arab World*, Findings of EMNLP 2025.  
URL: https://aclanthology.org/2025.findings-emnlp.247/  
DOI: https://doi.org/10.18653/v1/2025.findings-emnlp.247

### CulturalBench

CulturalBench contains 1,696 human-written and human-verified questions covering 45 global regions and 17 topics.

**Source:** Yu Ying Chiu et al., *CulturalBench: A Robust, Diverse and Challenging Benchmark for Measuring LMs’ Cultural Knowledge Through Human-AI Red-Teaming*, ACL 2025.  
URL: https://aclanthology.org/2025.acl-long.1247/

### Editorial use

A model may appear to lack “common sense” when it actually lacks **the reader's local cultural assumptions**. This connects common-sense limitations directly to training-data representation.

---

## 5. Logical reasoning is related but not identical

A system can know common-sense facts yet combine them incorrectly; conversely, it can perform valid formal reasoning over fictional premises without having real-world common sense.

**Source:** Mihir Parmar et al., *LogicBench: Towards Systematic Evaluation of Logical Reasoning Ability of Large Language Models*, ACL 2024.  
URL: https://aclanthology.org/2024.acl-long.739/

Use: evidence that reasoning reliability varies systematically by inference type; helpful if the writer needs to explain why “language fluency” and “reasoning reliability” should not be treated as identical.

---

## 6. Memorisation vs reasoning is difficult to separate

A model can succeed on a benchmark because of:
- genuinely generalised reasoning;
- training data containing similar examples;
- familiarity with benchmark wording;
- memorised public questions;
- learned heuristics that happen to fit the benchmark.

Therefore, a high score on one common-sense benchmark is evidence about performance on that benchmark, not proof of a universal human-like faculty.

This is especially relevant for public benchmarks that may later appear in training corpora.

---

## 7. Changed-riddle example from the plan

The plan's subtly modified riddle is a strong demonstration of pattern completion overriding changed premises.

Suggested structure:
1. choose a famous riddle/template;
2. change one crucial condition so the memorised answer is wrong;
3. ask the model;
4. examine whether it reasons from the altered premises or snaps to the familiar answer.

Publication caveat:
- test shortly before publication;
- do not claim every model will fail;
- if current models solve the example, replace it rather than forcing an obsolete demonstration.

---

# Part B — Knowledge cutoffs

## 8. What a knowledge cutoff is

A **knowledge cutoff** is a date beyond which the model's built-in/parametric learned knowledge should not be assumed to contain newer information.

It does **not** necessarily mean:
- the whole product cannot access newer information;
- every fact before the cutoff is known;
- every fact after the cutoff is absent;
- an exact boundary exists for every domain;
- the model cannot reason about later information supplied in the prompt.

Vendors use terminology differently. Some distinguish a “reliable knowledge cutoff” from the broader training-data cutoff.

---

## 9. Current examples — time-sensitive, researched 24 September 2026

These examples are included to show that cutoffs remain concrete product/model properties. They should not be copied into an evergreen chapter without a date.

### Anthropic

Anthropic's model documentation, as researched on 24 September 2026, lists different reliable knowledge cutoffs for different Claude models, including June 2026 for the then-current Claude Fable 5.1 and Claude Opus 5.5, January 2026 for Claude Sonnet 5, and February 2025 for Claude Haiku 4.5.

**Source:** Anthropic, *Models overview*.  
URL: https://platform.claude.com/docs/en/models/overview  
Time sensitivity: very high.

Anthropic's Claude Opus 5.5 page, for a model released 22 September 2026, lists a June 2026 reliable knowledge cutoff and training-data cutoff.

**Source:** Anthropic, *Claude Opus 5.5 overview*.  
URL: https://platform.claude.com/docs/en/models/opus-5-5/overview

### Google DeepMind

The Gemini 3.8 Flash model card, published 2 September 2026, lists a March 2026 knowledge cutoff while also warning that users may observe knowledge limited to January 2025 in some domains.

**Source:** Google DeepMind, *Gemini 3.8 Flash — Model Card*, 2 September 2026.  
URL: https://deepmind.google/models/model-cards/gemini-3-8-flash/

Why useful: a cutoff is not necessarily a perfectly uniform wall across all subjects.

---

## 10. AI products can bridge cutoffs with tools

### OpenAI

OpenAI's documentation states that knowledge of current events depends on the model and points developers/users toward built-in web search and file search for more current or supplied information.

**Source:** OpenAI Help Center, *Do the OpenAI API models have knowledge of current events?*  
URL: https://help.openai.com/en/articles/6639781

OpenAI's API documentation describes web search as a tool for accessing up-to-date information and returning citations.

**Source:** OpenAI API, *Web search*.  
URL: https://developers.openai.com/api/docs/guides/tools-web-search

### Google

Google describes Grounding with Google Search as retrieval of fresh information with grounding sources.

**Source:** Google Developers Blog, *Gemini API and Google AI Studio now offer Grounding with Google Search*, 31 October 2024.  
URL: https://developers.googleblog.com/en/gemini-api-and-ai-studio-now-offer-grounding-with-google-search/

### Critical distinction

**Base-model question:** What information is represented in learned parameters?  
**Product/system question:** What information can the running system retrieve or be given now?

The chapter should explicitly teach this because “AI is frozen in time” has become misleading at product level.

---

## 11. Search does not eliminate the cutoff/reliability problem

Search/retrieval can fail through:
- a bad search query;
- inaccessible/private data;
- ranking choices;
- stale pages;
- low-quality or misleading sources;
- malicious web content;
- incorrect extraction;
- confusing publication date with event date;
- version mismatch;
- incorrect synthesis;
- failure to search because the model incorrectly believes internal memory is enough.

Therefore:
> “Has web access” does not mean “always current and correct.”

Google DeepMind's FACTS suite contains a dedicated search factuality benchmark precisely because searching and synthesising correctly is itself a capability to evaluate.

**Source:** Google DeepMind, *FACTS Benchmark Suite*, 9 December 2025.  
URL: https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/

---

## 12. The plan's “current price” example

This is an excellent everyday demonstration.

Possible setup:
> “What is the current retail price of Product X in Australia?”

Compare:
1. model with no live browsing;
2. same question with live search;
3. direct retailer/product page.

Teaching points:
- “current” requires current evidence;
- location/currency/variant/sale status matter;
- search improves access but does not guarantee the right product variant;
- a precise unsourced number should not be mistaken for freshness.

Avoid embedding an actual price in the book unless explicitly dated as a snapshot.

---

# Part C — Training-data dependency

## 13. Model capability depends on what data was available and selected

Training-data composition affects:
- language coverage;
- subject coverage;
- historical period;
- frequency of viewpoints and misconceptions;
- cultural representation;
- specialised professional knowledge;
- stylistic tendencies;
- stereotypes/toxic associations;
- benchmark contamination;
- which concepts receive rich vs sparse examples.

This is more nuanced than “garbage in, garbage out.” Modern pipelines may include filtering, deduplication, quality weighting, synthetic data, multimodal data and post-training. Yet the selected data distribution still shapes learned capability.

---

## 14. Web-scale data is messy; filtering is not neutral

Dodge et al. examined the Colossal Clean Crawled Corpus (C4), a historically influential web-text corpus. They documented unexpected source composition, machine-generated text, material overlapping with benchmark datasets, and filtering effects that disproportionately removed text associated with minority identities.

**Source:** Jesse Dodge et al., *Documenting Large Webtext Corpora: A Case Study on the Colossal Clean Crawled Corpus*, EMNLP 2021.  
URL: https://aclanthology.org/2021.emnlp-main.98/  
DOI: https://doi.org/10.18653/v1/2021.emnlp-main.98

Why useful:
- “the internet” is not a clean, balanced body of truth;
- data-cleaning decisions affect representation;
- public benchmark contamination is a real concern.

Caveat:
- C4 is one historical corpus;
- do not imply every 2026 proprietary model uses C4 or inherits identical effects.

---

## 15. Bias and homogenisation link to training-data dependency

NIST's Generative AI Profile includes harmful bias and homogenisation as risks and connects performance disparities to data and system design.

**Source:** NIST AI 600-1.  
URL: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence

For this chapter, a concise connection is enough:
> “If some languages, places, communities or experiences are poorly represented, model reliability can be uneven.”

Detailed fairness analysis likely belongs elsewhere in the book.

---

## 16. Training data is not normally a searchable source database at inference time

A frequent misconception is:
> “The model looks through its training data and finds the page containing the answer.”

Ordinary inference instead uses parameters learned during training. The model generally does not have a complete searchable index of every original training document.

Consequences:
- it may reproduce/know a fact without being able to identify where it learned it;
- asking “which training page taught you that?” may produce unreliable provenance;
- it may fabricate a plausible source for something that resembles learned knowledge;
- retrieved documents are different because they are explicitly fetched at answer time and can often be cited.

This creates a strong bridge between training-data dependency and fabricated citations.

---

## 17. Training-data dependency does not mean copy-and-paste

Models can generalise, transform and generate novel combinations. Dependency on training data means learned capability is shaped by statistical structure in selected data, not that every output is a verbatim excerpt.

Avoid:
> “AI just copies the internet.”

Prefer:
> “AI learns patterns and representations from large datasets. What those datasets contain — and omit — affects what the model can do reliably.”

---

## 18. Model/product updates can change behaviour without the user changing prompts

Cloud AI behaviour can change because:
- provider replaces or updates the underlying model;
- routing changes;
- post-training changes;
- policy/safety layers change;
- search/retrieval changes;
- system instructions change;
- external data/tool results change.

Implication for book examples:
> “A particular failure may stop reproducing even though the broader limitation remains.”

This is why demonstrations should be tested near publication time and explained at the mechanism/concept level.

---

## 19. Product memory is not necessarily model retraining

Some AI products can remember user facts, maintain conversation state or retrieve stored notes. That does not necessarily mean the foundation model's weights are retrained on each conversation.

Useful distinction:
- **context:** information supplied for the current interaction;
- **retrieved memory:** stored information fetched later;
- **model weights:** learned parameters changed through training.

Product-specific memory behaviour varies, so do not make universal claims without vendor documentation.

---

# Part D — Connecting the planned limitations

## 20. One explanatory chain

The plan rightly aims to connect hallucination, understanding and common sense rather than list unrelated faults.

Useful synthesis:

1. A model learns from finite, uneven historical data.
2. Its learned representations are not guaranteed direct access to the current external world.
3. Everyday situations rely on many implicit physical, social and cultural assumptions.
4. When information is absent or ambiguous, generative systems can still produce fluent output.
5. Search/retrieval can add evidence, but source selection and interpretation remain fallible.
6. Therefore, linguistic fluency can exceed factual reliability.

Treat this as a practical explanatory model, not as proof that every failure has one cause.

---

# Part E — Potential examples and analogies

## 21. Open-book vs closed-book exam

- closed book = parametric knowledge;
- open book = search/retrieval;
- having the book helps but does not guarantee choosing or understanding the right passage.

Strong for knowledge cutoffs and retrieval.

## 22. Local etiquette

Prompt:
> “What is the polite thing to do when arriving at a family home?”

There is no single universal common-sense answer. Shoes, gifts, greetings and forms of address vary by culture and family. This gently demonstrates that “common sense” is contextual.

## 23. Recipe/pantry

The system's internal knowledge is like a pantry assembled from prior data. Retrieval can fetch new ingredients. The quality of the meal still depends on selecting and combining them correctly.

Caveat: analogy only concerns information availability; the model is not literally a conscious cook.

---

# Part F — Myth vs Reality candidates

**Myth:** AI has no common-sense knowledge.  
**Reality:** It can perform well on many common-sense tasks, but implicit, multi-step and culturally situated reasoning can remain brittle.

**Myth:** A knowledge cutoff means the entire AI product is frozen on that date.  
**Reality:** The model's built-in knowledge has a cutoff; products may retrieve newer information with search/files/tools.

**Myth:** Web access makes the cutoff irrelevant.  
**Reality:** Search supplies evidence, but retrieval and synthesis can still be wrong.

**Myth:** Training on more internet automatically makes a model complete and neutral.  
**Reality:** web data has omissions, errors, overrepresented viewpoints and filtering effects.

**Myth:** The model can tell you exactly which training webpage supplied a fact.  
**Reality:** parametric memory is not an ordinary source database; retrieval-based systems are different.

**Myth:** Training-data dependency means AI copies and pastes.  
**Reality:** models learn statistical structure and can generate new combinations; dependence describes where capabilities come from, not a literal copy operation.

---

# Part G — Strongest sources

1. CommonsenseQA — https://aclanthology.org/N19-1421/
2. Com², ACL 2025 — https://aclanthology.org/2025.acl-long.785/
3. ACCORD, NAACL 2025 — https://aclanthology.org/2025.naacl-long.193/
4. Commonsense Reasoning in Arab Culture — https://aclanthology.org/2025.acl-long.380/
5. Cross-Cultural Transfer — https://aclanthology.org/2025.findings-emnlp.247/
6. CulturalBench — https://aclanthology.org/2025.acl-long.1247/
7. Dodge et al., C4 — https://aclanthology.org/2021.emnlp-main.98/
8. NIST AI 600-1 — https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
9. Anthropic model overview — https://platform.claude.com/docs/en/models/overview
10. Gemini 3.8 Flash model card — https://deepmind.google/models/model-cards/gemini-3-8-flash/
11. OpenAI current-events help — https://help.openai.com/en/articles/6639781
12. OpenAI web-search docs — https://developers.openai.com/api/docs/guides/tools-web-search
13. Google Search grounding — https://developers.googleblog.com/en/gemini-api-and-ai-studio-now-offer-grounding-with-google-search/
