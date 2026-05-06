# CV — source, exports, sync

The CV is the single most important shareable artifact in this kit. Two files, kept in sync:

| File | Purpose |
|---|---|
| `src/cv/Hussain_Gaddal_CV.html` | Canonical source. All edits happen here. |
| `src/cv/Hussain_Gaddal_CV.pdf` | Print export. Re-generate after every meaningful edit. |

After build, both are also served at:

- `https://ironmanyg.github.io/hussain-portfolio/cv/Hussain_Gaddal_CV.html`
- `https://ironmanyg.github.io/hussain-portfolio/cv/Hussain_Gaddal_CV.pdf`

## When to update the CV

Re-edit and re-export when **any** of these change:

- Headline (`profile.json#headline.cv_subtitle`)
- Summary paragraph (top of the CV, mirrors `profile.json#bio.linkedin_about_en` but is shorter)
- Skills section
- Work experience (Android Developer or Researcher bullets, dates)
- Featured projects (CV shows 6: Maktabati, Chirp, Runique, EchoJournal, ScribbleDash, Translator KMM)
- Certifications (CV shows 8 — keep the 2025 JetBrains-collaborated ones at the top)
- Contact links

## How to re-export the PDF

The CV is HTML with a `@media print` block tuned for A4. To export:

1. Open `_site/cv/Hussain_Gaddal_CV.html` in Chrome (after `npm run build`) — or open `src/cv/Hussain_Gaddal_CV.html` directly.
2. `Ctrl+P` (Windows) or `Cmd+P` (Mac) → Destination: **Save as PDF**.
3. Settings: A4, Default margins, Background graphics ON, Scale: Default.
4. Save over `src/cv/Hussain_Gaddal_CV.pdf`.
5. Verify it stayed at one page. If it overflowed, tighten spacing in the `@media print` rules at the top of the HTML.

## What lives where (CV vs other surfaces)

The CV is denser than LinkedIn or the website. It also has different audience expectations: recruiters scanning a 1-page PDF in 6 seconds.

| Element | CV | LinkedIn | Site About |
|---|---|---|---|
| Summary paragraph | 4–5 lines, dense | 3–4 paragraphs | 2 paragraphs |
| Metrics (40/25/15/50/30) | Bulleted under role | Bulleted under role | Bulleted under role |
| Project descriptions | 1–2 lines + tech | Tier 1 full / Tier 2 1 line | 1-line description + detail page |
| Project count | 6 (featured only) | 12 (featured + concise) | 12 (filterable grid) |
| Certifications | 8 (full list) | Match the 8 | 6 (curated) |
| Researcher role | Nested under Kay Technology | Same | Same |
| Languages | One line at the bottom | Skills section | Not shown |

If you cut a row from one surface, decide whether to keep it on the others — they don't have to mirror each other identically.

## Send the CV externally

When emailing or messaging the CV:

- **Prefer the live URL** if the recipient might want to share or revisit (it's always up to date).
- **Attach the PDF** if it's a formal application that wants a file.
- The CV's first contact line already points at portfolio + LinkedIn + GitHub, so a single CV gives recipients the full picture.
