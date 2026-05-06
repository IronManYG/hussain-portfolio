# Images — generation prompts and placement

Brand visuals (banners, OG image, hero art) are missing across LinkedIn, GitHub, and the site's social cards. Project screenshots already exist under `src/assets/img/projects/` and are not in scope here.

## Source: `image_prompts.json`

Generator-agnostic prompts live in [`../_data/image_prompts.json`](../_data/image_prompts.json). Each entry has:

- `id` — also the output filename
- `dimensions` and `aspect_ratio`
- `style`, `subject`, `color_palette`, `mood`
- `negative_prompt`
- `safe_zone_note` (where applicable, e.g., LinkedIn banner crop area)

After build, the same JSON is also served at `https://ironmanyg.github.io/hussain-portfolio/assets/image-prompts.json` so it can be referenced from anywhere.

## What to generate

| ID | Use | Dimensions | Priority |
|---|---|---|---|
| `linkedin_banner` | LinkedIn profile banner | 1584×396 | High |
| `og_image` | Site Open Graph + Twitter card | 1200×630 | High |
| `github_readme_hero` | Optional hero atop the IronManYG/IronManYG profile README | 1280×320 | Medium |
| `notion_redirect_hero` | Optional small visual atop each Notion redirect page | 800×200 | Low |

## Where to save outputs

Place generated PNGs in [`../assets/img/branding/`](../assets/img/branding/) using the prompt `id` as the filename:

```
src/assets/img/branding/
├── linkedin_banner.png
├── og_image.png
├── github_readme_hero.png       (optional)
└── notion_redirect_hero.png     (optional)
```

## Where each one is referenced after deploy

| File | Surface | Reference |
|---|---|---|
| `linkedin_banner.png` | LinkedIn | Manual upload via LinkedIn's banner editor (LinkedIn re-hosts on its own CDN) |
| `og_image.png` | Site (EN + AR) | `<meta og:image>` + `<meta twitter:image>` in `src/_includes/base.njk` and `ar_base.njk` |
| `github_readme_hero.png` | GitHub profile README | `<img src="https://ironmanyg.github.io/hussain-portfolio/assets/img/branding/github_readme_hero.png">` in `IronManYG/IronManYG/README.md` (currently the README has no hero — adding one is the only change required) |
| `notion_redirect_hero.png` | Notion redirect template | Edit `src/notion-redirect.njk` to include `<img src="/assets/img/branding/notion_redirect_hero.png">` near the top of each pane |

## Suggested generation order

1. **`og_image`** — biggest visibility win, surfaces every time the portfolio is shared.
2. **`linkedin_banner`** — recruiter-facing, replaces the default gray header.
3. **`github_readme_hero`** — only after the profile README is live and you want polish.
4. **`notion_redirect_hero`** — last; the redirect pages already work fine without a visual.

## Verifying the OG image after deploy

Once `og_image.png` is in place and the site has rebuilt, test the share preview:

1. Visit `https://www.opengraph.xyz/url/https%3A%2F%2Fironmanyg.github.io%2Fhussain-portfolio%2F`
2. Confirm Twitter, Facebook, LinkedIn, and Slack previews all render the new image.
3. If any cache an old preview, force-refresh with the platform's debugger:
   - LinkedIn: <https://www.linkedin.com/post-inspector/>
   - Facebook: <https://developers.facebook.com/tools/debug/>
   - Twitter/X: card validator (login required).

## Brand reference

| Token | Value | Where it's used |
|---|---|---|
| Primary | `#004AAD` (Cobalt Navy) | CV accent, redirect buttons, OG card frame |
| Ink | `#0A0A0A` | Body text |
| Light | `#FFFFFF` | Card backgrounds |
| Kotlin accent | `#7F52FF` | Optional accent for Kotlin-themed visuals |
| Fonts (in-image text) | IBM Plex Sans, IBM Plex Mono | Match the site's typography |
