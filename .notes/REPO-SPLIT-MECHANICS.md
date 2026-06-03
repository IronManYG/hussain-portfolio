# Repo Split — Mechanics

**Date:** 2026-05-16
**Status:** Draft for review (no changes made yet)
**Companion doc:** [REPO-SPLIT-INVENTORY.md](REPO-SPLIT-INVENTORY.md)

## TL;DR

Most of the "sync" worry is misplaced — the two repos don't actually need to talk to each other at runtime. Public repo = the website. Private repo = a reference library you copy-paste from when updating social surfaces.

The one place sync *might* matter is `src/_data/profile.json` (the canonical brand source). Three options below, from simplest to fanciest.

The hardest decision isn't the split itself — it's **whether to scrub git history** of the to-be-private paths. Read the "History decision" section before doing anything.

---

## 1. The architecture

### Default recommendation: two repos, no submodule

```
┌─────────────────────────────────────┐      ┌──────────────────────────────────────────┐
│  PUBLIC                              │      │  PRIVATE                                  │
│  github.com/IronManYG/               │      │  github.com/IronManYG/                    │
│  hussain-portfolio                   │      │  hussain-portfolio-private                │
├─────────────────────────────────────┤      ├──────────────────────────────────────────┤
│  src/ (templates, _data, css, js)    │      │  social/ (paste-ready GitHub/LinkedIn    │
│  src/cv/Hussain_Gaddal_CV.pdf        │      │           /Notion copy + image prompts)   │
│  src/cv/Hussain_Gaddal_CV_compact.pdf│      │  cv/source/ (CV HTML variants A/C/D/E)   │
│  src/assets/                         │      │  notes/ (ARABIC-REVIEW, BRANDING-SYNC,   │
│  .eleventy.js, package.json, …       │      │          IMAGE-GENERATION-GUIDE)         │
│  README.md                           │      │  linkedin/ (captured HTML, profile.md)    │
│                                      │      │  README.md                                │
└──────────────┬──────────────────────┘      └──────────────┬───────────────────────────┘
               │                                              │
               │  reads when updating brand:                  │
               │  ◄────────── profile.json (canonical) ───────│
               │                                              │
               │  used by site at build time                  │  copy-pasted by you
               │  to render templates                         │  when updating LinkedIn /
               │                                              │  GitHub bios / Notion / CV
```

**Why no submodule by default:** the private repo isn't a build pipeline. It's notes + ready-to-paste content. You don't `npm run build` it. The website doesn't need it. So there's no need to wire them together — the "sync" is human-driven (you reading the public `profile.json` when you draft new social copy), not machine-driven.

### Alternative: three repos with a shared `brand-source` submodule

Only do this if you find yourself duplicating brand fields between the two repos and they drift.

```
hussain-brand-source/              ← tiny private repo: profile.json + image_prompts.json
    ├─ profile.json
    └─ image_prompts.json

hussain-portfolio/                  ← public, includes brand-source as git submodule at src/_data/_brand/
hussain-portfolio-private/          ← private, includes brand-source as git submodule at brand/
```

