# Copyright, Law, Policy, Licensing and Provenance

> Research notes, not legal advice.

# 1. Four questions that must not be collapsed together

## Question A — Was training lawful?

This concerns acquisition and use of existing works to develop a model.

## Question B — Is the output copyrightable?

A generated image, song, text or video may or may not qualify for copyright protection depending on human authorship and jurisdiction.

## Question C — What does the tool contract give the user?

A provider may assign contractual rights to outputs or permit commercial use.

## Question D — Could the output still violate someone else's rights?

Possible issues include:
- copyright infringement
- trademark
- passing off / consumer confusion
- publicity/personality rights
- privacy
- contractual restrictions
- defamation
- performer rights
- platform rules

A “yes” to C does not resolve A, B or D.

---

# 2. United States — Copyright Office AI work

## Part 1 — Digital Replicas (July 2024)

The US Copyright Office recommended new federal protection against knowingly distributing unauthorised digital replicas that realistically but falsely depict an individual.

Creative relevance:
- actors
- musicians
- voice actors
- synthetic endorsements
- cloned voices
- fake performances

The report also discusses artistic-style concerns, documenting arguments from creators who fear high-volume imitation.

## Part 2 — Copyrightability (January 2025)

Core findings:

- existing copyright principles can address AI-assisted work
- wholly AI-generated expressive material is not protected merely because a user prompted it
- AI use does not prevent copyright protection for human-authored parts
- human selection, coordination, arrangement or modification may be protected when sufficiently creative
- human-authored material perceptible in an AI-assisted output can remain protected
- prompts may themselves be copyrightable if sufficiently expressive, but that does not automatically confer copyright over generated output

### Beginner wording

> Using AI does not automatically erase copyright from a project. But asking an AI system to make something also does not automatically make you the legal author of everything it produces.

## Part 3 — Generative AI Training (pre-publication May 2025)

The Copyright Office examined:
- training on copyrighted works
- fair use
- licensing
- potential liability

The report is a policy/legal analysis rather than a universal declaration that all training is or is not fair use.

### Safe editorial approach

Describe the US position as:
- fact-specific
- actively litigated
- developing

---

# 3. European Union

## AI Act general-purpose AI obligations

From 2 August 2025, covered providers of general-purpose AI models placed on the EU market are subject to obligations including:

- technical documentation
- a policy to comply with EU copyright law
- a public summary of training content

The European Commission's public-summary template includes:
- data modalities
- broad scale information
- datasets
- scraped online sources
- user data
- synthetic data
- relevant processing information

For older models, transitional timing applies.

## What this does not mean

The training summary is not:
- a complete item-by-item list of every copyrighted work
- a blanket licence
- a final resolution of every copyright dispute

It is transparency infrastructure intended in part to help rightsholders assess and exercise rights.

---

# 4. Australia

## Copyright and Artificial Intelligence Reference Group (CAIRG)

The Attorney-General's Department established CAIRG to support discussion and policy development.

As of its October 2025 update, three priority areas included:

1. encouraging fair and legal avenues for use of copyright material in AI, including licensing
2. improving certainty over copyright law as applied to AI-generated material
3. exploring lower-cost enforcement options for AI-output infringement

The department also said the Australian government was **not considering a text-and-data-mining exception**.

## Why this matters for the book

The book is likely to reach Australian readers.

Do not tell them:
- “AI training is fair use”
- “scraping is legal”
- “copyright only applies if... [US test]”

without jurisdictional qualification.

Australia does not simply mirror US copyright doctrine.

---

# 5. United Kingdom

The UK debate has included proposals around text/data mining, rights reservation and transparency.

The House of Lords Communications and Digital Committee's **AI, copyright and the creative industries** report was published 6 March 2026.

The committee argued strongly that creator rights were under threat and criticised approaches that would shift burdens toward rightsholders.

A government response followed in May 2026.

## Editorial treatment

This is a policy dispute with strong institutional disagreement. Attribute positions.

Avoid presenting:
- the committee's view as neutral fact
- the government's view as settled law
- earlier consultation proposals as current final policy without checking again at publication time

---

# 6. Tool terms and commercial rights

Product terms change quickly. Any printed example should be date-stamped or framed as an example of **why terms matter**, rather than a permanent guarantee.

## OpenAI

OpenAI's published terms state that, as between the user/customer and OpenAI and to the extent permitted by law:
- user retains rights in input
- user/customer owns output
- OpenAI assigns any rights it has in the output
- outputs may not be unique

