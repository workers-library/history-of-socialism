# The political compass: a comprehensive research and design report

**Purpose.** This document is a consolidated briefing for refinement with Gemini Deep Research. It brings together four independently researched sections, the project's own research notes, and a description of the assessment system implemented in this repository. Treat everything here as a **research synthesis and design proposal**, not as validated psychometric science. Where a claim rests on a paywalled abstract, a preprint, or an earlier reading, the section says so.

**How to use this with Gemini Deep Research.** Ask it to: (1) verify every cited URL and bibliographic detail; (2) flag any claim that relies on a secondary summary rather than a primary or full-text source; (3) check whether newer research (2025–2026) changes the dimensionality, item-design or distance-metric recommendations; (4) test the proposed ten-axis structure against published factor analyses and identify which axes are likely to collapse; (5) audit the provisional tradition placements for documentary support and internal diversity; (6) suggest a preregistered pilot and analysis plan; (7) identify gaps in the educational resource list, especially non-English and non-Western scholarship. Do not allow it to replace editorial caveats with confident claims of measurement.

**Contents**

1. [History and taxonomy of political-compass models](#history-and-taxonomy-of-political-compass-models)
2. [Methodology, psychometrics and honest limits](#methodology-psychometrics-and-honest-limits-of-a-political-compass)
3. [Political traditions and ideological proximity](#political-traditions-ideological-proximity-and-the-danger-of-imposed-coordinates)
4. [What a comprehensive report should contain](#what-a-comprehensive-evidence-traceable-political-orientation-report-should-contain)
5. [Implementation in this repository](#implementation-in-this-repository)
6. [Open questions and known limitations](#open-questions-and-known-limitations)

---

## Executive synthesis

A political compass is a map made from choices: which distinctions matter, which items sample them, how answers become numbers, and how numbers are compared with named traditions. The historical models each erase something. The 1789 left–right line fuses property, authority, religion and nation. Eysenck separated radicalism from tough-mindedness but tied the second factor partly to personality. The Nolan Chart and the Political Compass turn much of politics into "freedom from government", with undisclosed or asserted scoring. The World Values Survey map describes societies' value climates, not a person's institutional politics. Moral Foundations Theory explains moral intuitions but says nothing about ownership or constitutional power.

Evidence supports *more than one or two dimensions* but does not establish any exact count. Five axes (Economy, Authority, Community, Change, Scope) preserve distinctions that two-axis charts lose; five further axes (Ecology, Governance, Religion, Representation, Justice) address additional divisions within socialist and nonsocialist traditions. All ten remain hypotheses. No openly licensed dataset of human item-level Political Compass responses was found, and the widely cited Röttger et al. (2024) dataset contains language-model completions, not human answers.

An honest instrument therefore publishes its items, keying, scoring formula, distance metric and uncertainty; treats tradition placements as versioned editorial estimates with ranges; generates prose from answers rather than from personality archetypes; and states plainly when a respondent does not fit a listed tradition. Its report should be a navigable digital publication with per-dimension evidence, policy restatements, cross-dimensional analysis, educational reading lists and print/export support. Until a preregistered pilot exists, "self-report heuristic, not a validated test" is not modesty but accuracy.

---

## History and taxonomy of political-compass models

A political compass turns many positions into a few coordinates. The useful question is not how many axes it has, but what each preserves and what it erases. These models were built for different ends: describing a parliament, testing a psychological theory, advertising a philosophy, promoting a website, mapping national cultures, explaining moral judgment, and matching voters with candidates. Their coordinates are not interchangeable.

## 1. The 1789 seating convention and its limits

Left and right began as seating, not theory. Bienfait and van Beek (2014) locate the convention in the Salle des Menus-Plaisirs at Versailles, where the Estates-General met in 1789. As the deputies sat together as the National Assembly, Mirabeau's supporters gathered to the president's left, Malouet's to his right; revolutionaries increasingly took the left, defenders of the Ancien Régime the right. The royal-veto vote of 11 September 1789 made the split visible enough that many treat it as the convention's birth ([Bienfait & van Beek, 2014, *Journal of Social and Political Psychology* 2(1): 335–346, DOI 10.5964/jspp.v2i1.323](https://doi.org/10.5964/jspp.v2i1.323)).

The limit is in the origin: the labels named sides of a room, not one variable. Bienfait and van Beek conclude there is "no single content-based definition of left and right"; the polarity takes content from changing conflicts. Such a line cannot say whether what is ranked is property, clerical authority, monarchy, religion or class. Eysenck showed why: both extremes could share a tough-minded style while differing over doctrine ([Eysenck, 1954](https://hanseysenck.com/wp-content/uploads/2019/12/1954_eysenck_-_the_psychology_of_politics.pdf)), and approval-voting research found spaces reducible to neither one dimension nor two ([Alós-Ferrer & Granić, 2015](https://hdl.handle.net/1765/111247)). The convention survives because it is memorable, not complete.

## 2. Eysenck's two-factor model (1954, 1975)

Hans Eysenck's *The Psychology of Politics* (London: Routledge & Kegan Paul, 1954) was the first systematic factor-analytic attempt to replace the line with two axes. In his British samples, **Radicalism–Conservatism (R)** ran from patriotism, Sunday observance, capital punishment, the church and harsh treatment of criminals to communism, pacifism, birth control, divorce reform, sexual freedom and evolution. A second, orthogonal **Tough-mindedness–Tender-mindedness (T)** ran from the practical, materialist "empiricist" to the theoretical, idealist, religious temperament; Eysenck borrowed the names from William James. Crucially, T cuts across parties: communists and Trotskyites were tough-minded alongside semi-fascists, while religious socialists and conservatives were tender-minded. Both extremes of R could resemble each other in style ([primary text](https://hanseysenck.com/wp-content/uploads/2019/12/1954_eysenck_-_the_psychology_of_politics.pdf)).

Eysenck was candid about the weak point: the clustering was observed, but naming the clusters was a subjective interpretation; he also tied T to extraversion/introversion, making it partly a personality projection rather than a political programme. In 1975 he analysed 88 social-attitude questions on a London quota sample of 368 people. Ten correlated primary factors yielded **three** nearly orthogonal second-order factors: general conservative–radical ideology, socio-economic conservatism versus socialism, and tough-mindedness versus tender-mindedness. Middle-class respondents were more radical on general attitudes but more conservative on economic ones than working-class respondents ([Eysenck, 1975, "The Structure of Social Attitudes," *British Journal of Social and Clinical Psychology* 14: 323–331](https://hanseysenck.com/wp-content/uploads/2019/12/1975_eysenck_-_the_structure_of_social_attitudes_british_journal_of.pdf)). That is an early reason to keep economy, authority and social outlook apart.

## 3. The Nolan Chart and the Advocates' quiz

David Nolan conceived the chart in 1969 and published it in 1971 in *The Individualist*, a Society for Individual Liberty publication; he co-founded the Libertarian Party in 1971. The chart replaces the line with economic freedom and personal freedom, dividing a rotated diamond into Libertarian, Conservative, Progressive, Authoritarian and Moderate regions. Its scoring formula is published on the same page ([The Advocates, "The Nolan Chart"](https://www.theadvocates.org/nolan-chart/)).

In 1987 Marshall Fritz, founder of the Advocates for Self-Government, added ten statements — five personal, five economic — to create the World's Smallest Political Quiz. Answers are Agree (20), Maybe (10) or Disagree (0), giving 121 positions ([The Advocates, quiz](https://www.theadvocates.org/quiz/)). The provenance matters. Both pages come from a libertarian advocacy body; the chart is a "breakthrough concept" challenging the "fatally flawed" line, and a selling point is that it places fascism and communism near each other. That is an editorial goal, not a factor-analytic finding. The axes were asserted, the five types named rather than measured, and "freedom from government" assumed to be the main thing to record. Migration is at once a labour-market, sovereignty and cultural question; the split has no principled way to assign it. Even the site's type percentages come from people who chose to take the quiz.

## 4. The Political Compass website

politicalcompass.org is published by Pace News Ltd (copyright 2001–2026); FAQ and About pages were last updated 13 November 2026. The FAQ says the project began with "a journalist and an academic" without naming them, describes Left and Right as "essentially a measure of economics", and offers a social axis as the missing dimension ([About](https://www.politicalcompass.org/about); [FAQ](https://www.politicalcompass.org/faq)).

The test has **62 propositions**. Röttger et al. (2024) record six topic blocks, four options from "strongly disagree" to "strongly agree", and **no neutral option**; the Advocates' quiz FAQ independently contrasts its ten items with the Compass's 62. The test page warns that these are propositions, not questions, that some are deliberately vague, and that "all of them are necessarily biased, but we have a careful balance of biases" ([Test](https://www.politicalcompass.org/test); [Röttger et al., 2024, §2](https://aclanthology.org/2024.acl-long.816/)).

The FAQ's claims can be checked as claims: propositions are "slanted" and meant to trigger "feelings and prejudices rather than detailed opinions on policy"; the test is "simply a demonstration" of the model, not a survey; "don't know" is refused so people cannot duck issues; results are not logged because self-selected samples would be invalid; scoring details are withheld under copyright; quadrants are "not separate categories, but regions on a continuum"; politicians are placed from voting records, manifestos and actions, not self-reports; cultural bias is admitted — the Compass is promoted in western democracies. The astrology item is defended as a signal of mystical determinism; religion is covered only indirectly.

What can be verified is that the site says these things. What cannot be verified is measurement quality. Faulborn et al. (2025) found no documentation or peer-reviewed research on how items were developed or pretested, call the PCT "not a scientifically valid survey instrument", and read the astrology item as evidence of an English-speaking frame ([Faulborn et al., 2025, *ACL 2025*, 31684–31704](https://aclanthology.org/2025.acl-long.1529/)). Röttger et al. (2024) show answers changing with forced-choice formats, minimal paraphrases and open-ended settings (14 of 62 propositions flip for Mistral, 23 of 62 for GPT-3.5). Those are language-model outputs, not human validity evidence. No public human item-level dataset, scoring formula, reliability figure or factor analysis was found.

## 5. Inglehart–Welzel and the World Values Survey

The WVS cultural map reports two cross-country dimensions from factor analysis: **Traditional ↔ Secular-rational** (religion, parent–child ties, authority, traditional family, national pride versus their opposites) and **Survival ↔ Self-expression** (security and ethnocentrism versus tolerance of foreigners and sexual minorities, gender equality, environmental protection and demands for participation). It plots societies, not individuals; the WVS says within-society differences are dwarfed five to ten times by between-society differences and links the dimensions to GDP and occupational structure ([World Values Survey, "Findings & Insights"](https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=findings)).

The data basis is narrower than the claims sound: ten indicators, five per dimension, chosen because they appeared in every wave, not because they were most sensitive; the WVS calls them indicators of broader dimensions. The source book is Inglehart and Welzel's *Modernization, Cultural Change, and Democracy: The Human Development Sequence* (Cambridge University Press, 2005; [DOI 10.1017/CBO9780511790881](https://doi.org/10.1017/CBO9780511790881)).

Transfer to individuals is a level error: a country's score aggregates broad value questions, not a programme about ownership, party rule or solidarity. Alemán and Woods (2016) found little evidence for consistent dimensions and comparability mainly among advanced post-industrial democracies ([*Comparative Political Studies* 49(8): 1039–1067, DOI 10.1177/0010414015600458](https://api.openalex.org/works/https://doi.org/10.1177/0010414015600458); publisher page 403). Country coordinates are not a template for a person or doctrine.

## 6. Moral Foundations Theory and why it is not a compass

Haidt and Joseph (2004) began with four prepared intuitions — suffering, hierarchy, reciprocity, purity — not six ([*Daedalus* 133(4): 55–66, DOI 10.1162/0011526042365555](https://doi.org/10.1162/0011526042365555)). Graham et al. (2013) settled on five: Care/harm, Fairness/cheating, Loyalty/betrayal, Authority/subversion and Sanctity/degradation, split into individualizing and binding concerns; they note Liberty/oppression as a proposed sixth and state, "We do not know how many moral foundations there really are" ([Graham et al., 2013, *Advances in Experimental Social Psychology* 47, Elsevier](https://seanwojcik.github.io/publications/Graham%20Haidt%20Koleva%20Motyl%20Iyer%20Wojcik%20%26%20Ditto%202013%20-%20MFT.pdf)).

MFQ-2 is a revision, not an axis added to a fixed map. Atari et al. (2023) built it from data in 25 populations and found Equality and Proportionality distinct while retaining Care, Loyalty, Authority and Purity ([*Journal of Personality and Social Psychology* 125(5): 1157–1188, DOI 10.1037/pspp0000470](https://doi.org/10.1037/pspp0000470)). It has 36 items and six subscale scores, as in an openly licensed German validation dataset with N = 1,171 ([Musa, Müller & Hopp, 2026, PsychArchives, DOI 10.23668/psycharchives.22700](https://www.psycharchives.org/handle/20.500.12034/18032)). The structure is contested: Zakharin and Bates (2021) found the five-factor MFQ model fit poorly (CFI .724, RMSEA .074) and reached adequate fit only with seven foundations plus binding/individualizing factors, a left–right tilt and an acquiescence factor (CFI .963, RMSEA .033), replicated in four samples ([*PLoS One* 16(10): e0258910](https://pmc.ncbi.nlm.nih.gov/articles/PMC8535174/)).

MFT is not a compass: it measures moral intuitions, not institutional choices. Care and Loyalty say nothing about who owns production, whether a party may rule indefinitely, or where solidarity stops; Authority/subversion is a moral concern, not a constitutional programme. A theory whose authors revise its items and whose factor count is disputed cannot supply fixed axes without documenting the choice. It can justify keeping authority separate from community and equality from proportionality — not treating six MFQ scores as coordinates.

## 7. VAA spatial models and dimensionality research

Voting Advice Applications compare a voter's answers with party or candidate positions in a low-dimensional space. The lesson is methodological: axes must be derived and checked, not assumed. Alós-Ferrer and Granić (2015) analysed two large German approval-voting field experiments and concluded that voter-perceived spaces are "inherently multidimensional and cannot be reduced to a single left-right dimension, or even to a two-dimensional space" ([*Electoral Studies* 39: 56–71, DOI 10.1016/j.electstud.2015.04.003](https://pure.eur.nl/en/publications/political-space-representations-with-approval-data)). That is evidence against one or two dimensions, not for a specific larger count.

Van der Linden and Dufresne (2017) argue that aggregation algorithms give VAAs their legitimacy, yet no agreed framework evaluates them; they propose dimensionality reduction as a corrective and test it for reliability and validity ([*Journal of Elections, Public Opinion and Parties* 27(1): 9–30, DOI 10.1080/17457289.2016.1268144](https://api.openalex.org/works/https://doi.org/10.1080/17457289.2016.1268144); full text paywalled, metadata and abstract verified). Azevedo et al. (2026) catalogued 358 instruments in 400+ articles; items went unreported in 37.84% of cases and validity evidence appeared for 48.25% of novel scales. Ten common scales had weak content overlap (mean Jaccard .20 inductive, .33 deductive), and two studies (N = 3,619) showed results changing with the instrument ([research report, 11 March 2026](https://measuring.ideology.flavioazevedo.com/)). That report is not peer-reviewed. Adding an axis is a measurement decision needing items, a pilot and reliability checks, not a drawing choice.

## 8. Comparison table

| Model | Axes | Author, date | Evidence base | Strengths | Limits | Verified source URL |
|---|---|---|---|---|---|---|
| Left–right line | One continuum from seating | Convention 1789; Bienfait & van Beek 2014 | Historical convention; no psychometric data | Simple; tracks some economic conflict | Content undefined; fuses property, authority, tradition | https://doi.org/10.5964/jspp.v2i1.323 |
| Eysenck | R; T; three second-order factors in 1975 | Eysenck, 1954; revised 1975 | British studies; 1975 London quota sample n = 368 | First two-axis factor model; extremes share style | T partly a personality projection; naming subjective; small samples | https://hanseysenck.com/wp-content/uploads/2019/12/1975_eysenck_-_the_structure_of_social_attitudes_british_journal_of.pdf |
| Nolan Chart / quiz | Economic freedom; personal freedom | Nolan 1969/1971; Fritz 1987 | Advocates' own publication; 10 items, 3 options | Separates economic and personal liberty; scoring published | Libertarian advocacy; types asserted; a priori axes; self-selected users | https://www.theadvocates.org/nolan-chart/ ; https://www.theadvocates.org/quiz/ |
| Political Compass | Economic left–right; social authoritarian–libertarian | Pace News Ltd, from 2001; FAQ 2026 | 62 propositions, four-point scale, no neutral; no validation | Clear graphic; quadrants are regions, not types | Undisclosed scoring; admitted bias; no reliability or factor evidence | https://www.politicalcompass.org/faq ; https://aclanthology.org/2025.acl-long.1529/ |
| Inglehart–Welzel map | Traditional–secular-rational; survival–self-expression | Inglehart & Welzel, 2005 | WVS factor analysis of ten indicators, by society | Large dataset; stable clusters; links values to development | Indicators chosen for comparability; country-level; disputed | https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=findings ; https://api.openalex.org/works/https://doi.org/10.1177/0010414015600458 |
| MFT / MFQ-2 | Five foundations; Liberty proposed sixth; MFQ-2 six: Care, Equality, Proportionality, Loyalty, Authority, Purity | Haidt & Joseph 2004; Graham et al. 2013; Atari et al. 2023 | Cross-cultural development; 25 populations; contested factor structure | Explains moral disagreement; separates individualizing/binding | Intuitions, not institutions; no ownership axis; poor five-factor fit | https://doi.org/10.1037/pspp0000470 ; https://pmc.ncbi.nlm.nih.gov/articles/PMC8535174/ |
| Approval-voting spaces | Empirically derived; more than two | Alós-Ferrer & Granić, 2015 | Two large German field experiments | Direct evidence against one/two dimensions | No specific count; election-specific | https://hdl.handle.net/1765/111247 |
| VAA dimensionality reduction | Data-derived issue dimensions | van der Linden & Dufresne, 2017 | Methodological paper; full text paywalled | Reliability/validity language for VAA design | Validates no compass; abstract-level verification | https://api.openalex.org/works/https://doi.org/10.1080/17457289.2016.1268144 |
| Ideology review | Variable; 358 instruments | Azevedo et al., 2026 | 400+ articles; two studies, N = 3,619 | Quantifies poor reporting and non-overlap | Research report, not peer reviewed; not a compass | https://measuring.ideology.flavioazevedo.com/ |

## 9. Conclusion: what a comprehensive compass must preserve

A comprehensive compass must keep distinctions current models trade for a clean graphic. Ownership and coordination are not coercion; coercion is not communal obligation; inherited norms are not economic interest; national sovereignty is not international solidarity. It must separate a doctrine from its implementation and from what a state did in its name, and publish items, keying, scoring, uncertainty and pilot evidence before calling a coordinate a measurement.

Existing models erase different things. The 1789 line erases that communist and fascist movements could converge on authoritarian means while opposing each other on property. Eysenck saw part of this but folded authority into a personality-linked second factor. The Nolan Chart and Political Compass turn conflict into "freedom from government", hiding community, tradition and scope, and cannot place migration or party rule without quiet editorial choices. The WVS map describes societies' value climates, not an individual's institutional politics. MFT explains moral disagreement but says nothing about who controls production or how power is constrained. VAA research supplies the corrective: derive axes from data and test them. A five-axis map — economy, authority, community, change, scope — preserves those distinctions, but remains a hypothesis until piloted and should show positions with uncertainty, never a type or verdict.

### Verification notes

All URLs were fetched or retrieved via API. Unreadable: AFP's 1789 factcheck and Britannica (403), the Moral Foundations publications page (401), SAGE's Alemán & Woods page (403), PubMed and the APA PDF for Atari et al. (403); Crossref, OpenAlex, DOI records and open PDFs were used instead. Atari's PsyArXiv PDF did not resolve; van der Linden and Dufresne's journal full text is paywalled. Wikipedia was not used as evidence.
---

## Methodology, psychometrics and honest limits of a political compass

**Scope.** A companion to the five-axis notes and ten-axis proposal. Nothing here validates this instrument: no pilot, no human item-level responses, no estimated loading, reliability or norm.

## 1. How many dimensions do political attitudes actually have?

The honest answer from factor analysis is *more than one, usually more than two, and not a stable exact number*. That distinction matters: a compass with five or ten coordinates needs evidence for those counts, not merely evidence against a single left–right line.

Eysenck's work is often read as proof of "two dimensions". His factor analysis of a 40-item inventory given to 750 English respondents yielded two orthogonal factors, radicalism–conservatism (R) and tough-mindedness–tender-mindedness (T); R separated Conservative from Labour voters, while communists and fascists scored low on T (Eysenck 1953). Eysenck later denied that individual differences were reducible to two attitudes, since considerable item-specific variance remained (Eysenck 1956). The source supports "at least two", not "exactly two".

Approval-voting experiments point the same way. Alós-Ferrer and Granić (2015), using two large German field experiments, concluded that political landscapes were "inherently multidimensional and cannot be reduced to a single left-right dimension, or even to a two-dimensional space". That is a finding about the failure of low-dimensional compression, not a count, and it did not test our items.

MFQ research shows how sensitive a factor count is to model specification. Zakharin and Bates (2021) tested existing models across five studies (N = 11,496). In Study 1 the two-factor model fit poorly (CFI = .699, RMSEA = .076), as did the five-factor model (CFI = .724, RMSEA = .074). A well-fitting model emerged only after splitting two foundations, adding binding and individualising factors, a left–right "tilt", and a general factor with positive loadings throughout — plausibly acquiescence. It reached CFI = .963, RMSEA = .033 and replicated in four samples. The attractive count of five was not recovered as a clean five-factor solution, and part of what a naïve analysis would call a political dimension was response style.

Azevedo et al. (2026) reviewed over 400 articles and found 358 ideology instruments, incomplete item reporting in 37.84%, and validity evidence for only about half of novel scales. Ten widely used scales had mean Jaccard overlap of .20 (inductive) and .33 (deductive); in two further studies (N = 3,619) results changed with the instrument. Two questionnaires both labelled "left–right" may not be interchangeable.

These findings justify *plural dimensions* but not *our plural dimensions*. Factor counts depend on the item pool, sample, extraction, rotation, fit criterion and method variance. "More than two" is a finding; "exactly five (or ten)" is a hypothesis to test on our items.

## 2. Röttger et al. (2024) is not a validation study

"Political Compass or Spinning Arrow?" (Röttger et al. 2024, ACL 2024, 15295–15311) studies how large language models answer the Political Compass Test, not how people do. Its abstract reports that most prior work *forces* models into the PCT's multiple-choice format, and that models give substantively different answers when unforced, change answers depending on how they are forced, lack paraphrase robustness, and answer differently again in an open-ended setting.

The repository confirms the provenance: `data/` holds "annotations", "completions" (model completions on the prompts), "prompts" and "templates"; "explicit" means multiple-choice, "implicit" open-ended. These are generated outputs, not human item responses. Such a corpus cannot supply a defined population, a sampling frame, item-level human responses, internal consistency, test–retest stability, a factor structure or criterion correlations. The paper reports no loadings, alpha, omega or ICC. Citing it as validation inverts its argument: it warns about instability under prompting. Its useful by-product is an item list; its lesson for us is that wording and format move apparent answers.

## 3. Writing items people can answer

Krosnick and Presser (2009) give the survey rules: simple, concrete, unambiguous words; exhaustive and mutually exclusive options; no leading or loaded wording; ask one thing at a time; avoid negations. Pasek and Krosnick (2010) add that many respondents agree with a statement *and* its opposite, so balanced keys do not remove acquiescence — they move acquiescers to the midpoint; reversals work only if equally extreme and negation-free. Zakharin and Bates's (2021) positive general factor is the statistical version of the same problem.

On scale points there is no magic number. Preston and Colman (2000) favoured seven to ten categories and found fewer than five or more than ten reduced reliability; Lissitz and Green (1975) found reliability rising steeply from two to five points then flattening; Yang, Sung and Chou (2026), in 3,434 students taking a 60-item assessment, found diminishing returns, a breakpoint around seven to eight options, and highest reliability for 101-point and visual analogue formats. Five points is a compromise for a 100-item web quiz. Label the middle option "Neither agree nor disagree", not "Neutral", which conflates a midpoint with no opinion; removing it, as the forced-choice PCT does, misrecords genuine indifference. Fix and document the choice.

The item bank already applies useful fixes: name a concrete institution and mechanism ("Newspapers should be able to publish without prior government approval"; "Independent experts should set the interest rate") and keep the actor stable within an axis. The weak constructions identified in the notes belong on the rewrite list: double-barrelled items ("healthcare and housing"), vague quantifiers ("major", "large"), loaded connectives ("even when", "as much as they can", "whatever"), abstract nouns ("the common good"), and negations ("without", "not", "no"). People cannot agree or disagree with a statement whose meaning they must first negotiate.

Finally, not every axis should be assumed reflective. Authority, Governance and Justice sample heterogeneous acts — speech, detention, courts, sentencing, appointments — so a single factor may fit badly. Where an axis is a *formative index* of coverage, low alpha is not a defect to repair by deleting items; report content coverage instead.

## 4. Scoring, distance and why "percentage similar" must go

Normalise scores by item count and the theoretical range of the coding; with ten items per axis the divisor changes from the 30-item quiz's `/12` to the proposed `/20` scheme, and the points-per-response-step should be printed, not hidden behind rounded integers. Equal weighting is the only defensible default before pilot data and should be declared a convention; estimated weights would require the validation we lack.

The misleading step is rescaling Euclidean distance by the diagonal of the response box. The current `100 − (d / sqrt(5 × 200²)) × 100` divides by a maximum realistic pairs never approach, then labels the result as if it were a percentage. It is neither a probability nor a rate of agreement, just a linear transform whose meaning depends on the metric and the number of axes. In higher dimensions distances concentrate, making such rescaling less informative as axes grow.

Berdoz, Brunner, Vonlanthen and Wattenhofer (2025) are relevant, with caveats: an unverified preprint using data from the Swiss voting advice application Smartvote. They call Smartvote's `100 × (1 − d_L2 / max_distance)` score "mostly arbitrary", and find best-match percentages vary by party and are often below 70%, "in large part a consequence of the curse of dimensionality". Comparing five distance functions, they find L1 and angular distance more robust than L2 without losing accuracy: an L2 moderate-answer strategy could raise a party's visibility by 207%, L1 resisted it better, angular distance had the lowest party bias, and Mahalanobis handled correlated axes but had the largest party bias and weakest party-match accuracy. The lesson: metric choice changes results, and no number deserves "similar" without a stated metric and reference distribution.

Show the individual axis gaps and a rank order of illustrative profiles. If one number is useful, use normalised L1 or angular distance, state what it is measured against (the distribution of distances among the listed profiles, not a box corner), and call it an illustrative gap, never a percentage. The seven profile vectors are asserted integers with no source, date, coder or uncertainty; they cannot be extended from five coordinates to ten by assertion. Each needs versioned provenance, and where a tradition has opposing wings the intended wing must be named.

## 5. Uncertainty: what a pilot would report

**Internal consistency.** Report alpha and omega with 95% intervals and corrected item–total correlations; omega is a practical alternative where alpha's assumptions fail (Dunn, Baguley and Brunsden 2014). For a formative axis, report coverage rather than treating low alpha as failure.

**Test–retest.** Koo and Li (2016) show that ten forms of the intraclass correlation coefficient exist and that the wrong choice changes the answer. For self-report test–retest use a two-way mixed-effects, absolute-agreement, single-measurement ICC; report software, model, type and definition, with a 95% interval. Their bands — below .50 poor, .50–.75 moderate, .75–.90 good, above .90 excellent — apply to the *interval*, not the point estimate; they advise at least 30 heterogeneous subjects. Our plan retests at least 100 people after two to four weeks and checks score drift.

**Structure and method variance.** Split the sample: EFA on one half, CFA on the other, preregistering one-, two-, five- and ten-factor models, a higher-order model and a bifactor model with a positive method factor. Use the standards Zakharin and Bates applied — CFI/TLI around .95 or better, RMSEA around .06 or lower — while remembering that fit does not prove a construct. Report the inter-axis correlation matrix: if two axes correlate around .8, the picture overstates what was measured and the pair should be merged or rewritten. Test an acquiescence factor rather than assuming balanced keys solved it.

**Invariance and sample size.** Configural, loading and intercept invariance must hold before comparing groups or languages. This is not a formality: Zakharin and Bates report that Iurino and Saucier (2020) found little support for a five-factor MFQ across 27 countries, and that scalar invariance failed in US Black/White comparisons; Azevedo et al. (2026) list invariance among evidence rarely reported. Wolf et al. (2013) simulated structural equation models and found requirements from 30 to 460 cases depending on indicators, loadings and missingness, concluding that rules of thumb are unreliable — argue from a power simulation. Working targets: ~300 respondents for a 30-item pilot, 500–1,000 for a 100-item instrument with an EFA/CFA split, at least 100 for retest.

## 6. A realistic validation roadmap

1. **Freeze and preregister.** Version wording, keying, scoring and display; preregister hypotheses, exclusions, sample-size logic, fit criteria and multiplicity before collecting data. Publish anonymised item-level data and code afterwards.
2. **Pretest comprehension.** Check that respondents read each institution and "should" statement as intended; rewrite anything misread, then freeze again.
3. **Pilot.** Recruit ~500–1,000 adults from more than one source with quotas on age, education and political interest. This supports a first factor analysis, not population norms.
4. **Reliability and structure.** Alpha/omega with intervals, item–total correlations, EFA/CFA comparison, inter-axis correlations, explicit method factor.
5. **Stability.** Retest at least 100 after two to four weeks; report the ICC with interval and check drift.
6. **External evidence.** Correlate axes with left–right self-placement and, where feasible, an open instrument such as MFQ-2; use named known groups only as a secondary check.
7. **Invariance.** Test configural, loading and intercept invariance before any cross-group comparison.
8. **Revise and re-pilot.** Any wording change creates a new version and invalidates the old estimates.

**Not claimable before this:** that the instrument is validated, reliable, or measures five (or ten) latent traits; that bands have empirical cut-offs; that profile coordinates are measured rather than asserted; that scores compare across languages or cultures; that a score identifies a type of person; or that any "percentage similar" number means more than a display convention.

## 7. What this project can and cannot claim now

**Can claim.** A transparent, versioned self-report *teaching heuristic*: fixed definitions, item texts and scoring rules; per-axis scores with uncertainty; a rank of illustrative traditions under a declared, non-probabilistic distance; and adherence to documented item-writing practices. We can cite Eysenck, Alós-Ferrer and Granić, Zakharin and Bates, and Azevedo et al. as evidence that one or two axes are unlikely to be enough — and only that.

**Cannot claim.** That the number of axes is five or ten; that any axis is a validated latent trait; that alpha, omega, ICC or fit indices exist for these items; that profile vectors are data or that cited scholars endorse them; that the quiz predicts behaviour or membership in a named tradition; that cross-group comparisons are meaningful; or that Röttger et al. (2024) validates anything here. Until a pilot exists, "self-report heuristic, not a validated test" is not modesty but accuracy.

## Verified bibliography

- Alós-Ferrer, C., and G. D. Granić. 2015. "Political Space Representations with Approval Data." https://hdl.handle.net/1765/111247
- Azevedo, F., D. Bolesta, A. Zapko-Willmes, P. Warncke, and J. Kim. 2026. "Measuring Ideology: Current practices, its consequences, and recommendations." https://measuring.ideology.flavioazevedo.com/
- Berdoz, F., D. Brunner, Y. Vonlanthen, and R. Wattenhofer. 2025. "Recommender Systems for Democracy: Toward Adversarial Robustness in Voting Advice Applications." https://ar5iv.labs.arxiv.org/html/2505.13329
- Dunn, T. J., T. Baguley, and V. Brunsden. 2014. "From alpha to omega." https://doi.org/10.1111/bjop.12046
- Eysenck, H. J. 1953. "Primary Social Attitudes." https://hanseysenck.com/wp-content/uploads/2019/12/1947_eysenck_-_primary_social_attitudes_the_organization_and_measurement_of.pdf
- Eysenck, H. J. 1954. *The Psychology of Politics*. https://doi.org/10.4324/9781351303088
- Eysenck, H. J. 1956. "The Psychology of Politics: A Reply." https://hanseysenck.com/wp-content/uploads/2019/12/1956_eysenck_-_the_psychology_of_politics_reply_psychological_bulletin_pmid.pdf
- Koo, T. K., and M. Y. Li. 2016. "A Guideline of Selecting and Reporting Intraclass Correlation Coefficients." https://pmc.ncbi.nlm.nih.gov/articles/PMC4913118/
- Krosnick, J. A., and K. Presser. 2009. "Question and Questionnaire Design." https://web.stanford.edu/dept/communication/faculty/krosnick/docs/2009/2009_handbook_krosnick.pdf
- Lissitz, R. W., and R. F. Green. 1975. "Effect of the number of scale points on reliability: a Monte-Carlo approach." https://doi.org/10.1037/h0076268
- Pasek, J., and J. A. Krosnick. 2010. "Optimizing Survey Questionnaire Design in Political Science." https://calgara.github.io/Pol157_Spring2019/Pasek%20&%20Krosnick%202010.pdf
- Preston, C. C., and A. M. Colman. 2000. "Optimal number of response categories in rating scales." https://doi.org/10.1016/S0001-6918(99)00050-5
- Röttger, P., V. Hofmann, V. Pyatkin, M. Hinck, H. R. Kirk, H. Schütze, and D. Hovy. 2024. "Political Compass or Spinning Arrow?" https://aclanthology.org/2024.acl-long.816/ ; https://github.com/paul-rottger/llm-values-pct
- van der Linden, C., and Y. Dufresne. 2017. "The curse of dimensionality in Voting Advice Applications." https://doi.org/10.1080/17457289.2016.1268144
- Wolf, E. J., K. M. Harrington, S. L. Clark, and M. W. Miller. 2013. "Sample Size Requirements for Structural Equation Models." https://doi.org/10.1177/0013164413495237
- Yang, W.-H., Y.-T. Sung, and Y.-T. Chou. 2026. "How continuous is continuous enough?" https://pmc.ncbi.nlm.nih.gov/articles/PMC13275763/
- Zakharin, M., and T. C. Bates. 2021. "Remapping the foundations of morality." https://pmc.ncbi.nlm.nih.gov/articles/PMC8535174/

*Verification limits.* No Wikipedia page was used as evidence. Full text was fetched for Zakharin and Bates, Koo and Li, Azevedo, Yang and Berdoz; metadata or abstracts for the rest. PDF text for Krosnick and Presser, Pasek and Krosnick, Röttger et al. and the Eysenck papers was not re-fetched; those claims rest on landing pages, abstracts, search-indexed text and earlier notes (including Röttger's counts and the PCT's no-neutral format). The 1953 Eysenck file is named "1947", but the article states 1953. Preston and Colman, van der Linden and Dufresne, Dunn et al., Wolf et al. and Lissitz and Green were verified through metadata or secondary summaries. Berdoz et al. is a preprint of unverified peer-review status. No human item-level compass dataset was found.
---

## Political traditions, ideological proximity and the danger of imposed coordinates

A political compass that prints a name beside a dot invites a mistake. The dot looks like a measurement and the name looks like a fact. Neither is. A coordinate is the output of a scoring rule applied to selected statements; a tradition name is a label applied by an editor to a moving family of texts, organisations and practices. This section explains why the link between the two must be treated as a hypothesis, and how to display it without pretending it is a fact.

The companion notes `research/political-compass-research.md` and `research/political-compass-ten-axis-expansion.md` set out the five-axis proposal and the ten-axis expansion. The argument here applies to both.

## 1. A coordinate is a choice, not a measurement of a tradition

There is no observation procedure that returns "the position of Marxism". One can observe a text, a party programme, a vote, a speech or a survey response. To move from any of these to a tradition-level coordinate, an editor must decide which texts count, which period is meant, which wing is representative, how statements are weighted and how conflicting statements are aggregated. Each decision is defensible only if it is declared.

John O'Neill makes the difficulty unavoidable: "there is no agreed classification of types" of socialism, because writers disagree over whether the defining issue is political means, economic institutions or values ([O'Neill, *Defining socialism*](https://www.rep.routledge.com/articles/thematic/socialism/v-1/sections/defining-socialism)). The label has included state, market, guild, revolutionary and ethical socialism, and social democrats dispute whether capitalism can be modified to realise socialist values. Treating these as one type is already a philosophical choice.

Five things are routinely conflated:

- **Doctrine**: what a text argues. Marx and Engels's [*Communist Manifesto*](https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch01.htm) describes a historical tendency and a class analysis; it does not specify a fully worked party constitution.
- **Movement**: who organised around the doctrine, with what allies and enemies. Lenin's party-building and the Bolshevik faction were movements before they were states.
- **Party**: an organisation with a programme, discipline and electoral or revolutionary strategy. Stalin's [*Foundations of Leninism*](https://www.marxists.org/reference/archive/stalin/works/1924/foundations-leninism/index.htm) devotes a distinct section to "The Party", which is a claim about organisation, not merely about ownership.
- **State practice**: what a government did once in power, including compromises, repression and emergency measures. Trotsky's [*The Revolution Betrayed*](https://www.marxists.org/archive/trotsky/1936/revbet/index.htm) is precisely an argument that the Soviet institutional record diverged from the programme.
- **Later scholarship**: the retrospective category. Much of what is now called Marxism–Leninism was named after the events it describes; the label is an editorial and scholarly construct, not a self-description by Marx.

The Political Compass guidance illustrates the gap between self-description and institutional reading: it locates politicians using "reports, parliamentary voting records, manifestos … and actions that speak much louder than words", and reports that test-takers' answers often conflicted with their actions ([FAQ](https://www.politicalcompass.org/faq)). That privileges observed behaviour over declared identity — a reasonable choice, but a choice.

The same caution applies to labels such as "conservative". The [Stanford Encyclopedia of Philosophy entry on conservatism](https://plato.stanford.edu/entries/conservatism/) records that the term was coined in the 1830s, that Burke was adopted as its patron saint after the fact, that some deny conservatism is an ideology at all, and that it has taken relativistic and non-relativistic forms. A coordinate for "conservatism" therefore needs a date, a country and a specified author or party. Without those, it is a cipher.

## 2. Why the families resist single placement

**Marxism and Marxism–Leninism.** Marxism is a family of analyses of capitalism, class and historical change; the *Manifesto* is a party polemic, not a manual for a state. Marxism–Leninism adds a vanguard party organised through democratic centralism, a two-stage revolution and a transitional state controlling the commanding heights while aiming at a stateless outcome — Stalin's [*Foundations of Leninism*](https://www.marxists.org/reference/archive/stalin/works/1924/foundations-leninism/index.htm) is the clearest primary statement. Trotskyists argued that the Soviet record was a bureaucratic degeneration, not fulfilment; later scholars disputed whether the economy was state socialism, bureaucratic collectivism or state capitalism. A coordinate cannot record that dispute unless it names which wing is scored.

**Trotskyism and Maoism.** Trotsky's [*Permanent Revolution*](https://www.marxists.org/archive/trotsky/1931/tpr/index.htm) rejects staged accommodation with the national bourgeoisie and ties democratic tasks to proletarian power and international revolution. Mao's [*On New Democracy*](https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm) also uses stages, but gives leadership to a united-front bloc in a semi-colonial, largely peasant society and permits private property and a rich peasant economy at that stage. Both appear "authoritarian left" on a two-axis chart; they diverge on Governance, Community and Scope. Calling Maoism a local variant hides a real dispute about class leadership and stages; calling it an isolated species hides its claim to universal validity.

**Democratic socialism and social democracy.** Bernstein's [*Evolutionary Socialism*](https://www.marxists.org/reference/archive/bernstein/works/1899/evsoc/index.htm) accepts parliamentary reform and cooperatives and revises the claim that capitalism must collapse. Luxemburg's [*Reform or Revolution*](https://www.marxists.org/archive/luxemburg/1900/reform-revolution/index.htm) replies that reform and revolution are moments in one process, and warns that reformism can stabilise capitalism. These are different theories of change, not two points on one line. O'Neill notes that if socialism is defined only by values, a social democrat can call modified capitalism socialist, while a tradition defined by replacing capitalist property will call that a refutation. Giddens's [*The Third Way*](https://archive.org/details/thirdwayrenewalo0000gidd) (catalogue record: 1998, Polity Press) is a later, contested revision within social democracy. A report must say whether it scores a party's current policy, its constitution or a theorist's programme.

**Libertarian socialism, council communism, syndicalism, anarcho-communism, mutualism and anarchism.** Franks rejects definitions built on a universal minimum of "anti-statism" because they fuse free-market individualism with anarchist communism and syndicalism ([Franks, 2013](https://eprints.gla.ac.uk/84920/)). The [SEP entry on anarchism](https://plato.stanford.edu/entries/anarchism/) distinguishes political, religious, theoretical and applied forms, and separates individualist from socialist anarchism. Proudhon's [*What is Property?*](https://www.marxists.org/reference/subject/economics/proudhon/property/index.htm) attacks property as despotism while developing reciprocal exchange — the root of mutualism. Kropotkin's [*The Conquest of Bread*](https://archive.org/details/conquestofbread0000krop) argues for communist distribution and voluntary association; Rocker's [*Anarcho-Syndicalism*](https://archive.org/details/rudolf-rocker-anarchosyndicalism_202601) puts the revolutionary union at the centre. Council communism adds workers' councils against both party substitution and parliamentarism. All can look "libertarian left" on a two-axis chart while disagreeing about organisation, property and strategy. The Political Compass FAQ rejects the claim that one cannot be libertarian and left, citing Proudhon, Goldman and anarcho-syndicalism.

**Liberalism, libertarianism and anarcho-capitalism.** The [SEP entry on liberalism](https://plato.stanford.edu/entries/liberalism/) opens by saying that "liberalism is more than one thing": it distinguishes negative, positive and republican liberty, old from new liberalism, and comprehensive from political doctrines. Classical liberalism ties liberty to private property; new liberalism doubts that a property-based market secures equal positive liberty and accepts redistribution; Rawls holds that welfare-state capitalism is unjust, preferring a property-owning democracy or market socialism. Nozick offers a different theory of justice, not a "right-wing liberal" score. Libertarianism is not conservatism: the SEP conservatism entry notes that doctrinaire anti-planning offends the conservative's pragmatic temper. Anarcho-capitalism goes further: Rothbard rejects "left-wing anarchism" for a pro-capitalist non-archism, as the SEP anarchism entry records. "Libertarian" thus names incompatible families on different sides of Economy.

**Conservatism, Christian democracy, nationalism and fascism.** Conservatism is not a fixed economic position. The SEP entry links it to feudal romanticism as well as free markets, and distinguishes pragmatic from rational conservatism and conservatism from reaction and neoconservatism. Christian democracy is separate: European parties of the right are often Christian Democrat, while the United States uses Republican. Nationalism is a modifier, not a location. The [SEP entry on nationalism](https://plato.stanford.edu/entries/nationalism/) says one can be a conservative nationalist or a socialist nationalist, a Christian or an Arab nationalist, and distinguishes cultural from statist and liberal from conservative nationalism. Paxton's [*The Anatomy of Fascism*](https://archive.org/details/anatomyoffascism00paxt_0) (catalogue record: Knopf, 2004) studies a political form and mobilising process, not an economic score. None of this licenses equating "right" with "authoritarian" or "national" with "fascist".

**Green politics, Georgism, communitarianism, distributism and Third Way.** Dobson's [*Green Political Thought*](https://archive.org/details/greenpoliticalth0000dobs_c6r1) treats ecologism as a distinct ideology, not a colour added to a left–right line. The SEP Marx entry records a dispute over whether Marx was a productivist or later moved toward ecological and degrowth communism — why Ecology and Economy must be separate. George's [*Progress and Poverty*](https://archive.org/details/progresspovertyi0000henr_j8d4) proposes a tax on land rent, not a general theory of ownership. Communitarianism enters through the liberal–communitarian debate: Sandel's critique of the "unencumbered self" concerns the nature of persons, not a preference for community. Distributism, in Belloc's [*The Servile State*](https://archive.org/details/servilestate0000hila_e6y5), opposes concentrated capital and state collectivism and seeks diffused ownership. The Third Way is an internal revision of social democracy. Each exposes a different blind spot.

## 3. Names and extreme variants

Name-based inference is the easiest error to commit and the hardest to defend. "National Socialist" contains the word socialist, but the Political Compass FAQ rejects the inference directly: Nazism was a party platform containing fascist, militarist, capitalist and socialist elements, and the test's placement is argued from corporate relations, rearmament and state direction, not from the party's name. The FAQ adds the symmetrical test: we would not accept that the German Democratic Republic was democratic because it called itself democratic. O'Neill's entry places "national socialism (fascism)" in the list of qualified socialist labels while noting the dispute about whether it belongs at all.

The companion error is to let the most extreme instance define the type. The FAQ says that quadrants are "not separate categories, but regions on a continuum" and that the Pope being in the same quadrant as Stalin does not make the Pope another Stalin. It also concedes that within each quadrant there are "very sizeable variables". Franks makes the same point at the level of concepts: a synthesis built on the lowest common denominator produces a family that no member actually recognises. A report that places "anarchism" using a bomb-throwing stereotype, or "conservatism" using one country's populist right, has not located a tradition; it has located a caricature.

## 4. How to show proximity honestly

Proximity should be presented as an editorial estimate with five safeguards.

1. **State the unit and date.** An entry should read: "doctrine of X, as stated in text Y, dated Z, assigned by A on version V". It should not read "X = −80, −70".
2. **Use bands, not points.** Where a wing is internally divided, publish a range or two entries. Mao's two-stage programme and Trotsky's permanent revolution should not be collapsed into one "communist" dot.
3. **List subtraditions.** Where a family has opposed wings — socialism, conservatism, nationalism, anarchism, liberalism — list the wings separately or name the one scored. The ten-axis proposal already does this for social anarchism versus individualist anarchism.
4. **Version the dataset.** Changes to items, weights or assignments require a new version. The [Chapel Hill Expert Survey](https://www.chesdata.eu/) is a useful model: it publishes named waves from 1999 to 2024, a mergeable trend file, and separate regional surveys with common core questions. Expert estimates of parties are explicitly dated and comparable because the waves and codebooks are versioned.
5. **Report per-axis agreement and disagreement.** A gap of 40 on Economy and 5 on Authority is different from the reverse. Azevedo and colleagues' review of 358 ideology instruments found low content overlap between common scales — Jaccard indices around 0.20 inductively and 0.33 deductively — and showed empirically that results change with the instrument used ([Azevedo et al., 2026](https://measuring.ideology.flavioazevedo.com/)). A single proximity percentage is therefore unearned; ten separate numbers with bands are more honest.

Most importantly, **proximity is not membership**. Landing near an illustrative profile means answering similar items similarly under one scoring rule — not joining a party or endorsing a doctrine. The report should say "closest to the editorial profile X on these axes", list where they are not close, and never say "you are an X".

## 5. The ten axes: constructs and overlap risks

The table records what each axis claims to measure and the main way it can be contaminated by another axis. The risks are hypotheses to test in a pilot, not findings.

| Axis | Construct claimed | Main overlap risk |
|---|---|---|
| Economy (Collective ↔ Private) | Ownership, coordination, distribution, acceptance of class hierarchy | Absorbs Governance if items ask who controls a firm, and Ecology if they ask how much output is produced |
| Authority (Libertarian ↔ Authoritarian) | Coercion, concentrated state power, civil liberties, due process | Absorbs Justice when punishment is the item content, and Representation when populism is coded as repression |
| Community (Individualist ↔ Communitarian) | Obligation, belonging, family, union, neighbourhood, nation | Overlaps Scope when the community named is the nation, and Change when it is a traditional family form |
| Change (Traditional ↔ Progressive) | Attitude to inherited norms and pace of institutional change | Absorbs Religion if observance is scored; absorbs Ecology if "new" is treated as "good" |
| Scope (Nationalist ↔ Cosmopolitan) | Nation, sovereignty, cross-border solidarity, outsiders | Absorbs Community via national identity and Authority via migration enforcement |
| Ecology (Growth-oriented ↔ Ecological) | Human–nature relation, extraction, limits to output | Absorbs Economy when green items are really about redistribution or public spending |
| Governance (Participatory ↔ Technocratic) | Who has binding decision rights and on what basis | Absorbs Economy when worker control is read as common ownership; absorbs Authority when experts are read as repression |
| Religion (Religious ↔ Secular) | Formal institutional role of religious authority in law, schools and office | Absorbs Change if personal piety or inherited custom is scored instead of institutions |
| Representation (Populist ↔ Pluralist) | Style of representation: unified people versus legitimate competing groups | Absorbs Authority because populist movements are often authoritarian in practice; must avoid nation and borders |
| Justice (Retributive ↔ Restorative) | Sentencing philosophy: payment, repair, mediation, reintegration | Absorbs Authority whenever an item concerns detention, policing or civil liberties rather than sentencing |

## 6. When no listed tradition fits

The report should say so plainly. A defensible statement is: "None of the listed profiles is a close match. Your ten scores are [list]. The nearest profile is X, but it differs on [axes]. The profiles are editorial hypotheses, not a complete taxonomy, and your answers may combine elements of several families or reflect positions the profiles do not sample." It should then offer the full axis scores and their uncertainty bands.

This is not a failure mode to be hidden. The Political Compass FAQ itself records respondents saying that none of the four response options reflected their attitude, and defends forced choice; that defence is an editorial decision, not a validation that the options exhaust political opinion. Azevedo and colleagues show that different instruments sample different topic sets, so a respondent can easily fall outside any one instrument's coverage. The SEP nationalism entry notes that nationalist beliefs combine with other belief systems; the SEP liberalism entry says the same of liberalism. Hybrid positions are normal, not anomalous. A report that forces a label in such cases does more damage than one that admits the map is incomplete.

## Sources and verification

All URLs below were fetched. Archive.org links were verified as catalogue records (title, author, publisher, date); some are access-restricted and full texts were not read. Wikipedia was used for navigation only and is not cited as evidence.

- Azevedo, Flavio, Deliah Bolesta, Alexandra Zapko-Willmes, Philip Warncke and Jisu Kim. 2026. "Measuring Ideology: Current practices, its consequences, and recommendations." https://measuring.ideology.flavioazevedo.com/
- Belloc, Hilaire. *The Servile State*. Catalogue record (1946 edition, H. Holt). https://archive.org/details/servilestate0000hila_e6y5
- Bernstein, Eduard. 1899. *Evolutionary Socialism*. https://www.marxists.org/reference/archive/bernstein/works/1899/evsoc/index.htm
- Chapel Hill Expert Survey. Waves and trend files, 1999–2024. https://www.chesdata.eu/
- Dobson, Andrew. *Green Political Thought*. Catalogue record (2000, Routledge). https://archive.org/details/greenpoliticalth0000dobs_c6r1
- Franks, Benjamin. 2013. "Anarchism." In *The Oxford Handbook of Political Ideologies*, 385–404. Abstract. https://eprints.gla.ac.uk/84920/
- George, Henry. *Progress and Poverty*, 50th Anniversary Edition. Catalogue record (1942, Robert Schalkenbach Foundation). https://archive.org/details/progresspovertyi0000henr_j8d4
- Giddens, Anthony. 1998. *The Third Way: The Renewal of Social Democracy*. Catalogue record (Polity Press). https://archive.org/details/thirdwayrenewalo0000gidd
- Kropotkin, Peter. *The Conquest of Bread*. Catalogue record (1968 reprint of 1913 edition, B. Blom). https://archive.org/details/conquestofbread0000krop
- Luxemburg, Rosa. 1899. *Reform or Revolution*. https://www.marxists.org/archive/luxemburg/1900/reform-revolution/index.htm
- Mao, Zedong. 1940. "On New Democracy." https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm
- Marx, Karl, and Friedrich Engels. 1848. *Manifesto of the Communist Party*, chapter 1. https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch01.htm
- O'Neill, John. "Defining socialism." *Routledge Encyclopedia of Philosophy*, version 1. https://www.rep.routledge.com/articles/thematic/socialism/v-1/sections/defining-socialism
- Paxton, Robert O. 2004. *The Anatomy of Fascism*. Catalogue record (Knopf). https://archive.org/details/anatomyoffascism00paxt_0
- Political Compass. "Frequently Asked Questions" and "About". https://www.politicalcompass.org/faq ; https://www.politicalcompass.org/about
- Proudhon, Pierre-Joseph. 1840. *What is Property?* https://www.marxists.org/reference/subject/economics/proudhon/property/index.htm
- Rocker, Rudolf. *Anarcho-Syndicalism: Theory and Practice*. Catalogue record. https://archive.org/details/rudolf-rocker-anarchosyndicalism_202601
- Stanford Encyclopedia of Philosophy. "Anarchism" (2017, revised 2025); "Conservatism" (2015, revised 2025); "Karl Marx" (2003, revised 2025); "Liberalism" (1996, revised 2026); "Nationalism" (2025). https://plato.stanford.edu/entries/anarchism/ ; https://plato.stanford.edu/entries/conservatism/ ; https://plato.stanford.edu/entries/marx/ ; https://plato.stanford.edu/entries/liberalism/ ; https://plato.stanford.edu/entries/nationalism/
- Stalin, Joseph. 1924. *The Foundations of Leninism*. https://www.marxists.org/reference/archive/stalin/works/1924/foundations-leninism/index.htm
- Trotsky, Leon. 1931. *The Permanent Revolution* / *Results and Prospects*. https://www.marxists.org/archive/trotsky/1931/tpr/index.htm
- Trotsky, Leon. 1936. *The Revolution Betrayed*. https://www.marxists.org/archive/trotsky/1936/revbet/index.htm
---

## What a comprehensive, evidence-traceable political orientation report should contain

## Scope and status

This section specifies a result page for the compass as a publication, not as a verdict. It assumes the instrument in the companion research: Likert items grouped into named axes (five in the quiz, with a proposed ten-axis expansion), scored to roughly −100..+100, and compared with editorial "illustrative traditions". The axes are a hypothesis and the output a self-report heuristic, not a validated test. Azevedo et al. catalogued 358 ideology instruments in over 400 articles, found frequent failure to report items and validity evidence, and showed that results change with the instrument used ([Azevedo et al., 2026](https://measuring.ideology.flavioazevedo.com/)). A report that hides this overstates what was measured. Every choice below has two jobs: present what the respondent said, and show how it became a number or a sentence.

## 1. The report as a digital publication

Treat the result as a standalone document a reader can open, navigate, print and cite, using the conventions the History of Socialism project uses for its chapters. Chapters in `book-src` open with front matter (title, description, order, last_updated, tags), are grouped into parts in `contents-by-part.md`, and end with a "Recommended reading" section whose links name author, title and date. The report should take the same shape: a stable title and version, a description, a navigable contents block, and inline links that carry their own provenance instead of bare URLs.

The recommended order is:

- **Executive summary** — a short non-numeric account of where the answers lean and how settled each axis is (Section 2).
- **Key findings** — two or three consequential results, each with its axis and an evidence pointer.
- **Per-dimension reports** — one section per axis: score, display band, item-level evidence, and a plain-English interpretation kept separate from the observation.
- **Policy preferences** — a concrete restatement of what was endorsed, keyed to the actual items (public ownership of utilities, no prior approval for newspapers), so the reader can check the abstraction against the statement.
- **Ideological comparisons** — the ranked illustrative traditions and their axis gaps, marked as provisional editorial hypotheses with a date and assigner, not measured distances.
- **Cross-dimensional analysis** — where axes reinforce or cut against each other (an egalitarian Economy score beside an authoritarian Authority score), plus any inter-axis correlations the pilot reports.
- **Response evidence** — the full per-item breakdown (Section 4).
- **Reading recommendations** — educational starting points (Section 6).
- **Methodology and limitations** — item list, keying, formula, version, pilot status, uncertainty and what the instrument cannot claim.

Contents entries should be real anchors so a reader can jump from a summary sentence to the items that produced it in one click.

## 2. Generating an executive summary without traits or labels

The summary is generated from answers, not assigned from a typology. Input: selected options plus keying direction. Output: prose about political positions. It must not infer personality traits, intelligence, moral worth or a "type" name. The research notes are explicit that band names ("Strongly Authoritarian", "Leans Progressive") are display conventions with no empirical cut-offs, and that named traditions are editorial illustrations. The summary should say what the answers support — "endorsed public ownership and redistribution, rejected prior censorship" — not "you are a socialist".

A defensible generator works in three passes. Compute each axis from the mean of reverse-scored items, keeping unrounded values internally; classify each axis into a **display band** using a fixed, published rule stated to be a convention; then draft sentences from the specific items that moved the score, never from the band alone. The draft must be deterministic: the same answers and version produce the same words.

The five position categories need operational definitions, because a score near zero has several causes:

- **Strong** — most items on one pole are endorsed at "agree" or "strongly agree", the opposing pole is mostly rejected, and the result survives leave-one-out removal (Section 5).
- **Moderate** — a consistent lean, with several items on that pole endorsed but few at maximum strength.
- **Mixed** — genuine disagreement between domains: the Authority items on speech answered differently from those on detention. A mean hides this, so the prose must name the split.
- **Neutral** — the respondent chose "neither agree nor disagree" on most items, which is a substantive answer, not a missing one. Relabel the midpoint this way; the validation notes warn that "Neutral" conflates midpoint with "no opinion".
- **Cancelled** — agreement with positively and negatively keyed items is balanced, so the mean approaches zero because opposing endorsements cancel, not because the respondent was uncommitted. Pasek and Krosnick report that 10–20% of respondents agree with a statement *and* its opposite, and that balanced keys merely move acquiescers toward the midpoint ([Pasek & Krosnick, 2010](https://calgara.github.io/Pol157_Spring2019/Pasek%20&%20Krosnick%202010.pdf), text extracted in the validation notes). Only the per-item breakdown distinguishes "cancelled" from "neutral"; a score alone cannot.

An acquiescence pattern — agreement across unrelated items regardless of direction — is a response-style caveat, not a political position. Zakharin and Bates found that a well-fitting model of the Moral Foundations Questionnaire required a general acquiescence factor alongside binding/individualising factors and a left–right "tilt" ([Zakharin & Bates, 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8535174/)); item agreement is not a clean measure of one construct.

## 3. Visualisation: what each chart shows and hides

Chart.js describes a radar chart as a way of showing several data points and their variation, often useful for comparing two or more datasets ([Chart.js radar documentation](https://www.chartjs.org/docs/latest/charts/radar.html)). That is also its limitation here. The polygon makes shape and area salient although, with bipolar axes, neither has a defensible meaning; area changes with axis order; and ten axes put twenty pole labels about 18 degrees apart, so readers cannot identify the spoke, as the ten-axis note records. A radar hides the value and uncertainty on a named axis. Offer it as a secondary overview with a warning that shape and area carry no meaning, not as the primary display.

The **diverging bar list** should be primary: one horizontal row per axis, centred on a visible neutral reference line at zero, with the negative pole named at the left end, the positive pole at the right end, the numeric value printed once, and an uncertainty band drawn over the bar. Rows should use a fixed, disclosed grouping, not a data-driven sort that changes between respondents. It keeps every pole legible on a phone, degrades to plain text, and turns profile comparison into a short list of gaps.

Supporting charts have narrow jobs:

- **Comparison charts** overlay the bars with an illustrative profile. They show large gaps but hide that the profile is an asserted vector with no source or uncertainty; the caption must say so.
- **Answer-distribution charts** show the count of responses at each of the five options for an axis, split by keying direction. These make "mixed" and "cancelled" visible and expose acquiescence; a single mean hides all three.
- **Neutral reference lines** must be drawn and labelled on every bar and distribution chart. Without a zero line, a small score looks like a large one.

Avoid exaggerated differences: fix −100..+100 on every axis; never rescale, truncate, or colour bands so a moderate lean reads as extremism. For similarity, keep the L1 gap ranking rather than a "percentage similar": the rescaled Euclidean figure divides by a box diagonal that realistic profiles never approach. Berdoz et al. found normalised Euclidean similarity "mostly arbitrary" and distorted in high dimensions, and that changing the matching method or cherry-picking items can shift recommendation frequencies substantially ([Berdoz et al., 2025](https://ar5iv.labs.arxiv.org/html/2505.13329), preprint). If one gap number is shown, label it a display convention relative to the illustrative profiles and drop "percentage".

Every chart needs a **text equivalent**: an HTML data table with header markup, caption and summary, so screen readers and custom stylesheets can present the same values ([W3C WAI Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/)). The table is the authoritative rendering; the chart is a view of it.

## 4. Traceability: separating observation from interpretation

The report must let a reader rebuild any sentence from the answers. Each axis section therefore includes a per-item table with these columns:

| Question (exact wording, item ID) | Selected response | Axis and keying direction | Scoring contribution | Interpretation |
|---|---|---|---|---|
| Verbatim statement from the versioned item bank | e.g. "agree" | e.g. Authority, −1 | reverse-scored value before averaging, shown as a signed number | what this single answer supports, stated separately from the score |

The first four columns are **observation**: what was shown, what was clicked, how the published formula transformed it. The last column is **interpretation**: a claim that must be written so it can be disagreed with. The table should never merge them. Good practice, borrowed from the project's editorial standard, is to keep separate: what an item says, what a respondent endorsed, what the scorer computed, and what the report concludes. The same discipline applies to the illustrative profiles: each vector needs the text interpreted, a date, an assigner and a source, and must be flagged provisional. Where a tradition contains opposing wings, the comparison must name the wing used.

The whole result should also be copyable as text, with the same numbers and caveats.

## 5. Uncertainty and sensitivity reporting

The report must contain no invented confidence percentages, standard errors or probabilities of correctness. Where no pilot exists, say so. Report instead:

- **Leave-one-out shifts** — for each axis, recompute after dropping each item in turn and show the range. If dropping one item moves an axis by more than a band, that band is not stable.
- **Incomplete coverage** — list axes scored from few items or from a short form, and state the rule used. The expansion note says never score an axis from fewer than four items without saying so and widening the description.
- **Close rankings** — a small gap between two profiles should be shown as a tie within the display resolution, not a winner. Tie-breaking must be disclosed, since Berdoz et al. show it can materially change outputs ([Berdoz et al., 2025](https://ar5iv.labs.arxiv.org/html/2505.13329)).
- **Equal-weighting assumption** — the mean gives every item equal weight; state that this is a design decision, not a finding. If items prove heterogeneous, a formative index needs content-coverage reporting, not a reassuring alpha.
- **Self-report limits** — answers are what people said on the day, under a particular wording. Röttger et al. found answers changed under forced choice, minimal paraphrases and between multiple-choice and open-ended formats; their released data are model completions, not human responses, so the study evidences instability, not validation ([Röttger et al., 2024](https://aclanthology.org/2024.acl-long.816.pdf)).
- **Reliability figures, if and only if a pilot exists** — report alpha and omega with intervals, and test–retest ICC with its form and 95% interval. Koo and Li stress that the ICC form must be specified and its interval, not the point estimate, supports interpretation ([Koo & Li, 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4913118/)).

The methodology section should carry the "teaching device, not a validated test" warning and state the instrument's version and date.

## 6. Educational recommendations

Recommendations are an invitation to read, not a route to recruitment. Frame them as "starting points" with a one-line reason for each, as the project's chapter pages do: distinguish primary texts from scholarship and note unchecked pages. Offer, in labelled groups:

- **Primary texts** — documents behind the item themes, with author, title and date (the *Communist Manifesto* for class and property, or *What Is Property?* for the mutualist critique).
- **Theorists and movements** — entry points to named traditions, noting that "socialism" has no agreed classification and that a tradition contains opposed wings.
- **Academic work** — scholarly secondary sources tagged as such, with a stable URL where available.
- **Critiques and debates** — opposing scholarship placed beside the account it criticises, so the reader sees a disagreement rather than a verdict.
- **Measurement sources** — the research notes and validity literature, so the reader can check how the compass was built.

Link conventions mirror the project: `[Author, *Title*, date](stable URL)`, noting abstract-only access or errors. Recommendations must not tell the reader what to adopt, nor claim a cited author endorsed a compass coordinate. Where an item concerns religion, punishment or ecology, point to the relevant debate, not a single approved answer.

## 7. Privacy and engineering

Answers, scoring and rendering happen in the browser; nothing is transmitted. No analytics, cookies, third-party fonts or scripts, and no network calls to render the result. The VAA literature treats privacy as a canonical property and warns that platform operators can manipulate matching parameters ([Berdoz et al., 2025](https://ar5iv.labs.arxiv.org/html/2505.13329)); a client-side design removes that operator.

The code should be separated into modules with narrow interfaces:

- **Data** — versioned item bank, keying, pole names, illustrative profiles with provenance.
- **Scoring** — a pure function from answers plus version to unrounded axis values and leave-one-out ranges.
- **Interpretation** — a pure function from scored values to bands and prose, with no hidden state.
- **Charting** — rendering only from the data table, never recomputing scores.
- **Reporting** — assembling the sections, contents and print layout.

Versioning covers wording, keying, scoring and profile vectors, and each result states its version. Generation is deterministic: identical input yields identical prose, numbers and charts. Tests assert known score outputs, keying balance, that every item appears in the evidence table, that neutral and cancelled cases differ, that text equivalents match chart values, and that no network request is made. Print/PDF must preserve tables and caveats, not just the summary. A JSON export should carry answers, item IDs, version, unrounded scores, leave-one-out ranges and generated text, so the result is citable and re-checkable.

## 8. Checklist

**Must have:** executive summary derived from answers; navigable contents; per-dimension sections; policy-preference restatement; per-item evidence table with scoring contributions; observation separated from interpretation; diverging bars with zero lines and a data-table equivalent; labelled L1 profile gaps with no "percentage similar"; leave-one-out and coverage reporting; explicit equal-weighting and self-report caveats; no invented confidence figures; versioned items and profiles; educational reading lists with real links; client-side execution with no tracking; deterministic generation and tests; print/PDF and structured export.

**Nice to have:** secondary radar overview with an area warning; radial-bar or small-multiple views; answer-distribution charts; a short form with wider uncertainty stated; optional user-weighted items (only after the effect of weights is disclosed); comparison with a second instrument; a published pilot with alpha, omega and ICC intervals; translations with measurement-invariance checks.

### Sources verified for this section

Fetched: Chart.js radar docs; Berdoz et al. (2025); Koo and Li (2016); Azevedo et al. (2026); W3C WAI Tables Tutorial; Zakharin and Bates (2021). Röttger et al. (2024) and Pasek and Krosnick (2010) were verified in the validation notes, not re-fetched. Item design, band labels, L1 ranking and profile vectors come from the companion research files and are design decisions, not findings.

---

## Implementation in this repository

The assessment is implemented as a standalone client-side page at `/political-compass/`, separate from the book manuscript and linked at the top of the site navigation.

**Questionnaire and data.** `static/political-compass/js/data/axes.js` defines ten axes with codes, poles, constructs, theory, policy areas, associated traditions and limitations. `questions.js` holds 100 statements, five keyed to each pole per axis, each with an item ID, construct facet, keying direction and rationale. `traditions-left.js` and `traditions-other.js` hold 27 traditions with provisional centres, ten ranges per tradition, subtraditions, internal debates and verified references. `resources.js` holds 150 verified educational resources across axes, traditions and general reading. `package.json` versions the system (questionnaire 2.0.0, scoring 2.0.0, traditions 1.0.0).

**Scoring.** `js/core/scoring.js` is pure and deterministic. It validates responses, reverse-scores negatively keyed items, computes each axis as `sum / 20 * 100`, records coverage, separates neutral from opposing answers, and computes leave-one-out sensitivity. One scale step moves an axis by five points. Balanced keying means "strongly agree" to everything yields a zero profile rather than a high score on every axis.

**Interpretation.** `js/core/interpretation.js` derives the executive summary, per-axis narratives, policy preferences, curated cross-dimensional combinations and uncertainty statements from scores and individual answer contributions. It never assigns personality traits or membership labels. `js/core/traditions.js` ranks traditions by total absolute gap (L1, range 0–2000) and reports within-range and outside-range axes; proximity is explicitly not membership.

**Presentation.** `js/charts/charts.js` renders locally bundled Chart.js visualisations: a radar overview with a neutral reference ring, diverging horizontal bars with a labelled zero line, a tradition comparison overlay, and an answer-distribution stack. Each chart has an HTML text equivalent. `js/report/report.js` assembles a full-screen publication with executive summary, contents navigation, findings, dimension reports, policy table, ideological comparisons, cross-dimensional analysis, per-item evidence, reading recommendations, methodology, JSON export and print/PDF styling. `css/report.css` supplies compact answer pills with automatic advancement, responsive layout and print rules. All state stays in `localStorage`; there is no tracking or network request beyond loading local assets.

**Verification.** `tests/assessment.test.js` runs eleven automated checks with Node's test runner: item count and 5/5 key balance; extreme, neutral and agreement-bias cases; five-point step size; mixed versus neutral answers; invalid and incomplete data; sensitivity bounds; tradition range validity; symmetric ranking with no built-in preference; deterministic interpretation; and report section/text-equivalent completeness. All pass. The site build reports no health issues, and the quiz and theme/width controls were checked in headless Chrome.

## Open questions and known limitations

1. **Dimensionality.** No factor analysis has been run on these 100 items. Ten axes may collapse into fewer; Representation may correlate with Authority, Governance with Economy, and Religion with Change.
2. **Validation.** No pilot, reliability estimate (alpha/omega), test–retest ICC, measurement invariance or known-groups evidence exists. The band cut-offs are display conventions.
3. **Tradition vectors.** All 27 centres are provisional editorial estimates with declared ranges. They are not survey means, expert elicitations or claims that cited authors endorsed the coordinates.
4. **Coverage.** 100 statements sample particular institutions. They do not exhaust political thought; unassessed areas are omitted rather than inferred.
5. **Distance.** L1 gap is a display convention over a fixed reference set. It is not a probability, a percentage of agreement, or a measure of ideological membership.
6. **Language and culture.** Items are in English and reflect Anglophone institutional examples. Cross-language or cross-country comparison requires invariance testing.
7. **External research.** Several cited sources are paywalled, preprints or verified only through metadata; the four research sections flag these individually.
8. **Resources.** The reading list is verified but not exhaustive, and especially thin on non-Western and non-English scholarship.

These limitations are part of the instrument, not footnotes to be removed when presenting results.
