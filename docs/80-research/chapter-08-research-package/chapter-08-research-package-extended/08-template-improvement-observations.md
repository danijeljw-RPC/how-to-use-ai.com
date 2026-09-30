# 08 — Template Improvement Observations

## Purpose

This file evaluates `inputs/chapter-08-current-draft.md` against the research. It does **not** rewrite the chapter. The later chapter-writing system should decide what to retain, expand, qualify or remove.

Each observation identifies:

- current section/topic;
- weakness or incompleteness;
- what the research suggests;
- stronger evidence/example;
- issue type;
- relevant sources.

---

# Observation 1 — The key idea is useful but too binary

- **Current section/topic:** Key Idea / `Effort vs. Judgement, Applied to Creative Work`
- **Current framing:** AI handles effort-heavy raw material; human judgement determines meaning and quality.
- **What appears weak/incomplete:** It implies execution and judgement can be separated cleanly.
- **Research suggests instead:** Creative execution often *contains* judgement. AI can also shape the human's judgement through generated option sets, anchoring and fixation.
- **Stronger evidence:** Visual ideation research found AI support increased fixation and reduced idea diversity/originality. Design research found benefits differed by workflow stage and expertise. [S18] [S21]
- **Possible replacement example:** A designer who sees six AI logos first may still make the final choice, but the model has already influenced which directions feel available.
- **Issue affected:** Accuracy, depth, usefulness.
- **Recommendation:** Preserve the framing as a heuristic, not a law. Consider a creative loop (frame → generate → select → revise → verify) showing judgement throughout.

---

# Observation 2 — "Raw material" understates 2026 capability

- **Current section/topic:** Cross-domain conclusion / Core Takeaway.
- **Current framing:** AI is generally best at raw drafts, rough sketches, demo tracks and mockups.
- **What appears weak/incomplete:** By 2026 generative systems can produce polished-looking text, images, music and video elements. "Rough only" will date badly.
- **Research suggests instead:** Distinguish **surface polish** from **fitness for purpose**.
- **Stronger evidence:** Current music/video/design tools and platform policies assume finished or public-facing generated media exists. [S31] [S32] [S34] [S39] [S42]
- **Possible replacement example:** A fully produced synthetic song can sound release-ready while still creating questions about copyright, uniqueness, voice identity, provenance or market fit.
- **Issue affected:** Factual accuracy, currency, clarity.
- **Recommendation:** Shift limitations toward control, consistency, originality, factuality, provenance, licensing and exact revision.

---

# Observation 3 — The statement that skilled human craft is generally distinguishable is too broad

- **Current section/topic:** `Is AI Replacing Artists?`
- **Current statement:** AI-generated output is "generally distinguishable from skilled human craft to anyone paying attention."
- **What appears weak/incomplete:** No evidence supports this as a cross-domain generalisation, and rapidly improving systems make it especially brittle.
- **Research suggests instead:** Whether people can identify AI is separate from whether the work is controlled, original, rights-safe, meaningful or professionally fit.
- **Stronger evidence:** Platforms now require disclosure for certain realistic synthetic media precisely because viewers may not reliably infer production method. [S31] C2PA exists to convey provenance rather than relying on eyeballing output. [S30]
- **Possible replacement example:** A realistic synthetic clip may look convincing enough that YouTube requires creator disclosure when the alteration is meaningful.
- **Issue affected:** Accuracy and future-proofing.
- **Recommendation:** Remove the claim or replace with task-specific quality limitations.

---

# Observation 4 — The training-data paragraph is too homogeneous

- **Current section/topic:** Caveat before `Is AI Stealing?`
- **Current framing:** Many systems were trained on huge amounts of creative work gathered from the internet.
- **What appears weak/incomplete:** Broadly directionally true for some important models, but it can imply all model training uses the same source strategy.
- **Research suggests instead:** Training data can include scraped web data, licensed datasets, public-domain material, private datasets, user data and synthetic data. [S13]
- **Stronger evidence/example:** Adobe states Firefly uses licensed/public-domain content and runs contributor compensation arrangements. [S37] [S38]
- **Issue affected:** Balance, technical clarity.
- **Recommendation:** Explain diversity of training provenance before discussing disputes.

---

# Observation 5 — The draft needs a better "training is not cut-and-paste" explanation

