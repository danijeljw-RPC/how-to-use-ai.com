# Healthcare — Research Notes

## Core conclusion

The draft is directionally correct but too vague.

A stronger evidence-based statement is:

> AI is already regulated and deployed in selected healthcare tasks — especially medical imaging and clinical workflow support — while general diagnostic or treatment autonomy remains constrained by validation, accountability, consent, bias and safety requirements.

---

## Regulated AI-enabled medical devices

### United States

The US FDA stated in September 2026 that it had authorised **more than 1,600 AI-enabled medical devices** for marketing. The public list is dominated by radiology/imaging applications.

This is one of the strongest pieces of evidence that "AI in healthcare" is not merely future speculation.

**Sources**
- FDA overview (Sep 2026): https://www.fda.gov/medical-devices/digital-health-center-excellence/artificial-intelligence-enabled-medical-devices
- FDA device list: https://www.fda.gov/medical-devices/artificial-intelligence-enabled-medical-devices/list-artificial-intelligence-enabled-medical-devices

### Australia

Australia's TGA regulates software and AI when they meet the legal definition of a medical device, based on intended purpose.

The TGA explicitly lists examples including:
- melanoma diagnosis apps;
- patient-deterioration prediction;
- treatment chatbots;
- clinical decision support;
- retinal screening;
- radiology analysis.

The TGA also publishes a list of AI-enabled devices in the Australian Register of Therapeutic Goods (ARTG), while warning that the list may not capture every AI-enabled registered device.

**Sources**
- TGA, AI and medical-device software regulation, updated 5 Feb 2026: https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software
- TGA, AI-enabled ARTG list announcement, 4 Sep 2025: https://www.tga.gov.au/news/news-articles/list-ai-enabled-medical-devices-artg

### Important misconception

"AI in healthcare is unregulated" is false as a blanket statement.

More accurate:
- some AI products fall within medical-device regulation;
- some low-risk/admin tools do not;
- professional, privacy, consumer and other laws can apply separately;
- regulatory boundaries can become difficult when products gain new features.

---

## Medical imaging: genuine clinical evidence

### MASAI mammography trial

The Swedish MASAI randomised trial compared AI-supported mammography screening with standard double reading in a national screening context.

Follow-up publications show why this is useful: it is prospective/randomised clinical evidence, not a retrospective benchmark.

**Source**
- Hernström et al., *Screening performance and characteristics of breast cancer detected in the Mammography Screening with Artificial Intelligence trial (MASAI)*, Lancet Digital Health 7(3), 2025: https://pubmed.ncbi.nlm.nih.gov/39904652/

### Durable lesson

Healthcare maturity should be judged by:
- prospective trials;
- patient outcomes;
- workflow effects;
- external validation;
- post-market monitoring.

Accuracy on a curated dataset is not enough.

---

## Failure example: Epic Sepsis Model

External validation work on the widely deployed Epic Sepsis Model found performance concerns outside development settings, prompting an editorial titled "The Epic Sepsis Model Falls Short — The Importance of External Validation."

This is a strong case for explaining **dataset shift** without technical detail:
a model that works in one environment may perform differently in another hospital/population/workflow.

**Source**
- Habib, Lin & Grant, JAMA Internal Medicine, 2021: https://pubmed.ncbi.nlm.nih.gov/34152360/

---

## Ambient AI scribes

Ambient scribes listen to consultations and draft clinical documentation.

A 2025 pragmatic randomised trial involved 238 outpatient physicians across 14 specialties and compared two AI scribe tools with usual care.

This is important because scribes target an administrative burden rather than autonomous diagnosis.

**Source**
- Lukac et al., *Ambient AI Scribes in Clinical Practice: A Randomized Trial*, NEJM AI (2025): https://pmc.ncbi.nlm.nih.gov/articles/PMC12768499/

### Risks / governance

Important issues:
- consent to recording;
- note errors/omissions;
- clinician verification;
- privacy/security;
- whether added features cross into diagnosis/treatment and therefore medical-device regulation.

The TGA explicitly uses digital scribes as a "scope creep" example: an administrative scribe can become regulated if diagnostic/treatment recommendation functions change its intended purpose.

**Source**
- TGA AI regulation page: https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software

---

## Australian regulatory review

Australia completed a major AI-in-health regulation review in 2025.

The TGA concluded its existing technology-agnostic framework remained broadly appropriate but identified work needed around transparency, roles/responsibilities, support and compliance.

**Sources**
- TGA review outcome, 30 Jul 2025: https://www.tga.gov.au/news/news-articles/tga-ai-review-outcomes-report-published
- Australian Department of Health, *Safe and Responsible Artificial Intelligence in Health Care — Legislation and Regulation Review: Final Report*, 23 Jul 2025: https://www.health.gov.au/resources/publications/safe-and-responsible-artificial-intelligence-in-health-care-legislation-and-regulation-review-final-report

This is excellent evidence for the human-agency theme: deployment is shaped by legal definitions, evidence standards and professional obligations.

---

## AI in biological research / drug discovery

Protein-structure prediction is one of the strongest examples of AI contributing to science rather than automating an existing consumer workflow.

The 2024 Nobel Prize in Chemistry recognised work including AlphaFold.

The key distinction for Chapter 14:
- predicting structures / accelerating research is not the same as producing an approved treatment;
- discovery, validation, trials, manufacturing and regulatory approval remain separate stages.

This can counter headlines of the form "AI discovered a cure."

**Primary source to include in final verification**
- Nobel Prize, 2024 Chemistry materials: https://www.nobelprize.org/prizes/chemistry/2024/summary/

---

## Public-facing medical chatbots

General-purpose chatbots can give health information, but they are not equivalent to regulated clinical systems.

Risks:
- confident errors;
- incomplete context;
- inappropriate reassurance;
- missed emergencies;
- privacy;
- users treating fluent language as diagnosis.

Book 1 should avoid medical advice examples and keep the distinction conceptual.

---

## Mental-health AI

AI companions and mental-health support systems deserve only brief mention because Chapter 9 is a better home for emotional-reliance risks.

The durable distinction:
- structured, clinically governed digital interventions;
- general chatbots;
- companionship products

are different categories and should not be treated as interchangeable.

---

## Historical prediction: replacing radiologists

A widely discussed 2016 claim associated with Geoffrey Hinton suggested training radiologists should stop because deep learning would outperform them soon.

The broad outcome is useful: AI imaging grew dramatically, yet radiology as a profession was not simply eliminated.

**Important:** Verify the exact quotation against an original recording/transcript before printing it. Do not use quote-aggregator versions.

The durable lesson is better than the quote:
> High task performance can reorganise a profession without eliminating the profession.

---

## Maturity assessment

| Area | Maturity |
|---|---|
| AI-assisted medical imaging | Regulated deployment |
| Imaging triage/segmentation | Regulated deployment |
| Ambient documentation | Rapid deployment / growing evidence |
| Predictive clinical models | Deployment with validation concerns |
| General autonomous diagnosis/treatment | Not mature |
| AI-assisted drug/science research | Active research + real breakthroughs |
| Consumer health chatbots | Widespread use, not equivalent to clinical care |

---

## Signals to watch

- regulator registers and approvals;
- prospective/randomised trials;
- post-market safety data;
- external validation across hospitals/populations;
- liability and professional guidance;
- integration with clinician workflow;
- evidence of patient outcomes, not only model accuracy;
- documented consent/verification practices.

## Recheck before publication

FDA device count, ARTG AI list, scribe regulation and clinical trial updates.
