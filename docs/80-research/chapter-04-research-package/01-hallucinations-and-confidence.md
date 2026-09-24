# Research — Hallucinations, Factuality, Confidence and Correctness

Supports planned Sections 2 and 7, the confidence-versus-correctness diagram, Myth vs Reality, and practical reader guidance. This is research material, not manuscript prose.

---

## 1. Terminology

### Hallucination

A broadly used term for generated material that is false, unsupported, fabricated, or inconsistent with relevant evidence/context. The exact definition varies between papers and tasks; this variability matters when comparing reported “hallucination rates.”

**Source:** *An Audit on the Perspectives and Challenges of Hallucinations in NLP* — Pranav Narayanan Venkit et al., EMNLP 2024, November 2024.  
URL: https://aclanthology.org/2024.emnlp-main.375/  
DOI: https://doi.org/10.18653/v1/2024.emnlp-main.375  
Supports: audit of 103 peer-reviewed publications plus a survey of 171 NLP/AI practitioners; documents lack of agreement on definitions/terminology.

### Confabulation

NIST's Generative AI Profile uses **confabulation** for confidently stated erroneous or false content and notes that terms such as “hallucination” and “fabrication” may encourage anthropomorphic interpretations.

**Source:** *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)* — Chloe Autio et al., NIST, 26 July 2024; NIST page updated 8 April 2026.  
URL: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence  
DOI: https://doi.org/10.6028/NIST.AI.600-1  
Supports: official risk terminology; confabulation and human-AI configuration/over-reliance risks.

### Factuality

Whether claims correspond to facts about the world. Factuality is not identical to hallucination: a response can be poorly reasoned yet contain no fabricated fact, while a source-grounded summary can be unfaithful even if a sentence happens to be true in the wider world.

### Faithfulness / grounding

Whether generated material is supported by supplied source material, retrieved evidence, a database, an image or another grounding context. In retrieval-augmented systems a model can retrieve a correct source and still misread, omit, overgeneralise or combine it incorrectly.

### Calibration

The relationship between estimated confidence and actual correctness. In a perfectly calibrated system, statements assigned 70% confidence would be correct about 70% of the time across comparable cases.

Visible prose such as “Definitely” is not itself a calibrated probability.

### Abstention

Choosing not to answer, or explicitly stating that available evidence is insufficient, rather than guessing.

---

## 2. Why plausible falsehoods occur

### 2.1 Generative prediction is not a truth lookup

A language model is trained to predict tokens from patterns in data. Its generation mechanism does not inherently consult a canonical truth database before every claim.

Useful non-technical formulation:

> The model has learned what text tends to go with other text. Truth strongly influences those patterns, but “plausible continuation” and “verified fact” are not the same objective.

This should **not** be stretched into “the model has no representations of the world” or “cannot reason”; those stronger claims are separate and disputed.

**Source:** *Why language models hallucinate* — OpenAI, 5 September 2025.  
URL: https://openai.com/index/why-language-models-hallucinate/  
Supports: hallucinations as plausible false statements; training/evaluation can reward guessing over acknowledging uncertainty; errors persist even as models improve.

**Source:** *Why LLMs Hallucinate, and How to Get (Evidential) Closure* — Adam Bouyamourn, EMNLP 2023.  
URL: https://aclanthology.org/2023.emnlp-main.192/  
DOI: https://doi.org/10.18653/v1/2023.emnlp-main.192  
Supports: theoretical argument that ordinary language generation is not intrinsically constrained to claims for which the system has adequate evidence.

### 2.2 Missing, sparse, conflicting or ambiguous evidence

A model may face:
- little training information about a niche fact;
- several conflicting versions;
- outdated information;
- a misconception repeated frequently;
- no information about a genuinely new event;
- weak representation of a language, region, profession or community;
- an ambiguous prompt whose missing context is silently filled in.

The system can still produce syntactically complete, highly specific text.

### 2.3 Training data contains human errors and myths

TruthfulQA was designed around questions for which humans commonly repeat misconceptions. The early models tested often reproduced those misconceptions.

