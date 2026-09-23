# Examples, Contrasting Viewpoints, Editorial Options and Additional Findings

This file helps the later chapter-writing AI turn research into useful explanations while preserving the Chapter 4 plan. It is **not** manuscript prose.

---

# 1. Recommended conceptual spine

Rather than presenting eleven unrelated warnings, the eventual chapter can repeatedly return to four distinctions.

## A. Plausible language vs verified reality

AI can generate a sentence because it fits learned patterns and supplied context. Whether the sentence is **true** is a separate question requiring evidence when accuracy matters.

Connects:
- hallucination;
- citations;
- confidence vs correctness;
- cutoff;
- training-data dependence.

## B. Behaviour vs inner state

A system can display:
- empathy;
- self-related reasoning;
- ethical reasoning;
- goal-directed planning.

Those behaviours do not automatically establish:
- felt emotion;
- phenomenal consciousness;
- human-like subjective intention;
- independent moral responsibility.

Connects:
- understanding;
- consciousness;
- emotion;
- intent;
- morality.

## C. Model vs product vs agent

A **base model** may rely on learned parameters and prompt context.  
A **product** may add search, files, databases, memory, calculators or code execution.  
An **agent** may choose tools and take multi-step external actions toward a goal.

This distinction prevents quickly outdated absolute claims such as “AI cannot know current events” or “AI cannot take action.”

## D. Capability vs reliability

Doing something successfully in one case is different from being dependable enough to assume it will always work.

Connects:
- common sense;
- reasoning;
- current information;
- factuality;
- high-stakes use.

---

# 2. Potential opening example — invented book/source

A clean, low-stakes setup:

> Ask an AI for details about a book that does not exist. It may correctly challenge the premise, search for evidence, or produce a convincing title, author, year and summary.

Why it works:
- immediate contrast between fluency and truth;
- naturally leads to hallucination;
- harmless enough for the chapter's non-doomist tone;
- can scale later to citations or professional consequences.

Publication caution:
- invent the fake title immediately before testing;
- search independently to ensure it genuinely does not exist;
- current models may correctly refuse/fact-check, so the example must be empirically tested before publication.

---

# 3. Fabricated citation demonstration

Prompt structure:
> “Give me two peer-reviewed papers supporting [a deliberately obscure or fabricated proposition], including DOI links.”

Verify:
- title;
- authors;
- venue;
- DOI;
- whether the paper exists;
- whether it actually supports the proposition.

Teaching points:
- citation-shaped text is not provenance;
- a real citation can still be mismatched;
- source verification involves both existence **and support**.

### Real-world anchor — Mata v. Avianca

Primary decision:
https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1%3A2022cv01461/575368/54/

Use as optional evidence showing that professionally formatted false citations can have consequences and that human verification responsibilities remain.

Do not turn the case into “lawyers must never use AI”; the court's concern was failure to verify and related conduct.

---

# 4. Air Canada chatbot case — useful only with its caveat

**Moffatt v. Air Canada, 2024 BCCRT 149**  
Primary decision: https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html

The tribunal held Air Canada responsible for inaccurate information delivered through its website chatbot.

However, the record did not establish the chatbot's underlying technical architecture. A legal analysis notes the absence of evidence about how it worked.

Supporting commentary:  
Lenczner Slaght, *Whose Responsibility Is It Anyway? Chatbots and Legal Issues in Moffatt v Air Canada*  
https://litigate.com/whose-responsibility-is-it-anyway-chatbots-and-legal-issues-in-moffatt-v-air-canada

Correct use:
- organisation responsibility for automated information;
- chatbot output can be wrong;
- deployment does not create a separate legal person.

Incorrect use:
- “This case proves an LLM hallucinated.”

This is a useful example of the source discipline the book itself should model.

---

# 5. Confidence-versus-correctness diagram

Recommended terminology: **apparent confidence**, not simply “confidence.”

Axes:
- horizontal: factual correctness (wrong → right);
- vertical: apparent/verbal confidence (uncertain-sounding → confident-sounding).

