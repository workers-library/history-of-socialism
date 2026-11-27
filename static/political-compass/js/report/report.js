/**
 * Deterministic report renderer. All content comes from structured data and
 * the interpretation module; no conclusions are invented in this file.
 */
import { signed } from '../core/scoring.js';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function section(id, title, body, intro = '') {
  return `<section class="report-section" id="${esc(id)}"><div class="section-head"><h3>${esc(title)}</h3>${intro ? `<p>${esc(intro)}</p>` : ''}</div>${body}</section>`;
}
function detail(title, body, open = false) {
  return `<details class="detail"${open ? ' open' : ''}><summary>${esc(title)}</summary><div class="detail-body">${body}</div></details>`;
}
function bar(score) {
  const w = Math.abs(score) / 2;
  const left = score < 0 ? 50 - w : 50;
  const side = score < 0 ? 'neg' : score > 0 ? 'pos' : 'zero';
  return `<div class="bar"><div class="bar-fill ${side}" style="left:${left}%;width:${w}%"></div><span class="bar-value">${signed(score)}</span></div>`;
}

function executive(model) {
  const { summary, result } = model;
  const strong = result.axes.filter((a) => Math.abs(a.score) >= 60).length;
  const mixed = result.axes.filter((a) => Math.abs(a.score) < 20 || a.cancellation).length;
  return `<div class="exec">
    <p class="exec-lead">${esc(summary.lead)}</p>
    <p>${esc(summary.leanText)} ${esc(summary.mixedText)}</p>
    <p>${esc(summary.interaction)}</p>
    <p>${comparisonStatus(model).suppress ? "No ideological match is asserted for this response pattern." : esc(summary.traditions)} ${esc(summary.departureText)}</p>
    <div class="stats">
      <div class="stat"><b>${strong}</b><span>Strong axes</span></div>
      <div class="stat"><b>${mixed}</b><span>Mixed axes</span></div>
      <div class="stat"><b>${result.answeredCount}/${result.total}</b><span>Answered</span></div>
    </div>
  </div>`;
}

function findings(model) {
  const ranked = model.result.axes.slice().sort((a, b) => Math.abs(b.score) - Math.abs(a.score));
  const rows = ranked.map((a) => `<li><strong>${esc(a.name)}</strong> ${esc(signed(a.score))} — ${esc(a.band.short)} · ${esc(a.pole)}</li>`).join('');
  const tensions = model.cross.length
    ? model.cross.map((t) => `<li><strong>${esc(t.title)}.</strong> ${esc(t.text)}</li>`).join('')
    : '<li>No curated cross-dimensional combination met its threshold in your answers.</li>';
  return `<div class="two-col"><div><h4>By absolute strength</h4><ol class="findings">${rows}</ol></div>
    <div><h4>Combinations worth noting</h4><ul class="findings">${tensions}</ul></div></div>`;
}

