# Standard for author research profiles

This document governs the **Authors and Intellectual Traditions** collection. It
is subordinate to `research/MASTER-STANDARD.md`: nothing here relaxes the
book's rules on evidence, quotation, attribution or prose. Where this document
adds a rule, it applies to author profiles and their research dossiers only.

## Purpose

The historical chapters explain what happened. The author collection explains
what particular thinkers argued about why it happened, how they disagree, and
what can be said about their claims with evidence. It is not a hall of fame and
not a ranking of political loyalty. Authors are included because their work
changes how the evidence can be read.

A profile describes a person's arguments. It does not convert those arguments
into established historical fact. A polemical claim by Parenti, Losurdo or
Chomsky is reported as their claim, with the evidence they used and the
objections made against it. Where a writer is a professional historian or
economist, their method and their data are described as well as their
conclusion.

## Status and scope

This collection is a research-stage expansion. `MASTER-STANDARD.md` says that
chapter expansion should wait on outstanding verification work; the decision to
open this collection is a deliberate exception recorded here. Each profile is
marked `research-stage` in its frontmatter until its citations have been
checked against opened sources.

Authors are added in phases. The current phase is the first 25 names in the
editorial priority list supplied for this collection, beginning with Michael
Parenti. A profile that exists is linked from the collection index; authors
still to be researched are listed there as planned, not as if their pages
existed.

## Research dossiers

Research is done first, in a single Markdown dossier per author under
`research/authors/<slug>.md`. The dossier is the evidence record from which the
published profile is written. It must:

1. Use primary sources owned by the topic: the author's own books, essays,
   interviews, lectures and archives; publisher and journal records for works
   and dates; institutional records for biographical facts. A secondary study
   is used only to locate or interpret primary material, and is labelled as
   such.
2. Cite every factual claim and every quotation to a source that was opened,
   with a stable URL. Say which sources were opened directly and which were
   checked only as endpoints.
3. Use the four evidentiary tiers of the master bibliography: **Empirical
   Dataset**, **Primary Official**, **Primary Theoretical**, **Scholarly
   Secondary**. Tertiary catalog entries, encyclopedias and opinion pieces do
   not qualify as evidence. The quarantine in `research/bibliography-linter.py`
   applies: Wikipedia, Goodreads, Scribd and Google Books are not evidence.
4. Record uncertainty explicitly. If a date, title, quotation or influence
   cannot be confirmed, write that it was not confirmed. Do not fill the gap.
5. Follow the prose standard in `MASTER-STANDARD.md`: plain English, defined
   technical terms, connected paragraphs, no generic AI phrasing, no invented
   detail.

## Published profile structure

Every published profile uses the same twelve sections, in this order. A
section may be short, but it is not silently omitted; if evidence is lacking,
the section says so.

1. **Biography** — background, education and political development, with dates
   that have been checked.
2. **Intellectual tradition** — affiliations and disputes, including where the
   author rejected a label applied to them.
3. **Major contributions** — the arguments and concepts the author introduced
   or made influential, stated in plain language.
4. **Analysis of capitalism** — exploitation, class power and the mechanisms
   the author thought sustained capitalism.
5. **Analysis of socialism** — the institutions the author preferred, and what
   they expected those institutions to do. A writer who wrote no blueprint is
   described as such.
6. **Complete bibliography** — books, essays and articles with publication
   dates. Titles and dates come from publisher or author records where
   possible. This is a list, and is one of the places where bullets are
   appropriate.
7. **Recommended reading** — a short annotated list of the three to five works
   that best represent the author's argument, with one plain-English line on
   what each contributes and why it was chosen. Every title must already be in
   the complete bibliography or the dossier; annotations restate the author's
   own argument rather than adding new claims. This section is deliberately
   separate from the complete bibliography and from the tiered source list.
8. **Selected lectures and interviews** — only verified audiovisual material,
   with host and date. Access limits are stated.
9. **Intellectual influences** — thinkers who shaped the work, with evidence
   from the author's own writing or interviews rather than inference.
10. **Influence and legacy** — subsequent movements and debates, with sources.
11. **Criticisms and controversies** — factual disputes, theoretical objections
    and scholarly criticism, including criticism from writers within the same
    tradition.
12. **Related thinkers** — connections and disagreements, linked to other
    profiles where those exist.
13. **Sources cited** — the opened sources, grouped by evidentiary tier, with
    URLs. This is the audit trail for the profile.

## File conventions

- Manuscript pages live in `book-src/<slug>.md` with frontmatter fields
  `title`, `description`, `order`, `last_updated`, `tags` and `status:
  research-stage`.
- Tags use the existing scheme. The collection tag is
  `Authors and Intellectual Traditions`, paired with a tradition tag such as
  `Anti-Imperialist Thought` or `Marxist Political Economy`.
- Every profile ends with `[← Contents](/)` and a link to the collection index.
- The collection index is `book-src/authors-and-traditions.md`. It is linked
  from `book-src/index.md` and `book-src/contents-by-part.md`.
- The published site is built from `book-src/` with `research/build-site.py`.
  Do not hand-edit files under `docs/`; they are generated output.

## Relations to other collections

The same architecture can hold later collections for critiques of capitalism,
economic alternatives, primary texts, and lectures. A profile may point to a
historical chapter that already covers the person (Rodney, Cabral, Nkrumah and
others). In that case the profile explains the argument and the chapter tells
the history; neither duplicates the other.
