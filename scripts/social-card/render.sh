#!/usr/bin/env bash
# Renders the Open Graph / Twitter card to static/img/.
# Usage: scripts/social-card/render.sh [card.html] [output-name.png]
set -euo pipefail

here="$(cd "$(dirname "$0")" && pwd)"
root="$(cd "$here/../.." && pwd)"
page="${1:-card.html}"
out="${2:-sentinel-docs-card-v2.png}"
chrome="$(command -v chromium || command -v chromium-browser || command -v google-chrome)"

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

# Render at 2x, then downsample to 1200x630 for clean type edges.
"$chrome" --headless --disable-gpu --no-sandbox --allow-file-access-from-files \
  --hide-scrollbars --force-device-scale-factor=2 --window-size=1200,630 \
  --virtual-time-budget=3000 --screenshot="$tmp/card@2x.png" "$here/$page" >/dev/null 2>&1

python3 - "$tmp/card@2x.png" "$root/static/img/$out" <<'PY'
import sys
from PIL import Image
Image.open(sys.argv[1]).convert("RGB").resize((1200, 630), Image.LANCZOS).save(sys.argv[2], optimize=True)
PY

echo "wrote static/img/$out"