export function comparisonStatus(model) {
  const a = model.answers || [];
  const uniform = a.length > 0 && a.every(v => v === a[0]);
  const agreement = a.filter(v => v > 0).length / a.length;
  const disagreement = a.filter(v => v < 0).length / a.length;
  const responseStyle = uniform || agreement > .8 || disagreement > .8;
  const top = model.alignment[0];
  const noClose = !top || top.distance > 500 || top.withinCount < 7;
  return { responseStyle, noClose, suppress: responseStyle || noClose };
}
function compass(model) {
  const rows = model.axes.map((a,i)=>{
    const score=model.result.scores[i];const width=Math.abs(score)/2;
    return `<div class="spectrum-row"><div class="spectrum-head"><span class="axis-code">${String(i+1).padStart(2,'0')}</span><strong>${esc(a.name)}</strong><span class="spectrum-score">${signed(score)}</span></div><div class="spectrum-body"><span>${esc(a.neg)}</span><div class="spectrum-track"><div class="spectrum-fill ${score<0?'neg':'pos'}" style="left:${score<0?50-width:50}%;width:${width}%"></div><i class="comparison-marker" hidden></i></div><span>${esc(a.pos)}</span></div></div>`;
  }).join('');
  const table=model.axes.map((a,i)=>`<tr><td>${esc(a.name)}</td><td>${esc(a.neg)}</td><td class="num">${signed(model.result.scores[i])}</td><td>${esc(a.pos)}</td><td class="compare-cell">—</td></tr>`).join('');
  const counts=model.result.axes.map(a=>`<tr><td>${esc(a.name)}</td><td class="num">${a.towardNegative.length}</td><td class="num">${a.neutral.length}</td><td class="num">${a.towardPositive.length}</td></tr>`).join('');
  const options=model.alignment.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(t=>`<option value="${esc(t.id)}">${esc(t.name)}</option>`).join('');
  return `<div class="compare-control"><div><label for="tradition-select">Compare with a tradition</label><p class="small muted">Optional editorial reference, not a match.</p></div><select id="tradition-select"><option value="">Your answers only</option>${options}</select></div><div class="spectrum-scale"><span>−100</span><span>0</span><span>+100</span></div><div class="spectrum-list">${rows}</div><div class="spectrum-legend"><span><i class="legend-swatch profile"></i> Your score</span><span><i class="legend-swatch marker"></i> Selected tradition centre</span></div><p id="comparison-caption" class="small muted" aria-live="polite">Select a tradition to compare its estimated centre with your scores.</p>${detail('Text equivalent of the compass data',`<table class="data-table"><thead><tr><th>Axis</th><th>First pole</th><th>Score</th><th>Second pole</th><th>Reference centre</th></tr></thead><tbody>${table}</tbody></table>`)}${detail("Response distribution by axis", `<table class="data-table"><thead><tr><th>Axis</th><th>Toward first pole</th><th>Midpoint responses</th><th>Toward second pole</th></tr></thead><tbody>${counts}</tbody></table>`)}<details class="detail" id="radar-extra"><summary>Alternative radar view (optional)</summary><div class="detail-body"><p class="muted">Spoke order and polygon geometry can distort apparent similarity. Use the bars and table for interpretation.</p><div class="radar-frame"><canvas id="chart-radar" aria-label="Alternative radar visualization; values are in the compass table" role="img"></canvas></div></div></details>`;
}
export function updateComparison(model,id){const t=model.alignment.find(x=>x.id===id);document.querySelectorAll('.comparison-marker').forEach((m,i)=>{m.hidden=!t;if(t)m.style.left=(t.center[i]+100)/2+'%';});document.querySelectorAll('.compare-cell').forEach((c,i)=>c.textContent=t?signed(t.center[i]):'—');document.getElementById('comparison-caption').textContent=t?`${t.name}: editorial centre; total gap ${t.distance} / ${t.maxDistance}; ${t.withinCount} of ${model.axes.length} axes within its stated range.`:'Select a tradition to compare its estimated centre with your scores.';}

function dimensionReports(model) {
  return model.narratives.map((n) => detail(
    `${n.name} — ${signed(n.score)} · ${n.directionText}`,
    `<p><strong>What this axis measures.</strong> ${esc(n.explanation)}</p>
     <p><strong>Relevant theory.</strong> ${esc(n.theory)}</p>
     ${bar(n.score)}
     <p class="bar-note">The bar runs from <strong>${esc(n.neg)}</strong> on the left through zero at the centre to <strong>${esc(n.pos)}</strong> on the right. Its length shows how far you lean; the number on the bar is your score from −100 to +100. ${n.neutralCount} neutral answers; ${n.opposedCount} pairs of opposing answers.</p>
     <p><strong>Strong contributions toward the second pole.</strong></p>
     <ul>${n.strongest.length ? n.strongest.map((x) => `<li>${esc(x.text)} <span class="tag-mini">+${x.contribution}</span></li>`).join('') : '<li>No contribution of +2.</li>'}</ul>
     <p><strong>Strong contributions toward the first pole.</strong></p>
     <ul>${n.moderating.length ? n.moderating.map((x) => `<li>${esc(x.text)} <span class="tag-mini">${x.contribution}</span></li>`).join('') : '<li>No contribution of −2.</li>'}</ul>
     ${n.policies.length ? `<p><strong>Policy areas directly sampled:</strong> ${esc(n.policies.join('; '))}.</p>` : ''}
     <p><strong>Traditions associated with similar positions:</strong> ${esc(n.definition.associated.join(', '))}.</p>
     <p><strong>Qualification.</strong> ${esc(n.limitation)} ${n.cancellation ? 'Your answers on this axis pull in both directions and cancel, so the direction is not well established.' : ''}</p>`,
    Math.abs(n.score) >= 60
  )).join('');
}

function values(model) {
  const rows=model.evidence.filter(e=>e.response>0).map(e=>`<li><span class="axis-code">${esc(e.id)} · ${esc(e.axis)}</span><p>${esc(e.question)}</p><span class="tag-mini">${esc(e.selected)}</span></li>`).join('');
  return `<p class="muted">Statements you agreed with. These are item-level responses, not a comprehensive policy platform.</p>${rows?`<ul class="endorsed-list">${rows}</ul>`:'<p>No agreement responses are listed.</p>'}`;
}

