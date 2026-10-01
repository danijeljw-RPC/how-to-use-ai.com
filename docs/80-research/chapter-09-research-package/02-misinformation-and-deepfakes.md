# Chapter 9 Research — Misinformation and Deepfakes

Research date: 2026-10-01

## Executive research takeaways

1. **AI unquestionably lowers the cost of producing plausible false content, but production is not the same thing as distribution or persuasion.** The evidence does not support a simple claim that generative AI has already transformed every misinformation campaign or decided major elections.
2. The chapter should distinguish **misinformation** (false or misleading information shared without necessarily intending deception) from **disinformation** (deliberately deceptive false information). The distinction matters because generative AI can be involved in both deliberate campaigns and accidental falsehoods.
3. The most useful beginner distinction is between:
   - AI **producing** false content;
   - people or organisations **distributing** it;
   - audiences **encountering** it;
   - audiences **believing or acting on** it.
   Evidence at one stage does not automatically prove effects at the next.
4. Deepfakes should not be framed mainly as an election problem. Documented harms include fraud, impersonation, non-consensual intimate imagery, harassment, and fabricated endorsements.
5. Advice such as “look for strange hands, blinking, or shadows” is becoming unreliable as a primary defence. Better advice is **source checking, lateral verification, provenance where available, and separate-channel verification when money or identity is involved**.
6. Human detection of high-quality deepfakes is unreliable in aggregate. A 2024 systematic review and meta-analysis of 56 papers involving 86,155 participants found overall detection sensitivity was not significantly above chance, although training/interventions could improve performance.
7. Provenance technology such as C2PA can help establish where a file came from and what happened to it, but **provenance does not prove that the underlying claim is true** and missing provenance does not prove that content is fake.

---

# 1. Terminology for a beginner

## Misinformation

False or misleading information shared without requiring an intention to deceive. Someone can sincerely repeat something untrue.

## Disinformation

False or misleading information deliberately created or distributed to deceive.

## Malinformation

Genuine information used in a harmful or manipulative context — for example, selectively releasing private information to intimidate or mislead. This term is useful for research notes but may be unnecessary in the printed chapter unless it clarifies a specific example.

## Hallucination versus misinformation

An AI system can fabricate a fact accidentally because its generated answer is wrong. That is primarily the Chapter 4 “confidently wrong” problem. Chapter 9 should focus more on what happens when false content is deliberately produced, mass-produced, published, amplified, or treated as evidence.

## Deepfake

A useful public-facing definition is **synthetic or manipulated audio, image, or video created with AI so that a real or invented person appears to say, do, or depict something that did not occur in that form**.

Avoid using “deepfake” as a synonym for every edited image. The broader ecosystem includes:

- face swaps;
- lip-sync manipulation;
- voice cloning;
- generated images of real people;
- fully synthetic people;
- generated or altered video;
- non-AI “cheapfakes” such as cropping, slowing, selective editing, misleading captions, or old footage relabelled as new.

That last category matters because sophisticated AI is not required to deceive people.

---

# 2. What AI changes about misinformation

## 2.1 Production cost and speed

Generative systems can produce large volumes of fluent text, images, audio and video quickly. This can reduce the labour needed for:

- fake reviews;
- low-quality news-style sites;
- translated propaganda;
- personalised outreach;
- fabricated images or clips;
- repeated variants designed for different audiences.

This is a genuine capability change.

## 2.2 Production was not always the bottleneck

A major calibration point for the chapter: misinformation campaigns have long been able to produce false claims cheaply. The more difficult tasks can be:

- acquiring an audience;
- distributing material into trusted networks;
- overcoming scepticism;
- gaining platform visibility;
- creating social proof;
- motivating people to act.

Therefore, evidence that AI can generate huge quantities of false content does **not**, by itself, establish that huge quantities are seen or believed.

### Editorial implication

A stronger sentence than “AI has flooded the information environment with convincing falsehoods” would be:

> Generative AI can make false content much cheaper and faster to produce. Whether that content reaches or persuades large audiences depends on distribution, trust, platform systems and the audience — and the measured real-world impact has varied substantially.

