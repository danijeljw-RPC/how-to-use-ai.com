# Chapter 9 Research — Copyright, Environmental Costs, and Industry Concentration

Research date: 2026-10-01

This file covers three structurally different risk categories. They are grouped here because each is primarily a **system-level risk/uncertainty** rather than something an ordinary user can solve through better prompting or scepticism.

---

# Part A — Copyright disputes as an unresolved risk

## A1. Chapter 8 boundary

Chapter 8 already covers creative copyright, training data, imitation, digital replicas and creative labour in depth. Chapter 9 should **not replay the full moral/legal debate**.

The useful Chapter 9 question is:

> What does the continuing legal uncertainty mean for an ordinary person or organisation using AI output?

Core points:

- major disputes remain jurisdiction-specific and fact-specific;
- some important cases have produced rulings, some have settled, and others remain active;
- a provider giving a user contractual permission to use output does not necessarily eliminate third-party intellectual-property claims;
- some commercial providers offer indemnities to specified customers, but they have conditions and exclusions;
- Australian policy remains under active development.

All legal material below should be **rechecked immediately before publication**.

---

## A2. Australia — government policy position

The Attorney-General's Department runs the Copyright and Artificial Intelligence Reference Group (CAIRG), a standing stakeholder mechanism.

By late 2025 the government had identified three priority areas:

1. encouraging fair/legal licensing routes for copyright material used in AI;
2. increasing certainty about copyright law and AI-generated material;
3. examining lower-cost enforcement for output-related infringement.

The Attorney-General also announced that the government was **not considering a text-and-data-mining exception** in Australian copyright law at that point.

### Why useful

This prevents the chapter from importing US “fair use” debates directly into Australia. Australian copyright exceptions and policy settings differ.

**Primary source:** Attorney-General's Department, Copyright and Artificial Intelligence Reference Group.  
https://www.ag.gov.au/rights-and-protections/copyright/copyright-and-artificial-intelligence-reference-group-cairg

**Recheck before publication.**

---

## A3. Bartz v Anthropic — settlement must not be overgeneralised

The US class action involving authors and Anthropic reached a settlement that received final court approval on **20 July 2026**.

The settlement website explains that the class relates to copyright owners of books Anthropic downloaded from Library Genesis or Pirate Library Mirror.

### Important distinction

The settlement should **not** be summarised as “a court ruled that training AI on copyrighted books is illegal.” The litigation contained multiple issues and the settlement class was tied to alleged acquisition from specified pirate libraries.

The settlement site's document archive includes the court's fair-use and class-certification orders and is a better starting point than press headlines.

**Primary sources:**

- Settlement status: https://www.anthropiccopyrightsettlement.com/
- Court/settlement documents: https://www.anthropiccopyrightsettlement.com/documents

**Recheck before publication.**

---

## A4. Getty Images v Stability AI — fact-specific UK judgment

The High Court of England and Wales delivered judgment in *Getty Images v Stability AI* on 4 November 2025.

This is important because it produced an actual judgment rather than merely allegations, but its holdings must be described carefully. Jurisdiction, pleaded claims, evidence about where acts occurred, model/output issues and trademark/copyright questions all matter.

### Editorial use

Use it only to demonstrate:

> Courts are beginning to produce concrete rulings, but one case does not settle the legality of AI training globally.

**Primary source:** Courts and Tribunals Judiciary, [2025] EWHC 2863 (Ch).  
https://www.judiciary.uk/judgments/getty-images-v-stability-ai/

**Recheck before publication.**

---

## A5. News, code, music and reference works

The disputes extend well beyond art generators:

- news publishers have sued AI companies over training/reproduction and product output;
- authors/book publishers have brought claims;
- code-related disputes concern training and generated code/licensing;
- music publishers/rightsholders have challenged training and synthetic music services;
- image/stock libraries have litigated;
- reference and research publishers have explored licences and enforcement.

### Editorial recommendation

