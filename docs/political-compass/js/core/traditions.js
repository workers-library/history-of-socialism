/**
 * Provisional, versioned ideological reference data. Coordinates are
 * editorial estimates with documented ranges, never measured facts.
 * Proximity is not membership.
 */
import { TRADITIONS as LEFT } from '../data/traditions-left.js';
import { TRADITIONS as OTHER } from '../data/traditions-other.js';

export const TRADITIONS = Object.freeze([...LEFT, ...OTHER]);

export function getTradition(id) {
  return TRADITIONS.find((t) => t.id === id) || null;
}

export function rankTraditions(result, axes) {
  return TRADITIONS.map((t) => {
    let distance = 0;
    const perAxis = result.scores.map((score, i) => {
      const gap = Math.abs(score - t.center[i]);
      distance += gap;
      const range = t.range && t.range[i];
      return {
        code: axes[i].code,
        name: axes[i].name,
        gap: Math.round(gap),
        withinRange: Array.isArray(range) ? score >= range[0] && score <= range[1] : null
      };
    });
    return {
      id: t.id,
      name: t.name,
      family: t.family,
      note: t.note,
      center: t.center,
      range: t.range,
      references: t.references,
      distance: Math.round(distance),
      maxDistance: axes.length * 200,
      perAxis,
      withinCount: perAxis.filter((p) => p.withinRange).length,
      agreement: perAxis.filter((p) => p.withinRange).map((p) => p.name),
      disagreement: perAxis.filter((p) => p.withinRange === false).map((p) => p.name)
    };
  }).sort((a, b) => a.distance - b.distance);
}

export function comparisonDetail(tradition, result, axes) {
  if (!tradition) return null;
  const ranked = rankTraditions(result, axes).find((t) => t.id === tradition.id);
  return ranked || null;
}
