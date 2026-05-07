# Image generation guide

Companion to [`src/_data/image_prompts.json`](./src/_data/image_prompts.json). The JSON has 16 paste-ready prompts (4 slots × 4 variants). This guide tells you which model to use, which variant to start with per slot, and how to iterate when a generation isn't right.

## TL;DR per slot — what to try first

| Slot | Recommended start | Model | Why |
|---|---|---|---|
| `linkedin_banner` | `v3_isometric_platform_stack` | Nano Banana (Gemini 2.5 Flash Image) or Imagen 4 | Most distinctive without being gimmicky. The four floating tiles read instantly as "cross-platform" and survive LinkedIn's profile-photo crop on the bottom-left. |
| `github_readme_hero` | `v4_terminal_prompt` | Nano Banana Pro (Gemini 3 Pro Image) | Pure typography → text fidelity matters; Pro renders monospace cleanest. The `> hussain.gaddal --kotlin --multiplatform` line lands the brand in two seconds. |
| `og_image` | `v1_centered_card` | **Nano Banana Pro** (only) | This slot has 3 strings of in-image text (name + tagline + URL). Pro is the only model with reliably correct multi-line typography. v1 is the most universally readable in chat-app previews. |
| `notion_redirect_hero` | `v1_double_chevron` | Any (lowest priority) | Tiny banner, low stakes. The chevron motif is mirror-safe so it works in EN-LTR and AR-RTL Notion sections without re-generating. |

**If the recommended starter doesn't grab you,** the `v2`/`v3`/`v4` alternates explore meaningfully different directions — pick whichever matches your taste.

## Model picker — which tool for which slot

| Need | Use | Why |
|---|---|---|
| In-image text (the OG card) | **Nano Banana Pro** (`gemini-3-pro-image-preview`) | SOTA text rendering. The Flash model misspells. |
| Photographic banners (`v2_macro_desk_editorial`) | **Imagen 4** or **Nano Banana** | Both nail soft DOF, golden-hour, real materials. |
| Geometric / vector / minimalist (most variants) | **Nano Banana** (Flash) | Fast, cheap, narrative-prompt friendly. |
| Editorial illustration (alternate aesthetic ceiling) | **Midjourney v7** | Best art direction. Use `--ar 4:1` for banners, `--ar 1.91:1` for OG. |
| Fallback if above are unavailable | **Flux Pro 1.1** or **DALL-E 3** | Solid second-pass options. |

## How to actually run a generation

1. **Open `src/_data/image_prompts.json`** and find the slot.
2. **Copy the entire `full_prompt` string** of the variant you're trying. Each `full_prompt` is already in narrative scene-direction form — paste it as-is, don't add adjectives.
3. **Set the aspect ratio explicitly** in the tool:
   - LinkedIn banner: `4:1` (target 1584×396)
   - GitHub README hero: `4:1` (target 1280×320)
   - OG image: `1.91:1` (target 1200×630)
   - Notion redirect hero: `4:1` (target 800×200)
4. **Generate ONE candidate first.** Don't shotgun 8 variations — you can't tell what helped.
5. **Save to `src/assets/img/branding/<id>__<variant_id>.png`** (note the double underscore). Example: `linkedin_banner__v3_isometric_platform_stack.png`.
6. **Once you pick a winner per slot, alias it to `<id>.png`** (just `linkedin_banner.png`) — that's the canonical filename the site/LinkedIn/Notion all reference.

## Iteration cheat-sheet — what to change if the first result is off

**Looks too sterile / "stock illustration":**
- Add: `editorial restraint, magazine-cover composition, in the style of [Pentagram / Wallpaper / Monocle]`
- Add: `subtle imperfection: slight off-center, hand-drawn line weight variation`

**Looks too AI-blurred / generic:**
- Add: `crisp vector edges, no gradients, no glow, no shadows except where specified`
- Add: `flat shading, posterized, no atmospheric haze`

**Text in the image is misspelled or garbled (OG card especially):**
- Switch to **Nano Banana Pro** if you weren't already.
- Re-quote each text string in **double quotes** in the prompt.
- Reduce text length — fewer characters = better rendering.
- Try the variant with less text (e.g., `v3_minimalist_centered_typography` instead of `v4_editorial_magazine_cover`).

**Composition crops wrong on LinkedIn (profile photo overlaps subject):**
- Add: `the left 25% of the frame must be empty white space — no subject, no text, no decorative element`
- Re-check the `safe_zone_note` in the JSON.

