# Chapter 9 Research — Contrasting Viewpoints and Proportion

Research date: 2026-10-01

This file is designed to stop the eventual chapter from becoming either a catalogue of alarming anecdotes or an exercise in reassurance. It separates **documented harm, plausible capability, prevalence, severity and uncertainty**.

---

# 1. The central framing mostly survives research

The plan's core sentence — **AI has genuine risks that require informed users and responsible regulation** — is broadly supportable, with two important qualifications.

## Qualification 1 — “informed users” cannot solve every risk

Personal literacy meaningfully helps with:

- scam verification;
- privacy choices;
- source checking;
- resisting over-reliance.

It has limited power against:

- discriminatory deployment by institutions;
- biometric surveillance in spaces a person must enter;
- market concentration;
- copyright policy;
- energy infrastructure;
- platform-level distribution systems.

The chapter should therefore say **informed users, responsible organisations and appropriate collective safeguards** somewhere in the explanation, even if the shorter approved Key Idea remains unchanged.

## Qualification 2 — “responsible regulation” is not a settled recipe

There is broad support across governments, standards bodies and industry for risk management, but substantial disagreement about:

- how broad AI-specific law should be;
- whether existing law is sufficient;
- what counts as “high risk”;
- which actor should carry which obligation;
- how to avoid burdening small/open developers disproportionately;
- how quickly rules should adapt.

The book should defend the need to take risks seriously without pretending the policy response is obvious.

---

# 2. A calibration grid for the nine planned risks

These ratings are **editorial research judgements, not quantitative risk scores**. They are intended to help a later writer choose proportion, not to be printed as a ranking.

| Risk | Documented present harm? | Ordinary-reader exposure | Potential severity | Evidence quality | Key uncertainty |
| --- | --- |---:|---:| --- | --- |
| Misinformation | Yes | Medium/high online | Low to societal/high depending context | Mixed to strong for existence; weaker for causal outcome claims | How much AI changes belief/action versus distribution bottlenecks |
| Deepfakes | Yes | Medium | High for targeted abuse/fraud | Strong cases; prevalence measurement uneven | Detection, prevalence by subtype, platform effects |
| Scams | Yes | High | High financial/emotional | Strong for scams generally; weaker for AI-specific share | Attribution of losses specifically to AI |
| Bias | Yes | Context-dependent | High in high-stakes decisions | Strong in multiple documented domains | How generalisable individual audits are across models/deployments |
| Surveillance | Yes | Context-dependent | Medium/high depending use | Strong deployed cases | Legal/accepted boundary, actual scale of AI-enabled deployment |
| Privacy | Yes | High for data exposure choices | Medium/high | Strong legal/technical basis; incident prevalence varies | Retention/inference/model changes; product terms |
| Copyright disputes | Yes as legal/economic conflict | Low personal, higher professional | Medium/high for creators/businesses | Strong that disputes exist; law unsettled | Case outcomes, jurisdiction, legislation/licensing |
| Environmental costs | Yes | Mostly indirect | Societal/local infrastructure significance | Strong on data-centre growth; per-query estimates variable | AI share, future demand, efficiency/rebound |
| Market concentration | Yes as market structure concern | Mostly indirect | Potentially high systemic | Strong regulator interest; harm/benefit contested | Competition trajectory across layers |

---

# 3. Misinformation — strongest arguments on both sides

## Position: generative AI materially increases misinformation risk

Supported by:

- cheap generation of fluent text and synthetic media;
- translation/personalisation;
- documented influence operations;
- fake content sites and fake reviews;
- deepfakes creating new evidentiary problems;
- increasing synthetic content volume.

## Position: public fears about mass persuasion have outrun measured impact

Supported by:

- distribution and trust remain bottlenecks;
- 2024 UK/EU/French election research found fewer viral cases than feared and no evidence of outcome impact;
- AI-company investigations often report limited audience reach for disrupted influence operations;
- laboratory persuasion capability is not equivalent to real-world electoral causation.

## Synthesis

> AI clearly changes the economics and realism of producing deceptive content. Evidence that this has already translated into large-scale changes in political outcomes is much weaker and highly context dependent.

Avoid both “AI has destroyed truth” and “nothing happened, so the risk was hype.”

---

# 4. Deepfakes — politics versus targeted personal harm

## Public narrative

Deepfakes are often illustrated with fabricated politicians.

## Evidence-led correction

