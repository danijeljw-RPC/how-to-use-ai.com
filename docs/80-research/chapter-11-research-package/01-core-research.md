# 01 — Core Research Mapped to the Chapter 11 Plan

## 1. Testing the central framing

### “AI is transformative” — what the evidence can support

The statement can be supported if the book is precise about **what is being transformed** and avoids treating current adoption as proof of every future prediction.

Current evidence supports several narrower propositions:

- AI use has diffused rapidly through organisations and consumer products. The Stanford AI Index 2026 reports that 88% of surveyed organisations use AI in at least one business function and 70% use generative AI in at least one function. It also reports very rapid consumer adoption of generative AI. These are survey/synthesis measures, not direct proof of organisation-wide productivity. **[Research synthesis; recheck before publication]**  
  Source: Stanford HAI, *AI Index Report 2026 — Economy*.  
  https://hai.stanford.edu/ai-index/2026-ai-index-report/economy
- Large amounts of capital are being invested in AI infrastructure and companies. This demonstrates economic commitment and expectations, not necessarily future returns.  
  Source: Stanford HAI, same chapter.
- Specific scientific and engineering systems have produced results that are independently important: AlphaFold in protein-structure prediction, GraphCast in weather forecasting, and AI-assisted materials discovery. These are not evidence that AI “solves science,” but they are evidence that blanket dismissal is also inaccurate.  
  Sources are detailed in `03-utopian-claims-and-genuine-benefits.md`.
- Controlled workplace studies have measured substantial gains on some tasks and populations, while other controlled studies find little effect or even slowdown. This heterogeneity itself supports the chapter's calibration message.  
  See `07-three-audiences-and-analogies.md`.

**Editorial implication:** retain the framing but define “transformative” through examples such as “already changing how some work, research, and services are done.” Avoid using the word as a free-standing prediction that every sector will be revolutionised on a short timetable.

### “Marketing is often exaggerated” — stronger evidence than anecdotes

There is direct regulatory evidence that some firms have overstated AI use or capability:

- The US Securities and Exchange Commission charged two investment advisers in 2024 with making false and misleading statements about their purported use of AI. The firms settled without admitting or denying the findings and paid civil penalties totalling $400,000. **[Regulator]**  
  https://www.sec.gov/newsroom/press-releases/2024-36
- The US Federal Trade Commission's 2024 “Operation AI Comply” targeted deceptive claims involving an “AI lawyer,” AI-generated reviews, and AI-based money-making schemes. **[Regulator]**  
  https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes
- Australia's 2025 review of AI and Australian Consumer Law concluded that existing consumer-law principles generally apply to AI products and services; the relevance to Chapter 11 is that “AI” does not exempt a seller from ordinary rules against misleading or deceptive conduct. **[Government review]**  
  https://treasury.gov.au/publication/p2025-702329

There is also direct evidence that demos and launches can create a stronger impression than the underlying interaction supports. Google's 2023 “Gemini hands-on” video is particularly useful because a Google developer post describes the actual prompting as still-image frames plus text prompts, while the polished video created an impression of fluid real-time multimodal interaction. The capability itself was real; the presentation changed what a viewer could reasonably infer about latency and mode of interaction.  
Primary technical explanation: https://developers.googleblog.com/how-its-made-interacting-with-gemini-through-multimodal-prompting/  
Independent reporting: https://techcrunch.com/2023/12/07/googles-best-gemini-demo-was-faked/

**Editorial implication:** the chapter can demonstrate exaggeration without asserting that “AI companies lie.” The safer and more useful formulation is that **commercial incentives systematically reward presenting the most impressive interpretation of a result**, so readers should inspect the evidence and operating conditions.

## 2. Common hype mechanisms

The approved plan names categories (doom, utopia, startup hype, fake demos, investor marketing). Research suggests adding a second layer: **mechanisms** by which a claim becomes exaggerated.

### Mechanism A — Extrapolating beyond the measured task

Examples:
- high score on a bar exam becomes “AI is better than lawyers”;
- strong diagnostic benchmark becomes “AI replaces doctors”;
- code benchmark becomes “AI can build production software autonomously.”

The inference may eventually prove directionally useful, but the benchmark alone does not establish the larger claim.

### Mechanism B — Controlled capability becomes ordinary reliability

A demonstration can establish that something is possible under selected conditions. A product claim adds questions about failure rate, latency, cost, edge cases, support, safety, and the declared operating envelope.

### Mechanism C — Forecast becomes present-tense fact

“Could reach AGI by X,” “may automate Y,” and “might cure diseases in a decade” are forecasts. Headlines and social posts frequently strip probabilistic language and conditional assumptions.

### Mechanism D — Denominator or success criterion changes