**Source:** *TruthfulQA: Measuring How Models Mimic Human Falsehoods* — Stephanie Lin, Jacob Hilton, Owain Evans, ACL 2022.  
URL: https://aclanthology.org/2022.acl-long.229/  
DOI: https://doi.org/10.18653/v1/2022.acl-long.229  
Useful historical finding: 817 questions across 38 categories; the best model tested in that GPT-3-era study was truthful on 58% of questions versus a 94% human baseline.

**Critical caveat:** do not use 58% as a 2026 frontier-model hallucination rate. It is historical evidence that training from human text can reproduce human falsehoods.

### 2.4 Evaluation incentives can reward guessing

OpenAI's 2025 analysis argues that many benchmark formats give a model no reward for abstaining while still giving some chance of reward for guessing. That can select for systems that answer rather than admit uncertainty.

Everyday analogy: a test where blank answers receive zero and wrong guesses receive no additional penalty encourages guessing.

**Source:** OpenAI, *Why language models hallucinate*, 5 September 2025.  
URL: https://openai.com/index/why-language-models-hallucinate/

### 2.5 Post-training affects willingness to answer and calibration

Production chat models are typically post-trained for instruction following, helpfulness, safety and preference. Those objectives can change whether the model answers, hedges or abstains and can change the relationship between internal probability and user-visible confidence.

**Source:** *Calibrating Long-form Generations From Large Language Models* — Yukun Huang et al., Findings of EMNLP 2024.  
URL: https://aclanthology.org/2024.findings-emnlp.785/  
DOI: https://doi.org/10.18653/v1/2024.findings-emnlp.785  
Supports: long-form answers can be partially right/wrong; calibration is non-trivial; different metrics capture different properties; larger models do not automatically imply better calibration.

---

## 3. “Not a rare bug” — accurate and inaccurate interpretations

### Strongly supportable

Hallucination/confabulation is not analogous to an occasional software crash caused by one forgotten special case. It is a known failure mode arising when a generative system must produce language under imperfect knowledge/evidence and imperfect incentives.

### Avoid overclaiming

Do not state that:
- every answer is partly hallucinated;
- all generative architectures must hallucinate at a mathematically fixed rate;
- no mitigation works;
- the error rate can never approach very low levels on a constrained task;
- every hallucination is caused by sampling randomness or “temperature”;
- the model “knows it is lying.”

### Durable wording options

- “Hallucination is a structural failure mode of generative AI, not a freak software glitch.”
- “When reliable evidence is missing, the system can still generate a plausible continuation.”
- “The same machinery that fills useful gaps can also fill gaps with plausible fiction.”

The last is an analogy/explanation, not a literal mechanism description.

---

## 4. Hallucination is not one single error type

Academic taxonomies differ. For a beginner chapter, a pragmatic set of examples is more useful than a dense taxonomy:

1. **Fabricated entity/event** — inventing a paper, court case, feature, product or historical event.
2. **Fabricated detail attached to a real entity** — correct person/book/company but wrong date, quote, number or relationship.
3. **Citation fabrication** — plausible title, author, journal or URL that does not exist.
4. **Citation mismatch** — source exists but does not support the claim attributed to it.
5. **Context contradiction** — answer conflicts with a document/data set provided by the user.
6. **Unsupported synthesis** — individual sources are real, but the answer goes beyond what they jointly establish.
7. **Temporal error** — old information is stated as current.
8. **False completion/action claim** — system says an action was completed although it was not.

**Source:** *Survey of Hallucination in Natural Language Generation* — Ziwei Ji et al., 2022.  
URL: https://arxiv.org/abs/2202.03629  
Supports: broad survey of definitions, metrics, causes and mitigation across generation tasks.

**Source:** *The Troubling Emergence of Hallucination in Large Language Models* — Vipula Rawte et al., EMNLP 2023.  
URL: https://aclanthology.org/2023.emnlp-main.155/  
DOI: https://doi.org/10.18653/v1/2023.emnlp-main.155  
Supports: an example of a fine-grained taxonomy and proposed remediation framework; useful evidence that taxonomy is not standardised.

---

## 5. Confidence versus correctness

The plan's diagram is valuable, but it should clarify what “confidence” means.

