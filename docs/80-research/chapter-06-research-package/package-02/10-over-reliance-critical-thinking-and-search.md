# Over-Reliance, Critical Thinking and Answer-First Search

## Proportion warning

This research is intentionally deeper than the eventual chapter section should be. Chapter 6 only needs to establish:

- AI can help thinking;
- AI can also become a shortcut around thinking;
- confidence/convenience can reduce verification;
- scrutiny should rise with consequence.

# Automation bias

Automation bias is an established human-factors concept that predates generative AI.

A systematic review by Goddard, Roudsari and Wyatt describes a tendency to over-rely on automated decision support. Earlier literature shows automation can improve overall performance while also introducing new error modes that users fail to catch.

This is useful background because over-reliance is a **human-system interaction problem**, not a moral defect unique to AI users.

# GenAI and critical-thinking effort

## Microsoft Research / CHI 2025

Lee et al. surveyed:
- 319 knowledge workers;
- 936 first-hand examples of GenAI use.

Reported findings include:
- greater confidence in GenAI was associated with lower reported critical-thinking effort;
- greater confidence in one's own ability was associated with more critical thinking;
- critical thinking often shifted toward verification, integration and task stewardship.

### Supported narrow claim

> In some contexts, users who trust AI more may invest less independent effort in evaluating its output.

### Unsupported extrapolations

The study does not establish:
- long-term loss of intelligence;
- neurological change;
- that household consumers become less capable;
- that GenAI universally reduces critical thinking.

It is self-reported and focused on knowledge workers.

# Recommendation versus reasoning support

The CHI 2025 study *AI, Help Me Think—but for Myself* compared:

- **RecommendAI** — recommendation-centric support;
- **ExtendAI** — support built on the participant's own reasoning.

The reasoning-support design integrated better with participants' own thinking and produced slightly better outcomes in that study, while the recommendation-centric system required less effort and provided more novel insights.

This gives Chapter 6 a strong behavioural idea:

> Ask AI to extend your reasoning, not merely replace it with a recommendation.

Example:
- weaker: “Which course should I study?”
- stronger: “Here are my goals and the criteria I think matter. What am I overlooking, and what evidence should I gather before comparing the options?”

# Citations do not automatically solve trust

Li and Aral's 2025 preprint reports a large-scale experiment in which citations/reference links increased trust in generative search even when links/citations were incorrect or hallucinated.

Practical lesson:

> Sources are useful because they make checking possible. Their presence does not prove the answer was checked.

This study should be labelled emerging/preprint evidence.

# Answer-first information

Traditional search commonly presents ranked sources/snippets.

Generative search increasingly presents:
- a synthesised answer first;
- links as supporting material.

The behavioural question is whether that changes how far users continue investigating.

# Pew click-through evidence

Pew Research Center analysed tracked browsing from 900 U.S. adults during March 2025.

For Google searches in the dataset:
- traditional result links were clicked in **8%** of visits where an AI summary appeared;
- result links were clicked in **15%** of visits without an AI summary;
- a link cited in the AI summary was clicked in **1%** of visits containing a summary;
- browsing sessions ended after **26%** of visits with an AI summary versus **16%** without one.

Supported claim:
> In this observational dataset, AI summaries were associated with less click-through to other web pages.

Not supported:
- users learned less;
- nobody verifies facts;
- AI caused general deterioration in research skill.

# Google's contrasting platform claim

Google reported in August 2025 that:
- total organic click volume from Search to websites was relatively stable year-over-year;
- average “click quality”, using Google's definition, had increased;
- slightly more “quality clicks” were being sent to websites.

This does not directly invalidate Pew because the studies measure different things:
- Pew: immediate browsing behaviour in a panel;
- Google: aggregate platform traffic and a proprietary quality metric.

The disagreement is useful evidence that the chapter should avoid absolute claims.

# Reuters Institute

The Reuters Institute's 2025 cross-country report found widespread exposure to AI-generated search answers and varied source-clicking behaviour. It also found verification behaviour depended partly on context/stakes.

This supports:
> people do not all respond to answer-first AI in the same way.

# Everyday over-reliance scenarios

## Travel
User accepts an AI visa requirement without checking the government source.

Better:
AI identifies questions; user verifies live requirements.

## Money
User asks what investment to buy and acts.

Better:
AI explains terminology, comparison criteria and due-diligence questions.

## Learning
User repeatedly requests finished answers.

Better:
hints, quizzes, critique and feedback.

## Agreement
User accepts an AI summary without reading important clauses.

Better:
AI locates/explains; user returns to the original.

# Possible signs worth noticing

Not diagnostic rules:

- user cannot explain why they accepted an answer;
- user no longer opens important sources;
- user routinely asks AI to choose rather than compare;
- user sends text they have not read;
- user stops practising a skill they intended to learn;
- user treats fluent wording as evidence of correctness.

Do not medicalise normal technology use.

## Sources

- Lee et al. (2025), *The Impact of Generative AI on Critical Thinking*, CHI 2025  
  https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/
- Reicherts et al. (2025), *AI, Help Me Think—but for Myself*, CHI 2025  
  https://www.microsoft.com/en-us/research/publication/ai-help-me-think-but-for-myself-assisting-people-in-complex-decision-making-by-providing-different-kinds-of-cognitive-support/
- Goddard, Roudsari & Wyatt, automation-bias systematic review  
  https://pubmed.ncbi.nlm.nih.gov/21685142/
- Parasuraman & Manzey (2010), automation complacency/bias  
  https://pubmed.ncbi.nlm.nih.gov/21077562/
- Pew Research Center (22 July 2025), AI summaries and clicks  
  https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
- Google (6 August 2025), *AI in Search is driving more queries and higher quality clicks*  
  https://blog.google/products-and-platforms/products/search/ai-search-driving-more-queries-higher-quality-clicks/
- Reuters Institute (2025), *Generative AI and news report 2025*  
  https://reutersinstitute.politics.ox.ac.uk/generative-ai-and-news-report-2025-how-people-think-about-ais-role-journalism-and-society
- Li & Aral (2025), *Human Trust in AI Search* [preprint]  
  https://arxiv.org/abs/2504.06435
