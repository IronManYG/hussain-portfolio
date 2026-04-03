document.addEventListener("DOMContentLoaded", (event) => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation - Upgraded for Elite feel
    const heroElements = document.querySelectorAll('.hero-animate');
    if (heroElements.length > 0) {
        gsap.from(heroElements, {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "expo.out",
            delay: 0.2
        });
        
        // Split-text like effect for the main H1
        const heroTitle = document.querySelector('h1.hero-animate');
        if (heroTitle) {
            gsap.from(heroTitle, {
                scale: 0.95,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)",
                delay: 0.4
            });
        }
    }

    // Bento Grid Animation - Trigger individually for better scroll reliability
    const bentoCards = document.querySelectorAll('.bento-animate');
    bentoCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: (index % 3) * 0.1 // Subtle stagger effect across rows
        });
    });

    // Section Fade Ins (For Project Pages)
    const fadeSections = document.querySelectorAll('.fade-section');
    fadeSections.forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });
    
    // Parallax effect for main index header only (avoid clashing with fade-section on project pages)
    const header = document.querySelector('header:not(.fade-section)');
    if(header) {
        gsap.to(header, {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "+=500",
                scrub: true
            },
            y: 50,
            opacity: 0.5
        });
    }

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    const updateThemeIcon = () => {
        if (document.documentElement.classList.contains('dark')) {
            themeIcon.classList.remove('ph-moon');
            themeIcon.classList.add('ph-sun');
            themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
        } else {
            themeIcon.classList.remove('ph-sun');
            themeIcon.classList.add('ph-moon');
            themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
        }
    };

    if (themeToggleBtn && themeIcon) {
        updateThemeIcon();
        
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeIcon();
        });
    }

    // ── Mobile Menu Toggle ─────────────────────────────────
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const openMobileMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeMobileMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
    
    // Close on overlay click (outside panel)
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) closeMobileMenu();
        });
    }

    // Close on nav link click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ── Active Nav Link Highlighting ───────────────────────
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['about', 'experience', 'projects', 'expertise', 'certifications', 'contact'];
    
    sections.forEach(sectionId => {
        const sectionEl = document.getElementById(sectionId);
        if (!sectionEl) return;
        
        ScrollTrigger.create({
            trigger: sectionEl,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => setActiveNav(sectionId),
            onEnterBack: () => setActiveNav(sectionId),
        });
    });

    function setActiveNav(activeId) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        // Also highlight mobile nav
        mobileNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // ── Back to Top Button ─────────────────────────────────
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        ScrollTrigger.create({
            trigger: "body",
            start: "500px top",
            onEnter: () => backToTopBtn.classList.add('visible'),
            onLeaveBack: () => backToTopBtn.classList.remove('visible'),
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── Accessibility: ESC to close Mobile Menu ─────────────────
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileMenu();
    });

    // ── Skill Bar Animations ─────────────────────────────────
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    if (skillProgressBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const targetWidth = bar.getAttribute('data-progress') || '0%';
                    bar.style.width = targetWidth;
                    skillObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        skillProgressBars.forEach(bar => skillObserver.observe(bar));
    }

    // ── Dynamic Copyright Year ─────────────────────────────
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ── Magnetic Buttons ──────────────────────────────────
    const magneticWraps = document.querySelectorAll('.magnetic-wrap');
    magneticWraps.forEach(wrap => {
        wrap.addEventListener('mousemove', (e) => {
            const rect = wrap.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(wrap, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        wrap.addEventListener('mouseleave', () => {
            gsap.to(wrap, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // ── Advanced Radar Chart ──────────────────────────────
    const radarContainer = document.getElementById('radar-chart-container');
    if (radarContainer) {
        const skills = [
            { label: "Kotlin", value: 95 },
            { label: "Compose", value: 90 },
            { label: "Architecture", value: 92 },
            { label: "Backend", value: 75 },
            { label: "KMP/CMP", value: 85 },
            { label: "Testing", value: 88 }
        ];

        const size = 300;
        const center = size / 2;
        const radius = size * 0.4;
        const angleStep = (Math.PI * 2) / skills.length;

        let svgHtml = `<svg viewBox="0 0 ${size} ${size}" class="radar-chart">`;
        
        // Draw Grid (Hexagon/Polygon)
        for (let i = 1; i <= 4; i++) {
            const r = (radius / 4) * i;
            let points = "";
            for (let j = 0; j < skills.length; j++) {
                const x = center + r * Math.cos(j * angleStep - Math.PI / 2);
                const y = center + r * Math.sin(j * angleStep - Math.PI / 2);
                points += `${x},${y} `;
            }
            svgHtml += `<polygon points="${points}" class="radar-grid" />`;
        }

        // Draw Axes & Labels
        skills.forEach((skill, i) => {
            const x = center + radius * Math.cos(i * angleStep - Math.PI / 2);
            const y = center + radius * Math.sin(i * angleStep - Math.PI / 2);
            svgHtml += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" class="radar-axis" />`;
            
            // Label positioning
            const labelR = radius + 25;
            const lx = center + labelR * Math.cos(i * angleStep - Math.PI / 2);
            const ly = center + labelR * Math.sin(i * angleStep - Math.PI / 2);
            svgHtml += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" class="radar-label">${skill.label}</text>`;
        });

        // Draw Polygons Area (Initially empty for animation)
        svgHtml += `<polygon points="" class="radar-area" id="radar-polygon" />`;
        svgHtml += `</svg>`;
        
        radarContainer.innerHTML = svgHtml;

        // Animate Radar Area on Scroll
        ScrollTrigger.create({
            trigger: radarContainer,
            start: "top 80%",
            onEnter: () => {
                const polygon = document.getElementById('radar-polygon');
                const points = skills.map((skill, i) => {
                    const r = (radius * skill.value) / 100;
                    const x = center + r * Math.cos(i * angleStep - Math.PI / 2);
                    const y = center + r * Math.sin(i * angleStep - Math.PI / 2);
                    return `${x},${y}`;
                }).join(" ");
                
                polygon.setAttribute('points', points);
                gsap.from(polygon, {
                    scale: 0,
                    transformOrigin: "center center",
                    duration: 1.5,
                    ease: "expo.out"
                });
            }
        });
    }

    // ── PWA Service Worker ────────────────────────────────
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('SW Registered', reg))
                .catch(err => console.log('SW Failed', err));
        });
    }
});