The chapter needs only one sentence making this breadth clear, followed by “Chapter 8 covered the creative side; here the key point is uncertainty.” Avoid an inventory of lawsuits.

---

## A6. What can an ordinary user safely assume?

### Cannot safely assume

- “The AI company trained the model, so every output is legally safe.”
- “The provider says I own the output, therefore no third party can claim infringement.”
- “AI-generated means copyright-free.”
- “Commercial use is automatically covered by my consumer subscription.”
- “A settlement in another country defines Australian law.”

### Better practical rule

For ordinary low-risk personal use, the legal exposure may be remote. For commercial publication, branding, code, music, high-value creative work or material closely resembling a known source, organisations should use normal IP review appropriate to the stakes.

Do not make this legal advice.

---

## A7. Provider indemnities illustrate the distinction

OpenAI's Service Terms updated 10 September 2026 state that specified API and Enterprise indemnification obligations include certain third-party IP claims involving output, but list multiple exclusions — including circumstances involving known likely infringement, ignored safety/citation features, modified output, inputs the customer had no right to use, some trademark-related claims, and third-party offerings.

### What this demonstrates

A provider may give **contractual protection to a defined customer class under conditions**. That is different from a universal guarantee that output cannot infringe third-party rights.

**Source:** OpenAI Service Terms, updated 10 September 2026.  
https://openai.com/policies/service-terms/

**Recheck before publication.** Provider terms can change at any time.

---

## A8. Copyright misconceptions

| Claim | Better treatment |
| --- | --- |
| “All AI training on copyrighted work is illegal.” | Law differs by jurisdiction, facts and legal theory; litigation and licensing are still developing. |
| “Courts have decided AI training is always fair use.” | Overbroad. US rulings are case-specific, and “fair use” is a US doctrine. |
| “If the provider lets me use output commercially, nobody can sue me.” | Contractual permission from the provider cannot erase independent third-party rights. |
| “AI output is always copyright-free.” | Copyright subsistence/ownership depends on jurisdiction and human authorship/contribution; other rights can also apply. |
| “The legal uncertainty means ordinary people should never use AI.” | Dispute/risk varies hugely by use case; personal brainstorming is not the same risk profile as commercial replication of protected material. |

---

# Part B — Environmental costs

## B1. The environmental question needs multiple units

Avoid reducing “AI's environmental impact” to a single per-prompt number. Relevant layers include:

1. electricity used for model training;
2. electricity used for inference/serving;
3. data-centre cooling;
4. water use on-site and in electricity generation;
5. carbon intensity of the local grid;
6. chip/server manufacturing and embodied emissions;
7. construction and grid infrastructure;
8. electronic waste;
9. local land/noise/water/grid effects;
10. total demand created by rapidly growing adoption.

A short text response and a long agentic/video-generation workload are not equivalent.

---

## B2. Training versus inference

Public discussion historically focused heavily on the large one-off training run. As AI products acquire very large user bases, **inference** — repeatedly running trained models for users — can become a major or dominant operational burden for deployed services.

The exact split is company/model dependent and often not publicly disclosed.

### Beginner analogy

Training is like building/learning the capability; inference is every time the service is actually used. A one-off build can be enormous, but millions or billions of uses add up too.

---

## B3. Global data-centre electricity — IEA evidence

The International Energy Agency's 2025 *Energy and AI* analysis estimated:

- global data centres consumed about **415 TWh** of electricity in 2024;
- roughly **1.5%** of global electricity consumption;
- in its Base Case, data-centre demand reaches about **945 TWh by 2030**, just under 3% of global electricity consumption;
- accelerated servers, driven mainly by AI adoption, account for a large share of projected growth.

### Evidence types

- 2024: modelled/estimated historical electricity use;
- 2030: projection / Base Case scenario.

### Critical caveat

Do not call 415 TWh “AI electricity use.” It is **all data-centre electricity**, including non-AI workloads.

**Source:** International Energy Agency, *Energy and AI — Energy demand from AI*, 2025.  
https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai

---

## B4. Per-text-prompt evidence — useful but narrow

Google published a measurement methodology in August 2025 and reported that the **median Gemini Apps text prompt** in its May 2025 measurement used approximately:

- 0.24 Wh electricity;
- 0.03 g CO2e;
- 0.26 mL water.

### Evidence type

Company operational data using the company's methodology.

### Why it is valuable

It provides one of the rare provider measurements using operational infrastructure rather than a public estimate.

### Why it cannot be universalised

- one company's stack;
- a median text prompt, not video/image generation;
- model mix and routing matter;
- reasoning length matters;
- hardware/utilisation/datacentre location matter;
- measurement methodology and allocation choices matter;
- efficiency changes rapidly.

### Safe chapter use

> A short text prompt on an efficient modern system can use a small amount of energy individually. That does not tell us the total impact of billions of requests or heavier AI workloads.

**Source:** Google, *Measuring the environmental impact of AI inference*, 21 August 2025.  
https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference/

**Company source limitation:** not independent; product-specific.

---

## B5. Independent per-query estimates

Independent researchers continue to estimate inference energy under assumed hardware/model conditions. A 2025 analysis by Oviedo and colleagues estimated a median frontier-model query around 0.34 Wh under its modelling assumptions, with a wide range across workloads/models.

### Evidence type

Academic/preprint estimate, not direct metering of every production service.

**Source:**  
https://arxiv.org/abs/2509.20241

### Editorial implication

Per-query numbers should be treated as **orders of magnitude under stated assumptions**, not constants such as “every ChatGPT question uses X.”

---

## B6. Why text, image, video and agents differ

The amount of computation can vary substantially with:

- model size and architecture;
- number of generated tokens;
- reasoning/“thinking” tokens;
- context length;
- repeated tool calls;
- retries;
- image resolution/steps;
- video duration/resolution;
- agent loops that make many model calls;
- batch size and hardware utilisation.

### Chapter wording

Avoid “one AI query.” That phrase hides enormous workload variation.

---

## B7. Water — avoid the “bottle per conversation” meme

Water accounting can include:

- water consumed directly by cooling systems;
- water withdrawn and returned;
- indirect water associated with electricity generation;
- construction/manufacturing water depending on study boundary.

Local impact depends heavily on climate, cooling design and water stress.

### Better wording

> Data centres can consume water for cooling and indirectly through electricity generation, but a universal “water per prompt” number is misleading because systems, locations, weather, cooling and accounting boundaries differ.

---

## B8. US AI-server scenario study — useful for uncertainty

A 2025 *Nature Sustainability* analysis modelled possible US AI-server expansion and estimated annual water footprints of **731–1,125 million m³** and additional annual emissions of **24–44 Mt CO2e** over 2024–2030 depending on the expansion pathway and assumptions.

### Evidence type

Scenario model / analysis, not observed national consumption.

### Why useful

It demonstrates how strongly results depend on:

- expansion scale;
- grid decarbonisation;
- efficiency improvements;
- geographic placement.

### Why dangerous if misquoted

Those numbers are often liable to become “AI used X water” headlines. The paper models scenarios and explicitly contains deep uncertainty.

**Source:** Tianqi Xiao et al., *Environmental impact and net-zero pathways for sustainable artificial intelligence servers in the USA*, *Nature Sustainability* 8 (2025).  
https://www.nature.com/articles/s41893-025-01681-y

---

## B9. Australia — AEMO data-centre demand

AEMO's 2026 Electricity Statement of Opportunities incorporates updated data-centre demand forecasts for the National Electricity Market (NEM).

AEMO forecasts data-centre electricity consumption in the NEM rising from about:

- **5 TWh in 2025–26**;
- to **34 TWh by 2035–36**;
- increasing from roughly **3% to approximately 13%** of grid-supplied electricity.

### Evidence type

Forecast, not observed 2035 demand.

