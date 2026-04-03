# Hussain Gaddal — Portfolio

> Personal portfolio website for **Hussain Gaddal**, Senior Android Developer with 4+ years of experience building production-grade mobile applications.

🌐 **English:** [ironmanyg.github.io/hussain-portfolio](https://IronManYG.github.io/hussain-portfolio/)
🇸🇦 **العربية:** [ironmanyg.github.io/hussain-portfolio/ar](https://IronManYG.github.io/hussain-portfolio/ar/)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **SSG** | Eleventy (11ty) |
| **Templating** | Nunjucks (`.njk`) |
| **Styling** | Tailwind CSS (v3) + Custom CSS Variables |
| **Logic** | Vanilla JavaScript (ES Module Architecture) |
| **Animation** | GSAP + ScrollTrigger |
| **Icons** | Phosphor Icons |
| **Fonts** | Inter · Cairo · JetBrains Mono |

## 📁 Project Structure

```
hussain-portfolio/
├── src/
│   ├── _includes/              # Nunjucks Layouts (DRY architecture)
│   │   ├── base.njk            #   English global layout (Head/Nav/Footer)
│   │   └── ar_base.njk         #   Arabic global layout (Head/Nav/Footer)
│   │
│   ├── css/                    # Styles
│   │   └── styles.css          #   Tailwind base & custom CSS
│   │
│   ├── js/                     # Modular JavaScript
│   │   ├── main.js             #   Entry orchestrator
│   │   ├── theme.js            #   Dark Mode logic
│   │   ├── menu.js             #   Mobile menu logic
│   │   ├── animations.js       #   GSAP & Scroll logic
│   │   └── radar.js            #   Radar chart generation
│   │
│   ├── assets/                 # High-res app screenshots & avatars
│   ├── cv/                     # Professional web & PDF CV
│   │
│   ├── *.njk                   # English Pages (index, chirp, runique, etc.)
│   └── ar/
│       └── *.njk               # Arabic Pages (index, chirp, runique, etc.)
│
├── _site/                      # Compiled production build (Gitignored)
├── .github/workflows/          # GitHub Actions deployment pipelines
├── .eleventy.js                # Eleventy configuration
├── tailwind.config.js          # Tailwind theme configuration
├── package.json                # Build scripts & dependencies
└── README.md
```

## ✨ Features

- **⚡ Blazing Fast Build** — Built with Eleventy and Tailwind CSS for an incredibly optimized static site.
- **🌗 Adaptive Theme** — Automatic detection of system preference (Light / Dark) with a manual toggle.
- **📱 Touch-First Design** — Fully responsive hamburger menu with slide-in panel and scroll lock.
- **🌍 Bilingual Architecture** — Seamless English ↔ Arabic transition with dedicated RTL layouts leveraging scalable Nunjucks templates.
- **🏗️ Bento Grid Showcase** — High-impact project cards with real app screenshots and hover interactions.
- **🎯 Intelligent Navigation** — ScrollTrigger-powered active section highlighting while scrolling.
- **📄 CV Integration** — Dedicated career section with an optimized, downloadable PDF CV.
- **⬆️ Smooth Scroll** — Dynamic "Back to Top" button and smooth easing for section jumps.
- **🤖 Automated CI/CD** — Zero-touch deployments to GitHub Pages driven by GitHub Actions.

## 🚀 Development

### Local Setup & Preview

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
# Install dependencies
npm install

# Start the local development server (Tailwind & Eleventy Hot-Reloading)
npm start
```
The site will be available instantly at `http://localhost:8080/`.

### Deployment

This project uses **GitHub Actions** to automate deployments. 

To deploy changes to the live site, simply push your commits to the `main` branch:

```bash
git add .
git commit -m "feat: your description"
git push origin main
```

The GitHub Actions workflow `.github/workflows/deploy.yml` will automatically build the `_site/` directory and publish it to GitHub Pages within a minute.

---

## 📝 License

&copy; 2026 Hussain Gaddal. All rights reserved.
