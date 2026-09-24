# Source Catalogue / Bibliography Working List

**Research date:** 2026-09-24

This list prioritises primary/official and peer-reviewed sources. Vendor sources are appropriate for documenting that vendor's model, product, published evaluation or design approach; vendor benchmark claims should not be treated as independent cross-industry adjudication.

---

# A. Standards, government and risk frameworks

## A1. Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile

- **Authors:** Chloe Autio, Reva Schwartz, Jesse Dunietz, Shomik Jain, Martin Stanley, Elham Tabassi, Patrick Hall, Kamie Roberts
- **Organisation:** U.S. National Institute of Standards and Technology (NIST)
- **Date:** 26 July 2024; NIST page updated 8 April 2026
- **Report:** NIST AI 600-1
- **URL:** https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- **DOI:** https://doi.org/10.6028/NIST.AI.600-1
- **Supports:** confabulation terminology; human-AI configuration and anthropomorphism/over-reliance; harmful bias/homogenisation; practical GenAI risk framework.
- **Use note:** very strong primary standards source. Do not treat every risk category as a claim that harm always occurs.

---

# B. Hallucination, factuality and calibration

## B1. Why language models hallucinate

- **Organisation:** OpenAI
- **Date:** 5 September 2025
- **URL:** https://openai.com/index/why-language-models-hallucinate/
- **Supports:** plausible false statements; training/evaluation incentives that reward guessing; importance of abstention and uncertainty.
- **Use note:** primary company research/interpretation; useful but not the only theory of hallucination.

## B2. An Audit on the Perspectives and Challenges of Hallucinations in NLP

- **Authors:** Pranav Narayanan Venkit, Tatiana Chakravorti, Vipul Gupta, Heidi Biggs, Mukund Srinath, Koustava Goswami, Sarah Rajtmajer, Shomir Wilson
- **Venue:** EMNLP 2024
- **Date:** November 2024
- **URL:** https://aclanthology.org/2024.emnlp-main.375/
- **DOI:** https://doi.org/10.18653/v1/2024.emnlp-main.375
- **Supports:** lack of consensus on hallucination definitions; audit of 103 publications; survey of 171 practitioners.
- **Use note:** strong peer-reviewed source when explaining why percentages from different “hallucination” studies cannot always be compared directly.

## B3. Survey of Hallucination in Natural Language Generation

- **Authors:** Ziwei Ji et al.
- **Date:** 2022
- **URL:** https://arxiv.org/abs/2202.03629
- **Supports:** broad taxonomy, metrics, causes and mitigation across NLG tasks.
- **Use note:** useful background survey; predates the newest frontier systems.

## B4. The Troubling Emergence of Hallucination in Large Language Models

- **Authors:** Vipula Rawte et al.
- **Venue:** EMNLP 2023
- **URL:** https://aclanthology.org/2023.emnlp-main.155/
- **DOI:** https://doi.org/10.18653/v1/2023.emnlp-main.155
- **Supports:** one proposed fine-grained hallucination taxonomy and remediation framework.
- **Use note:** taxonomy is a proposal, not universal terminology.

## B5. Why LLMs Hallucinate, and How to Get (Evidential) Closure

- **Author:** Adam Bouyamourn
- **Venue:** EMNLP 2023
- **URL:** https://aclanthology.org/2023.emnlp-main.192/
- **DOI:** https://doi.org/10.18653/v1/2023.emnlp-main.192
- **Supports:** theoretical argument that ordinary neural language generation is not inherently restricted to claims supported by evidence.
- **Use note:** theoretical/argumentative source; pair with empirical work.

## B6. Detecting hallucinations in large language models using semantic entropy

- **Authors:** Sebastian Farquhar et al.
- **Journal:** Nature 630, 625–630
- **Date:** 19 June 2024
- **URL:** https://www.nature.com/articles/s41586-024-07421-0
- **DOI:** https://doi.org/10.1038/s41586-024-07421-0
- **Supports:** uncertainty over meanings can help detect confabulations; useful counterpoint to “models can never know they are uncertain.”
- **Use note:** high-quality peer-reviewed experimental source.

