export function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const root = document.documentElement;

    // Project thumbnails are a <picture> whose dark <source> is keyed on the OS
    // preference, so the browser downloads only the matching file. When an
    // explicit choice disagrees with the OS, that source has to be re-pointed:
    // rewriting img.src would do nothing, because a matching <source> always
    // wins over it. 'all' forces the dark file, 'not all' never matches.
    const syncThemeImages = (isDark) => {
        document.querySelectorAll('source[data-thumb-dark]').forEach((source) => {
            source.media = isDark ? 'all' : 'not all';
        });
    };

    // Swap the theme with transitions suppressed for one frame, so colors snap
    // instantly. Without this, the card/page background (300ms) lags the name
    // color (150ms) and the project names briefly wash out — a visible flicker.
    const swapTheme = (toDark) => {
        root.classList.add('theme-switching');
        const isDark = typeof toDark === 'boolean'
            ? root.classList.toggle('dark', toDark)
            : root.classList.toggle('dark');
        syncThemeImages(isDark);
        // Force a reflow so the no-transition state is committed before paint…
        void root.offsetWidth;
        // …then restore transitions after the new colors have painted.
        requestAnimationFrame(() => requestAnimationFrame(() => {
            root.classList.remove('theme-switching');
        }));
        return isDark;
    };

    // Labels come from data-label-* on the button so each layout supplies
    // its own language (the Arabic pages must not get English labels).
    const updateThemeIcon = () => {
        if (!themeIcon || !themeToggleBtn) return;
        if (document.documentElement.classList.contains('dark')) {
            themeIcon.classList.remove('ph-moon');
            themeIcon.classList.add('ph-sun');
            themeToggleBtn.setAttribute('aria-label', themeToggleBtn.dataset.labelLight || 'Switch to Light Mode');
        } else {
            themeIcon.classList.remove('ph-sun');
            themeIcon.classList.add('ph-moon');
            themeToggleBtn.setAttribute('aria-label', themeToggleBtn.dataset.labelDark || 'Switch to Dark Mode');
        }
    };

    // The <source> media queries above resolved against the OS preference while
    // the page parsed. If the theme the head script settled on disagrees with
    // it — an explicit choice saved from a previous visit — the thumbnails are
    // showing the wrong variant, so correct them once. Visitors whose choice
    // matches the OS (and everyone who never toggled) stay on the pure-CSS
    // path and never fetch a second image.
    const osPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (root.classList.contains('dark') !== !!osPrefersDark) {
        syncThemeImages(root.classList.contains('dark'));
    }

    if (themeToggleBtn && themeIcon) {
        updateThemeIcon();

        themeToggleBtn.addEventListener('click', () => {
            const isDark = swapTheme();
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeIcon();
        });
    }

    // Follow system preference until the user makes an explicit choice
    if (window.matchMedia) {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (e) => {
            if (localStorage.getItem('theme')) return;
            swapTheme(e.matches);
            updateThemeIcon();
        };
        if (mql.addEventListener) mql.addEventListener('change', onChange);
        else if (mql.addListener) mql.addListener(onChange);
    }
}