function traditions(model) {
  const status = comparisonStatus(model);
  const rows = model.alignment.map((t, i) => {
    const near = i > 0 && t.distance - model.alignment[0].distance <= 50;
    const chips = (list, cls) => list.map((x) => `<span class="axis-pill ${cls}">${esc(x)}</span>`).join('') || '<span class="axis-pill none">none</span>';
    return `<details class="tradition-row">
      <summary>
        <div class="tr-rank">${String(i + 1).padStart(2, "0")}</div>
        <div class="tr-main">
          <div class="tr-head"><h4>${esc(t.name)}</h4><span class="tr-family">${esc(t.family || '')}</span></div>
          <div class="tr-gap"><span class="tr-gap-label">Total gap</span><strong class="tr-gap-value">${t.distance} <span>/ ${t.maxDistance}</span> · ${t.withinCount}/10 in range ${near ? "· near-tie with lowest gap" : ""}</strong></div>
          <div class="tr-chips"><span class="tr-chip-label">Within stated range</span>${chips(t.agreement, 'good')}</div>
          <div class="tr-chips"><span class="tr-chip-label">Outside stated range</span>${chips(t.disagreement, 'bad')}</div>
        </div>
        <span class="tr-expand">Details</span>
      </summary>
      <div class="tr-body">
        <p class="muted">${esc(t.note)}</p>
        <table class="data-table"><thead><tr><th>Axis</th><th>Gap</th><th>Position relative to range</th></tr></thead><tbody>${t.perAxis.map((p) => `<tr><td>${esc(p.name)}</td><td class="num">${p.gap}</td><td>${p.withinRange ? 'within' : 'outside'}</td></tr>`).join('')}</tbody></table>
        ${t.references && t.references.length ? `<p class="tr-refs"><strong>Sources:</strong> ${t.references.slice(0, 4).map((r) => esc(r.title)).join(' · ')}</p>` : ''}
      </div>
    </details>`;
  }).join('');
  return `${status.suppress ? `<div class="notice"><strong>${status.responseStyle ? "No match asserted: response-pattern caution" : "No close match"}</strong><p>${status.responseStyle ? "Uniform or highly one-sided agreement/disagreement can produce cancellation. The distances below are descriptive only." : "The lowest gap exceeds 500 or fewer than seven axes fall within the reference range. These provisional thresholds are display safeguards, not validated cut-offs."}</p></div>` : ""}<div class="tradition-legend">
      <span><i class="legend-swatch good"></i> Within the tradition's stated range on that axis</span>
      <span><i class="legend-swatch bad"></i> Outside that range</span>
      <span>Gap = sum of absolute differences across ten axes. Lower is closer. It is a display convention, not a percentage or probability.</span>
    </div>
    <div class="tradition-list">${rows}</div>
    <p class="muted">Proximity on these ten axes is not membership, endorsement or ideological equality. Every placement is a provisional editorial estimate with a range.</p>`;
}

function evidence(model) {
  const rows = model.evidence.map((e) => `<tr><td>${esc(e.id)}</td><td>${esc(e.axis)}</td><td>${esc(e.question)}</td><td>${esc(e.selected)}</td><td class="num">${e.contribution > 0 ? '+' : ''}${e.contribution}</td><td>${esc(e.interpretation)}</td></tr>`).join('');
  return detail('View all response evidence', `<table class="data-table"><thead><tr><th>Item</th><th>Axis</th><th>Question</th><th>Selected</th><th>Contribution</th><th>Interpretation</th></tr></thead><tbody>${rows}</tbody></table>`, false);
}

function reading(model) {
  const item = (r) => `<li><span class="tag-mini">${esc(r.kind)} · ${esc(r.stance)}</span> <a href="${esc(r.url)}" target="_blank" rel="noreferrer">${esc(r.title)}</a> — ${esc(r.author || '')} ${esc(r.year || '')}. ${esc(r.why)}</li>`;
  const groups = model.axes.map((axis) => {
    const score = (model.result.axes.find((a) => a.code === axis.code) || {}).score || 0;
    const items = (model.resources.axes[axis.name] || []).slice(0, 3);
    return `<div class="reading-group"><h4>${esc(axis.name)} <span class="reading-score">${signed(score)}</span></h4>` +
      (items.length ? `<ul class="reading">${items.map(item).join('')}</ul>` : '<p class="muted">No verified resources yet.</p>') + '</div>';
  }).join('');
  const traditions = comparisonStatus(model).suppress ? [] : model.alignment.slice(0, 3);
  const traditionHtml = traditions.map((t) => {
    const items = model.resources.traditions[t.id] || [];
    return items.length ? `<div class="reading-group"><h4>${esc(t.name)}</h4><ul class="reading">${items.slice(0, 3).map(item).join('')}</ul></div>` : '';
  }).join('');
  const general = (model.resources.general || []).length
    ? `<div class="reading-group"><h4>General reading</h4><ul class="reading">${model.resources.general.slice(0, 5).map(item).join('')}</ul></div>` : '';
  return groups + traditionHtml + general;
}