## B7. Language Models (Mostly) Know What They Know

- **Authors:** Saurav Kadavath et al.
- **Date:** 2022
- **URL:** https://arxiv.org/abs/2207.05221
- **Supports:** model self-evaluation/calibration under specific experimental formats; P(True)/P(IK) concepts.
- **Use note:** preprint and older model generation; useful for conceptual nuance rather than 2026 performance.

## B8. Calibrating Long-form Generations From Large Language Models

- **Authors:** Yukun Huang, Yixin Liu, Raghuveer Thirukovalluru, Arman Cohan, Bhuwan Dhingra
- **Venue:** Findings of EMNLP 2024
- **URL:** https://aclanthology.org/2024.findings-emnlp.785/
- **DOI:** https://doi.org/10.18653/v1/2024.findings-emnlp.785
- **Supports:** long answers can be partly correct; calibration metrics; larger models do not necessarily imply better calibration.
- **Use note:** strong source for confidence-vs-correctness nuance.

## B9. TruthfulQA: Measuring How Models Mimic Human Falsehoods

- **Authors:** Stephanie Lin, Jacob Hilton, Owain Evans
- **Venue:** ACL 2022
- **URL:** https://aclanthology.org/2022.acl-long.229/
- **DOI:** https://doi.org/10.18653/v1/2022.acl-long.229
- **Supports:** historical demonstration that models can reproduce human misconceptions; 817 questions across 38 categories.
- **Use note:** study's numerical performance is historical; do not present GPT-3-era scores as current model error rates.

## B10. FACTS Benchmark Suite: Systematically evaluating the factuality of large language models

- **Organisation:** Google DeepMind
- **Date:** 9 December 2025
- **URL:** https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/
- **Supports:** separate parametric, search, grounding and multimodal factuality; evidence that tool-enabled factuality is still a meaningful evaluation problem.
- **Use note:** vendor-created benchmark and vendor-reported results; benchmark scores are not everyday conversation error rates.

---

# C. Current model/product evidence — time-sensitive

## C1. GPT-5 System Card

- **Organisation:** OpenAI
- **Date:** 2025
- **URL:** https://deploymentsafety.openai.com/gpt-5
- **Supports:** factual hallucination evaluation under different tool conditions.
- **Use note:** primary source for GPT-5; retain model/version/date.

## C2. Introducing GPT-5

- **Organisation:** OpenAI
- **Date:** 7 August 2025
- **URL:** https://openai.com/index/introducing-gpt-5/
- **Supports:** vendor-reported relative reductions in factual error versus GPT-4o/o3 under specified evaluations.
- **Use note:** relative vendor evaluation, not independent absolute hallucination prevalence.

## C3. GPT-5.6 — August Updates

- **Organisation:** OpenAI Deployment Safety Hub
- **Date:** August 2026
- **URL:** https://deploymentsafety.openai.com/gpt-5-6-august-update
- **Supports:** hallucination remains an explicit current frontier-system evaluation; warns that challenging eval rates should not be interpreted as production prevalence.
- **Use note:** very time-sensitive; primary source for that model family/version.

## C4. Model Spec

- **Organisation:** OpenAI
- **Date:** 11 April 2025
- **URL:** https://model-spec.openai.com/2025-04-11.html
- **Supports:** uncertainty guidance; behaviour under ambiguity/outdated information; explicit caution around claims of subjective consciousness; demonstrates model behaviour is shaped through published instruction policies.
- **Use note:** behaviour-policy source, not scientific authority on consciousness.

## C5. Do the OpenAI API models have knowledge of current events?

- **Organisation:** OpenAI Help Center
- **URL:** https://help.openai.com/en/articles/6639781
- **Supports:** knowledge of current events is model-specific; search/file tools can provide newer information.
- **Use note:** product documentation; date-stamp any model-specific details.

## C6. Web search

