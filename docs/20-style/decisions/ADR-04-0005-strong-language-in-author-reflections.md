# ADR-04-0005 — Strong Language in Author Reflections

## Status

Accepted (2026-10-03)

## Date

2026-10-03

## Area

Style

## Context

Five finished author reflections contain profanity, in Chapters 7, 9, 11 and 14 (listed in `docs/20-style/open-issues/OI-0001.md`). The author's bio in `publishing/books.json` uses strong language too. The style guide said nothing about profanity. Book 1 is for true beginners and may reach schools, libraries and workplace buyers, so the question was whether to keep, soften or mask these words.

## Decision

Keep the author's strong language exactly as written.

- Author reflections (`::: {.author-reflection}` blocks, ADR-04-0004) and the author bio are the author's own voice. They are not softened, masked or reworded.
- The narrative prose written around them stays free of profanity, consistent with the beginner-friendly tone in ADR-04-0001.
- The same rule applies to later reflections and later books, unless a new ADR changes it.

## Options Considered

### Option 1 — Keep as written (chosen)

Pros:

- An authentic voice. Several of these lines are the emotional hook of their reflection.
- Consistent with the author bio.

Cons:

- May narrow the audience for schools and corporate training, and may trigger retailer content flags.

### Option 2 — Soften

Pros:

- Suits every audience.

Cons:

- Loses the punch and authenticity of the author's voice.

### Option 3 — Mask (for example "f***ing")

Pros:

- Keeps the rhythm.

Cons:

- Can read as coy, and still trips some filters.

## Consequences

- Retailer listings may need an accurate content description, and editions for schools or workplaces would need their own decision.
- Website and video adaptations follow the same rule unless a platform's policy requires otherwise. Record any such exception as an ADR.

## Impacted Files or Areas

- `docs/20-style/style-guide.md` (Strong Language)
- Chapters 7, 9, 11 and 14 (no text changes)

## Related Open Issues

- `docs/20-style/open-issues/OI-0001.md` (resolved 2026-10-03)

## Review Notes

Decided by the author on 2026-10-03 during the OI and ADR close-out pass.
