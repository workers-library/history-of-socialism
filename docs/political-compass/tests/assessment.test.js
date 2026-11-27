import test from 'node:test';
import assert from 'node:assert/strict';

import { AXES, VERSION } from '../js/data/axes.js';
import { QUESTIONS } from '../js/data/questions.js';
import { TRADITIONS } from '../js/core/traditions.js';
import { RESOURCES } from '../js/data/resources.js';
import { scoreAssessment, sensitivity, validateAnswers, signed } from '../js/core/scoring.js';
import { executiveSummary, axisNarrative, policyPreferences, crossDimensional, uncertaintyNarrative } from '../js/core/interpretation.js';
import { rankTraditions } from '../js/core/traditions.js';
import { buildReportHTML } from '../js/report/report.js';

const blank = () => new Array(QUESTIONS.length).fill(null);

test('questionnaire has 100 balanced, documented items', () => {
  assert.equal(QUESTIONS.length, 100);
  assert.equal(AXES.length, 10);
  AXES.forEach((axis, a) => {
    const rows = QUESTIONS.filter((q) => q.a === a);
    assert.equal(rows.length, 10);
    assert.equal(rows.filter((q) => q.d === 1).length, 5);
    assert.equal(rows.filter((q) => q.d === -1).length, 5);
    rows.forEach((q) => { assert.ok(q.rationale && q.facet && q.id); });
  });
});

test('extreme and neutral answers score correctly', () => {
  // Balanced keying means "strongly agree" to everything is a zero profile.
  const allAgree = scoreAssessment(blank().map(() => 2), QUESTIONS, AXES);
  const allNeutral = scoreAssessment(blank().map(() => 0), QUESTIONS, AXES);
  const maximum = scoreAssessment(QUESTIONS.map((q) => (q.d === 1 ? 2 : -2)), QUESTIONS, AXES);
  const minimum = scoreAssessment(QUESTIONS.map((q) => (q.d === 1 ? -2 : 2)), QUESTIONS, AXES);
  allAgree.scores.forEach((s) => assert.ok(Math.abs(s) < 0.001));
  maximum.scores.forEach((s) => assert.ok(Math.abs(s - 100) < 0.001));
  minimum.scores.forEach((s) => assert.ok(Math.abs(s + 100) < 0.001));
  allNeutral.scores.forEach((s) => assert.equal(s, 0));
  assert.equal(allAgree.complete, true);
  assert.equal(allNeutral.axes[0].neutral.length, 10);
});

test('balanced keying prevents agreement bias', () => {
  const agree = scoreAssessment(blank().map(() => 1), QUESTIONS, AXES);
  agree.scores.forEach((s) => assert.ok(Math.abs(s) < 0.001, `axis score ${s}`));
});

test('one scale step moves an axis by five points', () => {
  const answers = blank();
  const first = QUESTIONS.findIndex((q) => q.a === 0);
  answers[first] = 1;
  const s1 = scoreAssessment(answers, QUESTIONS, AXES).scores[0];
  answers[first] = 2;
  const s2 = scoreAssessment(answers, QUESTIONS, AXES).scores[0];
  assert.ok(Math.abs(Math.abs(s2 - s1) - 5) < 0.001);
});

test('mixed opposing answers are detected separately from neutral answers', () => {
  const answers = blank();
  const rows = QUESTIONS.map((q, i) => ({ q, i })).filter((r) => r.q.a === 1);
  rows.slice(0, 4).forEach((r, k) => { answers[r.i] = k % 2 === 0 ? 2 : -2; });
  const result = scoreAssessment(answers, QUESTIONS, AXES);
  assert.ok(result.axes[1].towardPositive.length >= 1);
  assert.ok(result.axes[1].towardNegative.length >= 1);
  assert.equal(result.axes[1].neutral.length, 0);
  assert.equal(result.complete, false);
});

test('invalid and incomplete stored data are rejected or reported', () => {
  assert.equal(validateAnswers([1, 2], QUESTIONS).valid, false);
  assert.equal(validateAnswers(blank().map(() => 9), QUESTIONS).valid, false);
  assert.equal(validateAnswers(blank().map(() => 1.5), QUESTIONS).valid, false);
  const partial = blank();
  partial[0] = 2;
  const result = scoreAssessment(partial, QUESTIONS, AXES);
  assert.equal(result.complete, false);
  assert.equal(result.answeredCount, 1);
  assert.equal(result.axes[0].answered, 1);
});

test('sensitivity reports one-answer shifts', () => {
  const answers = blank().map((_, i) => (i % 5) - 2);
  const result = scoreAssessment(answers, QUESTIONS, AXES);
  const sens = sensitivity(result, answers, QUESTIONS, AXES);
  assert.equal(sens.length, 10);
  sens.forEach((s) => { assert.ok(s.maxShift >= 0 && s.maxShift <= 20); });
});

