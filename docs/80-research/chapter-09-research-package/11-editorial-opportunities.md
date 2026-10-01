# Chapter 9 Research — Editorial Opportunities

Research date: 2026-10-01

These are **editorial possibilities**, not chapter copy and not factual claims by themselves. The later writer should choose selectively so Chapter 9 stays readable.

---

# 1. Best organising device: “Who can do something about this?”

The current individual-versus-society split is too binary. A more useful beginner diagram could group responses by control:

```text
YOU CAN REDUCE SOME OF THE RISK
scams • careless data sharing • unverified content

ORGANISATIONS HAVE TO DO THEIR PART
payment controls • privacy governance • bias testing • appeals • security

SOME RISKS NEED COLLECTIVE RULES / INFRASTRUCTURE
competition • surveillance law • copyright • energy planning • platform accountability
```

### What it teaches

- not every risk is the reader's responsibility;
- “informed user” remains practical rather than moralising;
- the nine risk categories can cross levels.

### Where it breaks down

No risk belongs exclusively in one box. Scams, for example, require individual verification **and** bank/telco/platform controls.

---

# 2. Alternative diagram: where the harm comes from

```text
PEOPLE USING AI TO CAUSE HARM
scams • disinformation • abusive deepfakes

AI / AUTOMATION GETTING THINGS WRONG
biased decisions • false outputs • privacy leakage

HOW AI IS BUILT, DEPLOYED AND OWNED
surveillance • copyright • environment • concentration
```

### Strength

Mechanism is easier to understand than “individual vs society.”

### Weakness

Some risks fit more than one mechanism. Deepfakes can be deliberate misuse; privacy can be accidental leakage or structural data collection.

---

# 3. Alternative diagram: possibility -> prevalence -> impact

A small funnel or three-step diagram:

```text
CAN AI DO IT?
      ↓
IS IT ACTUALLY HAPPENING?
      ↓
HOW OFTEN / HOW MUCH HARM?
```

Add a fourth question if space permits:

```text
WHAT REDUCES THE RISK?
```

### What it teaches

This single tool inoculates the reader against many bad AI-risk headlines.

### Excellent examples

- AI can generate political deepfakes -> yes.
- Viral AI deepfakes occurred in 2024 elections -> yes.
- Evidence they changed the UK/EU/French election results -> not in the cited study.

Or:

- Data-centre power demand is growing -> yes.
- Every short text prompt is environmentally catastrophic -> unsupported.

---

# 4. Evidence box: “The number is real — but what does it count?”

Use Australia's 2025 scam figure.

## Box structure

**Headline:** $2.18 billion in reported scam losses in 2025  
**What it is:** combined reported scam losses across several Australian sources  
**What it is not:** a total of AI-enabled scam losses  
**What it teaches:** ask what a statistic measures before repeating it.

### Why this is valuable

It teaches evidence literacy while also communicating genuine scam scale.

---

# 5. Checklist: Before You Send Money

A compact reader-facing checklist:

- Was I expecting this request?
- Is someone creating urgency or secrecy?
- Have I called them using contact details I already know?
- Has a bank account or payment method changed?
- Am I relying on their voice/face as proof of identity?
- Would normal procedure require another approval?

### What it teaches

Verification rather than deepfake detection.

### Companion-site extension

Interactive “Which step breaks the scam?” scenarios.

---

# 6. Checklist: Before You Share That Clip

- Where did it originate?
- Is this the full clip or a screenshot/repost?
- What is the original date/location?
- Is there independent reporting?
- Does the claimed source actually publish it?
- Is there provenance information — and what does it actually prove?

### Important wording

Do not make “no Content Credential” a reason to declare something fake.

---

# 7. Checklist: Before You Paste That Document Into AI

- Does it contain personal information?
- Does it contain someone else's information?
- Is it confidential or commercially sensitive?
- Do I need every name/detail for this task?
- What do this account's retention/training settings actually say?
- Is a company-approved or local tool more appropriate?

### Chapter links

Reinforces Chapter 7 confidentiality without repeating it.

### Companion site

Current screenshots of privacy settings, dated and provider-specific.

---

# 8. Table: “Old warning sign / why it is weaker now / better habit”

