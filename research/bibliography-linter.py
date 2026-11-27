#!/usr/bin/env python3
"""Enforce the four evidentiary tiers across the verified bibliographies.

Checks per bibliography pair:
  1. Every BibTeX entry has exactly one allowed tier keyword.
  2. Every Markdown entry has one tier tag.
  3. No quarantined source (tertiary encyclopedia, catalog stub, op-ed).
  4. BibTeX keys match the Markdown keys.

Warnings flag PDF-only endpoints and aggregator URLs: real endpoints, but not
parsed in this check and therefore not evidence that a passage was read.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PAIRS = [
    ('Parts I-III', ROOT / 'BIBLIOGRAPHY_PARTS_I_III.md', ROOT / 'parts_i_iii.bib'),
    ('Parts IV-XVII', ROOT / 'BIBLIOGRAPHY_PARTS_IV_XVII.md', ROOT / 'parts_iv_xvii.bib'),
]

TIERS = {
    'Empirical Dataset',
    'Primary Official',
    'Primary Theoretical',
    'Scholarly Secondary',
}

QUARANTINE = ('wikipedia.org', 'goodreads.com', 'scribd.com', 'suara.com', 'books.google')
AGGREGATORS = ('humy.ai',)

errors = []
warnings = []

for label, md_path, bib_path in PAIRS:
    if not md_path.exists() or not bib_path.exists():
        errors.append(f'{label}: missing file')
        continue
    bib_text, md_text = bib_path.read_text(), md_path.read_text()

    bib_entries = re.findall(r'@(\w+)\{([^,]+),(.*?)\n\}', bib_text, re.S)
    bib_keys = set()
    for kind, key, body in bib_entries:
        key = key.strip()
        if key in bib_keys:
            errors.append(f'{label} {key}: duplicate BibTeX key')
        bib_keys.add(key)
        tiers = [v.strip() for v in re.findall(r'keywords\s*=\s*\{([^}]*)\}', body)
                 for v in v.split(',') if v.strip() in TIERS]
        if len(tiers) != 1:
            errors.append(f'{label} {key}: expected exactly one tier, found {tiers}')
        for domain in QUARANTINE:
            if domain in body:
                errors.append(f'{label} {key}: quarantined source {domain}')
        url_m = re.search(r'url\s*=\s*\{([^}]*)\}', body)
        if url_m:
            if url_m.group(1).lower().endswith('.pdf'):
                warnings.append(f'{label} {key}: PDF endpoint, not parsed here')
            for domain in AGGREGATORS:
                if domain in url_m.group(1):
                    warnings.append(f'{label} {key}: aggregator URL, verify at holding institution')

    md_entries = re.findall(r'^\* \*\*`\[([^\]]+)\]`\*\* `\[([^\]]+)\]`', md_text, re.M)
    md_keys = set()
    for key, tier in md_entries:
        if key in md_keys:
            errors.append(f'{label} {key}: duplicate Markdown key')
        md_keys.add(key)
        if tier not in TIERS:
            errors.append(f'{label} {key}: invalid tier {tier}')

    for key in sorted(md_keys - bib_keys):
        errors.append(f'{label} {key}: in Markdown but not BibTeX')
    for key in sorted(bib_keys - md_keys):
        errors.append(f'{label} {key}: in BibTeX but not Markdown')
    for domain in QUARANTINE:
        if domain in md_text:
            errors.append(f'{label}: Markdown contains quarantined domain {domain}')

    print(f'{label}: BibTeX {len(bib_entries)}, Markdown {len(md_entries)}, '
          f'keys matched {len(bib_keys & md_keys)}')

print(f'Errors: {len(errors)}; warnings: {len(warnings)}')
for e in errors:
    print('ERROR', e)
for w in warnings:
    print('WARN ', w)
sys.exit(1 if errors else 0)