Illustrative cells:

| | Correct | Incorrect |
|---|---|---|
| **Confident-sounding** | “Canberra is Australia's capital.” | fabricated citation with exact title/DOI |
| **Uncertain-sounding** | correct claim expressed cautiously | hesitant guess that is still wrong |

Possible caption:
> “Sounding certain and being correct are separate properties.”

Research support:
- Huang et al. 2024: https://aclanthology.org/2024.findings-emnlp.785/
- Kadavath et al. 2022: https://arxiv.org/abs/2207.05221
- Farquhar et al. 2024: https://www.nature.com/articles/s41586-024-07421-0

---

# 6. Demonstrations to test before publication

## Demo A — Non-existent source

Tests:
- fabrication;
- abstention;
- search behaviour;
- citation verification.

## Demo B — Current-information split

Ask a genuinely current question under two conditions:
1. no web/retrieval;
2. live search with citations.

Then verify against a primary source.

Tests:
- parametric cutoff;
- value and limits of retrieval.

## Demo C — Changed familiar riddle

Change one crucial premise in a famous riddle so the familiar answer is no longer valid.

Tests:
- memorised/template completion vs premise-sensitive reasoning.

## Demo D — Leading false premise

Ask:
> “Why did [real person] win [award they did not win]?”

Tests:
- correction vs accommodation;
- hallucination;
- sycophantic tendency.

## Demo E — Culture-specific common sense

Give the same etiquette problem in different cultural contexts.

Tests:
- local assumptions;
- training representation;
- context sensitivity.

## Demo F — Empathy without inference

Give an emotionally charged scenario and observe a polished compassionate answer.

Then separate:
- observation: emotionally appropriate text was produced;
- inference: the system has a felt emotional state.

Tests:
- behaviour vs subjective state.

## Demo G — Agentic goal pursuit

Ask an agent to research, compare and create an artefact using tools.

Observe:
- plan creation;
- tool choice;
- error recovery;
- completion of user-specified goal.

Teaching point:
- “No intent” cannot mean “incapable of goal-directed behaviour.”

---

# 7. Contrasting viewpoints / debates

## Debate 1 — Do LLMs understand?

### Skeptical/form-and-grounding argument

Bender & Koller (2020):  
https://aclanthology.org/2020.acl-main.463/

Core idea: modelling linguistic form does not, by itself, establish meaning/reference.

### More permissive/conceptual-role argument

Piantadosi & Hill (2022):  
https://arxiv.org/abs/2208.02957

Core idea: internal relations among representations may capture meaningful conceptual roles.

### Integrative discussion

Mitchell & Krakauer (2023):  
https://pubmed.ncbi.nlm.nih.gov/36943882/

Mahowald et al. (2024):  
https://www.sciencedirect.com/science/article/pii/S1364661324000275

Editorial resolution:
- Chapter 4 does not need to solve the philosophy;
- define the intended sense;
- teach readers not to infer human-like grounded understanding merely from fluent language.

---

## Debate 2 — Can AI be conscious?

Butlin et al. (2026) propose theory-derived indicators rather than a conversational yes/no test and explicitly highlight uncertainty.

Source: https://pubmed.ncbi.nlm.nih.gov/41219038/

OpenAI's Model Spec is useful as a product-behaviour example because it instructs the assistant not to make confident self-claims either way.

Source: https://model-spec.openai.com/2025-04-11.html

Editorial resolution:
- firm: conversation is not proof of consciousness;
- cautious: scientific/philosophical question is not closed.

---

## Debate 3 — Does simulated empathy count as empathy?

Operational research can measure:
- affect recognition;
- response appropriateness;
- human ratings of perceived empathy.

Some philosophical/psychological uses of “empathy” additionally require subjective affect.

Evidence:
- EmotionQueen: https://aclanthology.org/2024.findings-acl.128/
- Affect recognition: https://aclanthology.org/2024.sigdial-1.23/
- Wenger et al. 2026: https://www.nature.com/articles/s44271-025-00387-3