| Old shortcut | Why weaker | Better habit |
|---|---|---|
| Bad spelling means scam | AI can produce fluent local-language messages | Verify sender/request independently |
| I know that voice | Voice cloning can imitate familiar voices | Call back on known number / code phrase |
| They're on video so it's real | Synthetic/pre-recorded impersonation exists | Follow normal approval/security process |
| Weird hands reveal deepfakes | Visual quality improves; media types vary | Check source/context/corroboration |
| AI detector says 98% | Detector confidence is not proof | Treat detector as one signal only |

This could be one of the chapter's most useful tables.

---

# 9. Table: “Risk / what is new / what is old”

| Risk | Older problem | What AI changes |
|---|---|---|
| Misinformation | propaganda, fake reviews, rumours | speed, volume, translation, synthetic media |
| Deepfakes | photo/video manipulation, impersonation | realism/accessibility of synthetic identity/media |
| Scams | phishing, impersonation, investment fraud | language quality, personalisation, voice/video imitation |
| Bias | discriminatory human/institutional decisions | automation and scale; new proxy/model failure modes |
| Surveillance | CCTV, data profiling | automated search/identification/inference at scale |
| Privacy | databases, breaches, tracking | conversational disclosure, inference, model memorisation, connected assistants |
| Copyright | copying/licensing disputes | internet-scale training and generated outputs |
| Environment | data-centre resource use | rapid accelerated-compute demand |
| Concentration | platform/cloud/chip market power | frontier compute/capital and AI integration into existing ecosystems |

### Why useful

Directly answers one of the research brief's core questions: **new harm versus amplified old harm**.

---

# 10. Bias demonstration: “The wrong target”

A simple fictional numerical illustration based on the concept from the healthcare study, without copying its exact dataset:

```text
Goal: find people who need medical support.
Easy-to-measure proxy chosen: how much healthcare cost they generated.
Problem: spending is not the same thing as need.
Result: a technically accurate cost predictor can be an unfair need predictor.
```

### What it teaches

Bias can arise from what the system is asked to optimise, not only prejudiced language in training data.

### Where analogy breaks

Real healthcare models contain many variables and evaluation steps; the printed explanation should point to the actual study.

---

# 11. Surveillance demonstration: “Searchability changes privacy”

A beginner analogy:

> Ten years ago, a photo posted on a public page might technically have been visible to anyone who found it. Face search can change that practical obscurity: the same photo can become a searchable identifier across a huge collection.

### What it teaches

Privacy can change because the **cost of finding/linking information** changes, even when each source item was public.

### Real-world anchor

Clearview AI / OAIC.

---

# 12. Environmental visual: per-use versus total scale

A two-column diagram:

```text
ONE SHORT TEXT REQUEST
can be small on an efficient system

×

MILLIONS / BILLIONS OF REQUESTS
+ image/video/agents
+ new data centres
= infrastructure-scale demand
```

### Add explicit note

“Not all data-centre electricity is AI.”

### Why useful

Avoids false choice between “one prompt is nothing” and “AI is consuming the planet.”

---

# 13. Environment evidence table

| Number | Evidence type | What it can support | What it cannot support |
|---|---|---|---|
| IEA 415 TWh data-centre electricity, 2024 | estimate of historical global data centres | data centres are material electricity users | AI alone used 415 TWh |
| IEA 945 TWh, 2030 base case | projection | possible future data-centre growth | guaranteed future consumption |
| Google 0.24 Wh median Gemini text prompt | company operational measurement/estimate | one modern text service can have low per-prompt energy | universal energy for every AI request |
| AEMO 5 -> 34 TWh NEM data-centre forecast | Australian forecast | grid planners expect rapid data-centre growth | all of the demand is AI |

This table would model good statistical hygiene.

---

# 14. Concentration diagram: “the AI stack”

Vertical stack:

```text
APPS / ASSISTANTS
       ↓
MODELS / APIs
       ↓
CLOUD / DATA CENTRES
       ↓
ACCELERATOR CHIPS
       ↓
ADVANCED CHIP FABRICATION / EQUIPMENT
```

Add a note:

> Competition can be high at one layer and concentrated at another.

### Why useful

Makes “monopoly” concerns much more precise for beginners.

---

# 15. Myth vs Reality mini-cards

Potential pairs:

### “You can always spot a deepfake.”
Reality: sometimes, but research shows people are not consistently reliable; source verification is safer.

### “Only gullible people get scammed.”
Reality: scams exploit context, urgency and trust; strong procedure matters more than self-confidence.