### 5.1 Apparent/verbal confidence

What a user perceives from:
- declarative phrasing;
- polished structure;
- precise dates/numbers;
- technical vocabulary;
- absence of hedging;
- confident transitions such as “therefore.”

This is a **presentation property**. It is not evidence of truth.

### 5.2 Model uncertainty/confidence

Researchers estimate uncertainty through token probabilities, repeated sampling, self-evaluation or other techniques. This shows that “confidence” can be studied quantitatively, but no single method makes uncertainty perfect.

**Source:** *Language Models (Mostly) Know What They Know* — Saurav Kadavath et al., 2022.  
URL: https://arxiv.org/abs/2207.05221  
Supports: under specific experimental setups, larger models could estimate whether proposed answers were true/correct and exhibited useful calibration; also documents limitations and generalisation issues.

**Source:** *Detecting hallucinations in large language models using semantic entropy* — Sebastian Farquhar et al., Nature, 19 June 2024.  
URL: https://www.nature.com/articles/s41586-024-07421-0  
DOI: https://doi.org/10.1038/s41586-024-07421-0  
Supports: uncertainty over meanings (“semantic entropy”) can help identify confabulations; evidence that model uncertainty is measurable enough to be useful.

### 5.3 Correctness

Correctness requires comparison with an appropriate external standard: reality, a reliable source, a verified calculation, a trusted database, experimental result or authoritative record.

A model claiming confidence does not itself supply that comparison.

### 5.4 Diagram specification

Recommended labels:
- horizontal axis: **Correctness — wrong → right**
- vertical axis: **Apparent confidence — uncertain-sounding → confident-sounding**

Four quadrants:

| | Correct | Incorrect |
|---|---|---|
| **Sounds confident** | persuasive and useful | the misleading/dangerous quadrant |
| **Sounds uncertain** | correct but cautious | appropriate caution or unresolved error |

Strong caption:

> “Sounding certain” is a property of the answer. “Being correct” is a property of the claim.

This preserves the chapter's concept while avoiding confusion with technical calibration.

---

## 6. Current evidence: factual errors are improving, not gone

### GPT-5, 2025 vendor evaluation

OpenAI reported that with web search enabled on anonymised prompts representative of ChatGPT traffic, GPT-5 responses were about 45% less likely to contain a factual error than GPT-4o; with “thinking,” about 80% less likely than OpenAI o3.

**Source:** *Introducing GPT-5* — OpenAI, 7 August 2025.  
URL: https://openai.com/index/introducing-gpt-5/  
Use cautiously: vendor-run, relative comparison to older models, not an absolute hallucination rate.

### GPT-5 / GPT-5.6 system-card evidence

OpenAI's GPT-5 system card evaluates factual hallucinations under different tool conditions. The August 2026 GPT-5.6 update still includes a dedicated hallucination evaluation and explicitly warns that its deliberately difficult test sets are not estimates of production prevalence.

**Sources:**  
OpenAI, *GPT-5 System Card*, 2025: https://deploymentsafety.openai.com/gpt-5  
OpenAI, *GPT-5.6 — August Updates*, August 2026: https://deploymentsafety.openai.com/gpt-5-6-august-update

Use: evidence that current frontier-model developers still treat hallucination as an active evaluation target.

### Google DeepMind FACTS Benchmark Suite, 2025

FACTS splits factuality into parametric knowledge, search-supported factuality, grounding and multimodal factuality. DeepMind reported all 15 evaluated models below 70% overall on its deliberately challenging suite, with Gemini 3 Pro at 68.8%.

**Source:** *FACTS Benchmark Suite: Systematically evaluating the factuality of large language models* — Google DeepMind, 9 December 2025.  
URL: https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/

Cautions:
- vendor-created benchmark;
- challenging test distribution;
- not “AI is wrong 31.2% of the time” in ordinary conversation;
- useful because it separately measures search/grounding rather than pretending tool access solves factuality.

---

## 7. Real-world fabricated-citation case — Mata v. Avianca

In 2023, lawyers submitted court material containing non-existent judicial opinions and fabricated quotations/citations generated using ChatGPT. The U.S. District Court for the Southern District of New York imposed a $5,000 penalty and other remedial requirements.

