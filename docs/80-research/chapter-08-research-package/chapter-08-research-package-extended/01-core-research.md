# 01 — Core Research Mapped to Chapter 8

## 1. Introduction — Creativity Raises Different Questions

Creative AI is different from many practical AI uses because the output itself can be the product, the expression or part of someone's identity and livelihood. When AI drafts an itinerary, the key question may be whether the facts are correct. When AI writes a poem, illustrates a book, performs a synthetic voice or generates a song, questions of **authorship, intention, consent, cultural meaning, attribution, compensation, authenticity and market substitution** enter the discussion.

That is why the chapter should not frame opposition as mere fear of new technology. Some objections concern observable economic effects, some concern copyright and licensing, some concern professional identity, and some are moral arguments about permission and the source of the system's capability. At the same time, creative AI is genuinely useful: it can lower barriers, accelerate iteration, create new workflows and let people make things that would otherwise have required skills, money or time they do not have.

A useful opening distinction:

- **Capability question:** What can the tool produce or transform?
- **Workflow question:** Where does it enter the human process?
- **Quality question:** Is the result appropriate for the intended purpose?
- **Rights question:** What may the user legally and contractually do with it?
- **Economic question:** Whose paid work or costs change?
- **Creative question:** Does it expand or narrow the person's ideas?
- **Authenticity question:** What does the audience reasonably think it is seeing or hearing?

The same AI use can score differently on each.

## 2. AI Across Creative Domains

Detailed domain research is in `02-creative-domains.md`. The common pattern is broader than "AI makes a rough first draft."

By 2026, systems can generate highly polished-looking text, still images, songs, voices and video elements. Their weaknesses increasingly concern:

- consistency across a longer project;
- precise control;
- factual reliability where facts enter the work;
- maintaining a distinctive voice or brand;
- legal/provenance uncertainty;
- reproducing stereotypes or conventional defaults;
- matching professional technical requirements;
- preserving editability;
- determining whether generated material is exclusive or derivative;
- and deciding what is actually worth making.

Therefore, avoid a brittle "AI = rough; human = finished" story. A better distinction is between **surface completeness** and **fitness for purpose**.

### Writing

Useful for ideation, structural alternatives, rewriting, compression/expansion, feedback simulations, title/angle exploration and first drafts. Risks include generic voice, invented facts, anchoring on the first plausible direction and outsourcing too much of the author's own thinking. The Doshi/Hauser experiment is particularly useful because it shows both an individual benefit and a diversity cost. [S17]

### Art and image creation

Useful for concept exploration, moodboards, thumbnails, variants, compositing and rapid illustration. Risks include style/identity disputes, demographic defaults, model memorisation, poor control over exact details and rights/provenance questions. [S27] [S29] [S45] [S47]

### Music and audio

Useful for demos, arrangements, synthetic songs, sound design, voice generation, localisation and experimentation. It is also one of the clearest domains for current consent/licensing experimentation and platform flooding. Suno's own current help material makes clear that paid-plan commercial rights do not automatically guarantee statutory copyright. [S42] [S43] Deezer provides an unusually clear abundance-versus-demand case. [S34]

### Video and film

Useful for storyboards, previsualisation, extending/repairing shots, background/element generation, effects, cleanup, dubbing and localisation. Adobe's Generative Extend is a good production-assistant example because AI modifies a specific edit without pretending to replace filmmaking. [S39] YouTube's policy demonstrates how realistic synthetic media can create disclosure duties at platform level. [S31]

### Design

Useful for layouts, palettes, variants, campaign adaptations and mockups. Conventional tools remain preferable when exact geometry, typography, vector paths, deterministic layout, accessibility compliance or a durable brand system matters. Research on design fixation means "more options faster" should not automatically be equated with better exploration. [S18] [S21]

## 3. Effort vs Judgement — Where the Existing Framing Works and Where It Breaks

### What it gets right

The framing is pedagogically strong because generative AI does reduce the effort required to produce candidate material. The user can ask for 20 concepts, alternate edits or a demo arrangement almost immediately. That can move time from initial production into selection, refinement or other work.

It also correctly reminds beginners that **a generated result is not a decision**. Someone still has to decide:

- what problem the work should solve;
- what audience it is for;
- what should be included or omitted;
- which option fits;
- whether it is truthful;
- whether it is ethically appropriate;
- whether it infringes a third party's interests;
- whether it is technically usable;
- whether it says anything worth saying.

