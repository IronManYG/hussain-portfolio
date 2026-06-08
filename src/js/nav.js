// Riyadh Terra nav behaviours: a back-to-top FAB and section scroll-spy that
// highlights the active in-page nav link. Page-level active state (About /
// Projects) is rendered server-side in the layout; this only handles the
// scroll-driven bits. Vanilla JS, no GSAP.
export function initNav() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const fab = document.getElementById('back-to-top');

    // Nav links with data-spy="<sectionId>" track that section. Sections that
    // don't exist on the page are skipped (e.g. #projects is homepage-only).
    const watched = Array.from(document.querySelectorAll('[data-spy]'))
        .map(link => ({ link, el: document.getElementById(link.getAttribute('data-spy')) }))
        .filter(item => item.el);

    const setActive = (id) => {
        watched.forEach(({ link, el }) => link.classList.toggle('is-active', !!id && el.id === id));
    };

    let ticking = false;
    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const y = window.scrollY;

            // Back-to-top FAB
            if (fab) fab.classList.toggle('is-visible', y > 500);

            // Scroll-spy: the active section is the last one whose top has
            // crossed the reading line (~40% down the viewport). Near the very
            // bottom, force the last watched section so a short footer still
            // registers. Near the very top nothing is "current".
            if (watched.length) {
                const line = window.innerHeight * 0.4;
                const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 2;
                let current = null;
                if (atBottom) {
                    current = watched[watched.length - 1].el.id;
                } else if (y >= 200) {
                    watched.forEach(({ el }) => {
                        if (el.getBoundingClientRect().top <= line) current = el.id;
                    });
                }
                setActive(current);
            }

            ticking = false;
        });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    if (fab) {
        fab.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
        });
    }
}
