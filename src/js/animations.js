export function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Initial Hero Animation - GSAP handles avatar only; text/CTAs are handled by Anime.js
    // We only run GSAP on hero-animate elements that are NOT targeted by Anime.js
    const heroElements = document.querySelectorAll('.hero-animate:not(.hero-headline):not(.hero-badge-anime):not(.hero-sub-anime):not(.hero-ctas-anime)');
    if (heroElements.length > 0) {
        gsap.from(heroElements, {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "expo.out",
            delay: 0.2
        });
    }

    // Bento Grid Animation — handled exclusively by Anime.js (anime-animations.js)
    // GSAP was removed here to prevent dual-animation conflict causing card overlap.



    // Section Fade Ins — only on main index page.
    // Subpages are handled exclusively by Anime.js (initSubpageFadeSections)
    // to avoid double-animation on the CV / project detail pages.
    const isMainPage = !!document.querySelector('.hero-headline');
    if (isMainPage) {
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
    }
    
    // Parallax effect for main index header only 
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

    // Active Nav Link Highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
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
        mobileNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Back to Top Button
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

    // Skill Bar Animations
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

    // Magnetic Buttons
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

    initHeroCanvas();
}

function initHeroCanvas() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    container.innerHTML = '';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let W, H, mouse = { x: -9999, y: -9999 };

    function resize() {
        W = canvas.width = container.offsetWidth;
        H = canvas.height = container.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Track mouse relative to the container
    const header = container.closest('header') || document.body;
    header.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    header.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

    // ─── LAYER 1: Kotlin/Android Glyph Rain ───────────────────────────────
    const GLYPHS = ['K','O','T','L','I','N','C','O','M','P','O','S','E','A','N','D','R','O','I','D','K','M','P','1','0'];
    const COL_W = 22;
    let cols, drops;
    function resetRain() {
        cols = Math.max(1, Math.floor(W / COL_W));
        drops = Array.from({ length: cols }, () => Math.random() * -40);
    }
    resetRain();
    window.addEventListener('resize', resetRain);

    // ─── LAYER 2: Constellation Network ───────────────────────────────────
    const DOT_COUNT = 55;
    const dots = Array.from({ length: DOT_COUNT }, () => ({
        x: Math.random() * 1, // normalized [0,1]
        y: Math.random() * 1,
        vx: (Math.random() - 0.5) * 0.0004,
        vy: (Math.random() - 0.5) * 0.0004,
        size: Math.random() * 1.6 + 0.8,
        hue: Math.random() > 0.6 ? 'orange' : 'purple',
    }));

    let raf;
    function draw() {
        ctx.clearRect(0, 0, W, H);
        const isDark = document.documentElement.classList.contains('dark');

        // ── Rain layer ──
        const rainAlpha  = isDark ? 0.045 : 0.02;
        const rainColor  = isDark ? `rgba(127,82,255,${rainAlpha})` : `rgba(127,82,255,${rainAlpha})`;
        ctx.font = `bold ${COL_W - 4}px "JetBrains Mono", monospace`;
        ctx.fillStyle = rainColor;
        for (let i = 0; i < cols; i++) {
            const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            ctx.fillText(char, i * COL_W, drops[i] * COL_W);
            if (drops[i] * COL_W > H && Math.random() > 0.975) drops[i] = 0;
            drops[i] += 0.35;
        }

        // ── Constellation layer ──
        const purple = isDark ? [127, 82, 255] : [127, 82, 255];
        const orange = isDark ? [231, 98, 79]  : [231, 98, 79];
        const CON_DIST = 0.18; // normalized distance threshold

        for (let d of dots) {
            // Gentle mouse repulsion
            const dx = d.x * W - mouse.x;
            const dy = d.y * H - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const repelRadius = 120;
            if (dist < repelRadius) {
                const force = (repelRadius - dist) / repelRadius * 0.0003;
                d.vx += (dx / dist) * force;
                d.vy += (dy / dist) * force;
            }

            // Speed cap
            const speed = Math.sqrt(d.vx * d.vx + d.vy * d.vy);
            if (speed > 0.0008) { d.vx *= 0.0008 / speed; d.vy *= 0.0008 / speed; }

            d.x = (d.x + d.vx + 1) % 1;
            d.y = (d.y + d.vy + 1) % 1;

            // Draw dot
            const [r, g, b] = d.hue === 'purple' ? purple : orange;
            const dotAlpha = isDark ? 0.65 : 0.45;
            ctx.beginPath();
            ctx.arc(d.x * W, d.y * H, d.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${dotAlpha})`;
            ctx.fill();
        }

        // Draw lines between nearby dots
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const dx = dots[i].x - dots[j].x;
                const dy = dots[i].y - dots[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CON_DIST) {
                    const lineAlpha = (1 - dist / CON_DIST) * (isDark ? 0.2 : 0.1);
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x * W, dots[i].y * H);
                    ctx.lineTo(dots[j].x * W, dots[j].y * H);
                    ctx.strokeStyle = `rgba(127,82,255,${lineAlpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        raf = requestAnimationFrame(draw);
    }
    draw();

    // Cleanup on page unload
    window.addEventListener('unload', () => cancelAnimationFrame(raf));
}
