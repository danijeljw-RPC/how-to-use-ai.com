# Annotated Source Catalogue

Research date: **23 September 2026**

The catalogue intentionally mixes peer-reviewed research, major institutional reports, technical surveys, standards/guidance and a small number of influential research preprints. Use the **source type** notes when deciding whether to cite something in the published book.

---

## A. Broad capability and current-state sources

### 1. Stanford HAI — 2026 AI Index: Technical Performance

URL: https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance

**Type:** Major annual research synthesis / benchmark report.

**Useful for:** Current state of model performance across language, coding, multimodal reasoning, video, robotics and agents; strong examples of “jagged” capability.

**Key use in Chapter 3:** Supports the claim that modern AI capability is broad but uneven. The 2026 report gives examples of very strong advanced reasoning alongside continuing weakness on some apparently simpler tasks.

**Caveat:** Benchmark results do not automatically translate to real-world workflow performance.

---

### 2. Stanford HAI — 2026 AI Index: Economy

URL: https://hai.stanford.edu/ai-index/2026-ai-index-report/economy

**Type:** Major annual research synthesis.

**Useful for:** Adoption, workplace use, productivity literature overview.

**Key use:** Background/context for the website and introduction.

**Caveat:** Adoption percentages date quickly. Prefer these on the website rather than building the printed chapter around them.

---

### 3. Stanford HAI — 2026 AI Index: Education

URL: https://hai.stanford.edu/ai-index/2026-ai-index-report/education

**Type:** Major annual research synthesis.

**Useful for:** Current educational adoption and AI-literacy context.

---

### 4. Stanford CRFM — On the Opportunities and Risks of Foundation Models

URL: https://crfm.stanford.edu/report

**Type:** Multi-author academic report.

**Useful for:** Foundation-model framing, broad capability/risk taxonomy, terminology.

**Caveat:** 2021 predates the current generation of consumer systems, so use mainly for conceptual foundations.

---

## B. How language models generate

### 5. Jurafsky & Martin — Speech and Language Processing, 3rd edition online manuscript (2026)

URL: https://web.stanford.edu/~jurafsky/slp3/

**Type:** University textbook / continuously updated academic manuscript.

**Useful for:** Language models as probability distributions over possible next tokens; transformers, pretraining, retrieval, translation and speech.

**Why it is excellent for this book:** Authoritative but teachable. It supports a technically correct plain-English explanation.

**Recommended citation role:** Primary conceptual source for “probabilistic output.”

---

### 6. Vaswani et al. (2017) — Attention Is All You Need

URL: https://arxiv.org/abs/1706.03762

**Type:** Foundational research paper.

**Useful for:** Transformer architecture.

**Caveat:** Do not make the beginner chapter explain attention architecture unless needed.

---

## C. Hallucination, factuality and confidence

### 7. OpenAI (2025) — Why language models hallucinate

URL: https://openai.com/index/why-language-models-hallucinate/

**Type:** Industry research explanation linked to a technical paper.

**Useful for:** Accessible explanation of why next-token pretraining and accuracy-driven evaluation can produce confident guesses.

**Good chapter use:** A source for the analogy that systems can be rewarded for guessing rather than abstaining.

**Caveat:** Industry-authored; corroborate with the peer-reviewed Nature paper below.

---

### 8. Kalai et al. (2026), Nature — Evaluating large language models for accuracy incentivizes hallucinations

URL: https://www.nature.com/articles/s41586-026-10549-w

**Type:** Peer-reviewed research article.

**Useful for:** Statistical account of why hallucinations arise/persist; relationship between evaluation incentives and confident guessing.

**Recommended citation role:** Strong source for the “confident but wrong” section.

---

### 9. NIST AI 600-1 — Generative AI Profile

URL: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence

DOI: https://doi.org/10.6028/NIST.AI.600-1

**Type:** U.S. standards/government technical guidance.

**Useful for:** Trustworthiness language, confabulation, risks and mitigations.

**Recommended citation role:** Authoritative terminology and risk framing.

---

### 10. Wang et al. (2024) — Factuality of Large Language Models: A Survey

URL: https://arxiv.org/abs/2402.02420

**Type:** Research survey / preprint.

**Useful for:** Broad factuality literature, causes, evaluation and mitigation.

---

### 11. Huang et al. (2023) — A Survey on Hallucination in Large Language Models

URL: https://arxiv.org/abs/2311.05232

**Type:** Research survey / preprint.

**Useful for:** Hallucination taxonomy, detection, mitigation, research gaps.

---

## D. Writing and knowledge work