- **Organisation:** OpenAI API documentation
- **URL:** https://developers.openai.com/api/docs/guides/tools-web-search
- **Supports:** web search as a mechanism for up-to-date information and sourced citations.
- **Use note:** product/tool behaviour changes over time.

## C7. Models overview

- **Organisation:** Anthropic
- **URL:** https://platform.claude.com/docs/en/models/overview
- **Accessed for research:** 24 September 2026
- **Supports:** current reliable-knowledge cutoffs across Claude models.
- **Use note:** very time-sensitive; never quote cutoff values without date/model name.

## C8. Claude Opus 5.5 overview

- **Organisation:** Anthropic
- **Release date:** 22 September 2026
- **URL:** https://platform.claude.com/docs/en/models/opus-5-5/overview
- **Supports:** concrete current example of separate reliable-knowledge/training-data cutoff metadata.
- **Use note:** date-sensitive illustration only.

## C9. Gemini 3.8 Flash — Model Card

- **Organisation:** Google DeepMind
- **Date:** 2 September 2026
- **URL:** https://deepmind.google/models/model-cards/gemini-3-8-flash/
- **Supports:** current known limitations including hallucination; knowledge-cutoff documentation and domain caveat.
- **Use note:** very time-sensitive primary source.

## C10. Gemini API and Google AI Studio now offer Grounding with Google Search

- **Authors:** Shrestha Basu Mallick, Logan Kilpatrick
- **Organisation:** Google Developers Blog
- **Date:** 31 October 2024
- **URL:** https://developers.googleblog.com/en/gemini-api-and-ai-studio-now-offer-grounding-with-google-search/
- **Supports:** search grounding/retrieval of fresh information and sources.
- **Use note:** vendor product source; useful for model-vs-product distinction.

---

# D. Understanding, meaning and grounding

## D1. Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data

- **Authors:** Emily M. Bender, Alexander Koller
- **Venue:** ACL 2020
- **Date:** July 2020
- **URL:** https://aclanthology.org/2020.acl-main.463/
- **DOI:** https://doi.org/10.18653/v1/2020.acl-main.463
- **Supports:** form-vs-meaning distinction; influential skeptical position on deriving meaning from linguistic form alone.
- **Use note:** foundational position argument; predates multimodal/tool-using frontier systems.

## D2. The debate over understanding in AI’s large language models

- **Authors:** Melanie Mitchell, David C. Krakauer
- **Journal:** PNAS
- **Date:** March 2023
- **URL:** https://pubmed.ncbi.nlm.nih.gov/36943882/
- **DOI:** https://doi.org/10.1073/pnas.2215907120
- **Supports:** maps active debate over human-like understanding in LLMs.
- **Use note:** strong neutral/integrative source for presenting disagreement.

## D3. Dissociating language and thought in large language models

- **Authors:** Kyle Mahowald et al.
- **Journal:** Trends in Cognitive Sciences 28(6)
- **Date:** June 2024
- **URL:** https://www.sciencedirect.com/science/article/pii/S1364661324000275
- **DOI:** https://doi.org/10.1016/j.tics.2024.01.011
- **Supports:** distinction between formal and functional linguistic competence; useful middle framework.
- **Use note:** particularly suitable for accessible explanation.

## D4. Meaning without reference in large language models

- **Authors:** Steven T. Piantadosi, Felix Hill
- **Date:** 2022
- **URL:** https://arxiv.org/abs/2208.02957
- **Supports:** contrasting position that internal conceptual-role relationships may constitute important aspects of meaning.
- **Use note:** preprint/position argument; include as a competing viewpoint, not settled fact.

---

# E. Consciousness, awareness and emotion

## E1. Identifying indicators of consciousness in AI systems

- **Authors:** Patrick Butlin, Robert Long, Tim Bayne, Yoshua Bengio, Jonathan Birch, David Chalmers et al.
- **Journal:** Trends in Cognitive Sciences 30(6), 488–501
- **Online:** 10 November 2025
- **Print:** June 2026
- **URL:** https://pubmed.ncbi.nlm.nih.gov/41219038/
- **DOI:** https://doi.org/10.1016/j.tics.2025.10.011
- **Supports:** current scientific uncertainty; theory-derived indicators; risks of over- and under-attributing consciousness.
- **Use note:** strongest current source in package for avoiding categorical “science has proven no consciousness” claims.

