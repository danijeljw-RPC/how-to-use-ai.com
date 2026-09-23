# Evidence Matrix — Chapter 3

This matrix is intended for the drafting AI. It distinguishes **what the evidence supports**, **what complicates it**, and **what wording is safe**.

| Capability / idea | Evidence supporting usefulness | Counterpoint / boundary | Safe chapter claim |
|---|---|---|---|
| Writing | Noy & Zhang (Science, 2023): faster completion and higher-rated output on professional writing tasks. Microsoft workplace studies also report time savings. | Specific tasks, tools and populations; not all writing becomes better. | AI is often useful for first drafts, rewriting, tone changes and restructuring. |
| Summarising | LLMs are widely capable of compressing supplied text and following format instructions. | ACL research continues to document factual inconsistency/hallucination in summaries. | AI can summarise quickly, but important summaries should be checked against the source. |
| Brainstorming | Nature Human Behaviour and other studies show gains on some individual creativity measures. | Other studies find reduced diversity/convergence across AI-assisted outputs. | AI can improve idea generation, especially if prompted for diverse alternatives; do not stop at the first suggestions. |
| Image generation | Text-to-image models can generate and edit visual concepts with strong prompt alignment/aesthetics in many cases. | Quality, prompt adherence, fairness and defects remain separate evaluation dimensions. | AI can turn descriptions into visual concepts and variations; the user still selects and evaluates results. |
| Coding | Controlled and field experiments show gains in several coding settings. | METR found experienced maintainers were slower in one realistic early-2025 setting. | AI can be a strong coding assistant, but speed and quality depend on task, context and review cost. |
| Translation | LLMs can produce fluent multilingual translations and handle register/context. | Performance varies by language, resource level and domain; senior humans still outperform in some studies. | AI is useful for everyday and first-draft translation; consequential translation should be reviewed. |
| Tutoring | 2025 RCT found a carefully designed AI tutor improved learning in one university physics setting. | The system was pedagogically engineered; result is not “generic chatbot beats teacher.” | AI can explain, quiz and adapt to follow-up questions; well-designed AI tutoring can be effective. |
| Analysis | HBS/BCG experiment found large benefits on many knowledge-work tasks. | Same research showed failure outside the AI capability frontier. | AI is useful for first-pass analysis and alternatives; human judgement should decide whether the analysis holds. |
| Voice | Speech-recognition research demonstrates robust multilingual transcription; SpeechLM research now integrates speech understanding/generation. | Recognition and synthesis errors still occur, especially with noise, accents, domain terms or ambiguous speech. | AI can transcribe, summarise and interact through voice. |
| Automation / agents | Stanford AI Index 2026 reports rapid improvement in computer-use/agent benchmarks; METR tracks increasing task horizons. | Structured benchmark failure rates remain meaningful; real-world tasks add complications. | AI can increasingly use tools and perform multi-step workflows, but consequential actions need oversight. |
| Probabilistic generation | Language-model literature describes next-token probability distributions; modern LLMs are autoregressive generative systems. | “Most likely answer” is only a simplification; decoding may sample, and probability of fluent continuation is not probability of truth. | AI generates responses piece by piece using learned probabilities; it is not retrieving a guaranteed answer. |
| Confident wrongness | NIST, factuality surveys, OpenAI/Nature hallucination work all document plausible false statements. | Hallucination rates vary and can be reduced by tools, retrieval, verification and improved models. | A polished confident sentence can still be wrong; tone is not evidence. |
| Productivity | Writing, support, coding and knowledge-work studies show real gains in some contexts. | Magnitude varies widely; some tasks show no gains or slowdowns. | AI can reduce effort substantially when it fits the task. |
| Skills equalisation | Several studies find larger gains for less experienced or lower-performing workers. | Not universal; experienced workers may benefit differently or sometimes be slowed. | AI can sometimes give less-experienced users access to patterns or techniques they would otherwise learn more slowly. |
| Critical thinking | AI can externalise alternatives, critiques and explanations. | CHI 2025 survey found higher confidence in AI associated with less self-reported critical thinking. | The best use of AI moves human effort toward checking, choosing and refining rather than eliminating thought. |

## Key studies behind the matrix

1. Noy, S. & Zhang, W. (2023), *Science*: https://doi.org/10.1126/science.adh2586
2. Dell’Acqua et al., Jagged Technological Frontier: https://aiinstitute.hbs.edu/navigating-the-jagged-technological-frontier/
3. Brynjolfsson, Li & Raymond, *Generative AI at Work*: https://www.gsb.stanford.edu/faculty-research/publications/generative-ai-work
4. Microsoft Research, Shifting Work Patterns: https://www.microsoft.com/en-us/research/publication/shifting-work-patterns-with-generative-ai/
5. Peng et al., GitHub Copilot productivity: https://arxiv.org/abs/2302.06590
6. METR developer RCT: https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
7. Kestin et al., AI tutoring RCT: https://www.nature.com/articles/s41598-025-97652-6
8. Lee & Chung, creativity: https://www.nature.com/articles/s41562-024-01953-1
9. Meincke et al., idea diversity: https://www.nature.com/articles/s41562-025-02173-x
10. Stanford AI Index 2026 technical performance: https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance
11. Jurafsky & Martin, *Speech and Language Processing* (2026): https://web.stanford.edu/~jurafsky/slp3/
12. OpenAI, Why language models hallucinate: https://openai.com/index/why-language-models-hallucinate/
13. Kalai et al., *Nature* (2026): https://www.nature.com/articles/s41586-026-10549-w
14. NIST AI 600-1: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
15. Lee et al., CHI 2025 critical-thinking study: https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/
