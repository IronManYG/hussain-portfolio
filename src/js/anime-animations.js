/**
 * anime-animations.js
 * ─────────────────────────────────────────────────────────────────────────────
 * All Anime.js–powered animations for Hussain Gaddal's portfolio.
 * 
 * Five enhancement areas:
 *  1. Hero staggered word reveal (spring entrance)
 *  2. Bento card 2-D grid stagger (radial from center)
 *  3. "Available" badge — custom SVG ripple pulse
 *  4. About section code block — line-by-line scanline reveal
 *  5. Expertise cards — icon bounce → border glow → text slide choreography
 */

export function initAnimeAnimations() {
    if (typeof anime === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // ─── Main page animations ─────────────────────────────────────────────────
    initHeroWordReveal();
    initBentoGridReveal();
    initAvailableBadge();
    initCodeBlockReveal();
    initExpertiseCards();

    // ─── Subpage animations (project detail pages & CV page) ─────────────────
    initSubpageHero();
    initSubpageFadeSections();
    initSubpageTechGrid();
}


// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO STAGGERED WORD REVEAL
//    Splits each hero headline element into words, then staggers them in
//    with a spring easing so each word bounces into place independently.
// ─────────────────────────────────────────────────────────────────────────────
function initHeroWordReveal() {
    const heroHeadline = document.querySelector('.hero-headline');
    if (!heroHeadline) return;

    // Wrap each word in a span, preserving inner HTML spans (gradient-text spans)
    wrapWordsInSpans(heroHeadline);

    const words = heroHeadline.querySelectorAll('.anime-word');
    if (!words.length) return;

    // Ensure parent is visible — only the child word-spans animate from invisible.
    // This guards against any CSS that might set opacity:0 on the parent itself.
    heroHeadline.style.opacity = '1';

    // Set initial hidden state on the individual word-spans
    anime.set(words, { opacity: 0, translateY: 55, rotateX: -20 });


    // Delay slightly so GSAP hero fade doesn't conflict
    setTimeout(() => {
        anime({
            targets: words,
            opacity: [0, 1],
            translateY: [55, 0],
            rotateX: [-20, 0],
            easing: 'spring(1, 72, 10, 0)',
            delay: anime.stagger(75, { start: 300 }),
        });
    }, 150);

    // Animate the badge and subtext with a clean slide-up after headline
    const heroBadge = document.querySelector('.hero-badge-anime');
    const heroSub = document.querySelector('.hero-sub-anime');
    const heroCtas = document.querySelector('.hero-ctas-anime');

    const lateTargets = [heroBadge, heroSub, heroCtas].filter(Boolean);
    if (lateTargets.length) {
        anime.set(lateTargets, { opacity: 0, translateY: 24 });
        anime({
            targets: lateTargets,
            opacity: [0, 1],
            translateY: [24, 0],
            easing: 'easeOutExpo',
            duration: 900,
            delay: anime.stagger(120, { start: 700 }),
        });
    }
}

/**
 * Wraps text nodes within an element so that each word becomes
 * <span class="anime-word" style="display:inline-block">word</span>,
 * while preserving existing child elements (e.g. <span class="gradient-text">).
 */
function wrapWordsInSpans(el) {
    const nodes = Array.from(el.childNodes);
    el.innerHTML = '';

    nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const words = node.textContent.split(/(\s+)/);
            words.forEach(part => {
                if (/\s+/.test(part)) {
                    el.appendChild(document.createTextNode(part));
                } else if (part.length) {
                    const span = document.createElement('span');
                    span.className = 'anime-word';
                    span.style.display = 'inline-block';
                    span.textContent = part;
                    el.appendChild(span);
                }
            });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // For child elements (like gradient-text span), wrap the whole element
            const wrapper = document.createElement('span');
            wrapper.className = 'anime-word';
            wrapper.style.display = 'inline-block';
            wrapper.appendChild(node.cloneNode(true));
            el.appendChild(wrapper);
        }
    });
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. BENTO GRID 2-D STAGGER — radial from center
//    Uses IntersectionObserver to fire once. The 2-D grid stagger from Anime.js
//    creates an organic "spreading out" reveal far more dynamic than a simple
//    index-based delay.
// ─────────────────────────────────────────────────────────────────────────────
function initBentoGridReveal() {
    const grid = document.querySelector('.bento-grid-anime');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.bento-animate'));
    if (!cards.length) return;

    anime.set(cards, { opacity: 0, translateY: 48, scale: 0.96 });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Determine grid columns based on first card's computed position
                const cols = getGridCols(grid);

                anime({
                    targets: cards,
                    opacity: [0, 1],
                    translateY: [48, 0],
                    scale: [0.96, 1],
                    easing: 'easeOutExpo',
                    duration: 750,
                    delay: anime.stagger(80, {
                        grid: [cols, Math.ceil(cards.length / cols)],
                        from: 'center',
                    }),
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(grid);
}

function getGridCols(gridEl) {
    const style = window.getComputedStyle(gridEl);
    const cols = style.gridTemplateColumns.split(' ').length;
    return cols > 1 ? cols : 3; // fallback
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. "AVAILABLE" BADGE — SVG RIPPLE PULSE
//    Replaces the plain CSS animate-pulse with a custom double-ring ripple
//    that radiates outward, giving it a more technical "radar ping" feeling.
// ─────────────────────────────────────────────────────────────────────────────
function initAvailableBadge() {
    const dot = document.querySelector('.available-dot');
    if (!dot) return;

    const wrapper = document.createElement('span');
    wrapper.style.cssText = 'position:relative;display:inline-flex;align-items:center;justify-content:center;width:8px;height:8px;flex-shrink:0;';

    dot.parentNode.insertBefore(wrapper, dot);
    wrapper.appendChild(dot);

    dot.classList.remove('animate-pulse');
    dot.style.cssText = 'position:relative;z-index:2;display:block;width:8px;height:8px;border-radius:50%;background:#22c55e;flex-shrink:0;';

    for (let i = 0; i < 2; i++) {
        const ring = document.createElement('span');
        ring.className = 'badge-ripple-ring';
        ring.style.cssText = 'position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:50%;background:#22c55e;opacity:0;pointer-events:none;';
        wrapper.appendChild(ring);
    }

    const rings = wrapper.querySelectorAll('.badge-ripple-ring');

    function pulseRipple() {
        anime({
            targets: Array.from(rings),
            scale: [1, 3.5],
            opacity: [0.55, 0],
            easing: 'easeOutExpo',
            duration: 1800,
            delay: anime.stagger(500),
            complete: pulseRipple,
        });
    }

    anime({
        targets: dot,
        opacity: [1, 0.5, 1],
        easing: 'easeInOutSine',
        duration: 1600,
        loop: true,
    });

    setTimeout(pulseRipple, 1000);

}


// ─────────────────────────────────────────────────────────────────────────────
// 4. CODE BLOCK SCANLINE REVEAL
//    The About section code snippet reveals line by line, simulating a live
//    IDE typeout. Each <span> line slides in from the left with opacity.
// ─────────────────────────────────────────────────────────────────────────────
function initCodeBlockReveal() {
    const codeBlock = document.querySelector('.code-block-anime');
    if (!codeBlock) return;

    // Wrap each line (split by newline rendered in <pre>) into spans
    const pre = codeBlock.querySelector('pre code');
    if (!pre) return;

    // Split rendered lines by line-break (each \n in the text)
    const rawHTML = pre.innerHTML;
    const lines = rawHTML.split('\n');

    if (lines.length <= 1) return; // nothing to animate

    pre.innerHTML = lines
        .map(line => `<span class="code-line" style="display:block;overflow:hidden"><span class="code-line-inner" style="display:block">${line || '&nbsp;'}</span></span>`)
        .join('');

    const lineInners = pre.querySelectorAll('.code-line-inner');
    anime.set(lineInners, { translateX: -18, opacity: 0 });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: lineInners,
                    translateX: [-18, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 600,
                    delay: anime.stagger(55, { start: 200 }),
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.25 });

    observer.observe(codeBlock);
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. EXPERTISE CARD CHOREOGRAPHY
//    On scroll into view, each card fires a mini timeline:
//    icon bounces → card border glows → text slides in.
//    Uses a staggered IntersectionObserver per card.
// ─────────────────────────────────────────────────────────────────────────────
function initExpertiseCards() {
    const cards = document.querySelectorAll('.expertise-card-anime');
    if (!cards.length) return;

    cards.forEach((card, i) => {
        const icon = card.querySelector('.expertise-icon-anime');
        const title = card.querySelector('.expertise-title-anime');
        const body = card.querySelector('.expertise-body-anime');

        const animatables = [icon, title, body].filter(Boolean);
        anime.set(animatables, { opacity: 0, translateY: 20 });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const tl = anime.timeline({
                        easing: 'easeOutExpo',
                    });

                    if (icon) {
                        tl.add({
                            targets: icon,
                            opacity: [0, 1],
                            translateY: [20, 0],
                            scale: [0.7, 1.1, 1],
                            easing: 'spring(1, 80, 10, 0)',
                            duration: 700,
                        });
                    }

                    if (title) {
                        tl.add({
                            targets: title,
                            opacity: [0, 1],
                            translateY: [16, 0],
                            duration: 500,
                        }, '-=400');
                    }

                    if (body) {
                        tl.add({
                            targets: body,
                            opacity: [0, 1],
                            translateY: [12, 0],
                            duration: 450,
                        }, '-=300');
                    }

                    // Border glow pulse after content reveals
                    tl.add({
                        targets: card,
                        boxShadow: [
                            '0 0 0px 0px rgba(127,82,255,0)',
                            '0 0 18px 3px rgba(127,82,255,0.35)',
                            '0 0 0px 0px rgba(127,82,255,0)',
                        ],
                        easing: 'easeInOutSine',
                        duration: 900,
                    }, '-=200');

                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });

        observer.observe(card);
    });
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. SUBPAGE HERO — project detail & CV/About page header entrance
//    Targets: header.fade-section > *  (first section on the page).
//    Staggers in: tech pills, h1, description paragraph — spring bounce.
// ─────────────────────────────────────────────────────────────────────────────
function initSubpageHero() {
    // Only run on subpages (no .hero-headline means it's not the main index)
    if (document.querySelector('.hero-headline')) return;

    const pageHeader = document.querySelector('header.fade-section, .page-header-anime, div.fade-section:first-of-type');
    if (!pageHeader) return;

    // Collect direct children to stagger in
    const children = Array.from(pageHeader.children);
    if (!children.length) return;

    anime.set(children, { opacity: 0, translateY: 32 });

    anime({
        targets: children,
        opacity: [0, 1],
        translateY: [32, 0],
        easing: 'spring(1, 68, 12, 0)',
        delay: anime.stagger(90, { start: 100 }),
    });

    // Tech pills get a separate pop-in
    const pills = document.querySelectorAll('.tech-pill');
    if (pills.length) {
        anime.set(pills, { opacity: 0, scale: 0.7 });
        anime({
            targets: pills,
            opacity: [0, 1],
            scale: [0.7, 1],
            easing: 'spring(1, 80, 14, 0)',
            delay: anime.stagger(55, { start: 60 }),
        });
    }

    // Timeline node markers on CV/About page
    const timelineNodes = document.querySelectorAll('.timeline-node-anime');
    if (timelineNodes.length) {
        anime.set(timelineNodes, { opacity: 0, scale: 0 });
        anime({
            targets: timelineNodes,
            opacity: [0, 1],
            scale: [0, 1.2, 1],
            easing: 'spring(1, 80, 10, 0)',
            delay: anime.stagger(200, { start: 400 }),
        });
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. SUBPAGE FADE SECTIONS — scroll-triggered stagger for .fade-section blocks
//    Each .fade-section on project & CV pages slides up as it enters viewport.
//    Replaces the generic GSAP fade with a choreographed Anime.js version.
// ─────────────────────────────────────────────────────────────────────────────
function initSubpageFadeSections() {
    // Only run on subpages
    if (document.querySelector('.hero-headline')) return;

    const sections = document.querySelectorAll('.fade-section');
    if (!sections.length) return;

    sections.forEach((section, i) => {
        // Skip the first section — handled by initSubpageHero
        if (i === 0) return;

        anime.set(section, { opacity: 0, translateY: 28 });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: section,
                        opacity: [0, 1],
                        translateY: [28, 0],
                        easing: 'easeOutExpo',
                        duration: 650,
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });

        observer.observe(section);
    });
}


// ─────────────────────────────────────────────────────────────────────────────
// 8. SUBPAGE TECH GRID — bouncy entrance for tech-stack grids on project pages
//    Targets all elements with .tech-grid-item class or
//    any grid of .bg-ide-surface elements inside .fade-section.
// ─────────────────────────────────────────────────────────────────────────────
function initSubpageTechGrid() {
    if (document.querySelector('.hero-headline')) return;

    // Find any grid containing tech boxes (look for bg-ide-surface / border rounded-lg grids)
    const techGrids = document.querySelectorAll('.grid.grid-cols-2, .grid.grid-cols-1');
    techGrids.forEach(grid => {
        const items = Array.from(grid.children);
        if (!items.length) return;

        anime.set(items, { opacity: 0, translateY: 24, scale: 0.9 });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: items,
                        opacity: [0, 1],
                        translateY: [24, 0],
                        scale: [0.9, 1],
                        easing: 'spring(1, 72, 12, 0)',
                        delay: anime.stagger(55, { from: 'first' }),
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.15 });

        observer.observe(grid);
    });
}
