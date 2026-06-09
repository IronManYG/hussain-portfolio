document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('#project-filters .rt-chip[data-filter]');
    const projectCards = document.querySelectorAll('.project-card-wrapper');
    const emptyEl = document.getElementById('projects-empty');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Category filtering driven by data-* flags on each card wrapper
    // (data-multiplatform / data-production / data-opensource = "true"|"false").
    const matchesFilter = (filter, card) => {
        if (filter === 'all') return true;
        return card.getAttribute('data-' + filter) === 'true';
    };

    const updateFilterCounts = () => {
        filterButtons.forEach(btn => {
            const filter = btn.getAttribute('data-filter');
            let count = 0;
            projectCards.forEach(card => { if (matchesFilter(filter, card)) count++; });
            const countEl = btn.querySelector('.rt-chip-count');
            if (countEl) countEl.textContent = count;
        });
    };

    const applyFilter = (filterValue) => {
        let visibleCount = 0;
        projectCards.forEach(card => {
            const matches = matchesFilter(filterValue, card);
            card.style.display = matches ? '' : 'none';
            if (matches) visibleCount++;
        });
        if (emptyEl) emptyEl.classList.toggle('hidden', visibleCount > 0);
    };

    updateFilterCounts();

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
                btn.classList.remove('is-active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('is-active');
            button.setAttribute('aria-pressed', 'true');
            animateAndApply(button.getAttribute('data-filter'));
        });
    });
});