### Why it matters

This makes the environmental/infrastructure topic tangible for an Australian reader. AI is not the only data-centre workload, but AI growth is an important driver.

**Source:** AEMO, *Reliability can be maintained with timely investment as demand grows — 2026 ESOO*, 2026.  
https://www.aemo.com.au/newsroom/media-release/2026-esoo

**Recheck before publication:** annual forecasts change.

---

## B10. Local effects versus global carbon effects

A data centre can have different impacts at different scales:

### Local

- grid connection/congestion;
- water demand;
- land use;
- noise from cooling/generators;
- local jobs/tax/infrastructure;
- competition with other electricity/water users.

### System/global

- total electricity generation;
- carbon emissions;
- chip manufacturing;
- supply chains;
- network build-out.

A low-carbon grid can reduce operational emissions without eliminating water, materials or local grid constraints.

---

## B11. Efficiency and rebound effects

AI hardware and software have become much more efficient. That can reduce energy per unit of work.

But total consumption can still rise if:

- usage grows faster than efficiency;
- cheaper generation encourages more generation;
- new workloads such as video/agents appear;
- more organisations deploy AI.

This is a form of rebound effect.

### Balanced takeaway

“AI is becoming more efficient” and “AI-related electricity demand is growing” are not contradictory.

---

## B12. Can AI reduce emissions elsewhere?

AI is used or proposed for:

- grid forecasting/control;
- materials discovery;
- industrial optimisation;
- building efficiency;
- weather/climate modelling;
- logistics.

Potential avoided emissions should not simply be netted against AI's footprint without evidence. Claimed benefits need application-specific measurement and counterfactuals.

### Editorial recommendation

A sentence acknowledging potential benefits is enough. Chapter 9 is about costs, not a full “AI for climate” chapter.

---

## B13. Environmental misconceptions

| Claim | Better explanation |
| --- | --- |
| “Every AI question uses a bottle of water.” | No universal per-query water value exists. Water depends on workload, location, cooling and accounting boundary. |
| “An AI query uses ten times a web search.” | Widely repeated comparison is too blunt; search itself increasingly uses AI, and model/query efficiency varies rapidly. Trace any comparison before publication. |
| “A single text request is environmentally catastrophic.” | Modern short text requests can be individually small; scale and heavier modalities matter. |
| “AI energy use is negligible.” | Data-centre demand is large and projected to grow; Australian grid planners now explicitly model rapid data-centre growth. |
| “Training is the whole footprint.” | Inference at scale, hardware manufacture and facilities also matter. |
| “Efficiency means total demand will fall.” | Per-task efficiency can improve while total use rises faster. |
| “AI will solve climate change.” | AI can help specific systems, but claims require measured outcomes and do not eliminate AI's own footprint. |

---

## B14. Recommended chapter framing for environment

The current draft says a single request is relatively small but cumulative cost is real. That framing is broadly defensible **only with qualification**.

Suggested research-grounded concept:

> A short text prompt on an efficient modern service can use a small amount of energy on its own. But “an AI request” is not one fixed workload, and total data-centre electricity demand is growing fast enough to matter to grid planning. Image/video generation, long reasoning and agentic workloads can be much heavier. The honest environmental question is both per-use efficiency **and** total scale.

---

# Part C — Concentration and monopolisation

## C1. “Monopolisation” is too simple as a single label

The market can be concentrated at one layer and competitive at another.

Relevant layers:

1. semiconductor design;
2. advanced-chip fabrication;
3. semiconductor manufacturing equipment;
4. cloud infrastructure;
5. frontier model development;
6. training data/licensing;
7. capital;
8. research talent;
9. distribution through operating systems/search/productivity suites/app stores;
10. downstream applications.

### Editorial improvement

Use **“concentration of power and infrastructure”** or “market concentration” more often than treating the whole AI economy as one monopoly.

---

## C2. Frontier development is capital intensive

