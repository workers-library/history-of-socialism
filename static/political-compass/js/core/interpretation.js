/**
 * Deterministic interpretation rules. Every sentence is derived from scores,
 * answer contributions or explicit rule tables — never from a personality
 * stereotype or a predetermined ideological label.
 */
import { signed } from './scoring.js';

const POLICY_AREAS = [
  { id: 'ownership', label: 'Public and private ownership', match: /ownership|property|railway|wealth|rent|investor|housing/i },
  { id: 'markets', label: 'Markets and economic planning', match: /price|contract|wage|pay ratio|budget rules|planning/i },
  { id: 'redistribution', label: 'Wealth redistribution and welfare', match: /redistribution|tax|health financing|aid|transfer/i },
  { id: 'labour', label: 'Labour rights and workplace democracy', match: /wage|manager|union|labour standard|worker/i },
  { id: 'liberty', label: 'Individual autonomy and civil liberties', match: /speech|criticism|assembly|press|source|meeting|website|search|detention|personal|choice|consent|autonomy/i },
  { id: 'participation', label: 'Democratic participation', match: /vote|assembly|petition|referendum|consult|recall|committee/i },
  { id: 'state', label: 'State power and coercion', match: /police|force|detain|search|closure|commission|veto/i },
  { id: 'community', label: 'Community obligations', match: /family|neighbour|care|charit|obligation|pooling/i },
  { id: 'culture', label: 'Cultural and institutional change', match: /curriculum|tradition|holiday|place name|constitution|marriage|inheritance|school/i },
  { id: 'international', label: 'International cooperation and sovereignty', match: /asylum|immigration|treaty|sanction|aid|climate displacement|loyalty|sovereignty/i },
  { id: 'environment', label: 'Environmental policy', match: /coal|emission|pollution|fa|woodland|fuel|land use|impact|production target/i },
  { id: 'justice', label: 'Criminal justice', match: /sentenc|prison|offender|mediation|victim|term/i }
];

const PAIRS = [
  {
    a: 'ECON', b: 'GOV', op: 'both', title: 'Collective ownership with expert administration',
    text: 'Public ownership is often associated with workers’ control, but one strand of socialism assigns running power to planners and technicians. Your answers combine those two ideas.',
    test: (e, g) => e <= -40 && g >= 40
  },
  {
    a: 'ECON', b: 'AUTH', op: 'both', title: 'Economic collectivism with political liberty',
    text: 'This is central to libertarian socialism: social ownership without a coercive party-state. Liberalism usually pairs markets with liberty, so this combination is not on the usual two-axis map.',
    test: (e, au) => e <= -40 && au <= -40
  },
  {
    a: 'AUTH', b: 'COMM', op: 'both', title: 'Personal liberty with strong communal obligation',
    text: 'Communitarian writers argue that rights and obligations are compatible when obligations are voluntary rather than enforced by the state.',
    test: (au, c) => au <= -40 && c >= 40
  },
  {
    a: 'CHNG', b: 'REL', op: 'both', title: 'Traditional social norms with secular institutions',
    test: (ch, r) => ch <= -40 && r >= 40,
    text: 'Secular rules can coexist with traditional customs when the state stays out of religious life and communities preserve their own practices.'
  },
  {
    a: 'SCPE', b: 'ECOL', op: 'both', title: 'National sovereignty with ecological limits',
    test: (sc, ec) => sc <= -40 && ec >= 40,
    text: 'Green politics contains both internationalist and place-based currents; the latter justify local ecological policy without global institutions.'
  },
  {
    a: 'ECON', b: 'JUST', op: 'both', title: 'Market economics with restorative justice',
    test: (e, j) => e >= 40 && j >= 40,
    text: 'Restorative practices are not exclusively socialist; some liberal and conservative penologists support repair and reintegration without changing property relations.'
  },
  {
    a: 'AUTH', b: 'GOV', op: 'both', title: 'State authority with participatory decision-making',
    test: (au, g) => au >= 40 && g <= -40,
    text: 'Participation at local or workplace level can coexist with a strong central state in council-communist and some corporatist traditions.'
  },
  {
    a: 'ECON', b: 'SCPE', op: 'both', title: 'Collective ownership with global solidarity',
    test: (e, sc) => e <= -40 && sc >= 40,
    text: 'Internationalist Marxism links workers’ ownership across borders rather than within a national economy.'
  }
];