### Where it is too simple

Execution is often judgement.

A designer deciding the exact spacing between two elements is executing and judging at the same time. A guitarist's phrasing, a writer's sentence rhythm, an illustrator's line quality and an editor's cut timing are not merely labour on one side and "vision" on the other. They are craft decisions expressed through execution.

AI can also **alter judgement**, not merely relieve effort. If a model supplies the first six concepts, those concepts can become anchors. Wadinambiarachchi et al. found evidence of design fixation under generative-AI support. [S18] The human is still judging, but the space being judged has already been shaped by the tool.

Expertise matters. Hou et al. found different effects by stage and participant expertise; in one implementation condition, experienced designers received no quality improvement and spent substantially longer. [S21] "AI saves effort" is therefore an empirical question about a workflow, not an automatic property.

### Better model: a loop

A more realistic creative loop is:

**Frame → Generate/Make → Inspect → Select → Revise → Test/Verify → Publish/Perform**

Humans and AI can participate at multiple points. The key question is not "Who created it?" as a binary, but **what contribution occurred at each point and who remained responsible for consequential choices?**

This also sets up authorship and disclosure discussions better than "human-made versus AI-made."

## 4. Is AI Stealing?

### Break the phrase into specific claims

When a creator says AI "stole" their work, they may mean one or several of the following:

1. A copy of the work entered a dataset without permission.
2. The source itself was unlawfully obtained.
3. The work was analysed for commercial model training without compensation.
4. A rights reservation or licence condition was ignored.
5. The model memorised/reproduced protected expression.
6. An output is substantially similar to a protected work.
7. An output imitates a recognisable style or creative identity.
8. A synthetic voice or likeness appropriates a person's performance/identity.
9. The new system competes economically with the people whose works helped make it capable.
10. The person believes consent should have been required even if copyright law permits the use.

Those are not one legal test.

### Why "AI just copies and pastes" is wrong

A trained model is generally not a conventional content database queried for fragments. Training adjusts numerical parameters based on examples so the system can model patterns and generate new outputs.

But "the model never contains or reproduces training material" is also wrong as a universal statement. Security researchers have extracted memorised passages from language models and training examples from diffusion models. Deduplication and other training choices affect the risk. [S26] [S27] [S28] [S29]

A beginner-friendly explanation:

> Training is closer to repeatedly adjusting a very large pattern-generating system using examples than to filling a searchable scrapbook. Most generations are not a database lookup. But some examples can be memorised strongly enough to reappear, especially when material is duplicated or other conditions make memorisation more likely.

Then separately explain **retrieval**: a system using retrieval-augmented generation may actually fetch external documents at response time. Training and retrieval are different mechanisms.

### Why "it learns just like a human" is inadequate

The analogy helps explain that exposure can influence later creation without every output being a copy. It fails if it hides major differences:

- dataset collection can involve legally relevant copies;
- training operates at industrial scale;
- the same work can be processed repeatedly and systematically;
- the learner is a commercial technical system, not a natural person;
- outputs can be produced at near-zero marginal cost and enormous volume;
- model providers may know or control data provenance differently from a human artist encountering culture;
- economic substitution can occur at different scale.

It is better to use the analogy as one intuition and immediately name its limits.

### Jurisdiction snapshot

See `03-copyright-training-and-licensing.md` for detail.

- **Australia:** current government policy explicitly says it is not considering a TDM exception. Existing copyright law relies on specific exceptions such as fair dealing rather than a US-style open-ended fair-use doctrine. [S01] [S03]
- **United States:** fair use is fact-specific. The Copyright Office's Part 3 report rejects a blanket answer and considers purpose, source, market effects and output controls. [S08] The just-issued ROSS appeal is a vivid warning against over-generalisation: the Third Circuit affirmed a non-fair-use result in a competing legal-search context, but its reasoning was still sealed at the research cut-off. [S09] [S10]
- **European Union:** the DSM Directive provides TDM exceptions, including broader Article 4 treatment where lawful access and rights-reservation conditions matter. GPAI providers also face AI Act copyright-policy and training-content-summary obligations. [S11] [S12] [S13]
- **United Kingdom:** the existing TDM exception is limited to non-commercial research. In March 2026 the government said a broad opt-out exception was no longer its preferred approach and that more evidence was needed. [S14] [S15]