Epoch AI estimated that amortised hardware and energy cost for final frontier-model training runs grew around **2.4× per year from 2016** in its dataset. It projected that if the trend continued, the largest training runs could exceed $1 billion by 2027.

### Evidence type

Independent estimate/trend analysis and **projection**, not proof that a particular $1 billion run has already occurred.

**Source:** Epoch AI, *How much does it cost to train frontier AI models?*  
https://epoch.ai/publications/how-much-does-it-cost-to-train-frontier-ai-models

### Why useful

It explains why access to capital, chips and cloud infrastructure is structurally important.

---

## C3. Industry dominates frontier model production

Stanford's 2026 AI Index reports that industry produced **over 90% of notable frontier models in 2025**.

### Evidence type

AI Index synthesis based on its model taxonomy/dataset.

### Caveat

“Notable frontier models” is a defined category, not every AI model. Universities and open research remain influential even if commercial industry dominates frontier releases.

**Source:** Stanford HAI, *The 2026 AI Index Report*.  
https://hai.stanford.edu/ai-index/2026-ai-index-report

---

## C4. Cloud-provider / AI-developer partnerships

The US FTC studied major partnerships involving:

- Microsoft and OpenAI;
- Amazon and Anthropic;
- Google and Anthropic.

The FTC reported more than **$20 billion in cumulative financial investment** across the relationships it examined and identified potential competition issues involving access to compute/talent, switching costs and access to sensitive business/technical information.

### Evidence type

Competition-regulator staff study. It identifies potential implications; it is not a court judgment that the partnerships are unlawful.

**Sources:**

- FTC staff report page:  
  https://www.ftc.gov/reports/ftc-staff-report-ai-partnerships-investments-6b-study
- FTC Office of Technology summary:  
  https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2025/01/behind-ftcs-6b-report-large-ai-partnerships-investments

---

## C5. Australian competition concerns

The ACCC's March 2025 final Digital Platform Services Inquiry report included potential/emerging competition and consumer issues in cloud computing and generative AI.

In December 2025 the ACCC published a follow-up industry snapshot noting:

- improving model capability;
- integration of AI features into broader digital ecosystems;
- growth of agentic functionality;
- large infrastructure investment;
- emerging consumer and competition risks.

### Why useful

It makes concentration an Australian competition-policy issue rather than an imported US talking point.

**Sources:**

- ACCC, *Digital Platform Services Inquiry final report — March 2025*.  
  https://www.accc.gov.au/about-us/publications/serial-publications/digital-platform-services-inquiry-2020-25-reports/digital-platform-services-inquiry-final-report-march-2025
- ACCC, *Recent developments in artificial intelligence — industry snapshot*, 17 December 2025.  
  https://www.accc.gov.au/about-us/publications/recent-developments-in-ai-industry-snapshot

**Recheck before publication.**

---

## C6. UK CMA perspective

The UK's Competition and Markets Authority has studied AI foundation-model markets and highlighted risks around concentrated control of critical inputs, powerful incumbents' positions across related markets, and partnerships.

**Source:** CMA, AI Foundation Models Update Paper.  
https://www.gov.uk/government/publications/ai-foundation-models-update-paper

### Usefulness

Shows similar concerns across competition regulators while leaving room for disagreement about remedies.

---

## C7. Counter-trends: competition is also real

A balanced chapter should not imply the market is static.

Countervailing evidence includes:

- rapid model releases from many providers;
- major capability improvements from Chinese developers;
- falling inference/token prices over time for many model classes;
- open-weight models;
- local deployment options;
- model-routing and multi-provider services;
- smaller specialised models that do not require frontier-scale capital.

Stanford's 2026 AI Index notes that the performance gap between leading US and Chinese systems has narrowed substantially.

### Important nuance

Competition at the **model/API layer** can increase even while **chips, fabrication and cloud capacity** remain highly concentrated.

---

## C8. Open-weight models — partial counterweight, not complete solution

Open-weight releases can:

