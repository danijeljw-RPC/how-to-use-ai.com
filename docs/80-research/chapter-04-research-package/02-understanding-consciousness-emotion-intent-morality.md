# Research — Understanding, Consciousness, Emotion, Intent and Morality

Supports planned Sections 3–4 and the core distinction between fluent prediction and human assumptions about minds. Several topics in the plan are active scientific/philosophical debates. The research below deliberately preserves disagreement rather than forcing a single conclusion.

---

# 1. “Understanding” is not one capability

Before claiming that an LLM does or does not “understand,” define the intended sense. Candidate meanings include:

- **formal linguistic competence:** grammar, syntax, word use and semantic relationships;
- **task understanding:** behaving as though it has correctly interpreted an instruction;
- **conceptual representation:** internal representations that organise concepts and relations;
- **functional understanding:** deploying knowledge successfully to achieve tasks;
- **grounded understanding:** connecting symbols to perception, action and the physical/social world;
- **human-like understanding:** sufficiently similar mechanisms/capacities to ordinary human cognition;
- **phenomenal understanding:** conscious subjective grasp of meaning.

Two researchers can appear to disagree while measuring different senses of “understanding.” This definitional problem is itself important research material.

---

## 2. Skeptical position — linguistic form is not automatically meaning

Emily Bender and Alexander Koller distinguish linguistic **form** from **meaning** and argue that systems trained only on form do not obtain meaning simply by modelling those forms more accurately.

**Source:** Emily M. Bender & Alexander Koller, *Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data*, ACL 2020.  
URL: https://aclanthology.org/2020.acl-main.463/  
DOI: https://doi.org/10.18653/v1/2020.acl-main.463

Useful for:
- intellectual basis for separating fluent language from grounded meaning;
- explaining why a convincing sentence is not automatic proof that a system relates words to reality as humans do.

Caveats:
- position published before current multimodal/tool-using frontier systems;
- argument is not an experimental proof that every future AI system is incapable of understanding;
- modern systems may receive images/audio/video or interact through tools, so “AI only sees text” is no longer universally accurate.

---

## 3. More permissive position — conceptual roles may constitute aspects of meaning

Piantadosi and Hill argue against the strongest “no meaning whatsoever” interpretation. They suggest that relationships among learned internal representations can instantiate important aspects of conceptual meaning even without direct reference in every case.

**Source:** Steven T. Piantadosi & Felix Hill, *Meaning without reference in large language models*, 2022.  
URL: https://arxiv.org/abs/2208.02957

Useful for:
- ensuring the chapter does not pretend there is unanimous consensus;
- supporting language such as “not proof of human-like grounded understanding” rather than “scientifically proven to understand nothing.”

Caveat: theoretical/position argument; it does not establish human-equivalent understanding or consciousness.

---

## 4. Middle framework — language competence vs thought/world competence

Mahowald and colleagues distinguish:
- **formal linguistic competence** — command of language form and statistical/structural relationships;
- **functional linguistic competence** — using language with world knowledge, reasoning and social/contextual information to accomplish goals.

They argue that LLMs show strong formal linguistic competence while broader functional performance depends on additional capacities and is less uniformly reliable.

**Source:** Kyle Mahowald et al., *Dissociating language and thought in large language models*, Trends in Cognitive Sciences, June 2024.  
URL: https://www.sciencedirect.com/science/article/pii/S1364661324000275  
DOI: https://doi.org/10.1016/j.tics.2024.01.011

This framework is especially suitable for non-technical readers because it avoids a false binary between:
- “AI understands exactly like a human,” and
- “AI contains nothing but empty words.”

Potential teaching sentence:
> “Being excellent at language and having a dependable human-style grasp of the world are not the same capability.”

---

## 5. The debate itself is established literature

Mitchell and Krakauer explicitly describe an active debate over whether LLMs understand language and the physical/social situations encoded in language in a human-like sense.

**Source:** Melanie Mitchell & David C. Krakauer, *The debate over understanding in AI’s large language models*, PNAS, March 2023.  
URL: https://pubmed.ncbi.nlm.nih.gov/36943882/  
DOI: https://doi.org/10.1073/pnas.2215907120

