# Chapter 14 Bibliography and Evidence Record

## Purpose and Scope

This file records the evidence materially used in `docs/30-books/31-book-01/chapters/chapter-14-where-ai-goes-next.md`.

The manuscript synthesises the Chapter 14 research package at `docs/80-research/chapter-14-research-package/` (`00-readme.md` to `14-recheck-before-publication.md` and `SOURCE-NOTES.md`). The package's source catalogue (`13-source-catalogue.md`) remains the fuller working bibliography, `09-real-world-examples.md` holds case detail, and `12-editorial-opportunities.md` holds companion-website ideas. This file records only what reached the manuscript, how it was used, its evidence type and limits, and its recheck needs. The manuscript uses Markdown footnotes (`[^ch14-…]`).

Research package date and spot check: **1 October 2026 (Australia/Adelaide)**.

## Evidence Decisions

- **Chapter follows its own advice.** Every direction is treated with the same pattern (what it is, what exists, where deployed, what is hard, what was predicted, what signals to watch), using the package's maturity vocabulary (research, demo, pilot/trial, limited deployment, widespread deployment, mature infrastructure). Caution is carried by concrete contrasts rather than repeated "nobody knows" (package 11 §21).
- **Capability → deployment → adoption** introduced early as the chapter's main lens, with a new portrait diagram `diagrams/capability-deployment-adoption.mmd` (package 01 §3, 12 §1; observation 20). Rendered with mmdc on 1 October 2026 using the system Chrome (the bundled puppeteer Chrome was missing).
- **Companies generic in prose**, consistent with Chapters 11 and 13: Amazon ("the world's largest online retailer"), Rio Tinto ("one of the largest miners"), Waymo ("the leading robotaxi operator"), Cruise ("a second robotaxi company"), Epic ("one of the most widely used hospital-records systems", although the editorial title names it), Apple ("one major phone maker"), Meta ("a large social-media company"), Microsoft ("one major software company"), OpenAI (browser agents described generically), Rabbit (described via Chapter 11's gadgets). Public bodies, regulators, government-run tools (EdChat, NSWEduChat), METR and named studies (MASAI) are named.
- **No overlap re-telling.** Bastani et al., AlphaFold, GraphCast, materials, the 1958 chess forecast, the Grace survey figures, Amara, robotaxi city count and the IASR are cross-referenced to Chapters 3, 11 and 12 rather than restated with figures. Jobs (Chapter 10), privacy settings (Chapter 13), environmental cost and regulation layers (Chapter 9) are one-sentence pointers.
- **Agents.** Workflow-versus-agent distinction (Anthropic); "answering vs acting with delegated authority" and keycard analogy with stated breakdown (package 02, 12 §4); METR time horizons used qualitatively with limitations, no figures printed; prompt injection/agent hijacking via NIST, OWASP and a patched vendor vulnerability; NIST agent identity/authority; least privilege; calendar example reworked into five questions.
- **Robotics.** Taxonomy used only to show different maturities; warehouse scale (company data) and Pilbara autonomy (company data, sourced separately because the package's battery-electric trial is not autonomy evidence); ISO 10218 2025; Blue Jay withdrawal as announcement ≠ durable deployment; humanoid teleoperation and productive-hours questions; Moravec's paradox as intuition, not law. Defence drone trials not used (adds little beyond the mining lesson).
- **Education.** Bloom 2 sigma framed as motivation, not promise; assisted performance vs learning; teachers as task-level question; Australian framework, EdChat, NSWEduChat, NSW HSC assessment change; detectors as unsuitable for high-stakes accusations (no percentages); equity conditional. Screen time dropped (observation 8).
- **Healthcare.** FDA count (checked); TGA intended-purpose regulation and scribe scope creep; six categories; MASAI (abstract checked), Epic Sepsis Model external validation (abstract checked), ambient-scribe RCT (full text checked, mixed result reported as mixed); TGA/Health 2025 reviews; discovery-to-treatment stages; radiologist-replacement expectation paraphrased without attribution or quotation (package 05 warns the quote is unverified).
- **Transport.** SAE Levels 2/4/5 only; driver-assistance rule; robotaxi company safety figures identified as company analysis; Cruise suspension (checked); Australian NTC status and 2027 conditional deployment (communiqué via search; NTC page timed out); Adelaide traffic trials as bounded problem (page 403; package data). Other transport automation mentioned in one sentence.
- **Personal assistants.** Four-capability convergence; memory (Meta); announcement vs deployment (Apple EU delay); Rabbit improvement after launch; on-device not automatically private; accessibility with both directions; assistants vs companions (eSafety); gradual vs sudden ("visibility" lesson).
- **Other directions.** AI in science and energy/compute as one short H3, pointing back to Chapters 11 and 9. Open-weight models, public-sector detail and alignment left to the website/later books.
- **Predictions.** Wrong in both directions; expert surveys as belief; fast adoption vs slow transformation (Bick et al.); scenarios vs forecasts; IASR multiple trajectories; normal-technology vs faster-transformation views without picking a winner.
- **Signals and agency.** General signal list, one six-row "where things stand" table (portrait-friendly, four columns), Try This future-claim audit, and "Who Decides?" demonstrating agency through Australian institutional choices plus personal/workplace levels.
- **Callouts.** Per ADR-04-0002: Key Idea (approved wording, then qualified), Try This, Watch Out (apply Chapter 11 to this chapter), Recap with reflection questions. Plain English content from the plan is carried in prose. Myth vs Reality is an H2 section.
- **Teaching illustrations.** The three opening headlines and the humanoid-warehouse claim are illustrations, not quotations. No author experience invented. The author reflection (agents most credible, humanoid robots most overhyped, quantum computing a watched wildcard) is the author's own view, supplied on GitHub issue #23 and used word for word.

## Corrections and Refinements to the Research Package

- **Mining autonomy.** Package flagged the lack of a primary autonomy source. Rio Tinto's Pilbara page (checked 1 October 2026) gives ~90% autonomous haul trucks, AutoHaul (2018) and a Perth operations centre 1,500 km away. Company source.
- **Healthcare figures.** Package gave no outcome figures for MASAI, the sepsis validation or the scribe trial; figures added from abstracts/full text checked 1 October 2026. The package cited only the sepsis editorial; the underlying Wong et al. study (PubMed 34152373) is added.
- **Scribe trial.** Result is mixed (one tool −9.5% time-in-note, the other non-significant); described as such.
- **FDA radiology predominance.** The FDA overview page itself does not state the dominant specialty; the claim rests on the device list (package 05).
- **Apple release history.** Only the June 2026 launch and EU delay are sourced; the earlier revision/delay is from the package summary and needs a primary source.
- **Cruise withdrawal.** Not in package sources; widely reported; needs a primary source before publication.

## Claim Map

| Manuscript topic | Main evidence | Evidence type | Use / caution |
| --- | --- | --- | --- |
| Agent definition; workflow vs agent | Anthropic 2024 | Vendor engineering guidance | Conceptual only |
| Browser/computer agents released | OpenAI Operator, CUA 2025 | Company announcements | Existence, not reliability |
| Measured agent progress and limits | METR, updated 8 May 2026 | Independent evaluation | No figures printed; checked |
| Agent hijacking, prompt injection | NIST 2025, 2026; OWASP LLM01 | Government research; security reference | Evaluation, not prevalence |
| Injection to code execution | Microsoft Security 2026 | Vendor security research | Patched; pattern only |
| Agent identity and authority | NIST concept paper 2026 | Government concept paper | Not a standard |
| Warehouse robot scale | Amazon 2025 | Company operational data | Self-reported |
| Pilbara autonomy | Rio Tinto Pilbara page | Company operational data | One operator; checked |
| Industrial robot safety standards | ISO 10218-1/-2:2025 | International standards | Ecosystem only |
| Announcement then withdrawal | Amazon Blue Jay page, update 25 Feb 2026 | Company announcement + update | Checked |
| 2 sigma | Bloom 1984 | Historical research synthesis | Not a general effect size |
| Assisted performance vs learning | Bastani et al. 2025 | Field experiment | Figures in Ch 11/12 |
| Australian school framework | Dept of Education | Government framework | Recheck review |
| EdChat, NSWEduChat | SA and NSW departments 2025 | State announcements | Deployment, not outcomes |
| HSC take-home assessment | NSW Government 2026 | Ministerial release | Recheck |
| Detectors unreliable | Giray, Roe & Espiritu 2026 | Argumentative review | No percentages |
| >1,600 AI devices | FDA, Sep 2026 | Regulator | Checked; mandatory recheck |
| Australian regulation, scribe scope creep | TGA 2025–26 | Regulator guidance | Recheck |
| Health AI regulation review | TGA, Dept of Health 2025 | Government reviews | Recheck implementation |
| AI-supported mammography | MASAI, Lancet Digital Health 2025 | Randomised trial (secondary outcomes) | Checked; interval cancers pending |
| Sepsis model external validation | Wong et al. 2021; Habib et al. 2021 | Retrospective validation; editorial | One site; checked |
| AI scribes | Lukac et al., NEJM AI 2025 | Pragmatic RCT | Mixed; checked |
| Automation levels | SAE J3016 | Technical taxonomy | Revision date unconfirmed |
| Robotaxi safety | Waymo June 2026 | Company analysis | Commercial interest; checked |
| Robotaxi suspension | California DMV 2023 | Regulator enforcement | Checked |
| Australian AV status | NTC; ITMM communiqué Nov 2025; trial guidelines | Government | Mandatory recheck |
| Adelaide traffic trials | SA Government Aug 2026 | Trial announcement | Page 403; recheck |
| Assistant memory | Meta 2025 | Company announcement | Regional |
| Announcement vs deployment | Apple June 2026 | Company announcements | Earlier history needs primary source |
| Launch vs later improvement | WIRED 2024; Tom's Guide 2025 | Independent reviews | Not controlled studies |
| On-device privacy | Apple 2025 | Company statement | Not general finding |
| Assistants vs companions | eSafety 2026 | Regulator survey/report | Distinction only |
| Data-centre electricity | IEA 2025 | International energy analysis | Modelled estimate |
| Expert survey change and spread | Grace et al. 2024 | Expert survey | Beliefs, not outcomes |
| Fast GenAI adoption | Bick, Blandin & Deming 2026 | Representative US surveys | US; adoption ≠ productivity |
| Multiple trajectories | IASR 2026 | International expert synthesis | Recheck edition |
| Normal technology | Narayanan & Kapoor 2025 | Scholarly essay | Argument, not proof |
| Australian institutions | National AI Plan; AISI; APS AI Plan | Government policy | Mandatory recheck |
| Author reflection: quantum computing today | Preskill 2018; Aaronson 2015 | Expert perspective (peer-reviewed journals) | No large-scale fault-tolerant machines yet; quantum-ML data-loading caveats (`ch14-quantum`) |

## Recheck Before Publication

Mandatory: METR methodology and status; agent-security guidance (NIST, Australian AI Safety Institute) and any agent identity standard; FDA device count; TGA guidance and AI-enabled ARTG list; MASAI interval-cancer results; robotaxi safety data and US city count (shared with Chapter 11); NTC Automated Vehicle Safety Law status and any approved Australian deployments (NTC page not retrieved in this run); Adelaide traffic-trial status and outcomes (page not retrieved); EdChat/NSWEduChat rollout and any independent evaluations; NSW HSC assessment rules; Apple assistant availability and release history; Cruise withdrawal (primary source); National AI Plan, AI Safety Institute and APS AI Plan; latest IASR and AI Index editions.

Recommended: state of fault-tolerant quantum hardware and any demonstrated quantum advantage on machine-learning workloads (author reflection, `ch14-quantum`); warehouse robot count; Rio Tinto autonomy figures; humanoid paid-deployment evidence (to test the chapter's "demos and pilots" characterisation); SAE J3016 current revision; newer expert timeline surveys; primary detector studies if the detector paragraph is expanded; newer Rabbit/AI-hardware status.

## Companion Website Candidates

From package 12: a dated "where things stand" dashboard (agents, robotaxi jurisdictions and Australian status, school AI deployments, FDA/TGA register links); a "demo, pilot, deployment or adoption?" headline-classification exercise; a "promises that moved" timeline of announcements, revisions and actual releases; prediction-versus-outcome timeline with every prediction sourced to its original statement; live links to METR, the AI Index, IASR, the Australian AI Safety Institute and the NTC program; current humanoid deployment tracker with teleoperation disclosure.