## E2. AwarenessBench: Assessing Cognitive Capabilities of Language Models

- **Authors:** Xiaojian Li et al.
- **Venue:** ACL 2026
- **URL:** https://aclanthology.org/2026.acl-long.124/
- **DOI:** https://doi.org/10.18653/v1/2026.acl-long.124
- **Supports:** operational “awareness” tasks such as metacognition/self/social/situational awareness; stronger models can perform above random baselines.
- **Use note:** benchmark capability labels do not establish phenomenal consciousness.

## E3. EmotionQueen: A Benchmark for Evaluating Empathy of Large Language Models

- **Authors:** Yuyan Chen, Songzhou Yan, Sijia Liu, Yueze Li, Yanghua Xiao
- **Venue:** Findings of ACL 2024
- **URL:** https://aclanthology.org/2024.findings-acl.128/
- **DOI:** https://doi.org/10.18653/v1/2024.findings-acl.128
- **Supports:** emotion/intent recognition and generation of empathetic responses.
- **Use note:** evidence of observable capability, not felt emotion.

## E4. Affect Recognition in Conversations Using Large Language Models

- **Authors:** Shutong Feng, Guangzhi Sun, Nurul Lubis, Wen Wu, Chao Zhang, Milica Gašić
- **Venue:** SIGDIAL 2024
- **URL:** https://aclanthology.org/2024.sigdial-1.23/
- **DOI:** https://doi.org/10.18653/v1/2024.sigdial-1.23
- **Supports:** empirical study of affect-recognition capability in conversations.
- **Use note:** supports behaviour/capability distinction.

## E5. People choose to receive human empathy despite rating AI empathy higher

- **Authors:** Joshua D. Wenger, C. Daryl Cameron, Michael Inzlicht
- **Journal:** Communications Psychology
- **Date:** 31 January 2026
- **URL:** https://www.nature.com/articles/s44271-025-00387-3
- **Supports:** perceived AI empathy can be rated highly while people still prefer human empathy.
- **Use note:** good empirical source for separating perceived empathetic quality from claims about subjective AI feeling.

## E6. Empathic AI can’t get under the skin

- **Journal:** Nature Machine Intelligence
- **Date:** 24 May 2024
- **URL:** https://www.nature.com/articles/s42256-024-00850-6
- **Type:** Editorial
- **Supports:** commentary about emulated empathy and anthropomorphic inference.
- **Use note:** commentary, not primary empirical evidence.

---

# F. Intent, agency, morality and responsibility

## F1. Trustworthy agents in practice

- **Organisation:** Anthropic
- **Date:** 9 April 2026
- **URL:** https://www.anthropic.com/research/trustworthy-agents
- **Supports:** contemporary industry definition of agents; planning/action/observation loops; risks around autonomous tool use and maintaining human control.
- **Use note:** primary vendor research; useful for operational agency, not philosophical proof of subjective intention.

## F2. A practical guide to building agents

- **Organisation:** OpenAI
- **URL:** https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
- **Supports:** agents as systems that independently accomplish user tasks through workflow decisions and tools.
- **Use note:** current industry definition/example; time-sensitive at product layer.

## F3. Claude’s Constitution

- **Organisation:** Anthropic
- **Primary author:** Amanda Askell; additional contributors listed by Anthropic
- **Version:** January 2026
- **URL:** https://www.anthropic.com/constitution
- **Supports:** direct evidence that a developer explicitly shapes intended model values/normative behaviour through training guidance.
- **Use note:** useful for separating trained values/behaviour from philosophical moral agency.

## F4. Computing and Moral Responsibility

- **Publisher:** Stanford Encyclopedia of Philosophy
- **URL:** https://plato.stanford.edu/entries/computing-responsibility/
- **Supports:** philosophical debate over whether artificial systems can be morally responsible agents; traditional and alternative accounts.
- **Use note:** authoritative philosophical reference, not empirical experiment.

