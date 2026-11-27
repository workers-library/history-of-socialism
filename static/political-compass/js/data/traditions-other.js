// Provisional illustrative tradition vectors for the ten-axis compass.
// Axis order: 0 Economy (Collective/Egalitarian <-> Private/Market),
// 1 Authority (Libertarian <-> Authoritarian), 2 Community (Individualist <-> Communitarian),
// 3 Change (Traditional <-> Progressive), 4 Scope (Nationalist <-> Cosmopolitan),
// 5 Ecology (Growth-oriented <-> Ecological), 6 Governance (Participatory <-> Technocratic),
// 7 Religion (Religious <-> Secular), 8 Representation (Populist <-> Pluralist),
// 9 Justice (Retributive <-> Restorative).
// Every center and range is an editorial hypothesis, not a measurement. See each note.

export const TRADITIONS = [
  {
    id: "liberalism",
    name: "Liberalism",
    family: "Liberal",
    era: "17th century-present",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe the broad liberal family, mainly its constitutional and civil-libertarian core in the 19th-21st centuries; the wide Economy range deliberately spans classical and social liberalism. The private-property/negative-liberty placement follows the SEP Liberalism entry, sections 1-2; the positive-liberty and social-justice reading follows its sections 2.2-2.3; the cosmopolitan/state-centred split follows section 4.2. Classifying any single party as simply liberal is contested because the SEP entry itself says liberalism fractures into competing visions.",
    center: [55, -65, -60, 25, 25, 10, 25, 60, 65, -10],
    range: [[20, 90], [-90, -40], [-90, -20], [-10, 70], [-30, 80], [-30, 60], [-20, 70], [20, 95], [35, 95], [-60, 30]],
    subtraditions: ["Classical liberalism", "Social liberalism", "Political liberalism (Rawlsian)", "Liberal nationalism (overlap)"],
    principles: ["Individual rights and liberty under law", "Constitutional limits on political authority", "Private property and freedom of contract", "Tolerance of diverse conceptions of the good", "Public justification of coercive laws"],
    internalDebates: "Old versus new liberalism: whether liberty is primarily absence of interference or also effective capacity (SEP Liberalism, sections 1-2). Comprehensive versus purely political doctrine. Cosmopolitan versus state-centred reach. The site's Political Compass FAQ notes that 'liberal' means different economic things in the United States and elsewhere, so the Economy range is intentionally broad.",
    references: [
      { title: "Liberalism (Stanford Encyclopedia of Philosophy)", author: "Stanford Encyclopedia of Philosophy", year: "1996; revised 2026", url: "https://plato.stanford.edu/entries/liberalism/" },
      { title: "Frequently Asked Questions", author: "Political Compass / Pace News Ltd", year: "updated 2026-11-13", url: "https://www.politicalcompass.org/faq" }
    ]
  },
  {
    id: "classical-liberalism",
    name: "Classical liberalism",
    family: "Liberal",
    era: "18th-19th centuries; revived from the 20th century",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe the 'old' liberal current from Locke and the Scottish Enlightenment through 19th-century free-trade liberalism and its Hayekian revival, not every self-described classical liberal. The strong private-property and negative-liberty placement is justified by SEP Liberalism section 2.1, which ties liberty to private property and contract; the modest social-policy range reflects the same section's observation that 19th-century classical liberals endorsed public infrastructure, regulation and even a modest social minimum. Placement on Justice and Religion is especially uncertain and not directly specified by the cited sources.",
    center: [80, -80, -75, 10, 10, -25, 10, 45, 70, -30],
    range: [[55, 95], [-95, -55], [-90, -50], [-30, 50], [-40, 60], [-70, 20], [-40, 60], [0, 90], [40, 95], [-70, 20]],
    subtraditions: ["Lockean property liberalism", "Manchester / free-trade liberalism", "Hayekian classical liberalism", "Minimal-state liberalism (overlap)"],
    principles: ["Private property as a condition of liberty", "Freedom of contract, trade and occupation", "Limited government under general rules", "Dispersal of power through independent property", "Scepticism of leveling redistribution"],
    internalDebates: "SEP Liberalism 2.1 describes a spectrum from near-anarchist views to acceptance of public goods and a social minimum; the political compass FAQ separates economic from social liberty and notes that the term is used differently across countries. Whether classical liberalism is a precursor of libertarianism or a distinct tradition is contested in SEP Libertarianism.",
    references: [
      { title: "Liberalism, section 2.1 Classical Liberalism", author: "Stanford Encyclopedia of Philosophy", year: "1996; revised 2026", url: "https://plato.stanford.edu/entries/liberalism/" },
      { title: "The Nolan Chart", author: "The Advocates for Self-Government", year: "chart originated 1969; page accessed 2026", url: "https://www.theadvocates.org/nolan-chart/" }
    ]
  },
  {
    id: "social-liberalism",
    name: "Social liberalism",
    family: "Liberal",
    era: "Late 19th century-present",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe the 'new', welfare-state or social-justice liberalism that took shape by the early 20th century and its late-20th-century Rawlsian form, not classical liberalism and not social democracy. The moderate Economy score and progressive Change score are justified by SEP Liberalism sections 2.2-2.3, which describe doubt in the unregulated market, acceptance of state supervision, and the difference principle; the civil-liberties placement follows section 1. The site's own FAQ documents the US usage in which 'liberal' means socially libertarian and economically interventionist. Boundaries with social democracy are contested.",
    center: [15, -65, -45, 65, 60, 25, 40, 75, 70, 35],
    range: [[-20, 55], [-90, -35], [-80, 10], [20, 90], [0, 95], [-20, 75], [-10, 85], [30, 95], [35, 95], [-20, 75]],
    subtraditions: ["British new liberalism", "Welfare-state liberalism", "Rawlsian liberal egalitarianism", "Liberal socialism (overlap)"],
    principles: ["Positive liberty and effective opportunity", "Social justice and redistribution", "Civil liberties and personal autonomy", "Public services funded by taxation", "Equal status and anti-discrimination"],
    internalDebates: "SEP Liberalism 2.3 notes Rawls's later preference for a property-owning democracy over welfare-state capitalism, and section 4.2 notes disagreement over whether egalitarian principles stop at national borders. Communitarian critics dispute the liberal account of the self; see SEP Communitarianism.",
    references: [
      { title: "Liberalism, sections 2.2-2.4 (The 'New Liberalism'; social justice; reach)", author: "Stanford Encyclopedia of Philosophy", year: "1996; revised 2026", url: "https://plato.stanford.edu/entries/liberalism/" },
      { title: "Frequently Asked Questions", author: "Political Compass / Pace News Ltd", year: "updated 2026-11-13", url: "https://www.politicalcompass.org/faq" }
    ]
  },
  {
    id: "libertarianism",
    name: "Libertarianism",
    family: "Libertarian",
    era: "19th century-present (named from the 20th century)",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe the philosophical family surveyed by SEP Libertarianism, especially its post-1945 market-oriented mainstream, and are not a score for any party. The extreme private-property and anti-coercion placements are justified by the SEP entry's account of self-ownership, voluntary exchange and the rejection of redistributive coercion; the internal spread reflects its explicit left/right distinctions (left-libertarianism1 and 2 versus right-libertarianism). The Political Compass FAQ and the Advocates' Nolan Chart justify separating economic from personal liberty. The Justice coordinate is deliberately near zero because SEP notes that rectification of wrongful takings is part of libertarian entitlement theory.",
    center: [90, -92, -85, 5, 10, -25, -30, 80, 60, 5],
    range: [[65, 100], [-100, -65], [-95, -55], [-40, 60], [-50, 80], [-80, 40], [-90, 20], [30, 100], [25, 90], [-50, 60]],
    subtraditions: ["Right-libertarianism / minarchism", "Left-libertarianism (two distinct uses)", "Classical liberalism (overlap)", "Anarcho-capitalism", "Individualist anarchism (overlap)"],
    principles: ["Self-ownership", "Non-aggression and voluntary association", "Private property and freedom of contract", "Historical entitlement rather than end-state distribution", "Scepticism of state coercion"],
    internalDebates: "SEP Libertarianism section 4 distinguishes radical left-libertarianism from egalitarian left-libertarianism and right-libertarianism; section 5 covers disagreements between anarchists and minarchists. The Political Compass FAQ warns that US and European uses of 'libertarian' differ, so the label alone does not determine a coordinate.",
    references: [
      { title: "Libertarianism (Stanford Encyclopedia of Philosophy)", author: "Stanford Encyclopedia of Philosophy", year: "2002; revised 2023", url: "https://plato.stanford.edu/entries/libertarianism/" },
      { title: "The Nolan Chart", author: "The Advocates for Self-Government", year: "chart originated 1969; page accessed 2026", url: "https://www.theadvocates.org/nolan-chart/" },
      { title: "Frequently Asked Questions", author: "Political Compass / Pace News Ltd", year: "updated 2026-11-13", url: "https://www.politicalcompass.org/faq" }
    ]
  },
  {
    id: "anarcho-capitalism",
    name: "Anarcho-capitalism",
    family: "Libertarian",
    era: "Mid-20th century-present",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe the pro-capitalist, stateless current associated with Rothbard and described in SEP Anarchism section 2.4 and SEP Libertarianism section 5, not social anarchism or anarcho-syndicalism. Authority and Economy are placed at their poles because the source describes rejection of all states and strong private-property rights. The Governance coordinate is negative because binding decisions are assigned to contracting individuals and private arbitration rather than expert commissions; this is an analogy, not a claim that anarcho-capitalists endorse democratic assemblies. The Political Compass FAQ justifies keeping this position distinct from left-libertarian and socialist anarchist currents. Classification and the practical meaning of private law remain contested.",
    center: [100, -100, -90, 10, -10, -45, -50, 80, 50, 10],
    range: [[90, 100], [-100, -85], [-100, -70], [-40, 60], [-70, 50], [-90, 10], [-100, -20], [40, 100], [10, 85], [-40, 60]],
    subtraditions: ["Rothbardian anarcho-capitalism", "Voluntarism", "Polycentric-law proposals", "Nozickian minimal state (adjacent, not anarchist)"],
    principles: ["Abolition of the state", "Self-ownership and absolute private property", "Voluntary exchange and contract", "Private provision of law, defence and arbitration", "Non-aggression as a foundational rule"],
    internalDebates: "SEP Anarchism 2.4 reports that Rothbard preferred the term 'non-archism' because anarchism was commonly associated with communist currents, and that individualist and socialist anarchisms rest on different moral premises. SEP Anarchism notes that Rothbard rejected Nozick's invisible-hand route to a minimal state. Whether this current belongs inside anarchism at all is contested.",
    references: [
      { title: "Anarchism, sections 2.4 and 3 (Individualism, Libertarianism and Socialist Anarchism)", author: "Stanford Encyclopedia of Philosophy", year: "2017; revised 2025", url: "https://plato.stanford.edu/entries/anarchism/" },
      { title: "Libertarianism, section 5 Anarchism and the State", author: "Stanford Encyclopedia of Philosophy", year: "2002; revised 2023", url: "https://plato.stanford.edu/entries/libertarianism/" },
      { title: "Frequently Asked Questions", author: "Political Compass / Pace News Ltd", year: "updated 2026-11-13", url: "https://www.politicalcompass.org/faq" }
    ]
  },
  {
    id: "conservatism",
    name: "Conservatism",
    family: "Conservative",
    era: "Late 18th century-present",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe the Burkean and broader constitutional-conservative current from the French Revolution onward, as characterised in SEP Conservatism, not reactionary extremes and not every party calling itself conservative. The traditional Change score and communitarian Community score follow the SEP account of inherited institutions, prejudice and gradual reform; the private-property score follows its discussion of property, family and religion as mediating institutions. The broad ranges reflect explicit SEP caveats: conservatism is contested, sometimes called a disposition rather than an ideology, and varies by country. Placement on Ecology and Religion is extrapolated from those discussions and is especially provisional.",
    center: [40, 60, 55, -70, -60, -15, 30, -15, 35, -45],
    range: [[0, 85], [-10, 95], [10, 90], [-95, -20], [-95, 0], [-60, 50], [-50, 80], [-95, 70], [-40, 90], [-90, 20]],
    subtraditions: ["Burkean pragmatic conservatism", "Rational / idealist conservatism", "Liberal conservatism", "National conservatism", "Religious conservatism"],
    principles: ["Presumption in favour of inherited institutions", "Scepticism of abstract rationalist planning", "Gradual, experience-based reform", "Duty, authority and social order", "Family, property and religion as mediating institutions"],
    internalDebates: "SEP Conservatism distinguishes conservatism from reaction and from neoliberalism and neo-conservatism, and contrasts pragmatic with universalist 'rational' conservatism. The Oxford Handbook of Political Ideologies lists conservatism, Christian democracy and nationalism as distinct chapters, and national cases diverge sharply in party form.",
    references: [
      { title: "Conservatism (Stanford Encyclopedia of Philosophy)", author: "Stanford Encyclopedia of Philosophy", year: "2015; revised 2025", url: "https://plato.stanford.edu/entries/conservatism/" },
      { title: "The Oxford Handbook of Political Ideologies (contents listing)", author: "Michael Freeden, Lyman Tower Sargent and Marc Stears, eds.", year: "2013", url: "https://academic.oup.com/edited-volume/34324" }
    ]
  },
  {
    id: "christian-democracy",
    name: "Christian democracy",
    family: "Christian democratic",
    era: "19th century-present",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe post-1945 Western European Christian democratic parties and the Catholic social teaching tradition behind them, not every Christian political movement. The social-market Economy score and the moderate traditionalism follow Pombeni's Oxford Handbook chapter and Invernizzi Accetti's Cambridge study of the ideology; the religious-institutions score follows the explicitly Christian doctrinal roots described there and in Rerum Novarum. The Vatican source also states that the Church is neutral among forms of state, which is why the Authority range is wide and no authoritarian placement is implied. Protestant and secularised Christian democratic parties differ, so the Religion range is broad.",
    center: [25, 35, 65, -35, 0, -10, 30, -45, 55, 0],
    range: [[-20, 70], [-30, 80], [20, 90], [-80, 20], [-70, 60], [-50, 50], [-30, 70], [-95, 40], [10, 90], [-60, 50]],
    subtraditions: ["Catholic social teaching parties", "Protestant Christian democracy", "Christian-social conservatism (overlap)", "European People's Party-type parties"],
    principles: ["Human dignity and the common good", "Subsidiarity and solidarity", "Christian social doctrine applied to labour and welfare", "Constitutional democracy and Christian-inspired pluralism", "Market economy bounded by social obligations"],
    internalDebates: "Pombeni treats Christian democracy as a new answer to church-state relations and notes that Reformed churches developed different social doctrines. Invernizzi Accetti notes the ideology is understudied relative to socialism, liberalism and conservatism. Rerum Novarum defends private property while insisting on duties to workers; the relation between that teaching and modern party policy is disputed.",
    references: [
      { title: "Christian Democracy, in The Oxford Handbook of Political Ideologies, pp. 312-328", author: "Paolo Pombeni", year: "2013", url: "https://doi.org/10.1093/oxfordhb/9780199585977.013.0003" },
      { title: "What is Christian Democracy? Politics, Religion and Ideology, Introduction", author: "Carlo Invernizzi Accetti", year: "2019", url: "https://www.cambridge.org/core/books/what-is-christian-democracy/introduction/B43F1CEC3E03DD20CC595C90E5ED3AC5" },
      { title: "Rerum Novarum, Encyclical of Pope Leo XIII on Capital and Labor", author: "Pope Leo XIII / The Holy See", year: "1891", url: "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html" }
    ]
  },
  {
    id: "nationalism",
    name: "Nationalism",
    family: "Nationalist",
    era: "19th century-present",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe nationalism as a belief system about nationhood and self-determination as defined in SEP Nationalism, with the nationalist Scope pole justified by the entry's three shared claims about national value, special duties to compatriots and political self-determination. The very wide Economy, Authority and Change ranges follow the SEP statement that one can be a conservative nationalist or a socialist nationalist, so nationalism alone does not fix those coordinates. Name-based inferences are contested: the Political Compass FAQ explicitly rejects treating the word 'national socialist' as evidence of socialist economics, and this file follows that caution. No judgement of worth is implied; the placement describes documented claims and institutions, not a ranking of peoples or parties.",
    center: [0, 45, 70, -35, -80, -20, 35, -25, -35, -35],
    range: [[-80, 85], [-60, 95], [20, 100], [-90, 40], [-100, -20], [-70, 50], [-60, 90], [-95, 60], [-95, 80], [-90, 30]],
    subtraditions: ["Civic / liberal nationalism", "Ethnic nationalism", "Cultural nationalism", "Statist nationalism", "Socialist nationalism", "Conservative nationalism"],
    principles: ["Nations are real and valuable communities", "Special obligations to compatriots", "Collective self-determination", "Shared public culture and memory", "Territorial autonomy and sovereignty"],
    internalDebates: "SEP Nationalism section 4 contrasts liberal with conservative nationalism and civic with ethnic accounts; section 5 treats self-determination and secession. It also records extensive philosophical criticism of national partiality. The Oxford Handbook of Political Ideologies treats nationalism as a separate ideological family. Because the label combines with many doctrines, this vector should not be read as a prediction about any party called nationalist.",
    references: [
      { title: "Nationalism (Stanford Encyclopedia of Philosophy)", author: "Stanford Encyclopedia of Philosophy", year: "2025", url: "https://plato.stanford.edu/entries/nationalism/" },
      { title: "Frequently Asked Questions, section 'Why is Hitler slightly right? The Nazis were socialists...'", author: "Political Compass / Pace News Ltd", year: "updated 2026-11-13", url: "https://www.politicalcompass.org/faq" },
      { title: "The Oxford Handbook of Political Ideologies (contents listing, chapter 25 Nationalism)", author: "Michael Freeden, Lyman Tower Sargent and Marc Stears, eds.", year: "2013", url: "https://academic.oup.com/edited-volume/34324" }
    ]
  },
  {
    id: "fascism",
    name: "Fascism",
    family: "Authoritarian nationalist",
    era: "1919-1945 regimes; later successor movements",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe documented institutions and practices of the Italian and German fascist regimes as analysed by Paxton (2004) and the rules of single-party, leader-centred rule; they are not a ranking of peoples and not a claim that any name ending in 'socialist' settles economic doctrine. The Authority, Community and Scope placements follow Paxton's account of one-party rule, forced national unity and expansion; the moderate Economy placement follows the Political Compass FAQ's discussion of private corporations under the Reich and its explicit warning that name-based inferences about Nazism are contested. Paxton stresses what fascists did rather than what they said and notes wide national variation, hence the broad Change and Religion ranges. The Oxford Handbook treats fascism as a distinct ideological chapter. All placements here remain hypotheses.",
    center: [25, 95, 85, -70, -90, -30, 50, -40, -70, -70],
    range: [[-20, 70], [75, 100], [40, 100], [-100, 20], [-100, -60], [-70, 40], [0, 90], [-95, 60], [-100, -20], [-100, -20]],
    subtraditions: ["Italian Fascism", "German Nazism", "National syndicalism (historical current)", "Fascist-influenced movements outside Europe"],
    principles: ["Single party and authoritative leader (descriptive)", "Mobilised national community defined by inclusion and exclusion", "State direction of a largely privately owned economy (descriptive)", "Expansionist and martial regeneration (descriptive)", "Propaganda and mass ritual (descriptive)"],
    internalDebates: "Paxton argues that fascism varied by national setting and that no single definition has universal assent; the publisher's excerpt shows the 1919 Fascist program combining nationalist and radical social demands. The Political Compass FAQ distinguishes Nazism as a party platform from fascism as a structure of government and disputes the inference from a party name to socialist economics. SEP Nationalism records the scholarly contest over conflating nationalism with racism. These disputes are the reason the Economy and Change ranges are wide.",
    references: [
      { title: "The Anatomy of Fascism (publisher page and excerpt, chapter 1)", author: "Robert O. Paxton", year: "2004; paperback 2005", url: "https://www.penguinrandomhousehighereducation.com/book?isbn=9781400033911" },
      { title: "Frequently Asked Questions, section 'Why is Hitler slightly right? The Nazis were socialists...'", author: "Political Compass / Pace News Ltd", year: "updated 2026-11-13", url: "https://www.politicalcompass.org/faq" },
      { title: "The Oxford Handbook of Political Ideologies (contents listing, chapter 26 Fascism)", author: "Michael Freeden, Lyman Tower Sargent and Marc Stears, eds.", year: "2013", url: "https://academic.oup.com/edited-volume/34324" }
    ]
  },
  {
    id: "green-politics",
    name: "Green politics",
    family: "Green",
    era: "1970s-present",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe the party-political current whose founding text is the Global Greens Charter, updated through 2023, not every environmental movement. The extreme ecological score and strongly participatory Governance score are justified directly by the Charter's principles of Ecological Wisdom ('live within the ecological and resource limits of the planet') and Participatory Democracy; the positive Scope score follows its 'Acting globally' section. The negative Authority and pluralist Representation scores follow the Charter's nonviolence and democracy commitments. Economy is placed near the middle with a wide range because the Charter demands social justice and equity while individual Green parties differ on markets; the ten-axis expansion note explains why Ecology is not just a second Economy axis.",
    center: [-30, -75, 10, 80, 55, 90, -80, 70, 55, 65],
    range: [[-80, 40], [-95, -35], [-40, 70], [30, 100], [0, 100], [50, 100], [-100, -40], [20, 95], [10, 90], [10, 100]],
    subtraditions: ["Green parties (Global Greens Charter)", "Eco-socialism / green socialism (overlap)", "Ecofeminism", "Deep ecology and green conservatism (overlap)"],
    principles: ["Ecological wisdom and planetary limits", "Social justice together with environmental justice", "Participatory democracy", "Nonviolence", "Sustainability and respect for diversity"],
    internalDebates: "The Charter is a common founding document, not a detailed economic programme; Green parties differ over market mechanisms, nuclear power and migration. The research proposal for the ten-axis compass argues that a growth-oriented trade unionist and a green socialist must be distinguishable, which is why Ecology is scored separately from Economy.",
    references: [
      { title: "Global Greens Charter (official charter page, first adopted Canberra 2001, updated Korea 2023)", author: "Global Greens", year: "2001; updated 2023", url: "https://globalgreens.org/about/charter" },
      { title: "Charter of the Global Greens (2023 PDF)", author: "Global Greens", year: "2023", url: "https://globalgreens.org/wp-content/uploads/2023/07/GlobalGreens_Charter_2023.pdf" },
      { title: "The Oxford Handbook of Political Ideologies (contents listing, chapter 23 Green Ideology)", author: "Michael Freeden, Lyman Tower Sargent and Marc Stears, eds.", year: "2013", url: "https://academic.oup.com/edited-volume/34324" }
    ]
  },
  {
    id: "georgism",
    name: "Georgism",
    family: "Economic reform",
    era: "19th century-present",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe Henry George's single-tax doctrine in Progress and Poverty (1879) and its modern descendants, not a political party. The near-centre Economy score reflects George's proposal to keep private possession of produced wealth while taxing land value and abolishing land speculation, as argued in Books VIII and IX of the Econlib text; the moderate positive Justice score reflects his claim that land rent is a common resource. The reformist Change and free-trade Scope scores follow the work itself. Whether Georgism belongs on the liberal or socialist side is contested: George wrote that his proposal would reach 'the ideal of the socialist, but not through government repression'. Later geolibertarian and geosocialist readings pull the Economy range in opposite directions.",
    center: [10, -60, -20, 35, 20, 10, 20, 60, 60, 45],
    range: [[-40, 60], [-90, -20], [-70, 20], [-10, 70], [-30, 70], [-40, 60], [-30, 60], [20, 90], [20, 90], [-10, 80]],
    subtraditions: ["Single-tax Georgism", "Geolibertarianism", "Geosocialism", "Land-value-tax reform movements"],
    principles: ["Equal right to land", "Tax land value rather than labour or capital", "Abolition of land speculation", "Public revenue from economic rent", "Free trade"],
    internalDebates: "George rejected both the socialist proposal of common ownership of all property and the protection of land monopoly; later readers disagree over which side of the liberal-socialist divide his doctrine belongs on. The application of a land-value tax to contemporary cities and to ecological questions is also contested.",
    references: [
      { title: "Progress and Poverty (full text, Books VIII-IX)", author: "Henry George", year: "1879", url: "https://www.econlib.org/library/YPDBooks/George/grgPP.html" }
    ]
  },
  {
    id: "communitarianism",
    name: "Communitarianism",
    family: "Communitarian",
    era: "1980s-present (with older roots)",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe the philosophical and political communitarianism surveyed in SEP Communitarianism, especially its 1980s critique of Rawls and the 1990s policy current, not every appeal to community. The strongly communitarian Community score and negative Governance score are justified by the SEP account of constitutive attachments and of civil society against centralised bureaucracy; the moderate traditional Change score follows its account of tradition and social context. Authority is deliberately near the middle: SEP notes that political communitarians took basic civil liberties for granted, while officially sponsored 'Asian values' versions used similar language for authoritarian purposes and are contested. Religion and Scope vary widely across the traditions discussed in that entry.",
    center: [-10, -10, 85, -40, 0, 10, -70, 10, 45, 45],
    range: [[-60, 50], [-70, 60], [40, 100], [-90, 20], [-70, 60], [-40, 60], [-95, -20], [-70, 80], [0, 85], [-20, 85]],
    subtraditions: ["Philosophical communitarianism (Sandel, Taylor, MacIntyre, Walzer)", "Political communitarianism (Etzioni, Galston)", "Asian-values communitarianism (contested)", "Religious communitarianism"],
    principles: ["Communities partly constitute individual identity", "Special obligations to family, neighbourhood and nation", "Balance rights with responsibilities", "Civil society and local institutions over central bureaucracy", "Tradition and context in moral judgement"],
    internalDebates: "SEP notes that the main theorists did not identify as communitarians and that the label was often applied by critics. It also records the debate over the self, the contested 'Asian values' political uses, and the criticism that appeals to community can legitimate hierarchy. The proposed moratorium on new rights was later quietly dropped. These disputes justify the wide Authority and Religion ranges.",
    references: [
      { title: "Communitarianism (Stanford Encyclopedia of Philosophy)", author: "Stanford Encyclopedia of Philosophy", year: "2001; revised 2024", url: "https://plato.stanford.edu/entries/communitarianism/" }
    ]
  },
  {
    id: "distributism",
    name: "Distributism",
    family: "Christian social",
    era: "Early 20th century-present",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe the Belloc-Chesterton distributist current and its relation to Catholic social teaching, not Catholic social teaching as a whole. The high Community score and strongly participatory Governance score are justified by the Cambridge article on Belloc, Chesterton and distributism and by the encyclical Rerum Novarum, which treats the family as a society prior to the state and defends private property against both state socialism and concentration of wealth. The Catholic roots justify the religious pole, while the wide Economy range reflects the rejection both of concentrated capital and of collective state ownership. Distributism is a minority current whose classification is contested; no claim is made that the Vatican endorsed it as a system.",
    center: [20, 20, 85, -55, -20, 10, -75, -70, 55, 35],
    range: [[-30, 60], [-30, 70], [40, 100], [-90, -10], [-70, 30], [-40, 60], [-100, -30], [-100, -20], [10, 90], [-20, 80]],
    subtraditions: ["Belloc-Chesterton distributism", "Catholic social teaching (related tradition)", "Occupational guild and cooperative currents", "New distributism"],
    principles: ["Widely distributed productive property", "Family as a basic economic unit", "Subsidiarity and occupational association", "Critique of concentrated capital and centralised state ownership", "Just wage and just price"],
    internalDebates: "Mathews's Cambridge article describes distributism as a new political philosophy derived from Manning's social teaching, while Rerum Novarum itself rejects socialist common ownership and leaves specific systems open. Modern 'new distributism' differs from the early 20th-century movement. Whether distributism is a form of conservatism, socialism or a distinct third position is contested.",
    references: [
      { title: "Rerum Novarum, Encyclical of Pope Leo XIII on Capital and Labor", author: "Pope Leo XIII / The Holy See", year: "1891", url: "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html" },
      { title: "Hilaire Belloc, Gilbert and Cecil Chesterton and the Making of Distributism, British Catholic History 30(2), pp. 299-319", author: "Race Mathews", year: "2010; published online 2015", url: "https://www.cambridge.org/core/journals/british-catholic-history/article/abs/hilaire-belloc-gilbert-and-cecil-chesterton-and-the-making-of-distributism/2794B95CDE10D63529E998DD58B03FA1" },
      { title: "Catholic Social Teaching and Distributism (publisher page)", author: "Michael Hickey", year: "2017", url: "https://www.bloomsbury.com/us/catholic-social-teaching-and-distributism-9780761879992/" }
    ]
  },
  {
    id: "third-way",
    name: "Third Way politics",
    family: "Social democratic",
    era: "1990s-present",
    note: "Provisional editorial estimates, version 1, 2026-11-28; not measured data. Coordinates describe the programme set out in Anthony Giddens's The Third Way and its New Labour-style implementations, not social democracy in general and not all centre-left governments. The market-positive but egalitarian Economy score and the social-investment framing follow the publisher's chapter list ('The Social Investment State', 'The meaning of equality'); the cosmopolitan Scope score follows 'Into the Global Age' and 'Cosmopolitan democracy'; the participatory-to-technocratic Governance score follows 'Democratising democracy' combined with expert administration. The Political Compass FAQ's remark that New Labour sat to the right of pre-Thatcher Conservatives economically justifies a wide Economy range. Giddens claims the third way is a renewal of the left; critics dispute this, so the vector is contested.",
    center: [15, -40, 20, 55, 45, -10, 55, 75, 35, 20],
    range: [[-20, 60], [-80, 20], [-30, 70], [20, 85], [0, 90], [-50, 50], [0, 90], [30, 95], [-20, 80], [-70, 50]],
    subtraditions: ["New Labour / Blairism", "Giddensian social-investment state", "European social-democratic modernisation", "Third Way Christian democracy (overlap)"],
    principles: ["Beyond old social democracy and neoliberalism", "Social investment and active inclusion", "Market mechanisms with social protection", "Cosmopolitan governance and European integration", "Renewal of civil society and local democracy"],
    internalDebates: "Giddens presents the third way as part of the left rather than beyond left and right; critics on both left and right reject that framing. The Oxford Handbook treats social democracy as a separate chapter, and the Political Compass FAQ notes the economic shift of New Labour. Implementations differed across the UK, continental Europe and Latin America.",
    references: [
      { title: "The Third Way: The Renewal of Social Democracy (publisher page and table of contents)", author: "Anthony Giddens", year: "1998; paperback 1999", url: "https://www.wiley.com/en-gb/the-third-way-the-renewal-of-social-democracy-p-9780745622675" },
      { title: "Frequently Asked Questions, section on changing economic parameters", author: "Political Compass / Pace News Ltd", year: "updated 2026-11-13", url: "https://www.politicalcompass.org/faq" },
      { title: "The Oxford Handbook of Political Ideologies (contents listing, chapter 19 Social Democracy)", author: "Michael Freeden, Lyman Tower Sargent and Marc Stears, eds.", year: "2013", url: "https://academic.oup.com/edited-volume/34324" }
    ]
  }
];
