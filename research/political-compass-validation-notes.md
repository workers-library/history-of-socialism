# Political compass: validation and improvement notes

**Scope.** Every URL below was fetched or queried through an API unless marked otherwise. No existing research file was changed. I downloaded no restricted dataset and ran no pilot: nothing here claims the instrument is validated.

## Executive summary: five changes

1. **Do not cite Röttger et al. (2024) as validation.** It releases 62-item *model completions*, not human responses, and reports no factor analysis or reliability; its finding is that the PCT is unstable under prompting. I found no open human PCT response dataset.
2. **Treat the five axes as a hypothesis.** Approval-voting data cannot be reduced to one or two dimensions; MFQ data do not cleanly yield five either. More dimensions are plausible, but five are not established for these items.
3. **Rewrite the weakest items before piloting.** Several are double-barrelled, use "even when"/"whatever"/"as much as they can", or rely on "not"/"without". Name a concrete institution and mechanism.
4. **Stop saying "percentage similar".** The number rescales Euclidean distance by a theoretical maximum never approached in five dimensions. Show axis gaps and a rank; if a number is kept, use L1 or angular distance and call it illustrative.
5. **Pre-register a pilot (~300 people)** and report alpha/omega, test–retest ICC with a confidence interval, inter-axis correlations and an EFA/CFA comparison. Until then keep the "teaching device, not a validated test" warning prominent.

## 1. Open datasets with item-level responses

**Röttger et al. 2024.** Paper: https://aclanthology.org/2024.acl-long.816.pdf (downloaded and read); linked repo: https://github.com/paul-rottger/llm-values-pct (README and `data/` inspected via GitHub API). The paper describes 62 PCT propositions in six blocks, four response options and **no neutral option** (§2). The repo is CC-BY-4.0; `data/` holds `annotations`, `completions`, `prompts`, `templates` — language-model outputs, not human responses. Empirically, answers change under forced choice, under minimal paraphrases (14 of 62 items for Mistral, 23 for GPT-3.5 flip), and between multiple-choice and open-ended settings; paraphrase shifts exceeded the website's Biden–Trump gap. There are no loadings, internal consistency or test–retest figures. Its Appendix E is a convenient published item list, but it cannot calibrate our instrument.

**World Values Survey.** Wave 7: https://www.worldvaluessurvey.org/WVSDocumentationWV7.jsp ; metadata https://catalog.ihsn.org/catalog/11552 ; conditions https://worldvaluessurvey.org/AJDownloadLicense.jsp . IHSN describes 64 surveys, 2017–2022, over 80,000 respondents, individual records, SPSS/Stata/SAS/R/CSV, "cost: none". The download page nonetheless requires a registration form and agreement to non-profit use, correct citation and **no redistribution**; some WVS news items say "no registration", but the licence page I fetched still asks for it. I did not download the files. WVS items are broad values questions, not PCT propositions; useful for external validity checks, not for calibrating our 30 statements.

**Moral Foundations Questionnaire.** The clearest open item-level file verified: German MFQ-2 validation dataset, https://www.psycharchives.org/handle/20.500.12034/18032 (DOI 10.23668/psycharchives.22700), N = 1,171, 36 MFQ-2 items plus six scores, three ideology items, religiosity and personality; `final_dataset.csv` is "Sharing Level 0 (Public Use)", **CC-BY 4.0**, with codebooks and code. I read the landing page, not the CSV. https://osf.io/nwpb6/ ("MFQ-r") is a public OSF project whose API metadata promises open development data but assigns **no licence**; I did not inspect its files. Atari et al. (2023) say MFQ-2 data are on OSF (preregistration https://osf.io/3hefa), but I could not verify a direct item-level URL. The Hugging Face dataset https://huggingface.co/api/datasets/lukaspetersson/ThePoliticalCompassTest contains only a text file of questions, with no licence tag.

**Conclusion:** I found no openly licensed dataset of human item-level Political Compass responses. Validation requires collecting our own pilot data.

## 2. What the evidence says about dimensionality

