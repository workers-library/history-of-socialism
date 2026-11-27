/**
 * Chart.js renderers. Chart.js is bundled locally (no network requests).
 * Every chart is accompanied by a text equivalent in the report DOM.
 */
const PALETTE = ['#8b7cff', '#2dd4bf', '#f59e0b', '#ef4444', '#38bdf8'];

function chart() {
  return typeof window !== 'undefined' ? window.Chart : null;
}
function colours() {
  const css = typeof getComputedStyle !== 'undefined' ? getComputedStyle(document.documentElement) : null;
  const get = (name, fallback) => (css && css.getPropertyValue(name).trim()) || fallback;
  return {
    ink: get('--pc-ink', '#111827'),
    muted: get('--pc-muted', '#566078'),
    grid: get('--pc-grid', 'rgba(128,138,160,.22)'),
    surface: get('--surface-2', '#f3f6fc'),
    accent: get('--pc-accent', '#8b7cff'),
    accent2: get('--pc-accent-2', '#2dd4bf')
  };
}
function baseOptions(c) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 },
    plugins: {
      legend: { labels: { color: c.ink, font: { family: 'InterVar, system-ui, sans-serif', size: 11 }, usePointStyle: true } },
      tooltip: {
        backgroundColor: c.surface,
        titleColor: c.ink,
        bodyColor: c.ink,
        borderColor: c.grid,
        borderWidth: 1,
        padding: 10,
        displayColors: true,
        callbacks: { label: (ctx) => `${ctx.dataset.label}: ${Math.round(ctx.parsed.r ?? ctx.parsed.x ?? ctx.parsed.y)}` }
      }
    },
    scales: {
      r: {
        min: -100, max: 100,
        ticks: { stepSize: 50, color: c.muted, backdropColor: 'transparent' },
        grid: { color: c.grid },
        angleLines: { color: c.grid },
        pointLabels: { color: c.ink, font: { family: 'InterVar, system-ui, sans-serif', size: 11 } }
      }
    }
  };
}

export function renderRadar(canvasId, scores, axes, comparisons = []) {
  const C = chart();
  if (!C || typeof document === 'undefined') return null;
  const el = document.getElementById(canvasId);
  if (!el) return null;
  const c = colours();
  const datasets = [{
    label: 'Your answers',
    data: scores.map((s) => Math.round(s)),
    borderColor: c.accent,
    backgroundColor: 'transparent',
    pointBackgroundColor: c.accent,
    borderWidth: 2
  }];
  comparisons.forEach((item, i) => {
    datasets.push({
      label: item.name,
      data: item.values,
      borderColor: PALETTE[(i + 1) % PALETTE.length],
      backgroundColor: 'rgba(0,0,0,0)',
      borderWidth: 1.5,
      borderDash: [5, 4],
      pointRadius: 2
    });
  });
  const options = baseOptions(c);
  options.plugins.tooltip.callbacks.label = (ctx) => `${ctx.dataset.label}: ${Math.round(ctx.parsed.r)} (0 = neutral)`;
  return new C(el, { type: 'radar', data: { labels: axes.map((a) => a.name), datasets }, options });
}

export function renderDiverging(canvasId, scores, axes) {
  const C = chart();
  if (!C || typeof document === 'undefined') return null;
  const el = document.getElementById(canvasId);
  if (!el) return null;
  const c = colours();
  return new C(el, {
    type: 'bar',
    data: {
      labels: axes.map((a) => a.name),
      datasets: [{
        label: 'Score (−100 to +100)',
        data: scores.map((s) => Math.round(s)),
        backgroundColor: scores.map((s) => (s < 0 ? c.accent2 : c.accent)),
        borderRadius: 5,
        barThickness: 14
      }]
    },
    options: {
      ...baseOptions(c),
      indexAxis: 'y',
      scales: {
        x: {
          min: -100, max: 100,
          grid: { color: (ctx) => (ctx.tick.value === 0 ? c.ink : c.grid), lineWidth: (ctx) => (ctx.tick.value === 0 ? 2 : 1) },
          ticks: { stepSize: 50, color: c.muted, callback: (v) => (v === 0 ? 'neutral' : v) }
        },
        y: { ticks: { color: c.ink, font: { size: 11 } }, grid: { display: false } }
      }
    }
  });
}

export function renderDistribution(canvasId, result, axes) {
  const C = chart();
  if (!C || typeof document === 'undefined') return null;
  const el = document.getElementById(canvasId);
  if (!el) return null;
  const c = colours();
  const negative = result.axes.map((a) => a.towardNegative.length);
  const neutral = result.axes.map((a) => a.neutral.length);
  const positive = result.axes.map((a) => a.towardPositive.length);
  return new C(el, {
    type: 'bar',
    data: {
      labels: axes.map((a) => a.name),
      datasets: [
        { label: 'Toward first pole', data: negative, backgroundColor: c.accent2, stack: 's' },
        { label: 'Neutral', data: neutral, backgroundColor: c.grid, stack: 's' },
        { label: 'Toward second pole', data: positive, backgroundColor: c.accent, stack: 's' }
      ]
    },
    options: {
      ...baseOptions(c),
      scales: {
        x: { stacked: true, ticks: { color: c.ink, font: { size: 10 } }, grid: { display: false } },
        y: { stacked: true, ticks: { precision: 0, color: c.muted }, grid: { color: c.grid }, title: { display: true, text: 'Number of answers', color: c.muted } }
      },
      plugins: { ...baseOptions(c).plugins, tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y} answers` } } }
    }
  });
}

export function renderComparison(canvasId, result, axes, tradition) {
  return renderRadar(canvasId, result.scores, axes, tradition ? [{ name: tradition.name, values: tradition.center }] : []);
}
