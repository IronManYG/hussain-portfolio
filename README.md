# Hussain Gaddal — Portfolio

> Personal portfolio website for **Hussain Gaddal**, Senior Android Developer.

🌐 **English Live Site:** [ironmanyg.github.io/hussain-portfolio/](https://IronManYG.github.io/hussain-portfolio/)
🇸🇦 **Arabic Live Site:** [ironmanyg.github.io/hussain-portfolio/ar/](https://IronManYG.github.io/hussain-portfolio/ar/)

---

## 📸 Preview

![Portfolio Hero Section](https://IronManYG.github.io/hussain-portfolio/assets/img/projects/chirp-preview.png)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Logic** | Kotlin (Strategy) · JavaScript (Frontend) |
| **Markup** | HTML5 + Semantic Elements |
| **Styling** | Tailwind CSS (CDN) + Custom CSS Variables |
| **Animation** | GSAP + ScrollTrigger |
| **Icons** | Phosphor Icons |
| **Fonts** | Inter · Cairo · JetBrains Mono |

## 📁 Project Structure

```bash
hussain-portfolio/
├── index.html              # English homepage
├── main.js                 # UI Logic (Animations, Mobile Menu, Active Nav)
├── styles.css              # Custom Component Styles + Tailwind Layers
├── tailwind-config.js      # Tailwind Theme (Custom Colors & Fonts)
├── favicon.svg             # Custom Site Icon
├── ar/                     # Arabic Section (Full RTL support)
│   ├── index.html
│   └── ...project pages
├── assets/                 # Visual Assets
│   └── img/projects/       # High-res App Screenshots
├── cv/                     # Career Documents
│   ├── Hussain_Gaddal_CV.html   # Professional Web CV
│   └── Hussain_Gaddal_CV.pdf    # Downloadable PDF
├── scripts/                # Development & Automation Scripts
│   ├── translate_content.py
│   └── inject_cv.py
├── README.md               # Documentation
└── .gitignore              # Ignored files (OS files, Scripts, etc.)
```

## ✨ Features

- **🌗 Adaptive Theme**: Automatic detection of system preference (Light/Dark mode) with a manual toggle.
- **📱 Touch-First Design**: Fully responsive hamburger menu with slide-in panel and scroll lock for mobile devices.
- **🌍 Bilingual Architecture**: Seamless English-to-Arabic transition with specialized RTL (Right-to-Left) layouts.
- **🏗️ Bento Grid Showcase**: High-impact project cards featuring real app screenshots and hover interactions.
- **🎯 Intelligent Navigation**: ScrollTrigger detection highlights your current location in the navbar while scrolling.
- **📄 Pro CV Integration**: Dedicated career section with an optimized, downloadable PDF version of your V4.1 CV.
- **⬆️ Scroll Experience**: Dynamic "Back to Top" button and smooth easing for section jumps.
- **🔍 SEO & Social**: Pre-configured with Open Graph and Twitter Card metadata for professional social sharing.

## 🚀 How to Maintenance

### Local Development
To preview changes locally:
```bash
# Start a local server
python3 -m http.server 8080

# View in browser
# http://localhost:8080
```

### Deploying Changes
This project is configured for **GitHub Pages**. To update the live site:
```bash
git add .
git commit -m "Update: [your message]"
git push origin main
```

---

## 📝 License

&copy; 2026 Hussain Gaddal. Developed with focus on architecture and clean code.
