#!/usr/bin/env bash
# Run all mechanical checks for the author collection and the published site.
# Usage: bash research/verify-collection.sh
set -euo pipefail
cd "$(dirname "$0")/.."

echo "== dossier and profile compliance =="
python3 research/check-author-profiles.py

echo "== generated-site link health =="
/home/philip/Development/lotus/target/debug/lotus-docs check --docs book-src --root "$PWD"

echo "== existing bibliography tiers =="
python3 research/bibliography-linter.py | tail -1

echo "== site build =="
python3 research/build-site.py | tail -1

echo "== client script syntax and search behaviour =="
node --check docs/assets/client.js && echo "client.js syntax OK"
node research/test-search.js | tail -4
node research/test-nav.js | tail -2

echo "== generated output =="
printf 'documents in search index: '
python3 -c 'import json; print(len(json.load(open("docs/search-index.json"))))'
printf 'collection pages: '
find docs -name index.html | wc -l
printf 'unprefixed internal links: '
grep -rhoE 'href="/[^h][^"]*"' docs --include='*.html' | wc -l