### Editorial consequence

The chapter can keep a heading such as “No True Understanding” if the body explains what “true” means. A defensible practical treatment:

- LLMs show behaviours reasonably described as linguistic and conceptual competence;
- those behaviours are not sufficient evidence for human-like grounded understanding;
- experts disagree over which capabilities deserve the word “understanding”;
- the operational reader rule is not to **assume** a human mental model behind fluent output.

---

## 6. Grounding

**Grounding** broadly means connecting language/symbols to information beyond other symbols — perception, action, external data, retrieved evidence, embodiment or shared situational context.

Modern systems complicate classic text-only arguments because they may:
- process images, audio and video;
- call web/search/database tools;
- execute code;
- operate software interfaces;
- receive sensor/robotic data.

These channels increase contact with external information. They do not make every output reliably grounded or resolve philosophical questions about human-like meaning.

A durable chapter distinction is therefore **reliable relationship to evidence/reality**, not “AI can only ever see text.”

---

# Consciousness

## 7. Conversational self-report is not a validated consciousness test

Examples such as:
- “I feel…”
- “I want…”
- “I am afraid…”
- “I remember…”

are generated linguistic outputs. They are not, by themselves, scientific measurements of subjective experience.

The reverse also holds: an AI saying “I am not conscious” is generated text and is not a scientific experiment proving absence of consciousness.

### Butlin et al. (2026)

A major current review proposes evaluating AI consciousness using indicators derived from neuroscientific theories and emphasises significant uncertainty in consciousness science. It also discusses risks of both over-attributing and under-attributing consciousness.

**Source:** Patrick Butlin et al., *Identifying indicators of consciousness in AI systems*, Trends in Cognitive Sciences 30(6), June 2026; online November 2025.  
URL: https://pubmed.ncbi.nlm.nih.gov/41219038/  
DOI: https://doi.org/10.1016/j.tics.2025.10.011

Useful points:
- no simple “sounds human, therefore conscious” criterion;
- capability tests and consciousness claims are different;
- scientific uncertainty makes categorical claims risky;
- a beginner chapter can be practical without adjudicating the metaphysics.

### Industry behaviour example — OpenAI Model Spec

OpenAI's April 2025 Model Spec tells the assistant not to make confident claims about the presence **or absence** of subjective experience/consciousness and to acknowledge the topic as debated.

**Source:** OpenAI, *Model Spec*, 11 April 2025.  
URL: https://model-spec.openai.com/2025-04-11.html

Use: an example of a major developer deliberately avoiding categorical self-claims. It is not scientific proof either way.

---

## 8. Awareness-like benchmark performance is not phenomenal consciousness

AwarenessBench (ACL 2026) operationalises tasks under labels including metacognition, self-awareness, social awareness and situational awareness. Models performed above random baselines and stronger models generally did better.

**Source:** Xiaojian Li et al., *AwarenessBench: Assessing Cognitive Capabilities of Language Models*, ACL 2026.  
URL: https://aclanthology.org/2026.acl-long.124/  
DOI: https://doi.org/10.18653/v1/2026.acl-long.124

Interpretation caution:
- “self-awareness” in a benchmark can mean correctly reasoning about self-related information;
- it does not automatically mean subjective phenomenal experience;
- the same everyday word can refer to a measurable cognitive behaviour and a philosophical property.

This is an excellent example for teaching why definitions matter.

---

# Emotion and empathy

## 9. Separate three claims

When someone says an AI “has emotions,” they may mean:

1. it can **recognise** emotional cues;
2. it can **generate** emotionally appropriate/empathetic language;
3. it has **subjective felt emotion**.

The first two are observable capabilities. The third is a claim about inner experience.

### Evidence for emotion recognition and empathic output

**Source:** Yuyan Chen et al., *EmotionQueen: A Benchmark for Evaluating Empathy of Large Language Models*, Findings of ACL 2024.  
URL: https://aclanthology.org/2024.findings-acl.128/  
DOI: https://doi.org/10.18653/v1/2024.findings-acl.128  
Supports: benchmark tasks for recognising events/emotions/intentions and generating empathetic responses.

