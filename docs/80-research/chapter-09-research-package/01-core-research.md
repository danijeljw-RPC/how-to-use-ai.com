# 01 — Core Research: Framing, Classification and the Nine Risks

## 1. The chapter's central claim

The approved plan says:

> AI has genuine risks that require informed users and responsible regulation.

Research supports the first half strongly: there are documented present-day harms involving fraud, intimate-image abuse, discriminatory or erroneous automated decisions, privacy violations, surveillance, information manipulation and resource use. However, the second half is better understood as two different layers of response rather than one slogan.

### What informed users can influence

Individuals can materially reduce some risks by:

- verifying urgent payment requests through a separate known channel;
- checking an organisation or adviser independently rather than through links supplied by the person contacting them;
- treating audio/video as evidence that still needs provenance and corroboration;
- limiting sensitive personal or workplace information entered into consumer AI services;
- using privacy/training/history controls where available;
- reporting scams, image-based abuse and privacy problems through appropriate channels;
- avoiding automatic deference to an AI recommendation in a consequential decision.

### What informed users cannot solve alone

Individuals have much less leverage over:

- whether an employer uses intrusive monitoring;
- whether a lender, insurer, recruiter or government deploys an unfair automated system;
- whether a platform permits abusive synthetic media to spread;
- how a data centre affects a local grid or water system;
- whether AI markets become concentrated at the chip, cloud or distribution layers;
- whether training data was collected lawfully;
- whether a facial-recognition system is deployed in a public or retail environment;
- the transparency and appeal mechanisms surrounding automated decisions.

**Editorial implication:** preserve “informed users and responsible regulation”, but avoid implying that a vigilant consumer can personally neutralise structural harms.

## 2. What is genuinely new, and what is amplified?

A useful cross-chapter distinction is:

| Risk | Mostly new because of AI? | Mostly an older harm amplified? | What AI changes |
| --- | --- | --- | --- |
| Misinformation | No | Yes | Production speed, localisation, variation, synthetic media, automated volume |
| Deepfakes | Partly | Partly | Cheap realistic impersonation of voice/image/video; scalable synthetic abuse |
| Scams | No | Yes | Personalisation, translation, voice/video impersonation, content quality, automation |
| Bias | No | Yes | Scale, opacity, consistency of repeated errors, proxy inference, automated deployment |
| Surveillance | No | Yes | Identification/search/profiling at lower marginal cost and far greater scale |
| Privacy | No | Yes | Massive training corpora, inference of sensitive traits, conversational data, model memorisation |
| Copyright disputes | Partly | Partly | Mass training on works and machine generation create new applications of old law |
| Environmental cost | No | Yes | High-density accelerator demand and rapid data-centre expansion alter scale/location |
| Concentration | No | Yes | Frontier compute/capital requirements and vertical integration create new choke points |

The phrase **“old problem, new economics”** is often more accurate than claiming AI created the harm.

## 3. Risk classification: why the draft's two-way split is weak

The draft suggests “risks primarily to individuals” versus “risks primarily to society”. It is visually simple, but the categories leak badly:

- A sexually explicit deepfake can devastate one person and also create a broader climate of gendered abuse.
- Political deepfakes may have limited measurable electoral effect yet still contribute to distrust and the “liar's dividend”.
- Biased hiring can harm one applicant and reproduce labour-market inequality at scale.
- Surveillance acts on individual people but can alter behaviour across whole populations or workplaces.
- Market concentration affects society structurally while also changing the choices, prices and defaults available to individuals.

### Published taxonomies useful as references

#### MIT AI Risk Repository

The MIT AI Risk Repository aggregates more than 1,700 risks from 74 existing frameworks and supplies two taxonomies: a **causal taxonomy** (who/what causes the risk, intent, timing) and a **domain taxonomy** with seven risk domains. It is a strong research index, not a beginner diagram, and explicitly does not tell the reader the probability or severity of each risk.

Source: MIT AI Risk Repository  
https://airisk.mit.edu/

#### NIST Generative AI Profile

NIST's Generative AI Profile extends its AI Risk Management Framework. It is designed for organisational risk management rather than public education. Its value to Chapter 9 is showing that risks can be grouped by the characteristics and impacts of systems rather than by “personal vs society”.

