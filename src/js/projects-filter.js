document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-wrapper');
    const emptyEl = document.getElementById('projects-empty');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const applyFilter = (filterValue) => {
        let visibleCount = 0;
        projectCards.forEach(card => {
            const cardTags = (card.getAttribute('data-tags') || '').split(',').map(t => t.trim());
            const matches = filterValue === 'all' || cardTags.includes(filterValue);
            card.style.display = matches ? '' : 'none';
            if (matches) visibleCount++;
        });
        if (emptyEl) emptyEl.classList.toggle('hidden', visibleCount > 0);
    };

    const animateAndApply = (filterValue) => {
        if (prefersReducedMotion) {
            applyFilter(filterValue);
            return;
        }
        projectCards.forEach(card => card.classList.add('card-fade-out'));
        setTimeout(() => {
            applyFilter(filterValue);
            requestAnimationFrame(() => {
                projectCards.forEach(card => card.classList.remove('card-fade-out'));
            });
        }, 200);
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            animateAndApply(button.getAttribute('data-filter'));
        });
    });
});