**Source:** Shutong Feng et al., *Affect Recognition in Conversations Using Large Language Models*, SIGDIAL 2024.  
URL: https://aclanthology.org/2024.sigdial-1.23/  
DOI: https://doi.org/10.18653/v1/2024.sigdial-1.23  
Supports: empirical study of LLM affect recognition in conversations.

### Users can perceive AI as highly empathetic

A 2026 Communications Psychology study found that participants could rate AI-generated empathy highly while still preferring to receive empathy from human beings.

**Source:** Joshua D. Wenger, C. Daryl Cameron & Michael Inzlicht, *People choose to receive human empathy despite rating AI empathy higher*, Communications Psychology, 31 January 2026.  
URL: https://www.nature.com/articles/s44271-025-00387-3

Useful distinction:
> Perceived empathy is a real user-experience phenomenon. It is not proof of felt empathy inside the model.

### Editorial formulation

> “AI can recognise emotional cues and generate language that people experience as empathetic. That does not establish that it feels the emotion it describes.”

This preserves the plan's intent without making a scientifically stronger claim than evidence supports.

---

## 10. Anthropomorphism

Humans naturally attribute minds, motives and emotions to responsive systems. Human-like conversational interfaces amplify that tendency.

NIST includes inappropriate anthropomorphising and emotional entanglement under **Human-AI Configuration** risks.

**Source:** NIST AI 600-1, 2024.  
URL: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence

**Source:** *Empathic AI can’t get under the skin*, Nature Machine Intelligence editorial, 24 May 2024.  
URL: https://www.nature.com/articles/s42256-024-00850-6  
Type: editorial/commentary, not primary experimental evidence.

Potential reader lesson:
> “Human-like language triggers human social instincts. That tells us something about the interaction, but not necessarily about an inner life inside the software.”

---

# Intent and agency

## 11. “No intent” requires an agent distinction in 2026

Modern AI agents are explicitly designed to pursue tasks through multi-step behaviour.

Anthropic describes agents as systems in which models direct their own processes and tool use while accomplishing tasks, including loops of planning, acting, observing and adjusting.

**Source:** Anthropic, *Trustworthy agents in practice*, 9 April 2026.  
URL: https://www.anthropic.com/research/trustworthy-agents

OpenAI describes agents as systems that independently accomplish tasks on a user's behalf, using an LLM to manage workflow execution and decisions and interacting with tools.

**Source:** OpenAI, *A practical guide to building agents*.  
URL: https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/

### Distinguish two meanings

**Operational goal-directedness**
- a user/developer supplies an objective;
- the system selects steps;
- uses tools;
- observes results;
- adjusts subsequent actions;
- may run over an extended workflow.

**Human-like subjective intention**
- wanting an outcome in a conscious/desire sense;
- originating goals as a subjective self;
- holding beliefs/desires in the ordinary human mental-state sense.

Agentic systems clearly exhibit operational goal-directedness. That does not settle whether they have subjective intention.

### Better wording than “AI has no intent”

> “AI systems can behave in goal-directed ways, especially as agents. That does not establish human-like intentions, desires or purposes of their own.”

---

## 12. Intentional language can be shorthand

Researchers/developers may write:
- “the agent tried another tool”; 
- “the model decided to search”; 
- “the agent wanted more information.”

Operationally, this can describe a sequence where model output selects a tool, consumes the result and selects another action. The shorthand is useful but should not be treated as proof of subjective desire.

Potential miniature analogy:
> “The thermostat wants the room at 22°C” is ordinary shorthand for goal-directed control without implying a human-style desire. Agentic AI is vastly more complex, but the distinction between operational description and subjective mental state remains useful.

---

# Morality, values and responsibility

## 13. Models can generate moral reasoning

Current models can:
- compare ethical frameworks;
- analyse fairness, duties and consequences;
- recommend or reject actions on normative grounds;
- follow explicit safety/behaviour principles;
- produce values-laden language.

Therefore, “no morality” should not be presented as “AI cannot say anything morally sophisticated.”

### Trained normative behaviour is observable

Anthropic's January 2026 constitution describes intended behavioural values/principles and is designed to shape Claude's training and behaviour.

