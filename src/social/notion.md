# Notion — embed redirect URLs

The old Notion site stays live so legacy CV PDFs (which link to Notion sections) keep working. Each Notion section should now contain a single `/embed` block pointing at the matching redirect page on the new portfolio.

The redirect pages are bilingual (English left / Arabic right) and have one button per language. Buttons use `target="_top"` so the click escapes the Notion iframe and opens the new portfolio in the user's main window.

**Click the copy icon in the top-right of any code block below to copy that URL.**

## How to embed in Notion

1. Open the Notion page you want to redirect.
2. Delete the existing content (or keep a small intro line above the embed).
3. Type `/embed` and select "Embed".
4. Paste the URL from below and confirm.
5. Drag the embed handle to make it about 600px tall — that's enough to show the bilingual card without scrolling.

## Main sections (6)

### Home / cover page

```text
https://ironmanyg.github.io/hussain-portfolio/notion/home/
```

### Projects index

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/
```

### CV

```text
https://ironmanyg.github.io/hussain-portfolio/notion/cv/
```

### About / bio

```text
https://ironmanyg.github.io/hussain-portfolio/notion/about/
```

### Experience

```text
https://ironmanyg.github.io/hussain-portfolio/notion/experience/
```

### Contact

```text
https://ironmanyg.github.io/hussain-portfolio/notion/contact/
```

## Per-project pages (12)

Each Notion project page gets its own redirect at `/notion/projects/<slug>/`. Slugs auto-generate from `src/_data/projects.json`.

### Chirp

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/chirp/
```

### Runique

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/runique/
```

### ScribbleDash

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/scribbledash/
```

### EchoJournal

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/echojournal/
```

### Qodem

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/qodem/
```

### Maktabati

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/maktabati/
```

### Asteroid Radar

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/asteroid-radar/
```

### PlantPediaZ

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/plantpediaz/
```

### Todo-Maps

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/todo-maps/
```

### Sifr

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/sifr/
```

### Translator KMM

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/translator-kmm/
```

### ND940C3-Project

```text
https://ironmanyg.github.io/hussain-portfolio/notion/projects/nd940c3/
```

## Edge cases

- **Auto-redirect was rejected on purpose.** Notion iframes are sandboxed; `window.location` redirects to a different origin will fail silently. The button approach (with `target="_top"`) is the only one that reliably escapes the iframe.
- **Mobile in Notion** stacks the EN/AR sides vertically (under 720px), so the embed remains readable on narrow Notion mobile views.
- **Adding new sections.** To add a new redirect, edit `src/_data/notion_redirects.json`, rebuild (`npm run build`), and embed the new URL. No template changes.
- **Adding new projects.** New entries in `src/_data/projects.json` automatically generate matching redirect pages on the next build.