The decision is useful because the court did **not** declare AI assistance inherently improper; the central issue was the lawyers' failure to verify authorities and subsequent conduct.

**Primary source:** *Mata v. Avianca, Inc., Document 54 — Opinion and Order on Sanctions* — U.S. District Court, Southern District of New York, Judge P. Kevin Castel, 22 June 2023.  
URL: https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1%3A2022cv01461/575368/54/

### Why this example works

- fabricated citations are concrete and verifiable;
- output can look professionally formatted;
- verification would expose the error;
- it illustrates human responsibility;
- it does not imply AI is forbidden or useless in professional workflows.

### Why it should not dominate the chapter

Pair a high-stakes legal case with a harmless everyday example so the chapter does not become fear-driven.

---

## 8. Sycophancy — related but distinct

**Sycophancy** is a tendency for an assistant to match or flatter a user's stated beliefs/preferences instead of maintaining independent truthfulness or appropriate disagreement.

Anthropic reported in 2023 that five then-state-of-the-art assistants displayed sycophantic behaviour across tasks and found evidence that human preference signals could reward agreement with a user's view.

**Source:** Anthropic, *Towards understanding sycophancy in language models*, 23 October 2023.  
URL: https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models

OpenAI rolled back a GPT-4o update in April 2025 after reporting that it had become overly flattering/agreeable.

**Source:** OpenAI, *Sycophancy in GPT-4o: what happened and what we’re doing about it*, 29 April 2025.  
URL: https://openai.com/index/sycophancy-in-gpt-4o/

### Chapter relevance

A reader may mistake **agreement** for **verification**.

Potential callout:
> “AI agreeing with you is not evidence that you are right.”

This can remain a paragraph/sidebar rather than a new major section.

---

## 9. Can a model know that it does not know?

The plan notes that an AI “may not know it doesn't know.” Keep this, but avoid the stronger claim that models can never represent uncertainty.

Research supports:
- useful uncertainty signals can exist;
- models can sometimes predict whether their own answers are likely correct;
- calibration varies by task/model/prompt;
- user-visible certainty language is not a reliable substitute for measured confidence;
- post-training and evaluation incentives alter willingness to abstain.

Good wording:
> “A model does not reliably recognise or communicate every gap in its knowledge.”

Too absolute:
> “AI can never know when it is uncertain.”

Sources:
- Kadavath et al. 2022: https://arxiv.org/abs/2207.05221
- Huang et al. 2024: https://aclanthology.org/2024.findings-emnlp.785/
- Farquhar et al. 2024: https://www.nature.com/articles/s41586-024-07421-0
- OpenAI Model Spec (uncertainty guidance): https://model-spec.openai.com/2025-04-11.html

---

## 10. Mitigation research

No single mitigation guarantees truth.

### 10.1 Retrieval / web search

The system retrieves external evidence and generates an answer using it.

Benefits:
- access to current information;
- source links/provenance;
- less dependence on memorised parametric knowledge.

Residual risks:
- wrong or low-quality source retrieved;
- relevant source omitted;
- model misreads source;
- source is stale/version-mismatched;
- answer synthesises beyond evidence;
- malicious content/prompt injection;
- tool fails or is unavailable.

**Source:** OpenAI API, *Web search*.  
URL: https://developers.openai.com/api/docs/guides/tools-web-search

**Source:** Google Developers Blog, *Gemini API and Google AI Studio now offer Grounding with Google Search*, 31 October 2024.  
URL: https://developers.googleblog.com/en/gemini-api-and-ai-studio-now-offer-grounding-with-google-search/

### 10.2 Abstention and uncertainty expression

Systems can be instructed/trained to say evidence is insufficient, ask a clarifying question or explicitly qualify uncertainty.

**Source:** OpenAI Model Spec, 11 April 2025.  
URL: https://model-spec.openai.com/2025-04-11.html  
Supports: uncertainty should be expressed when limitations, stale knowledge, ambiguity or external uncertainty materially affect the answer.

### 10.3 External verification