**Source:** Anthropic, *Claude’s Constitution*, January 2026.  
URL: https://www.anthropic.com/constitution

OpenAI likewise publishes a behaviour specification describing objectives, instruction hierarchy and expected normative behaviour.

**Source:** OpenAI, *Model Spec*, 11 April 2025.  
URL: https://model-spec.openai.com/2025-04-11.html

Takeaway:
> A system can be engineered to behave according to ethical/normative principles. That is different from establishing it as an independently morally responsible being.

---

## 14. Moral agency is contested

The Stanford Encyclopedia of Philosophy entry *Computing and Moral Responsibility* explains that most philosophers have not treated current computer technologies as moral agents **when moral agency is defined as being morally responsible**, while also documenting alternative/thinner theories.

**Source:** Stanford Encyclopedia of Philosophy, *Computing and Moral Responsibility*.  
URL: https://plato.stanford.edu/entries/computing-responsibility/

The SEP entry *Ethics of Artificial Intelligence and Robotics* surveys moral status, agency, machine ethics and responsibility debates.

**Source:** Stanford Encyclopedia of Philosophy, *Ethics of Artificial Intelligence and Robotics*.  
URL: https://plato.stanford.edu/entries/ethics-ai/

### Concepts to keep separate

- **Moral reasoning output:** observable generated behaviour.
- **Normative rules/values from training:** design property.
- **Moral agency:** philosophical status.
- **Moral patiency/status:** whether an entity itself deserves moral consideration.
- **Legal responsibility:** responsibility assigned by law/institutions.
- **Moral responsibility:** deserving blame or praise in a deeper sense.

A beginner chapter only needs the distinction, not the entire philosophical literature.

---

## 15. Human/organisation responsibility in deployment

### Moffatt v. Air Canada

A British Columbia tribunal held Air Canada responsible for inaccurate information supplied through its website chatbot and rejected the idea that the chatbot could be treated as a separate legal entity for responsibility purposes.

**Primary decision:** *Moffatt v. Air Canada*, 2024 BCCRT 149.  
URL: https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html

### Critical caveat

The proceeding did not establish in evidence what underlying technical architecture powered the chatbot. Do **not** present this as a proven “LLM hallucination” case.

**Supporting legal commentary:** Lenczner Slaght, *Whose Responsibility Is It Anyway? Chatbots and Legal Issues in Moffatt v Air Canada*.  
URL: https://litigate.com/whose-responsibility-is-it-anyway-chatbots-and-legal-issues-in-moffatt-v-air-canada

Best use:
- responsibility for automated information;
- deployer cannot simply blame “the chatbot.”

Bad use:
- claiming the case proves an LLM hallucinated.

---

# 16. Contrasting viewpoints matrix

| Question | Cautious/skeptical view | More permissive view | Practical chapter takeaway |
|---|---|---|---|
| Do LLMs understand? | Form alone does not establish meaning; fluency can mask grounding gaps. | Internal conceptual relationships may constitute meaningful representation in some senses. | Do not infer human-like grounded understanding from fluency. |
| Are current AI systems conscious? | No accepted conversational evidence/test establishes subjective experience. | Some theories of consciousness could in principle apply to artificial systems; indicator research is active. | Treat the question as unresolved, and do not use chat style as proof. |
| Do AI systems have emotions? | Generated empathy does not demonstrate felt emotion. | Systems demonstrably recognise affect and can functionally behave empathetically. | Separate emotional capability from subjective feeling. |
| Do agents have intent? | User/developer goals and optimisation need not be subjective desires. | Goal-directed planning/action can satisfy thin functional notions of agency/intention. | Separate operational goal pursuit from human-like intent. |
| Do models have morality? | Moral language and trained rules do not automatically confer moral responsibility. | Thin machine-morality theories treat norm-guided behaviour as morally relevant. | Separate ethical output/behaviour from moral agency/responsibility. |

---

# 17. Potential non-technical examples

## The comforting sentence

AI says: “I’m really happy for you.”

Questions for the reader:
- Have we observed correct use of emotionally appropriate language? Yes.
- Have we observed a felt internal state of happiness? No — the output alone does not establish that.