---

# 3. Evidence from elections and influence operations

## 3.1 2024 UK, EU and French elections — smaller measured impact than many forecasts

The Centre for Emerging Technology and Security (CETaS) at the Alan Turing Institute reviewed viral AI-enabled disinformation during the 2024 UK, European Parliament and French elections.

It identified:

- 16 confirmed viral cases during the UK general election;
- 11 in the EU and French elections combined;
- no evidence in its analysis that AI-enabled disinformation or deepfakes meaningfully affected the election results.

The researchers still documented harms that did not require changing the outcome of an election, including confusion, hate directed at candidates, and erosion of confidence in what is authentic.

### Evidence type

Independent research institute analysis of documented viral cases. It is **not** a complete census of all content: the method was deliberately focused on cases reaching enough visibility to be reported by researchers or journalists.

### Why it is useful

This is an excellent calibration example because two statements can both be true:

- AI makes political falsehoods easier to create.
- Evidence from these elections did not show AI deciding the outcome.

**Source:** Sam Stockwell, CETaS / Alan Turing Institute, *AI-Enabled Influence Operations: Threat Analysis of the 2024 UK and European Elections*, 19 September 2024.  
https://cetas.turing.ac.uk/publications/ai-enabled-influence-operations-threat-analysis-2024-uk-and-european-elections

Supporting summary:  
https://www.turing.ac.uk/news/no-evidence-ai-disinformation-or-deepfakes-impacted-uk-french-or-european-elections-results

## 3.2 AI companies' threat reports — useful, but company evidence

OpenAI has published recurring reports describing accounts and networks it says used its systems for influence operations, scams, cyber activity or other misuse. A recurring pattern in these reports is that threat actors often integrate AI into existing workflows — drafting, translation, ideation, research, coding — rather than gaining a wholly new ability to reach audiences.

For example, OpenAI's October 2025 disruption report said it had disrupted more than 40 networks since beginning this reporting in February 2024 and characterised many actors as adding AI to existing playbooks.

### Evidence limitation

These are valuable observations about **misuse detected within one provider's services**, but they are not independent estimates of total prevalence or total societal impact. Detection methods and what the company can observe are selective.

**Sources:**

- OpenAI, *Disrupting malicious uses of AI: October 2025*.  
  https://openai.com/global-affairs/disrupting-malicious-uses-of-ai-october-2025/
- OpenAI, *Disrupting malicious uses of AI: influence campaign linked to Russia* (2026).  
  https://openai.com/index/disrupting-malicious-uses-of-ai-influence-campaign-russia/

**Recheck before publication:** company threat reports update frequently.

---

# 4. AI-generated fake sites and content farms

NewsGuard's AI Tracking Center tracks sites it classifies as unreliable AI-generated news/information sites. The count is dynamic and has grown into the thousands.

This is evidence that automated publication at scale is occurring. It is **not automatically evidence that these sites receive large audiences or materially change public beliefs**.

### Evidence type

Private monitoring / media-rating organisation. Useful for identifying a phenomenon and examples; methodology and inclusion criteria should be read before turning the live count into a headline statistic.

**Source:** NewsGuard, AI Tracking Center.  
https://www.newsguardtech.com/special-reports/ai-tracking-center

**Recheck before publication:** live count changes.

---

# 5. Fake reviews

AI lowers the effort required to generate many plausible reviews, but fake reviews predate generative AI. The new risk is an amplification of an old market-manipulation problem.

In the United States, the Federal Trade Commission's final rule on consumer reviews and testimonials explicitly covers fake or false reviews, including AI-generated ones. The rule took effect in October 2024.

### Useful beginner takeaway

AI does not create the concept of review fraud. It can reduce the cost of producing fluent, varied fraudulent reviews and make grammar/spelling a less useful authenticity cue.

**Source:** US Federal Trade Commission, *Federal Trade Commission Announces Final Rule Banning Fake Reviews and Testimonials*, 14 August 2024.  
https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials

---

# 6. Deepfakes — harms by category

## 6.1 Fraud and impersonation

