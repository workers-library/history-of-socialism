// Minimal DOM stub to exercise the search path in docs/assets/client.js.
const fs = require('fs');
const calls = { fetch: [], links: [], navigations: [] };

function makeElement(tag) {
  const el = {
    tagName: (tag || 'div').toUpperCase(),
    children: [],
    value: '',
    hidden: false,
    textContent: '',
    className: '',
    listeners: {},
    classList: { add() {}, remove() {}, toggle() {} },
    setAttribute(k, v) { if (k === 'href') calls.links.push(v); this[k] = v; },
    getAttribute(k) { return this[k]; },
    addEventListener(type, fn) { (this.listeners[type] ||= []).push(fn); },
    append(...children) { this.children.push(...children); },
    replaceChildren(...children) { this.children = children; },
    contains() { return false; },
    focus() {}, blur() {},
    querySelector() { return null; },
    querySelectorAll() { return []; },
  };
  Object.defineProperty(el, 'href', {
    set(v) { calls.links.push(v); this._href = v; },
    get() { return this._href; },
  });
  return el;
}

const search = makeElement('div');
const input = makeElement('input');
const results = makeElement('div');
const live = makeElement('div');
const mock = {
  '[data-search]': search,
  '[data-search-input]': input,
  '[data-search-results]': results,
  '[data-search-live]': live,
};
search.querySelector = (sel) => mock[sel] ?? null;

global.document = {
  currentScript: null, // modules: always null
  documentElement: { classList: { add() {}, remove() {}, toggle() {} }, setAttribute() {}, getAttribute() { return 'light'; } },
  querySelector(sel) { return mock[sel] ?? null; },
  querySelectorAll() { return []; },
  createElement(tag) { return makeElement(tag); },
  createTextNode(text) { return { textContent: String(text) }; },
  addEventListener() {},
  getElementById() { return null; },
};
global.window = {
  addEventListener() {},
  innerHeight: 1000,
  scrollY: 0,
  location: { pathname: '/history-of-socialism/404.html', search: '', assign(v) { calls.navigations.push(v); } },
  matchMedia() { return { matches: false }; },
  requestAnimationFrame() { return 1; },
  cancelAnimationFrame() {},
};
global.localStorage = { getItem() { return null; }, setItem() {} };
global.navigator = { clipboard: null };
global.HTMLElement = function () {};
global.fetch = async (url) => {
  calls.fetch.push(url);
  if (url.endsWith('/search-index.json')) {
    return { ok: true, json: async () => ([{
      id: '/michael-parenti', title: 'Michael Parenti', url: '/michael-parenti',
      description: 'Class power and imperialism', text: 'Parenti on class power, media and empire.',
      headings: [{ title: 'Biography', slug: 'biography' }], tags: ['Authors and Intellectual Traditions'],
    }]) };
  }
  return { ok: true, json: async () => ({ documents: [] }) };
};

const code = fs.readFileSync(require('path').join(process.cwd(),'docs/assets/client.js'), 'utf8');
// The final init calls assume no other elements; the stub returns null for them.
eval(code);

(async () => {
  input.value = 'Parenti';
  for (const fn of input.listeners['input'] || []) await fn();
  await new Promise((resolve) => setImmediate(resolve));

  console.log('fetch URLs:', calls.fetch);
  console.log('result links:', calls.links);
  const fetchOk = calls.fetch.every((u) => u.startsWith('/history-of-socialism/'));
  const linkOk = calls.links.some((u) => u === '/history-of-socialism/michael-parenti');
  console.log('FETCH_PREFIX_OK:', fetchOk);
  console.log('RESULT_LINK_OK:', linkOk);
  if (!fetchOk || !linkOk) process.exit(1);
})();