The 2025 Project NANDA/“95% fail” coverage is the clearest research example. A preliminary report about measurable business impact and pilot-to-production dynamics became a universal slogan about “AI projects failing.” Before accepting any percentage, ask:

- 95% of **what**?
- selected how?
- measured at what stage?
- “failed” by what definition?
- over what period?

### Mechanism E — Humanlike interface becomes humanlike mind

Conversational fluency, voices, names, avatars, memory, and first-person language make systems easy to anthropomorphise. This affects both hype (“it understands me”) and fear (“it wants X”). See `07-three-audiences-and-analogies.md`.

### Mechanism F — Label inflation / AI washing

A business can increase perceived novelty by labelling conventional automation, analytics, rules, or outsourced human work as “AI,” or by describing a limited AI component as if it drives the whole offering. Regulators now use “AI washing” for some misleading investment/marketing claims.

## 3. Hype categories required by the plan

### AGI panic

**Beginner definition:** treating an uncertain future concept—AGI—as if there were one agreed definition, one agreed timeline, or an established countdown.

Important nuance:
- AGI has no universally accepted operational definition.
- Organisations use different definitions; some focus on economic performance, others breadth/generality or autonomy.
- Forecasts by AI researchers vary substantially.
- Long-term/catastrophic-risk research is not equivalent to an unsupported claim that disaster is imminent.

Core sources: DeepMind/PMLR levels framework; OpenAI Charter definition; Grace et al. survey; International AI Safety Report 2026. See `02-doom-agi-and-long-term-risk.md`.

### Doom claims

The strongest editorial boundary is **not** “doom is false.” It is:

> A concrete argument about severe risk, with assumptions and evidence that can be examined, belongs to serious risk analysis. A vague declaration of inevitable near-term catastrophe is a different kind of claim.

The 2026 International AI Safety Report is useful precisely because it documents both capability progress and substantial uncertainty. It says some emerging harms are already materialising while other potentially severe risks depend on future developments and incomplete evidence.

### Utopian claims

AI is producing genuine value in bounded scientific and engineering tasks. Hype appears when a technical milestone is silently promoted to a social outcome:

- protein structure prediction → “disease is solved”;
- weather prediction improvement → “climate change is solved”;
- materials prediction → “energy transition is solved”;
- tutoring benchmark → “education is solved.”

The missing links are often validation, institutions, incentives, regulation, manufacturing, logistics, behaviour, distribution, politics, and cost.

### Startup hype

Common patterns:
- product not matching launch demo;
- human labour hidden behind an “autonomous” narrative;
- feature set far narrower than brand promise;
- projections treated as actual revenue/capability;
- technical novelty overstated.

Important caution: claims that a product used human review do **not** automatically prove it was “fake AI.” The Amazon Just Walk Out case is a useful example of how critics can overcompress a human-in-the-loop system into the slogan “it was humans all along.” See `04-commercial-hype-demos-and-ai-washing.md`.

### Fake, staged or misleading demos

Use more precise language than “fake” whenever possible. There are several distinct possibilities:

1. the output was fabricated;
2. the system really produced the output, but many failed attempts were omitted;
3. latency was edited out;
4. prompts/inputs were different from what the viewer inferred;
5. a future capability was shown as a simulated prototype;
6. a human operator performed hidden steps;
7. a narrow operating environment was not disclosed clearly.

The ethics and evidential meaning differ in each case.

### Investor marketing

The strongest research base is regulator action rather than speculation about motives. The SEC cases show that claims about using AI can be material enough to attract securities enforcement when statements are false/misleading. Investment scale itself should not be treated as evidence of a “bubble” or its absence.

## 4. Demo vs product vs research claim — expanded taxonomy

The plan's three-way distinction is useful, but research suggests a beginner can benefit from six types:

| Claim type | What it can legitimately establish | What it does **not** automatically establish |
| --- | --- | --- |
| Demo | A capability can occur under shown/selected conditions | Reliability, frequency, cost, normal user experience |
| Product claim | What a seller says is available/usable | Independent reliability or value |
| Research result | A measured result under a protocol | General real-world usefulness or job competence |
| Forecast/prediction | A reasoned expectation about the future | That the outcome has occurred or is inevitable |
| Advertisement/announcement | What a party wants audiences to believe/know | Neutral evidence |
| Anecdote | Something happened in one case | Typical frequency or causal explanation |

This is an editorial possibility, not a requirement. The strongest argument for adding **forecast** is that Chapter 14 explicitly reuses Chapter 11's method.

## 5. Reliability ladder: possible, reliable, available, affordable, safe to depend on

A second distinction may be even more useful than “demo/product/research” for practical readers:

