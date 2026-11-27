/**
 * Axis definitions for the ten-axis political compass.
 *
 * These are analytical dimensions, not empirically validated factors. The
 * scoring, wording and placement rules are versioned in VERSION below.
 */
export const VERSION = Object.freeze({
  questionnaire: '2.0.0',
  scoring: '2.0.0',
  traditions: '1.0.0',
  axes: '2.0.0',
  released: '2026-11-28'
});

export const AXES = Object.freeze([
  {
    code: 'ECON', name: 'Economy', neg: 'Collective / egalitarian', pos: 'Private / market',
    phraseN: 'collective ownership', phraseP: 'market economics',
    construct: 'who owns productive assets, how resources are allocated, and how far income may be unequal',
    about: 'This axis separates ownership and allocation from personal liberty. Public ownership and redistribution can coexist with either a market or a plan, so they are not treated as the same claim.',
    theory: 'Socialist traditions divide over ownership (public, cooperative, private) and over coordination (planning, markets, mixed forms). Market socialism and social democracy occupy different positions from Marxism-Leninism even when all call themselves socialist.',
    policies: ['public ownership of utilities', 'tax-funded transfers', 'rent and price regulation', 'wage bargaining rules'],
    associated: ['marxism', 'marxism-leninism', 'social-democracy', 'market-socialism', 'classical-liberalism', 'libertarianism'],
    limitation: 'Ten items sample ownership, pricing, redistribution and wages. They do not measure the full history of property regimes.'
  },
  {
    code: 'AUTH', name: 'Authority', neg: 'Libertarian', pos: 'Authoritarian',
    phraseN: 'individual liberty', phraseP: 'state authority',
    construct: 'how far the state may restrict speech, association, movement and due process in the name of order or security',
    about: 'This axis concerns coercion and civil liberties, not who owns the economy. A government can be economically radical and politically repressive, or economically conservative and politically free.',
    theory: 'Eysenck’s radicalism–conservatism and tough-mindedness research, and the Political Compass social axis, both separate attitude to authority from economic policy. Anarchism and Leninism differ mainly here.',
    policies: ['speech regulation', 'preventive detention', 'search powers', 'press and assembly rights'],
    associated: ['anarchism', 'libertarianism', 'marxism-leninism', 'fascism', 'social-democracy'],
    limitation: 'Items sample speech, detention, search and assembly. They do not cover every form of administrative power.'
  },
  {
    code: 'COMM', name: 'Community', neg: 'Individualist', pos: 'Communitarian',
    phraseN: 'individual autonomy', phraseP: 'shared obligation',
    construct: 'the weight given to family, neighbourhood and communal obligation against individual choice',
    about: 'This axis asks what people owe one another beyond respecting rights. It is not the same as authority: obligations can be voluntary, while authority is coercive.',
    theory: 'Moral Foundations Theory separates individualising concerns (care, fairness) from binding concerns (loyalty, authority, purity). Communitarian critics argue that liberal theory understates obligation.',
    policies: ['family leave and care duties', 'local consultation', 'public-office conflict rules', 'pooling of earnings'],
    associated: ['communitarianism', 'christian-democracy', 'distributism', 'libertarianism', 'anarcho-communism'],
    limitation: 'The items cover family, neighbours and public office, not every form of solidarity.'
  },
  {
    code: 'CHNG', name: 'Change', neg: 'Traditional', pos: 'Progressive',
    phraseN: 'traditional norms', phraseP: 'social change',
    construct: 'attitude to inherited customs, institutions and the pace at which they should be remade',
    about: 'This axis concerns social norms and institutional continuity, not religious authority in law, which is measured separately on the Religion axis.',
    theory: 'Inglehart and Welzel’s traditional–secular dimension provides survey background. Reformist and revolutionary socialisms disagree about the speed and method of change.',
    policies: ['marriage law', 'curriculum change', 'constitutional replacement', 'place names and holidays'],
    associated: ['conservatism', 'green-politics', 'marxism', 'christian-democracy', 'third-way'],
    limitation: 'Country-level cultural map scores cannot be assumed to apply to individuals.'
  },
  {
    code: 'SCPE', name: 'Scope', neg: 'Nationalist', pos: 'Cosmopolitan',
    phraseN: 'national sovereignty', phraseP: 'global solidarity',
    construct: 'whether loyalty and obligation stop at the border or extend to non-citizens',
    about: 'This axis measures the moral and institutional scope of belonging. It is separate from Community, which concerns obligations inside a society.',
    theory: 'Internationalist currents in socialism and Marxism oppose nationalist prioritisation; nationalist and some conservative currents put citizens first. Inglehart–Welzel include national pride and outgroup tolerance.',
    policies: ['asylum', 'foreign aid', 'international treaties', 'immigration', 'foreign investment'],
    associated: ['nationalism', 'fascism', 'trotskyism', 'social-liberalism', 'green-politics'],
    limitation: 'Migration is also an economic and cultural question; items name the specific domain being judged.'
  },
  {
    code: 'ECOL', name: 'Ecology', neg: 'Growth-oriented', pos: 'Ecological',
    phraseN: 'growth first', phraseP: 'ecological limits',
    construct: 'priority given to output, extraction and employment against environmental limits and restoration',
    about: 'This axis is not a left–right dimension. Socialist and liberal traditions each contain productivist and ecological wings.',
    theory: 'The New Environmental Paradigm scale (Dunlap and Van Liere 1978; Stern, Dietz and Kalof 1993) supplies a measurement tradition. Foster’s Marx’s Ecology shows that productivism was not the only Marxist reading.',
    policies: ['emissions limits', 'impact assessments', 'coal phase-out', 'transport subsidies', 'land restoration'],
    associated: ['green-politics', 'market-socialism', 'marxism', 'conservatism'],
    limitation: 'The item about subsidised transport could load on redistribution in a pilot; this must be tested.'
  },
  {
    code: 'GOV', name: 'Governance', neg: 'Participatory', pos: 'Technocratic',
    phraseN: 'participatory decisions', phraseP: 'expert administration',
    construct: 'who is entitled to make binding decisions: residents and workers or trained experts and commissions',
    about: 'This axis is about decision rights, not ownership or coercion. Workers may elect managers in a privately owned firm; experts may serve a democratically elected government.',
    theory: 'Pateman (1970) and Dahl (1989) defend participation; Fischer (1990) analyses expertise as a political claim. Council communists and technocratic planners sit at opposite poles.',
    policies: ['citizen assemblies', 'worker elections', 'independent commissions', 'expert vetoes'],
    associated: ['council-communism', 'syndicalism', 'anarchism', 'marxism-leninism', 'third-way'],
    limitation: 'Respondents may read workplace items as economic; pilot loadings must be checked.'
  },
  {
    code: 'REL', name: 'Religion', neg: 'Religious', pos: 'Secular',
    phraseN: 'religious authority', phraseP: 'secular institutions',
    construct: 'whether religious authorities should hold formal roles in legislatures, schools, family law and the head of state',
    about: 'This axis is institutional, not about private belief. Personal observance and inherited custom belong on the Change axis.',
    theory: 'Bruce (2011) and Zuckerman and Shook (2017) supply conceptual literature; Inglehart and Welzel supply survey background. Christian socialism and anti-clerical Marxism differ here.',
    policies: ['religious seats in legislatures', 'faith schools', 'religious courts', 'head of state'],
    associated: ['christian-democracy', 'conservatism', 'marxism', 'social-liberalism'],
    limitation: 'High overlap risk with Change; the institutional definition is the mitigation.'
  },
  {
    code: 'REP', name: 'Representation', neg: 'Populist', pos: 'Pluralist',
    phraseN: 'direct popular rule', phraseP: 'pluralist checks',
    construct: 'whether elected leaders directly express a unified people or bargain among legitimate competing institutions',
    about: 'This axis describes a style of representation. It does not measure repression, borders or party ideology.',
    theory: 'Mudde (2004) defines populism as a thin ideology split between a pure people and a corrupt elite; Mudde and Rovira Kaltwasser (2017) give the comparative treatment.',
    policies: ['referendums', 'judicial appointment', 'cabinet composition', 'recall', 'corporate bargaining'],
    associated: ['fascism', 'nationalism', 'third-way', 'social-democracy', 'anarchism'],
    limitation: 'Populism often correlates with authority; a pilot may show the two axes should be merged.'
  },
  {
    code: 'JUST', name: 'Justice', neg: 'Retributive', pos: 'Restorative',
    phraseN: 'punitive justice', phraseP: 'restorative justice',
    construct: 'whether sentences should repay harm through proportionate punishment or repair it through mediation and reintegration',
    about: 'This axis concerns sentencing philosophy. It is not about arbitrary detention or civil liberties, which are on the Authority axis.',
    theory: 'Rusche and Kirchheimer (1939) provide a Marxist study of penal policy; Zehr (1990) sets out the restorative alternative.',
    policies: ['fixed sentences', 'victim–offender mediation', 'community service', 'sentence review'],
    associated: ['conservatism', 'social-democracy', 'anarchism', 'christian-democracy'],
    limitation: 'Respondents may read prison items as authority; wording must be checked in a pilot.'
  }
]);
