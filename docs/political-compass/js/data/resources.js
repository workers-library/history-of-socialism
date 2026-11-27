// Structured, verified reading list for the political compass report.
// Source types: chapter = this book; primary = original text; scholar = reference or research; critique = opposing argument.
// Stances describe how a source relates to a likely respondent position: explains, challenges or debates.
export const RESOURCES = {
  axes: {
    "Economy": [
      { kind:"chapter", title:"Who Owned What: Legal Title, Control and the Meaning of Social Ownership", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/ownership-and-control.md", why:"Distinguishes legal ownership from actual control, which is the first question on this axis.", stance:"explains" },
      { kind:"scholar", title:"Socialism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/socialism/", why:"Surveys competing socialist views of ownership, markets and distribution.", stance:"explains" },
      { kind:"chapter", title:"Why Markets Returned", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/why-markets-returned.md", why:"Shows why market mechanisms reappeared in economies that had abolished them.", stance:"explains" },
      { kind:"primary", title:"Economic Calculation in the Socialist Commonwealth", author:"Ludwig von Mises", url:"https://mises.org/library/book/economic-calculation-socialist-commonwealth", why:"The classic argument that planning without market prices cannot allocate capital rationally.", stance:"challenges" },
      { kind:"chapter", title:"The Plan and the Shortage: Targets, Responses and Scarcity", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/planning-incentives-and-shortage.md", why:"Sets targets and incentives against the scarcity that planning produced in practice.", stance:"debates" },
      { kind:"scholar", title:"Defining socialism", author:"John O’Neill", url:"https://www.rep.routledge.com/articles/thematic/socialism/v-1/sections/defining-socialism", why:"Shows that socialists disagree over whether ownership or equality defines the tradition.", stance:"debates" }
    ],
    "Authority": [
      { kind:"chapter", title:"Why States Centralised", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/why-states-centralised.md", why:"Traces the pressures that concentrated power in revolutionary and postwar states.", stance:"explains" },
      { kind:"primary", title:"The State and Revolution", author:"Vladimir Lenin", url:"https://www.marxists.org/archive/lenin/works/1917/staterev/", why:"The canonical Marxist text on why the state must be smashed and what would replace it.", stance:"explains" },
      { kind:"primary", title:"What is Authority?", author:"Mikhail Bakunin", url:"https://www.marxists.org/reference/archive/bakunin/works/various/authrty.htm", why:"A direct anarchist rebuttal to claims that revolutionary authority is legitimate.", stance:"challenges" },
      { kind:"chapter", title:"The Archipelago: Forced Labour and the Camps", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/gulag.md", why:"Documents the camp system as an instance of concentrated coercive power.", stance:"challenges" },
      { kind:"scholar", title:"Anarchism", author:"Benjamin Franks", url:"https://eprints.gla.ac.uk/84920/", why:"Warns against defining anarchism by a single universal anti-statism.", stance:"debates" },
      { kind:"scholar", title:"Antidemocratic tendencies on the left, the right, and beyond: A critical review of the theory and measurement of left-wing authoritarianism", author:"Artur Nilsson", url:"https://doi.org/10.1111/pops.12951", why:"Reviews how authoritarianism is measured without confounding it with ideology.", stance:"challenges" }
    ],
    "Community": [
      { kind:"scholar", title:"Communitarianism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/communitarianism/", why:"Sets out the case for shared obligation and community alongside individual rights.", stance:"explains" },
      { kind:"primary", title:"Mutual Aid: A Factor of Evolution", author:"Peter Kropotkin", url:"https://www.marxists.org/reference/archive/kropotkin-peter/1902/mutual-aid/index.htm", why:"A primary statement of cooperation as a basis for social organisation.", stance:"explains" },
      { kind:"chapter", title:"The Cooperative Idea: Rochdale, the Commonwealth and the Commune", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/cooperatives.md", why:"Follows the cooperative idea from Rochdale to the Paris Commune.", stance:"explains" },
      { kind:"primary", title:"Anarchism: What It Really Stands For", author:"Emma Goldman", url:"https://www.marxists.org/reference/archive/goldman/works/1910s/anarchism.htm", why:"Explains why this anarchist writer treated voluntary association as the basis of freedom.", stance:"explains" },
      { kind:"chapter", title:"Why Movements Fragmented", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/why-movements-fragmented.md", why:"Shows how movements split over class, nation, gender and strategy.", stance:"debates" }
    ],
    "Change": [
      { kind:"chapter", title:"Faith and the Socialist Claim", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/religion.md", why:"Shows how faith and inherited custom entered socialist arguments about change.", stance:"explains" },
      { kind:"primary", title:"The Origin of the Family, Private Property and the State", author:"Friedrich Engels", url:"https://www.marxists.org/archive/marx/works/1884/origin-family/", why:"A classic account of how family forms and gender roles change with property relations.", stance:"explains" },
      { kind:"scholar", title:"The Psychology of Politics", author:"H. J. Eysenck", url:"https://hanseysenck.com/wp-content/uploads/2019/12/1954_eysenck_-_the_psychology_of_politics.pdf", why:"An early factor-analytic study of radicalism and conservatism that complicates a single change scale.", stance:"debates" },
      { kind:"scholar", title:"Findings & Insights: Inglehart–Welzel Cultural Map", author:"Ronald Inglehart and Christian Welzel", url:"https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=findings", why:"Provides the survey background to traditional versus secular-rational orientations.", stance:"explains" },
      { kind:"chapter", title:"Half the Sky? Women in the Socialist States and Movements", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/women-crosscutting.md", why:"Shows how claims about liberation and inherited gender roles cut across socialist movements.", stance:"debates" }
    ],
    "Scope": [
      { kind:"scholar", title:"Nationalism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/nationalism/", why:"Defines nationalism and its relation to sovereignty and belonging.", stance:"explains" },
      { kind:"primary", title:"The Pitfalls of National Consciousness", author:"Frantz Fanon", url:"https://www.marxists.org/subject/africa/fanon/pitfalls-national.htm", why:"Warns that national liberation can stop at a narrow national bourgeoisie.", stance:"challenges" },
      { kind:"primary", title:"Imperialism, the Highest Stage of Capitalism", author:"Vladimir Lenin", url:"https://www.marxists.org/archive/lenin/works/1916/imp-hsc/", why:"Links cross-border competition and empire to capitalist development.", stance:"explains" },
      { kind:"chapter", title:"Oppressed Peoples and Oppressed Nations, Unite!: Anti-Colonial Internationalism, 1919–1952", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/anti-colonial.md", why:"Documents anti-colonial internationalism and its tensions after 1919.", stance:"explains" },
      { kind:"chapter", title:"Bandung to Havana: The Afro-Asian Left, 1955–1966", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/bandung.md", why:"Traces the Afro-Asian project from Bandung to Havana.", stance:"explains" }
    ],
    "Ecology": [
      { kind:"chapter", title:"The Cost of the Promise: Socialism and the Environment", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/environment.md", why:"Surveys the environmental record of states and movements that called themselves socialist.", stance:"explains" },
      { kind:"scholar", title:"Marx’s Ecology: Materialism and Nature", author:"John Bellamy Foster", url:"https://monthlyreview.org/product/marxs_ecology/", why:"Reconstructs Marx’s environmental writings and challenges a purely productivist reading.", stance:"explains" },
      { kind:"scholar", title:"The “New Environmental Paradigm”", author:"Riley E. Dunlap and Kent D. Van Liere", url:"https://doi.org/10.1080/00958964.1978.10801875", why:"The founding survey instrument for measuring environmental orientations.", stance:"explains" },
      { kind:"chapter", title:"John Bellamy Foster: The Metabolic Rift and Ecological Marxism", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/john-bellamy-foster.md", why:"Explains the metabolic rift and why ecological Marxists treat it as central.", stance:"explains" },
      { kind:"chapter", title:"Murray Bookchin: Social Ecology and Libertarian Municipalism", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/murray-bookchin.md", why:"Sets social ecology and libertarian municipalism against productivist socialism.", stance:"debates" }
    ],
    "Governance": [
      { kind:"scholar", title:"Participation and Democratic Theory", author:"Carole Pateman", url:"https://doi.org/10.1017/CBO9780511720444", why:"Argues that elitist accounts of democracy rest on an inadequate theory of participation.", stance:"explains" },
      { kind:"scholar", title:"Democracy and Its Critics", author:"Robert A. Dahl", url:"https://yalebooks.yale.edu/book/9780300043945/democracy-and-its-critics/", why:"Supplies the case for contestation and participation as democratic criteria.", stance:"explains" },
      { kind:"chapter", title:"Who Controlled the Workplace?", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/who-controlled-the-workplace.md", why:"Examines who actually made decisions inside workplaces under social ownership.", stance:"explains" },
      { kind:"chapter", title:"Oskar Lange: Market Socialism and the Calculation Debate", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/oskar-lange.md", why:"Sets Lange’s market-socialist model against the claim that expert planning must replace markets.", stance:"debates" },
      { kind:"primary", title:"Socialisation", author:"Anton Pannekoek", url:"https://www.marxists.org/archive/pannekoe/1919/socialisation.htm", why:"A council-communist account of workers taking control of production.", stance:"explains" },
      { kind:"chapter", title:"The Science of Control: Cybernetics, Genetics and the Socialist Plan", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/cybernetics.md", why:"Shows how experts, cybernetics and party control competed over the socialist plan.", stance:"debates" }
    ],
    "Religion": [
      { kind:"chapter", title:"Faith and the Socialist Claim", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/religion.md", why:"Explains how religious institutions and socialist movements dealt with each other.", stance:"explains" },
      { kind:"primary", title:"God and the State", author:"Mikhail Bakunin", url:"https://www.marxists.org/reference/archive/bakunin/works/godstate/index.htm", why:"A primary anti-clerical argument against religious authority in public life.", stance:"challenges" },
      { kind:"scholar", title:"The Oxford Handbook of Secularism", author:"Phil Zuckerman and John R. Shook, eds.", url:"https://doi.org/10.1093/oxfordhb/9780199988457.001.0001", why:"A reference work on secularism as an institutional and political arrangement.", stance:"explains" },
      { kind:"chapter", title:"Mikhail Bakunin: Collectivist Anarchism and the State", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/mikhail-bakunin.md", why:"Places Bakunin’s critique of church and state in its political context.", stance:"explains" },
      { kind:"chapter", title:"The Popular Front: Unity Against Fascism and the Shadow of Moscow, 1934–1938", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/popular-front.md", why:"Shows how Catholic and other religious parties entered popular-front coalitions.", stance:"debates" }
    ],
    "Representation": [
      { kind:"scholar", title:"The Populist Zeitgeist", author:"Cas Mudde", url:"https://doi.org/10.1111/j.1477-7053.2004.00135.x", why:"Defines populism as a thin ideology that divides society into a pure people and a corrupt elite.", stance:"explains" },
      { kind:"scholar", title:"Populism: A Very Short Introduction", author:"Cas Mudde and Cristóbal Rovira Kaltwasser", url:"https://doi.org/10.1093/actrade/9780190234874.001.0001", why:"Gives a comparative account of populist parties and movements.", stance:"explains" },
      { kind:"chapter", title:"The Popular Front: Unity Against Fascism and the Shadow of Moscow, 1934–1938", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/popular-front.md", why:"Shows how parties, unions and popular fronts bargained for representation.", stance:"explains" },
      { kind:"primary", title:"The Civil War in France", author:"Karl Marx", url:"https://www.marxists.org/archive/marx/works/1871/civil-war-france/", why:"Marx’s account of the Paris Commune and its representative institutions.", stance:"explains" },
      { kind:"chapter", title:"Movement Media Outlets", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/movement-media.md", why:"Shows how movement newspapers and outlets claimed to speak for a constituency.", stance:"debates" },
      { kind:"scholar", title:"Antonio Gramsci", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/gramsci/", why:"Explains hegemony and why consent complicates simple majority representation.", stance:"debates" }
    ],
    "Justice": [
      { kind:"scholar", title:"Punishment and Social Structure", author:"Georg Rusche and Otto Kirchheimer", url:"https://doi.org/10.7312/rusc92484", why:"A foundational Marxist study linking penal policy to social and economic structure.", stance:"explains" },
      { kind:"scholar", title:"Changing Lenses: A New Focus for Crime and Justice", author:"Howard Zehr", url:"https://heraldpress.com/9780836147544/changing-lenses/", why:"The classic statement of restorative justice as repair rather than payment.", stance:"explains" },
      { kind:"chapter", title:"The Cell and the Page: Prison and Exile Testimony", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/prison.md", why:"Collects prison and exile testimony from socialist movements and states.", stance:"explains" },
      { kind:"chapter", title:"The Moscow Trials", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/moscow-trials.md", why:"Documents the Moscow trials as a case of punishment used for political ends.", stance:"challenges" },
      { kind:"scholar", title:"Justice", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/justice/", why:"Sets retributive, distributive and restorative accounts of justice side by side.", stance:"debates" }
    ]
  },
  traditions: {
    "marxism": [
      { kind:"primary", title:"Manifesto of the Communist Party, chapter 1", author:"Karl Marx and Friedrich Engels", url:"https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch01.htm", why:"The core statement of class struggle and the communist standpoint.", stance:"explains" },
      { kind:"chapter", title:"Karl Marx and Friedrich Engels", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/marx-and-engels.md", why:"Introduces the writers and the historical setting of their theory.", stance:"explains" },
      { kind:"scholar", title:"Socialism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/socialism/", why:"Places Marxism among the broader family of socialist doctrines.", stance:"explains" }
    ],
    "marxism-leninism": [
      { kind:"primary", title:"The State and Revolution", author:"Vladimir Lenin", url:"https://www.marxists.org/archive/lenin/works/1917/staterev/", why:"The theoretical justification for smashing the old state and building a party-led one.", stance:"explains" },
      { kind:"chapter", title:"Vladimir Lenin, Joseph Stalin and the Soviet Experience", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/lenin-and-stalin.md", why:"Traces the Soviet model from Lenin to Stalin and its institutional consequences.", stance:"explains" },
      { kind:"chapter", title:"Why States Centralised", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/why-states-centralised.md", why:"Explains why the model centralised power in practice.", stance:"debates" },
      { kind:"chapter", title:"The Archipelago: Forced Labour and the Camps", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/gulag.md", why:"Documents the camp system against the movement’s stated emancipatory aims.", stance:"challenges" }
    ],
    "trotskyism": [
      { kind:"primary", title:"The Revolution Betrayed", author:"Leon Trotsky", url:"https://www.marxists.org/archive/trotsky/1936/revbet/", why:"Trotsky’s account of the Soviet state as a distorted workers’ state.", stance:"explains" },
      { kind:"primary", title:"The Transitional Program", author:"Leon Trotsky", url:"https://www.marxists.org/archive/trotsky/1938/tp/", why:"Shows how Trotskyists proposed to bridge current struggles and revolutionary aims.", stance:"explains" },
      { kind:"chapter", title:"The 'state capitalist' debate and the theory of transition", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/transition-debate.md", why:"Sets the state-capitalist debate beside theories of transition.", stance:"debates" }
    ],
    "maoism": [
      { kind:"primary", title:"On Contradiction", author:"Mao Zedong", url:"https://www.marxists.org/reference/archive/mao/selected-works/volume-1/mswv1_17.htm", why:"A central philosophical text on difference and change in Maoist theory.", stance:"explains" },
      { kind:"chapter", title:"Mao Zedong, the Chinese Revolution and Maoist Theory", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/mao-and-china.md", why:"Connects Maoist theory to the Chinese revolution and its institutions.", stance:"explains" },
      { kind:"chapter", title:"Land to the Tiller: The Chinese Countryside in Its Own Words, 1927–1964", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/china-peasantry.md", why:"Uses peasant voices to show how land reform was carried out.", stance:"explains" },
      { kind:"chapter", title:"The Cultural Revolution: The Movement in Its Own Words", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/cultural-revolution.md", why:"Presents the Cultural Revolution in the movement’s own words alongside its costs.", stance:"challenges" }
    ],
    "democratic-socialism": [
      { kind:"primary", title:"Evolutionary Socialism", author:"Eduard Bernstein", url:"https://www.marxists.org/reference/archive/bernstein/works/1899/evsoc/index.htm", why:"The classic reformist case for winning socialism through parliamentary and trade-union gains.", stance:"explains" },
      { kind:"primary", title:"Reform or Revolution", author:"Rosa Luxemburg", url:"https://www.marxists.org/archive/luxemburg/1900/reform-revolution/", why:"The classic objection that reform can preserve the capitalist framework it means to replace.", stance:"challenges" },
      { kind:"chapter", title:"The 'state capitalist' debate and the theory of transition", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/transition-debate.md", why:"Shows how socialists argued over what transition to socialism actually means.", stance:"debates" }
    ],
    "social-democracy": [
      { kind:"primary", title:"Evolutionary Socialism", author:"Eduard Bernstein", url:"https://www.marxists.org/reference/archive/bernstein/works/1899/evsoc/index.htm", why:"Sets out the revisionist programme that shaped social democracy.", stance:"explains" },
      { kind:"chapter", title:"The Popular Front: Unity Against Fascism and the Shadow of Moscow, 1934–1938", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/popular-front.md", why:"Shows social-democratic parties in coalition with other anti-fascist forces.", stance:"explains" },
      { kind:"chapter", title:"Manchester 1945: The Congress That Changed the Language of Empire", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/manchester-1945.md", why:"Traces the postwar Labour government and its imperial setting.", stance:"explains" }
    ],
    "libertarian-socialism": [
      { kind:"primary", title:"Stateless Socialism: Anarchism", author:"Mikhail Bakunin", url:"https://www.marxists.org/reference/archive/bakunin/works/various/soc-anar.htm", why:"States the case for socialism without a central state.", stance:"explains" },
      { kind:"chapter", title:"Peter Kropotkin: Mutual Aid and Anarchist Communism", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/peter-kropotkin.md", why:"Explains Kropotkin’s mutual aid and anarchist communism.", stance:"explains" },
      { kind:"chapter", title:"The Cooperative Idea: Rochdale, the Commonwealth and the Commune", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/cooperatives.md", why:"Shows cooperatives as a practical institution of libertarian socialism.", stance:"explains" }
    ],
    "market-socialism": [
      { kind:"chapter", title:"Oskar Lange: Market Socialism and the Calculation Debate", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/oskar-lange.md", why:"Sets out Lange’s model of socialist allocation through simulated markets.", stance:"explains" },
      { kind:"chapter", title:"Prices Without Markets: The Calculation Question", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/economic-calculation-debate.md", why:"Assembles the calculation debate from Soviet texts and later research.", stance:"debates" },
      { kind:"chapter", title:"Why Markets Returned", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/why-markets-returned.md", why:"Explains why market mechanisms returned after central planning.", stance:"explains" }
    ],
    "council-communism": [
      { kind:"primary", title:"The Russian Revolution", author:"Rosa Luxemburg", url:"https://www.marxists.org/archive/luxemburg/1918/russian-revolution/", why:"Luxemburg’s critique of Bolshevik centralism and her defence of mass democracy.", stance:"explains" },
      { kind:"chapter", title:"Kronstadt 1921: The Sailors and the State", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/kronstadt.md", why:"Examines the 1921 Kronstadt revolt and the soviets.", stance:"explains" },
      { kind:"chapter", title:"Who Controlled the Workplace?", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/who-controlled-the-workplace.md", why:"Asks who held real authority in the workplace.", stance:"explains" },
      { kind:"primary", title:"Socialisation", author:"Anton Pannekoek", url:"https://www.marxists.org/archive/pannekoe/1919/socialisation.htm", why:"A council-communist account of workers’ control of production.", stance:"explains" }
    ],
    "syndicalism": [
      { kind:"primary", title:"Syndicalism: Its Theory and Practice", author:"Emma Goldman", url:"https://www.marxists.org/reference/archive/goldman/works/1913/syndicalism-theory.html", why:"A contemporary explanation of syndicalist organisation and direct action.", stance:"explains" },
      { kind:"chapter", title:"One Big Union: The IWW in the United States, 1905–1920", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/iww.md", why:"Follows the IWW as an organised syndicalist movement.", stance:"explains" },
      { kind:"chapter", title:"The Workshop and the Union: Workers' Control from the Clyde to Chile", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/unions.md", why:"Examines workers’ control from the Clyde to Chile.", stance:"explains" }
    ],
    "anarcho-communism": [
      { kind:"primary", title:"The Conquest of Bread", author:"Peter Kropotkin", url:"https://www.marxists.org/reference/archive/kropotkin-peter/1892/bread.htm", why:"The classic primary statement of communist anarchism.", stance:"explains" },
      { kind:"chapter", title:"Peter Kropotkin: Mutual Aid and Anarchist Communism", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/peter-kropotkin.md", why:"Places The Conquest of Bread in Kropotkin’s wider argument.", stance:"explains" },
      { kind:"chapter", title:"The Cooperative Idea: Rochdale, the Commonwealth and the Commune", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/cooperatives.md", why:"Shows cooperative institutions as one practical route toward communist anarchism.", stance:"explains" }
    ],
    "mutualism": [
      { kind:"primary", title:"What is Property?", author:"Pierre-Joseph Proudhon", url:"https://www.marxists.org/reference/subject/economics/proudhon/property/index.htm", why:"The foundational text of Proudhon’s critique of property.", stance:"explains" },
      { kind:"primary", title:"The Coming Era of Mutualism", author:"Pierre-Joseph Proudhon", url:"https://www.marxists.org/reference/subject/economics/proudhon/1849/the-coming-era-of-mutualism.html", why:"States Proudhon’s own programme for mutualist exchange.", stance:"explains" },
      { kind:"chapter", title:"Property Is Theft: Proudhon, Mutualism and the Cooperative Moment", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/proudhon.md", why:"Reads Proudhon’s mutualism alongside the cooperative movement.", stance:"explains" }
    ],
    "anarchism": [
      { kind:"scholar", title:"Anarchism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/anarchism/", why:"Surveys anarchist theory and its different currents.", stance:"explains" },
      { kind:"primary", title:"God and the State", author:"Mikhail Bakunin", url:"https://www.marxists.org/reference/archive/bakunin/works/godstate/index.htm", why:"A primary statement of anarchist critique of church and state.", stance:"explains" },
      { kind:"chapter", title:"Mikhail Bakunin: Collectivist Anarchism and the State", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/mikhail-bakunin.md", why:"Explains Bakunin’s collectivist anarchism and his clash with Marx.", stance:"explains" },
      { kind:"chapter", title:"Emma Goldman: Anarchism, Freedom and the Critique of the State", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/emma-goldman.md", why:"Presents Goldman’s anarchism, its critique of the state and its social concerns.", stance:"explains" }
    ],
    "liberalism": [
      { kind:"scholar", title:"Liberalism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/liberalism/", why:"Defines liberalism and its historical variants.", stance:"explains" },
      { kind:"chapter", title:"What Capitalism Achieved, and What It Cost", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/what-capitalism-achieved.md", why:"Sets capitalism’s achievements against its costs for liberal claims.", stance:"debates" },
      { kind:"chapter", title:"Before the Factory: Commerce, Land and the Origins of Capitalism", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/origins-of-capitalism.md", why:"Traces the commercial and land relations that preceded industrial capitalism.", stance:"explains" }
    ],
    "classical-liberalism": [
      { kind:"primary", title:"Second Treatise of Civil Government", author:"John Locke", url:"https://www.marxists.org/reference/subject/politics/locke/index.htm", why:"A foundational text on natural rights, property and limited government.", stance:"explains" },
      { kind:"scholar", title:"The Road to Serfdom", author:"F. A. Hayek", url:"https://www.routledge.com/The-Road-to-Serfdom/Hayek/p/book/9780415253895", why:"The influential postwar case that economic planning threatens political liberty.", stance:"explains" },
      { kind:"scholar", title:"Liberalism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/liberalism/", why:"Distinguishes nineteenth-century from twentieth-century liberalism.", stance:"explains" }
    ],
    "social-liberalism": [
      { kind:"scholar", title:"Original Position", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/original-position/", why:"Explains Rawls’s device for justifying fair distributive principles.", stance:"explains" },
      { kind:"scholar", title:"Equality", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/equality/", why:"Clarifies the kinds of equality that social-liberal arguments invoke.", stance:"explains" },
      { kind:"chapter", title:"The New Left in the West: From 1956 to the Years of Lead", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/new-left.md", why:"Shows how the New Left reshaped liberal and socialist ideas after 1956.", stance:"explains" }
    ],
    "libertarianism": [
      { kind:"scholar", title:"Libertarianism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/libertarianism/", why:"Sets out the main arguments for individual liberty and limited state power.", stance:"explains" },
      { kind:"primary", title:"For a New Liberty: The Libertarian Manifesto", author:"Murray Rothbard", url:"https://mises.org/library/book/new-liberty-libertarian-manifesto", why:"A primary statement of right-libertarian politics in the United States.", stance:"explains" },
      { kind:"chapter", title:"What Capitalism Achieved, and What It Cost", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/what-capitalism-achieved.md", why:"Places market outcomes and their costs beside libertarian claims about liberty.", stance:"challenges" }
    ],
    "anarcho-capitalism": [
      { kind:"primary", title:"For a New Liberty: The Libertarian Manifesto", author:"Murray Rothbard", url:"https://mises.org/library/book/new-liberty-libertarian-manifesto", why:"The central text of anarcho-capitalist argument.", stance:"explains" },
      { kind:"scholar", title:"Anarchism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/anarchism/", why:"Distinguishes social anarchism from individualist and propertarian currents.", stance:"challenges" },
      { kind:"scholar", title:"Libertarianism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/libertarianism/", why:"Shows where libertarian arguments overlap with and diverge from anarchism.", stance:"debates" },
      { kind:"chapter", title:"Property Is Theft: Proudhon, Mutualism and the Cooperative Moment", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/proudhon.md", why:"Provides a socialist critique of private property and proprietarian claims.", stance:"challenges" }
    ],
    "conservatism": [
      { kind:"scholar", title:"Conservatism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/conservatism/", why:"Defines conservatism and its changing historical forms.", stance:"explains" },
      { kind:"chapter", title:"What Capitalism Achieved, and What It Cost", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/what-capitalism-achieved.md", why:"Sets out the capitalist record that conservative arguments often defend.", stance:"explains" },
      { kind:"chapter", title:"The Workmen's Republic: France, 1848", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/1848-france.md", why:"Shows how conservatives and socialists confronted each other in 1848.", stance:"debates" }
    ],
    "christian-democracy": [
      { kind:"chapter", title:"Faith and the Socialist Claim", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/religion.md", why:"Explains the relationship between religious institutions and socialist politics.", stance:"explains" },
      { kind:"chapter", title:"The Popular Front: Unity Against Fascism and the Shadow of Moscow, 1934–1938", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/popular-front.md", why:"Shows Catholic and Protestant parties in anti-fascist coalitions.", stance:"explains" },
      { kind:"scholar", title:"Fascism", author:"Roger Eatwell", url:"https://www.rep.routledge.com/articles/thematic/fascism/v-1", why:"Explains the anti-fascist setting in which Christian-democratic parties grew.", stance:"debates" }
    ],
    "nationalism": [
      { kind:"scholar", title:"Nationalism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/nationalism/", why:"Defines the core claims of nationalist politics.", stance:"explains" },
      { kind:"primary", title:"The Pitfalls of National Consciousness", author:"Frantz Fanon", url:"https://www.marxists.org/subject/africa/fanon/pitfalls-national.htm", why:"Critiques nationalism that stops at a national elite.", stance:"challenges" },
      { kind:"chapter", title:"Oppressed Peoples and Oppressed Nations, Unite!: Anti-Colonial Internationalism, 1919–1952", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/anti-colonial.md", why:"Shows socialists wrestling with nation, empire and class after 1919.", stance:"explains" }
    ],
    "fascism": [
      { kind:"scholar", title:"Fascism", author:"Roger Eatwell", url:"https://www.rep.routledge.com/articles/thematic/fascism/v-1", why:"An encyclopedia account of fascist ideology and its left and right borrowings.", stance:"explains" },
      { kind:"scholar", title:"The Nature of Fascism", author:"Roger Griffin", url:"https://www.routledge.com/The-Nature-of-Fascism/Griffin/p/book/9780415096614", why:"A major scholarly synthesis of fascist ideology.", stance:"explains" },
      { kind:"chapter", title:"The Popular Front: Unity Against Fascism and the Shadow of Moscow, 1934–1938", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/popular-front.md", why:"Documents the anti-fascist coalitions that opposed fascist parties.", stance:"explains" }
    ],
    "green-politics": [
      { kind:"chapter", title:"The Cost of the Promise: Socialism and the Environment", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/environment.md", why:"Surveys ecological conflicts inside movements and states.", stance:"explains" },
      { kind:"chapter", title:"Murray Bookchin: Social Ecology and Libertarian Municipalism", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/murray-bookchin.md", why:"Explains social ecology and libertarian municipalism.", stance:"explains" },
      { kind:"scholar", title:"The “New Environmental Paradigm”", author:"Riley E. Dunlap and Kent D. Van Liere", url:"https://doi.org/10.1080/00958964.1978.10801875", why:"The standard survey instrument for environmental concern.", stance:"explains" }
    ],
    "georgism": [
      { kind:"primary", title:"Progress and Poverty, selections", author:"Henry George", url:"https://www.americanyawp.com/reader/16-capital-and-labor/henry-george-progress-and-poverty-selections-1879/", why:"George’s own argument for taxing land rent to address inequality.", stance:"explains" },
      { kind:"chapter", title:"Before the Factory: Commerce, Land and the Origins of Capitalism", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/origins-of-capitalism.md", why:"Traces how land and commerce shaped the rise of capitalism.", stance:"explains" },
      { kind:"scholar", title:"Socialism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/socialism/", why:"Helps compare land reform with socialist proposals for common ownership.", stance:"debates" }
    ],
    "communitarianism": [
      { kind:"scholar", title:"Communitarianism", author:"Stanford Encyclopedia of Philosophy", url:"https://plato.stanford.edu/entries/communitarianism/", why:"States the case for community obligations and shared goods.", stance:"explains" },
      { kind:"chapter", title:"The Cooperative Idea: Rochdale, the Commonwealth and the Commune", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/cooperatives.md", why:"Shows cooperative institutions as a practical form of shared obligation.", stance:"explains" },
      { kind:"primary", title:"Anarchism: What It Really Stands For", author:"Emma Goldman", url:"https://www.marxists.org/reference/archive/goldman/works/1910s/anarchism.htm", why:"Challenges communal obligation when it is enforced by custom or state.", stance:"challenges" }
    ],
    "distributism": [
      { kind:"scholar", title:"The Political Economy of Distributism: Property, Liberty, and the Common Good", author:"Alexander William Salter", url:"https://muse.jhu.edu/book/109602", why:"A scholarly study of distributism as an economic and political programme.", stance:"explains" },
      { kind:"scholar", title:"Chesterton and Distributism", author:"Ian Boyd", url:"https://www.cambridge.org/core/journals/new-blackfriars/article/abs/chesterton-and-distributism/BA1C42595D15D789410CAA6A54F370D7", why:"Explains Chesterton’s version of widely dispersed property ownership.", stance:"explains" },
      { kind:"scholar", title:"Distributism", author:"Alfonso Díaz Vera", url:"https://doi.org/10.4324/9781003425731-5", why:"Traces distributism from Belloc and Chesterton to the Distributist League.", stance:"explains" },
      { kind:"chapter", title:"Who Owned What: Legal Title, Control and the Meaning of Social Ownership", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/ownership-and-control.md", why:"Compares dispersed ownership with socialist and state-ownership models.", stance:"debates" }
    ],
    "third-way": [
      { kind:"scholar", title:"The Third Way: The Renewal of Social Democracy", author:"Anthony Giddens", url:"https://www.politybooks.com/bookdetail?book_slug=the-third-way-the-renewal-of-social-democracy--9780745622675", why:"The key text defining third-way social democracy.", stance:"explains" },
      { kind:"scholar", title:"The Third Way and its Critics", author:"Anthony Giddens", url:"https://www.politybooks.com/bookdetail?book_slug=the-third-way-and-its-critics--9780745624495", why:"Giddens’s response to critics from across the political spectrum.", stance:"debates" },
      { kind:"chapter", title:"The 'state capitalist' debate and the theory of transition", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/transition-debate.md", why:"Sets the third way beside older socialist theories of transition.", stance:"debates" },
      { kind:"chapter", title:"Yanis Varoufakis: Financial Capitalism and Technofeudalism", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/yanis-varoufakis.md", why:"A contemporary critique of market-led left strategies.", stance:"challenges" }
    ]
  },
  general: [
    { kind:"chapter", title:"What History Establishes", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/what-history-establishes.md", why:"States what the book treats as established and what it leaves contested.", stance:"explains" },
    { kind:"chapter", title:"Methodology and Research Disclosure", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/methodology.md", why:"Explains how the project separates text, intention, implementation and outcome.", stance:"explains" },
    { kind:"chapter", title:"Primary-Text Bibliography", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/verified-bibliography.md", why:"Lists the primary texts used and the standards for citing them.", stance:"explains" },
    { kind:"chapter", title:"Editorial & Source Policy", author:"History of Socialism contributors", url:"https://github.com/workers-library/history-of-socialism/blob/main/book-src/editorial-source-policy.md", why:"Sets out the rules for source selection and correction.", stance:"explains" },
    { kind:"scholar", title:"Measuring Ideology: Current practices, its consequences, and recommendations", author:"Flavio Azevedo and colleagues", url:"https://measuring.ideology.flavioazevedo.com/", why:"A review showing that ideology scales often lack reported validity evidence.", stance:"challenges" },
    { kind:"scholar", title:"Political Compass or Spinning Arrow?", author:"Paul Röttger and colleagues", url:"https://aclanthology.org/2024.acl-long.816.pdf", why:"Shows that answers shift with semantically equivalent prompt changes.", stance:"challenges" },
    { kind:"scholar", title:"Only a Little to the Left", author:"Mats Faulborn and colleagues", url:"https://aclanthology.org/2025.acl-long.1529.pdf", why:"Documents the lack of published development and pretesting for the compass instrument.", stance:"challenges" },
    { kind:"scholar", title:"The Nolan Chart", author:"The Advocates for Self-Government", url:"https://www.theadvocates.org/nolan-chart/", why:"A published two-axis model useful for comparing compass designs.", stance:"debates" }
  ]
};
