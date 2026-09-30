# Core Research — Chapter 8: AI and Creativity

## 1. Creativity raises different questions

Earlier practical chapters can often ask a relatively simple question: *Does this make the task easier, faster or more useful?* Creative work introduces additional dimensions:

- authorship
- originality
- personal voice
- identity
- attribution
- ownership
- cultural value
- livelihood
- authenticity
- audience trust
- consent
- imitation
- the difference between producing something and having something to say

This is why a purely productivity-centred framing is inadequate.

A generative system can reduce the cost of producing plausible text, images, music and video. That does not automatically answer whether the resulting work is original, meaningful, legally protectable, culturally valuable, ethically produced or economically beneficial to creators.

### Beginner-friendly distinction

A useful way to separate the issues is:

> **Generation asks whether a system can produce material. Creativity asks what role intention, selection, experience, judgement, context and meaning play in turning material into work that matters.**

That formulation avoids asserting that only humans can ever be creative while still preserving the chapter's human-judgement focus.

---

## 2. What generative AI is doing in creative work

Generative systems learn statistical structure from large collections of examples, then produce new outputs in response to instructions or other inputs.

For a beginner, avoid describing this as either:

- a database simply “copying and pasting” pieces of training data, or
- a system learning exactly as a human artist learns.

Both analogies are incomplete.

A model generally does not store every training work as a conventional retrievable file, but training can still involve reproducing copyrighted works during data preparation and model development, and models can sometimes reproduce or closely resemble training material. Whether particular training uses are lawful depends on jurisdiction, facts and legal doctrines.

### Useful wording

> A generative model does not usually work like a collage program cutting pieces from a hidden library. It learns statistical patterns from large datasets and uses those patterns to generate an output. But that does **not** make the copyright question disappear: the training process itself may involve copies of protected work, and the generated result can still create infringement, imitation or attribution problems.

---

# 3. AI across creative domains

The chapter plan requires writing, art, music, video and design. The deeper domain notes are in `02-creative-domains.md`; this section summarises the common pattern.

## Writing

Current systems can assist with:

- brainstorming
- alternate plot directions
- character options
- structural outlines
- rewriting
- editing
- tone variants
- summarisation of a writer's own notes
- research organisation
- title and tagline generation
- translation and localisation support

The strongest evidence for Chapter 8 is not that AI “writes better than people.” Controlled studies instead suggest that access to AI ideas can raise average ratings on short creative tasks while also producing more similarity across outputs.

**Important limitation:** studies of short stories, gift ideas or brainstorming tasks do not establish what happens to long-form literary craft, professional identity or creativity after years of AI use.

## Art and image-making

Current systems can assist with:

- concept exploration
- moodboards
- rough compositions
- style and palette exploration
- variations
- inpainting/outpainting
- background replacement
- product visualisation
- storyboarding
- texture and asset creation

Image generation is now capable enough that the debate is no longer primarily about whether systems can create attractive images. The harder issues are provenance, style imitation, training consent, commercial rights, bias, reproducibility and how much human control exists over the final expression.

## Music and audio

Current systems can assist with:

- full song generation
- accompaniment and backing tracks
- melody/chord suggestions
- arrangement exploration
- sound effects
- stem-like workflows
- synthetic vocals and voice transformation
- demos
- background music
- adaptive or personalised audio

Music is especially useful for Chapter 8 because it contains nearly every issue at once: training data, performer identity, composition rights, sound-recording rights, voice/likeness, commercial licensing, streaming economics and synthetic-content flooding.

## Video

Current systems can assist with:

- storyboards
- shot ideation
- previsualisation
- short generated clips
- B-roll
- image-to-video
- object removal/replacement
- background generation
- captions
- dubbing
- voice replacement
- rough edits
- effects

Video remains more expensive and operationally constrained than text or still images. Consistency across shots, fine control, temporal errors and production integration remain important limitations.

## Design

Current systems can assist with:

- layout variants
- colour palettes
- mockups
- marketing assets
- image generation
- resizing/adaptation
- early visual concepts
- presentation design
- rapid iteration

A useful chapter distinction is that **design is not merely producing a visual**. Professional design also includes understanding the brief, accessibility, brand systems, manufacturing constraints, legal constraints, audience behaviour and trade-offs.

---

# 4. Effort vs judgement applied to creativity

The approved chapter through-line is well supported if stated carefully.

Generative AI is particularly strong at lowering the cost of **producing options**:

- ten title variants
- six colour directions
- three scene continuations
- a rough backing track
- a storyboard
- alternate layouts
- multiple visual concepts

The human still has to decide:

- which option fits the purpose
- which is original enough
- which reflects the creator's intentions
- whether it is tasteful
- whether it is truthful
- whether it is legal to publish
- whether it is culturally appropriate
- whether it is worth making at all

