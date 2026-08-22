# Hussain Gaddal — Portfolio

> Personal portfolio website for **Hussain Gaddal**, Android Developer building production-grade mobile applications.

🌐 **English:** [ironmanyg.github.io/hussain-portfolio](https://IronManYG.github.io/hussain-portfolio/)
🇸🇦 **العربية:** [ironmanyg.github.io/hussain-portfolio/ar](https://IronManYG.github.io/hussain-portfolio/ar/)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **SSG** | Eleventy (11ty) v3 |
| **Templating** | Nunjucks (`.njk`) |
| **Styling** | Tailwind CSS v3 + CSS custom properties (`--rt-*` tokens) |
| **Logic** | Vanilla JavaScript, ES modules — no framework, no animation library |
| **Icons** | Phosphor Icons — self-hosted, subsetted to the icons actually used |
| **Fonts** | IBM Plex Sans Arabic · JetBrains Mono — self-hosted, subsetted per script |

Everything on the critical path is self-hosted: no CDN, no webfont round-trip, no
render-blocking third party.

## 📁 Project Structure

```
hussain-portfolio/
├── src/
│   ├── _data/                      # Global data (JSON)
│   │   ├── projects.json           #   Project entries + filter flags
│   │   ├── locales.json            #   UI strings, keyed by locale
│   │   ├── home.json               #   Homepage copy (en/ar)
│   │   └── about_page.json         #   About page copy (en/ar)
│   │
│   ├── _includes/
│   │   ├── base_rt.njk             #   ONE bilingual layout — direction, URL
│   │   │                           #   prefix, hreflang and UI strings all
│   │   │                           #   derive from `locale`
│   │   ├── pages/                  #   Shared page bodies (home, about,
│   │   │                           #   projects, project-detail)
│   │   └── components/
│   │
│   ├── css/styles.css              # Tailwind directives, @font-face, tokens,
│   │                               # component layer, RTL overrides
│   │
│   ├── js/                         # Vanilla ES modules, imported by the layout
│   │   ├── theme.js                #   Dark/light + persistence + media sync
│   │   ├── menu.js                 #   Mobile drawer + focus trap
│   │   ├── nav.js                  #   Scroll-spy + back-to-top
│   │   ├── reveal.js               #   Scroll reveals + count-up
│   │   └── projects-filter.js      #   Category filtering (Projects page)
│   │
│   ├── assets/{fonts,img}/         # Subsetted woff2, WebP screenshots, branding
│   ├── cv/                         # Downloadable PDF CVs
│   ├── *.njk                       # English routes
│   └── ar/*.njk                    # Arabic routes (same bodies, locale: "ar")
│
├── tools/
│   ├── check-icons.mjs             # Build guard: fails on an undeclared ph-*
│   └── subset-icons.mjs            # Regenerates the Phosphor woff2 subset
│
├── .github/workflows/
│   ├── ci.yml                      # Build check on every PR into main
│   └── deploy.yml                  # Build + publish to Pages on push to main
│
├── .nvmrc                          # Node version, shared by both workflows
├── .eleventy.js                    # Filters, global data, passthrough, pathPrefix
├── tailwind.config.js              # Theme tokens mapped to the CSS variables
└── _site/                          # Build output (gitignored)
```

## ✨ Notable Details

- **🌍 One layout, two languages.** `base_rt.njk` derives direction, URL prefix,
  `hreflang`, and every UI string from a single `locale` value set by the data
  cascade — the Arabic pages are not a fork.
- **🌗 No-flash theming.** An inline head script resolves the theme before first
  paint. Colours live in `--rt-*` tokens that Tailwind maps to utilities.
- **🖼️ One image per card.** Light/dark thumbnails are a `<picture>` keyed on
  `prefers-color-scheme`, so only the matching file is ever downloaded;
  `theme.js` re-points it when an explicit choice disagrees with the OS.
- **♿ Accessibility.** Skip link, visible focus rings, a real focus trap in the
  drawer, 44px touch targets, `lang` on mixed-language text, and reduced-motion
  handling that drops travel while keeping colour feedback.
- **⚡ Instant navigation.** Speculation Rules prerender same-origin pages on
  hover intent.
- **🤖 CI/CD.** Pull requests are built by `ci.yml`; merges to `main` deploy via
  `deploy.yml`.

## 🚀 Development

Requires the Node version in [`.nvmrc`](.nvmrc) (`nvm use` will pick it up).

```bash
npm ci
npm start
```

`npm start` runs Tailwind and Eleventy in watch mode. The site is served at
`http://localhost:8080/hussain-portfolio/` — note the path prefix; the bare root
redirects.

### Build

```bash
npm run build
```

Runs three steps in order:

| Script | Does |
|--------|------|
| `build:check` | Fails if any `ph-*` class in the source has no rule in `styles.css` |
| `build:css` | Compiles and minifies Tailwind into `_site/styles.css` |
| `build:eleventy` | Renders every page into `_site/` |

### Adding an icon

The Phosphor font is subsetted, so an icon class with no matching rule renders as
an **empty box** — no error, no tofu. `build:check` exists to catch exactly that.

1. Add the rule to `src/css/styles.css`, e.g.
   `.ph.ph-star:before { content: "\e6c4"; }`
2. Run `npm run icons:subset`
3. Commit `styles.css` and the regenerated `.woff2` together

`subset-icons.mjs` reads the icon set out of `styles.css`, verifies every
codepoint against the upstream package, and rebuilds the font — so a wrong
`\eXXXX` fails loudly instead of shipping the wrong glyph. It needs `fonttools`
and `brotli` (`pip3 install --user fonttools brotli`); nothing else in the build
does.

### Deployment

Direct pushes to `main` are blocked. Ship through a branch and a pull request:

```bash
git checkout -b fix/your-change
git commit -am "fix: your description"
git push -u origin fix/your-change
gh pr create
```

`ci.yml` builds the PR. Merging into `main` triggers `deploy.yml`, which
publishes `_site/` to GitHub Pages — **merge is deploy**.

---

## 📝 License

&copy; 2026 Hussain Gaddal. All rights reserved.