This is enough to demonstrate why global legal slogans are unsafe.

## 5. Is AI Replacing Artists?

### Replace "artist" with tasks and markets

A single creative occupation contains many tasks with different exposure.

Examples:

- novelist: research organisation, synopsis, brainstorming, drafting, editing, voice, negotiation, promotion;
- illustrator: concept thumbnails, composition, rendering, revision, client communication, production specs;
- musician: composition, performance, arrangement, production, mixing, metadata, promotion;
- filmmaker: storyboarding, casting, shooting, editing, VFX, localisation;
- designer: brief interpretation, layout, typography, asset creation, variants, production, stakeholder management.

AI may substitute for one task, complement another and have little value in a third.

### Evidence of substitution

Online freelance research is now strong enough to say that **some exposed work has already declined**.

Demirci et al. report roughly a 21% decline in job posts for automation-prone writing/coding categories relative to manual-intensive categories after ChatGPT and about a 17% decline in image-creation posts associated with image-generation exposure. Remaining exposed jobs also shifted toward greater complexity and higher pay. [S23]

Teutloff et al., analysing more than three million freelancer job postings, found aggregate demand did not simply collapse. Instead, substitutable skill clusters such as writing/translation fell substantially relative to counterfactual trends while complementary AI/ML and chatbot work grew. [S24]

Hui et al. likewise found short-term reductions in employment and earnings for freelancers in more exposed occupations. [S25]

### What that evidence does not prove

- It does not show "all artists are being replaced."
- It does not necessarily generalise from online freelancing to staff jobs, high-end commissions, physical performance or prestige markets.
- It does not separate every creative role cleanly.
- It does not tell us the long-term equilibrium.
- It does not establish whether lower prices increase demand enough to create other opportunities.

### Entry-level concern

The strongest empirical basis for the "apprenticeship ladder" concern is that simpler/shorter and novice-accessible work can be more exposed. Teutloff et al. also find shifts affecting novice workers in complementary categories. [S24]

However, the further claim—

> removing junior tasks today will create a shortage of skilled senior creatives years later

—is plausible but not yet well established causally. Treat it as a workforce-development concern, not a measured long-term result.

## 6. Does AI Kill Creativity?

### Define what is being measured

"Creativity" can mean:

- originality/novelty;
- usefulness/appropriateness;
- surprise;
- expressive intent;
- personal voice;
- cultural meaning;
- emotional communication;
- craft;
- ability to generate diverse ideas;
- ability to select a good idea;
- the audience's judgement of a finished result.

The classic research definition often combines originality with effectiveness/appropriateness. [S16] That is useful for experiments but does not settle philosophical questions such as whether a model has intention, lived experience or "real creativity."

### Best current evidence

**Short-story experiment:** Doshi & Hauser found access to generative-AI story ideas increased ratings of the resulting stories, particularly for less-creative writers, while the AI-assisted stories became more similar to one another. [S17]

**Visual design:** Wadinambiarachchi et al. found AI image support increased fixation and reduced the number, variety and originality of ideas in a 60-participant design task. [S18]

**Interpretation debate:** Meincke et al. emphasise the distinction between individual performance and collective diversity; Lee and Chung argue against over-generalising the diversity interpretation from a specific brainstorming setup. [S19] [S20]

**Expertise and stage:** Hou et al. show that AI's benefit is not uniform: ideation and implementation can respond differently, and experience level matters. [S21]

### What can responsibly be said

Supported:

> AI can improve immediate performance on some bounded creative tasks.

Supported:

> AI suggestions can anchor people, reduce divergent exploration or make a set of people's outputs more similar under some conditions.

Not yet strongly supported:

> Regular AI use permanently damages a person's creativity.

Not yet strongly supported:

> AI always makes people more creative.

The best practical lesson is to design the workflow deliberately. For divergent work, a creator might generate several human ideas **before** opening an AI tool, or use different models/prompts only after establishing their own directions. AI can then expand, stress-test or transform those ideas rather than becoming the first anchor.

## 7. Myth vs Reality — Research-backed corrections

### Myth: "AI just copies and pastes training data."