### Nuance

Do not imply that execution is merely “effort” and vision is the only valuable creative work.

For painters, musicians, illustrators, writers, editors, animators and designers, execution itself often contains judgement, tacit knowledge and expressive decisions. The plan's distinction works best as a spectrum, not a binary:

> Some parts of creative work are mainly about generating or transforming material; other parts depend heavily on taste, intention, context and judgement. In skilled creative practice, the two are often intertwined.

That is more defensible than saying “AI does execution; humans do creativity.”

---

# 5. Is AI stealing?

This question contains several different claims and should be unpacked.

## 5.1 Training-data claim

A person saying “AI stole my work” may mean:

- their copyrighted work was copied into a training dataset without permission
- the model was trained on that work without compensation
- the system can imitate their style
- the model can reproduce parts of their work
- AI-generated substitutes compete with their work
- a company created commercial value from their work without sharing that value

These are related but legally distinct.

## 5.2 Arguments defending broad training uses

Common arguments include:

- machine learning extracts statistical relationships rather than redistributing the underlying work
- training can be transformative
- requiring licences for every training item could be impractical or entrench only the largest companies
- broad access to data can support research and competition
- humans learn from existing culture without paying every creator they encounter
- some jurisdictions already provide text-and-data-mining mechanisms or exceptions

### Important caution

“Humans learn from art too” is rhetorically simple but technically and legally incomplete. Human observation and industrial-scale machine training are not identical processes, and copyright law does not automatically treat them as equivalent.

## 5.3 Arguments from creators/rightsholders

Common arguments include:

- copies are made as part of acquiring, cleaning and training on datasets
- commercial models can be built from copyrighted work without permission
- scale changes the economic effect
- generated substitutes can compete with the same creators whose work helped train the system
- style imitation can appropriate professional identity even where copyright does not protect style as such
- opt-out systems put an unrealistic monitoring burden on creators
- a licensing market is possible and is already emerging in sectors such as music

## 5.4 Current legal/policy position is jurisdiction-specific

### United States

The US Copyright Office published Part 3 of its AI report in pre-publication form in May 2025 on generative-AI training. It treats fair-use analysis as fact-specific rather than declaring all training lawful or unlawful.

The US legal landscape is also being shaped by litigation and settlements. This makes categorical statements unsafe.

### European Union

The EU's AI Act now requires providers of covered general-purpose AI models to:

- implement a copyright policy
- publish a sufficiently detailed summary of training content

The European Commission's mandatory template requires information about categories of data and sources, including scraped online sources. The obligation applies to covered models placed on the EU market from 2 August 2025, with transitional timing for older models.

This is primarily transparency/compliance infrastructure; it does not by itself resolve every underlying copyright dispute.

### Australia

Australia's Attorney-General's Department operates the Copyright and Artificial Intelligence Reference Group.

As of the department's 2025 policy update, the government was examining:

- licensing arrangements
- certainty around copyright in AI-generated material
- lower-cost enforcement options

The department also stated that the government was **not considering a text-and-data-mining exception** in Australian copyright law.

This makes Australia especially important for the book's likely readership: importing US “fair use” explanations into an Australian chapter without qualification would be misleading.

### United Kingdom

The UK has had intense policy debate about AI training and copyright. A House of Lords Communications and Digital Committee report published 6 March 2026 strongly criticised approaches it saw as weakening creator protection.

The eventual chapter should present the UK as contested and evolving, not as settled.

---

# 6. Is AI replacing artists?

The question is too broad to answer at the occupation level without qualification.

## 6.1 Substitution can happen at task level before occupation level

Examples:

- A small company may generate a temporary illustration instead of commissioning one.
- A YouTuber may generate background music instead of licensing a library track.
- A marketing team may make internal concept art rather than hiring an external illustrator for ideation.
- A designer may use AI to produce initial layout variants.
- A publisher may experiment with AI narration rather than a human narrator for low-budget material.

These are genuine substitutions even if the occupation continues to exist.

## 6.2 Complementarity also occurs

Examples:

- illustrators use generative tools for ideation but redraw the final
- filmmakers use AI for previs rather than replacing production
- musicians use AI for demos or isolated sound design
- writers use AI to test alternatives but retain authorship and revision
- designers use generative fill to accelerate routine image editing

## 6.3 Evidence on creative-worker income must be handled carefully

Creator organisations report lost commissions and declining income. For example, a January 2026 Society of Authors-led report based on evidence from more than 10,000 creators reported substantial impacts across authors, illustrators and other creative professions.

This is important stakeholder evidence, but it should not be presented as a random-sample estimate of all creators. Organisations representing creators are likely to attract respondents with strong experiences and interests in the issue.

