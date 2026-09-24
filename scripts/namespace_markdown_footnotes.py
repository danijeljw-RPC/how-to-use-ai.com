#!/usr/bin/env python3
"""Give a Markdown file's footnote identifiers a document-unique prefix."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


FOOTNOTE_PATTERN = re.compile(r"\[\^([^\]\s]+)\]")


def namespace_footnotes(markdown: str, namespace: str) -> str:
    safe_namespace = re.sub(r"[^a-zA-Z0-9_-]+", "-", namespace).strip("-")
    if not safe_namespace:
        raise ValueError("Footnote namespace must contain a letter or number")
    return FOOTNOTE_PATTERN.sub(
        lambda match: f"[^{safe_namespace}-{match.group(1)}]", markdown
    )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("markdown_file", type=Path)
    parser.add_argument("namespace")
    arguments = parser.parse_args()
    source = arguments.markdown_file.read_text(encoding="utf-8")
    sys.stdout.write(namespace_footnotes(source, arguments.namespace))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