**Reality:** Generative model training normally learns distributed parameter patterns rather than performing ordinary database retrieval. But memorisation and verbatim/near-verbatim reproduction can occur. [S26] [S27] [S28]

### Myth: "AI never copies training data."

**Reality:** Demonstrably false as a universal claim. Researchers have extracted memorised text and images. Frequency and risk depend on data duplication, model/training choices and prompting. [S26] [S27] [S29]

### Myth: "AI is trained on everything on the internet."

**Reality:** Datasets differ. Sources can include scraped web material, licensed collections, public-domain works, private data, user data, synthetic data and curated datasets. The EU's current training-content template explicitly recognises multiple source categories. [S13] Adobe describes a licensed/public-domain strategy for Firefly. [S37]

### Myth: "AI learns exactly like a human artist."

**Reality:** It can be a useful high-level analogy for pattern learning, but it obscures copying mechanics, scale, automation, commercial actors and market effects.

### Myth: "Anything generated by AI is copyright-free."

**Reality:** Too broad. Human-authored contributions to AI-assisted works may be protectable; the UK currently even has a special statutory computer-generated-works regime that the government has proposed removing. [S07] [S14]

### Myth: "If the provider says I own it, I own the copyright."

**Reality:** Contractual ownership between provider and user is not the same as copyright subsistence under statute. Canva and Suno explicitly reveal this distinction. [S41] [S43]

### Myth: "Commercial use allowed means legally safe."

**Reality:** Commercial permission answers one contractual question. It does not guarantee copyright protection, exclusivity, absence of third-party infringement or absence of voice/likeness issues. [S41] [S42] [S43]

### Myth: "Using AI automatically makes someone more creative."

**Reality:** Some experiments show quality gains; others show fixation or reduced diversity. [S17] [S18]

### Myth: "AI automatically destroys creativity."

**Reality:** Same reason. The result depends on task, workflow, user expertise and what outcome is measured.

### Myth: "AI is already replacing all artists."

**Reality:** There is measured substitution in some online tasks, not evidence of uniform occupational replacement. [S23] [S24] [S25]

### Myth: "AI cannot replace a real artist."

**Reality:** Also too broad. If a buyer's need is a low-cost generic image, basic copy or simple music bed, substitution can occur even if the AI output does not match a top professional's craft.

### Myth: "C2PA tells you whether any image is AI-generated."

**Reality:** C2PA carries provenance assertions when participating tools create and preserve them. It is not a universal detector and cannot infer a complete history when credentials are absent. [S30]

## 8. Core Takeaway — Research Qualification

The current chapter takeaway is defensible if made less absolute.

Strong:

> Generative AI can dramatically change creative workflows by reducing the effort needed to produce, transform and test material. Human choices about purpose, selection, refinement, context, rights and publication remain consequential.

Too strong without qualification:

> The judgement-heavy parts stay human.

Why: AI can influence the judgement process itself through anchoring, default aesthetics, suggestion sets and ranking. In highly automated content generation, there may also be minimal human judgement per individual output.

A useful replacement concept is **responsibility rather than metaphysical ownership of "creativity"**:

> The more consequential the creative use, the more important it is to know what the person actually contributed, what the AI supplied, what rights attach, what could go wrong, and who is taking responsibility for publishing it.

## 9. Part 2 Recap Connection

Chapter 8 can close Part 2 by extending the book's practical rule:

- Chapter 5: communicate with AI clearly.
- Chapter 6: use it where it reduces effort without surrendering important judgement.
- Chapter 7: workplace use adds confidentiality, policy and verification.
- Chapter 8: creative use adds **authorship, consent, originality, labour, identity and audience expectations**.

This preserves continuity while making clear that creative work creates extra questions beyond normal productivity.

## 10. What Chapter 9 Can Inherit Instead of Overloading Chapter 8

To keep Chapter 8 usable, avoid turning it into the book's full risk chapter. It should introduce only the creative-specific form of risks that are necessary to understand the examples.

Good hand-offs to Chapter 9 or the website:

- broad misinformation/deepfake harms;
- full bias taxonomy;
- general AI fraud;
- broad labour-market automation;
- technical watermark/detection benchmarking;
- full privacy analysis;
- detailed cybersecurity misuse.

Chapter 8 should use those topics only where they directly affect creative work, such as a cloned voice, a biased generated cast, a fake performance, or disclosure/provenance.

