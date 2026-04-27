document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-wrapper');
    const emptyEl = document.getElementById('projects-empty');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const matchesFilter = (filter, tags) => {
        if (filter === 'all') return true;
        if (filter === 'kmp') return tags.some(t => t.includes('kotlin multiplatform') || t === 'kmm' || t === 'kmp');
        if (filter === 'cmp') return tags.some(t => t.includes('compose multiplatform') || t === 'cmp');
        if (filter === 'firebase') return tags.some(t => t.includes('firebase'));
        if (filter === 'wear os') return tags.some(t => t === 'wear os');
        if (filter === 'android') return !tags.some(t => t.includes('multiplatform') || t === 'kmm' || t === 'kmp');
        return tags.some(t => t.includes(filter));
    };

    const updateFilterCounts = () => {
        filterButtons.forEach(btn => {
            const filter = btn.getAttribute('data-filter');
            let count = 0;
            projectCards.forEach(card => {
                const tags = (card.getAttribute('data-tags') || '').split(',').map(t => t.trim());
                if (matchesFilter(filter, tags)) count++;
            });
            const countEl = btn.querySelector('.filter-count');
            if (countEl) countEl.textContent = count;
        });
    };

    const applyFilter = (filterValue) => {
        let visibleCount = 0;
        projectCards.forEach(card => {
            const cardTags = (card.getAttribute('data-tags') || '').split(',').map(t => t.trim());
            const matches = matchesFilter(filterValue, cardTags);
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
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            animateAndApply(button.getAttribute('data-filter'));
        });
    });
});
