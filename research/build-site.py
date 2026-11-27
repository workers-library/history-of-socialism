#!/usr/bin/env python3
"""Build the published site from book-src using lotus-docs.

The generator emits root-relative URLs (/owen, /assets/client.js). This site is
published under the GitHub Pages project path /history-of-socialism/, so the
generated HTML is rewritten with that prefix and the browser script is patched
to derive the same prefix at runtime.

Usage:
    python3 research/build-site.py [--generator PATH] [--out docs]
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = "/history-of-socialism"
DEFAULT_GENERATOR = Path(
    os.environ.get(
        "LOTUS_DOCS_BIN",
        "/home/philip/Development/lotus/target/debug/lotus-docs",
    )
)

# The generator's client script reads /search-index.json and writes links from
# the root-relative URLs in the JSON indexes. Under a project path both fail.
# The site loads this asset as type="module", where document.currentScript is
# null, so the primary derivation is a build-time literal. The runtime check is
# kept as a fallback for a classic-script context (e.g. the generator's own
# preview at a domain root).
def base_snippet(base: str) -> str:
    return (
        'const QS_BASE=(()=>{try{const s=document.currentScript;'
        'if(s)return new URL(s.src).pathname.replace(/\\/assets\\/[^/]*$/,"")}'
        f'catch{{}}return"{base}"}})();'
    )

CLIENT_PATCHES = [
    ('$("/site.json")', '$(QS_BASE+"/site.json")'),
    ('$("/search-index.json")', '$(QS_BASE+"/search-index.json")'),
    ('fetch("/search-index.json")', 'fetch(QS_BASE+"/search-index.json")'),
    ('l.href=m.url', 'l.href=QS_BASE+m.url'),
    ('t.href=e.result.url', 't.href=QS_BASE+e.result.url'),
    ('window.location.assign(r.url)', 'window.location.assign(QS_BASE+r.url)'),
    ('window.location.assign(i.url)', 'window.location.assign(QS_BASE+i.url)'),
]

# In the 404 suggestions, match against the path without the base prefix.
CLIENT_PATCHES.append(
    (
        'const t=new URLSearchParams(window.location.search).get("from")??window.location.pathname;',
        'const t=new URLSearchParams(window.location.search).get("from")??window.location.pathname;'
        'const tp=QS_BASE&&t.startsWith(QS_BASE)?t.slice(QS_BASE.length):t;',
    )
)
CLIENT_PATCHES.append(('ue(n.documents,t)', 'ue(n.documents,tp)'))
CLIENT_PATCHES.append(('fe(o,t,', 'fe(o,tp,'))

# Bring the active sidebar entry into view on load. The generator marks the
# current page with .qs-nav-item.is-active but leaves the sidebar scrolled to
# the top, which makes a long navigation list annoying on every reload.
NAV_SCROLL_MARKER = "/* QS_ACTIVE_NAV_SCROLL */"
NAV_SCROLL_SNIPPET = (
    NAV_SCROLL_MARKER
    + 'try{const sb=document.querySelector("[data-sidebar]"),a=sb&&sb.querySelector'
    + '(".qs-nav-item.is-active");if(sb&&a){const r=a.getBoundingClientRect(),'
    + 's=sb.getBoundingClientRect();sb.scrollTop+=r.top-s.top-(sb.clientHeight-r.height)/2}}catch{};'
)

# The generated stylesheet overrides the document HR margin with 1.5rem,
# which leaves the footer text touching the rule on the collection index.
CSS_RULE_MARKER = "/* QS_HR_BOTTOM_MARGIN */"
CSS_RULE_SNIPPET = (
    CSS_RULE_MARKER
    + "\n:root .doc-content hr{margin-bottom:2.5rem !important}\n"
    + ":root .qs-meta{margin-bottom:2rem !important}\n"
    + ':root .i-fa6-solid-moon,:root [i-fa6-solid-moon=""]{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'1.11em\' height=\'1.11em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z\'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.11em;height:1.11em}\n'
    + ":root .qs-width-glyph{font-size:1.1rem;line-height:1}\n"
    + ":root [data-theme-toggle]{display:none!important}\n"
    + "@media(min-width:1024px){\n"
    + ':root[data-width="compact"] .qs-article-layout{max-width:960px !important;grid-template-columns:minmax(0,660px) var(--qs-toc-w) !important}\n'
    + ':root[data-width="full"] .qs-article-layout{max-width:none !important;grid-template-columns:minmax(0,1fr) !important}\n'
    + ':root[data-width="full"] .qs-toc-rail{display:none !important}\n'
    + "}\n"
    + "@font-face{font-family:'InterVar';font-style:normal;font-weight:100 900;font-display:swap;src:url('inter-latin-wght-normal.woff2') format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n"
    + "@font-face{font-family:'InterVar';font-style:normal;font-weight:100 900;font-display:swap;src:url('inter-latin-ext-wght-normal.woff2') format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n"
    + ":root{font-size:15px !important}\n"
    + ":root body{font-family:'InterVar',Inter,ui-sans-serif,system-ui,sans-serif !important;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}\n"
    + ":root .doc-content{font-size:.9375rem !important;line-height:1.65 !important}\n"
    + ":root .doc-content p{margin:.9rem 0 !important}\n"
    + ":root .qs-article__title{font-size:clamp(1.6rem,2.2vw,2rem) !important}\n"
    + ":root .doc-content h2{font-size:1.35rem !important;margin:2.25rem 0 .8rem !important}\n"
    + ":root .doc-content h3{font-size:1.15rem !important}\n"
    + ":root .qs-compass-link{margin:0 0 12px;border-color:var(--qs-brand) !important;background:var(--qs-brand-soft) !important}\n"
    + ":root .qs-compass-link .qs-nav-item__label{font-weight:700;color:var(--qs-brand-ink) !important}\n"
)

# Restores the stored theme a second time after the module loads. The inline
# head script normally does this; repeating it makes the choice survive even
# if that early script is blocked by a strict content policy.
LIGHT_ONLY_SNIPPET = (
    "/* QS_LIGHT_ONLY */try{document.documentElement.classList.remove('dark');"
    "document.documentElement.setAttribute('data-theme','light')}catch{};"
)

WIDTH_TOGGLE_SNIPPET = """/* QS_WIDTH_TOGGLE */
try{
  var wd=document.documentElement,wb=document.querySelector("[data-width-toggle]");
  function syncWidth(){
    var full=wd.getAttribute("data-width")==="full", label=full?"Switch to compact width":"Switch to full width";
    if(wb){wb.setAttribute("aria-label",label);wb.setAttribute("title",label);
      wb.setAttribute("aria-pressed",full?"true":"false");wb.style.color=full?"var(--qs-brand)":"";}
  }
  syncWidth();
  if(wb)wb.addEventListener("click",function(){
    var next=wd.getAttribute("data-width")==="full"?"compact":"full";
    wd.setAttribute("data-width",next);
    try{localStorage.setItem("qs-width",next)}catch{}
    syncWidth();
  });
}catch{};
"""

# Runs in <head> before the document is painted, so the chosen width does not
# flash back to the default on every page load.
WIDTH_INIT_SNIPPET = """<script>
(function(){try{var w=localStorage.getItem("qs-width");if(w!=="full"&&w!=="compact")w="compact";document.documentElement.setAttribute("data-width",w)}catch(e){document.documentElement.setAttribute("data-width","compact")}})();
</script>
"""

WIDTH_BUTTON_HTML = (
    '<button type="button" class="qs-icon-btn" data-width-toggle aria-label="Switch to full width" '
    'title="Switch to full width"><span class="qs-width-glyph" aria-hidden="true">↔</span></button>\n      '
)

COMPASS_NAV_HTML = (
    '<a href="/history-of-socialism/political-compass" class="qs-nav-item qs-compass-link">'
    '<span class="qs-nav-item__icon"><span aria-hidden="true" style="font-size:.95rem">◆</span></span>'
    '<span class="qs-nav-item__label">Political Compass</span></a>\n    '
)


def patch_client(path: Path, base: str = BASE) -> None:
    text = path.read_text(encoding="utf-8")
    text = re.sub(r'^const QS_BASE=\(\(\)=>\{.*?\}\)\(\);', "", text)
    text = re.sub(r'const tp=QS_BASE&&t\.startsWith\(QS_BASE\)\?t\.slice\(QS_BASE\.length\):t;', "", text)
    text = base_snippet(base) + text
    for old, new in CLIENT_PATCHES:
        if old in text:
            text = text.replace(old, new)
        elif new not in text:
            print(f"warning: client patch target not found: {old}", file=sys.stderr)
    text = text.split(NAV_SCROLL_MARKER)[0].rstrip("\n") + "\n" + NAV_SCROLL_SNIPPET + "\n" + LIGHT_ONLY_SNIPPET + "\n" + WIDTH_TOGGLE_SNIPPET
    path.write_text(text, encoding="utf-8")


def patch_css(path: Path) -> None:
    text = path.read_text(encoding="utf-8").split(CSS_RULE_MARKER)[0].rstrip("\n")
    path.write_text(text + "\n" + CSS_RULE_SNIPPET, encoding="utf-8")


def prefix_html(path: Path) -> None:
    text = path.read_text(encoding="utf-8")
    for attr in ("href", "src", "action"):
        marker = f'{attr}="/'
        text = text.replace(marker, f'{attr}="{BASE}/')
    # Lock the book to the light theme before first paint; this also removes
    # the stored-theme flash that appeared when navigating between pages.
    text = re.sub(
        r'<script>\s*\(function \(\) \{\s*try \{\s*var stored = localStorage\.getItem\("qs-theme"\);[\s\S]*?</script>',
        '<script>document.documentElement.setAttribute("data-theme","light");</script>',
        text,
        count=1,
    )
    text = re.sub(
        r'\s*<button type="button" class="qs-icon-btn" data-theme-toggle[^>]*>[\s\S]*?</button>',
        "",
        text,
        count=1,
    )
    text = text.replace("</head>", WIDTH_INIT_SNIPPET + "</head>")
    text = text.replace(
        '<button type="button" class="qs-icon-btn" data-shortcuts-toggle',
        WIDTH_BUTTON_HTML + '<button type="button" class="qs-icon-btn" data-shortcuts-toggle',
    )
    text = text.replace(
        '<div class="qs-sidebar__label">Workspace</div>',
        '<div class="qs-sidebar__label">Workspace</div>\n    ' + COMPASS_NAV_HTML,
    )
    path.write_text(text, encoding="utf-8")


def build(generator: Path, out: Path) -> None:
    if not generator.exists():
        raise SystemExit(f"lotus-docs binary not found: {generator}")

    staging = ROOT / "target" / "site-out"
    if staging.exists():
        shutil.rmtree(staging)
    staging.mkdir(parents=True)

    subprocess.run(
        [
            str(generator),
            "build",
            "--root",
            str(ROOT),
            "--docs",
            "book-src",
            "--out",
            str(staging),
            "--report",
            str(ROOT / "target" / "site-report.json"),
        ],
        check=True,
    )

    static_assets = ROOT / "static" / "assets"
    if static_assets.exists():
        for path in static_assets.iterdir():
            if path.is_file():
                shutil.copy2(path, staging / "assets" / path.name)

    for path in staging.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix == ".html":
            prefix_html(path)
        elif path.name == "client.js":
            patch_client(path)
        elif path.name == "client.css":
            patch_css(path)

    standalone = ROOT / "static" / "political-compass"
    if standalone.exists():
        shutil.copytree(standalone, staging / "political-compass", dirs_exist_ok=True)

    if out.exists():
        shutil.rmtree(out)
    shutil.copytree(staging, out)
    print(f"Built {out} from book-src (base path {BASE}).")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--generator", type=Path, default=DEFAULT_GENERATOR)
    parser.add_argument("--out", type=Path, default=ROOT / "docs")
    args = parser.parse_args()
    build(args.generator, args.out)


if __name__ == "__main__":
    main()
