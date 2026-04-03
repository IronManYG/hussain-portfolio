export function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

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
}