Source: NIST, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*  
https://www.nist.gov/itl/ai-risk-management-framework

#### AI Incident Database / CSET harm taxonomy

Incident taxonomies often distinguish the affected entity, the harmful event/issue, system behaviour and the relationship between AI and the harm. This reinforces a useful editorial lesson: “AI was involved” does not necessarily mean “AI caused the entire event”.

Source: AI Incident Database  
https://incidentdatabase.ai/

### Alternative beginner groupings worth considering

#### A. By mechanism

1. **People using AI to deceive or harm** — scams, disinformation, abusive deepfakes.
2. **AI systems making or amplifying mistakes** — bias, hallucinated claims in consequential contexts, automation errors.
3. **How AI is built, deployed and owned** — privacy, surveillance, copyright, environment, concentration.

Strength: explains *where the risk comes from*.  
Weakness: privacy and surveillance can involve both intentional misuse and system design.

#### B. By control

1. **Risks you can partly guard against** — scams, suspicious media, careless data sharing.
2. **Risks you can challenge but not personally prevent** — unfair automated decisions, employer monitoring.
3. **Risks requiring collective/institutional action** — market concentration, data-centre impacts, broad training-data governance.

Strength: directly supports the chapter's practical purpose.  
Weakness: can imply individual responsibility for victimisation if worded carelessly.

#### C. By evidence maturity

1. **Well-documented present harms** — scams, NCII/deepfake abuse, some bias cases, privacy violations.
2. **Real but difficult-to-quantify harms** — misinformation effects, broad surveillance chilling effects, AI-specific scam share.
3. **Rapidly evolving structural risks** — energy demand, concentration, frontier/agentic security issues.

Strength: teaches proportion and evidence quality.  
Weakness: less visually intuitive.

**Research recommendation:** The most useful printed diagram may combine A and B: mechanism as the main grouping, with small icons showing whether the reader can act personally, needs organisational safeguards, or needs public policy.

## 4. Nine-risk overview

### Misinformation

**Beginner definition:** False or misleading information can be produced, repeated or distributed with AI. Intent matters: misinformation can be shared without intent to deceive; disinformation is deliberately deceptive. Generative AI also hallucinates false content accidentally, but Chapter 4 already covers hallucination and Chapter 9 should focus mainly on information ecosystems and misuse.

**Evidence position:** Generative AI clearly lowers the cost of creating fluent, localised, varied content. Company threat reports document real influence operations using AI. However, independent election research has found that viral AI-generated material was less prevalent and less electorally decisive in several 2024 elections than some pre-election predictions suggested. Production capacity and demonstrated persuasion ability should not be confused with proven election-outcome effects.

### Deepfakes

**Beginner definition:** Synthetic or manipulated media that makes a person appear to say, do or experience something that did not occur. Includes voice cloning, face swaps, lip-sync, generated images and generated video. “Cheapfakes” use conventional editing or misleading context and remain important because not every deceptive video is AI-generated.

**Evidence position:** Present harms are well documented in scams and image-based sexual abuse. Human visual inspection is not a dependable defence against high-quality deepfakes. Provenance systems can help establish origin/history but cannot by themselves prove a claim depicted in an image is true.

### Scams

**Beginner definition:** Fraud in which AI improves or automates impersonation, persuasion, localisation, profile creation, voice/video fabrication or fake evidence.

**Evidence position:** Authorities clearly document AI-enabled tactics, but comprehensive national losses specifically attributable to AI remain difficult to isolate. Australian total reported scam losses in 2025 were $2.18 billion across scam types; do not present that as an AI-scam figure.

### Bias

**Beginner definition:** Systematic differences in treatment or performance that can disadvantage groups or individuals. Bias can come from data, labels, target definitions, proxies, design, deployment context, feedback loops and human use of outputs.

**Evidence position:** Strong historical and contemporary case evidence exists, but “AI is biased” is too broad. Bias varies by model, task, subgroup, threshold and deployment. Fairness metrics can conflict, so “remove the bias” is not a single technical operation.

### Surveillance

**Beginner definition:** Using technology to observe, identify, track, analyse or infer information about people. AI can make large amounts of video, audio and behavioural data searchable or classifiable at scale.

