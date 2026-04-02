# Hussain Gaddal — Portfolio

> Personal portfolio website for **Hussain Gaddal**, Senior Android Developer with 4+ years of experience building production-grade mobile applications.

🌐 **English:** [ironmanyg.github.io/hussain-portfolio](https://IronManYG.github.io/hussain-portfolio/)
🇸🇦 **العربية:** [ironmanyg.github.io/hussain-portfolio/ar](https://IronManYG.github.io/hussain-portfolio/ar/)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Markup** | HTML5 + Semantic Elements |
| **Styling** | Tailwind CSS (CDN) + Custom CSS Variables |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Animation** | GSAP + ScrollTrigger |
| **Icons** | Phosphor Icons |
| **Fonts** | Inter · Cairo · JetBrains Mono |

## 📁 Project Structure

```
hussain-portfolio/
├── index.html                  # English homepage
├── main.js                     # UI logic (animations, mobile menu, active nav)
├── styles.css                  # Custom component styles + Tailwind layers
├── tailwind-config.js          # Tailwind theme (custom colors & fonts)
├── favicon.svg                 # Custom site icon
│
├── chirp.html                  # ─┐
├── runique.html                #  │
├── echojournal.html            #  │ Project detail pages (English)
├── scribbledash.html           #  │
├── maktabati.html              #  │
├── qodem.html                  # ─┘
│
├── ar/                         # Arabic version (full RTL support)
│   ├── index.html              #   Arabic homepage
│   ├── chirp.html              #   ─┐
│   ├── runique.html            #    │ Project detail pages (Arabic)
│   ├── echojournal.html        #    │
│   ├── scribbledash.html       #    │
│   ├── maktabati.html          #    │
│   └── qodem.html              #   ─┘
│
├── assets/
│   └── img/projects/           # High-res app screenshots
│
├── cv/
│   ├── Hussain_Gaddal_CV.html  # Professional web CV
│   └── Hussain_Gaddal_CV.pdf   # Downloadable PDF
│
├── scripts/                    # Development & automation scripts
│   ├── translate_content.py    #   English → Arabic content translation
│   ├── inject_cv.py            #   CV data injection into portfolio
│   ├── fix_projects.py         #   Project page fixes
│   └── fix_structure_nav.py    #   Navigation structure fixes
│
├── README.md
└── .gitignore
```

## ✨ Features

- **🌗 Adaptive Theme** — Automatic detection of system preference (Light / Dark) with a manual toggle.
- **📱 Touch-First Design** — Fully responsive hamburger menu with slide-in panel and scroll lock.
- **🌍 Bilingual Architecture** — Seamless English ↔ Arabic transition with dedicated RTL layouts.
- **🏗️ Bento Grid Showcase** — High-impact project cards with real app screenshots and hover interactions.
- **🎯 Intelligent Navigation** — ScrollTrigger-powered active section highlighting while scrolling.
- **📄 CV Integration** — Dedicated career section with an optimized, downloadable PDF CV.
- **⬆️ Smooth Scroll** — Dynamic "Back to Top" button and smooth easing for section jumps.
- **🔍 SEO & Social** — Open Graph and Twitter Card metadata for professional social sharing.

## 🧭 Site Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **About** | Introduction and professional summary |
| 2 | **Experience** | Work history and career timeline |
| 3 | **Projects** | Bento grid showcase of Android apps |
| 4 | **Expertise** | Technical skills and competencies |
| 5 | **Certifications** | Professional certifications and courses |
| 6 | **Contact** | Footer with contact links and social profiles |

## 🚀 Development

### Local Preview

```bash
# Start a local server
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

### Deploying to GitHub Pages

This project is configured for **GitHub Pages** (deploys from `main` branch). To update the live site:

```bash
git add .
git commit -m "feat: description of changes"
git push origin main
```

Changes go live within ~1 minute.

---

## 📝 License

&copy; 2026 Hussain Gaddal. All rights reserved.
