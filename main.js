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
    
    // Parallax effect for header
    const header = document.querySelector('header');
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
});