Trade-off: cleaner conceptually, but submodules are notoriously annoying (forget to `git submodule update`, CI needs the right token to pull a private submodule into a public repo's build, contributors confused by detached HEAD inside the submodule). Skip until you actually feel the duplication pain.

---

## 2. The migration — step by step

### Phase 0 — Decide history strategy (READ FIRST)

See "History decision" below. The steps below assume **"private going forward, public history left alone"** — the simplest path. If you want a history scrub, that's a different procedure (also covered below).

### Phase 1 — Create the private repo

```bash
# On GitHub: create IronManYG/hussain-portfolio-private as a PRIVATE repo, no README

# Locally:
cd E:/AntigravityProjects
git clone git@github.com:IronManYG/hussain-portfolio-private.git
cd hussain-portfolio-private
mkdir social cv-source notes linkedin
```

### Phase 2 — Move the files

Copy (don't `git mv` yet) the files from the public repo into the new private repo, preserving paths but flattening the `src/` prefix:

```text
hussain-portfolio/src/social/                  →  hussain-portfolio-private/social/
hussain-portfolio/src/cv/Hussain_Gaddal_CV_A.html       →  hussain-portfolio-private/cv-source/A.html
hussain-portfolio/src/cv/Hussain_Gaddal_CV_C.html       →  hussain-portfolio-private/cv-source/C.html
hussain-portfolio/src/cv/Hussain_Gaddal_CV_compact_D.html → hussain-portfolio-private/cv-source/compact_D.html
hussain-portfolio/src/cv/Hussain_Gaddal_CV_compact_E.html → hussain-portfolio-private/cv-source/compact_E.html
hussain-portfolio/src/cv/Hussain_Gaddal_CV_old.html     →  hussain-portfolio-private/cv-source/old.html
hussain-portfolio/src/cv/blue-swatches.html             →  hussain-portfolio-private/cv-source/blue-swatches.html
hussain-portfolio/.notes/ARABIC-REVIEW.md      →  hussain-portfolio-private/notes/ARABIC-REVIEW.md
hussain-portfolio/.notes/BRANDING-SYNC.md      →  hussain-portfolio-private/notes/BRANDING-SYNC.md
hussain-portfolio/.notes/IMAGE-GENERATION-GUIDE.md → hussain-portfolio-private/notes/IMAGE-GENERATION-GUIDE.md
hussain-portfolio/linkedin/                    →  hussain-portfolio-private/linkedin/
```

Commit in the private repo:

```bash
cd hussain-portfolio-private
git add .
git commit -m "Initial import from hussain-portfolio (working content only)"
git push
```

Add a README at the top so future-you knows what this is:

```markdown
# hussain-portfolio-private

Working/reference content paired with the public site
[IronManYG/hussain-portfolio](https://github.com/IronManYG/hussain-portfolio).

- `social/` — paste-ready copy for GitHub bios/READMEs, LinkedIn, Notion
- `cv-source/` — CV HTML source variants (the served PDFs live in the public repo)
- `notes/` — branding sync log, Arabic QA, image generation guide
- `linkedin/` — captured profile HTML + raw profile.md

Canonical brand source lives in the public repo at `src/_data/profile.json`.
When updating any of the above, read that file first.
```

### Phase 3 — Remove the files from the public repo

In `hussain-portfolio/`:

```bash
git rm -r src/social
git rm src/cv/Hussain_Gaddal_CV_A.html \
       src/cv/Hussain_Gaddal_CV_C.html \
       src/cv/Hussain_Gaddal_CV_compact_D.html \
       src/cv/Hussain_Gaddal_CV_compact_E.html \
       src/cv/Hussain_Gaddal_CV_old.html \
       src/cv/blue-swatches.html
git rm .notes/ARABIC-REVIEW.md \
       .notes/BRANDING-SYNC.md \
       .notes/IMAGE-GENERATION-GUIDE.md
# linkedin/ is already gitignored — nothing to git rm
```

Update `.gitignore` to belt-and-suspenders ignore the now-moved paths so they can't accidentally come back:

```gitignore
# Moved to hussain-portfolio-private (2026-05-16)
src/social/
src/cv/*_A.html
src/cv/*_C.html
src/cv/*_compact_D.html
src/cv/*_compact_E.html
src/cv/*_old.html
src/cv/blue-swatches.html
.notes/
```

Verify the build still works:

```bash
npm run build         # or whatever the eleventy build command is
# Check _site/ — site should look identical
```

Then commit:

```bash
git commit -m "chore: split working content into hussain-portfolio-private

Move src/social/, CV source variants, and .notes/ planning docs to the
private repo. Final CV PDFs and the brand profile.json stay here as
the public-facing artifacts.

Note: git history of moved files is preserved in this repo's past
commits. See .notes/REPO-SPLIT-MECHANICS.md for the history decision."
```

### Phase 4 — Update the local Claude / memory references

A few memory files in `.claude/.../memory/` reference the moved paths. After the split, update:

- `reference_social_kit.md` → point at `hussain-portfolio-private/social/` instead of `src/social/`
- `reference_branding_sync.md` → point at `hussain-portfolio-private/notes/BRANDING-SYNC.md`
- `project_branding_state.md` → note the split happened on 2026-05-16

(Claude can do this automatically next time you mention it — just ask.)

---

## 3. History decision

After the move, the **content** is gone from the public repo's current state, but the **commit history** still contains every line of every file that was ever committed. Anyone can `git log -- src/social/` and read it all.

Three options:

### Option A — Leave history alone (RECOMMENDED for most cases)

- **Pros:** Simple, safe, doesn't break clones/forks, preserves authorship of your past work
- **Cons:** Anyone determined enough can still see the content in old commits
- **When it's fine:** Nothing in the moved files is *truly* sensitive — it's working copy, draft text, design experiments. None of it is credentials, none of it is unreleased product info. Most "I want this private" is really "I don't want it on the README" rather than "this would harm me if found."
- **Reality check:** the content was already public for months. Removing it from `main` today doesn't un-publish what's already been indexed/cloned/cached. History scrubs feel reassuring but rarely do what people think they do.

### Option B — Rewrite history with `git filter-repo`

- **Pros:** The to-be-private files are gone from every past commit too
- **Cons:**
  - Rewrites every commit SHA → breaks any existing clone/fork (you'd need to force-push and warn anyone who cloned)
  - GitHub keeps old refs accessible via direct SHA URLs for a while even after force push, until garbage collection
  - Doesn't remove what GitHub/web archives already cached
  - Real work — half a day of fiddling, verifying, and re-deploying
- **When to do it:** Only if something genuinely sensitive slipped in (an API key, a private contact, a draft that's actually compromising). The mechanics:

```bash
# Install: pip install git-filter-repo
cd hussain-portfolio
git filter-repo --path src/social --invert-paths \
                --path src/cv/Hussain_Gaddal_CV_A.html --invert-paths \
                # ... repeat per file
                # OR pass a paths file
git push origin --force --all
git push origin --force --tags
```

⚠️ This is **destructive** — only after you're sure the private repo has everything and the public repo builds cleanly. Take a tag/backup first: `git tag pre-history-rewrite && git push origin pre-history-rewrite`.

### Option C — Make the public repo private temporarily, fix, then re-public

If something genuinely sensitive is exposed and history must be scrubbed: flip the public repo to private, do the rewrite, verify, flip back to public. Reduces the window of accidental re-exposure during the rewrite. Overkill for this case.

---

## 4. Ongoing workflow after the split

When you want to update a surface (e.g., LinkedIn headline):

1. Open `hussain-portfolio-private/social/linkedin.md` — read/edit the paste-ready copy
2. If the underlying brand field changed (title, tagline, contact), update `hussain-portfolio/src/_data/profile.json` first
3. Update `hussain-portfolio-private/notes/BRANDING-SYNC.md` with the new "Last synced" timestamp
4. Commit each repo separately

When the website needs a code change (e.g., new project, layout tweak):

1. Edit in `hussain-portfolio` as you do today
2. The private repo doesn't need touching unless the brand source changed

CV updates:

1. Edit the working HTML in `hussain-portfolio-private/cv-source/`
2. Export the chosen variant to PDF
3. Drop the PDF into `hussain-portfolio/src/cv/Hussain_Gaddal_CV.pdf` (or `_compact.pdf`)
4. Commit both repos

---

## 5. Reversibility

If after a month you decide the split was a mistake — moving the private content back is straightforward: `cp -r hussain-portfolio-private/social hussain-portfolio/src/social`, commit, done. No data is lost by trying this.

---

## Recommended sequence

1. Read [REPO-SPLIT-INVENTORY.md](REPO-SPLIT-INVENTORY.md), answer the four open questions at the bottom
2. Decide history strategy (almost certainly Option A — leave history alone)
3. Create the private repo on GitHub
4. Run Phase 2 + Phase 3 (move files, then remove from public)
5. Verify the site still builds
6. Push both
7. Update Claude memory references (Phase 4)

Estimated time end-to-end: **30–60 minutes**, assuming Option A history.
