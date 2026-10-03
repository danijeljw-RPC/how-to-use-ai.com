# Chapter 9 Research — Bias and Automated Decisions

Research date: 2026-10-01

## Executive research takeaways

The current draft's explanation — “AI learns patterns from biased training data” — is directionally correct but incomplete.

Bias can enter through:

1. historical data;
2. who is missing from the data;
3. what is measured;
4. labels assigned by people;
5. the target the system is told to predict;
6. proxy variables;
7. deployment context;
8. thresholds and business rules;
9. feedback loops;
10. people over-trusting automated output.

The strongest beginner lesson is that **an algorithm can be accurate at the thing it was told to predict and still produce an unfair real-world outcome because the wrong target or proxy was chosen**.

---

# 1. Beginner definition

“Bias” is used loosely in public discussion. For the chapter, define the risk as:

> **Systematic differences in how an AI or automated system represents, predicts, ranks or treats people or groups, where those differences can lead to unfair or harmful outcomes.**

Not every statistical difference is automatically unlawful discrimination, and not every unfair outcome is caused by malicious intent.

---

# 2. Where bias comes from

## 2.1 Historical data

If past decisions reflect discrimination, an automated system trained to reproduce those decisions can learn the same patterns.

## 2.2 Representation gaps

A system can perform poorly for groups poorly represented in development/test data.

## 2.3 Measurement bias

The variable being recorded may measure different things for different people or may be easier to observe in one group.

## 2.4 Proxy targets

A developer may use a measurable quantity because it is convenient, even though it is not the real concept of interest.

Example: predicting **healthcare cost** when the real goal is **health need**.

## 2.5 Proxy attributes

Removing an explicit attribute such as race or sex does not necessarily remove correlated information. Postcode, occupation, school, employment history, name or purchasing behaviour can act as proxies.

## 2.6 Human labels

Training labels can contain subjective judgements or past institutional decisions.

## 2.7 Thresholds and deployment choices

The same score can produce different outcomes depending on the cutoff chosen and what action follows.

## 2.8 Feedback loops

If a system directs more attention toward one group, it may generate more recorded incidents from that group, which then becomes future training data.

## 2.9 Automation bias / over-reliance

A human reviewer may defer to an automated recommendation even when context should override it. Evidence on this is nuanced: people do not always trust algorithms more than humans, so avoid treating “automation bias” as an inevitable response.

---

# 3. Strong real-world example — healthcare cost as a proxy

A 2019 *Science* study examined a widely used US health-management algorithm. At the same algorithmic risk score, Black patients were substantially sicker than White patients. The system predicted healthcare **cost**, not illness or health need. Because less money was historically spent on Black patients at a given level of need, cost was a biased proxy.

The researchers estimated that correcting the disparity would increase the percentage of Black patients selected for extra care from **17.7% to 46.5%** at the relevant threshold.

### Why this example is exceptionally useful

It shows that:

- the developers did not need to insert a racist rule;
- the system could accurately predict its chosen target;
- the **choice of target** created the problem;
- “remove race from the input” would not solve it;
- a technical metric can look neutral while producing unequal outcomes.

### Evidence type

Peer-reviewed empirical study.

**Source:** Ziad Obermeyer et al., *Dissecting racial bias in an algorithm used to manage the health of populations*, *Science* 366 (2019).  
https://doi.org/10.1126/science.aax2342

---

# 4. Facial-analysis / recognition disparities

## 4.1 Gender Shades — important historical evidence, not current benchmark

The 2018 “Gender Shades” study evaluated commercial gender-classification systems and found substantial intersectional accuracy disparities. The maximum reported error rate for lighter-skinned men was 0.8%, while error rates were far higher for darker-skinned women in the tested systems.

### What it demonstrates

- aggregate accuracy can hide subgroup failures;
- testing across demographic groups matters;
- commercial claims should be independently evaluated.

### What it does **not** establish

It does not establish that every current facial-recognition system in 2026 has the same error rates. Products, datasets and methods have changed.

**Source:** Joy Buolamwini and Timnit Gebru, *Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification*, FAT* 2018.  
https://proceedings.mlr.press/v81/buolamwini18a.html

## 4.2 Current NIST demographic evaluation

NIST continues to evaluate demographic effects in face-recognition algorithms and reports that demographic differentials depend on algorithm, image quality and use case.

### Editorial use

This is better evidence for the **current principle** than reusing 2018 error percentages as though they describe today's systems.

**Source:** NIST Face Recognition Technology Evaluation — Demographic Effects.  
https://pages.nist.gov/frvt/html/frvt_demographics.html

**Recheck before publication:** NIST results update.

---

# 5. Hiring and recruitment

Automated screening can involve:

- résumé ranking;
- candidate matching;
- inferred skills;
- interview scoring;
- personality/behavioural inference;
- generative AI screening or recommendations.

## Historical Amazon recruiting-tool case

A widely reported 2018 Reuters investigation described an experimental Amazon recruiting system that learned patterns from historical résumés and disadvantaged indicators associated with women. Amazon said the tool was never used as the sole production hiring decision-maker and the project was abandoned.