Similarly, the CISAC/PMP Strategy study projects significant revenue at risk by 2028 in music and audiovisual sectors. It is an industry-commissioned economic forecast, not an observed outcome. Its assumptions should be signposted.

## 6.4 A strong real-world example: music uploads vs actual listening

Deezer reported in July 2026 that:

- roughly 90,000 fully AI-generated tracks were arriving per day
- these exceeded 50% of new uploads at peak in June 2026
- fully AI-generated music accounted for only around 1–3% of actual streams
- Deezer excluded AI-detected tracks from algorithmic recommendations and editorial playlists

The finding is from Deezer itself and should be attributed to the company.

### Why this example is useful

It demonstrates that:

> **Lower production cost can flood a market with supply without proving equivalent audience demand.**

That is a much more useful economic lesson than “AI music is replacing musicians.”

---

# 7. Does AI kill creativity?

This is the area where empirical research can materially improve the chapter.

## 7.1 Evidence for short-term creative assistance

### Doshi & Hauser, Science Advances (2024)

Online experiment with **293 writers** producing eight-sentence stories.

Conditions:

- human only
- access to one generative-AI idea
- access to up to five generative-AI ideas

Findings included:

- AI access improved average novelty/usefulness ratings
- benefits were especially strong for participants with lower baseline creativity scores
- stories produced with AI assistance became more similar to one another
- evaluators later imposed an “ownership penalty” when told that writers had AI assistance

The study itself cautions that it used typical study participants rather than professional writers and a constrained microfiction task.

### Lee & Chung, Nature Human Behaviour (2024)

Across five experiments, participants used ChatGPT for creative everyday and innovation tasks. The researchers found improved average creativity relative to no technology or conventional web search.

### Meincke, Nave & Terwiesch, Nature Human Behaviour (2025)

A follow-up analysis argued that ChatGPT assistance can improve individual ideas while reducing diversity across a pool of brainstormed ideas.

## 7.2 The trade-off is editorially valuable

A careful synthesis:

> Generative AI may improve the quality of what one person produces in a constrained task while making many people's outputs more alike.

This is compatible with the chapter's existing over-reliance theme.

## 7.3 Potential mechanisms

### Anchoring / fixation

The first plausible AI answer can become a cognitive anchor. Instead of searching a broad idea space, the user edits or branches from what the system proposed.

### Distributional convergence

Many people using the same or similar models may draw from a similar statistical distribution of likely ideas. Even if each output is technically different, the conceptual range can narrow.

### Skill offloading

If a person repeatedly delegates ideation rather than practising it, some underlying skills may be exercised less. Long-term causal evidence is still limited; this should be presented as a concern to investigate, not an established fact.

### Capability equalisation

AI may disproportionately help people who are less skilled at a particular constrained creative task. That can broaden participation and lower barriers.

### Increased iteration

Reducing the cost of drafts may allow users to explore more possibilities. Whether that produces greater creativity depends on whether they actually explore or simply accept the first plausible result.

---

# 8. Authenticity and authorship

“Authentic” can mean several things:

- made entirely by a human
- reflecting a person's lived experience
- reflecting a person's intention
- transparently describing the process used
- not impersonating someone
- not pretending synthetic material is documentary evidence
- created within the norms of a particular community

The chapter should avoid pretending these are the same.

A photographer using autofocus is still widely treated as authoring the photograph. A writer using spell-check is still the writer. Generative AI complicates the boundary because it can determine larger amounts of expressive content.

### Useful continuum

1. **Tool assistance:** spelling, noise removal, colour correction.
2. **Transformation:** generative fill, object removal, rewrite suggestions.
3. **Co-generation:** AI proposes substantial passages, visuals, melodies or shots that a human selects and edits.
4. **Prompt-led generation:** most expressive content is determined by the model from a short instruction.
5. **Automated generation at scale:** outputs are produced with little case-by-case human creative decision.

This continuum is more useful than asking whether a work is simply “AI” or “human.”

---

# 9. Copyrightability of outputs

The US Copyright Office's January 2025 Part 2 report is one of the clearest primary sources.

It concluded that:

- copyright protects human-authored expression
- AI assistance does not automatically disqualify a work
- prompts alone generally do not give the user authorship of the generated expression
- perceptible human-authored material can remain protected
- creative selection, arrangement or modification of AI material may be protectable
- analysis is case-specific

## Beginner distinction

A tool's terms may say “you own the output,” but that is a contract between the user and the company. It does **not** guarantee that copyright law recognises the entire output as copyrightable.

This distinction is extremely important for the Chapter 8 “Watch Out” callout.

---

# 10. Licensing and commercial use

Commercial use is not one universal AI rule.

Examples current as of September 2026:

