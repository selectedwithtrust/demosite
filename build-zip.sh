#!/usr/bin/env bash
# Regenerate the distributable template zip.
# Strips every block between  <!-- swt-demo-only:start -->  and  <!-- swt-demo-only:end -->
# (the demo banner, the "Want a site like this?" section, the footer credit, noindex),
# then packages index.html + assets/ + README.md into the-square-pizza.zip.
set -euo pipefail
cd "$(dirname "$0")"

OUT="the-square-pizza.zip"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

mkdir -p "$STAGE/assets"

# Delete the marker blocks (inclusive). Portable across BSD/GNU sed via a range delete.
sed '/<!-- swt-demo-only:start -->/,/<!-- swt-demo-only:end -->/d' index.html > "$STAGE/index.html"

cp assets/styles.css "$STAGE/assets/styles.css"
cp README.md "$STAGE/README.md"

rm -f "$OUT"
( cd "$STAGE" && zip -r -q "$OLDPWD/$OUT" index.html assets README.md )

echo "wrote $OUT"
unzip -l "$OUT"
