/** Client-side application. No network requests; all state stays in this browser. */
import { AXES, VERSION } from './data/axes.js';
import { QUESTIONS } from './data/questions.js';
import { RESOURCES } from './data/resources.js';
import { scoreAssessment, sensitivity, validateAnswers, signed } from './core/scoring.js';
import { executiveSummary, axisNarrative, crossDimensional, uncertaintyNarrative } from './core/interpretation.js';
import { rankTraditions } from './core/traditions.js';
import { buildReportHTML, exportData, updateComparison, comparisonStatus } from './report/report.js';
import { renderRadar } from './charts/charts.js';
const STORE = `hos-compass-v${VERSION.questionnaire}`;
const LABELS = ['Strongly disagree','Disagree','Neither agree nor disagree','Agree','Strongly agree'];
const $ = id => document.getElementById(id);
let answers = Array(QUESTIONS.length).fill(null), index = 0, view = 'intro', autoTimer, radar, currentModel;
const count = () => answers.filter(v => v !== null).length;
const firstMissing = () => answers.findIndex(v => v === null);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/** Mark the contrast terms that carry the keying of an item. */
function markTerms(text, terms) {
  const lower = text.toLowerCase(), hits = [];
  (terms || []).forEach(term => {
    if (!term) return;
    const needle = term.toLowerCase();
    let from = 0;
    while (from < lower.length) {
      const at = lower.indexOf(needle, from);
      if (at < 0) break;
      hits.push([at, at + needle.length]);
      from = at + needle.length;
    }
  });
  hits.sort((a, b) => a[0] - b[0]);
  const merged = [];
  hits.forEach(([s, e]) => {
    const last = merged[merged.length - 1];
    if (last && s <= last[1]) last[1] = Math.max(last[1], e);
    else merged.push([s, e]);
  });
  let html = '', pos = 0;
  merged.forEach(([s, e]) => {
    html += esc(text.slice(pos, s)) + '<mark class="term">' + esc(text.slice(s, e)) + '</mark>';
    pos = e;
  });
  return html + esc(text.slice(pos));
}
function save() {
  try { localStorage.setItem(STORE, JSON.stringify({v:VERSION.questionnaire,a:answers,index})); $('save-status').textContent='Progress saved on this device.'; }
  catch { $('save-status').textContent='Browser storage unavailable; keep this tab open.'; }
}
function load() {
  try { const data=JSON.parse(localStorage.getItem(STORE)); if(data?.v===VERSION.questionnaire && validateAnswers(data.a,QUESTIONS).valid){answers=data.a;index=Number.isInteger(data.index)&&data.index>=0&&data.index<QUESTIONS.length?data.index:Math.max(0,firstMissing());} } catch {}
}
function renderIntro(){
  $('axis-strip').innerHTML=AXES.map((a,i)=>`<div class="framework-row"><span class="framework-no">${String(i+1).padStart(2,'0')}</span><b>${esc(a.name)}</b><span class="framework-pole">${esc(a.neg)}</span><span class="framework-line" aria-hidden="true"></span><span class="framework-pole right">${esc(a.pos)}</span></div>`).join('');
  $('mini-list').innerHTML=AXES.map((a,i)=>`<article class="dimension-card"><span class="dimension-no">${String(i+1).padStart(2,'0')} / ${esc(a.code)}</span><h3>${esc(a.name)}</h3><p>${esc(a.about)}</p><div class="dimension-poles"><span>${esc(a.neg)}</span><span aria-hidden="true">↔</span><span>${esc(a.pos)}</span></div></article>`).join('');
}
function updateIntro(){const n=count();$('start').innerHTML=n&&n<QUESTIONS.length?'Resume assessment <span aria-hidden="true">→</span>':n===QUESTIONS.length?'Review answers <span aria-hidden="true">→</span>':'Begin assessment <span aria-hidden="true">→</span>';$('view-saved').hidden=n!==QUESTIONS.length;}
function show(name){
  clearTimeout(autoTimer);view=name;['intro','quiz','result'].forEach(n=>{$('view-'+n).hidden=n!==name;});
  document.body.dataset.view=name;window.scrollTo(0,0);
  if(name==='intro'){updateIntro();$('start').focus({preventScroll:true});}
  if(name==='quiz')renderQuestion(true);
  if(name==='result'){renderReport();$('view-result').querySelector('h1').setAttribute('tabindex','-1');$('view-result').querySelector('h1').focus({preventScroll:true});}
}
function renderNav(){
  $('quiz-nav').innerHTML=AXES.map((a,i)=>{const items=QUESTIONS.map((q,j)=>({q,j})).filter(x=>x.q.a===i);const n=items.filter(x=>answers[x.j]!==null).length;const active=QUESTIONS[index].a===i;return `<button type="button" class="axis-nav${active?' active':''}" data-axis="${i}" ${active?'aria-current="step"':''}><span class="nav-index">${n===items.length?'✓':String(i+1).padStart(2,'0')}</span><span>${esc(a.name)}</span><span class="nav-count">${n}/${items.length}</span></button>`;}).join('');
}
function updateProgress(){const n=count();const pct=Math.round(n/QUESTIONS.length*100);$('answered-count').textContent=`${n} / ${QUESTIONS.length}`;$('percent').textContent=pct+'%';$('progress').style.width=pct+'%';$('progress').parentElement.setAttribute('aria-valuenow',pct);renderNav();}
function renderQuestion(focus=false){
  const q=QUESTIONS[index],a=AXES[q.a];$('axis-label').textContent=a.name;$('counter').textContent=`Question ${String(index+1).padStart(2,'0')} of ${QUESTIONS.length}`;
  $('question-step').textContent=`DIMENSION ${String(q.a+1).padStart(2,'0')} / STATEMENT ${q.id}`;$('statement').innerHTML=markTerms(q.t,q.highlight);
  [...$('answers').children].forEach((b,i)=>b.setAttribute('aria-pressed',String(answers[index]===i-2)));
  $('back').disabled=index===0;$('next').disabled=answers[index]===null;$('next').textContent=index===QUESTIONS.length-1?'View report →':'Continue →';updateProgress();if(focus)$('statement').focus({preventScroll:true});
}
function select(value){clearTimeout(autoTimer);answers[index]=value;save();renderQuestion();if($('auto-advance').checked)autoTimer=setTimeout(advance,250);}
function advance(){clearTimeout(autoTimer);if(answers[index]===null)return;if(index===QUESTIONS.length-1){const missing=firstMissing();if(missing>=0){index=missing;renderQuestion(true);return;}show('result');return;}index++;save();renderQuestion(true);}
function back(){clearTimeout(autoTimer);if(index>0){index--;save();renderQuestion(true);}}
function buildModel(){
  const result=scoreAssessment(answers,QUESTIONS,AXES),sens=sensitivity(result,answers,QUESTIONS,AXES),alignment=rankTraditions(result,AXES);
  const model={answers:[...answers],result,axes:AXES,questions:QUESTIONS,resources:RESOURCES,alignment,sensitivity:sens,narratives:axisNarrative(result,AXES),cross:crossDimensional(result),uncertainty:uncertaintyNarrative(result,sens,alignment),policies:[],evidence:QUESTIONS.map((q,i)=>{const v=answers[i],c=v*q.d,a=AXES[q.a];return {id:q.id,axis:a.name,question:q.t,selected:LABELS[v+2],response:v,contribution:c,interpretation:c<0?`Toward ${a.neg}`:c>0?`Toward ${a.pos}`:'No directional contribution'};})};
  const status=comparisonStatus(model);model.summary=executiveSummary(result,AXES,status.suppress?[]:alignment);const strong=result.axes.filter(a=>Math.abs(a.score)>=60).sort((a,b)=>Math.abs(b.score)-Math.abs(a.score));model.summary.lead=strong.length?'Your strongest expressed positions are '+strong.slice(0,3).map(a=>a.score<0?AXES[a.index].phraseN:AXES[a.index].phraseP).join(', ')+'.':'None of the ten scores reaches the strong-direction threshold (absolute score of 60).';if(status.responseStyle){model.summary.lead='This response pattern does not establish a reliable directional profile.';model.summary.interaction='Near-zero scores may reflect cancellation or repeated midpoint answers, not political moderation.';model.summary.leanText='';model.summary.mixedText='';model.summary.departureText='';}
  return model;
}
function refreshRadar(){if(radar){radar.destroy();radar=null;}if(!$('radar-extra')?.open||!currentModel)return;const t=currentModel.alignment.find(x=>x.id===$('tradition-select').value);radar=renderRadar('chart-radar',currentModel.result.scores,AXES,t?[{name:t.name,values:t.center}]:[]);}
function renderReport(){if(radar){radar.destroy();radar=null;}currentModel=buildModel();$('report-body').innerHTML=buildReportHTML(currentModel);$('copy-status').textContent='';$('restored').hidden=true;
  $('tradition-select').addEventListener('change',()=>{updateComparison(currentModel,$('tradition-select').value);refreshRadar();});$('radar-extra').addEventListener('toggle',refreshRadar);
  $('export-json').addEventListener('click',()=>exportData(currentModel));$('print-report').addEventListener('click',()=>window.print());
  const links=[...document.querySelectorAll('.report-toc a')];const sections=[...document.querySelectorAll('.report-section')];let queued=false;const update=()=>{queued=false;if(view!=='result')return;let active=sections[0];for(const s of sections){if(s.getBoundingClientRect().top<=145)active=s;}links.forEach(l=>{if(l.hash==='#'+active.id)l.setAttribute('aria-current','location');else l.removeAttribute('aria-current');});};window.onscroll=()=>{if(!queued){queued=true;requestAnimationFrame(update);}};update();
}
LABELS.forEach((label,i)=>{const b=document.createElement('button');b.type='button';b.className='answer';b.innerHTML=`<span class="answer-key">${i+1}</span><span>${label}</span><span class="answer-radio" aria-hidden="true"></span>`;b.addEventListener('click',()=>select(i-2));$('answers').append(b);});
$('quiz-nav').addEventListener('click',e=>{const b=e.target.closest('[data-axis]');if(!b)return;clearTimeout(autoTimer);const a=Number(b.dataset.axis);const missing=QUESTIONS.findIndex((q,i)=>q.a===a&&answers[i]===null);index=missing>=0?missing:QUESTIONS.findIndex(q=>q.a===a);save();renderQuestion(true);});
$('start').onclick=()=>{if(count()===QUESTIONS.length)index=0;show('quiz');};$('view-saved').onclick=()=>show('result');$('next').onclick=advance;$('back').onclick=back;$('pause').onclick=()=>{save();show('intro');};$('home').onclick=e=>{e.preventDefault();show('intro');};
$('retry').onclick=()=>{if(!confirm('Clear your existing responses and start a new assessment?'))return;answers.fill(null);index=0;save();show('intro');};$('print-top').onclick=()=>window.print();
$('copy').onclick=async()=>{const text=`Political compass report\n\n${currentModel.result.axes.map(a=>`${a.name}: ${signed(a.score)} (${a.band.short})`).join('\n')}\n\n${currentModel.summary.lead}\n${currentModel.summary.interaction}\n\nUnvalidated educational assessment.`;try{await navigator.clipboard.writeText(text);$('copy-status').textContent='Summary copied.';}catch{$('copy-status').textContent='Copy unavailable. Select report text manually.';}};
document.addEventListener('keydown',e=>{if(view!=='quiz'||e.ctrlKey||e.metaKey||e.altKey||e.target.matches('input,select,textarea')||e.repeat)return;if(/^[1-5]$/.test(e.key)){select(Number(e.key)-3);e.preventDefault();}else if(e.key==='ArrowRight'||(e.key==='Enter'&&!e.target.closest('button,a'))){advance();e.preventDefault();}else if(e.key==='ArrowLeft'){back();e.preventDefault();}});
let printDetails=[];window.addEventListener('beforeprint',()=>{printDetails=[...document.querySelectorAll('#report-body details:not([open]):not(#radar-extra)')];printDetails.forEach(d=>d.open=true);});window.addEventListener('afterprint',()=>{printDetails.forEach(d=>d.open=false);printDetails=[];});
try{if(localStorage.getItem('hos-auto-advance')==='0')$('auto-advance').checked=false;}catch{}
$('auto-advance').addEventListener('change',()=>{try{localStorage.setItem('hos-auto-advance',$('auto-advance').checked?'1':'0');}catch{}});
load();renderIntro();updateIntro();