Targeted fraud and non-consensual intimate imagery are highly consequential documented uses. eSafety's enforcement and school reporting make this especially relevant in Australia.

## Detection disagreement

- Some people can identify some fakes, and interventions/training can improve performance.
- Meta-analytic evidence shows humans are not reliably accurate across high-quality deepfakes/modalities.
- Automated detectors face generalisation and adversarial problems.

## Synthesis

The useful lesson is not “detection is impossible.” It is **do not make unaided visual/auditory judgement your only authentication method**.

---

# 5. Scams — old crime versus genuinely new capability

## “Mostly an old problem made easier” argument

Scams rely on old mechanisms:

- urgency;
- authority;
- romance/relationship building;
- fear;
- greed/opportunity;
- secrecy;
- payment manipulation.

AI does not invent these.

## “The evidence cues changed” argument

AI weakens familiar authenticity cues:

- fluent local language no longer reassures;
- a recognisable voice can be cloned;
- a plausible face can be synthetic;
- apparent video participation can be manipulated;
- personalised detail is cheaper to assemble.

## Synthesis

The draft is right that independent verification remains core, but wrong if it implies nothing operational has changed. **The defence principle is old; the trusted signals need updating.**

---

# 6. Bias — “AI reflects society” is true but incomplete

## Position: data reflects historical inequality

Strong and intuitive. Many systems can learn discriminatory patterns from historic decisions or under-represented data.

## Counterpoint: data alone is not the whole mechanism

Bias can arise from:

- target/proxy choice;
- measurement;
- labelling;
- thresholds;
- deployment;
- feedback loops;
- human reliance.

The healthcare cost-proxy case is decisive evidence that a system can create racial disparity even without directly using race as its target.

## Debate: can “fairness” simply be optimised?

No single metric captures every notion of fairness; formal metrics can conflict.

## Synthesis

> Bias is neither proof that algorithms are uniquely prejudiced nor a problem solved by deleting sensitive attributes. It is a system-design and governance problem requiring context-specific definitions, testing and recourse.

---

# 7. Surveillance — safety benefits versus privacy power

## Arguments for deployment

Organisations may cite:

- theft/violence prevention;
- identification of repeat offenders;
- fraud/security;
- efficient investigation;
- public safety.

The Bunnings case shows these can be real concerns.

## Arguments against / constraints

- biometric monitoring is highly privacy-invasive;
- consent/notice may be weak or absent;
- false matches can cause harm;
- normalising routine identification changes expectations in public/semi-public spaces;
- mass analysis can make previously impractical surveillance routine.

## Synthesis

The most useful question is **necessity and proportionality**, not “surveillance good/bad.” Could a less intrusive method achieve the goal? Is it effective enough to justify the intrusion? Are people notified? Is there review/redress?

---

# 8. Privacy — convenience versus data exposure

## Benefit side

Personalisation and connected assistants can be genuinely useful when they can access:

- email;
- files;
- schedules;
- previous conversations;
- preferences.

## Risk side

The same access expands the amount of data available for:

- retention;
- inference;
- accidental disclosure;
- account compromise;
- provider/system error;
- secondary use.

## Synthesis

Privacy is not a demand for “zero data collection.” It is about **purpose, minimisation, transparency, control, retention and proportionality**.

---

# 9. Copyright — creator rights versus innovation/access

## Rights-holder position

Common arguments:

- copyrighted work should not be ingested for commercial model training without permission/compensation;
- output can substitute for/licence-compete with original work;
- creators need transparency and enforceable rights;
- scraping/pirate acquisition can compound the concern.

## AI/developer/innovation position

Common arguments vary by jurisdiction but may include:

- training learns statistical patterns rather than storing conventional copies in the ordinary sense;
- broad licences for internet-scale data may be impractical;
- overly restrictive rules could entrench incumbents that can afford licences;
- transformative-learning/fair-use or applicable exceptions may protect some training in some jurisdictions.

## Licensing middle ground

Growing licensing deals and collective mechanisms may create practical routes without resolving every legal theory.

## Synthesis

The chapter should not adjudicate the global legal debate. It should say that **law, licensing and court outcomes remain unsettled and jurisdiction-specific, which creates real uncertainty for creators, developers and some users.**

---

# 10. Environment — tiny prompts versus large systems

## “Per-use footprint is small” argument