**Evidence position:** Australian facial-recognition cases show actual deployment, not merely hypothetical capability. Emotion-recognition claims have a contested scientific foundation; the EU AI Act prohibits certain workplace/education uses partly for this reason.

### Privacy

**Beginner definition:** Risks to control, confidentiality and appropriate use of information about people. AI privacy issues arise in training data, prompts/uploads, connected-app access, generated inferences, model memorisation, retention, human review and data sharing.

**Evidence position:** Model memorisation and extraction have been demonstrated experimentally. Consumer product settings can reduce some exposure but do not make a service “private” in every sense. Account type and product terms matter.

### Copyright disputes

**Beginner definition:** Legal disputes over the use of protected works in training, model outputs, licensing, attribution and ownership. The legal answer varies by jurisdiction and facts.

**Evidence position:** By 2026 there are substantive rulings and major settlements, but no single ruling settles all generative-AI training. Australia has continued policy work and has stated it is not considering a broad text-and-data-mining exception. **Recheck before publication.**

### Environmental costs

**Beginner definition:** Electricity, water, carbon, hardware manufacturing and local infrastructure effects associated with building and running data centres and AI systems.

**Evidence position:** Both “one prompt is catastrophic” and “AI energy is negligible” are bad summaries. Efficient short text inference can be measured in fractions of a watt-hour in provider-specific settings, while aggregate data-centre demand is large and rapidly growing. AEMO now explicitly plans for substantial data-centre load growth in the National Electricity Market.

### Concentration / monopolisation

**Beginner definition:** Dependence on a small number of firms or facilities for chips, advanced manufacturing, cloud capacity, frontier models, capital, data and distribution.

**Evidence position:** Regulators identify genuine chokepoints, vertical integration, switching costs and partnership dependencies. Yet open-weight models, strong model-provider competition and rapidly changing capability/price curves are counter-trends. “Only a few companies control AI” is too blunt; concentration differs by layer.

## 5. Present harm vs capability vs projection

The chapter should make these three evidence classes visible in prose:

- **Present harm:** something happened to real people/organisations and can be documented.
- **Capability evidence:** a study shows a system *can* do something under specified conditions.
- **Projection/scenario:** a model estimates what may happen under future assumptions.

Examples:

- Hong Kong deepfake conference fraud: **present harm**.
- LLM persuasion experiment: **capability evidence**, not proof an election swung.
- AEMO 2035–36 data-centre electricity figure: **forecast/projection**, not current use.

This distinction is one of the strongest ways to keep the chapter neither frightening nor falsely reassuring.

## 6. A better interpretation of “both useful and risky”

There is no logical contradiction between a technology producing value and producing harms. Many AI risks are **use-context dependent**:

- A voice clone can support accessibility/dubbing with consent and impersonation fraud without consent.
- Facial recognition can help identify authorised users and create intrusive tracking in a retail/public setting.
- Generative AI can improve writing productivity and generate scalable deceptive content.
- Data-centre compute can support medical/scientific work and impose local grid/water costs.

The useful editorial question is not “Is AI good or bad?” but:

1. What is the use?
2. Who benefits?
3. Who bears the risk or cost?
4. Who chose the system?
5. Can affected people opt out or appeal?
6. What evidence exists about frequency and severity?
7. Which safeguards change the outcome?

## 7. Primary cross-cutting sources

- Australian Government, National AI Plan (2 Dec 2025): https://www.industry.gov.au/publications/national-ai-plan
- Australia's AI Safety Institute: https://www.industry.gov.au/science-technology-and-innovation/technology/artificial-intelligence/ai-safety-institute
- International AI Safety Report 2026: https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026
- OECD AI Principles: https://www.oecd.org/en/topics/ai-principles.html
- MIT AI Risk Repository: https://airisk.mit.edu/
- NIST AI Risk Management Framework: https://www.nist.gov/itl/ai-risk-management-framework
- ACCC Digital Platform Services Inquiry final report: https://www.accc.gov.au/about-us/publications/serial-publications/digital-platform-services-inquiry-2020-25-reports/digital-platform-services-inquiry-final-report-march-2025
