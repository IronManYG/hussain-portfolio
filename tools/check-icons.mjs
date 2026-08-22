// Fail the build when a template uses a `ph-*` icon class that styles.css
// doesn't declare.
//
// The Phosphor font is subsetted (see tools/subset-icons.mjs), so an icon
// class with no matching rule renders as an empty inline-block — no error,
// no tofu, just a silent gap. Three had drifted before this check existed,
// including the icon on the "Get it on Google Play" button.
//
// Runs first in `npm run build` (npm-run-all walks build:* in glob order,
// and "check" sorts before "css"/"eleventy"), so the failure is immediate.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(import.meta.url), '../..');
const SRC = join(ROOT, 'src');
const CSS = join(SRC, 'css/styles.css');
const SCAN_EXT = ['.njk', '.json', '.js', '.html', '.md'];

// `ph` itself is the font-family base class, not an icon.
const NOT_AN_ICON = new Set(['ph']);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (SCAN_EXT.some((e) => entry.endsWith(e))) out.push(full);
  }
  return out;
}

const declared = new Set(
  [...readFileSync(CSS, 'utf8').matchAll(/\.ph\.(ph-[a-z0-9-]+):before/g)].map((m) => m[1]),
);

// Icon classes reach the DOM two ways: written in a template, or toggled from
// JS (theme.js swaps ph-moon/ph-sun). Scanning .js as well as .njk covers both
// without needing a hardcoded allowlist.
const used = new Map();
for (const file of walk(SRC)) {
  if (file === CSS) continue;
  const text = readFileSync(file, 'utf8');
  for (const [, cls] of text.matchAll(/\b(ph-[a-z0-9-]+)\b/g)) {
    if (NOT_AN_ICON.has(cls)) continue;
    if (!used.has(cls)) used.set(cls, new Set());
    used.get(cls).add(relative(ROOT, file));
  }
}

const missing = [...used.keys()].filter((c) => !declared.has(c)).sort();

if (missing.length) {
  console.error(`\n✗ ${missing.length} icon class(es) used but not declared in src/css/styles.css:\n`);
  for (const cls of missing) {
    console.error(`  .${cls}`);
    for (const f of used.get(cls)) console.error(`      ${f}`);
  }
  console.error('\n  These render as an empty box. Add the rule to styles.css, then run:');
  console.error('    npm run icons:subset\n');
  process.exit(1);
}

console.log(`✓ icons: ${used.size} used, all declared (${declared.size} in subset)`);
