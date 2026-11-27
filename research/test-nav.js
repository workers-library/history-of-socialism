// Check that the active sidebar item is scrolled into view on load.
const fs = require('fs');
const active = {
  getBoundingClientRect() { return { top: 1200, height: 30 }; },
  classList: { add() {}, remove() {}, toggle() {} },
  setAttribute() {}, addEventListener() {},
};
const sidebar = {
  scrollTop: 0,
  clientHeight: 600,
  getBoundingClientRect() { return { top: 0 }; },
  querySelector(sel) { return sel === '.qs-nav-item.is-active' ? active : null; },
  querySelectorAll() { return []; },
  classList: { add() {}, remove() {}, toggle() {} },
  addEventListener() {}, contains() { return false; },
};
const mock = { '[data-sidebar]': sidebar };
function el() {
  return {
    tagName: 'DIV', value: '', hidden: false, textContent: '', className: '',
    children: [], listeners: {},
    classList: { add() {}, remove() {}, toggle() {} },
    setAttribute() {}, getAttribute() {}, addEventListener() {},
    append(...c) { this.children.push(...c); }, replaceChildren() {},
    contains() { return false; }, focus() {}, blur() {},
    querySelector() { return null; }, querySelectorAll() { return []; },
  };
}
global.document = {
  currentScript: null,
  documentElement: { classList: { add() {}, remove() {}, toggle() {} }, setAttribute() {}, getAttribute() { return 'light'; } },
  querySelector(sel) { return mock[sel] ?? null; },
  querySelectorAll() { return []; },
  createElement() { return el(); },
  createTextNode(t) { return { textContent: String(t) }; },
  addEventListener() {},
  getElementById() { return null; },
};
global.window = {
  addEventListener() {}, innerHeight: 1000, scrollY: 0,
  location: { pathname: '/history-of-socialism/authors-and-traditions', search: '', assign() {} },
  matchMedia() { return { matches: false }; },
  requestAnimationFrame() { return 1; }, cancelAnimationFrame() {},
};
global.localStorage = { getItem() { return null; }, setItem() {} };
global.navigator = { clipboard: null };
global.HTMLElement = function () {};
global.fetch = async () => ({ ok: false, json: async () => [] });

eval(fs.readFileSync(require('path').join(process.cwd(),'docs/assets/client.js'), 'utf8'));
console.log('sidebar scrollTop after load:', sidebar.scrollTop);
console.log('ACTIVE_NAV_SCROLLED:', sidebar.scrollTop > 0);
if (!(sidebar.scrollTop > 0)) process.exit(1);