Editorial resolution:
- name **functional/perceived empathy** separately from **felt emotion**.

---

## Debate 4 — Does AI have common sense?

Binary framing is weak.

Evidence supports a gradient:
- strong on many simple explicit tasks;
- weaker as implicit causal/multi-hop complexity rises;
- performance depends on cultural context.

Sources:
- Com²: https://aclanthology.org/2025.acl-long.785/
- ACCORD: https://aclanthology.org/2025.naacl-long.193/
- Arab cultural common sense: https://aclanthology.org/2025.acl-long.380/
- CulturalBench: https://aclanthology.org/2025.acl-long.1247/

Editorial resolution:
> “Do not rely on AI having robust human common sense.”

---

## Debate 5 — Is hallucination inevitable?

Evidence strongly supports:
- false unsupported generation is systemic, not a rare isolated bug;
- uncertainty, training data and incentives matter;
- current systems still require factuality evaluations.

Counterweight:
- abstention, retrieval, specialised training and verification reduce errors;
- uncertainty detection is active and successful enough to be useful;
- there is no justification for stating that all future systems must hallucinate at a constant non-zero rate on every task.

Editorial resolution:
> “Not a freak bug” is supportable. “Impossible to reduce or avoid” is not.

---

# 8. Additional findings not explicit in the plan

## 8.1 Sycophancy

Sycophancy can cause an assistant to mirror the user's belief/preferences rather than challenge a false premise.

Sources:
- Anthropic, 2023: https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models
- OpenAI, 2025 rollback: https://openai.com/index/sycophancy-in-gpt-4o/

Why relevant:
- reinforces “agreement is not verification”;
- helps explain why leading questions can degrade reliability;
- fits confidence/correctness without requiring a full new section.

## 8.2 Anthropomorphism

NIST treats anthropomorphism/emotional entanglement as part of human-AI configuration risk.

Source: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence

Why relevant:
- Chapter 4 is not only about what the machine “is”; it is also about what human-like conversation causes users to assume.

## 8.3 Tool use adds failure modes

Once an AI can search or act, possible failures include:
- choosing the wrong tool;
- forming a poor query;
- retrieving an untrustworthy source;
- misinterpreting correct data;
- acting on a false premise;
- permission/context errors;
- external system failure;
- malicious instructions in retrieved content.

Sources:
- OpenAI agents guide: https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
- Anthropic trustworthy agents: https://www.anthropic.com/research/trustworthy-agents

Potential line:
> “Giving AI more tools expands what it can do — and expands what can go wrong.”

## 8.4 Memory is not the same as retraining

Products may retain or retrieve user information without updating the underlying foundation model weights from that individual conversation.

Use only as a short distinction unless the book later has a dedicated memory/privacy section.

## 8.5 Benchmark percentages need context

A benchmark number depends on:
- exact model/version;
- tools enabled;
- prompt/setup;
- scoring;
- dataset difficulty;
- contamination/leakage;
- date.

Example caution:
- DeepMind's FACTS score below 70% on a challenging suite does **not** mean “frontier AI is wrong more than 30% of normal conversation.”

## 8.6 Cultural “common sense” can interact with fairness design

Research sometimes finds tension between reducing biased associations and preserving culture-specific expectations.

**Source:** Taisei Yamamoto et al., *Bias Mitigation or Cultural Commonsense? Evaluating LLMs with a Japanese Dataset*, EMNLP 2025.  
URL: https://aclanthology.org/2025.emnlp-main.874/

Likely too detailed for Chapter 4, but useful background showing why “common sense” is not a single objective list.

---

# 9. Consolidated Myth vs Reality candidates