- **Current section/topic:** `Is AI Stealing?`
- **What appears weak/incomplete:** It moves quickly from training datasets to competing ethical positions without explaining what training technically means.
- **Research suggests instead:** Explain parameters/weights, training versus retrieval, and memorisation in beginner language.
- **Stronger evidence:** Text and diffusion-model extraction work shows memorisation is real but not equivalent to every output being retrieved from a database. [S26] [S27] [S28] [S29]
- **Possible replacement example:** "The model is not normally looking up a stored picture, but some training examples can be memorised strongly enough to reappear."
- **Issue affected:** Technical accuracy, misconception correction.
- **Recommendation:** Add the plan's Plain English training-data callout with this nuance.

---

# Observation 6 — The human-learning analogy needs explicit limits

- **Current section/topic:** `Is AI Stealing?`
- **Current framing:** One side sees training as no different in principle from a human artist learning from others.
- **What appears weak/incomplete:** Presented without enough explanation of where the analogy fails.
- **Research suggests instead:** Acknowledge the intuition—pattern learning differs from collage—but immediately identify scale, automated copying, commercial system development, memorisation and market effects.
- **Stronger evidence:** USCO Part 3 treats training as a copyright/fair-use question involving protected acts, source provenance and market effects, not as legally equivalent to human learning. [S08]
- **Issue affected:** Balance, legal precision.
- **Recommendation:** Do not make either "human learning" or "theft" the technical model.

---

# Observation 7 — "Is AI stealing?" needs jurisdictional structure

- **Current section/topic:** `Is AI Stealing?`
- **What appears weak/incomplete:** It says legal questions are contested but gives the reader no concrete reason the answer differs.
- **Research suggests instead:** A short four-jurisdiction comparison provides useful substance without turning the chapter into legal advice.
- **Stronger evidence:**
  - Australia: government not considering TDM exception. [S01] [S02]
  - US: fact-specific fair-use analysis; current case law is nonuniform/fact-bound. [S08] [S09] [S10]
  - EU: TDM exceptions with rights-reservation features and AI Act transparency. [S11] [S12] [S13]
  - UK: non-commercial-research TDM exception; broad opt-out reform no longer preferred as of March 2026. [S14]
- **Issue affected:** Accuracy, usefulness, Australian relevance.
- **Recommendation:** Australia first, then a compact comparison and explicit "not legal advice/recheck" note.

---

# Observation 8 — The draft confuses ethical disagreement with one copyright question

- **Current section/topic:** `Is AI Stealing?`
- **What appears weak/incomplete:** "Permission/compensation" and "fair use/transformative use" are treated as if one yes/no legal answer would settle the moral debate.
- **Research suggests instead:** Separate:
  - dataset copying;
  - lawful access;
  - exceptions/fair use;
  - consent;
  - compensation;
  - memorisation/output infringement;
  - style imitation;
  - identity/voice;
  - market substitution.
- **Stronger evidence:** Australian creator surveys show consent/compensation objections regardless of whether a particular use has been adjudicated. [S48] [S49] Open-culture groups articulate different normative positions on machine analysis. [S53] [S55]
- **Issue affected:** Intellectual fairness.
- **Recommendation:** Explicitly tell readers that legal, ethical and economic questions can yield different answers.

---

# Observation 9 — "Is AI replacing artists?" needs empirical task-level evidence

- **Current section/topic:** `Is AI Replacing Artists?`
- **Current framing:** Some basic tasks can be done by AI; effects vary.
- **What appears weak/incomplete:** Correct but too abstract and therefore easy to dismiss as either reassurance or speculation.
- **Research suggests instead:** Use at least one measured labour-market result.
- **Stronger evidence:** Demirci et al. and Teutloff et al. show declines in exposed writing/image/translation categories alongside complexity shifts and complementary AI work. [S23] [S24]
- **Possible replacement example:** Online image-creation postings declined relative to comparison categories after image generators, while some surviving work became more complex/higher-paid.
- **Issue affected:** Depth, credibility, usefulness.
- **Recommendation:** Introduce task substitution versus occupation replacement.

---

# Observation 10 — "Lived experience" should not be used as an absolute moat

- **Current section/topic:** `Is AI Replacing Artists?`
- **Current framing:** Valued creative work depends on a genuine point of view, lived experience and judgement AI does not have.
- **What appears weak/incomplete:** Philosophically reasonable but economically incomplete. Buyers can substitute AI even when it lacks lived experience if they only need adequate generic output.
- **Research suggests instead:** Treat lived experience/reputation/performance as **human differentiators**, not proof against substitution.
- **Stronger evidence:** Freelance-market substitution occurs despite human creators having genuine experience. [S23] [S25]
- **Issue affected:** Economic accuracy.
- **Recommendation:** Phrase as one source of value in some markets, not a universal protection.

