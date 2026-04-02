document.addEventListener("DOMContentLoaded", (event) => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    const heroElements = document.querySelectorAll('.hero-animate');
    if (heroElements.length > 0) {
        gsap.from(heroElements, {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });
    }

    // Bento Grid Animation
    const bentoCards = document.querySelectorAll('.bento-animate');
    if (bentoCards.length > 0) {
        gsap.from(bentoCards, {
            scrollTrigger: {
                trigger: "#projects",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });
    }

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

    // ── Dynamic Copyright Year ─────────────────────────────
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