### 12. Noy & Zhang (2023), Science — Experimental evidence on the productivity effects of generative artificial intelligence

URL: https://doi.org/10.1126/science.adh2586

**Type:** Peer-reviewed randomized experiment.

**Participants/context:** College-educated professionals performing incentivised mid-level writing tasks.

**Key result:** In this experimental setting, AI access reduced average task time by 40% and increased assessed output quality by 18%.

**Useful for:** Strong empirical evidence that generative AI can improve writing productivity.

**Caveat:** Do not generalise percentages to all work.

---

### 13. Dell’Acqua et al. — Navigating the Jagged Technological Frontier

Overview: https://aiinstitute.hbs.edu/navigating-the-jagged-technological-frontier/

Published-paper PDF: https://www.hbs.edu/ris/Publication%20Files/dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier_5c589c8c-fbb5-458f-b285-c944746cd717.pdf

**Type:** Large field experiment; formally published in Organization Science in 2026 after earlier working-paper circulation.

**Participants/context:** Hundreds of BCG consultants completing realistic knowledge-work tasks.

**Useful for:** The “jagged frontier”; productivity and quality gains inside the frontier; risk of worse performance on tasks outside it.

**Recommended citation role:** One of the core sources for Chapter 3.

---

### 14. Brynjolfsson, Li & Raymond (2025), Quarterly Journal of Economics — Generative AI at Work

URL: https://www.gsb.stanford.edu/faculty-research/publications/generative-ai-work

Earlier NBER version: https://www.nber.org/papers/w31161

**Type:** Peer-reviewed workplace study.

**Context:** Thousands of customer-support agents.

**Useful for:** Real-world productivity gains; larger benefits for less experienced workers; possible transfer of organisational best practices.

**Caveat:** Customer support is a specific structured environment.

---

### 15. Microsoft Research (2025) — Shifting Work Patterns with Generative AI

URL: https://www.microsoft.com/en-us/research/publication/shifting-work-patterns-with-generative-ai/

**Type:** Large cross-industry randomized field experiment.

**Context:** Around 6,000 workers.

**Useful for:** Effects on email/document workflows and how AI changes work patterns.

**Caveat:** Product-integrated environment; not a universal measure of AI productivity.

---

### 16. Microsoft Research (2024) — Generative AI in Real-World Workplaces

URL: https://www.microsoft.com/en-us/research/publication/generative-ai-in-real-world-workplaces/

**Type:** Research synthesis covering workplace studies.

**Useful for:** Cross-study productivity patterns and heterogeneity by role/workflow.

---

## E. Coding

### 17. Peng et al. (2023) — The Impact of AI on Developer Productivity: Evidence from GitHub Copilot

URL: https://arxiv.org/abs/2302.06590

**Type:** Controlled experiment / preprint.

**Key result:** Treatment group completed the assigned JavaScript HTTP-server task substantially faster.

**Useful for:** Positive coding-assistance evidence.

**Caveat:** Narrow task and specific tool version.

---

### 18. Cui et al. / Microsoft Research (2025) — Effects of Generative AI on High-Skilled Work

URL: https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/

**Type:** Multiple randomized field experiments / preprint.

**Context:** Microsoft, Accenture and a Fortune 100 company; thousands of developers.

**Useful for:** More realistic large-scale coding productivity evidence.

---

### 19. Paradis et al. — How much does AI impact development speed?

URL: https://arxiv.org/abs/2410.12944

**Type:** Enterprise randomized controlled trial / preprint.

**Context:** Full-time Google software engineers.

**Useful for:** Positive coding time-saving evidence plus good caveats about generalisation.

---

### 20. METR (2025) — Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity

URL: https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

Paper: https://arxiv.org/abs/2507.09089

**Type:** Randomized controlled trial.

**Context:** 16 experienced developers completing 246 tasks in mature open-source repositories they knew well.

**Key result:** AI availability increased completion time by 19% in this setting.

**Useful for:** Excellent counterexample to simplistic “AI makes coders faster” claims.

**Important nuance:** The authors explicitly say the result should not be generalised to all developers or contexts.

---

### 21. METR (2026) — We are Changing our Developer Productivity Experiment Design

URL: https://metr.org/blog/2026-02-24-uplift-update/

**Type:** Methodological update.

**Useful for:** Demonstrates how quickly AI-use behaviour can change and how adoption can complicate controlled research.

---

## F. Brainstorming and creativity

### 22. Lee & Chung (2024), Nature Human Behaviour — An empirical investigation of the impact of ChatGPT on creativity

