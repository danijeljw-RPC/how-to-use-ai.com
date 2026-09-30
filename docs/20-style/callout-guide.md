# Callout Guide

Use callouts to highlight the handful of things in a chapter that genuinely deserve a visual break — not as a substitute for writing connected prose. See [[ADR-04-0002-book-01-structure-and-callout-standard]] for the reasoning.

Aim for roughly one to three callouts per chapter, not one per section. If every section has its own callout, the chapter has stopped using callouts to highlight and started using them as scaffolding.

## Callout Format

Use this Markdown pattern:

```markdown
> **Callout Type:** Callout text.
```

Never wrap a callout in `---` dividers. It sits directly in the surrounding prose.

## Baseline Callout Types

There are four. Every chapter should draw from this same small set, the way an O'Reilly or Dummies book reuses the same few box types throughout.

### Key Idea

The one thing the reader should remember from a section. Use once, maybe twice, per chapter — not after every sub-point.

```markdown
> **Key Idea:** AI is not magic. It is pattern recognition at scale.
```

### Try This

A small, concrete action the reader can take right now.

```markdown
> **Try This:** Ask an AI tool to explain a topic you already understand, then check what it gets right and wrong.
```

### Watch Out

A risk, limitation, or common misconception — including what used to be a separate "Myth vs Reality" type. Write the myth and the reality as part of the callout body rather than a table.

```markdown
> **Watch Out:** It's tempting to think AI "knows" things the way a person does. It doesn't — it predicts a likely response from patterns, which is why confident-sounding answers can still be wrong.
```

### Recap

One per chapter, at the end, summarising the chapter in a few sentences.

```markdown
> **Recap:** AI systems look for patterns, make predictions, and can still be wrong. Knowing that is most of what you need to use them well.
```

## Retired Callout Types

**Plain English**, **Author Note**, **Reflection**, and **Example** are no longer standalone callout types. Their content moves into the prose instead of a box:

- A **Plain English** translation becomes a normal sentence at first use of a term, not a boxed aside.
- An **Author Note** becomes a first-person aside in the running text, or the personal reflection placeholder below if it's a story to add later.
- A **Reflection** prompt becomes a closing question inside the Recap, or is dropped if a reflection placeholder already does that job.
- An **Example** becomes a normal worked example in the body. Chapters should be full of concrete examples throughout — not examples confined to a special box.

## Personal Reflection Placeholders

Use:

```markdown
> [Author reflection placeholder: Add a short personal example or story here.]
```

## Diagram Placeholders

Use:

```markdown
> [Diagram placeholder: Describe the diagram to be added here.]
```