Important:
“Owns output” in a provider contract does not guarantee statutory copyright protection.

## Canva

Current AI Product Terms effective 26 June 2026 state:
- user generally owns output as between user and Canva, subject to law and licensed-content exceptions
- output may not be unique
- input/output remain user's responsibility
- removing provenance tags such as C2PA metadata is prohibited
- some functions use third-party technology providers

## Adobe Firefly

Adobe states:
- Firefly models are trained on licensed content such as Adobe Stock and public-domain content where copyright has expired
- it does not train Firefly on customer content
- Stock contributors are compensated through Adobe's contributor mechanisms/bonuses
- eligible enterprise customers can receive IP indemnification for specified Firefly features
- Firefly outputs can be used commercially, subject to terms

Important nuance:
Adobe also integrates third-party models in parts of the Firefly ecosystem; Adobe tells users they are responsible for determining whether partner-model output is appropriate for their project.

## Suno

Current Suno material distinguishes:
- free/basic generation: personal/non-commercial use
- paid Pro/Premier generation: commercial-use rights and user ownership as between user and Suno

Suno explicitly states copyright eligibility remains a separate legal question.

## Runway

Runway states that users retain rights to their generated material and may use it commercially, subject to its terms.

---

# 7. Training provenance as product differentiation

Adobe's licensing-first Firefly approach and emerging music licensing agreements show that training provenance is becoming a commercial feature.

Potential future consumer question:

> “What can this model make?” may increasingly be joined by “What was it trained on, and what assurances do I get if I publish the result?”

This is a meaningful development for beginners using AI professionally.

---

# 8. Music licensing — a concrete market transition

## UMG + Udio

Universal Music Group announced on 29 October 2025 that:
- its litigation with Udio had been settled
- the companies entered strategic agreements
- they planned a licensed AI music service
- the new technology would be trained on authorised/licensed music
- the agreement creates revenue opportunities for artists/songwriters

This should not be described as the entire music industry resolving the issue. Other disputes continued.

## Why it matters

This undermines a false binary:

- “AI companies must be free to train on everything”
versus
- “AI training must be prohibited”

Licensing systems provide a third mechanism:
- consent
- permission
- payment
- controlled usage

Whether licensing becomes technically/economically workable across all creative domains remains open.

---

# 9. C2PA and Content Credentials

## What C2PA is

C2PA develops technical standards for content provenance.

A Content Credential can provide cryptographically signed assertions about:
- origin
- edits
- tools
- identity/organisation where supported

## Adobe

Adobe automatically applies Content Credentials to assets where 100% of pixels are generated using Firefly's text-to-image features.

## OpenAI

OpenAI currently uses C2PA metadata and invisible watermarking for image-generation provenance. It also notes that metadata can be stripped or lost during transformations.

## Correct explanation

> Content Credentials are closer to a signed history card attached to a file than an AI lie detector.

## Limitations

- not universal
- metadata can disappear
- not every editor preserves it
- a valid credential does not certify that the *content* of an image depicts a true event
- absence of credentials does not prove human origin

---

# 10. YouTube synthetic-content disclosure

YouTube requires creator disclosure for meaningfully altered/synthetic content that appears realistic and:

- makes a real person appear to say/do something they did not
- alters a real event/place
- generates a realistic scene that did not occur

This can support a practical chapter note:

> A licence to use an AI tool is not the same as permission to publish without disclosure. Platforms can impose their own rules.

---

# 11. Artistic style

Copyright normally protects specific expression, not a general artistic style.

However, the US Copyright Office documented concerns about the economic and identity effects of high-volume AI style imitation.

Possible additional legal/ethical issues may include:
- false attribution
- trademark/branding
- passing off or consumer confusion
- rights of publicity/personality
- unfair competition
- contractual rules

These vary significantly by jurisdiction and facts.

## Editorial recommendation

Do not write:

> “It's legal to copy an artist's style.”

Better:

> “A style by itself is generally not protected in the same way as a specific copyrighted work, but an AI imitation can still raise other legal and ethical issues, especially if it copies protected elements, misleads people about authorship, or exploits a recognisable identity.”

---

# 12. Fast-moving areas to re-check before publication

- US AI-training litigation
- final status of US Copyright Office Part 3
- Australia CAIRG outcomes
- UK government copyright/AI reforms
- EU enforcement guidance
- major tool terms
- Suno/Udio music licences and litigation
- provenance standards
- platform AI-content labelling rules
- national rules on digital replicas / voice cloning
