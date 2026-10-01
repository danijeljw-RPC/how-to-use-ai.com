# Template Improvement Observations

This file does not rewrite the chapter. It identifies where research suggests the current template should be strengthened.

## 1. Introduction / "plausible direction"

**Weakness:** "Plausible" is not operationalised.

**Research suggests:** Give readers a repeatable test: current deployment, independent evidence, obstacles, economics/regulation, signals to watch.

**Effect:** usefulness, calibration.

**Evidence:** Stanford AI Index; sector-specific regulators; NTC; TGA; NIST.

---

## 2. Agent definition

**Weakness:** Good plain-English definition, but it implies a clearer category than exists.

**Research suggests:** Add that "agent" is used inconsistently; distinguish agent from predefined workflow.

**Stronger source:** Anthropic, *Building effective agents* (2024).

**Effect:** factual precision.

---

## 3. Agent mental model

**Weakness:** "Today's chat tools do one thing at a time" is already aging. Many chat products now browse, code, use tools and perform multi-step work.

**Research suggests:** Compare **answering** versus **acting with delegated authority**, rather than chat versus agent.

**Replacement analogy:** assistant + keycard/permissions.

**Effect:** current accuracy, durability.

---

## 4. Agent example: calendar → email → send

**Weakness:** Accurate conceptually, but no discussion of permissions, prompt injection or auditability.

**Research suggests:** Keep the example but add the security/authority layer.

**Sources:** NIST agent hijacking; NIST agent identity/authority.

**Effect:** balance and depth.

---

## 5. Robotics section

**Weakness:** Too compressed; "robotics and autonomous systems" risks making humanoids, mining, drones and industrial arms seem like one maturity curve.

**Research suggests:** Contrast mature specialised robotics with immature/general humanoids.

**Replacement example:** Amazon million-robot fleet plus humanoid teleoperation question.

**Effect:** clarity, calibration.

---

## 6. Robotics as "recent AI advances benefiting the field"

**Weakness:** True but abstract.

**Research suggests:** Explain that recent models can improve perception/planning/control, while hardware reliability, cost, energy and safety remain physical constraints.

**Effect:** depth.

---

## 7. Education section

**Weakness:** "Personalised tutoring is promising" is too generic.

**Research suggests:** Use the performance-versus-learning distinction. Bastani et al. gives an unusually clear negative/qualifying example. Australian EdChat/NSWEduChat gives concrete governed deployment.

**Effect:** evidence, usefulness.

---

## 8. Education risks: "equity, screen time, role of teachers"

**Weakness:** Screen time is broad and risks becoming a generic concern disconnected from AI evidence.

**Research suggests:** Prioritise:
- learning retention;
- assessment validity;
- teacher role;
- privacy;
- equity/access.

Screen-time evidence can remain secondary.

**Effect:** evidence quality.

---

## 9. Healthcare section

**Weakness:** "real progress" is correct but too vague.

**Research suggests:** Distinguish:
- regulated devices;
- randomised imaging evidence;
- external validation failures;
- administrative scribes;
- autonomous medical decisions.

**Effect:** factual specificity.

---

## 10. Healthcare risk wording

**Weakness:** Could leave readers thinking health AI is an unregulated frontier.

**Research suggests:** Explicitly state Australia already regulates AI that qualifies as medical-device software.

**Source:** TGA 2025–26 guidance/review.

**Effect:** Australian relevance, accuracy.

---

## 11. Transport section

**Weakness:** "self-driving vehicles" as a general category hides a major maturity split.

**Research suggests:** Introduce SAE's driver-support vs automated-driving distinction and current Level-4 bounded services.

**Effect:** accuracy.

---

## 12. "Traffic management is generally easier"

**Weakness:** "Easier" is broad.

**Research suggests:** Say it is a more bounded optimisation problem than general road autonomy, then use Adelaide's 2026 AI traffic trials.

**Effect:** precision, Australian relevance.

---

## 13. Personal assistants

**Weakness:** Framed mainly as a future extrapolation from voice assistants.

**Research suggests:** Memory + personal context + tool use + agents are already converging. The future question is how reliable/trusted/delegated they become.

**Effect:** currency.

---

## 14. Personal-assistant uncertainty

**Weakness:** "gradually or sudden leap" is a good insight but unsupported.

**Research suggests:** Contrast gradual voice-assistant evolution with ChatGPT's sudden public visibility after long model-development history.

**Effect:** explanatory depth.

---

## 15. Why predictions are hard

**Weakness:** Current section is mostly rhetorical and refers readers back to Chapter 11.

**Research suggests:** This should become a major evidence-backed section:
- capability vs deployment vs adoption;
- expert-survey disagreement;
- fast adoption but slow institutional change;
- scenarios vs forecasts;
- examples of predictions too early and surprises too fast.

**Effect:** chapter distinctiveness.

---

## 16. Myth vs Reality

**Weakness:** Current closing paragraph compresses many myths into prose.

**Research suggests:** Use a compact myth/reality table:
- "agents can run your life";
- "self-driving is either solved or fake";
- "AI tutors replace teachers";
- "AI in health is unregulated";
- "humanoids are basically ready";
- "nobody can say anything useful about the future."

**Effect:** readability.

---

## 17. Missing "signals to watch"

**Weakness:** Chapter tells readers to be sceptical but gives few future-facing tools.

**Research suggests:** Add a reusable "what to watch" box.

**Effect:** durability and reader agency.

---

## 18. Missing human-agency evidence

**Weakness:** Core takeaway asserts human relevance but does not show how human choices shape outcomes.

**Research suggests:** Use Australian institutions:
- school framework;
- TGA regulation;
- NTC AV law;
- AI Safety Institute;
- APS AI Plan.

**Effect:** supports central theme.

---

## 19. Missing AI-in-science direction

**Weakness:** The plan's future sectors skew toward services/automation.

**Research suggests:** Mention AI in science briefly (protein structure, weather, materials) to show a different path: AI augmenting discovery.

**Placement:** one short subsection/box, or companion website if chapter length is tight.

---

## 20. No diagram

**Weakness:** Plan says none required, but research identifies one high-value diagram.

**Recommended:** Capability → Deployment → Adoption, with arrows/bottlenecks (reliability, cost, regulation, infrastructure, trust).

**Effect:** exceptionally strong beginner explanation.

---

## 21. Chapter risk: excessive cautious language

**Weakness:** Repeated "plausible", "uncertain", "not guaranteed" can become antiseptic.

**Research suggests:** Caution should come from concrete contrasts and evidence, not constant disclaimers.

Example pattern:
- state what is real;
- show the boundary;
- show what would have to change.

**Effect:** readability and confidence.

---

## 22. Final takeaway

**Weakness:** "different technological era" can sound like a prediction of historical magnitude.

**Research suggests:** Preserve as thematic language, but ground it in agency:
the future will be shaped by capability **and** deployment choices.

**Effect:** balance.