### Usefulness

Good historical illustration of “learn from past patterns, reproduce past imbalance.”

### Limitations

- old;
- based on investigative reporting rather than a published audit dataset;
- should not stand alone as evidence of current LLM recruitment behaviour.

## Current LLM résumé audits

Recent studies find that modern language models can show demographic and intersectional differences in résumé scoring, but results vary by model, prompting and occupation.

### 2025 PNAS Nexus study

A large simulated-resume audit analysed hundreds of thousands of résumé evaluations and found complex patterns: some aggregate groups received higher scores, while Black men were disadvantaged in some results. The value for Chapter 9 is not a simplistic “AI always favours group X,” but that **intersectional effects and model-specific behaviour can be missed by aggregate averages**.

**Source:** PNAS Nexus 4(3), 2025.  
https://academic.oup.com/pnasnexus/article/4/3/pgaf089/8071848

### 2024 ACM study

*The Silicon Ceiling* investigated discrimination in LLM recruitment contexts.

**Source:**  
https://doi.org/10.1145/3689904.3694699

### 2024 ACL study

Additional audit evidence on language models and recruitment.  
https://aclanthology.org/2024.acl-short.37/

### Editorial caution

Do not present one model/version/prompt result as a stable property of “AI.” The models and evaluation setups change quickly.

---

# 6. AI-writing detectors — a high-value student example

A 2023 study evaluated seven GPT detectors on writing by native and non-native English writers. The detectors falsely classified an average **61.3%** of the 91 TOEFL essays by non-native English writers as AI-generated, while performing very differently on a comparison set of US eighth-grade essays.

### Why this belongs in a beginner book

- directly relevant to students;
- shows an automated tool can produce consequential false positives;
- shows that a seemingly neutral detector can pick up linguistic style rather than authorship;
- provides a warning against using detector scores as proof of cheating.

### Caveat

The evaluated detectors and model generation methods were from 2023. The exact percentage must not be presented as the current false-positive rate of every detector in 2026.

**Source:** Weixin Liang et al., *GPT detectors are biased against non-native English writers*, *Patterns* 4(7), 2023.  
https://doi.org/10.1016/j.patter.2023.100779

---

# 7. Fairness is not one mathematical switch

Different fairness goals can conflict.

For a simple lending-style example, suppose two groups have different underlying observed default rates because of social/economic conditions. A system may be calibrated so that a “20% risk” score means approximately the same observed default rate in each group, but it may then have different false-positive/false-negative rates between groups. Forcing equal error rates can break calibration.

### Beginner lesson

> “Make it fair” is a legitimate goal, but fairness first requires a decision about **which harms or inequalities matter in this context**. Different reasonable definitions can conflict, so governance cannot be reduced to removing a sensitive column from a spreadsheet.

### Research lineage

This is established in algorithmic-fairness literature associated with work by Jon Kleinberg, Sendhil Mullainathan, Manish Raghavan and Alexandra Chouldechova, among others.

A later writer can use the concept without introducing equations.

---

# 8. Robodebt — useful analogy, but not an “AI scandal”

Australia's Robodebt scheme is relevant to **automated decision-making, governance, transparency and review**, but describing it as a modern AI failure would be misleading.

The Royal Commission examined the use of automated income-averaging and administrative decision-making. Its recommendations and findings are useful for principles such as:

- lawful decision-making;
- clear explanation;
- human accountability;
- review rights;
- testing and monitoring automated systems;
- publishing information about rules and algorithms where appropriate.

### Editorial recommendation

If used, label it explicitly:

> “Robodebt was not a generative-AI system. It is relevant because it shows what can go wrong when automated decisions affecting people's lives are deployed without adequate legal, governance and review safeguards.”

**Primary source:** Royal Commission into the Robodebt Scheme.  
https://robodebt.royalcommission.gov.au/publications/report

---

# 9. Australian legal / human-rights context

## Anti-discrimination law

Existing Commonwealth, state and territory discrimination laws can apply to outcomes produced through automated systems. There is no general “AI exception.” Whether conduct is unlawful depends on the protected attribute, area of public life, direct/indirect discrimination rules, exemptions and facts.

## Australian Human Rights Commission

AHRC has repeatedly addressed human rights, accountability and AI/automated decision-making.

A useful foundation is its 2021 *Human Rights and Technology Final Report*.

**Source:**  
https://humanrights.gov.au/our-work/technology-and-human-rights/publications/human-rights-and-technology-final-report-2021

## Privacy / automated decision transparency

Privacy reforms enacted in 2024 include new transparency requirements relating to substantially automated decisions in privacy policies, commencing in December 2026. Details are covered in `05-surveillance-and-privacy.md`.

**Recheck before publication.**

---

# 10. Automation bias — do not overstate it

The intuitive claim “people assume computers are objective” is useful, but empirical evidence is context-dependent. Some studies find people over-rely on algorithmic recommendations; others find algorithm aversion or lower trust.

### Better chapter wording

