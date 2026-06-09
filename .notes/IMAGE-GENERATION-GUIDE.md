# Brand images — generation guide

The four brand visuals (OG card, LinkedIn banner, GitHub README hero, Notion
redirect hero) are **built from code, not AI-generated**. The design sources are
HTML/CSS/SVG files in [`brand/`](../brand/), styled with the site's exact Desert
Oasis tokens and self-hosted fonts, and rendered to pixels with headless Chrome.

```
./brand/generate.sh        # regenerates all four images in one command
```

That's the whole pipeline. Outputs land in `src/assets/img/branding/` and ship
with the site build (`src/assets` is passthrough-copied).

## Why code, not AI generation

The previous version of this guide orchestrated Nano Banana / Imagen / Midjourney
prompts — and spent half its length on workarounds for the two ways AI generators
fail at brand assets: **they drift off the exact palette** and **they garble
in-image text**. These four assets are typographic/geometric compositions, which
is exactly what HTML/CSS/SVG renders perfectly:

| | AI generation | HTML → PNG (this pipeline) |
|---|---|---|
| Brand colors | "close to" the hex, drifts per run | the exact token values |
| Text | misspells, needs Pro models + retries | pixel-perfect, real brand fonts |
| Reproducible | no (every run differs) | yes (source in git, one command) |
| Palette change later | regenerate + re-iterate everything | edit tokens, re-run script |

The AI path still exists as an **alternate** for directions code can't produce
(photographic, editorial-illustration) — see the last section.

## The four slots

| Slot | File | Size | Design | Used by |
|---|---|---|---|---|
| `og_image` | `og_image.jpg` | 1200×630 | Centered editorial card: HG chip, name, tagline, URL on sandstone, teal frame | `<meta og:image>` in both layouts (link previews in WhatsApp/Slack/iMessage/X) |
| `linkedin_banner` | `linkedin_banner.png` | 3168×792 (2× of 1584×396) | Isometric platform stack: phone → desktop → watch → tablet tiles on a shared-codebase line, sandstone, left third empty for the profile photo | LinkedIn profile banner (manual upload) |
| `github_readme_hero` | `github_readme_hero.png` | 2560×640 (2× of 1280×320) | Terminal prompt `> hussain.gaddal --kotlin --multiplatform` on Desert Oasis dark with grain | `IronManYG/IronManYG` profile README |
| `notion_redirect_hero` | `notion_redirect_hero.png` | 1600×400 (2× of 800×200) | Centered HG logomark on sandstone — direction-neutral, safe in EN-LTR and AR-RTL sections | Notion redirect pages (optional) |

Banners render at 2× for retina crispness (platforms downscale). The OG image is
exact-size **JPEG, not PNG**: the grain texture pushes the PNG to ~1 MB and
**WhatsApp silently skips link previews for images over ~600 KB** — the JPEG is
~210 KB. The `og:image:width/height` metas declare 1200×630; keep them in sync.

## Changing an image

1. Edit the slot's HTML in `brand/` (or `brand/_brand.css` for shared
   tokens/fonts/grain).
2. `./brand/generate.sh`
3. Eyeball the output at thumbnail size, not just full size — the OG card is
   judged in a ~300px chat preview.
4. `npm run build` and confirm the file landed in `_site/assets/img/branding/`.

**Token discipline:** `brand/_brand.css` mirrors the `--rt-*` tokens in
`src/css/styles.css`. If the site palette ever changes, change `styles.css`
first, copy the new values into `_brand.css`, re-run the script — done. (The
favicon `src/favicon.svg` and `src/manifest.json` colors are the other two
hand-synced surfaces.)

**Design rules baked into the current sources:**
- LinkedIn crops the bottom-left ~280×280 behind the profile photo → the
  banner's left third stays empty.
- Some chat apps crop the bottom/right ~5% of OG cards → the URL line sits 62px
  up from the bottom.
- The Notion hero must not imply reading direction (EN + AR sections) → it's a
  centered, symmetric-weight logomark.
- One terracotta accent per composition, teal carries the brand — same ratio
  the site uses.

## Shipping each surface

- **OG image** — ships automatically with the site. After deploying, validate
  with [opengraph.xyz](https://www.opengraph.xyz/) or by sharing the URL in a
  private WhatsApp/Slack message. If a stale preview shows, the scraper cached
  it — X/LinkedIn have re-scrape tools ([LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)).
- **LinkedIn banner** — LinkedIn re-hosts uploads: profile → camera icon on the
  banner → upload `src/assets/img/branding/linkedin_banner.png` → check the
  preview crop (desktop AND the mobile app — mobile crops tighter).
- **GitHub README hero** — embed at the top of `IronManYG/IronManYG`'s README:
  `![](https://ironmanyg.github.io/hussain-portfolio/assets/img/branding/github_readme_hero.png)`
  (or commit the file into that repo to avoid cross-repo coupling).
- **Notion hero** — upload into a Notion image block atop a redirect section;
  check mobile width.

When a slot ships, flip its row in [`BRANDING-SYNC.md`](./BRANDING-SYNC.md) and
bump the "Last synced" date.

## Alternate path: AI generation

Use only when you want a direction code can't render — photographic
(`v2_macro_desk_editorial`), illustrated, or just a different take to compare.
[`src/_data/image_prompts.json`](../src/_data/image_prompts.json) (v3, recolored
to Desert Oasis) has 16 paste-ready prompts, 4 per slot.

Condensed playbook:

- **Model:** in-image text → Nano Banana Pro (Gemini 3 Pro Image) only;
  photographic → Imagen 4; geometric/flat → Nano Banana (Flash);
  editorial-illustration ceiling → Midjourney v7 (`--ar 4:1` banners,
  `--ar 1.91:1` OG).
- **Paste the `full_prompt` as-is**, set the aspect ratio explicitly, generate
  ONE candidate, iterate one variable at a time.
- **Color drift is the #1 failure:** append
  `strict palette: deep teal #0e6b62 as the only green-blue, warm sandstone #f5efe6 background, terracotta #c46b3a accents only — no navy, no mint, no neon`.
- **Garbled text is #2:** double-quote every literal string, shorten it, or
  switch to the HTML pipeline (which never garbles).
- Save attempts as `src/assets/img/branding/<id>__<variant_id>.png`; alias the
  winner to the canonical filename. If an AI image wins a slot, note it in this
  guide so the `brand/` source isn't mistaken for the live version.