Synthetic audio and video can impersonate relatives, executives, public figures and trusted brands. Detailed examples are in `03-scams-and-fraud.md`.

The strongest teaching point is not “deepfakes are perfect.” It is that **identity cues that once felt persuasive — a familiar voice, a face on a video call — should no longer be treated as sufficient authentication for high-stakes requests**.

## 6.2 Non-consensual intimate imagery (NCII)

One of the most substantial documented personal harms is the use of generative and image-manipulation tools to create sexualised or intimate imagery without consent.

Australian eSafety material treats digitally altered or synthetic intimate images as image-based abuse. Its reporting and enforcement activity in 2025–26 shows this is not merely hypothetical, including school-age victims and “nudify” services.

### Australian school-age evidence

In 2026 eSafety reported that complaints from people under 18 about digitally altered intimate images had **more than doubled over the preceding 18 months compared with the previous seven years combined**, and said four in five reports involved female targets.

This is regulator reporting, not a population-prevalence survey. It is evidence of rapidly increasing reports to eSafety, not a complete count of incidents in Australia.

**Source:** eSafety Commissioner, *eSafety urges schools to report deepfakes as numbers double* (2026).  
https://www.esafety.gov.au/newsroom/media-releases/esafety-urges-schools-to-report-deepfakes-as-numbers-double

### Enforcement example

In September 2025 the Federal Court ordered a $343,500 civil penalty in an eSafety matter involving the posting of deepfake intimate images of Australian women.

**Source:** eSafety Commissioner, *Court orders $343,500 penalty for posting deepfakes of Australian women*, 26 September 2025.  
https://www.esafety.gov.au/newsroom/media-releases/court-orders-343500-penalty-for-posting-deepfakes-of-australian-women

### “Nudify” services

In 2026 eSafety took regulatory action against another major service described as allowing users to create synthetic nude imagery, with child-safety obligations central to the action.

**Source:** eSafety Commissioner, *eSafety takes action against another major ‘nudify’ service for failing to protect Australian children* (2026).  
https://www.esafety.gov.au/newsroom/media-releases/esafety-takes-action-against-another-major-nudify-service-for-failing-to-protect-australian-children

## 6.3 Cross-national prevalence evidence

A 2026 cross-national study covering Australia, the UK and the US (n=7,230) reported self-reported experiences of digitally altered image-based sexual abuse and included AI-specific measures. This is useful because it attempts systematic prevalence measurement rather than counting publicised incidents.

### Caveats

- self-reported experience;
- cross-sectional design;
- definitions and respondent understanding matter;
- prevalence estimates should be quoted exactly from the paper rather than generalised beyond the sampled populations.

**Source:** *International Journal of Human–Computer Interaction* (2026).  
https://www.tandfonline.com/doi/full/10.1080/10447318.2026.2723677

## 6.4 Political deepfakes

Political synthetic media is highly visible in news coverage, but the evidence above suggests the chapter should avoid implying that politics is necessarily the dominant everyday deepfake harm.

## 6.5 Consensual and legitimate uses

The chapter should briefly acknowledge legitimate synthetic-media use:

- film effects;
- dubbing and localisation;
- accessibility;
- licensed digital replicas;
- satire and parody;
- privacy-preserving synthetic actors/voices in some settings.

The harm comes from context, deception, lack of consent, fraud or abuse — not from every synthetic image or cloned voice.

---

# 7. Australian law and remedies for deepfake sexual material

## 7.1 Commonwealth criminal law

The **Criminal Code Amendment (Deepfake Sexual Material) Act 2024 (Cth)** is in force. The Act received assent on 2 September 2024 and commenced the following day. It amended the Criminal Code, including replacing section 474.17A with an offence concerning use of a carriage service to transmit sexual material without consent.

### Editorial warning

Do **not** simplify this to “deepfakes are illegal in Australia.” The law targets specified conduct and material under defined elements. Synthetic media also intersects with state/territory law, online-safety remedies, defamation, privacy and other law depending on facts.

**Primary source:** Federal Register of Legislation.  
https://www.legislation.gov.au/C2024A00078/

## 7.2 eSafety image-based abuse scheme