This teaches **observable behaviour vs inferred inner state** without requiring a full philosophy-of-mind digression.

## The agent books a meeting

A system:
1. reads calendars;
2. compares times;
3. chooses a slot according to instructions;
4. sends an invitation;
5. adjusts if the invite fails.

It behaved purposefully toward a goal. That does not answer whether it “wanted” the meeting booked in a human subjective sense.

## The ethics answer

Prompt: “Was it ethical to lie in this situation?”

A model can produce a sophisticated answer using consequences, duties, rights or relationships. This demonstrates moral-reasoning behaviour; it does not establish whether the model itself deserves moral praise/blame.

---

# 18. Potential analogies

## Actor delivering emotion

An actor can produce outward signs of grief while the actor's actual internal state differs from the character's. With AI, the observed emotional performance likewise does not establish the inner state being described.

Caveat: actors are conscious humans. Limit the analogy to the inference from expression to internal state.

## Thermostat “wants” the room warmer

People commonly use intentional shorthand for machines without implying subjective desire. Useful introduction to goal-directed language before discussing much more complex agents.

## Flight simulator vs flight

A simulator can reproduce important observable structures of flying without itself being an aircraft travelling through the sky. Useful for the distinction between modelling/simulating a phenomenon and proving possession of the underlying subjective property.

Caveat: this analogy illustrates a distinction; it does not prove absence of consciousness.

---

# 19. Myth vs Reality candidates

**Myth:** If AI talks naturally about feelings, it must feel them.  
**Reality:** Emotion recognition and empathetic language are observable; subjective feeling is a separate claim.

**Myth:** Researchers agree that LLMs definitely understand or definitely do not.  
**Reality:** “Understanding” has multiple definitions and remains actively debated.

**Myth:** An AI agent cannot act purposefully because it is not human.  
**Reality:** Modern agents can plan and act toward user-provided goals. Operational agency does not settle subjective intent.

**Myth:** If AI discusses ethics, it has its own independent morality.  
**Reality:** Models can perform ethical reasoning and follow trained principles; independent moral responsibility is a different question.

**Myth:** An AI's statement about whether it is conscious settles the question.  
**Reality:** A chatbot self-report is generated output, not a validated consciousness measurement.

---

# 20. Wording traps

Avoid categorical statements such as:
- “Scientists have proven AI has no consciousness.”
- “AI understands nothing.”
- “AI cannot reason.”
- “AI cannot recognise emotions.”
- “AI has no goals.”
- “AI has no values.”
- “AI only copies and pastes from its training data.”
- “AI is just autocomplete” without qualification.

Prefer:
- “Do not assume human-like grounded understanding from fluent output.”
- “There is no accepted basis for inferring subjective experience from conversational behaviour alone.”
- “AI can recognise and generate emotional language without that proving felt emotion.”
- “Agentic systems can pursue goals operationally; subjective intention is a separate claim.”
- “Models can exhibit trained normative behaviour without that resolving whether they are morally responsible agents.”

---

# 21. Strongest sources

1. Bender & Koller 2020 — https://aclanthology.org/2020.acl-main.463/
2. Mitchell & Krakauer 2023 — https://pubmed.ncbi.nlm.nih.gov/36943882/
3. Mahowald et al. 2024 — https://www.sciencedirect.com/science/article/pii/S1364661324000275
4. Piantadosi & Hill 2022 — https://arxiv.org/abs/2208.02957
5. Butlin et al. 2026 — https://pubmed.ncbi.nlm.nih.gov/41219038/
6. AwarenessBench 2026 — https://aclanthology.org/2026.acl-long.124/
7. EmotionQueen 2024 — https://aclanthology.org/2024.findings-acl.128/
8. Wenger et al. 2026 — https://www.nature.com/articles/s44271-025-00387-3
9. Anthropic Constitution 2026 — https://www.anthropic.com/constitution
10. Anthropic agents 2026 — https://www.anthropic.com/research/trustworthy-agents
11. OpenAI agents guide — https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
12. Stanford Encyclopedia of Philosophy — https://plato.stanford.edu/entries/computing-responsibility/
