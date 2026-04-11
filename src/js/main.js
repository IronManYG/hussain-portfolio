import { initTheme } from './theme.js';
import { initMenu } from './menu.js';
import { initAnimations } from './animations.js';
import { initAnimeAnimations } from './anime-animations.js';

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Theme
    initTheme();

    // 2. Initialize Mobile Menu
    initMenu();

    // 3. Set Dynamic Copyright Year
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) {
        yearEl.textContent = "2025–2026";
    }

    // 4. GSAP Plugins
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // 5. Initialize GSAP Animations
    initAnimations();

    // 6. Initialize Anime.js Animations
    // One rAF gives the deferred CDN scripts (gsap, anime.min.js) time to
    // execute before our module runs. anime.set() inside initAnimeAnimations
    // handles the initial invisible state entirely in JS.
    requestAnimationFrame(() => {
        initAnimeAnimations();
    });


    // 7. PWA Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('SW Registered', reg))
                .catch(err => console.log('SW Failed', err));
        });
    }
});
