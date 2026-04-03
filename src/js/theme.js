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
}
