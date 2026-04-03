import { initTheme } from './theme.js';
import { initMenu } from './menu.js';
import { initAnimations } from './animations.js';
import { initRadarChart } from './radar.js';

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

    // 5. Initialize Animations
    initAnimations();

    // 6. Initialize Radar Chart
    initRadarChart();

    // 7. PWA Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('SW Registered', reg))
                .catch(err => console.log('SW Failed', err));
        });
    }
});
