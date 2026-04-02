# Hussain Gaddal — Portfolio

> Personal portfolio website for **Hussain Gaddal**, Senior Android Developer.

🌐 **Live:** [hussaingaddal.com](#) · 🇸🇦 **Arabic:** [hussaingaddal.com/ar](#)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 + Semantic Elements |
| Styling | Tailwind CSS (CDN) + Custom CSS Variables |
| Animation | GSAP + ScrollTrigger |
| Icons | Phosphor Icons |
| Fonts | Inter · Cairo · JetBrains Mono |

## Project Structure

```
hussain-portfolio/
├── index.html              # English homepage
├── main.js                 # Animations, mobile menu, active nav
├── styles.css              # Custom styles + Tailwind layers
├── tailwind-config.js      # Tailwind theme (colors, fonts)
├── favicon.svg             # Custom site icon
├── ar/                     # Arabic (RTL) version
│   ├── index.html
│   ├── chirp.html
│   └── ...project pages
├── assets/
│   └── img/projects/       # App screenshots
├── cv/
│   ├── Hussain_Gaddal_CV.html   # Printable CV
│   └── Hussain_Gaddal_CV.pdf    # Downloadable CV
├── chirp.html              # Project detail pages
├── runique.html
├── echojournal.html
├── scribbledash.html
├── maktabati.html
└── qodem.html
```

## Features

- 🌗 Light/Dark mode with system preference detection
- 📱 Fully responsive with mobile hamburger menu
- 🌍 Bilingual (English + Arabic RTL)
- 🏗️ Bento grid project showcase with real screenshots
- 🎯 Active nav highlighting via scroll detection
- 📄 Downloadable CV (PDF)
- ⬆️ Floating back-to-top button
- 🔍 SEO-optimized with Open Graph + Twitter Card meta

## Development

```bash
# Serve locally
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

## License

© 2026 Hussain Gaddal. All rights reserved.