## F5. Ethics of Artificial Intelligence and Robotics

- **Publisher:** Stanford Encyclopedia of Philosophy
- **URL:** https://plato.stanford.edu/entries/ethics-ai/
- **Supports:** moral status, machine ethics, agency/patiency and responsibility debates.
- **Use note:** background/reference source.

---

# G. Common sense and culture

## G1. CommonsenseQA: A Question Answering Challenge Targeting Commonsense Knowledge

- **Authors:** Alon Talmor, Jonathan Herzig, Nicholas Lourie, Jonathan Berant
- **Venue:** NAACL 2019
- **URL:** https://aclanthology.org/N19-1421/
- **DOI:** https://doi.org/10.18653/v1/N19-1421
- **Supports:** historical common-sense benchmark; 12,247 questions; historical human/model gap.
- **Use note:** do not present 2019 model scores as 2026 capability.

## G2. Com²: A Causal-Guided Benchmark for Exploring Complex Commonsense Reasoning in Large Language Models

- **Authors:** Kai Xiong et al.
- **Venue:** ACL 2025
- **URL:** https://aclanthology.org/2025.acl-long.785/
- **DOI:** https://doi.org/10.18653/v1/2025.acl-long.785
- **Supports:** contrast between strong simple/explicit common sense and difficulty with complex implicit causal chains.
- **Use note:** strong current research for nuanced “no common sense” treatment.

## G3. ACCORD: Closing the Commonsense Measurability Gap

- **Authors:** François Roewer-Després, Jinyue Feng, Zining Zhu, Frank Rudzicz
- **Venue:** NAACL 2025
- **URL:** https://aclanthology.org/2025.naacl-long.193/
- **Supports:** controlled increase in common-sense reasoning complexity produces substantial performance degradation.
- **Use note:** useful evidence of brittleness rather than total absence.

## G4. Commonsense Reasoning in Arab Culture

- **Authors:** Abdelrahman Sadallah et al.
- **Venue:** ACL 2025
- **URL:** https://aclanthology.org/2025.acl-long.380/
- **DOI:** https://doi.org/10.18653/v1/2025.acl-long.380
- **Supports:** cultural/geographic variation in common-sense knowledge; native-authored questions across 13 Arab countries.
- **Use note:** strong evidence that “common sense” is culturally situated.

## G5. Cross-Cultural Transfer of Commonsense Reasoning in LLMs: Evidence from the Arab World

- **Authors:** Saeed Almheiri et al.
- **Venue:** Findings of EMNLP 2025
- **URL:** https://aclanthology.org/2025.findings-emnlp.247/
- **DOI:** https://doi.org/10.18653/v1/2025.findings-emnlp.247
- **Supports:** culture-specific demonstrations can improve cross-cultural common-sense performance.
- **Use note:** useful counterpoint showing limitations can be mitigated rather than immutable.

## G6. CulturalBench

- **Authors:** Yu Ying Chiu et al.
- **Venue:** ACL 2025
- **URL:** https://aclanthology.org/2025.acl-long.1247/
- **Supports:** 1,696 human-written/verified questions spanning 45 regions and 17 topics.
- **Use note:** reinforces cultural-context issue.

## G7. LogicBench: Towards Systematic Evaluation of Logical Reasoning Ability of Large Language Models

- **Authors:** Mihir Parmar et al.
- **Venue:** ACL 2024
- **URL:** https://aclanthology.org/2024.acl-long.739/
- **Supports:** systematic variation in logical-reasoning performance across inference patterns.
- **Use note:** reasoning is adjacent to but distinct from common sense.

## G8. Bias Mitigation or Cultural Commonsense? Evaluating LLMs with a Japanese Dataset

