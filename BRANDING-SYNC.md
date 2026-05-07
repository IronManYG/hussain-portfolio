# Branding sync checklist

Single source of truth for every cross-surface brand field. When you change a row, walk down it and update each surface, then bump the "Last synced" date.

## Surface status snapshot (2026-05-07)

| Surface | Status | Notes |
|---|---|---|
| Site (EN + AR) | ✅ in sync | Researcher 2017–2022 timeline; OG meta fixed; cert titles renamed to official PL Coding names; deployed via PR #2 (merge `2a0267f`) on 2026-05-07. |
| CV variants (4 sources) | ✅ available | `_A.html` (2-page polished), `_C.html` (2-page conservative), `_compact_D.html` (1-page readable), `_compact_E.html` (1-page + impact stats). Chirp pills now include `WebSockets` / `JWT` / `PostgreSQL`; Runique adds `Health Services` (variants A and C only). |
| CV PDFs (both) | ✅ current (2026-05-07) | `Hussain_Gaddal_CV.pdf` re-exported from variant C; `Hussain_Gaddal_CV_compact.pdf` from variant D. Re-export via `msedge.exe --headless=new --print-to-pdf="..." "file:///..."` (or Chrome Ctrl+P) when canonical content changes. |
| GitHub bio / blog / location | ✅ live | Pushed via `gh api -X PATCH user` on 2026-05-06 |
| GitHub profile README (`IronManYG/IronManYG`) | ✅ live | Repo created 2026-05-06; README v3 with `data class` + `@Composable` |
| GitHub repo descriptions | ✅ done (~9 repos) | ScribbleDash, Translator_KMM, MaterialCalculator, hussain-portfolio, dev.gaddal.qodem-api, Qodem-multi-module, AutoMatic-Book-Scaneer, Runique, Chirp, EchoJournal, PlantPediaZ. Still missing on `chirp-api`, `Maktabati` — see `src/social/github.md` §7. |
| GitHub repo topics + homepages | ✅ done (6 pinned + PlantPediaZ + 5 expanded on 2026-05-07) | Pinned repos topic-tagged. On 2026-05-07 added topics to `chirp-api` (Spring Boot stack: spring-boot, postgresql, redis, websockets, rabbitmq, jwt-authentication, multi-module-gradle, rate-limiting, bcrypt), `Maktabati` (Android library), `dev.gaddal.qodem-api` (Ktor backend); added `multi-module-architecture` to Chirp; added `health-services-api` + `convention-plugins` to Runique. |
| GitHub pinned repos | ✅ done | Order: Chirp, EchoJournal, ScribbleDash, Runique, Translator_KMM, hussain-portfolio |
| GitHub archive list | ✅ done (30 repos) | Archived 2026-05-06: 5 test/junk + 16 Udacity exercises + 9 codelab/starter (see `src/social/github.md` §5) |
| Cert PDFs | ✅ tracked (2026-05-06) | 7 PDFs committed to `src/social/certs/` (6 PL Coding + 1 Udacity). `.gitignore` exclusion removed since these are publicly equivalent to LinkedIn Media uploads. |
| LinkedIn | ✅ done (2026-05-07) | §1–§10 all pasted (incl. Education companion entry for Udacity Nanodegree). Project "Associated with" links restored after the Education re-add (Asteroid Radar / Maps / Material Calculator etc.). |
| Notion redirect embeds | ✅ done (2026-05-07) | All 18 redirect URLs embedded into the legacy Notion site. Project + CV buttons fixed (per-project URLs and CV target both 404'd; commit `5a364d1`) and re-tested live from inside Notion. |
| Brand images | ⏸️ pending (generation) | 4 prompts in `src/_data/image_prompts.json` (`og_image`, `linkedin_banner`, `github_readme_hero`, `notion_redirect_hero`); output to `src/assets/img/branding/` (folder currently untracked, populate then `git add`). |

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

**Ready-to-paste copy for those external surfaces lives in [`src/social/`](./src/social/README.md)** — open the relevant file there when you're about to update LinkedIn, GitHub, or Notion. Update both the canonical data file *and* the matching kit `.md` so the kit stays accurate.

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
| OG image | `src/assets/img/branding/og_image.png` | (n/a) | (n/a) | Optional hero | (n/a) | `<meta og:image>` | `<meta og:image>` | (n/a) | 2026-05-05 |
| LinkedIn banner | `src/assets/img/branding/linkedin_banner.png` | Profile banner | (n/a) | (n/a) | (n/a) | (n/a) | (n/a) | (n/a) | 2026-05-05 |

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
