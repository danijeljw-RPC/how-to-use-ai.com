# 06 — Evaluation Methods, Claim Types, and Benchmarks

## 1. Research question

The current draft uses three questions:

1. Is this a demo, product, or research claim?
2. Who benefits if I believe it?
3. What would change my mind / is it checkable?

Research supports the spirit of the method but suggests two weaknesses:

- the taxonomy omits **forecasts/predictions**, which are central to this chapter and Chapter 14;
- it needs an explicit **trace to original evidence + independent check** move.

This file provides inputs for the later writer. It does **not** prescribe the final wording.

## 2. Lateral reading

Wineburg and McGrew compared professional fact-checkers, PhD historians and Stanford undergraduates evaluating online sources. Professional fact-checkers regularly left the page they were evaluating to inspect external sources and reached more warranted conclusions more quickly. **[Peer-reviewed education/information-literacy research]**  
https://doi.org/10.1177/016146811912101102

### Beginner translation

Do not stare harder at the page making the claim. Open another tab and ask:

- Who is this source?
- What do other credible sources say about it?
- Can I find the original paper/order/demo?

This is one of the strongest research-backed additions to the current method.

## 3. SIFT

SIFT is commonly taught as:

- **Stop**
- **Investigate the source**
- **Find better coverage**
- **Trace claims, quotes and media to the original context**

Accessible teaching source:  
https://umsystem.pressbooks.pub/information/chapter/the-sift-method-evaluating-web-sources/

### Why it fits Chapter 11

SIFT is behaviourally concrete. It avoids long checklists of surface features such as whether a website “looks professional.” It aligns well with AI hype because polished presentation is itself part of the problem.

## 4. CRAAP test — useful mnemonic, but weaker fit for dynamic web claims

CRAAP (Currency, Relevance, Authority, Accuracy, Purpose) is widely used in libraries/education. Its strengths are simplicity and attention to purpose/date. Criticism is that checklist evaluation can keep students inside the source rather than comparing it with the wider information environment.

A recent critique argues for moving toward lateral reading rather than checklist-only evaluation. **[Education scholarship]**  
https://onlinelibrary.wiley.com/doi/10.1002/tl.20608

### Recommendation

Do not introduce CRAAP by name in the chapter unless needed. Borrow only its useful questions about currency and purpose.

## 5. Prebunking / inoculation

Interactive interventions such as the “Bad News” game have shown that brief exposure to common misinformation techniques can reduce perceived reliability of manipulative content. Cambridge researchers reported results from large participant samples indicating improved resistance to common misinformation strategies. **[Research programme / university summary]**  
https://www.cam.ac.uk/research/news/fake-news-vaccine-works-pre-bunk-game-reduces-susceptibility-to-disinformation

### Relevance

Chapter 11 itself can function as prebunking: teach readers the manipulation patterns **before** the next launch, viral statistic or doom headline appears.

That argues for naming patterns clearly and giving two or three worked examples rather than only abstract advice.

## 6. Proposed research-backed claim taxonomy

### A. Demo
A selected presentation of a capability.

Ask:
- live or edited?
- continuous or assembled?
- selected best case or representative?
- what inputs/prompts were used?

### B. Product
A capability offered for ordinary use within a defined scope.

Ask:
- available now?
- to whom/where?
- failure rate?
- service limits?
- cost/latency?
- support/safety?

### C. Research result
A measured finding under a protocol.

Ask:
- peer reviewed or preprint?
- sample/task?
- metric?
- baseline/comparator?
- replication?
- external validity?

### D. Forecast / prediction
A claim about what may happen later.

Ask:
- by when?
- probability or certainty?
- exact event/milestone?
- what would count as wrong?
- base rate/track record?

### E. Advertisement/company announcement
A communication with a commercial/strategic purpose.

Ask:
- what is fact vs aspiration?
- does the announcement link evidence?
- independent test?

### F. Anecdote/testimonial
A single case or experience.

Ask:
- how common?
- selected because it was exceptional?
- alternative explanation?

### Why prediction deserves separate treatment

