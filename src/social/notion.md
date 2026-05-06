# Notion — embed redirect URLs

The old Notion site stays live so legacy CV PDFs (which link to Notion sections) keep working. Each Notion section should now contain a single `/embed` block pointing at the matching redirect page on the new portfolio.

The redirect pages are bilingual (English left / Arabic right) and have one button per language. Buttons use `target="_top"` so the click escapes the Notion iframe and opens the new portfolio in the user's main window.

## URLs to embed

Replace each Notion section's content with one `/embed` block, set the URL to the matching row below.

| Notion section | Embed URL |
|---|---|
| Home / cover page | `https://ironmanyg.github.io/hussain-portfolio/notion/home/` |
| Projects index | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/` |
| CV | `https://ironmanyg.github.io/hussain-portfolio/notion/cv/` |
| About / bio | `https://ironmanyg.github.io/hussain-portfolio/notion/about/` |
| Experience | `https://ironmanyg.github.io/hussain-portfolio/notion/experience/` |
| Contact | `https://ironmanyg.github.io/hussain-portfolio/notion/contact/` |

### Per-project pages

Each Notion project page gets its own redirect at `/notion/projects/<slug>/`. Slugs auto-generate from `src/_data/projects.json`. Current 12:

| Notion project page | Embed URL |
|---|---|
| Chirp | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/chirp/` |
| Runique | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/runique/` |
| ScribbleDash | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/scribbledash/` |
| EchoJournal | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/echojournal/` |
| Qodem | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/qodem/` |
| Maktabati | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/maktabati/` |
| Asteroid Radar | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/asteroid-radar/` |
| PlantPediaZ | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/plantpediaz/` |
| Todo-Maps | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/todo-maps/` |
| Material Calculator | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/material-calculator/` |
| Translator KMM | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/translator-kmm/` |
| ND940C3-Project | `https://ironmanyg.github.io/hussain-portfolio/notion/projects/nd940c3/` |

## How to embed in Notion

1. Open the Notion page you want to redirect.
2. Delete the existing content (or keep a small intro line above the embed).
3. Type `/embed` and select "Embed".
4. Paste the URL from the table above and confirm.
5. Drag the embed handle to make it about 600px tall — that's enough to show the bilingual card without scrolling.

## Edge cases

- **Auto-redirect was rejected on purpose.** Notion iframes are sandboxed; `window.location` redirects to a different origin will fail silently. The button approach (with `target="_top"`) is the only one that reliably escapes the iframe.
- **Mobile in Notion** stacks the EN/AR sides vertically (under 720px), so the embed remains readable on narrow Notion mobile views.
- **Adding new sections.** To add a new redirect, edit `src/_data/notion_redirects.json`, rebuild (`npm run build`), and embed the new URL. No template changes.
- **Adding new projects.** New entries in `src/_data/projects.json` automatically generate matching redirect pages on the next build.
