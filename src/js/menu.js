export function initMenu() {
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

    // Accessibility: ESC to close Mobile Menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileMenu();
    });
}
