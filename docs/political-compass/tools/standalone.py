"""Build a portable single-HTML preview from the local ES module source."""
import re, sys
from pathlib import Path
root = Path(__file__).resolve().parents[1]
modules = {}
def visit(path):
    path = path.resolve()
    key = path.relative_to(root).as_posix()
    if key in modules: return key
    source = path.read_text()
    def imp(match):
        dep = visit(path.parent / match[2])
        bindings = re.sub(r'\s+as\s+', ': ', match[1])
        return f'const {{{bindings}}} = modules[{dep!r}];'
    source = re.sub(r"import\s*\{([^}]+)\}\s*from\s*['\"]([^'\"]+)['\"];", imp, source)
    exports = re.findall(r'\bexport\s+(?:const|function)\s+(\w+)', source)
    source = re.sub(r'\bexport\s+(?=const|function)', '', source)
    modules[key] = f'modules[{key!r}] = (() => {{\n{source}\nreturn {{{", ".join(exports)}}};\n}})();'
    return key
visit(root / 'js/app.js')
html=(root/'index.html').read_text().replace('<link rel="stylesheet" href="css/styles.css">','<style>\n'+(root/'css/styles.css').read_text()+'\n</style>')
script='const modules=Object.create(null);\n'+'\n'.join(modules.values())
html=html.replace('<script src="vendor/chart.umd.min.js"></script><script type="module" src="js/app.js"></script>','<script>\n'+(root/'vendor/chart.umd.min.js').read_text().replace('</script','<\\/script')+'\n</script><script>\n'+script.replace('</script','<\\/script')+'\n</script>')
Path(sys.argv[1] if len(sys.argv)>1 else root/'standalone.html').write_text(html)
