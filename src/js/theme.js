export function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    const updateThemeIcon = () => {
        if (!themeIcon || !themeToggleBtn) return;
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

    // Follow system preference until the user makes an explicit choice
    if (window.matchMedia) {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (e) => {
            if (localStorage.getItem('theme')) return;
            document.documentElement.classList.toggle('dark', e.matches);
            updateThemeIcon();
        };
        if (mql.addEventListener) mql.addEventListener('change', onChange);
        else if (mql.addListener) mql.addListener(onChange);
    }
}