- allow local deployment;
- reduce dependence on one hosted provider;
- enable customisation/audit;
- support competition and research.

They do not automatically solve concentration because:

- training the largest models remains expensive;
- inference at scale may still rely on major clouds/GPU suppliers;
- advanced chip supply remains concentrated;
- “open weight” does not necessarily mean open training data/code/licence;
- distribution channels still matter.

### Recommended wording

> Open-weight AI can reduce dependence at the model layer, but it does not dissolve concentration across chips, cloud infrastructure, capital or distribution.

---

## C9. Bundling and distribution power

Major technology companies can distribute AI through products people already use — operating systems, search, browsers, office suites, cloud platforms and phones.

This can be beneficial:

- lower adoption friction;
- integration with existing workflows;
- bundled security/administration;
- broad access.

It can also raise competition concerns:

- self-preferencing;
- default placement;
- switching costs;
- tying/bundling;
- data advantages;
- reduced visibility for rivals.

This is where the project's separate “forced AI / shelfware” research note is tangentially relevant, but Chapter 9 should rely on ACCC/competition-regulator evidence rather than its unverified statistics.

---

## C10. Values and control

The current draft says a handful of companies shape available tools and “what values or restrictions they build in.” The basic concern is legitimate but the wording should be made less sweeping.

Every widely deployed AI service embeds choices about:

- moderation;
- acceptable use;
- data retention;
- defaults;
- model behaviour;
- available features;
- geographic access;
- pricing;
- API access.

A concentrated market can make a small number of private governance choices unusually consequential. But users also have competing providers, open-weight systems and local models in some contexts.

### Better framing

> When a small number of providers supply infrastructure or models used by many downstream products, their technical and policy decisions can propagate widely. How much practical choice users retain depends on the layer of the market and the availability of alternatives.

---

## C11. Sovereignty — Australian angle

Australia relies heavily on overseas firms for frontier models, cloud platforms and advanced chips. “Sovereign AI” proposals generally concern resilience, local capability, government control of sensitive data, domestic compute/research and reduced strategic dependency.

### Caution

Sovereignty arguments can be economic, security, privacy or industrial-policy arguments. Do not treat “sovereign AI” as inherently better or assume domestic hosting alone eliminates risk.

The National AI Plan and current government capability programs are better sources to recheck immediately before publication.

---

## C12. Concentration misconceptions

| Claim | Better explanation |
| --- | --- |
| “AI is controlled by one monopoly.” | Different layers have different levels of concentration and competition. |
| “There is no competition.” | Model/provider competition is rapid in some layers; frontier infrastructure remains expensive/concentrated. |
| “Open source solves the monopoly problem.” | Open-weight models help at the model layer but still depend on hardware, capital and distribution ecosystems. |
| “Concentration is automatically harmful.” | Scale can fund safety, infrastructure and low-cost services; competition policy asks when market power suppresses choice/innovation or entrenches incumbents. |
| “Big-company partnerships are illegal.” | Regulators are examining competitive effects; partnership existence is not itself proof of illegality. |
| “Falling AI prices prove there is no concentration problem.” | Prices can fall while critical infrastructure/control remains concentrated. |

---

# Part D — Recommended synthesis for Chapter 9

These three sections can share one connective idea:

> Some AI risks are not things an individual can fix by being more careful. Copyright rules, data-centre infrastructure and market concentration are shaped by law, industry design, competition and public policy.

This strengthens the chapter's core framing by preventing “informed users” from being presented as the answer to every risk.

---

# Publication recheck flags from this file

Recheck immediately before publication:

- Australian CAIRG priorities and any copyright legislation;
- active AI copyright litigation and appeals;
- provider indemnity/terms language;
- current IEA/AEMO forecasts;
- provider per-query energy disclosures;
- major new data-centre projects/policies;
- current AI-provider market structure;
- competition-regulator investigations/remedies;
- open-weight/frontier model landscape;
- Australian National AI Plan implementation and sovereignty initiatives.