Provider measurements and independent estimates suggest short text prompts on efficient modern systems can be measured in fractions of a Wh to low-Wh ranges depending on workload and assumptions.

## “Scale is significant” argument

IEA and AEMO data show data-centre electricity demand is already material and expected to grow strongly. AI is a major driver of incremental accelerated-compute demand.

## Why these are not contradictory

A tiny per-unit resource cost multiplied by enormous usage, heavier modalities and infrastructure expansion can become a material system demand.

## Synthesis

> The useful question is not “is one prompt bad?” but “what is the workload, how efficient is it, and what happens at total scale?”

---

# 11. Concentration — scale economies versus market power

## Why concentration can produce benefits

Large firms can fund:

- expensive chips/data centres;
- safety/security teams;
- global availability;
- reliability;
- rapid R&D;
- lower unit prices through scale.

## Why it creates concerns

Control of:

- cloud;
- chips;
- capital;
- distribution;
- proprietary data;
- defaults;
- model access

can create switching costs, dependency and barriers to entry.

## Counter-trend

Open-weight models and rapid provider competition are real. Performance gaps between countries/providers can narrow quickly.

## Synthesis

> Competition at the chatbot/model layer can be intense while the infrastructure underneath remains concentrated. “AI monopoly” is too simple; “concentrated strategic layers” is more accurate.

---

# 12. Regulation — arguments that can both be reasonable

## More/earlier regulation

- harms can be difficult to reverse after deployment;
- individuals cannot inspect models;
- high-risk systems need testing/accountability;
- market incentives do not price all social harms.

## Caution about premature rules

- capability evolves faster than prescriptive rules;
- compliance can favour incumbents;
- low-risk beneficial use can be burdened;
- existing law may already address conduct.

## Existing-law-first

- apply privacy, consumer, discrimination, criminal and competition law;
- add AI-specific rules only where gaps are demonstrated.

## New-framework approach

- general-purpose/automated systems create cross-sector issues that existing agencies may not address consistently;
- dedicated transparency/testing obligations may be required.

## Synthesis

Chapter 9 can say regulation matters without claiming **one universal AI law** is the answer.

---

# 13. What media coverage tends to overstate

These are patterns to watch, not accusations against all media:

- attributing all scam losses to AI after describing an AI scam;
- calling a forecast a current fact;
- treating a lab capability test as evidence of widespread real-world use;
- using a single dramatic incident as prevalence evidence;
- presenting old facial-recognition error rates as current universal performance;
- repeating one per-query energy/water number without workload/method;
- calling every automation failure “AI”;
- describing proposed legislation as law;
- simplifying a settlement into a court ruling on all training.

---

# 14. What company messaging can understate

Again, evaluate case by case:

- aggregate accuracy without subgroup results;
- “we don't train on your data” without retention/access context;
- per-prompt efficiency without total consumption;
- security/safety claims based only on internal tests;
- “open” labels without clarity about weights/data/code/licence;
- voluntary principles presented as equivalent to independent oversight.

Company sources remain excellent for product settings and operational facts within their visibility; they simply need the correct evidentiary role.

---

# 15. What advocacy can understate or overstate

Advocacy organisations often surface harms that would otherwise be invisible and bring affected-community evidence. Potential limitations include:

- case selection;
- normative framing;
- worst-case emphasis;
- methodology designed to demonstrate a concern rather than estimate population prevalence.

Do not discard advocacy evidence; pair it with independent/official data when making prevalence claims.

---

# 16. A simple evidence ladder for the writer

When deciding how strongly to state a risk:

## Level A — documented deployment/harm

Court/regulator finding, measured incident, systematic observational evidence.

Language: **is happening / has happened / documented**.

## Level B — demonstrated capability

Controlled research shows the system can do something, but prevalence is unknown.

Language: **can / has been demonstrated / creates a plausible route**.

## Level C — projection/scenario

Modelled future demand or harm.

Language: **could / projected / under this scenario**.

## Level D — theoretical/speculative

Mechanism proposed but little evidence of occurrence.

Language: **possible / debated / uncertain** — or reserve for Chapter 11 if long-term.

This distinction would substantially improve the final chapter.

---

# 17. Recommended chapter-wide proportionality sentence

A possible idea for the later writer, not finished chapter copy:

> The right question is not whether an AI risk is technically possible. It is whether it is happening, how often, how serious the harm is when it happens, who bears it, and what can realistically reduce it.

That sentence can become the connective thread across all nine risks.

