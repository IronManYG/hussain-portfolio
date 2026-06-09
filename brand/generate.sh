#!/usr/bin/env bash
# Render the brand HTML sources to PNG with headless Chrome.
# Usage: ./brand/generate.sh   (from the repo root or from brand/)
#
# Banners render at 2x device-scale for retina crispness (same aspect ratio,
# platforms downscale). The OG image is downscaled back to exactly 1200x630
# because the og:image:width/height meta tags declare those dimensions.
set -euo pipefail

cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="../src/assets/img/branding"
mkdir -p "$OUT"

render() { # <html file> <css width> <css height> <output png>
    "$CHROME" --headless=new --disable-gpu \
        --screenshot="$OUT/$4" \
        --window-size="$2,$3" \
        --force-device-scale-factor=2 \
        --allow-file-access-from-files \
        --hide-scrollbars \
        --virtual-time-budget=3000 \
        "file://$PWD/$1" 2>/dev/null
    echo "rendered $4 ($(sips -g pixelWidth -g pixelHeight "$OUT/$4" | awk '/pixel/ {printf "%s ", $2}'))"
}

render og_image.html            1200 630 og_image.png
render linkedin_banner.html     1584 396 linkedin_banner.png
render github_readme_hero.html  1280 320 github_readme_hero.png
render notion_redirect_hero.html 800 200 notion_redirect_hero.png

# OG: downscale 2400x1260 -> exact 1200x630 (crisp text, spec-exact size),
# then convert to JPEG — WhatsApp skips link previews for images over ~600 KB
# and the grain texture makes the PNG ~1 MB.
sips -z 630 1200 "$OUT/og_image.png" >/dev/null
sips -s format jpeg -s formatOptions 85 "$OUT/og_image.png" --out "$OUT/og_image.jpg" >/dev/null
rm "$OUT/og_image.png"
echo "og_image.jpg at 1200x630 ($(du -h "$OUT/og_image.jpg" | cut -f1))"
