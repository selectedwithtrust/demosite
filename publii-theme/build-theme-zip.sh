#!/usr/bin/env bash
# Package the Publii theme into an installable zip.
# Publii's "Install from file" expects a zip whose single top-level folder is the
# theme folder (the-square-pizza/), so we zip that folder as-is.
set -euo pipefail
cd "$(dirname "$0")"

THEME_DIR="the-square-pizza"
OUT="the-square-pizza-theme.zip"

# Regenerate the gallery thumbnail (400x300, no dependencies).
node make-thumbnail.js "$THEME_DIR/thumbnail.png"

rm -f "$OUT"
zip -r -q "$OUT" "$THEME_DIR" \
  -x "*.DS_Store" \
  -x "$THEME_DIR/assets/css/style.css.map"

echo "wrote $OUT"
unzip -l "$OUT"