**Colors drift away from Cobalt Navy:**
- Add: `strict palette: Cobalt Navy #004AAD as the only blue, no teal, no royal blue, no cerulean`
- Generators sometimes pick a "more pleasing" blue. Be insistent.

**Banner reads as "tech company logo" not "personal portfolio":**
- Switch from geometric variants (`v1`, `v3`) to typographic (`v4`) or photographic (`v2`).
- Add: `personal portfolio aesthetic, not corporate brand identity`

**Too busy / overloaded:**
- Add: `more whitespace, simpler composition, fewer elements`
- Bump the negative_prompt list with whatever's cluttering (e.g., "no decorative dots, no abstract shapes scattered around the main subject").

## Per-slot iteration playbook

### LinkedIn banner

The bottom-left ~280×280 region is **always** behind the profile photo. Don't put critical detail there. If a generation has interesting subject in that corner, regenerate with stronger emphasis on the empty-left rule.

If `v3_isometric_platform_stack` (recommended) feels too clean: try `v2_macro_desk_editorial` for warmth, or `v4_typographic_kotlin_code` for personality.

### GitHub README hero

Renders at full width on desktop and scaled-down on mobile. Don't put critical detail in the outer 5% — it can clip on narrow viewports. Otherwise the slot is forgiving.

If `v4_terminal_prompt` (recommended) feels too literal: `v3_constellation_network` is the most distinctive non-typographic alternate. `v2_topographic_contour` is the most editorial.

### OG image

This is the highest-stakes slot — it's what shows up when someone shares your portfolio link in Slack / iMessage / Twitter / WhatsApp. People decide whether to click in 2 seconds.

**Hard rule:** use **Nano Banana Pro**. The Flash model and most other generators will misspell at least one of the three text strings (`Hussain Gaddal` / `Android Developer · Kotlin · KMP/CMP` / the URL).

If `v1_centered_card` (recommended) feels too plain: `v2_split_navy_offwhite` is bolder; `v4_editorial_magazine_cover` adds the structured metadata block that signals "considered" without being noisy.

Test the result by:
1. Drop the file URL in the [Open Graph debugger](https://www.opengraph.xyz/) or share it in a private Slack DM to yourself.
2. Verify the name reads cleanly at preview-thumbnail size (not just full size).
3. Verify Arabic preview if you share to a contact with Arabic locale (none of the OG variants include Arabic by design — the OG card is EN-only).

### Notion redirect hero

Lowest priority. Most redirect pages look fine with no image at all. If you want a small visual lift, `v1_double_chevron` is the safest neutral choice. `v4_pure_logomark` is the most brand-y if you want one mark used consistently across all 18 Notion redirect pages.

## Naming convention reminder

```
src/assets/img/branding/
├── linkedin_banner__v3_isometric_platform_stack.png   ← variant attempt
├── linkedin_banner__v1_geometric_devices.png           ← another attempt
├── linkedin_banner.png                                 ← final pick (alias / copy)
├── og_image__v1_centered_card.png
├── og_image.png                                        ← final pick
├── github_readme_hero.png
└── notion_redirect_hero.png
```

The `<id>.png` (no variant suffix) is what the site, LinkedIn, GitHub README, and Notion expect. Keep variants for reference / future regenerations.

## When a slot is "done"

A slot is shippable when:

1. The image saved to `src/assets/img/branding/<id>.png` (the canonical filename).
2. Tested in context:
   - **LinkedIn banner**: previewed on the actual LinkedIn profile (LinkedIn's preview UI shows the photo crop).
   - **GitHub README hero**: rendered on the live `IronManYG/IronManYG` profile README.
   - **OG image**: shared in a private Slack DM and the unfurl looks right.
   - **Notion redirect hero**: embedded in one Notion section and visually checked on mobile width too.
3. Committed to git: `git add src/assets/img/branding/<id>.png && git commit -m "branding: ship <slot> v<N> [<variant>]"`.
4. The matching row in [`BRANDING-SYNC.md`](./BRANDING-SYNC.md) flipped to `✅`.

## Cross-references

- All 16 prompts: [`src/_data/image_prompts.json`](./src/_data/image_prompts.json)
- Live status: [`BRANDING-SYNC.md`](./BRANDING-SYNC.md) — image row is `Brand images | ⏸️ pending (generation)`
- Research sources backing the prompt structure are listed at the top of `image_prompts.json` under `research_sources`.
