#!/usr/bin/env python3
"""Check author dossiers and published profiles against the collection standard.

This is a mechanical check, not a historical judgement. It enforces the rules
that can be checked from the files alone: structure, source quarantine, tier
labels and internal links. Historical verification is recorded in each dossier.

Usage:
    python3 research/check-author-profiles.py
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BOOK = ROOT / "book-src"
DOSSIERS = ROOT / "research" / "authors"

PROFILE_SECTIONS = [
    "Biography",
    "Intellectual tradition",
    "Major contributions",
    "Analysis of capitalism",
    "Analysis of socialism",
    "Complete bibliography",
    "Recommended reading",
    "Selected lectures and interviews",
    "Intellectual influences",
    "Influence and legacy",
    "Criticisms and controversies",
    "Related thinkers",
    "Sources cited",
]

# Dossiers record evidence; only published profiles need the reading guide.
DOSSIER_SECTIONS = [s for s in PROFILE_SECTIONS if s != "Recommended reading"]

QUARANTINE = ("wikipedia.org", "goodreads.com", "scribd.com", "books.google")
TIERS = ("Primary Official", "Primary Theoretical", "Scholarly Secondary", "Empirical Dataset")

errors: list[str] = []
warnings: list[str] = []


def frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---\n"):
        return {}
    end = text.find("\n---\n", 4)
    if end < 0:
        return {}
    result: dict[str, str] = {}
    for line in text[4:end].splitlines():
        if ":" in line:
            key, _, value = line.partition(":")
            result[key.strip()] = value.strip()
    return result


def headings(text: str) -> list[str]:
    result = []
    for match in re.finditer(r"^##\s+(.+?)\s*$", text, re.M):
        title = match.group(1).strip()
        title = re.sub(r"^\d+[.)]\s*", "", title)
        result.append(title)
    return result


def check_quarantine(text: str, label: str) -> None:
    for domain in QUARANTINE:
        if domain in text.lower():
            errors.append(f"{label}: quarantined domain {domain}")


def check_links(text: str, label: str) -> None:
    for target in re.findall(r"\]\(/([^)]*)\)", text):
        slug = target.split("#")[0].strip("/")
        if not slug:
            continue
        if not (BOOK / f"{slug}.md").exists():
            errors.append(f"{label}: internal link to missing page /{slug}")


profiles = sorted(
    p
    for p in BOOK.glob("*.md")
    if p.name != "authors-and-traditions.md"
    and "Authors and Intellectual Traditions" in frontmatter(p.read_text(encoding="utf-8")).get("tags", "")
)
print(f"Profiles found: {len(profiles)}")

orders: dict[str, str] = {}
for path in profiles:
    order = frontmatter(path.read_text(encoding="utf-8")).get("order", "")
    if not order.isdigit():
        errors.append(f"profile {path.name}: order is not a number")
        continue
    if order in orders:
        errors.append(f"profiles {orders[order]} and {path.name}: duplicate order {order}")
    orders[order] = path.name

for path in profiles:
    label = f"profile {path.name}"
    text = path.read_text(encoding="utf-8")
    fm = frontmatter(text)
    for key in ("title", "description", "order", "last_updated", "tags", "status"):
        if key not in fm:
            errors.append(f"{label}: missing frontmatter field {key}")
    if fm.get("status") != "research-stage":
        warnings.append(f"{label}: status is not research-stage")
    hs = headings(text)
    for section in PROFILE_SECTIONS:
        if section not in hs:
            errors.append(f"{label}: missing section '{section}'")
    check_quarantine(text, label)
    check_links(text, label)
    if not any(tier in text for tier in TIERS):
        errors.append(f"{label}: no evidentiary tier labels in sources")
    if not re.search(r"\[← Contents\]\(/\)\s*·\s*\[Authors and Intellectual Traditions\]\(/authors-and-traditions\)", text):
        errors.append(f"{label}: missing collection navigation footer")

dossier_files = sorted(
    p for p in DOSSIERS.glob("*.md") if not p.name.endswith("-supplement.md")
) if DOSSIERS.exists() else []
print(f"Dossiers found: {len(dossier_files)}")

for path in dossier_files:
    label = f"dossier {path.name}"
    text = path.read_text(encoding="utf-8")
    hs = headings(text)
    for section in DOSSIER_SECTIONS:
        if section not in hs:
            errors.append(f"{label}: missing section '{section}'")
    check_quarantine(text, label)
    if "http" not in text:
        errors.append(f"{label}: no source URLs")
    if not re.search(r"could not (?:be )?verif|not verified|did not verify|not confirmed|facts not verified", text, re.I):
        warnings.append(f"{label}: no explicit unverified-facts statement")
    if not re.search(r"opened directly|URLs opened|sources opened|research record", text, re.I):
        warnings.append(f"{label}: no explicit record of which sources were opened")

print(f"Errors: {len(errors)}; warnings: {len(warnings)}")
for error in errors:
    print("ERROR", error)
for warning in warnings:
    print("WARN ", warning)
sys.exit(1 if errors else 0)