---

# Observation 11 — The creativity section is currently evidence-free

- **Current section/topic:** `Does AI Kill Creativity?`
- **Current framing:** AI could dull creative growth if overused, or support creativity if used for blank-page/effort-heavy parts.
- **What appears weak/incomplete:** Plausible but speculative without studies.
- **Research suggests instead:** This section can now be evidence-led.
- **Stronger evidence:** Doshi/Hauser on better individual ratings plus increased similarity; Wadinambiarachchi on fixation; Hou on expertise/stage. [S17] [S18] [S21]
- **Possible replacement example:** "A study can find better individual stories and less diverse stories at the same time."
- **Issue affected:** Depth and authority.
- **Recommendation:** Make this one of the chapter's strongest sections rather than saying only "it depends."

---

# Observation 12 — Long-term creative decline should remain explicitly unproven

- **Current section/topic:** `Does AI Kill Creativity?`
- **What appears weak/incomplete:** "Could dull creative growth over time" is reasonable but can read like an evidence-backed longitudinal effect.
- **Research suggests instead:** Most current evidence is short-term/bounded. Long-term dependency/skill-loss evidence remains thin.
- **Stronger evidence:** Current key studies measure immediate tasks, not years of development. [S17] [S18] [S21]
- **Issue affected:** Evidentiary discipline.
- **Recommendation:** Mark long-term skill atrophy as a concern/hypothesis and turn it into a reader reflection: "Which skills do you still want to practise?"

---

# Observation 13 — Licensing callout needs five separate questions

- **Current section/topic:** `Watch Out` commercial/public AI content.
- **Current framing:** Check licensing terms and originality.
- **What appears weak/incomplete:** Correct but vague; readers can still think provider ownership language settles everything.
- **Research suggests instead:** Distinguish:
  1. provider contractual ownership;
  2. commercial-use permission;
  3. statutory copyright;
  4. exclusivity;
  5. third-party non-infringement.
- **Stronger evidence:** Canva warns outputs may not be unique and keeps third-party responsibilities; Suno explicitly says paid commercial rights do not guarantee copyright protection. [S41] [S42] [S43]
- **Issue affected:** Practical usefulness and legal clarity.
- **Recommendation:** This is one of the chapter's best beginner callouts.

---

# Observation 14 — The draft lacks abundance/discoverability

- **Current section/topic:** Missing.
- **What appears weak/incomplete:** The chapter focuses on whether AI can create, but not what happens when content production becomes extremely cheap.
- **Research suggests instead:** Add a short point about attention/curation becoming the bottleneck.
- **Stronger evidence:** Deezer reports fully AI-generated tracks exceeding half of daily uploads at a peak while representing only a small fraction of listening. [S34] Spotify reports large-scale spam removal and stronger anti-impersonation systems. [S33]
- **Possible replacement example:** "Half the new uploads does not mean half the audience."
- **Issue affected:** Economic depth; real-world relevance.
- **Recommendation:** Brief in print, richer on website.

---

# Observation 15 — The draft lacks voice/likeness/digital-replica distinctions

- **Current section/topic:** Music/video sections and `Is AI Stealing?`
- **What appears weak/incomplete:** Synthetic voice/actor use is a major creative-AI issue and is not the same as ordinary copyright in an output.
- **Research suggests instead:** Explain at a high level that performer, contractual and personality/publicity/digital-replica protections can be separate.
- **Stronger evidence:** SAG-AFTRA consent requirements and UK digital-replica policy analysis. [S44] [S14]
- **Issue affected:** Completeness.
- **Recommendation:** One short example is enough; detailed law belongs online.

---

# Observation 16 — The draft lacks provenance/disclosure

- **Current section/topic:** Missing.
- **What appears weak/incomplete:** Readers using AI publicly need to understand that disclosure/provenance rules are emerging.
- **Research suggests instead:** Briefly explain platform disclosure and Content Credentials.
- **Stronger evidence:** YouTube's materiality-based disclosure policy; KDP generated-vs-assisted distinction; C2PA standard. [S31] [S32] [S30]
- **Issue affected:** Practical usefulness.
- **Recommendation:** Include one callout or sidebar; keep technical detail for website.

---

# Observation 17 — C2PA should not be introduced as detection