URL: https://www.nature.com/articles/s41562-024-01953-1

**Type:** Peer-reviewed multi-experiment study.

**Useful for:** Evidence that AI assistance can improve creativity ratings on several ideation tasks.

---

### 23. Meincke, Nave & Terwiesch (2025), Nature Human Behaviour — ChatGPT decreases idea diversity in brainstorming

URL: https://www.nature.com/articles/s41562-025-02173-x

**Type:** Peer-reviewed Matters Arising.

**Useful for:** Counterpoint: improved individual outputs can coincide with reduced collective diversity.

---

### 24. Computers in Human Behavior: Artificial Humans (2026) — Who performs better? Exploring the role of generative AI in creativity and brainstorming

URL: https://www.sciencedirect.com/science/article/pii/S2949882126000538

**Type:** Peer-reviewed experimental study.

**Useful for:** AI assistance improved some quality measures while unaided brainstorming produced more quantity/flexibility.

---

### 25. Computers in Human Behavior: Artificial Humans (2025) — Homogenizing effect of LLMs on creative diversity

URL: https://www.sciencedirect.com/science/article/pii/S294988212500091X

**Type:** Peer-reviewed empirical study.

**Useful for:** Collective convergence / homogenisation concern.

---

### 26. Scientific Reports (2024) — The current state of artificial intelligence generative language models is more creative than humans on divergent thinking tasks

URL: https://www.nature.com/articles/s41598-024-53303-w

**Type:** Peer-reviewed experimental comparison.

**Useful for:** Evidence that models can score highly on divergent-thinking measures.

**Caveat:** Divergent-thinking test performance is not a complete definition of human creativity.

---

## G. Summarisation

### 27. FENICE — ACL 2024

URL: https://aclanthology.org/2024.findings-acl.841/

**Type:** Peer-reviewed conference paper.

**Useful for:** Summarisation factuality evaluation; evidence that factual inconsistency remains an active problem.

---

### 28. ACUEval — ACL 2024

URL: https://aclanthology.org/2024.findings-acl.597/

**Type:** Peer-reviewed conference paper.

**Useful for:** Fine-grained summarisation hallucination evaluation/correction.

---

### 29. FaithBench — NAACL 2025

URL: https://aclanthology.org/2025.naacl-short.38/

**Type:** Peer-reviewed conference paper.

**Useful for:** Modern cross-model benchmark of summarisation hallucinations.

---

### 30. Zhong & Litman — ACL 2025 long-document factual consistency

URL: https://aclanthology.org/2025.findings-acl.648/

**Type:** Peer-reviewed conference paper.

**Useful for:** Long-document summary evaluation and continuing difficulty of fine-grained factual consistency.

---

## H. Tutoring and education

### 31. Kestin et al. (2025), Scientific Reports — AI tutoring outperforms in-class active learning

URL: https://www.nature.com/articles/s41598-025-97652-6

**Type:** Peer-reviewed randomized controlled trial.

**Context:** Harvard undergraduate physics course, N=194.

**Useful for:** Strong evidence that a deliberately designed AI tutor can improve learning efficiency in a specific authentic setting.

**Critical caveat:** The tutor incorporated pedagogical design; this is not evidence that any generic chatbot is automatically an effective teacher.

---

### 32. UNESCO — Guidance for generative AI in education and research

URL: https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research?hub=67098

**Type:** International policy/guidance document.

**Useful for:** Human-centred, age-appropriate, pedagogically intentional framing.

---

## I. Translation

### 33. Yan et al. (2024) — GPT-4 vs. Human Translators

URL: https://arxiv.org/abs/2407.03658

**Type:** Research preprint.

**Useful for:** Human-vs-LLM translation comparison across languages/domains/expertise levels.

**Key nuance:** Performance comparable to junior translators on some measures, but below more experienced translators and uneven across settings.

---

### 34. Zhu et al. (NAACL 2024) — Multilingual Machine Translation with Large Language Models

URL: https://aclanthology.org/2024.findings-naacl.176/

**Type:** Peer-reviewed conference paper.

**Useful for:** Variation across many translation directions and low-resource languages.

---

### 35. WMT 2024 — Investigating the Linguistic Performance of Large Language Models in Machine Translation

URL: https://aclanthology.org/2024.wmt-1.28/

**Type:** Peer-reviewed workshop/conference paper.

**Useful for:** Fine-grained linguistic variation; demonstrates that model ranking depends on language pair and phenomenon.

---

## J. Voice and speech

### 36. Radford et al. (2022) — Robust Speech Recognition via Large-Scale Weak Supervision

