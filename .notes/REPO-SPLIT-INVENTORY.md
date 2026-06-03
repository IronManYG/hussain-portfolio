# Repo Split — File Inventory

**Date:** 2026-05-16
**Status:** Draft for review (no changes made yet)
**Companion doc:** [REPO-SPLIT-MECHANICS.md](REPO-SPLIT-MECHANICS.md)

## Goal

Split the current monorepo into two (possibly three) repos so the **public website** stays public and minimal, while **working/reference content** (paste-ready social copy, CV source files, planning docs, brand QA) lives in a **private repo**.

## Inventory

### A. STAYS PUBLIC — `hussain-portfolio` (this repo)

The website and everything the deployed site needs to build and run.

| Path | Why it stays |
|---|---|
| `src/index.njk`, `src/about.njk`, `src/projects.njk`, `src/project-detail.njk`, `src/notion-redirect*.njk` | Page templates rendered by Eleventy |
| `src/_includes/` | Nunjucks partials |
| `src/_data/*.json` | Data driving the templates (home, about, projects, locales, redirects, **profile**, image_prompts) |
| `src/ar/` | Arabic locale pages |
| `src/css/`, `src/js/`, `src/assets/`, `src/favicon.svg`, `src/manifest.json`, `src/sw.js`, `src/sitemap.xml` | Site assets + PWA plumbing |
| `src/cv/Hussain_Gaddal_CV.pdf` | **Final** CV PDF — recruiters download this from the site |
| `src/cv/Hussain_Gaddal_CV_compact.pdf` | **Final** compact CV PDF — same |
| `.eleventy.js`, `.eleventyignore`, `tailwind.config.js`, `package.json`, `package-lock.json` | Build config |
| `.github/` | GitHub Actions / Pages workflow |
| `README.md` | Public-facing readme |
| `.gitignore` | Updated to also ignore the moved paths |

### B. MOVES TO PRIVATE — `hussain-portfolio-private` (new repo)

Working content the website doesn't need at runtime. Currently tracked in this repo and exposed.

| Path | Why move | Notes |
|---|---|---|
| `src/social/` (whole tree) | Paste-ready copy for GitHub bios/READMEs, LinkedIn headline/about/featured, Notion banner, CV source content, image prompts, draft README ideas, certificate PDFs | Already excluded from the build via `.eleventyignore`, but **tracked in git** — currently public |
| `src/cv/Hussain_Gaddal_CV_A.html` | CV design variant (Option A) | Working file, not the served output |
| `src/cv/Hussain_Gaddal_CV_C.html` | CV design variant (Option C) | Working file |
| `src/cv/Hussain_Gaddal_CV_compact_D.html` | CV design variant (Option D, compact) | Working file |
| `src/cv/Hussain_Gaddal_CV_compact_E.html` | CV design variant (Option E, compact) | Working file |
| `src/cv/Hussain_Gaddal_CV_old.html` | Old CV version | Archive |
| `src/cv/blue-swatches.html` | Color palette experiment | Design scratch |
| `.notes/ARABIC-REVIEW.md` | Arabic localization review/QA log | Internal QA |
| `.notes/BRANDING-SYNC.md` | Cross-surface brand sync status — surface-by-surface "last synced" log | Internal status |
| `.notes/IMAGE-GENERATION-GUIDE.md` | How to generate brand images from prompts | Internal guide |
| `.tmp-design/` (if it contains anything kept) | Design scratch dir | Currently untracked — confirm before moving |

### C. ALREADY PRIVATE (gitignored — no action needed)

Already excluded from the public repo; just confirm they don't get accidentally re-added.

| Path | Status |
|---|---|
| `linkedin/` | Gitignored — captured profile data, raw HTML snapshots |
| `.claude/` | Gitignored — Claude Code per-machine settings |
| `.playwright-mcp/` | Gitignored — Playwright MCP session artifacts |
| `node_modules/`, `_site/`, `dist/`, `.npm/` | Gitignored — build artifacts |

### D. THE INTERESTING ONE — Shared brand source

`src/_data/profile.json` is the **canonical source of truth** for cross-surface brand fields (per [BRANDING-SYNC.md](BRANDING-SYNC.md)). Both the website (public) and the social/CV working files (private) consume it.

**Options:**

1. **Keep it in the public repo only.** The private repo just *reads* it manually when generating new social copy. Simplest. Works because brand fields don't change often and the private repo isn't a build pipeline — it's a reference library you copy-paste from. **Recommended.**
2. **Extract to a third repo `hussain-brand-source`** and pull it into both as a git submodule. Cleaner conceptually, but submodules add friction for what's effectively one ~5KB JSON file you edit once a quarter. **Overkill unless this set grows.**
3. **Duplicate the file** in both repos and reconcile by hand. Don't.

### E. AMBIGUOUS — confirm before moving

These are tracked but their fate isn't obvious. Decide explicitly:

| Path | Question |
|---|---|
| `src/social/certs/*.pdf` | Are completion certificates sensitive? They're shown on LinkedIn publicly anyway. **Likely keep where they are or upload elsewhere** — not really "private" content, but currently bundled with the social-kit folder. |
| `src/social/README.md` | Pure docs for the social kit. Move with the rest of `src/social/`. |
| Old commit history that references private paths | See "History decision" in the mechanics doc. |

## Summary — what the public repo would look like after the split

```
hussain-portfolio/
├── .eleventy.js
├── .eleventyignore
├── .gitignore          (updated)
├── .github/
├── README.md
├── package.json
├── package-lock.json
├── tailwind.config.js
└── src/
    ├── _data/          (all JSON, including profile.json)
    ├── _includes/
    ├── ar/
    ├── assets/
    ├── css/
    ├── cv/
    │   ├── Hussain_Gaddal_CV.pdf          ← final, served
    │   └── Hussain_Gaddal_CV_compact.pdf  ← final, served
    ├── js/
    ├── *.njk           (page templates)
    ├── favicon.svg
    ├── manifest.json
    ├── sitemap.xml
    └── sw.js
```

Everything else moves out, becomes gitignored, or stays already-gitignored.

## Open questions for you

1. Are the certificate PDFs in `src/social/certs/` something you want to keep public (they're on LinkedIn) or move private with the rest of the kit?
2. The CV variants (`_A`, `_C`, `_D`, `_E`) — are any of these still in active rotation, or are they all archival now? If the final-two PDFs are the only thing recruiters ever see, the HTML variants are pure working files and the split is clean.
3. Shared brand source — go with option 1 (keep `profile.json` in public, manually reference from private)? Or do you anticipate the shared set growing enough to warrant a `hussain-brand-source` submodule?
4. Do you care about scrubbing **git history** of the to-be-private paths, or is "private going forward" good enough? See the mechanics doc for trade-offs.