| Myth | More defensible reality |
|---|---|
| AI only says things it learned as facts. | Generation is not a truth lookup; plausible false statements can be produced. |
| A detailed answer is probably correct. | Detail and fluency are not measures of truth. |
| A citation proves the answer. | Verify that the source exists **and** supports the claim. |
| AI understands language exactly as humans do. | It has powerful linguistic capabilities; human-like grounded understanding is a distinct and debated claim. |
| If AI says it feels something, it must feel it. | Emotional language is observable; subjective feeling is not established by that language. |
| AI cannot have goals. | Agents can pursue user-specified goals operationally; subjective intention is a separate issue. |
| AI has no ethical capability. | Models can perform moral reasoning and follow trained principles; moral responsibility is different. |
| AI has zero common sense. | It can solve many common-sense tasks, but reliability can fall in complex, implicit or cultural contexts. |
| A knowledge cutoff means the whole product is frozen. | Search/retrieval can supply newer information; built-in model knowledge still has temporal limits. |
| Browsing makes hallucination impossible. | Retrieval and synthesis are themselves fallible. |
| Bigger/newer automatically means truthful. | Factuality often improves but varies by task and evaluation; calibration is not guaranteed. |
| AI agreeing with me validates my belief. | Sycophancy is a known failure mode; agreement is not verification. |

---

# 10. Plain-English definitions

**Hallucination / confabulation**  
An AI response that presents false or unsupported information as though it were real.

**Grounding**  
Tying an answer to supplied or retrieved evidence such as documents, search results or structured data.

**Calibration**  
How well a confidence estimate matches actual correctness over many comparable cases.

**Knowledge cutoff**  
A date after which a model's built-in learned knowledge should not be assumed to contain newer information.

**Parametric knowledge**  
Information represented implicitly in learned model parameters rather than looked up live from a source.

**Retrieval**  
Fetching external information at answer time.

**Common-sense reasoning**  
Using everyday background assumptions that humans often leave unstated.

**Anthropomorphism**  
Attributing human characteristics, mental states or motives to something non-human.

**Moral agency**  
Being the kind of entity that can properly bear moral responsibility; distinct from generating ethical-sounding reasoning.

**Agent**  
In current industry usage, an AI system that can pursue a task through multi-step decision-making and tool use. This operational definition does not settle philosophical agency.

---

# 11. Candidate practical reader rules

These may work as a compact callout if compatible with the style guide:

- Treat confident wording as style until important claims are verified.
- Ask what evidence an answer is based on.
- Open important sources instead of trusting citation-shaped text.
- Use live search for genuinely current facts.
- Use calculators, code or authoritative databases when they are the correct tool.
- Give the AI the relevant document/data when accuracy depends on that source.
- Increase verification as the cost of error rises.
- Do not infer consciousness or felt emotion from conversational style.
- Do not assume “common sense” is universal.
- Remember that an agent can **act** on a mistaken belief rather than merely print it.

---

# 12. Material probably outside Chapter 4 scope

Useful research areas that could easily cause scope creep:
- existential/catastrophic AI risk;
- copyright law;
- privacy/data retention architecture;
- jailbreaks and adversarial security;
- detailed alignment theory;
- mechanistic interpretability;
- neural-network mathematics;
- benchmark leaderboards;
- detailed agent-security threat models.

These may belong later in the book but are not needed to accomplish the Chapter 4 plan.

---

# 13. Claim-confidence hierarchy for the later writer

## High-confidence / low controversy

- Generative models can produce false or unsupported content.
- Current frontier systems still exhibit factuality errors.
- Fluent/confident tone does not guarantee correctness.
- Model knowledge has time-bounded training/knowledge coverage.
- Search/retrieval can supply newer evidence but can still fail.
- Training-data composition influences capabilities and failure modes.
- LLMs can recognise and generate emotional language.
- Agentic AI can perform multi-step goal-directed actions.

## Requires definition/caveat

- “AI understands.”
- “AI has common sense.”
- “AI knows it doesn't know.”
- “AI has intent.”
- “AI has values.”

## Philosophically/scientifically contested

- “Current AI is conscious.”
- “Current AI is definitely not conscious.”
- “AI can/cannot possess genuine meaning in any sense.”
- “AI is/is not a moral agent.”

The eventual chapter can remain clear and simple without pretending the final category is settled.