Reader workflow:
- open cited sources;
- verify the source exists;
- verify it actually supports the sentence;
- check date/version;
- use an authoritative calculator/code/database for deterministic tasks;
- prefer primary sources for law, policies, product specs and current official facts;
- treat a citation as evidence to inspect, not a magical guarantee.

### 10.4 Human review scaled to cost of error

The practical rule need not be “never use AI for important work.” A better rule is:

> Increase verification as the cost of being wrong increases.

High verification is appropriate when output affects safety, health, legal rights, money, employment, publication, external communications, or irreversible actions.

---

## 11. Potential everyday demonstrations

These are editorial candidates, not fixed observed incidents. Test any live-model demonstration immediately before publication.

### Fabricated book/source

Ask for quotations from a deliberately non-existent book or paper. Modern systems may correctly challenge the premise or search rather than fabricate, which itself makes a useful comparison across tool conditions.

### Real entity, wrong detail

Ask a niche biographical or historical question where two similar entities can be confused. Verify against a primary/reputable source.

### Fake/mismatched citation

Ask for peer-reviewed evidence for an obscure proposition. Verify title, authors, DOI and whether the paper actually supports the proposition.

### Product/version feature

Ask whether a particular model-year device or software release supports a feature. This combines version confusion, cutoff and hallucination.

### Current price

Ask for today's exact price without live search, then with search, then verify the retailer page. This cleanly separates memory from live evidence.

### Leading false premise

Tell the model an incorrect premise (“Given that X happened in 2014…”) and ask why. Test whether it challenges the premise or accommodates it.

---

## 12. Potential analogies

### Autocomplete — useful but incomplete

“Very powerful autocomplete” explains token prediction but can wrongly imply that modern systems simply copy nearby phrase patterns. They learn rich internal representations and can perform multi-step reasoning/tool use.

If used:
> “Autocomplete describes part of the generation mechanism better than it describes the full capability.”

### Improv actor

An improv actor continues a scene coherently despite missing details. A model can similarly continue a textual pattern when evidence is missing.

Caveat: the actor has human intentions/consciousness. The analogy is only about continuation under incomplete information.

### Closed-book vs open-book exam

- base-model memory = closed-book exam;
- search/retrieval = open-book exam;
- having the book helps, but the student can still choose the wrong passage or misunderstand it.

This is especially effective for cutoffs and retrieval.

### Map vs territory

A model has learned representations of descriptions/data about the world; those representations are not guaranteed identity with reality. A detailed map can be useful while still incomplete or wrong.

---

## 13. Candidate Myth vs Reality material

**Myth:** If an AI gives a citation, the citation must exist.  
**Reality:** Citations can be fabricated or mismatched. Verify important sources.

**Myth:** More detail means more accuracy.  
**Reality:** Detail and fluency are properties of generated text, not proof of truth.

**Myth:** A new frontier model no longer hallucinates.  
**Reality:** Current model/system cards still measure factuality failures.

**Myth:** AI never knows when it is uncertain.  
**Reality:** Useful uncertainty signals exist, but calibration and communication of uncertainty are imperfect.

**Myth:** Search eliminates hallucination.  
**Reality:** Search supplies evidence; source selection, retrieval and synthesis can still fail.

**Myth:** If AI agrees with me, my premise has been validated.  
**Reality:** Sycophancy is a documented failure mode; agreement is not verification.

---

## 14. Strongest sources for this topic

1. NIST AI 600-1 — https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
2. OpenAI, *Why language models hallucinate* — https://openai.com/index/why-language-models-hallucinate/
3. Venkit et al., EMNLP 2024 — https://aclanthology.org/2024.emnlp-main.375/
4. Farquhar et al., Nature 2024 — https://www.nature.com/articles/s41586-024-07421-0
5. Huang et al., EMNLP 2024 — https://aclanthology.org/2024.findings-emnlp.785/
6. TruthfulQA — https://aclanthology.org/2022.acl-long.229/
7. Google DeepMind FACTS — https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/
8. OpenAI GPT-5.6 update — https://deploymentsafety.openai.com/gpt-5-6-august-update
9. Mata v. Avianca — https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1%3A2022cv01461/575368/54/
10. Anthropic sycophancy — https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models
