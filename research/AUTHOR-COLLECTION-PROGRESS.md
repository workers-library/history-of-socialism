# Author collection — progress tracker

This tracker records the completed **Authors and Intellectual Traditions**
collection. It follows `research/AUTHOR-PROFILES-STANDARD.md` and the governing
editorial standard in `research/MASTER-STANDARD.md`.

**Last updated:** 2026-11-26

**Phase 2 status:** complete. All 40 author profiles (25 priorities, Luxemburg and 14 further authors) have a dossier and a published profile, all pass the compliance checker, and the rebuilt site passes the generator's link check.

## Phase 2 (in progress)

The first phase delivered the 25 priority authors plus Luxemburg and fixed search. This phase addresses the remaining review findings:

- **Underrepresented traditions** — 14 further authors researched: Mariátegui (Latin America), Kropotkin, Bakunin, Goldman and Bookchin (anarchism/social ecology), Sison (Philippines), Kelsey (Aotearoa New Zealand), Hauʻofa (Pacific), Ostrom, Lange, Nove and Kornai (economic alternatives), Varoufakis and Graeber (contemporary political economy). Dossiers are in `research/authors/`; profiles follow the same 13-section standard.
- **Recommended reading** — added as a distinct profile section in `AUTHOR-PROFILES-STANDARD.md`; being applied across the existing profiles.
- **Criticism gaps** — targeted effort to open the blocked Chomsky criticism sources.
- **Independent verification** — completed: `research/AUTHOR-COLLECTION-VERIFICATION.md` re-checked 22 corrections against sources opened independently; no correction was wrong.
- **Chomsky criticism gap** — resolved: full texts of Mullen–Klaehn, Cohen–Rogers, Kiernan and the Chomsky–Metzl correspondence were opened; the Cambodia and propaganda-model paragraphs were replaced with sourced accounts; merged into `book-src/noam-chomsky.md`.
- **Commit** — the rebuilt site and the whole research record are committed as one change after verification.

## Phase 2 authors

| Author | Slug | Order | Result |
|---|---|---:|---|
| José Carlos Mariátegui | jose-carlos-mariategui | 142 | Done |
| Peter Kropotkin | peter-kropotkin | 143 | Done |
| Mikhail Bakunin | mikhail-bakunin | 144 | Done |
| Emma Goldman | emma-goldman | 145 | Done |
| Murray Bookchin | murray-bookchin | 146 | Done |
| José María Sison | jose-maria-sison | 147 | Done |
| Jane Kelsey | jane-kelsey | 148 | Done |
| Epeli Hauʻofa | epeli-hauofa | 149 | Done |
| Oskar Lange | oskar-lange | 150 | Done |
| Alec Nove | alec-nove | 151 | Done |
| János Kornai | janos-kornai | 152 | Done |
| Elinor Ostrom | elinor-ostrom | 153 | Done |
| Yanis Varoufakis | yanis-varoufakis | 154 | Done |
| David Graeber | david-graeber | 155 | Done |

All 14 use the 13-section published standard, including the distinct Recommended reading section, and every dossier records opened URLs and unverified facts.

## Result (phase 1)

All 26 planned author profiles (the 25 editorial priorities plus Rosa Luxemburg)
have a primary-source research dossier in `research/authors/` and a published
profile in `book-src/`. Every profile passes `research/check-author-profiles.py`,
every internal link resolves in the site generator, and all 26 profiles appear
in the rebuilt search index.