The evidence supports "more than one or two" but not "exactly five". Alós-Ferrer and Granić (2015) conclude from two large German approval-voting experiments that political landscapes are "inherently multidimensional and cannot be reduced to a single left-right dimension, or even to a two-dimensional space" (abstract: https://hdl.handle.net/1765/111247). That is evidence against one line, not for a count above two.

Zakharin and Bates (2021, full text https://pmc.ncbi.nlm.nih.gov/articles/PMC8535174/) found that five- and two-factor MFQ models repeatedly failed fit criteria (their five-factor CFI = .724, RMSEA = .074; two-factor CFI = .699). A well-fitting model needed seven foundations, binding/individualising factors, a left–right "tilt" and a **general acquiescence factor** (CFI = .963, RMSEA = .033), replicated in four samples. Theory's factor count is not a psychometric result, and response styles must be modelled, not assumed away.

In VAA research, van der Linden and Dufresne (2017) propose dimensionality reduction to evaluate aggregation algorithms lacking a reliability/validity framework (abstract via https://api.openalex.org/works/https://doi.org/10.1080/17457289.2016.1268144 ; full text paywalled). Germann et al. (2015, https://doi.org/10.1057/ap.2014.3) argue for dynamic scale validation — axes derived from data, not asserted. Azevedo et al. (2026) found low overlap among ideology measures (mean Jaccard .20 inductive, .33 deductive) and that results change with the instrument.

Applied here: six items on ownership, prices, tax and services may split into "ownership" and "redistribution"; the Authority block samples speech, detention, search, association and press, so one reflective factor may fit poorly — it is closer to a **formative index** of coercion, where content coverage matters more than alpha. Report inter-axis correlations; if two axes correlate around .8, the five-coordinate picture overstates what was measured. The five axes are conceptually attractive and plausible, **not yet empirically supported**.

## 3. Scale design: changes to the 30 items

Krosnick's chapter (https://web.stanford.edu/dept/communication/faculty/krosnick/docs/2009/2009_handbook_krosnick.pdf, text extracted) gives the rules: simple, unambiguous words; "specific and concrete (as opposed to general and abstract)"; exhaustive, mutually exclusive options; no leading or loaded wording; "ask about one thing at a time (avoid double-barreled questions)"; avoid negations. Pasek and Krosnick (2010, https://calgara.github.io/Pol157_Spring2019/Pasek%20&%20Krosnick%202010.pdf) add that 10–20% agree with a statement *and its opposite*; balanced keys merely move acquiescers to the midpoint; reversals work only if equally extreme, and negations are cognitively burdensome.

**Scale points and midpoint.** Five points is defensible: Lissitz and Green found reliability rising 2→3→5 points then flat at 7/9/14; Pasek and Krosnick report five points suit unipolar, seven bipolar ratings; a 2026 open study (https://pmc.ncbi.nlm.nih.gov/articles/PMC13275763/) found diminishing returns around seven to eight options, and Preston and Colman (2000) favoured seven to ten. Relabel "Neutral" as "Neither agree nor disagree" (it currently conflates midpoint with "no opinion") and keep scoring it 0. A midpoint invites satisficing; removing it misrecords genuine neutrals — document the choice.

**Critical items** (exact current text quoted; replacements are suggestions):

- "The government should own the major industries and utilities." — two domains, "major" undefined → "Essential network utilities should be publicly owned rather than privately owned."
- "Essential services such as healthcare and housing should be provided free at the point of use." — double-barrelled, funding unstated → "Healthcare should be paid for through taxes, with no charge to patients at the point of use."
- "People should be free to accumulate as much wealth as they can." — extreme, unanchored → "There should be no legal limit on how much wealth a person may own."
- "Taxes should be used to reduce large differences in income." — "large" undefined → "Taxes on higher incomes should fund transfers to lower-income households."
- "The state should be able to detain people it considers a security risk without a trial." — subjective actor, absolute means → "A person judged by a court to be a serious security risk may be detained without a criminal trial."
- "The media should be free to publish whatever it chooses, with no government censorship." — "whatever" and "no" → "Newspapers should be able to publish without prior government approval."
- "Strong family and community ties matter more than individual independence." — two objects → "People should give priority to family obligations over their own career plans."
- "Society should expect members to put the common good ahead of personal gain." — "common good" vague → "People taking public office should give up private financial interests that conflict with it."
- "Long-standing traditions should be preserved even when most people want change." — loaded "even when" → "Changes to established institutions should require a supermajority rather than a simple majority."
- "Changes to established institutions should be made slowly and carefully." — two unoperationalised adverbs → "Institutional changes should be phased in over at least five years."
- "Religious authorities should have a formal role in making laws." — "formal role" undefined → "Religious leaders should be given seats in the legislature."
- "National borders should be open to people fleeing poverty or war." — two claims → "People fleeing war should be allowed to enter and seek asylum."
- "We should help poorer countries even when it costs our own country money." — loaded framing, "poorer" undefined → "Our country should increase foreign aid even if taxes rise."
- "Each nation should be free to make its own decisions without outside interference." and "National identity should be protected from outside influence." — vague near-duplicates; keep one ("Other countries should not impose sanctions to change our laws") and replace the other.
- "People should be free to opt out of social traditions they do not share." and "Individuals should be free to live as they choose, provided they harm no one else." — redundant negative-pole Community items, both with negations; merge or replace one.

Across the set "without" appears in six items, and "not"/"no" in several more; the band labels ("Strongly Authoritarian" at ±60) have no empirical cut-offs. Balanced keying is sound in principle, but reverse items must be equally strong and negation-free; band labels should be marked as display conventions.

## 4. Scoring and similarity

`renderMatches()` uses `sim = 100 − (d / sqrt(5 × 200²)) × 100` with Euclidean `d`. This is neither probability nor percentage of agreement: the denominator is the box diagonal, which no realistic pair approaches, and distances concentrate in five dimensions. Berdoz et al. (2025 preprint, https://ar5iv.labs.arxiv.org/html/2505.13329) find normalised Euclidean similarity "mostly arbitrary" and distorted by the curse of dimensionality; their Swiss VAA data show L2 (Smartvote) is more exploitable by moderate answering than L1 (Wahl-O-Mat) or angular distance, which had better bias/calibration metrics without losing accuracy. Mahalanobis handled correlated axes but had the largest party bias.

Show the five axis gaps and a rank order first. If one number is kept, use normalised **L1** or **angular** distance, state what it is relative to (the seven profiles' distance distribution, not the box corner), and drop "percentage".

The deeper problem is provenance: the seven `PROFILES` vectors are asserted integers with no source, date, coder or uncertainty. Publish them as versioned hypotheses with the text interpreted, date, assigner and evidence, flagged provisional. Also, `scores()` divides by 12 and rounds, so one response step is about 8.3 points — integer output implies precision the items do not have. Keep unrounded means internally and show ranges.

## 5. A realistic validation plan

None of this has been done. A credible first study:

- **Pilot:** ~300 adults (about ten per item) from more than one source, with quotas on age, education and political interest; supports a first factor analysis, not population norms.
- **Freeze and preregister:** version the wording, keying and scoring; preregister five correlated axes versus a two-factor alternative; publish anonymised item-level data and code.
- **Internal consistency:** alpha and omega with 95% intervals and corrected item–total correlations; for a formative axis, report content coverage instead of treating low alpha as failure.
- **Test–retest:** at least 100 people after two to four weeks; report two-way mixed, absolute-agreement, single-measure ICC with 95% interval. Koo and Li (2016, https://pmc.ncbi.nlm.nih.gov/articles/PMC4913118/): <0.50 poor, 0.50–0.75 moderate, 0.75–0.90 good, >0.90 excellent, judged from the interval; check score drift.
- **Structure:** EFA on half the sample, CFA on the other; compare one-, two- and five-factor models with CFI/TLI ≥ .95, RMSEA ≤ .06 (criteria used by Zakharin and Bates); report inter-axis correlations and test an acquiescence factor.
- **External/known groups:** correlate axes with left–right self-placement and, where possible, MFQ-2; compare groups expected to differ on a named axis as a secondary check.
- **Invariance:** test configural, loading and intercept invariance before cross-language or cross-country comparison.
- **Claim discipline:** keep "self-report heuristic, not a validated test"; named traditions are editorial illustrations. No type labels from scores, and re-pilot after any wording change.

## 6. Provisional vectors used by the quiz

The quiz displays seven "nearest illustrative traditions". Their coordinates are **editorial hypotheses**, assigned by this project on 28 November 2026 (version 1), not estimates from data and not claims that any cited author endorsed those numbers. Each was read from the typologies in the main research note, kept deliberately approximate, and should be revised after a pilot.

| Profile | Economy | Authority | Community | Change | Scope | Basis and caveat |
|---|---:|---:|---:|---:|---:|---|
| Social democracy | −55 | −70 | −55 | 75 | 55 | Reformist socialism within constitutional liberties and a mixed economy; varies by party and country |
| Marxism–Leninism | −90 | 85 | 45 | 40 | 35 | Party-state model described by Brown (2013); progressive doctrine on social relations but socially conservative practice, and internationalist doctrine often conducted through states |
| Anarchism | −85 | −95 | 15 | 80 | 55 | Social anarchism and syndicalism following Franks (2013); individualist anarchism would be far lower on Community |
| Trotskyism | −90 | −60 | 30 | 85 | 80 | Revolutionary internationalist current opposed to party-state consolidation |
| Classical liberalism | 75 | −70 | −70 | 20 | 10 | Private property and civil liberty with individualist moral outlook; nineteenth-century and social liberalism differ |
| Conservatism | 40 | 60 | 55 | −70 | −60 | Private property, order, inherited norms and national attachment; national cases diverge |
| Fascism | 25 | 95 | 80 | −85 | −90 | Private property under strong state direction; placement is provisional and not a claim about economic doctrine alone |

Because the vectors are asserted, the quiz does not report a percentage similarity. It ranks profiles by the total absolute gap across the five axes (L1, range 0–1000), shows that gap and the five individual gaps, and labels the profiles provisional. This is a display convention, not a validated distance metric.

## Verified bibliography

- Alós-Ferrer, C., and G. D. Granić. 2015. "Political Space Representations with Approval Data." *Electoral Studies* 39: 56–71. https://hdl.handle.net/1765/111247 ; DOI https://doi.org/10.1016/j.electstud.2015.04.003 (abstract verified)
- Azevedo, F., D. Bolesta, A. Zapko-Willmes, P. Warncke, and J. Kim. 2026. "Measuring Ideology: Current practices, its consequences, and recommendations." https://measuring.ideology.flavioazevedo.com/ (report read)
- Berdoz, F., D. Brunner, Y. Vonlanthen, and R. Wattenhofer. 2025. "Recommender Systems for Democracy: Toward Adversarial Robustness in Voting Advice Applications." Preprint, https://ar5iv.labs.arxiv.org/html/2505.13329 (full text read; peer-review status not verified)
- Germann, M., F. Mendez, J. Wheatley, and U. Serdült. 2015. "Spatial maps in voting advice applications." *Acta Politica* 50: 214–238. https://doi.org/10.1057/ap.2014.3 (metadata verified; article text not read)
- Koo, T. K., and M. Y. Li. 2016. "A Guideline of Selecting and Reporting Intraclass Correlation Coefficients." *J Chiropr Med* 15: 155–163. https://pmc.ncbi.nlm.nih.gov/articles/PMC4913118/ (full text read)
- Krosnick, J. A., and K. Presser. 2009. "Question and Questionnaire Design." In *Handbook of Survey Research*. https://web.stanford.edu/dept/communication/faculty/krosnick/docs/2009/2009_handbook_krosnick.pdf (PDF extracted)
- Musa, N. S., S. M. Müller, and F. R. Hopp. 2026. MFQ-2 German validation dataset. https://www.psycharchives.org/handle/20.500.12034/18032 ; DOI https://doi.org/10.23668/psycharchives.22700 (landing page read)
- Pasek, J., and J. A. Krosnick. 2010. "Optimizing Survey Questionnaire Design in Political Science." https://calgara.github.io/Pol157_Spring2019/Pasek%20&%20Krosnick%202010.pdf (PDF extracted)
- Preston, C. C., and A. M. Colman. 2000. "Optimal number of response categories in rating scales." *Acta Psychologica* 104: 1–15. DOI https://doi.org/10.1016/S0001-6918(99)00050-5 (Crossref metadata; full text paywalled; findings quoted via Yang et al.)
- Röttger, P., V. Hofmann, V. Pyatkin, M. Hinck, H. R. Kirk, H. Schütze, and D. Hovy. 2024. "Political Compass or Spinning Arrow?" *ACL 2024*, 15295–15311. https://aclanthology.org/2024.acl-long.816.pdf ; https://github.com/paul-rottger/llm-values-pct (both inspected)
- van der Linden, C., and Y. Dufresne. 2017. "The curse of dimensionality in Voting Advice Applications." *JEPOP* 27: 9–30. DOI https://doi.org/10.1080/17457289.2016.1268144 ; abstract https://api.openalex.org/works/https://doi.org/10.1080/17457289.2016.1268144 (full text not obtained)
- World Values Survey. https://www.worldvaluessurvey.org/WVSDocumentationWV7.jsp ; https://catalog.ihsn.org/catalog/11552 ; https://worldvaluessurvey.org/AJDownloadLicense.jsp (fetched; data not downloaded)
- Yang, W.-H., Y.-T. Sung, and Y.-T. Chou. 2026. "How continuous is continuous enough?" *Behavior Research Methods* 58:200. https://pmc.ncbi.nlm.nih.gov/articles/PMC13275763/ (full text read)
- Zakharin, M., and T. C. Bates. 2021. "Remapping the foundations of morality." *PLoS One* 16(10): e0258910. https://pmc.ncbi.nlm.nih.gov/articles/PMC8535174/ (full text read)

## Verification limits

Not fully verified: van der Linden and Dufresne full text (403; abstract only); Preston and Colman full text (Crossref metadata plus secondary summary); a Wiley Likert-scale guide (403); Atari et al.'s direct OSF data URL; the exact OSF data URL for Zakharin and Bates; file-level contents and licence of OSF `nwpb6`; actual WVS microdata. I found no evidence of an open human PCT response dataset — a search result, not proof none exists.