- **Current section/topic:** Missing but likely editorial opportunity.
- **What appears weak/incomplete:** Many public explanations treat provenance as an AI detector.
- **Research suggests instead:** Describe it as cryptographically bound assertions/history where supported.
- **Stronger evidence:** C2PA specification/explainer. [S30]
- **Issue affected:** Technical accuracy.
- **Recommendation:** If included, explicitly say absence does not prove human creation and presence does not prove factual truth.

---

# Observation 18 — The draft lacks accessibility as a genuine separate benefit

- **Current section/topic:** Missing.
- **What appears weak/incomplete:** Benefits are framed mostly as speed/effort reduction.
- **Research suggests instead:** AI can lower some barriers for people unable to use conventional creative tools, people lacking formal training/equipment or people working across languages.
- **Evidence quality:** Strong conceptual/practical plausibility; the package found less mature large-scale empirical evidence specifically on sustained creative participation by disabled users than on general creativity/labour.
- **Issue affected:** Balance and inclusivity.
- **Recommendation:** Mention as a genuine benefit but do not use it rhetorically to dismiss creator rights concerns.

---

# Observation 19 — Bias belongs as a creative decision problem, not a generic risk lecture

- **Current section/topic:** Missing.
- **What appears weak/incomplete:** Generated images can silently choose demographics and cultural defaults for the user.
- **Research suggests instead:** Ask "What did the model decide that I never specified?"
- **Stronger evidence:** Generated-profession image audits show demographic imbalances in tested models/prompts. [S45] [S46] [S47]
- **Issue affected:** Practical usefulness.
- **Recommendation:** One visual example or website demo; do not turn Chapter 8 into the main bias chapter.

---

# Observation 20 — "AI-generated" versus "AI-assisted" needs a continuum

- **Current section/topic:** Entire chapter.
- **What appears weak/incomplete:** The text often speaks of "AI-generated creative output" as one category.
- **Research suggests instead:** Use modes:
  - blank-page breaker;
  - variation engine;
  - production assistant;
  - co-generator;
  - AI-led generation;
  - automated content generation.
- **Stronger evidence:** Platform definitions already distinguish assisted/generated use. [S31] [S32] Professional research shows workflow-stage differences. [S21]
- **Issue affected:** Clarity and conceptual depth.
- **Recommendation:** A one-page diagram/table may be more valuable than an additional prose section.

---

# Observation 21 — Authorship should be separated from commercial permission

- **Current section/topic:** Licensing Watch Out / theft discussion.
- **What appears weak/incomplete:** "Licensing/originality concerns" bundles several legal concepts.
- **Research suggests instead:** Explain that a user may:
  - have permission to use an output;
  - lack copyright in purely generated expression in some jurisdictions;
  - own copyright only in human modifications;
  - still face third-party rights;
  - receive a non-exclusive result.
- **Stronger evidence:** USCO Part 2, Arts Law Australia, Canva and Suno. [S07] [S04] [S41] [S43]
- **Issue affected:** Legal clarity.
- **Recommendation:** Beginner table.

---

# Observation 22 — UK law is a useful caution against global myths

- **Current section/topic:** `Is AI Stealing?` / myths.
- **What appears weak/incomplete:** The draft correctly calls law unsettled but does not show that even output-copyright rules differ materially.
- **Research suggests instead:** Use the UK's current special computer-generated-works protection as a short jurisdiction example, while noting the 2026 government proposes removing it. [S14]
- **Issue affected:** Jurisdictional accuracy.
- **Recommendation:** Better on website if print space is limited, but at minimum state "rules differ by country."

---

# Observation 23 — Creator criticism should be more concrete and less antiseptic

- **Current section/topic:** `Is AI Stealing?` / `Is AI Replacing Artists?`
- **What appears weak/incomplete:** "Reasonable people land in different places" is civil but risks flattening concrete creator objections.
- **Research suggests instead:** Name the actual concerns: consent, payment, style imitation, loss of commissions, rates, identity, market saturation and platform spam.
- **Stronger evidence:** Australian creator and APRA AMCOS surveys. [S48] [S49] [S50]
- **Issue affected:** Balance and credibility.
- **Recommendation:** Preserve attribution and sample limitations; do not adopt advocacy labels as legal findings.

---

# Observation 24 — Pro-AI creator use should also be concrete

- **Current section/topic:** Domain examples.
- **What appears weak/incomplete:** The draft gives hypothetical use cases but little evidence that creators can simultaneously use AI and object to aspects of it.
- **Research suggests instead:** Creator surveys themselves show some adoption alongside strong rights concerns. [S49] [S50]
- **Issue affected:** Balance.
- **Recommendation:** Avoid false camps of "creators" versus "AI users."