### “AI is objective because it is mathematical.”
Reality: targets, proxies, labels and thresholds are design choices.

### “If the provider doesn't train on my chat, it is private.”
Reality: training is only one question; retention/access/settings matter too.

### “Every AI prompt uses a bottle of water.”
Reality: no single water-per-prompt number applies across systems/workloads/locations.

### “There are no laws for AI.”
Reality: existing Australian laws already apply, while AI-specific governance is evolving.

### “Open-source AI solves concentration.”
Reality: open weights can increase model choice but not eliminate concentrated chips/cloud/capital.

---

# 16. Mini exercise: “Which claim is stronger than the evidence?”

Give readers three sentences:

1. “Researchers showed AI can generate persuasive political messages.”
2. “AI-generated political messages have been used online.”
3. “AI changed the result of the election.”

Ask: what additional evidence is needed to move from 1 -> 2 -> 3?

### What it teaches

Capability, deployment and causal impact are different evidence questions.

### Website

Excellent interactive quiz.

---

# 17. Mini exercise: “What did the statistic actually count?”

Examples:

- all scam reports versus AI-enabled scam reports;
- data-centre electricity versus AI-only electricity;
- complaints to eSafety versus national prevalence;
- projected 2035 demand versus current consumption.

This reinforces the book's general “verify what matters” principle without technical statistics.

---

# 18. Companion website opportunities

## 18.1 Live “Before You Send Money” tool

A short decision tree linking to Scamwatch and bank/reporting resources.

## 18.2 Spot-the-scam quiz

Use invented scenarios built from documented scam patterns, not copies of real victim messages.

Important design: quiz should reward **verification behaviour**, not “guess whether this sentence was AI-written.”

## 18.3 Deepfake verification walkthrough

Show how to:

- find original source;
- search corroborating sources;
- check date/context;
- inspect available provenance;
- recognise that absence of provenance is inconclusive.

## 18.4 AI privacy settings index

Dated pages for major services with official-source links. Better online than in print because menus/policies change rapidly.

## 18.5 Australian help/report directory

- Scamwatch;
- ReportCyber;
- eSafety;
- OAIC;
- AHRC;
- IDCARE;
- sector ombudsmen.

## 18.6 Environmental “what does this number mean?” explainer

Interactive toggle:

- observed / estimate / forecast / scenario;
- per prompt / provider / data centre / grid;
- AI-specific / all data-centre demand.

## 18.7 Risk map

Allow readers to filter:

- individual / organisational / structural;
- misuse / mistake / system structure;
- documented harm / demonstrated capability / projection.

---

# 19. Screenshots worth using online, not necessarily in print

- Scamwatch AI scam guidance page;
- eSafety reporting selector;
- OAIC facial-recognition guidance;
- privacy/model-training controls in representative AI services;
- C2PA Content Credentials viewer example;
- ACCC Scams Prevention Framework timeline;
- AEMO data-centre demand chart;
- MIT AI Risk Repository domain taxonomy.

### Why online

Most UI/regulatory screenshots will date faster than the prose principles.

---

# 20. Callout opportunities

## Key Idea

Keep approved: AI has genuine risks that require informed users and responsible regulation.

Possible supporting line elsewhere:

> Being informed also means knowing which risks you cannot solve by yourself.

## Watch Out — deepfake/scam

Do not authenticate a high-stakes request from voice/video appearance alone.

## Watch Out — bias

A score can look objective even when the target, data or threshold embeds unfairness.

## Evidence Box

$2.18b reported Australian scam losses — “all scams, not AI scams.”

## Evidence Box

AEMO data-centre forecast — “forecast, not current fact; data centres, not AI-only.”

## Myth vs Reality

Use 4–6 items rather than an unstructured paragraph.

---

# 21. Possible chapter rhythm

Not a rewrite — a pacing suggestion:

1. opening framing + evidence test;
2. misinformation/deepfakes (information trust);
3. scams (direct personal harm + practical checklist);
4. bias (high-stakes decisions);
5. surveillance/privacy (data/power);
6. copyright/environment/concentration (structural risks, shorter but evidence-backed);
7. “what you can do / what needs collective action” synthesis;
8. Myth vs Reality;
9. takeaway/recap.

This would make the chapter feel like an argument rather than nine warnings.

