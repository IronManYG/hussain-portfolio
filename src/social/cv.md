# CV — variants, exports, ATS

The CV is the most important shareable artifact in this kit. There are now **four HTML source files** to pick from depending on the situation, and **two PDF output filenames** that external surfaces (portfolio, LinkedIn Featured, email attachments) link to.

## Source files (pick one per scenario)

| File | Layout | When to use |
|---|---|---|
| `src/cv/Hussain_Gaddal_CV_A.html` | 2-page, larger type + Cobalt Navy left accent bars on jobs/projects + tech-stack pills | **Default for most submissions.** Most polished and recruiter-friendly. Pick this when the recipient is human-first (recruiters, hiring managers, in-person handoff). |
| `src/cv/Hussain_Gaddal_CV_C.html` | 2-page, lighter visual upgrade — bigger headers + tech pills (no accent bars) | Conservative alternative to A. Closest to a traditional 2-page CV with subtle modern touches. Pick this if a target company looks formal / financial / government-adjacent. |
| `src/cv/Hussain_Gaddal_CV_compact_D.html` | 1-page, comfortable density, 1-line project descriptions | **Default 1-page CV.** Pick when applying through forms with a strict "1 page only" rule, or when emailing a quick-look version. |
| `src/cv/Hussain_Gaddal_CV_compact_E.html` | 1-page, D + a 5-cell impact stat block under the summary (40%/25%/15%/50%/30%) | Pick when the metrics are the differentiator. Recruiter-skim CV. Surfaces achievements at a glance — good for senior roles where you want the numbers visible in 2 seconds. |

All four share the same content. Differences are layout, font size, and visual treatment only.

## Output PDFs (what gets shared)

| File | Source HTML (your choice) | Where it shows up |
|---|---|---|
| `src/cv/Hussain_Gaddal_CV.pdf` | A or C | Portfolio CV link, LinkedIn Featured card, primary attachment |
| `src/cv/Hussain_Gaddal_CV_compact.pdf` | D or E | One-page form uploads, quick share |

After build, both PDFs are also served at:

- `https://ironmanyg.github.io/hussain-portfolio/cv/Hussain_Gaddal_CV.pdf`
- `https://ironmanyg.github.io/hussain-portfolio/cv/Hussain_Gaddal_CV_compact.pdf`

## When to update the CV

Re-edit and re-export when **any** of these change:

- Headline (`profile.json#headline.cv_subtitle`)
- Summary paragraph (top of the CV, mirrors `profile.json#bio.linkedin_about_en` but is shorter)
- Skills section
- Work experience (Android Developer or Researcher bullets, dates)
- Featured projects (CV shows 6: Maktabati, Chirp, Runique, EchoJournal, ScribbleDash, Translator KMM)
- Certifications (CV shows 8 — keep the 2025 JetBrains-collaborated ones at the top)
- Contact links

Every edit must be made **in all four variant files** (the content is identical across A/C/D/E), then re-export the PDFs.

## How to re-export the PDF

The CVs are HTML with `@media print` rules tuned for A4. To export:

1. Open the variant you want in Chrome (or Edge / Firefox). For local development: `npm run build` then open `_site/cv/<filename>.html`. For a quick preview without building: use any local HTTP server pointing at `src/cv/` and navigate to `http://localhost:<port>/<filename>.html`.
2. `Ctrl+P` (Windows) or `Cmd+P` (Mac) → Destination: **Save as PDF**.
3. Settings: A4, Default margins, **Background graphics ON** (preserves accent bars, pills, and the impact-stat outlines), Scale: Default.
4. Save:
   - 2-page variant (A or C) → save over `src/cv/Hussain_Gaddal_CV.pdf`
   - 1-page variant (D or E) → save over `src/cv/Hussain_Gaddal_CV_compact.pdf`
5. Verify page count matches expectation:
   - A and C should land on **exactly 2 pages**, with Education ending page 1 and Featured Projects starting page 2 (no orphaned single line).
   - D and E should land on **exactly 1 page**, with Certifications as the last block.
6. Verify text is selectable in the saved PDF (Ctrl+A → Ctrl+C → paste somewhere). All text should copy cleanly. If anything copies as garbled characters or boxes, the font didn't embed — re-export with a different browser.

## ATS compatibility

All four variants are designed to pass automated resume screeners (Workday, Greenhouse, Lever, Taleo, iCIMS, BambooHR, Bullhorn). What makes them ATS-friendly:

- **Single-column layout** — text flows linearly so the parser reads sections in the right order.
- **Standard section names** — Professional Summary, Skills, Work Experience, Education, Featured Projects, Certifications, Languages. ATS expects exactly these labels.
- **Selectable text** — never images of text. PDFs exported from Chrome embed fonts and stay selectable.
- **Standard date format** — `Mar 2022 – Present | Riyadh, Saudi Arabia`. Parsers grab the date range and location.
- **Top-of-document contact info** — email, phone, LinkedIn, GitHub, portfolio. Resume parsers grab these in the first scan.
- **Skills section lists every keyword** — Kotlin, Jetpack Compose, KMP, CMP, Spring Boot, Ktor, Clean Architecture, MVI, Bitrise, Room, PostgreSQL all appear by name, no abbreviations only.
- **Tech pills (A, C) parse as inline text** — when the PDF is read, "Kotlin Jetpack Compose Room Ktor" reads as a sequence per project, which actually helps ATS keyword matching.
- **Impact stat block (E) parses as text** — "40% Crash drop 25% Faster delivery..." reads inline. Slightly odd in plain-text extraction but ATS parses it fine.
- **No tables-for-layout, no headers/footers with key info, no graphical text, no multi-column layouts** that would scramble parse order.

Quick ATS check (optional): paste the saved PDF into <https://www.jobscan.co/resume-checker> to see how an ATS reads it. The free tier shows the parsed text and flags any ordering issues.

## What lives where (CV vs other surfaces)

The CV is denser than LinkedIn or the website. It also has different audience expectations: recruiters scanning a 1-page PDF in 6 seconds.

| Element | CV | LinkedIn | Site About |
|---|---|---|---|
| Summary paragraph | 4–5 lines, dense | 3–4 paragraphs | 2 paragraphs |
| Metrics (40/25/15/50/30) | Bulleted under role (E surfaces them as a stat block too) | Bulleted under role | Bulleted under role |
| Project descriptions | 1–2 lines + tech (single-line in compact) | Tier 1 full / Tier 2 1 line | 1-line description + detail page |
| Project count | 6 (featured only) | 12 (featured + concise) | 12 (filterable grid) |
| Certifications | 8 (full list — grouped by year inline in compact) | Match the 8 | 6 (curated) |
| Researcher role | Nested under Kay Technology | Same | Same |
| Languages | One line at the bottom (in header in compact) | Skills section | Not shown |

If you cut a row from one surface, decide whether to keep it on the others — they don't have to mirror each other identically.

## Send the CV externally

When emailing or messaging the CV:

- **Prefer the live URL** if the recipient might want to share or revisit (it's always up to date).
- **Attach the PDF** if it's a formal application that wants a file.
- **Pick the right variant for the situation:**
  - Senior role, achievement-driven recruiter pitch → **E** (compact + impact block)
  - Standard 2-page submission → **A** (polished default)
  - Conservative target (gov/finance) → **C** (lighter visual upgrade)
  - 1-page form upload limit → **D** (clean compact)
- The CV's first contact line already points at portfolio + LinkedIn + GitHub, so a single CV gives recipients the full picture.