function valueFor(result, code) {
  const axis = result.axes.find((a) => a.code === code);
  return axis ? axis.score : 0;
}

function phraseFor(axis, score) {
  if (score < -20) return axis.phraseN;
  if (score > 20) return axis.phraseP;
  return 'a mixed position on ' + axis.name.toLowerCase();
}

export function executiveSummary(result, axes, alignment) {
  const ranked = result.axes.slice().sort((a, b) => Math.abs(b.score) - Math.abs(a.score));
  const strong = ranked.filter((a) => Math.abs(a.score) >= 55);
  const lean = ranked.filter((a) => Math.abs(a.score) >= 25 && Math.abs(a.score) < 55);
  const mixed = ranked.filter((a) => Math.abs(a.score) < 20 || a.cancellation);
  const byCode = Object.fromEntries(axes.map((a) => [a.code, a]));

  const lead = strong.length
    ? 'Your strongest expressed positions are ' + strong.slice(0, 3).map((a) => phraseFor(byCode[a.code], a.score)).join(', ') + '.'
    : 'No axis reaches a strong threshold in your answers; your profile is mostly moderate.';

  const leanText = lean.length
    ? ' You also lean toward ' + lean.slice(0, 3).map((a) => phraseFor(byCode[a.code], a.score)).join(', ') + '.'
    : '';

  const mixedText = mixed.length
    ? ' On ' + mixed.slice(0, 4).map((a) => a.name.toLowerCase()).join(', ') + ' your answers are mixed or pull in opposite directions, so no clear position is supported.'
    : '';

  const economic = valueFor(result, 'ECON');
  const authority = valueFor(result, 'AUTH');
  const community = valueFor(result, 'COMM');
  const governance = valueFor(result, 'GOV');
  const interaction = economic < -20 && authority < -20
    ? 'Economically collective answers sit alongside civil-libertarian answers, a combination associated with libertarian socialism rather than with state communism.'
    : economic < -20 && governance > 20
      ? 'Collective ownership combined with expert administration resembles planning-oriented strands of socialism rather than workers’ self-management.'
      : economic > 20 && authority < -20
        ? 'Market economics combined with personal liberty is the classic liberal pairing, though your other axes may qualify it.'
        : authority > 20 && community > 20
          ? 'An emphasis on order and shared obligation resembles conservative communitarianism, subject to your positions on ownership and change.'
          : 'Your economic, institutional and cultural answers do not follow a single conventional package, which is why the report treats each axis separately.';

  const traditions = alignment && alignment.length
    ? 'The closest provisional traditions by distance are ' + alignment.slice(0, 3).map((t) => t.name).join(', ') + '. Proximity here means similar answers on these ten axes, not membership or agreement on every point.'
    : '';

  const departures = [];
  if (economic < -20 && community < -20) departures.push('collective ownership with an individualist social outlook');
  if (authority < -20 && governance > 20) departures.push('civil liberty with technocratic administration');
  if (economic > 20 && scopePositive(result) < -20) departures.push('market economics with national sovereignty');
  if (changeValue(result) < -20 && ecologyValue(result) > 20) departures.push('traditional institutions with ecological limits');
  const departureText = departures.length
    ? ' Points that do not fit a standard left–right label include ' + departures.join(' and ') + '.'
    : '';

  return { lead, leanText, mixedText, interaction, traditions, departureText };
}

function scopePositive(r) { return valueFor(r, 'SCPE'); }
function changeValue(r) { return valueFor(r, 'CHNG'); }
function ecologyValue(r) { return valueFor(r, 'ECOL'); }

export function axisNarrative(result, axes) {
  const byCode = Object.fromEntries(axes.map((a) => [a.code, a]));
  return result.axes.map((axis) => {
    const def = byCode[axis.code];
    const direction = axis.score < -20 ? def.neg : axis.score > 20 ? def.pos : 'neither pole clearly';
    return {
      ...axis,
      neg: def.neg,
      pos: def.pos,
      definition: def,
      directionText: axis.score < -20
        ? `Your answers lean toward ${def.neg} on ${def.name}.`
        : axis.score > 20
          ? `Your answers lean toward ${def.pos} on ${def.name}.`
          : `Your answers do not establish a clear direction on ${def.name}.`,
      neutralCount: axis.neutral.length,
      opposedCount: axis.towardPositive.length && axis.towardNegative.length
        ? Math.min(axis.towardPositive.length, axis.towardNegative.length) : 0,
      explanation: def.about,
      theory: def.theory,
      policies: def.policies,
      limitation: def.limitation,
      direction
    };
  });
}

