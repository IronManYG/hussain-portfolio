# Branding sync checklist

Single source of truth for every cross-surface brand field. When you change a row, walk down it and update each surface, then bump the "Last synced" date.

## Surface status snapshot (2026-05-07 · Sifr rebrand ✅ fully synced 2026-06-20 — see [Sifr rebrand sync](#sifr-rebrand-sync-2026-06-19))

| Surface | Status | Notes |
|---|---|---|
| Site (EN + AR) | ✅ in sync | Researcher 2017–2022 timeline; OG meta fixed; cert titles renamed to official PL Coding names; deployed via PR #2 (merge `2a0267f`) on 2026-05-07. |
| CV variants (4 sources) | ✅ available | `_A.html` (2-page polished), `_C.html` (2-page conservative), `_compact_D.html` (1-page readable), `_compact_E.html` (1-page + impact stats). Chirp pills now include `WebSockets` / `JWT` / `PostgreSQL`; Runique adds `Health Services` (variants A and C only). |
| CV PDFs (both) | ⚠️ stale (2026-06-19) | Sources updated with the Sifr entry — **re-export pending**. `Hussain_Gaddal_CV.pdf` from variant C; `Hussain_Gaddal_CV_compact.pdf` from variant D. Re-export via `msedge.exe --headless=new --print-to-pdf="..." "file:///..."` (or Chrome Ctrl+P). |
| GitHub bio / blog / location | ✅ live | Pushed via `gh api -X PATCH user` on 2026-05-06 |
| GitHub profile README (`IronManYG/IronManYG`) | ✅ live | Repo created 2026-05-06; README v3 with `data class` + `@Composable` |
| GitHub repo descriptions | ✅ done (~16 repos) | All previously listed + `chirp-api`, `Maktabati` (descriptions + homepages added 2026-05-07), plus the 5 unpopulated repos tagged in §7: NutriSport, NoteMark, SpendLess, HabitTracker, MyDiary. |
| GitHub repo topics + homepages | ✅ done (6 pinned + PlantPediaZ + 5 expanded + 5 §7 repos on 2026-05-07) | Pinned repos topic-tagged. On 2026-05-07 added topics to `chirp-api` (Spring Boot stack: spring-boot, postgresql, redis, websockets, rabbitmq, jwt-authentication, multi-module-gradle, rate-limiting, bcrypt), `Maktabati` (Android library), `dev.gaddal.qodem-api` (Ktor backend); added `multi-module-architecture` to Chirp; added `health-services-api` + `convention-plugins` to Runique; tagged 5 §7 repos (NutriSport=CMP, NoteMark, SpendLess, HabitTracker, MyDiary). |
| GitHub pinned repos | ✅ done | Order: Chirp, EchoJournal, ScribbleDash, Runique, Translator_KMM, hussain-portfolio. **Sifr added to pins 2026-06-20** (current set per GitHub UI). |
| GitHub archive list | ✅ done (30 repos) | Archived 2026-05-06: 5 test/junk + 16 Udacity exercises + 9 codelab/starter (see `src/social/github.md` §5) |
| Cert PDFs | ✅ tracked (2026-05-06) | 7 PDFs committed to `src/social/certs/` (6 PL Coding + 1 Udacity). `.gitignore` exclusion removed since these are publicly equivalent to LinkedIn Media uploads. |
| LinkedIn | ✅ done (2026-05-07 · Sifr 2026-06-20) | §1–§10 all pasted (incl. Education companion entry for Udacity Nanodegree). Project "Associated with" links restored after the Education re-add (Asteroid Radar / Maps / Material Calculator etc.). Project #8 updated to "Sifr — Material 3 Calculator" 2026-06-20. |
| Notion redirect embeds | ✅ done (2026-05-07 · Sifr 2026-06-20) | All 18 redirect URLs embedded into the legacy Notion site. Project + CV buttons fixed (per-project URLs and CV target both 404'd; commit `5a364d1`) and re-tested live from inside Notion. Sifr embed added + old material-calculator removed; all embeds recolored to Desert Oasis 2026-06-20 (PR #6). |
| Brand images | ✅ reviewed (2026-06-10) — LinkedIn upload pending | All 4 reviewed at full size and approved: OG / GitHub hero / Notion hero kept as generated; LinkedIn banner iterated to v2 (tiles +25%, `one Kotlin codebase / every screen` tagline) and re-rendered. GitHub hero SHIPPED 2026-06-10: hotlinked atop the `IronManYG/IronManYG` README (commit `b7118b6`) from the live portfolio URL — auto-updates on regenerate + deploy. Sources in `brand/`, regenerate with `./brand/generate.sh`, outputs in `src/assets/img/branding/`. OG ships automatically via `<meta og:image>` (`.jpg`, WhatsApp-safe size). STILL MANUAL: upload `linkedin_banner.png` to LinkedIn (check desktop + mobile crop), optionally add `notion_redirect_hero.png` to Notion pages. See [`IMAGE-GENERATION-GUIDE.md`](./IMAGE-GENERATION-GUIDE.md). |

## Sifr rebrand sync (2026-06-19)

> **✅ Fully synced 2026-06-20** — every surface (site, GitHub repo + pins, LinkedIn, Notion, CVs) propagated. Notion embeds also recolored to Desert Oasis (PR #6).

`MaterialCalculator` was renamed to **Sifr** ([`github.com/IronManYG/Sifr`](https://github.com/IronManYG/Sifr)) and majorly updated — now **live on Google Play** (v1.3.0, with a v2.0 redesign batched in-repo). Cross-surface propagation:

**Done in-repo (ships with the next build/commit):**
- `projects.json` — the old `material-calculator` stub is replaced by a full **Sifr** case study (EN + AR), promoted to a featured **hero** card (2nd `feature_card`, right after Chirp). Slug `material-calculator` → `sifr`. Added a `playUrl` field + a "Get it on Google Play" CTA in both detail templates; `prodSlugs` updated in `projects.njk` + `ar/projects.njk`.
- Project card images: `sifr-{en,ar}-{light,dark}.png` (1600×900). Dark slots = Sifr v2.0 `marketing/{en,ar}/portfolio-android/hero-single` renders; light slots = user-provided **Layl Light** `dot-grid/portfolio-android-hero-single` renders (2026-06-20). All four are distinct, so the card swaps correctly on theme toggle.
- Social kit (`src/social/`): `github.md` (Sifr description + homepage + topics `gh` commands; topics-table row), `linkedin.md` (project #8 → "Sifr — Material 3 Calculator"), `notion.md` (Sifr redirect URL), `github-profile-readme.md` (`Now()` line + a "what I'm working on" bullet).
- CVs: Sifr added as project #2 (after Maktabati) in `_A`, `_C`, `_compact_D`, `_compact_E`.

**✅ ALL DONE (2026-06-20):**
- [x] **Deploy** — shipped via PR #4 (merge `58db044`); `/sifr/` live (200), old `/material-calculator/` 404s.
- [x] **CV PDFs** — re-exported (both include Sifr; committed in PR #4).
- [x] **GitHub repo metadata** — description + homepage + 15 topics applied via `gh api`.
- [x] **GitHub re-pin** — Sifr added to the pinned repos (web UI).
- [x] **LinkedIn** — project #8 updated to "Sifr — Material 3 Calculator".
- [x] **Notion** — `/notion/projects/sifr/` embed added, old material-calculator block removed. (All redirect embeds also recolored to Desert Oasis — PR #6.)

## Pending quality checks (after the manual surface work above)

- **Arabic translation review** — ✅ done (2026-05-07). Full review in [`ARABIC-REVIEW.md`](./ARABIC-REVIEW.md) — 13 of 17 findings fixed, 4 decision-deferred items resolved (Q1/Q2/Q3/Q4 in chat).
- **Notion embed mobile responsiveness** — once `/notion/<slug>/` pages are embedded into the legacy Notion site, test on mobile width (375px viewport) that the embedded redirect renders correctly: button is reachable, layout doesn't overflow, no horizontal scroll. Templates live in `src/notion-redirect.njk` and `src/notion-redirect-project.njk`; tweak responsive CSS there if needed.

## Intentional EN/AR divergences (not drift)

These differences between the EN and AR surfaces are deliberate localization choices, not inconsistencies to fix:

- **Architecture sections** in `projects.json` are written as flowing prose on the EN side and as bulleted lists with bolded sub-headers on the AR side. Reason: Arabic prose is denser to scan than English prose; bullets serve AR readers better, while EN's calm/builder voice carries naturally as paragraphs. Each language is presented in its native-feeling structure.
- **EN-in-parens technical terms** in AR strings (`Clean Architecture`, `Compose Multiplatform`, `KMP`, `Backend`, `Native Performance`, etc.) — kept deliberately for AR developers who recognize the EN form, plus mild bilingual-search SEO. Trimmed only when the AR phrase IS the literal English (e.g., `(At Scale)` after `على النطاق الواسع`).


Canonical content lives in:

- `src/_data/profile.json` — identity, headline, bio, top skills, metrics, contact.
- `src/_data/about_page.json` — experience timeline + certifications.
- `src/_data/projects.json` — project entries.
- `src/_data/home.json` — homepage hero + expertise card text.
- `src/cv/Hussain_Gaddal_CV.html` — CV.

The site rebuilds from those automatically. Everything else (LinkedIn, GitHub, Notion) is manual.

**Ready-to-paste copy for those external surfaces lives in [`src/social/`](../src/social/README.md)** — open the relevant file there when you're about to update LinkedIn, GitHub, or Notion. Update both the canonical data file *and* the matching kit `.md` so the kit stays accurate.

## Cross-surface field map

| Field | Canonical | LinkedIn | GitHub bio | GitHub README | CV | Site index | Site about | Notion redirect | Last synced |
|---|---|---|---|---|---|---|---|---|---|
| Name | `profile.json#identity.name_en` | Header | Auto | Top of README | `<h1>` | Hero greeting | Hero subtitle | Footer text | 2026-05-05 |
| Role / title | `profile.json#identity.current_role` | Headline + About line 1 | Bio | Header subtitle | Subtitle line | Hero headline | About line 1 | Eyebrow text | 2026-05-05 |
| Company | `profile.json#identity.current_company` | Experience role | Company field | Top of README | Work Experience block | About paragraph | Experience timeline | (n/a) | 2026-05-05 |
| Location | `profile.json#identity.location_en` | Header location | Location field | Top of README | Contact line | Footer location | Hero subtitle | (n/a) | 2026-05-05 |
| Headline (long) | `profile.json#headline.linkedin_220` | Headline | (n/a) | (n/a) | (n/a) | (n/a) | (n/a) | (n/a) | 2026-05-06 |
| Bio (short) | `profile.json#headline.github_bio_160` | (n/a) | Bio | (n/a) | (n/a) | (n/a) | (n/a) | (n/a) | 2026-05-06 |
| Bio (long) | `profile.json#bio.linkedin_about_en` | About | (n/a) | "What I'm working on" section | Professional Summary | (n/a) | About paragraphs | (n/a) | 2026-05-05 |
| Top 5 skills | `profile.json#top_skills` | Top Skills | (n/a) | Stack badges | Skills section | Expertise cards | (n/a) | (n/a) | 2026-05-05 |
| Metrics (40 / 25 / 15 / 50 / 30) | `profile.json#metrics` | Experience bullets | (n/a) | "What I'm working on" bullets | Work Experience bullets | (n/a) | Experience bullets | (n/a) | 2026-05-05 |
| Email | `profile.json#contact.email` | Contact info | Email field | README contact line | Contact line | mailto buttons | mailto buttons | (n/a) | 2026-05-05 |
| Portfolio URL | `profile.json#contact.portfolio` | Contact info / Featured | Blog field | README contact line | Header link | (self) | (self) | Button target | 2026-05-05 |
| LinkedIn URL | `profile.json#contact.linkedin` | (self) | (n/a) | README contact line | Header link | Footer + nav | Footer + nav | (n/a) | 2026-05-05 |
| GitHub URL | `profile.json#contact.github` | Featured + Contact info | (self) | (self) | Header link | Footer + nav | Footer + nav | (n/a) | 2026-05-05 |
| Researcher 2017–2022 | `about_page.json#en.experience.items[1]` + `profile.json#research_era` | Experience role | (n/a) | "What I'm working on" line | Work Experience nested role | (n/a) | Experience timeline | (n/a) | 2026-05-05 |
| Pinned projects (6) | `projects.json` (featured: true) + Maktabati + Translator KMM + portfolio | LinkedIn Projects (Tier 1) | (n/a) | Featured projects table | Featured Projects (CV has 6) | Featured projects grid | (n/a) | (n/a) | 2026-05-05 |
| OG image | `brand/og_image.html` → `src/assets/img/branding/og_image.jpg` | (n/a) | (n/a) | Optional hero | (n/a) | `<meta og:image>` | `<meta og:image>` | (n/a) | 2026-06-10 |
| LinkedIn banner | `brand/linkedin_banner.html` → `src/assets/img/branding/linkedin_banner.png` | Profile banner | (n/a) | (n/a) | (n/a) | (n/a) | (n/a) | (n/a) | 2026-06-10 |

## Sync workflow

When you change a canonical field:

1. Edit the canonical file (e.g., `profile.json`).
2. Run `npm run build` and verify the site reflects the change at `_site/index.html`, `_site/about/index.html`, `_site/cv/Hussain_Gaddal_CV.html`, and the Arabic mirror.
3. Walk down the row in the table above. For each external column (LinkedIn / GitHub bio / GitHub README / Notion):
   - Open the surface.
   - Paste the new value.
   - Confirm.
4. Update the "Last synced" cell in that row to today's date.
5. Commit: `git commit -m "branding: <what changed>"` (use the existing commit message style from `git log`).

## Surfaces

### LinkedIn (manual)
- Profile URL: https://www.linkedin.com/in/hussaingaddal/
- Edit at https://www.linkedin.com/in/hussaingaddal/edit/intro/ (or the relevant section).
- LinkedIn re-hosts banner images, so download from `/assets/img/branding/linkedin_banner.png` and upload via the UI.

### GitHub (semi-automatable)
- Profile: https://github.com/IronManYG
- Profile bio / blog / location editable via `gh api -X PATCH user -f bio="..." -f blog="..." -f location="..."` (requires `gh auth login` with appropriate scopes).
- README repo: https://github.com/IronManYG/IronManYG (create the `IronManYG/IronManYG` repo and push `README.md`).
- Pinned repos editable only via the GitHub web UI.

### CV (in this repo)
- File: `src/cv/Hussain_Gaddal_CV.html`.
- Re-export to PDF after edits if you ship a PDF version: `Hussain_Gaddal_CV.pdf`.

### Site (in this repo)
- Templates pull from `_data/*.json` automatically; usually no template change needed when content shifts.

### Notion (manual)
- Old Notion site stays live for legacy CV-link compatibility.
- Each section there should now contain a single `/embed` block pointing at the matching `https://ironmanyg.github.io/hussain-portfolio/notion/<slug>/` page.
- Sections to embed: `home`, `projects`, `cv`, `about`, `experience`, `contact`, plus `projects/<slug>` per project.

## Drift-check (optional, future)

If the manual checklist starts feeling error-prone, add `scripts/check-sync.js` that:
1. Reads `profile.json`.
2. Calls `gh api users/IronManYG` and compares `bio`, `blog`, `location`, `name`, `email`.
3. Prints a diff. Exits non-zero if anything's out of sync.

LinkedIn API access requires Marketing Developer Platform approval, so LinkedIn stays manual.