test('tradition data are versioned, ranged and provisional', () => {
  assert.equal(TRADITIONS.length, 27);
  TRADITIONS.forEach((t) => {
    assert.equal(t.center.length, 10);
    assert.equal(t.range.length, 10);
    t.center.forEach((v, i) => {
      assert.ok(Number.isInteger(v) && v >= -100 && v <= 100);
      assert.ok(t.range[i][0] <= v && v <= t.range[i][1]);
    });
    assert.match(t.note.toLowerCase(), /provisional|estimate/);
    assert.ok(t.references.length >= 1);
  });
});

test('ideological ranking is symmetric and has no built-in preference', () => {
  const answers = blank().map(() => 1);
  const result = scoreAssessment(answers, QUESTIONS, AXES);
  const ranked = rankTraditions(result, AXES);
  for (let i = 1; i < ranked.length; i++) assert.ok(ranked[i - 1].distance <= ranked[i].distance);
  const expected = TRADITIONS.map((t) => t.center.reduce((sum, v) => sum + Math.abs(0 - v), 0)).sort((a, b) => a - b);
  const got = ranked.map((r) => r.distance).sort((a, b) => a - b);
  assert.deepEqual(got, expected);
});

test('interpretation is deterministic and traceable', () => {
  const answers = blank().map((i) => (i % 7) - 3);
  const scoped = answers.map((v) => Math.max(-2, Math.min(2, v)));
  const result = scoreAssessment(scoped, QUESTIONS, AXES);
  const alignment = rankTraditions(result, AXES);
  const summary = executiveSummary(result, AXES, alignment);
  assert.equal(JSON.stringify(summary), JSON.stringify(executiveSummary(result, AXES, alignment)));
  assert.ok(summary.lead.length > 20);
  const narratives = axisNarrative(result, AXES);
  assert.equal(narratives.length, 10);
  narratives.forEach((n) => { assert.ok(n.theory && n.limitation && Array.isArray(n.strongest)); });
  const policies = policyPreferences(result, QUESTIONS);
  assert.ok(policies.every((p) => p.evidence.length >= 2));
  const uncertainty = uncertaintyNarrative(result, sensitivity(result, scoped, QUESTIONS, AXES), alignment);
  assert.ok(uncertainty.length >= 1 && uncertainty.every((u) => typeof u === 'string'));
  assert.ok(Array.isArray(crossDimensional(result)));
  assert.equal(signed(33.4), '+33');
});

test('report contains every required section and text equivalent', () => {
  const answers = blank().map(() => 1);
  const result = scoreAssessment(answers, QUESTIONS, AXES);
  const model = {
    result, answers, axes: AXES, resources: RESOURCES,
    alignment: rankTraditions(result, AXES),
    sensitivity: sensitivity(result, answers, QUESTIONS, AXES),
    summary: executiveSummary(result, AXES, rankTraditions(result, AXES)),
    narratives: axisNarrative(result, AXES),
    policies: policyPreferences(result, QUESTIONS),
    cross: crossDimensional(result),
    uncertainty: uncertaintyNarrative(result, [], []),
    evidence: []
  };
  const html = buildReportHTML(model);
  ['executive', 'findings', 'compass', 'dimensions', 'values', 'traditions', 'cross', 'evidence', 'reading', 'method'].forEach((id) => {
    assert.ok(html.includes(`id="${id}"`), `missing section ${id}`);
  });
  assert.ok(html.includes('Text equivalent of the compass data'));
  assert.ok(!html.includes('undefined'));
  assert.ok(VERSION.questionnaire);
});

test('comparison display safeguards suppress uniform response patterns', async () => {
  const { comparisonStatus } = await import('../js/report/report.js');
  for (const value of [-2, -1, 0, 1, 2]) {
    const answers = blank().map(() => value);
    const result = scoreAssessment(answers, QUESTIONS, AXES);
    const status = comparisonStatus({answers, alignment: rankTraditions(result, AXES)});
    assert.equal(status.responseStyle, true);
    assert.equal(status.suppress, true);
  }
});

test('comparison display refuses weak proximity and insufficient range coverage', async () => {
  const { comparisonStatus } = await import('../js/report/report.js');
  const answers = blank().map((_, i) => i % 5 - 2);
  assert.equal(comparisonStatus({answers, alignment: [{distance:501, withinCount:10}]}).noClose, true);
  assert.equal(comparisonStatus({answers, alignment: [{distance:300, withinCount:6}]}).noClose, true);
  assert.equal(comparisonStatus({answers, alignment: [{distance:300, withinCount:7}]}).suppress, false);
});