| # | Author | Slug | Order | Dossier | Profile | Check |
|---:|---|---|---:|---|---|---|
| 1 | Michael Parenti | michael-parenti | 115 | Done | Done | Pass |
| 2 | Domenico Losurdo | domenico-losurdo | 117 | Done | Done | Pass |
| 3 | Noam Chomsky | noam-chomsky | 118 | Done | Done | Pass |
| 4 | Edward S. Herman | edward-s-herman | 119 | Done | Done | Pass |
| 5 | Michael Hudson | michael-hudson | 120 | Done | Done | Pass |
| 6 | Richard D. Wolff | richard-wolff | 121 | Done | Done | Pass |
| 7 | Samir Amin | samir-amin | 122 | Done | Done | Pass |
| 8 | David Harvey | david-harvey | 123 | Done | Done | Pass |
| 9 | Walter Rodney | walter-rodney | 124 | Done | Done | Pass |
| 10 | Frantz Fanon | frantz-fanon | 125 | Done | Done | Pass |
| 11 | William Blum | william-blum | 126 | Done | Done | Pass |
| 12 | Howard Zinn | howard-zinn | 127 | Done | Done | Pass |
| 13 | Vijay Prashad | vijay-prashad | 128 | Done | Done | Pass |
| 14 | John Pilger | john-pilger | 129 | Done | Done | Pass |
| 15 | Antonio Gramsci | antonio-gramsci | 130 | Done | Done | Pass |
| 16 | Eric Hobsbawm | eric-hobsbawm | 131 | Done | Done | Pass |
| 17 | Harry Braverman | harry-braverman | 132 | Done | Done | Pass |
| 18 | Ellen Meiksins Wood | ellen-meiksins-wood | 133 | Done | Done | Pass |
| 19 | Silvia Federici | silvia-federici | 134 | Done | Done | Pass |
| 20 | Angela Davis | angela-davis | 135 | Done | Done | Pass |
| 21 | Mark Fisher | mark-fisher | 136 | Done | Done | Pass |
| 22 | Paul Sweezy | paul-sweezy | 137 | Done | Done | Pass |
| 23 | Mike Davis | mike-davis | 138 | Done | Done | Pass |
| 24 | Jason Hickel | jason-hickel | 139 | Done | Done | Pass |
| 25 | John Bellamy Foster | john-bellamy-foster | 140 | Done | Done | Pass |
| 26 | Rosa Luxemburg | rosa-luxemburg | 141 | Done | Done | Pass |

## Verification evidence

- `python3 research/check-author-profiles.py` → **26 profiles, 26 dossiers, 0 errors, 0 warnings**.
- `lotus-docs check --docs book-src` → **Documentation health: nothing to report**.
- `python3 research/build-site.py` → **Generated 147 pages for 142 documents**; rebuilt `docs/` from `book-src/`.
- Search index contains all 26 author profiles; all 27 published collection pages exist under `docs/`.
- `node --check docs/assets/client.js` → JS syntax OK.
- Functional search test (`/tmp/opencode/test-search.js`, minimal DOM stub) → fetch
  `/history-of-socialism/search-index.json` and result link
  `/history-of-socialism/michael-parenti`, both correctly prefixed.
- Zero unprefixed internal links remain in generated HTML.

## Corrections made during research

The research rejected titles or attributions from the original brief that primary
sources did not support: Hudson's *Geopolitics*, Hickel's *The Inequality Machine*
and "imperial mode of living", Davis's *Blue-Eyed Racism*, Federici's unverified
commons title, Blum's *Hope Crushed*, Wolff's *Capitalism at Work* and *The
Economics of Marxism*, Prashad's *The Dictator's Shadow* and *Leftover Women*,
Pilger's *The Year of the Soldiers* and the Burma book, Sweezy's *The Current
Economic Crisis* and the Magdoff co-authorship of *Monopoly Capital*, Foster's
*Capitalism and the Age of Climate Change* and the "Robert Wasner" co-author,
Rodney's "output of exploitation" wording, Fisher's 1967 birth year and "Vampire
Cast of Capitalism", Amin's *A Life of Learning*, Herman's *Democracy and the
Media*, Wood's *The capitalist economy: an introduction*, Losurdo's *The Communist
West* and *Eurocentrism and the Dialectics of Capitalism*, and Luxemburg's 1917
composition date for *The Russian Revolution*. Each is recorded as unverified in
the relevant dossier rather than silently changed.

## Remaining editorial work

Profiles are marked `research-stage` as required by the standard. The remaining
work is the same as for the rest of the book: independent specialist review of
representative profiles, physical archival access where claims depend on it, and
opening the blocked or paywalled sources listed in each dossier.