A benchmark can be reproduced today. “AGI in three years” cannot. It should be assessed by assumptions, resolution conditions and forecast calibration rather than the same evidence standard as a present capability.

## 7. A possible strengthened method — editorial input only

A later writer could condense the research into something like these moves:

1. **Name the claim type.** Demo, product, study, forecast, ad, anecdote?
2. **Trace it.** What is the original source/evidence, not the repost/headline?
3. **Check the measurement.** What exactly was measured, against what, on whom, and under what conditions?
4. **Look sideways.** Has anyone independent tested or interpreted it?
5. **Check incentives without mind-reading.** Who benefits or has a conflict—and therefore deserves extra verification?
6. **For predictions, pin it down.** By when, with what observable milestone, and how much uncertainty?
7. **Ask what would lower your confidence.** Is the claim specific enough to be wrong?

The final chapter probably needs fewer words/moves. The important research conclusion is that **trace + measurement + independent check + prediction handling** are the missing functions.

## 8. Falsifiability for ordinary readers

“What would change my mind?” is valuable but can sound philosophical.

More concrete versions:

- “What would I expect to see if this were true?”
- “When should this have happened by?”
- “What result would make the claim look weaker?”
- “Could the person making the claim ever admit it was wrong, or can the date/definition keep moving?”

For consumer claims, falsifiability can be as simple as:

> “The seller says it completes this task autonomously. Can an independent reviewer repeatedly run the task and count failures?”

## 9. “Who benefits?” and motivated scepticism

### Problem

If used naively, “who benefits?” can become:

- “company profits, therefore false”;
- “researcher studies safety, therefore fearmonger”;
- “critic sells a book, therefore criticism false.”

That is genetic/motive reasoning, not evidence evaluation.

### Better function

Use incentive information to set **verification effort**, not the answer.

Potential wording for later consideration:

> “Who has a stake in this claim, and what should I verify because of that?”

That preserves scepticism while avoiding blanket cynicism.

## 10. Benchmarks: beginner definition

A benchmark is a standardised test or dataset used to compare systems on a defined task.

Analogy: a benchmark is closer to an exam than a complete job performance review.

Good benchmarks can answer narrow questions reliably. Problems arise when the audience silently turns the answer into a much larger claim.

## 11. Benchmark saturation

As models improve, older benchmarks may become too easy. Scores bunch near the top, making small differences unstable or meaningless. Developers then create harder benchmarks.

Stanford AI Index 2026 discusses rapid saturation and limitations in current evaluations. **[Research synthesis]**  
https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance

### Teaching point

“99% on benchmark X” might mean:

- genuinely excellent performance;
- the test no longer distinguishes top systems;
- the model saw similar data during training;
- the metric misses important failure types.

The score alone cannot tell the reader which.

## 12. Benchmark contamination

Contamination occurs when evaluation questions or close variants appear in training/tuning data, making the test less independent.

A 2024 survey reviews contamination definitions, detection methods and evidence across LLM evaluation. **[Academic survey/preprint]**  
https://arxiv.org/abs/2406.04244

### Beginner analogy

If a student has seen the exam questions beforehand, the score may still show they can answer those questions, but it is weaker evidence of general ability.

### Caveat

Modern training corpora are enormous and opaque, so contamination is often difficult to prove or exclude.

## 13. Leaderboards and selective testing

“The Leaderboard Illusion” critiques Chatbot Arena-style public ranking, including concerns about asymmetric access to private testing, selective model submissions/disclosure, data reuse and the meaning of small rank differences. The work appeared in the NeurIPS 2025 Datasets and Benchmarks track after circulating earlier. **[Peer-reviewed conference critique]**  
https://arxiv.org/abs/2504.20879

### Limitation

The paper itself participates in a competitive ecosystem and has authors with organisational affiliations/interests. Use it as a documented critique, not a final verdict on all leaderboards.

### General lesson

A leaderboard rank is an output of:

- user population;
- question mix;
- voting protocol;
- statistical model;
- model versions;
- sampling period;
- inclusion rules.

“#1” can be less stable than marketing copy suggests.