URL: https://arxiv.org/abs/2212.04356

**Type:** Research paper.

**Useful for:** Robust multilingual speech recognition and transcription.

---

### 37. OpenAI (2022) — Introducing Whisper

URL: https://openai.com/index/whisper/

**Type:** Product/research overview.

**Useful for:** Accessible description of transcription, language ID, timestamps and speech translation.

---

### 38. Cui et al. (ACL 2025) — Recent Advances in Speech Language Models: A Survey

URL: https://aclanthology.org/2025.acl-long.682/

**Type:** Peer-reviewed survey.

**Useful for:** Modern voice-native AI: systems that understand and generate speech rather than merely bolt transcription onto text models.

---

## K. Image generation and design

### 39. Chen et al. (2024) — Evaluating Text-to-Image Generative Models

URL: https://arxiv.org/abs/2403.05125

**Type:** Research preprint.

**Useful for:** Evaluation dimensions: aesthetics, realism, text-condition coverage, fairness and defects.

---

### 40. ACM DIS 2024 — GenAI for Designers / DesignPrompt

URL: https://dis.acm.org/2024/accepted-papers/

**Type:** Peer-reviewed design/HCI conference papers.

**Useful for:** How professional designers use multimodal prompts and AI for visual ideation.

---

## L. Automation and agents

### 41. Stanford HAI — 2026 AI Index: Technical Performance

URL: https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance

**Useful for:** Current computer-use and agent benchmark results; rapid progress plus meaningful failure rates.

---

### 42. METR — Task-Completion Time Horizons of Frontier AI Models

URL: https://metr.org/time-horizons/

**Type:** Ongoing empirical evaluation programme.

**Useful for:** A practical measure of how long a task frontier agents can complete at specified reliability.

**Caveat:** Primarily software-task oriented; time horizon is an evaluation construct, not a universal autonomy rating.

---

## M. Human cognition and critical thinking

### 43. Lee et al. (CHI 2025) — The Impact of Generative AI on Critical Thinking

URL: https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/

DOI: https://doi.org/10.1145/3706598.3713778

**Type:** Peer-reviewed CHI study based on survey/first-hand work examples.

**Context:** 319 knowledge workers, 936 real-world examples.

**Useful for:** How AI shifts critical thinking toward verification, integration and stewardship; confidence in AI associated with less self-reported critical thinking.

**Caveat:** Self-reported behaviour, not a direct experimental measure of long-term cognitive decline.

---

### 44. Microsoft Research (2025) — Rethinking AI in Knowledge Work: From Assistant to Tool for Thought

URL: https://www.microsoft.com/en-us/research/articles/rethinking-ai-in-knowledge-work-from-assistant-to-tool-for-thought/

**Type:** Research perspective.

**Useful for:** Alternative framing: AI should support thinking, not merely remove cognitive work.

---

## N. Competing interpretations of what LLM capability means

### 45. Bubeck et al. (2023) — Sparks of Artificial General Intelligence

URL: https://arxiv.org/abs/2303.12712

**Type:** Influential research preprint / interpretive position.

**Useful for:** Strong “broad emergent capability” interpretation of an early GPT-4 system.

**Caveat:** The AGI framing is contested and should not be presented as settled fact.

---

### 46. Bender, Gebru, McMillan-Major & Shmitchell (2021) — On the Dangers of Stochastic Parrots

Conference page: https://facctconference.org/2021/acceptedpapers.html

**Type:** Peer-reviewed FAccT paper / critical perspective.

**Useful for:** Counterpoint to anthropomorphic interpretations; statistical pattern generation, data/scale and social-risk concerns.

**Recommended use:** Background for the author/AI writer, not necessarily a major Chapter 3 detour.

---

# Source selection hierarchy for the published chapter

When several sources support the same point, prefer roughly this order:

1. Peer-reviewed controlled/field experiment directly relevant to the claim.
2. Peer-reviewed synthesis or high-quality institutional report.
3. Standards/government/international guidance.
4. Well-documented working paper/preprint.
5. Industry research explanation.
6. Product/company marketing page.

Do not cite a company marketing statement where a peer-reviewed or independent source is available.

# Freshness guidance

**Durable sources:** Jurafsky & Martin; transformer paper; NIST conceptual terms; core peer-reviewed productivity studies.

**Time-sensitive sources:** AI Index benchmark results, adoption rates, current agent performance, model-specific coding results.

Use time-sensitive claims on **HowToUseAI.com** where they can be updated. Keep the book’s core wording model-agnostic and principle-based.