> Automated output can acquire an undeserved aura of objectivity, especially when the reasoning is hidden behind a score. But people do not always trust algorithms more than humans. The practical issue is whether decision-makers understand the system's limits and have a meaningful process for challenge and review.

This avoids turning a tendency into a universal psychological law.

---

# 11. High-stakes domains — what the evidence says to look for

## Lending / credit

Questions:

- Which inputs act as proxies?
- Does the system produce different approval/error rates?
- Are adverse decisions explainable/challengeable?
- Are protected characteristics being used directly or indirectly?

## Insurance

Similar issues arise in risk pricing, fraud detection and claims triage. Australian regulatory and anti-discrimination rules vary by product and exemptions; do not generalise.

## Policing / criminal justice

Risk scores, predictive policing and face recognition have produced significant fairness debates. US COMPAS is historically important but methodologically contested and jurisdiction-specific. If space is limited, healthcare + recruitment + facial recognition may teach the same concept with less diversion into criminal-justice detail.

## Welfare / government

Robodebt provides an Australian governance analogy while requiring the explicit “not modern AI” qualification.

## Education

AI-writing detectors are especially useful for the book's student readers because false positives can have direct consequences.

## Generative AI stereotypes

Text/image generators can reproduce stereotyped associations in occupation, gender, race, culture and appearance. Studies are model/version-sensitive; use only current examples close to publication if included.

---

# 12. Misconceptions

| Claim | Better explanation |
| --- | --- |
| “AI is objective because it's a computer.” | It implements objectives, data, labels, proxies and thresholds chosen by people and institutions. |
| “Bias comes only from biased training data.” | Bias can enter through target choice, measurement, proxies, deployment and feedback loops too. |
| “Remove race and gender and bias is fixed.” | Correlated variables can act as proxies; historical structure remains in other features. |
| “A high overall accuracy means the system is fair.” | Aggregate accuracy can hide subgroup error differences. |
| “Fairness has one technical definition.” | Legitimate fairness metrics can conflict; context and values matter. |
| “Human review fixes algorithmic bias.” | Humans can correct errors, but can also rubber-stamp automation. Review must be meaningful. |
| “Any different outcome between groups proves discrimination.” | Statistical disparity is evidence to investigate, not by itself a complete legal conclusion. |

---

# 13. Practical reader actions

For ordinary people, structural bias cannot be solved merely by being “careful.” The chapter should not transfer institutional responsibility onto individuals.

Useful actions:

- Ask whether an automated system materially affected a high-stakes decision when that information is available.
- Request reasons/review where the organisation or applicable law provides a mechanism.
- Keep source documents relevant to a disputed decision.
- Do not accept an “AI detector” score as definitive proof in education/work contexts.
- Escalate suspected discrimination through the organisation's review process and relevant regulator/commission where appropriate.

### Australia

Potential pathways depend on context:

- Australian Human Rights Commission: https://humanrights.gov.au/complaints
- state/territory anti-discrimination bodies;
- OAIC for privacy issues: https://www.oaic.gov.au/privacy/privacy-complaints
- sector regulators/ombudsmen where the decision is financial, employment, education, government, etc.

Do not present this as legal advice.

---

# 14. Strong Chapter 9 examples

1. **Healthcare proxy target** — best example of bias without explicit sensitive attribute.
2. **Gender Shades + current NIST** — historical breakthrough paired with current evidence, preventing outdated statistics.
3. **AI-writing detector false positives** — direct student relevance.
4. **Current LLM résumé audits** — current professional relevance, with model-version caveat.
5. **Robodebt** — governance analogy explicitly labelled automation, not generative AI.

---

# 15. Template improvement observations

The current draft says:

> AI systems learn patterns from their training data, and if that data reflects existing unfair patterns ... the AI can reproduce or even amplify those patterns.

Keep that, but add one short qualifier:

- training data is **one** source of bias;
- the target selected, proxies used and deployment process matter too.

The draft also says the output can “sound neutral and objective.” That is useful, but a stronger example is a numerical risk score: **numbers can look objective while encoding subjective design choices.**

---

# 16. Sources for the chapter writer

- Obermeyer et al., *Science* (2019):  
  https://doi.org/10.1126/science.aax2342
- Buolamwini & Gebru, Gender Shades (2018):  
  https://proceedings.mlr.press/v81/buolamwini18a.html
- NIST FRTE demographic effects:  
  https://pages.nist.gov/frvt/html/frvt_demographics.html
- Liang et al., GPT detectors and non-native English writers (2023):  
  https://doi.org/10.1016/j.patter.2023.100779
- PNAS Nexus résumé audit (2025):  
  https://academic.oup.com/pnasnexus/article/4/3/pgaf089/8071848
- ACM LLM recruitment audit (2024):  
  https://doi.org/10.1145/3689904.3694699
- Royal Commission into Robodebt:  
  https://robodebt.royalcommission.gov.au/publications/report
- AHRC Human Rights and Technology Final Report:  
  https://humanrights.gov.au/our-work/technology-and-human-rights/publications/human-rights-and-technology-final-report-2021

