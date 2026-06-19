# Next-session kickoff — ANIMATION

> Paste this into a fresh session, or just say:
> **"Read .notes/NEXT-SESSION-PROMPT.md and continue."**

---

The "Desert Oasis" redesign is MERGED AND LIVE on `main`
(https://ironmanyg.github.io/hussain-portfolio/ — EN + AR, light + dark; brand
images shipped 2026-06-10). Eleventy + Nunjucks + Tailwind static site.

## THIS SESSION'S TASK — animation

The user wants to **discuss, then add animation to the website in different
areas**. This is a DISCUSSION-FIRST session: brainstorm with the user (use
AskUserQuestion with concrete options), agree on a direction, THEN implement.
Work on a branch (`feat/animations` per the `feat/<kebab>` convention) — main
deploys on push.

### Current animation inventory (verified 2026-06-10 — don't relearn)

LIVE today:
- **Ambient page glow drift** — `glow-drift` keyframes, 14s transform-only loop
  on `.page-glow`, reduced-motion gated (styles.css ~477).
- **Projects filter fade** — 200ms `card-fade-out` swap in
  `src/js/projects-filter.js`, already `prefersReducedMotion`-aware.
- **Hover micro-transitions** (~23 `transition` usages) — nav underline grow
  (`.rt-nav-link::after` width .3s), button `hover:-translate-y-0.5` +
  brightness, color fades. Tailwind `transition-*` classes in templates.
- **FAB** appears >500px scroll + smooth-scrolls to top (`src/js/nav.js`).
- **Page navigation is INSTANT by design** — cross-doc View Transitions exist
  but `::view-transition-old/new(root)` is 1ms; `blocking=render` +
  Speculation-Rules prerender. The flicker saga (memory `project_redesign.md`
  sessions 4–5) ended here. A real crossfade is now FEASIBLE (paint is fast)
  but was deliberately shortened — ask the user before touching it.
- **Theme toggle is deliberately instant** (`theme-switching` transition-kill in
  theme.js). Don't "animate" it back — that was a fixed flicker bug.

NOT present (removed with the old site):
- **No scroll-triggered entrance/reveal animations.** The old IDE-theme site
  had them (Anime.js bento-grid reveals); they died with the dead JS bundle
  (`8287480`). The redesign currently renders everything statically — this is
  the biggest open canvas.

DEAD CODE found during inventory (remove during this work):
- `styles.css` ~740–775: `.hero-avatar-container::before` (still uses old
  Kotlin purple #7F52FF!), `@keyframes pulse-glow`, `@keyframes float`,
  `.animate-float` — zero consumers in any template. Phase 5 missed them
  (keyframes, not ide-* tokens). Also check the "Phase 5: Final Polish" block
  below it (`.skill-bar-container` etc.) for more zero-consumer rules.

### Discussion menu (bring these as options; the site's voice is calm/editorial —
restraint is on-brand, don't propose a motion circus)

1. **Scroll-reveal entrances** (the big one): fade-up + small translate for
   section headers, project cards (stagger), About timeline items, skills
   cards, facts strip. Vanilla `IntersectionObserver` + CSS classes — NO
   animation library (Anime.js was just removed; don't reintroduce a dep).
2. **Hero entrance** on load: staggered fade-up of badge → headline → subtitle
   → CTAs → portrait. One-shot, fast (<600ms total), no typewriter gimmicks
   unless the user asks.
3. **Stat/number count-up** (hero stats, facts strip, About metrics) on first
   scroll into view.
4. **Page-nav crossfade**: lengthen View Transitions from 1ms to ~120–160ms.
   GATED ON USER OPINION — they fought hard for instant nav.
5. **Micro-polish**: card hover lift/shadow tuning, chip/filter press states,
   FAB entrance, mobile-menu slide/fade timing.

### Hard constraints (lessons already paid for — memory `project_redesign.md`)

- **`prefers-reduced-motion` gating on EVERYTHING.** Pattern exists (glow,
  filter JS). Entrance animations must degrade to visible-immediately, not
  hidden-forever (no `opacity:0` without a no-JS/reduced-motion fallback).
- **transform/opacity ONLY** — no layout-triggering properties, no
  `will-change` sprees. NEVER add `mix-blend-mode` to anything near a
  transformed/animated sibling (GPU layer kills the blend — the grain lesson).
- **RTL:** any `translateX` direction must flip for `/ar/` (logical properties
  or `html[dir="rtl"]` overrides). Test EN + AR.
- **Don't regress the flicker fixes:** no render-blocking additions to <head>,
  keep first paint = complete paint. If entrance animations hide content at
  first paint, the `blocking=render` reveal must still show a complete-looking
  page.
- Verify with chrome-devtools MCP (screenshots; theme via initScript
  `localStorage.setItem('theme',...)` + reload; Playwright is wedged). Build =
  `npm run build`; `.eleventy.js` changes need `npm start` restart.
- Conventional Commits + `Co-Authored-By: Claude <model> <noreply@anthropic.com>`
  footer. Commit only when the user asks.

## ⏰ AFTER THIS TASK FINISHES — REMIND THE USER (they asked for this)

When the animation work wraps, **remind the user to revisit the brand images**
(memory `project_brand_images_revisit.md`): review the 4 shipped images at full
size, decide keep / iterate / try the AI-prompt alternates
(`src/_data/image_prompts.json` v3), and do the manual uploads — LinkedIn
banner, GitHub README hero in `IronManYG/IronManYG`, optional Notion hero.
Guide: `.notes/IMAGE-GENERATION-GUIDE.md`.

## Other open items (not this session)
- Repo split initiative — memory `project_repo_split.md`, 4 decisions pending.
- Other branding surfaces may lag the new identity — `.notes/BRANDING-SYNC.md`.
