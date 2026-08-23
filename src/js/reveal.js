// Scroll-driven entrances: [data-reveal] fade-up and [data-countup] number
// animation. Progressive enhancement only — the CSS hidden state is gated on
// html.js + motion-OK, and count targets keep their server-rendered value, so
// no-JS / reduced-motion visitors always see the finished page.
//
// The observer runs even when reduced motion is on: .is-revealed is inert then
// (the hidden state lives behind the same media query), and tagging anyway
// means a mid-session OS toggle to motion-OK can't strand sections hidden.
export function initReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  const countEls = document.querySelectorAll('[data-countup]');
  if (!revealEls.length && !countEls.length) return;

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Eastern Arabic numerals on /ar/, Western elsewhere — matches the
  // server-rendered values the animation counts toward.
  const isAr = (document.documentElement.lang || '').startsWith('ar');
  const fmt = new Intl.NumberFormat(isAr ? 'ar-SA-u-nu-arab' : 'en-US', {
    maximumFractionDigits: 0,
  });

  const countUp = (el) => {
    const target = parseFloat(el.dataset.countup);
    if (!isFinite(target)) return;
    const suffix = el.dataset.countupSuffix || '';
    const duration = 900;
    let startTime = null;
    const tick = (now) => {
      if (startTime === null) startTime = now;
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      el.textContent = fmt.format(Math.round(eased * target)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const start = () => {
    const io = new IntersectionObserver(
      (entries, observer) => {
        // Elements entering the viewport together stagger as a batch (in
        // DOM order); an element arriving alone animates immediately.
        const batch = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) =>
            a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
          );
        batch.forEach((entry, i) => {
          const el = entry.target;
          observer.unobserve(el);
          if (el.hasAttribute('data-reveal')) {
            el.style.setProperty('--reveal-delay', Math.min(i, 5));
            el.classList.add('is-revealed');
          }
          // The count keeps its server-rendered value under reduced
          // motion — checked per trigger, not at init.
          if (el.hasAttribute('data-countup') && !reducedMotion.matches) countUp(el);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    revealEls.forEach((el) => io.observe(el));
    countEls.forEach((el) => io.observe(el));
  };

  // During a Speculation-Rules prerender the page is invisible — wait for
  // activation so one-shot entrances play in front of the user, not before.
  if (document.prerendering) {
    document.addEventListener('prerenderingchange', start, { once: true });
  } else {
    start();
  }
}
