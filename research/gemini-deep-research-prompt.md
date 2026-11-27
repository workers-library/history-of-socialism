# Gemini Deep Research prompt

Copy everything below the line into Gemini Deep Research.

---

You are refining a rigorous research and design report for a non-partisan educational project, *History of Socialism*. The report proposes a comprehensive, ten-axis political orientation assessment with a personalised report. Your job is **verification, critique and evidence-based refinement**, not promotion of the design.

Start by reading these files in the repository:

- `research/political-compass-comprehensive-report.md` — the consolidated report to refine.
- `research/political-compass-research.md` — the original five-axis research.
- `research/political-compass-validation-notes.md` — psychometric limitations and validation plan.
- `research/political-compass-ten-axis-expansion.md` — the proposed five additional axes and 100-item bank.
- `static/political-compass/js/data/axes.js`, `questions.js`, `traditions-left.js`, `traditions-other.js`, `resources.js` — the implemented dataset.
- `research/MASTER-STANDARD.md` — the project's editorial standard.

## What to do

1. **Verify every citation and factual claim.** For each source in the report, confirm author, title, year, publisher, DOI/URL, and what the source actually establishes. Mark each as: *verified from full text*, *verified from abstract/metadata only*, *preprint*, or *unverifiable*. Do not invent citations, page numbers, quotations or URLs. Do not treat Wikipedia as evidence.

2. **Check the dimensionality evidence.** Does published factor-analytic and VAA research support "more than one or two dimensions", and does it support any specific count such as five or ten? Identify which of the ten proposed axes are likely to collapse into others and what evidence would settle it. Distinguish reflective factors from formative indices.

3. **Audit the item bank.** Assess the 100 statements for neutral wording, leading or loaded language, double-barrelled claims, false dichotomies, vague quantifiers, negations, cultural assumptions and adequate coverage of ownership, allocation, redistribution, personal liberty, state coercion, institutional democracy, cultural values and international relations. Identify specific items to rewrite and explain why. Check that each axis has five items keyed to each pole and that agreement bias cannot inflate scores.

4. **Audit the tradition dataset.** For all 27 traditions, examine whether the provisional centre vectors and ranges are defensible from cited texts or scholarship. Flag arbitrary coordinates, missing subtraditions, name-based inferences, anachronism, and cases where internal diversity or historical variation is not represented. Distinguish doctrine, movement, party, state practice and later scholarship. Confirm that proximity is never presented as membership.

5. **Evaluate scoring, distance and uncertainty.** Review the `sum / 20 * 100` normalisation, the L1 total-gap ranking, band cut-offs, sensitivity analysis and coverage reporting. Are any numbers given more meaning than they support? Recommend improvements that avoid invented confidence percentages or probabilities of membership.

6. **Check the educational resources.** Verify titles, authors, dates and links. Note where resources explain a position versus challenge it. Identify important missing perspectives, especially non-English, non-Western, Indigenous and Global South scholarship, and debates between competing traditions.

7. **Check neutrality and ethics.** Flag any place where the report or data privileges one ideological tradition, equates ideological proximity with endorsement, treats an extreme variant as typical, or makes unsupported psychological or behavioural claims about respondents.

8. **Check the report specification.** Does the proposed report contain everything needed for an evidence-traceable publication: executive summary, navigable contents, per-dimension analysis, policy preferences, ideological comparisons, cross-dimensional analysis, per-item response evidence, reading recommendations, methodology/limitations, text equivalents for charts, print/PDF and structured data export? Identify what is missing or misleading.

9. **Find what is missing.** Identify significant political dimensions not covered by the ten axes, important scholarly literatures absent from the bibliography, and any recent (2025–2026) research that changes the recommendations.

## Constraints

- Cite real, verifiable sources. Prefer primary texts, peer-reviewed work, official datasets and publisher records. Use Wikipedia only for navigation.
- Clearly separate what a source shows from what the report infers.
- Do not present editorial placements as measurements, and do not claim the instrument is validated.
- Do not tell the reader which politics to adopt. Educational framing only.
- Where evidence is thin or contested, say so explicitly.

## Output format

Produce a revised, publication-ready markdown report with:

1. A short executive assessment: what is well founded, what is speculative, what should be removed.
2. A verification table: claim, source, verification status, issue, recommended change.
3. Section-by-section revised text for the consolidated report.
4. A prioritised change list: must fix, should fix, nice to have.
5. A revised bibliography with verification status.
6. A list of open questions and a concrete preregistered validation plan.

Be thorough but precise. Do not pad with generic praise or repetitive conclusions.