export function policyPreferences(result, questions) {
  const byId = new Map(questions.map((q) => [q.id, q]));
  const contributions = [];
  result.axes.forEach((axis) => {
    axis.strongest.concat(axis.moderating).forEach((row) => {
      const q = byId.get(row.id);
      if (q) contributions.push({ area: q.facet, value: row.contribution, id: q.id });
    });
  });

  return POLICY_AREAS.map((area) => {
    const rows = contributions.filter((c) => area.match.test(c.area));
    if (rows.length < 2) return { ...area, status: 'not assessed', detail: 'Too few directly relevant statements.' };
    const sum = rows.reduce((a, b) => a + b.value, 0);
    const mean = sum / rows.length;
    const support = rows.filter((r) => r.value > 0).length;
    const oppose = rows.filter((r) => r.value < 0).length;
    const status = support && oppose ? 'mixed' : mean > 0 ? 'second pole' : 'first pole';
    return {
      ...area,
      status,
      score: Math.round(mean * 50) / 50,
      evidence: rows.map((r) => r.id),
      detail: support && oppose
        ? `Supporting and opposing answers are both present (${support} versus ${oppose}); no single preference is established.`
        : `${Math.abs(mean).toFixed(1)} mean contribution across ${rows.length} directly relevant answers.`
    };
  }).filter((a) => a.status !== 'not assessed');
}

export function crossDimensional(result) {
  const map = Object.fromEntries(result.axes.map((a) => [a.code, a.score]));
  return PAIRS.filter((pair) => pair.test(map[pair.a], map[pair.b])).map((pair) => ({
    title: pair.title,
    text: pair.text,
    axes: [pair.a, pair.b]
  }));
}

export function uncertaintyNarrative(result, sensitivity, alignment) {
  const incomplete = result.axes.filter((a) => a.answered < a.total);
  const cancellations = result.axes.filter((a) => a.cancellation);
  const neutrals = result.axes.filter((a) => a.neutral.length >= 3);
  const sensitive = sensitivity.filter((s) => s.sensitive);
  const close = alignment.length >= 2 && (alignment[1].distance - alignment[0].distance) < 60;

  const items = [];
  if (!result.complete) items.push(`Only ${result.answeredCount} of ${result.total} statements were answered; the report is provisional until the assessment is complete.`);
  if (incomplete.length) items.push('Some axes have missing answers: ' + incomplete.map((a) => a.name).join(', ') + '.');
  if (cancellations.length) items.push('Opposing answers cancel on ' + cancellations.map((a) => a.name).join(', ') + ', so the direction is not well established.');
  if (neutrals.length) items.push('Several neutral answers were given on ' + neutrals.map((a) => a.name).join(', ') + '.');
  if (sensitive.length) items.push('Scores for ' + sensitive.map((s) => s.code).join(', ') + ' can shift by at least 15 points if a single answer changes.');
  if (close) items.push('The two closest traditions are separated by a small gap; their rank should not be treated as meaningful.');
  if (!items.length) items.push('Answers are directionally consistent on most axes, but self-reports still depend on wording, interpretation and equal weighting.');
  return items;
}

export function responseEvidence(result, questions) {
  const byId = new Map(questions.map((q, index) => [q.id, { ...q, index }]));
  return result.axes.flatMap((axis) => {
    const rows = axis.strongest.concat(axis.moderating);
    return rows.map((row) => {
      const q = byId.get(row.id);
      return {
        id: q.id,
        axis: axis.name,
        facet: q.facet,
        question: q.t,
        selected: q.selectedLabel || '',
        contribution: row.contribution,
        interpretation: row.contribution > 0
          ? `Supports the ${row.contribution >= 2 ? 'strong ' : ''}${axis.pole} pole of ${axis.name}.`
          : `Opposes the ${axis.pole} pole of ${axis.name}.`
      };
    });
  });
}