function methodology(model) {
  const items = model.uncertainty.map((u) => `<li>${esc(u)}</li>`).join('');
  const sens = model.sensitivity.map((s) => `<tr><td>${esc(s.code)}</td><td class="num">${s.maxShift}</td><td>${s.sensitive ? 'sensitive to one answer' : 'stable under one-answer changes'}</td></tr>`).join('');
  return `<div class="method-grid">
      <div class="method-card"><span class="method-kicker">Scoring rule</span><h4>What the numbers mean</h4>
        <p>Reports require all 100 responses. Each axis is scored from ten statements. Agreement with a positively keyed statement adds up to +2; disagreement subtracts. Negatively keyed statements are reversed. The sum is divided by 20 and multiplied by 100.</p>
        <p>One step on the five-point scale moves an axis by five points. A full −2 to +2 swing on one statement moves it by twenty.</p>
        <p>Axes are separate by design, not because factor analysis has established independence. Equal weighting is a declared convention, not a finding.</p>
      </div>
      <div class="method-card"><span class="method-kicker">Caveats</span><h4>Uncertainty and sensitivity</h4><ul class="method-list">${items}</ul></div>
    </div>
    <div class="method-table"><h4>Sensitivity by axis</h4><p class="muted">Each figure is the largest change in that axis if one answer were changed to another option.</p>
      <table class="data-table"><thead><tr><th>Axis</th><th>Largest shift from one answer</th><th>Reading</th></tr></thead><tbody>${sens}</tbody></table></div>
    <div class="version-row"><span>Questionnaire v${esc(model.result.version.questionnaire)}</span><span>Scoring v${esc(model.result.version.scoring)}</span><span>Tradition data v${esc(model.result.version.traditions)}</span><span>No confidence percentages or probabilities of membership</span></div>`;
}

export function buildReportHTML(model) {
  const toc = [
    ['executive', 'Executive summary'], ['compass', 'Your ten dimensions'], ['findings', 'Key findings'],
    ['dimensions', 'Detailed dimensions'], ['values', 'Endorsed statements'], ['traditions', 'Ideological comparisons'],
    ['cross', 'Cross-dimensional analysis'], ['evidence', 'Response evidence'], ['reading', 'Reading recommendations'], ['method', 'Methodology']
  ].map(([id, title]) => `<a href="#${id}">${esc(title)}</a>`).join('');

  return `<div class="report-layout"><aside class="report-sidebar"><div class="eyebrow">IN THIS REPORT</div><nav class="report-toc" aria-label="Report contents">${toc}</nav><div class="sidebar-note">Educational assessment<br>Not a validated instrument</div></aside><div class="report-content">
    ${comparisonStatus(model).responseStyle ? `<aside class="notice"><strong>Response-pattern caution</strong><p>Repeated or predominantly same-direction responses can cancel under balanced keying. A near-zero score does not necessarily mean moderation.</p></aside>` : ""}
    ${section('executive', 'Executive summary', executive(model), 'Generated from your answers, with limits stated.')}
    ${section('compass', 'Your ten dimensions', compass(model), 'Each line runs from −100 to +100. Zero is a numerical midpoint, not necessarily neutrality.')}
    ${section('findings', 'Key findings', findings(model), 'Ranked by absolute score, not by importance.')}
    ${section('dimensions', 'Detailed dimensional analysis', dimensionReports(model), 'Expand a section for evidence and qualifications.')}
    ${section('values', 'Item-level positions endorsed in this assessment', values(model))}
    ${section('traditions', 'Political traditions and ideological alignment', traditions(model), 'Proximity is not membership.')}
    ${section('cross', 'Cross-dimensional analysis', `<p class="muted">Curated conceptual pairings, not empirical correlations.</p><ul class="findings">${model.cross.length ? model.cross.map((t) => `<li><strong>${esc(t.title)}.</strong> ${esc(t.text)}</li>`).join('') : '<li>No curated combination met its threshold.</li>'}</ul>`)}
    ${section('evidence', 'Response transparency', evidence(model), 'The selected response and keyed interpretation are shown separately.')}
    ${section('reading', 'Personalised reading recommendations', reading(model), 'Educational, not recruitment. Coverage and critical balance vary across traditions.')}
    ${section('method', 'Methodology and limitations', methodology(model))}
    <div class="report-end"><button type="button" id="export-json">Download assessment data (JSON)</button><button type="button" id="print-report">Print / save as PDF</button></div></div></div>`;
}

export function exportData(model, filename = 'political-compass-assessment.json') {
  const payload = {
    version: model.result.version,
    generated: new Date().toISOString(),
    answers: model.answers,
    scores: model.result.axes.map((a) => ({ code: a.code, name: a.name, score: Math.round(a.score * 10) / 10 })),
    alignment: model.alignment.map((t) => ({ id: t.id, name: t.name, distance: t.distance })),
    note: 'Self-report heuristic. Provisional editorial placements. Not a validated psychometric instrument.'
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}