## 14. “AI beats humans” — comparator choice matters

### Bar exam

OpenAI/GPT-4 coverage widely repeated a “90th percentile” bar-exam result. Eric Martínez re-examined the comparison and found the percentile depended substantially on which examinees and score distributions were used; reasonable alternatives produced materially lower percentiles. **[Peer-reviewed legal/AI analysis]**  
https://link.springer.com/article/10.1007/s10506-024-09396-9

### What this teaches

Whenever a claim says “better than X% of humans,” ask:

- Which humans?
- On what exact test?
- First-time takers, repeaters, professionals, students, crowd workers?
- Was the model allowed tools/time humans were not?
- Were questions public and potentially in training data?
- Does the test predict the real-world role?

## 15. Exam performance ≠ job performance

Passing a medical/legal/software exam can establish useful knowledge/reasoning capability. A job also involves:

- gathering ambiguous information;
- responsibility/accountability;
- interacting with people;
- longitudinal context;
- ethics/professional rules;
- physical action in some roles;
- knowing when evidence is missing;
- adapting under novel consequences.

The book should not dismiss benchmark success; it should **bound the inference**.

## 16. Preprint vs peer review

### Preprint

A research manuscript shared before formal journal/conference peer review. Advantages: fast dissemination, important in fast-moving AI. Limitations: methods/conclusions may change and have not passed the venue's review process.

### Peer reviewed

Other experts have evaluated the paper against venue standards. Advantages: additional scrutiny. Limitations: does not guarantee correctness, replication or generality.

### Press release

Communication designed to explain/promote a finding. Useful for accessibility and institutional quotes; should not replace the paper for technical claims.

### Chapter wording rule

Avoid “not peer reviewed, therefore unreliable.” Prefer “preliminary; has not yet had that layer of review.”

## 17. Reliability dimensions the chapter can teach

| Dimension | Question |
| --- | --- |
| Accuracy | Is the output correct? |
| Robustness | Does it still work when inputs vary? |
| Repeatability | Can it do it consistently? |
| Coverage | How much of the real task does it handle? |
| Latency | Is it fast enough for practical use? |
| Cost | Is it economical at scale? |
| Human labour | What supervision/review is still required? |
| Safety | What happens when it fails? |
| Availability | Can ordinary users access it now? |
| Independence | Has anyone outside the maker verified it? |

A demo normally answers only a subset.

## 18. Worked example skeleton — “95% of AI projects fail”

For the eventual chapter/website:

**Headline claim:** “95% of AI projects fail.”  
**Claim type:** summary of preliminary business research.  
**Trace:** locate report.  
**Measure:** business/P&L/scaling outcomes, not universal technical failure.  
**Sample:** public initiatives + interviews + conference survey respondents.  
**Independent comparison:** McKinsey surveys, RCTs, company results.  
**Conclusion:** interesting evidence of enterprise implementation difficulty; slogan is much broader than source.

## 19. Worked example skeleton — “AI is top 10% of lawyers”

**Claim type:** benchmark/exam performance.  
**Trace:** technical report + bar score conversion.  
**Comparator:** examinee population matters.  
**Independent critique:** Martínez.  
**Conclusion:** strong exam capability; percentile headline unstable; passing an exam does not establish full professional competence.

## 20. Worked example skeleton — future AGI prediction

**Claim:** “AGI within five years.”  
**Claim type:** forecast.  
**Trace:** exact speaker/source.  
**Definition:** what counts as AGI?  
**Resolution:** what measurable event by what date?  
**Evidence:** capability trends/assumptions.  
**Independent comparison:** expert survey distributions, other forecasts.  
**Conclusion:** record as a forecast, not a fact about current AI.

## 21. Best practices for Chapter 14 reuse

Chapter 14 forecasts should be presented in a format that Chapter 11 itself recommends:

- identify them explicitly as forecasts/scenarios;
- give dates where possible;
- separate current capability from extrapolation;
- state the evidence/assumption;
- include meaningful uncertainty;
- avoid undefined “soon”;
- revisit/update on companion website.

This self-application would materially strengthen the book's credibility.
