# Social kit — Hussain Gaddal

Ready-to-paste copy and instructions for every surface where you have a public profile or content. The kit is your single reference when you update LinkedIn, GitHub, the CV, or the Notion redirect site. It is the "what to paste" companion to `profile.json` (canonical data) and `.notes/BRANDING-SYNC.md` (when to update what).

## Files

| File | Use it when |
|---|---|
| [`linkedin.md`](./linkedin.md) | Updating LinkedIn (headline, About, experience bullets, top skills, projects, Featured cards) |
| [`github.md`](./github.md) | Updating the GitHub profile (bio, blog, location, pinned repos, repo descriptions, archive list) |
| [`github-profile-readme.md`](./github-profile-readme.md) | The actual content of `IronManYG/IronManYG/README.md` (the profile README repo) |
| [`github-readme-ideas.md`](./github-readme-ideas.md) | Future enhancement ideas for the GitHub README — additive directions to pick from when refreshing |
| [`notion.md`](./notion.md) | Replacing each Notion section with a redirect embed |
| [`cv.md`](./cv.md) | Re-exporting the CV PDF and keeping the HTML version in sync with the rest |
| [`images.md`](./images.md) | Generating and placing the brand images (LinkedIn banner, GitHub README hero, OG image) |

## Copy buttons

Every paste-block in `linkedin.md`, `notion.md`, and `github.md` is wrapped in a fenced code block. When you view these files on GitHub (or in VS Code's markdown preview), each code block shows a **copy icon in its top-right corner** — one click copies the whole block to your clipboard. Look for the icon when you're about to paste a headline, About paragraph, project description, certification, or Notion URL.

## How the kit fits with the rest

```
src/_data/profile.json     ← canonical data (name, headline, bio, metrics, contact, top skills)
src/_data/projects.json    ← canonical project entries
src/_data/about_page.json  ← canonical experience timeline + certifications
src/_data/home.json        ← canonical homepage hero + expertise text
src/cv/Hussain_Gaddal_CV.html ← canonical CV
        │
        │ (the website builds from these)
        ▼
src/social/                ← THIS FOLDER: ready-to-paste copy for external surfaces
        │
        ▼
LinkedIn / GitHub / Notion / shared-as-PDF CV
```

When you change a canonical file, also walk the matching surface row in [`/.notes/BRANDING-SYNC.md`](../../.notes/BRANDING-SYNC.md), update the kit's relevant `.md` (so it reflects the new copy), then paste from the kit into the external surface.

## Why these aren't published on the site

These files are excluded from the Eleventy build (see `.eleventy.js`). The site already has its own polished version of this content at `/`, `/about/`, `/projects/`, `/cv/`. The kit is the maintainer's working reference — keeping it out of the published site avoids duplication and SEO weirdness.

If you ever want public URLs (e.g., to share `linkedin.md` with someone), drop the ignore line in `.eleventy.js` and rebuild — the files will publish at `/social/<name>/` automatically.

## Quick commands

```bash
# Open the kit on GitHub (renders nicely there):
#   https://github.com/IronManYG/hussain-portfolio/tree/main/src/social

# Copy LinkedIn About to clipboard (Windows PowerShell):
Get-Content src/social/linkedin.md | Set-Clipboard

# Verify the kit is excluded from the build:
npm run build && (Test-Path _site/social) -eq $false
```
