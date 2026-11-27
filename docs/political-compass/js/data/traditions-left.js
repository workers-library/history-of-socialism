// Ten-axis coordinates are provisional editorial estimates, version 1, 2026-11-28.
// Axis order: 0 Economy (Collective/Egalitarian <-> Private/Market),
// 1 Authority (Libertarian <-> Authoritarian),
// 2 Community (Individualist <-> Communitarian),
// 3 Change (Traditional <-> Progressive),
// 4 Scope (Nationalist <-> Cosmopolitan),
// 5 Ecology (Growth-oriented <-> Ecological),
// 6 Governance (Participatory <-> Technocratic),
// 7 Religion (Religious <-> Secular),
// 8 Representation (Populist <-> Pluralist),
// 9 Justice (Retributive <-> Restorative).
// Ranges express internal diversity and historical variation, not measured data.
// See research/political-compass-research.md, political-compass-validation-notes.md
// and political-compass-ten-axis-expansion.md for the method and its limits.

export const TRADITIONS = [
  {
    id: "marxism",
    name: "Marxism",
    family: "Socialist / communist",
    era: "1840s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. This entry represents classical Marxism in the sense of Marx and Engels's own texts (the Communist Manifesto and Marx's later critique of political economy), not the party-states that later claimed the label. Economy is far left because the Manifesto calls for the abolition of bourgeois property; Authority is placed on the libertarian side relative to Leninist party-states because political emancipation and the Paris Commune's recallable mandates are endorsed, but the band is wide because the revolutionary dictatorship and later statist appropriations are contested. Governance is technocratic-leaning because scientific socialism and planning are salient, while Ecology is growth-oriented because Marx celebrates the development of productive forces; both are contested by ecological and council-reading Marxists (Foster's reconstruction is one such wing). Religion is secular on the strength of the early anti-clerical writings, but Christian Marxist currents are excluded from the centre.",
    center: [-85, -60, 40, 85, 75, -20, 55, 75, 30, 55],
    range: [[-100, -70], [-80, -40], [20, 60], [60, 100], [50, 90], [-50, 10], [30, 80], [50, 90], [0, 60], [30, 80]],
    subtraditions: ["Orthodox Marxism (Kautsky, Plekhanov)", "Western Marxism (Lukács, Frankfurt School)", "Analytical Marxism (Cohen, Roemer)", "Ecological Marxism (Foster, Saito)", "Neo-Marxian economics"],
    principles: ["Social ownership of the means of production", "Historical materialism and class analysis", "Critique of exploitation and alienation", "Political emancipation and workers' self-emancipation", "Internationalism"],
    internalDebates: "Orthodox, Western, analytical and ecological Marxists disagree over historical materialism, the labour theory of value, the role of moral argument and the weight to give productivism. Reformist and revolutionary readings diverge over whether capitalism can be transcended by parliamentary means. The single centre cannot represent Marx's own reluctance to specify the institutions of communism.",
    references: [
      { title: "Manifesto of the Communist Party, Chapter 1", author: "Karl Marx and Friedrich Engels", year: "1848", url: "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch01.htm" },
      { title: "Karl Marx (Stanford Encyclopedia of Philosophy)", author: "Stanford Encyclopedia of Philosophy", year: "2003 / rev. 2025", url: "https://plato.stanford.edu/entries/marx/" }
    ]
  },
  {
    id: "marxism-leninism",
    name: "Marxism–Leninism",
    family: "Socialist / communist",
    era: "1920s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. This entry represents the party-state model codified in the Soviet Union and its Cold War analogues, as described by Brown (2013) and summarised in this repo's research note; it is not a claim about every self-described Marxist–Leninist party. Authority is high because the vanguard party and democratic centralism concentrate rule, and Governance is technocratic because central planning and party expertise displace workplace decision rights. Scope is moderately cosmopolitan in doctrine (world revolution, international liberation movements) but often national in practice, and Justice is deliberately given a wide band: official penal rhetoric of reformation conflicts with the punitive record the note asks readers to keep separate. Contested by Leninists who reject the Stalin-era codification and by Maoists and Trotskyists who claim a different lineage.",
    center: [-90, 85, 45, 40, 35, -55, 45, 90, -45, -35],
    range: [[-100, -70], [50, 100], [20, 70], [10, 70], [0, 70], [-90, -10], [-20, 90], [50, 100], [-90, 20], [-95, 60]],
    subtraditions: ["Soviet Stalinism", "Maoist and other party-state variants", "Eurocommunism (partial break)", "Anti-revisionist Marxist–Leninism", "Juche and other national adaptations"],
    principles: ["Vanguard party and democratic centralism", "Dictatorship of the proletariat as transition", "Social ownership through the state", "Planned industrialisation and collectivisation", "Anti-imperialism and support for national liberation"],
    internalDebates: "The relation between Lenin's own writings, Stalin's codification and later parties in power is disputed; Khrushchev-era de-Stalinisation, Eurocommunism and anti-revisionism split the label. Internationalist doctrine repeatedly collided with national state interests, and the theoretical end point of a stateless, classless society is not the same as the institutional record.",
    references: [
      { title: "What Is To Be Done?", author: "Vladimir Ilyich Lenin", year: "1902", url: "https://www.marxists.org/archive/lenin/works/1901/witbd/index.htm" },
      { title: "A comprehensive political compass: research and proposed design", author: "History of Socialism editorial team", year: "2026", url: "https://github.com/workers-library/history-of-socialism/blob/main/research/political-compass-research.md" }
    ]
  },
  {
    id: "trotskyism",
    name: "Trotskyism",
    family: "Socialist / communist",
    era: "1920s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. The coordinates describe the revolutionary internationalist current organised around Trotsky's theory of permanent revolution and the Left Opposition, not every group that later used the name. The Permanent Revolution places it firmly on the progressive and cosmopolitan side and opposed to party-state consolidation; Authority is therefore much lower than for the Soviet model in this repo's own v1 table, though Trotsky's own party-organising practice and the centralism of successor parties justify a broad band. Economy remains collective, Ecology productivist and Religion secular; Justice leans restorative through the tradition's penal critique. Contested where orthodox Trotskyist and heterodox currents disagree on the defence of degenerated workers' states.",
    center: [-90, -60, 30, 85, 80, -45, -25, 85, -10, 25],
    range: [[-100, -70], [-85, -30], [0, 60], [60, 100], [50, 95], [-85, 0], [-80, 60], [40, 100], [-80, 60], [-50, 90]],
    subtraditions: ["Orthodox Trotskyism (Fourth International)", "Leninist Trotskyism", "State-capitalist Trotskyism", "Morensite and heterogeneous currents"],
    principles: ["Permanent revolution", "World revolution against socialism in one country", "Workers' democracy and political revolution", "Critique of bureaucratic degeneration", "Internationalism"],
    internalDebates: "The founding disagreement with Stalinism concerned permanent revolution and socialism in one country; later splits concern whether the Soviet bloc states were degenerated workers' states, state capitalist, or something else, and how much party centralism is compatible with workers' democracy. The broad Authority and Governance ranges record that dispute rather than a settled fact.",
    references: [
      { title: "The Permanent Revolution (1931)", author: "Leon Trotsky", year: "1930 / 1931", url: "https://www.marxists.org/archive/trotsky/1931/tpr/pr-index.htm" },
      { title: "A comprehensive political compass: research and proposed design", author: "History of Socialism editorial team", year: "2026", url: "https://github.com/workers-library/history-of-socialism/blob/main/research/political-compass-research.md" }
    ]
  },
  {
    id: "maoism",
    name: "Maoism",
    family: "Socialist / communist",
    era: "1920s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. The coordinates represent the Chinese revolutionary current of the 1930s–1970s built on the mass line, peasant-based revolution and continuing revolution under dictatorship, as read in Mao's 1937 philosophical essays; they do not represent every later party that calls itself Maoist. Progressive and communitarian placements follow the essays' stress on transforming society and on contradictions among the people, while the high Authority centre reflects the party-state's mobilisational discipline; both bands are wide because Yenan practice and later Campaign practice differ. Scope is provisional: anti-imperialist internationalism coexists with strong Chinese national particularity. Religion is secular in doctrine, Ecology productivist, and Justice leans restorative because mediation and reform through labour were favoured in theory. Contested between continuing-revolution readings and developmental or nationalist appropriations.",
    center: [-85, 70, 55, 85, 35, -40, -25, 85, -55, 30],
    range: [[-100, -60], [30, 95], [25, 85], [60, 100], [0, 80], [-80, 20], [-85, 50], [40, 100], [-95, 0], [-40, 90]],
    subtraditions: ["Yenan-era Maoism", "Continuing revolution under the dictatorship of the proletariat", "Maoism–Third Worldism", "Post-Mao developmental appropriations"],
    principles: ["Peasant-led revolutionary alliance", "Mass line", "Contradiction and concrete analysis", "Self-reliance and anti-imperialism", "Continuous transformation of society"],
    internalDebates: "The 1937 essays present Marxism as a guide to action rather than a dogma, yet later institutionalisation produced a centralised party-state; readers disagree over how far the two can be reconciled. Anti-imperialist universalism sits beside a strong emphasis on China's concrete conditions, which is why Scope is given a wide band rather than a single precise value.",
    references: [
      { title: "On Practice", author: "Mao Tse-tung", year: "1937", url: "https://www.marxists.org/reference/archive/mao/selected-works/volume-1/mswv1_16.htm" },
      { title: "On Contradiction", author: "Mao Tse-tung", year: "1937", url: "https://www.marxists.org/reference/archive/mao/selected-works/volume-1/mswv1_17.htm" }
    ]
  },
  {
    id: "democratic-socialism",
    name: "Democratic socialism",
    family: "Socialist",
    era: "1890s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. This entry means the socialist current that seeks social ownership through democratic, often parliamentary, means, as distinguished from both social democracy's capitalist accommodation and Leninist party rule; the Stanford Encyclopedia of Philosophy entry on socialism supplies the institutional typology. Economy is collective but less extreme than Marxism–Leninism because mixed and cooperative forms are accepted; Authority is strongly libertarian and Representation pluralist because competitive parties and civil liberties are constitutive. Religion is placed near the secular pole but with a wide band because Christian socialist currents are real members of the family. Ecology and Justice ranges are broad because ecosocialist and penal-reform wings coexist with older productivist and punitive strands. Contested over whether democratic socialism requires the abolition of capitalism or only its extensive reform.",
    center: [-60, -75, -35, 80, 65, -10, -30, 50, 70, 65],
    range: [[-90, -25], [-95, -45], [-75, 10], [50, 100], [30, 90], [-70, 70], [-85, 40], [-30, 100], [10, 100], [10, 100]],
    subtraditions: ["Parliamentary democratic socialism", "Revolutionary democratic socialism", "Ecosocialism", "Christian socialism", "Participatory and cooperative socialism"],
    principles: ["Social ownership under democratic control", "Political and civil liberties", "Economic democracy including the workplace", "Equality and solidarity", "Internationalism"],
    internalDebates: "The boundary with social democracy is disputed: some define democratic socialism by the goal of replacing capitalism, others by the commitment to democratic means. Christian, secular, ecosocialist and productivist wings disagree about religion, growth and the pace of institutional change, which is why several bands are wide.",
    references: [
      { title: "Socialism (Stanford Encyclopedia of Philosophy)", author: "Pablo Gilabert and Martin O'Neill", year: "2019 / rev. 2024", url: "https://plato.stanford.edu/entries/socialism/" },
      { title: "Evolutionary Socialism", author: "Eduard Bernstein", year: "1899", url: "https://www.marxists.org/reference/archive/bernstein/works/1899/evsoc" }
    ]
  },
  {
    id: "social-democracy",
    name: "Social democracy",
    family: "Socialist / liberal-social",
    era: "1880s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. The coordinates represent the post-1945 Western European party family and its reformist ancestor in Bernstein's Evolutionary Socialism, not the revolutionary social democracy of the Second International before 1914. Economy is moderately collective because a mixed economy and welfare state are retained; Authority, Change and Representation follow this repo's v1 placement of constitutional liberties, reformism and pluralist party competition. Governance leans technocratic because expert administration and independent institutions are typical, Ecology is near the midpoint because postwar productivism now coexists with green wings, and Religion is broadly secular with a wide band for Christian-democratic and faith-based allies. Contested where parties differ on market liberalisation and on the depth of redistribution.",
    center: [-55, -70, -55, 75, 55, -10, 20, 55, 75, 60],
    range: [[-85, -20], [-95, -40], [-85, -20], [50, 95], [25, 85], [-70, 70], [-60, 85], [-20, 100], [20, 100], [0, 100]],
    subtraditions: ["Classical revisionism (Bernstein)", "Postwar Keynesian welfare social democracy", "Third Way and market-conforming social democracy", "Green social democracy", "Nordic social democracy"],
    principles: ["Mixed economy with public services", "Redistribution through taxation", "Constitutional civil liberties", "Electoral and party pluralism", "International labour and human-rights norms"],
    internalDebates: "Bernstein's challenge to catastrophic Marxism and the later Third Way revision of Keynesian commitments show that the label spans distinct economic programmes. The family also varies by country in its relation to organised religion, labour unions and national identity; these differences are carried in the ranges rather than in the centre.",
    references: [
      { title: "Evolutionary Socialism", author: "Eduard Bernstein", year: "1899", url: "https://www.marxists.org/reference/archive/bernstein/works/1899/evsoc" },
      { title: "Socialism (Stanford Encyclopedia of Philosophy)", author: "Pablo Gilabert and Martin O'Neill", year: "2019 / rev. 2024", url: "https://plato.stanford.edu/entries/socialism/" }
    ]
  },
  {
    id: "libertarian-socialism",
    name: "Libertarian socialism",
    family: "Socialist / libertarian",
    era: "1890s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. This entry means the socialist current that combines social ownership with decentralised, non-state decision-making, as described in section 2.4 of the Stanford Encyclopedia of Philosophy entry on anarchism and in Franks (2013); it is not right-libertarianism. Economy is collective and Authority close to the libertarian pole because coercive state rule is rejected; Governance is strongly participatory because workers' and residents' assemblies are the proposed decision bodies. Community is communitarian in the social-anarchist wing but the band reaches the individualist pole for the mutualist and individualist-adjacent wings. Ecology leans green through social ecology and Kropotkin's legacy, and Justice strongly restorative. Contested because the label covers both socialist and individualist currents that Franks argues should not be merged.",
    center: [-85, -95, 45, 85, 70, 35, -75, 65, -10, 80],
    range: [[-100, -60], [-100, -75], [10, 80], [60, 100], [40, 90], [-20, 90], [-100, -30], [-20, 100], [-80, 70], [20, 100]],
    subtraditions: ["Social anarchism", "Libertarian Marxism (council and workers' control wings)", "Social ecology and communalism", "Cooperative and syndicalist currents"],
    principles: ["Social ownership without state rule", "Workers' and community self-management", "Direct and participatory democracy", "Voluntary federation", "Anti-authoritarianism"],
    internalDebates: "Franks (2013) rejects definitions of anarchism built on a universal anti-statism because they fuse mutually antipathetic individualist and social currents; the same problem arises here. The Stanford entry also distinguishes philosophical from political anarchism, so a low Authority score must not be read as a claim that all libertarian socialists reject every form of organisation.",
    references: [
      { title: "Anarchism (Stanford Encyclopedia of Philosophy)", author: "Andrew Fiala", year: "2017 / rev. 2025", url: "https://plato.stanford.edu/entries/anarchism/" },
      { title: "Anarchism, in The Oxford Handbook of Political Ideologies", author: "Benjamin Franks", year: "2013", url: "https://eprints.gla.ac.uk/84920/" },
      { title: "Communism and Anarchy", author: "Peter Kropotkin", year: "1900 / 1901", url: "https://www.marxists.org/reference/archive/kropotkin-peter/1900/communism-anarchy.htm" }
    ]
  },
  {
    id: "market-socialism",
    name: "Market socialism",
    family: "Socialist",
    era: "1920s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. The coordinates represent the model tradition from Lange and Taylor's 1930s calculation debate through contemporary market-socialist proposals, as surveyed in section 4.2 of the Stanford Encyclopedia of Philosophy entry on socialism. Economy is collective but nearer the midpoint than command socialism because firms compete and prices allocate outputs; Governance leans technocratic because a planning board or expert regulators set rules. Authority is moderately libertarian and Representation pluralist in the classic model, though actual one-party experiments widen the band. Ecology and Religion ranges are broad because green market socialists and secular or faith-based variants all exist. Contested between advocates who treat markets as neutral instruments and critics who argue that market dependence reproduces capitalist social relations.",
    center: [-55, -55, -25, 65, 50, -20, 35, 70, 45, 35],
    range: [[-90, -15], [-85, -20], [-70, 30], [30, 95], [10, 90], [-80, 50], [-40, 90], [20, 100], [-20, 90], [-30, 90]],
    subtraditions: ["Lange-type trial-and-error planning", "Worker-managed market socialism (Yugoslavia)", "Coupon and mutual-fund socialism", "Green market socialism", "Socialist market economy variants"],
    principles: ["Social or collective ownership of firms", "Market prices for allocation", "Worker or citizen control of capital", "Competition with public regulation", "Equity through social dividends"],
    internalDebates: "The economic calculation debate turned on whether a planning board could mimic market prices; later models disagree over whether worker management, public shareholding or central regulation best preserves socialist ends. The relation to actually existing party-states remains contested, which is why the Authority and Governance bands are wide.",
    references: [
      { title: "Socialism, section 4.2: Market Socialism (Stanford Encyclopedia of Philosophy)", author: "Pablo Gilabert and Martin O'Neill", year: "2019 / rev. 2024", url: "https://plato.stanford.edu/entries/socialism/" },
      { title: "On the Economic Theory of Socialism", author: "Oskar Lange and Fred M. Taylor", year: "1938", url: "https://muse.jhu.edu/book/32188" }
    ]
  },
  {
    id: "council-communism",
    name: "Council communism",
    family: "Socialist / communist",
    era: "1910s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. This entry means the anti-parliamentary current that takes workers' councils as the form of proletarian power and opposes both reformism and Leninist party rule, as argued in Luxemburg's 1904 organisational polemic and Mattick's later account. Economy is collective, Governance is at the participatory extreme and Authority is strongly libertarian because councils recall their delegates. Scope is cosmopolitan in its internationalism but the band allows for national-specific currents; Religion is secular and Ecology productivist in the classical period. Representation is populist-leaning because the councils claim to express the workers directly rather than through party competition. Contested where council communists disagree on whether any party or transitional organisation is admissible.",
    center: [-90, -70, 35, 85, 65, -35, -90, 80, -30, 50],
    range: [[-100, -70], [-90, -40], [0, 75], [60, 100], [30, 90], [-75, 10], [-100, -50], [30, 100], [-85, 40], [-20, 95]],
    subtraditions: ["German-Dutch council communism (Pannekoek, Gorter)", "Luxemburgist anti-centralism", "Anti-Bolshevik communism (Mattick)", "Post-1968 council currents"],
    principles: ["Workers' councils as the governing form", "Recallable delegates", "Rejection of parliamentarism", "Mass action and direct democracy", "Internationalism"],
    internalDebates: "Luxemburg's warning against the concentration of power in a central committee and Mattick's later critique define the current's core disagreement with Leninism, but the two authors differ on accumulation theory and on the national question. The degree of allowable party organisation remains a live split, which is reflected in the Authority and Representation ranges.",
    references: [
      { title: "Organizational Questions of the Russian Social Democracy (Leninism or Marxism?)", author: "Rosa Luxemburg", year: "1904", url: "https://www.marxists.org/archive/luxemburg/1904/questions-rsd" },
      { title: "Luxemburg versus Lenin, in Anti-Bolshevik Communism", author: "Paul Mattick", year: "1936 / 1978", url: "https://www.marxists.org/archive/mattick-paul/1936/luxemburg-lenin.htm" }
    ]
  },
  {
    id: "syndicalism",
    name: "Syndicalism",
    family: "Socialist / anarchist",
    era: "1890s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. This entry represents revolutionary syndicalism and anarcho-syndicalism in the sense of Rocker's history and Goldman's 1913 account, not contemporary trade unionism generally. Economy is collective, Authority libertarian and Governance participatory because unions and federations of producers are proposed to replace the state. Community is communitarian through solidarity and mutual aid, Scope internationalist in doctrine, and Change strongly progressive. Representation leans populist because party competition is rejected in favour of direct worker organisation; Religion is broadly secular but Catholic and Christian syndicalisms widen that band. Ecology is provisional and varied, from productivist union traditions to green syndicalism. Contested where anarchist and Marxist syndicalists disagree over the relation of unions to political parties.",
    center: [-90, -95, 45, 85, 60, -20, -85, 60, -35, 55],
    range: [[-100, -70], [-100, -75], [10, 85], [60, 100], [20, 90], [-70, 60], [-100, -40], [-20, 100], [-90, 30], [-10, 95]],
    subtraditions: ["French revolutionary syndicalism (CGT)", "Anarcho-syndicalism (CNT, IWW)", "Industrial unionism", "Christian and Catholic syndicalism"],
    principles: ["Direct action", "General strike", "Workers' self-management", "Federation of unions", "International worker solidarity"],
    internalDebates: "Goldman presents syndicalism as the economic expression of anarchism, while Rocker traces both anarchist and Marxist strands inside the labour movement; the Marxists.org archive notes that IWW founders looked to Marx rather than Bakunin. Disputes over sabotage, the general strike and relations to political parties make a single Representation score especially provisional.",
    references: [
      { title: "Anarchism and Anarcho-Syndicalism", author: "Rudolf Rocker", year: "1949", url: "https://www.marxists.org/reference/archive/rocker-rudolf/misc/anarchism-anarcho-syndicalism.htm" },
      { title: "Syndicalism: Its Theory and Practice", author: "Emma Goldman", year: "1913", url: "https://www.marxists.org/reference/archive/goldman/works/1913/syndicalism-theory.html" },
      { title: "Marxists.org archive on Anarchism, Syndicalism and Labor Unions", author: "Marxists Internet Archive", year: "n.d.", url: "https://www.marxists.org/subject/anarchism/index.htm" }
    ]
  },
  {
    id: "anarcho-communism",
    name: "Anarcho-communism",
    family: "Anarchist / socialist",
    era: "1880s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. This entry represents the Kropotkinian current of free communes and common possession of the means of production and products, as stated in The Conquest of Bread and Communism and Anarchy. The Authority centre is at the extreme libertarian pole because government of man by man is rejected; Economy is fully collective and Governance participatory through federated communes and free agreement. Community, Ecology and Justice lean strongly toward communality, ecological limits and freedom from punitive authority, but the bands keep open religious anarchism and the anti-clerical strain identified in the Stanford entry. Scope is internationalist in Kropotkin's federation beyond national frontiers. Contested by mutualists, collectivist anarchists and platformists, who dispute both the economic form and the organisational means.",
    center: [-95, -100, 70, 90, 70, 45, -90, 75, -25, 85],
    range: [[-100, -80], [-100, -90], [40, 90], [70, 100], [40, 95], [-10, 90], [-100, -50], [0, 100], [-90, 50], [30, 100]],
    subtraditions: ["Kropotkinian communalism", "Collectivist-to-communist transition currents", "Green anarchism and social ecology", "Platformism", "Insurrectionary and synthesis anarchism"],
    principles: ["Common ownership of products and means", "Free federated communes", "Free agreement instead of law", "Mutual aid", "Emancipation of the individual"],
    internalDebates: "Kropotkin argues that communism can be authoritarian or libertarian depending on the ideas that found it, and warns against isolated communities; platformists and synthesis anarchists later disagreed about organisation. The Stanford entry records both Christian and anti-clerical anarchist traditions, so the Religion band is wide even though the reference texts are secular.",
    references: [
      { title: "The Conquest of Bread", author: "Peter Kropotkin", year: "1892 / 1907", url: "https://www.marxists.org/reference/archive/kropotkin-peter/1892/bread.htm" },
      { title: "Communism and Anarchy", author: "Peter Kropotkin", year: "1900 / 1901", url: "https://www.marxists.org/reference/archive/kropotkin-peter/1900/communism-anarchy.htm" }
    ]
  },
  {
    id: "mutualism",
    name: "Mutualism",
    family: "Anarchist / socialist",
    era: "1840s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. This entry represents Proudhon's mutualism and its later individualist and social readings, as found in What is Property? and the Marxists Internet Archive's Proudhon archive. Economy is placed between collective and market because mutualism defends possessory ownership, cooperatives and reciprocity rather than either capitalist property or full communism; Authority is near the libertarian pole and Governance participatory because free contract and association replace the state. Community is individualist-leaning in the Proudhonist and American individualist strands, but Rocker's historical account places Proudhon's mutualism alongside both individualist and social currents, so the band is wide. Justice is centred near the midpoint because Proudhon's justice is proportionality and reciprocity rather than a settled restorative programme. Contested between individualist and social readings, and between Proudhon's federalism and later market-oriented mutualism.",
    center: [-55, -90, -30, 65, 45, 5, -65, 60, 25, -10],
    range: [[-85, -20], [-100, -70], [-70, 20], [35, 90], [10, 85], [-60, 70], [-100, -10], [-20, 100], [-60, 85], [-80, 70]],
    subtraditions: ["Proudhon's federalist mutualism", "Individualist anarchism (Warren, Tucker)", "Collectivist and social-anarchist readings", "Contemporary mutual-aid and cooperative currents"],
    principles: ["Property is theft and possession is legitimate", "Reciprocity and equal exchange", "Free association and contract", "Interest-free mutual credit", "Federalism"],
    internalDebates: "Proudhon described the liberty he sought as a synthesis of communism and property; Rocker treats mutualism as one economic assumption among anarchists rather than a closed system, and readers disagree over whether it belongs to individualist or social anarchism. Those disputes drive the wide Economy, Community and Representation bands.",
    references: [
      { title: "What is Property? An Inquiry into the Principle of Right and of Government", author: "Pierre-Joseph Proudhon", year: "1840", url: "https://www.marxists.org/reference/subject/economics/proudhon/property/index.htm" },
      { title: "Anarchism and Anarcho-Syndicalism", author: "Rudolf Rocker", year: "1949", url: "https://www.marxists.org/reference/archive/rocker-rudolf/misc/anarchism-anarcho-syndicalism.htm" }
    ]
  },
  {
    id: "anarchism",
    name: "Anarchism",
    family: "Anarchist",
    era: "1840s–present",
    note: "Provisional editorial estimate, version 1, 2026-11-28. This entry follows this repo's v1 placement of social anarchism and syndicalism, which also matches Franks's warning not to define anarchism by a universal anti-statism. Economy is collective and Authority at the libertarian extreme for the social current; Community is only mildly communitarian because the individualist wing is deliberately excluded from the centre and recorded in the band. Change and Scope are progressive and cosmopolitan in the main internationalist currents, Governance participatory, and Justice restorative or transformative. The Stanford entry documents religious, philosophical, black and indigenous, and post-anarchist variants, which is why Religion and Community have wide bands. Contested: the label covers currents that disagree over capitalism, organisation and whether any state can be tolerated.",
    center: [-85, -95, 15, 80, 55, 40, -85, 70, -20, 80],
    range: [[-100, -60], [-100, -75], [-30, 70], [55, 100], [20, 90], [-30, 90], [-100, -30], [-10, 100], [-90, 60], [20, 100]],
    subtraditions: ["Social anarchism (collectivist, communist, syndicalist)", "Individualist anarchism", "Anarcha-feminism and queer anarchism", "Black and indigenous anarchisms", "Green anarchism and post-anarchism", "Philosophical and religious anarchism"],
    principles: ["Scepticism toward imposed authority", "Voluntary association", "Direct democracy and consensus", "Mutual aid", "Self-determination and free experimentation"],
    internalDebates: "Franks (2013) argues that free-market individualism and socialist anarchism have different conceptual structures and conflicting practices, so a single economic or community coordinate cannot describe both. The Stanford entry adds that not every anarchist seeks to abolish the state and that religious anarchisms exist; both facts are carried in the ranges, not in the centre.",
    references: [
      { title: "Anarchism (Stanford Encyclopedia of Philosophy)", author: "Andrew Fiala", year: "2017 / rev. 2025", url: "https://plato.stanford.edu/entries/anarchism/" },
      { title: "Anarchism, in The Oxford Handbook of Political Ideologies", author: "Benjamin Franks", year: "2013", url: "https://eprints.gla.ac.uk/84920/" },
      { title: "Marxists.org archive on Anarchism", author: "Marxists Internet Archive", year: "n.d.", url: "https://www.marxists.org/subject/anarchism/index.htm" }
    ]
  }
];