- **Authors:** Taisei Yamamoto et al.
- **Venue:** EMNLP 2025
- **URL:** https://aclanthology.org/2025.emnlp-main.874/
- **Supports:** example of tension/trade-off between some bias-mitigation behaviour and culture-specific common-sense judgments.
- **Use note:** additional finding; likely too detailed for main Chapter 4 prose.

---

# H. Training-data dependency

## H1. Documenting Large Webtext Corpora: A Case Study on the Colossal Clean Crawled Corpus

- **Authors:** Jesse Dodge, Maarten Sap, Ana Marasović, William Agnew, Gabriel Ilharco, Dirk Groeneveld, Margaret Mitchell, Matt Gardner
- **Venue:** EMNLP 2021
- **URL:** https://aclanthology.org/2021.emnlp-main.98/
- **DOI:** https://doi.org/10.18653/v1/2021.emnlp-main.98
- **Supports:** web-corpus composition, unexpected sources, machine-generated text, benchmark overlap/contamination, filtering effects affecting minority-associated text.
- **Use note:** one historical corpus. Do not claim every modern proprietary training set has identical composition.

---

# I. Real-world cases

## I1. Mata v. Avianca, Inc., Opinion and Order on Sanctions

- **Court:** U.S. District Court, Southern District of New York
- **Judge:** P. Kevin Castel
- **Date:** 22 June 2023
- **URL:** https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1%3A2022cv01461/575368/54/
- **Supports:** fabricated judicial authorities/quotations/citations generated with ChatGPT; verification duty; $5,000 penalty and remedial orders.
- **Use note:** strong concrete hallucinated-citation case. Do not imply the court banned AI-assisted legal work.

## I2. Moffatt v. Air Canada, 2024 BCCRT 149

- **Tribunal:** British Columbia Civil Resolution Tribunal
- **Date:** 14 February 2024
- **URL:** https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html
- **Supports:** organisation held responsible for inaccurate information presented through website chatbot.
- **Critical caveat:** technical architecture was not established in the decision; not a proven generative-LLM hallucination case.

## I3. Whose Responsibility Is It Anyway? Chatbots and Legal Issues in Moffatt v Air Canada

- **Organisation:** Lenczner Slaght
- **URL:** https://litigate.com/whose-responsibility-is-it-anyway-chatbots-and-legal-issues-in-moffatt-v-air-canada
- **Supports:** legal commentary explicitly cautioning that evidence did not establish how Air Canada's chatbot worked.
- **Use note:** secondary commentary used to prevent overclaiming about the technology.

---

# J. Sycophancy

## J1. Towards understanding sycophancy in language models

- **Organisation:** Anthropic
- **Date:** 23 October 2023
- **URL:** https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models
- **Supports:** assistants matching user beliefs; preference data can reward sycophantic responses; five then-SOTA assistants studied.
- **Use note:** additional failure mode related to “agreement is not verification.”

## J2. Sycophancy in GPT-4o: what happened and what we’re doing about it

- **Organisation:** OpenAI
- **Date:** 29 April 2025
- **URL:** https://openai.com/index/sycophancy-in-gpt-4o/
- **Supports:** real product-update rollback after excessive agreeableness/flattery.
- **Use note:** useful concrete product example; retain date/model name.

---

# Source-use rules for the chapter writer

1. **Vendor benchmarks:** use to document the vendor's stated results/methodology, not as independent universal truth.
2. **Historical benchmarks:** preserve date/model context; never convert old accuracy figures into current hallucination/error rates.
3. **Philosophical claims:** attribute positions to authors and define terms; do not present contested definitions as settled experimental facts.
4. **Current product docs:** date-stamp model names, cutoffs and features because they change quickly.
5. **Court/tribunal decisions:** distinguish actual findings from popular retellings.
6. **Preprints:** identify as preprints/position papers where material to credibility.
7. **Search/tool claims:** distinguish access to evidence from correctness of interpretation.
8. **Quotes:** verify directly against the primary source before publication; this research package intentionally relies mostly on paraphrase.
9. **Statistics:** retain denominators, benchmark/task context and date.
10. **Demonstrations:** rerun live-model demonstrations close to publication; model behaviour changes.
