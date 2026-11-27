/**
 * Deterministic scoring. All functions are pure so the same answers always
 * produce the same report. Scores are kept unrounded internally.
 */
import { VERSION } from '../data/axes.js';

export const BANDS = Object.freeze([
  { max: -60, label: 'strongly toward the first pole', short: 'Strong' },
  { max: -20, label: 'leaning toward the first pole', short: 'Lean' },
  { max: 20, label: 'mixed or near the middle', short: 'Mixed' },
  { max: 60, label: 'leaning toward the second pole', short: 'Lean' },
  { max: Infinity, label: 'strongly toward the second pole', short: 'Strong' }
]);

export function band(value) {
  if (value <= -60) return BANDS[0];
  if (value <= -20) return BANDS[1];
  if (value < 20) return BANDS[2];
  if (value < 60) return BANDS[3];
  return BANDS[4];
}

export function signed(value) {
  const n = Math.round(value);
  return (n > 0 ? '+' : '') + n;
}

export function validateAnswers(answers, questions) {
  if (!Array.isArray(answers) || answers.length !== questions.length) {
    return { valid: false, error: 'Answer array must match the questionnaire length.' };
  }
  for (let i = 0; i < answers.length; i++) {
    const a = answers[i];
    if (a !== null && (!Number.isFinite(a) || a < -2 || a > 2 || !Number.isInteger(a))) {
      return { valid: false, error: `Answer ${i + 1} is not a valid five-point response.` };
    }
  }
  return { valid: true, error: null };
}

/**
 * Score every axis from its own items. An unanswered item is excluded, and
 * coverage is reported so a partial assessment is never shown as complete.
 */
export function scoreAssessment(answers, questions, axes) {
  const check = validateAnswers(answers, questions);
  if (!check.valid) throw new Error(check.error);

  const axisResults = axes.map((axis, ai) => {
    const items = questions
      .map((q, index) => ({ q, index, contribution: answers[index] === null ? null : answers[index] * q.d }))
      .filter((row) => row.q.a === ai);

    const answered = items.filter((row) => row.contribution !== null);
    const sum = answered.reduce((acc, row) => acc + row.contribution, 0);
    const possible = items.length * 2;
    const score = answered.length === 0 ? 0 : (sum / possible) * 100;

    const towardPositive = answered.filter((row) => row.contribution > 0);
    const towardNegative = answered.filter((row) => row.contribution < 0);
    const neutral = answered.filter((row) => row.contribution === 0);

    const strongest = answered
      .filter((row) => row.contribution >= 2)
      .sort((a, b) => b.contribution - a.contribution)
      .map((row) => ({ id: row.q.id, text: row.q.t, contribution: row.contribution, facet: row.q.facet }));
    const moderating = answered
      .filter((row) => row.contribution <= -2)
      .sort((a, b) => a.contribution - b.contribution)
      .map((row) => ({ id: row.q.id, text: row.q.t, contribution: row.contribution, facet: row.q.facet }));

    const opposingBothWays = towardPositive.length >= 2 && towardNegative.length >= 2;
    const cancellation = opposingBothWays && Math.abs(score) < 40;

    return {
      code: axis.code,
      name: axis.name,
      index: ai,
      score,
      rounded: signed(score),
      band: band(score),
      pole: score < -20 ? axis.neg : score > 20 ? axis.pos : 'mixed',
      answered: answered.length,
      total: items.length,
      coverage: answered.length / items.length,
      towardPositive: towardPositive.map((row) => row.q.id),
      towardNegative: towardNegative.map((row) => row.q.id),
      neutral: neutral.map((row) => row.q.id),
      strongest,
      moderating,
      cancellation,
      missing: items.filter((row) => row.contribution === null).map((row) => row.q.id)
    };
  });

  const answeredCount = answers.filter((a) => a !== null).length;
  return {
    version: VERSION,
    complete: answeredCount === questions.length,
    answeredCount,
    total: questions.length,
    scores: axisResults.map((a) => a.score),
    axes: axisResults
  };
}

/** Leave-one-out sensitivity: how far the score moves if one answer changes. */
export function sensitivity(result, answers, questions, axes) {
  return result.axes.map((axis, ai) => {
    const indexRows = questions
      .map((q, index) => ({ q, index }))
      .filter((row) => row.q.a === ai && answers[row.index] !== null);

    let maxShift = 0;
    for (const row of indexRows) {
      for (const alternate of [-2, -1, 0, 1, 2]) {
        if (alternate === answers[row.index]) continue;
        const trial = answers.slice();
        trial[row.index] = alternate;
        const shifted = scoreAssessment(trial, questions, axes).axes[ai].score;
        maxShift = Math.max(maxShift, Math.abs(shifted - axis.score));
      }
    }
    return {
      code: axis.code,
      maxShift: Math.round(maxShift * 10) / 10,
      sensitive: maxShift >= 15,
      itemCount: indexRows.length
    };
  });
}