Australian residents can use eSafety's image-based abuse reporting pathways for intimate images or videos shared, or threatened to be shared, without consent, including altered/synthetic material in relevant circumstances.

**Sources:**

- https://www.esafety.gov.au/key-topics/image-based-abuse
- https://www.esafety.gov.au/key-topics/image-based-abuse/report-image-based-abuse

**Recheck before publication:** procedures and statutory powers can change.

---

# 8. Can people reliably detect deepfakes by looking?

## 8.1 Meta-analysis

A 2024 systematic review and meta-analysis synthesised 56 papers involving 86,155 participants. It reported overall deepfake detection accuracy of 55.54%, with pooled sensitivity not significantly above chance because the confidence interval crossed 50%. Performance varied by modality and study design, and interventions/training often improved performance.

### Evidence type

Peer-reviewed systematic review/meta-analysis.

### Why it matters

This is strong evidence against making visual self-inspection the book's principal defensive advice.

### Caveats

- deepfake generation techniques change quickly;
- studies vary considerably in quality, stimulus realism and modality;
- a 2026 meta-analysis focused specifically on faces found above-chance performance in that narrower domain, again with methodological moderation;
- therefore the safest claim is **people are not consistently reliable deepfake detectors, especially across high-quality media and modalities** — not “humans can never detect a fake.”

**Source:** *Human performance in detecting deepfakes: A systematic review and meta-analysis of 56 papers*, *Computers in Human Behavior Reports* 16 (2024), 100538.  
https://doi.org/10.1016/j.chbr.2024.100538

Additional 2026 face-specific meta-analysis:  
https://doi.org/10.1016/j.chbah.2026.100332

---

# 9. Better advice than “look for glitches”

The eventual chapter should rank verification strategies roughly like this:

## Stronger habits

1. **Trace the source.** Who first published the clip? Is the account or site authentic?
2. **Check independent reporting.** If an extraordinary event involving a public figure really occurred, credible independent outlets or official sources may corroborate it.
3. **Open the original context.** Screenshots and short clips can omit dates, preceding statements and captions.
4. **Verify high-stakes requests through another channel.** Call a known number, use a known work contact, or independently open the official banking/service app.
5. **Use provenance signals when present.** They can help establish origin and editing history.
6. **Treat forensic detector scores cautiously.** They are evidence, not proof, and performance changes with new generation methods.

## Weaker habits if used alone

- “The hands look odd.”
- “The person blinked strangely.”
- “The grammar is too good/bad.”
- “It sounds exactly like them.”
- “I ran it through one AI detector.”

These cues may occasionally help, but they should not be presented as authentication.

---

# 10. Provenance and C2PA — useful but not a truth machine

C2PA Content Credentials can attach cryptographically verifiable provenance information about origin and edits when participating tools and services preserve it.

The C2PA specification/explainer explicitly distinguishes provenance from truth. A valid provenance record can establish claims such as which device/tool signed an asset or what transformations were recorded. It cannot establish that the depicted event or accompanying statement is factually true.

Likewise, absent credentials do not prove falsity: content may have passed through tools that strip metadata, come from non-participating devices, be old material, or have no credential workflow at all.

**Source:** Coalition for Content Provenance and Authenticity, C2PA Explainer.  
https://c2pa.org/specifications/specifications/2.2/explainer/Explainer.html

### Chapter 8 boundary

Chapter 8 has already covered C2PA in the creative context. Chapter 9 should use only the narrow practical lesson: **provenance can be one verification signal; it is not a universal truth detector.**

---

# 11. The “liar's dividend”

A deepfake ecosystem creates a second-order problem: once people know convincing fakes exist, a person caught in genuine audio/video may claim authentic evidence is synthetic.

This is commonly called the **liar's dividend** in legal scholarship.

### Why useful

It shows why deepfakes can damage trust even when a particular fake is not widely believed. The risk is not only “false evidence accepted as real,” but also “real evidence rejected as fake.”

### Research caution

Use a concrete documented example only if the claim of authenticity and subsequent denial are well established. Do not turn generic political accusations into proof of the effect.

Foundational source:

Bobby Chesney and Danielle Citron, *Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security*, California Law Review (2019).  
https://www.californialawreview.org/print/deep-fakes-a-looming-challenge-for-privacy-democracy-and-national-security

---

# 12. Australian misinformation regulation — an example of policy uncertainty

Australia's 2024 Communications Legislation Amendment (Combatting Misinformation and Disinformation) Bill did **not** become law. The government announced in November 2024 that it would not proceed because there was no pathway to passage through the Senate.

This is a useful reason to avoid treating consultation papers or bills as law.

**Source:** Australian Government ministerial release.  
https://minister.infrastructure.gov.au/rowland/media-release/communications-legislation-amendment-combatting-misinformation-and-disinformation-bill-2024

**Recheck before publication:** misinformation policy can change.

---

# 13. Misconceptions — evidence-led treatment

| Claim | Better treatment |
|---|---|
| “AI misinformation has already swung elections.” | There are clear documented uses of AI in influence operations, but demonstrating causal effects on election outcomes is much harder. Research on 2024 UK/EU/French elections found no evidence of meaningful outcome impact. |
| “AI misinformation fears are completely overblown.” | Production costs, translation, synthetic media and scale have changed materially; influence campaigns and fake-content businesses are documented. Limited measured election impact does not make the broader risk imaginary. |
| “You can always tell a deepfake by looking closely.” | Human performance is inconsistent; high-quality media can defeat unaided inspection. Verify source/context instead. |
| “AI detectors can tell you whether media is fake.” | Detectors can contribute evidence but face generalisation, adversarial and model-version problems. Do not treat one score as proof. |
| “Deepfakes are mostly political.” | Fraud, impersonation and non-consensual sexualised imagery are major documented harms. |
| “No provenance label means it is fake.” | Provenance ecosystems are incomplete; absence is not proof. |
| “A Content Credential means the claim is true.” | It can authenticate provenance claims, not factual truth. |

---

# 14. Practical advice suitable for Chapter 9

## Before sharing a dramatic clip

- Find the earliest credible source you can.
- Search for independent corroboration.
- Check date, location and full context.
- Prefer the original publication over screenshots/reposts.
- Treat detector results as supporting evidence only.
- Do not confuse “I cannot verify it” with “I have proved it false.”

## Before acting on a voice/video request involving money, credentials or safety

- End the interaction if necessary.
- Contact the person or organisation through a number/address you already know.
- Never use contact details supplied inside the suspicious message itself.
- Slow down when urgency is being used to bypass normal procedure.

Detailed scam defences are in `03-scams-and-fraud.md`.

---

# 15. What is strong evidence versus weak evidence here?

## Stronger

- regulator enforcement records;
- court decisions;
- systematic reviews/meta-analyses;
- documented election/influence-operation case studies with defined collection methods;
- primary platform threat reports for what occurred inside that platform, with company-source caveat.

## Weaker / needs careful labelling

- viral lists of “deepfake tells” with no validation;
- commercial detector marketing claims;
- counts of AI-generated websites treated as audience/impact measures;
- anecdotes treated as prevalence estimates;
- claims that a particular election outcome was changed without causal evidence;
- highly quoted deepfake prevalence percentages whose original dataset is old, commercial, or narrowly sampled.

---

# 16. What the eventual writer should probably preserve

- “AI makes convincing false content cheaper and faster to produce.”
- “Source verification matters more than aesthetic confidence.”
- “Synthetic media creates both direct harms and a broader trust problem.”
- “Deepfake sexual abuse deserves more attention than the current draft gives it.”
- “Measured political impact should be described proportionately.”

# 17. What should be changed from the current template

1. Split misinformation from accidental hallucination explicitly.
2. Add distribution/impact calibration.
3. Add NCII / synthetic intimate imagery as a major deepfake harm.
4. Replace “spot visual anomalies” style advice with source/context verification.
5. Explain that provenance is useful but incomplete.
6. Add the “liar's dividend” briefly if space permits.
7. Avoid saying “deepfakes are illegal” as a blanket proposition.
8. Add one well-sourced example of AI-enabled political content with **limited measured impact** to prevent sensational framing.