1. **Possible:** the system has done it at least once.
2. **Repeatable:** it can do it again under similar conditions.
3. **Reliable:** the failure rate is low enough for the intended task.
4. **Available:** ordinary users can actually access the capability.
5. **Affordable:** cost/latency/infrastructure make it practical.
6. **Safe to depend on:** failures and misuse are tolerable or effectively controlled for the context.

Different applications require different thresholds. A brainstorming assistant may be useful while wrong 10% of the time; a safety-critical controller may be unacceptable at far lower error rates.

## 6. Why the current self-driving example should change

The draft contrasts a sunny, pre-mapped demo with a product that must handle “every road, in every city, in the rain.” That is too absolute in 2026.

Waymo reported on 1 September 2026 that it was providing fully autonomous public rides in 14 US cities, and later September company materials described operation across 15 major cities. These are company claims and should not be treated as independent safety validation, but they establish that fully driverless ride-hailing is a real commercial service rather than merely a demo.  
Sources:  
https://waymo.com/blog/2026/09/ride-in-denver-san-diego-tampa/  
https://waymo.com/blog/

A better teaching point is **operational design domain / scope**:

> A genuine product may work reliably for ordinary users inside a declared envelope—particular cities, service areas, road types, weather, vehicle platforms, regulations—without being a universal solution.

This is a stronger lesson because it generalises beyond vehicles.

## 7. Benchmarks and “AI beats humans”

A benchmark is a **measurement protocol**, not an all-purpose ability meter.

Important sources of mismatch:
- test data may leak into training data;
- benchmarks become saturated and stop separating systems well;
- benchmark questions may be flawed or invalid;
- model developers optimise directly for popular benchmarks;
- scoring can hide variability and failure modes;
- a human comparison group may be selected differently from how headlines imply;
- exam success may test knowledge/format rather than full professional competence.

The bar-exam example is particularly strong. Eric Martínez's reevaluation of GPT-4's reported percentile showed that the famous “90th percentile” framing depended heavily on the comparator and score-conversion assumptions. The useful lesson is not “GPT-4 did badly”; it is **ask exactly which population and metric generated the percentile**.  
Source: Martínez, *Artificial Intelligence and Law*.  
https://link.springer.com/article/10.1007/s10506-024-09396-9

## 8. “Who benefits?” — useful but dangerous

The current method asks who benefits if the reader believes a claim. This can expose incentives, but it can also create a motive fallacy:

- a company can benefit from a true claim;
- a critic can gain attention, influence, funding or status from an alarming anti-company claim;
- a regulator can have institutional incentives while still being factually correct;
- a researcher can care deeply about a risk and also be professionally rewarded for studying it.

**Research-backed adjustment for later editorial consideration:**

> “What incentives or conflicts mean I should check this claim more carefully?”

That wording preserves scrutiny without making motive evidence of falsity.

## 9. Independent checking and lateral reading

Professional fact-checkers do not spend all their time inspecting the source's own page. They leave it to see what credible external sources say about the organisation and claim. Wineburg and McGrew's work on **lateral reading** found professional fact-checkers reached more warranted conclusions faster than historians and students in web-source evaluation tasks.  
Source: https://doi.org/10.1177/016146811912101102

SIFT packages similar behaviour into four moves: Stop; Investigate the source; Find better coverage; Trace claims/media to the original context.  
Accessible explainer: https://umsystem.pressbooks.pub/information/chapter/the-sift-method-evaluating-web-sources/

This evidence supports strengthening the chapter's evaluation method with an explicit **original source + independent check** step.

## 10. Hype-scepticism vs risk-denial

Three errors should be kept visibly separate:

1. **Gullibility:** treating a confident claim as established because it is impressive, frightening, or prestigious.
2. **Motivated scepticism:** demanding impossible proof only for claims one dislikes while accepting preferred claims casually.
3. **Blanket cynicism:** assuming all claims are marketing, all experts are captured, or all institutions are lying.

Calibration means changing confidence as evidence quality changes. The same reader can rationally believe:

- frontier AI capabilities are improving rapidly;
- some severe future risks remain highly uncertain;
- current systems still fail at basic tasks;
- some companies overstate capabilities;
- some critics overstate failure statistics;
- some AI applications are already genuinely useful.

Those claims are compatible.

## 11. What to keep out of Chapter 11

### Better left mostly to Chapter 9
- detailed scam taxonomy;
- privacy, environmental impact, bias, misinformation harms;
- operational safety guidance.

### Better left mostly to Chapter 10
- net employment forecasts;
- occupational exposure methodology;
- wage and job-transition evidence.

### Better left mostly to Chapter 12
- skill-building programme;
- detailed personal upskilling advice.

### Better left mostly to Chapter 14
- agents/robotics capability roadmap;
- detailed future scenarios.

Chapter 11 should teach the **evaluation tool** that readers can carry into those topics.