- **Suno:** paid Pro/Premier users receive commercial-use rights for qualifying outputs; free/basic outputs are restricted to personal/non-commercial use. Suno explicitly warns that commercial rights do not guarantee copyright protection.
- **Runway:** states that users retain rights to content they generate and may use it commercially, subject to its terms.
- **Canva:** current AI Product Terms state that users generally own outputs as between themselves and Canva, subject to exceptions involving licensed content and applicable law; outputs may not be unique.
- **Adobe Firefly:** Adobe states that its own Firefly models are trained on licensed and public-domain content and that outputs from Adobe Firefly models are intended for commercial use. Some enterprise customers receive IP indemnification for eligible features.
- **OpenAI:** its terms state that, as between user/customer and OpenAI and to the extent permitted by law, the user/customer owns output; OpenAI also warns that outputs may not be unique.

### Editorial lesson

The chapter's existing warning should be strengthened from:

> “Check the tool's licensing terms.”

to something like:

> Check the tool's current terms, your subscription tier, whether third-party library content was incorporated, whether the output is eligible for legal protection in your jurisdiction, and whether it risks infringing somebody else's rights.

That is still beginner-friendly and much more accurate.

---

# 11. Provenance, disclosure and Content Credentials

## C2PA

The Coalition for Content Provenance and Authenticity (C2PA) maintains an open technical standard for cryptographically signed provenance information attached to digital media.

It can record information about:

- source
- editing history
- tools involved
- credentials/assertions

It should not be described as a universal “AI detector.”

### Limitations

- metadata can be stripped
- transformations can break provenance chains
- absence of a credential does not prove something is human-made
- presence of a credential does not prove the depicted event is true

OpenAI explicitly notes that metadata can be lost through resizing, screenshots and format transformations, which is why it has moved toward multiple provenance signals.

## Platform disclosure

YouTube requires creators to disclose meaningfully altered or synthetic content when it realistically depicts a real person, place or event in ways that did not occur.

This is a useful example of a distinction between:

- fictional/stylised AI use
- realistic synthetic media that may mislead viewers

---

# 12. Style imitation

The approved plan mentions theft but not style explicitly. It is worth adding to the research context.

The US Copyright Office's 2024 digital-replica report documented substantial concern from artists and authors about systems generating work “in the style of” living creators.

Key nuance:

- copyright generally protects particular expression rather than an abstract style
- that does not mean style imitation is ethically neutral
- false attribution, consumer confusion, publicity/personality rights and other doctrines may matter depending on facts and jurisdiction
- industrial-scale imitation can have economic effects even if “style” itself is not protected as a copyrighted work

This is an excellent example of where **legal** and **ethical** answers can diverge.

---

# 13. Bias and homogenisation in image generation

A 2025 *Scientific Reports* study documented racial and gender stereotyping in Stable Diffusion across professions and attributes.

For Chapter 8, the point does not need to become a general AI-bias section. The creative relevance is:

- “generate a doctor,” “generate a CEO,” or “generate a nurse” is not culturally neutral
- generated visual references can reproduce patterns embedded in training data
- repeated use of those outputs can feed stereotyped visual language back into creative work

This is another reason human creative judgement includes more than aesthetic preference.

---

# 14. Additional findings that could materially improve Chapter 8

## 14.1 Digital replicas and voice cloning

The current plan's “music” and “video” sections could briefly distinguish generating a fictional voice from cloning a recognisable person.

The US Copyright Office recommended federal protection against unauthorised realistic digital replicas in 2024.

This issue matters to:

- actors
- singers
- voice actors
- public figures
- ordinary people

## 14.2 Creative markets may become supply-saturated

AI radically reduces marginal production cost.

Deezer's upload numbers illustrate the consequence: enormous increases in supplied tracks without proportionate listening demand.

The creative problem may therefore shift from **ability to produce** to:

- discoverability
- trust
- reputation
- audience relationship
- curation
- provenance

## 14.3 Licensing may become a competitive differentiator

Adobe markets Firefly's licensed/public-domain training approach as commercially safer. Music companies are negotiating licensed AI systems.

This suggests a future in which users choose AI tools partly on **provenance of training data** and legal assurance, not only output quality.

## 14.4 Human-made may become a meaningful label

As generated material grows, “human-made,” “human-performed,” “human-written” or process transparency may become part of how creators signal value.

Do not state that this *will* happen universally; treat it as an emerging market possibility.

## 14.5 The most consequential change may be abundance, not quality

Historically, producing a passable illustration, song, voiceover or video required time, skill or money.

Generative AI changes that constraint.

When acceptable material becomes cheap, competitive advantage can move toward:

- taste
- trust
- story
- identity
- community
- curation
- distinctive experience
- reliable rights

That is a strong conceptual bridge to the chapter's core takeaway.