---

# Observation 25 — The myth section should become a structured myth/reality table

- **Current section/topic:** Unheaded paragraph beginning "A few myths..."
- **What appears weak/incomplete:** Good ideas are compressed into prose and do not correct the most common technical/legal misconceptions.
- **Research suggests instead:** Cover:
  - copy/paste vs memorisation;
  - "trained on everything";
  - human-learning analogy;
  - provider ownership vs copyright;
  - commercial use vs safety;
  - style vs infringement;
  - all/no artist replacement;
  - C2PA vs detection.
- **Stronger evidence:** [S08] [S13] [S26] [S27] [S30] [S41] [S43]
- **Issue affected:** Reader retention and practical utility.
- **Recommendation:** Use an actual Myth vs Reality callout consistent with the plan.

---

# Observation 26 — The chapter can be more decisive about what is known without taking sides

- **Current section/topic:** All contested sections.
- **What appears weak/incomplete:** Repeating "unsettled" can become evasive.
- **Research suggests instead:** Separate:
  - **known:** task-level freelance shifts; memorisation exists; platform flooding exists; provider terms differ; jurisdictions differ;
  - **disputed:** fair-use scope, ethical consent requirements, best licensing policy;
  - **unknown:** long-term creativity development, full labour equilibrium, cultural homogenisation.
- **Issue affected:** Editorial strength.
- **Recommendation:** The chapter can say "we know X" even when it refuses to decide "therefore AI creativity is good/bad."

---

# Observation 27 — The chapter should not make product names carry the lesson

- **Current section/topic:** Domain examples and possible additions.
- **What appears weak/incomplete:** Tool examples can date quickly.
- **Research suggests instead:** Lead with workflow/capability; use a current product only where its policy or implementation proves a point.
- **Good product-specific uses:**
  - Suno for contract vs copyright. [S42] [S43]
  - Adobe Generative Extend for bounded production assistance. [S39]
  - Canva for rights/non-uniqueness. [S41]
  - KDP/YouTube for disclosure. [S31] [S32]
- **Issue affected:** Longevity.
- **Recommendation:** Put volatile tool lists on website, not in core prose.

---

# Observation 28 — The current "small business logo" example needs stronger qualification

- **Current section/topic:** Art.
- **Current example:** Generate rough logo concepts before briefing a designer.
- **What appears weak/incomplete:** Useful workflow, but "logo" introduces trademark, distinctiveness and exact vector/brand-system issues.
- **Research suggests instead:** Explicitly label generated logos as **direction-finding/moodboard material**, not final legal identity.
- **Possible stronger example:** Generate six visual *directions* for a poster or event theme, then use a designer/conventional vector tools for final identity.
- **Issue affected:** Practical safety and precision.
- **Recommendation:** Either keep logo with caveat or use less legally sensitive concept-art example.

---

# Observation 29 — Music should go beyond "rough backing track"

- **Current section/topic:** Music.
- **What appears weak/incomplete:** Current systems can create complete synthetic songs; music is also the best current example of licensed training, voice consent and platform flooding.
- **Research suggests instead:** Keep simple songwriter demo example but add one real market example such as Deezer or licensing deals.
- **Stronger evidence:** [S34] [S35] [S36] [S42] [S43] [S50]
- **Issue affected:** Currency/depth.
- **Recommendation:** Music can carry multiple chapter themes efficiently.

---

# Observation 30 — Video should include synthetic identity/disclosure, not only storyboarding

- **Current section/topic:** Video.
- **What appears weak/incomplete:** Storyboarding is safe but misses the most consequential current creative uses.
- **Research suggests instead:** Pair a low-risk workflow (previsualisation/Generative Extend) with a disclosure/identity example.
- **Stronger evidence:** Adobe bounded edit [S39], YouTube disclosure [S31], digital replica consent [S44].
- **Issue affected:** Practical relevance.
- **Recommendation:** Keep chapter nontechnical; one example of each is enough.

---

# What should probably remain from the current draft

The research does **not** imply the draft should be discarded.

Strong existing choices:

- treats contested questions seriously rather than resolving them rhetorically;
- covers all five required domains;
- keeps a human-responsibility/judgement theme;
- includes a commercial-use Watch Out;
- leaves author personal experience as a placeholder rather than inventing it;
- closes Part 2 and transitions to Chapter 9;
- avoids overloading the chapter with legal doctrine.

The improvement needed is **evidence and precision**, not a new agenda.

