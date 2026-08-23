export function initTheme() {
  // localStorage throws in Safari Private Browsing and wherever site data is
  // blocked. The write sat before updateThemeIcon() in the click handler, so
  // a throw left the icon and aria-label describing the opposite theme from
  // the one actually on screen. Failing to persist is fine; failing loudly is
  // not.
  const readTheme = () => {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  };
  const writeTheme = (value) => {
    try {
      localStorage.setItem('theme', value);
    } catch (e) {
      /* choice just won't survive the session */
    }
  };

  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  // Two things resolve the theme in CSS rather than JS, so they cost nothing
  // for the many visitors whose choice matches their OS:
  //   - thumbnails are a <picture> whose dark <source> is media-keyed, so the
  //     browser downloads only the matching file;
  //   - theme-color ships as a media-scoped pair.
  // Both are keyed on prefers-color-scheme, so an explicit choice that
  // disagrees with the OS has to re-point them. Flipping `media` is what does
  // it: rewriting img.src would do nothing, because a matching <source>
  // always wins over it. 'all' always matches, 'not all' never does.
  const syncThemeMedia = (isDark) => {
    document.querySelectorAll('source[data-thumb-dark]').forEach((source) => {
      source.media = isDark ? 'all' : 'not all';
    });
    document.querySelectorAll('meta[data-theme-color]').forEach((meta) => {
      meta.media = (meta.dataset.themeColor === 'dark') === isDark ? 'all' : 'not all';
    });
  };

  // Swap the theme with transitions suppressed for one frame, so colors snap
  // instantly. Without this, the card/page background (300ms) lags the name
  // color (150ms) and the project names briefly wash out — a visible flicker.
  const swapTheme = (toDark) => {
    root.classList.add('theme-switching');
    const isDark =
      typeof toDark === 'boolean'
        ? root.classList.toggle('dark', toDark)
        : root.classList.toggle('dark');
    syncThemeMedia(isDark);
    // Force a reflow so the no-transition state is committed before paint…
    void root.offsetWidth;
    // …then restore transitions after the new colors have painted.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        root.classList.remove('theme-switching');
      }),
    );
    return isDark;
  };

  // Labels come from data-label-* on the button so each layout supplies
  // its own language (the Arabic pages must not get English labels).
  const updateThemeIcon = () => {
    if (!themeIcon || !themeToggleBtn) return;
    if (document.documentElement.classList.contains('dark')) {
      themeIcon.classList.remove('ph-moon');
      themeIcon.classList.add('ph-sun');
      themeToggleBtn.setAttribute(
        'aria-label',
        themeToggleBtn.dataset.labelLight || 'Switch to Light Mode',
      );
    } else {
      themeIcon.classList.remove('ph-sun');
      themeIcon.classList.add('ph-moon');
      themeToggleBtn.setAttribute(
        'aria-label',
        themeToggleBtn.dataset.labelDark || 'Switch to Dark Mode',
      );
    }
  };

  // Those media queries resolved against the OS preference while the page
  // parsed. If the theme the head script settled on disagrees with it — an
  // explicit choice saved from a previous visit — the thumbnails and the
  // browser chrome are showing the wrong variant, so correct them once.
  // Visitors whose choice matches the OS (and everyone who never toggled)
  // stay on the pure-CSS path and never fetch a second image.
  const osPrefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (root.classList.contains('dark') !== !!osPrefersDark) {
    syncThemeMedia(root.classList.contains('dark'));
  }

  if (themeToggleBtn && themeIcon) {
    updateThemeIcon();

    themeToggleBtn.addEventListener('click', () => {
      const isDark = swapTheme();
      writeTheme(isDark ? 'dark' : 'light');
      updateThemeIcon();
    });
  }

  // Follow system preference until the user makes an explicit choice
  if (window.matchMedia) {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      if (readTheme()) return;
      swapTheme(e.matches);
      updateThemeIcon();
    };
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else if (mql.addListener) mql.addListener(onChange);
  }
}
