// Regenerate src/assets/fonts/Phosphor-regular-subset.woff2.
//
// The full Phosphor font is ~143 KB for 1530 icons; we ship ~4 KB for the
// handful actually used. That subset was originally produced by hand and the
// command was lost, so three icons (google-play-logo, house, squares-four)
// drifted out of the font while their classes stayed in the markup — the
// "Get it on Google Play" button rendered a blank box for months.
//
// styles.css is the single source of truth: this reads the .ph.ph-*:before
// rules out of it, verifies every codepoint against the upstream package
// (so a typo'd \eXXXX can't silently ship a wrong glyph), and subsets to
// exactly that set. Add a rule to styles.css, run this, commit both.
//
// Usage: npm run icons:subset
//
// Requires fontTools + brotli. They are not npm deps because this runs only
// when icons change, never during a normal build or deploy:
//   pip3 install --user fonttools brotli

import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Pinned: the shipped subset's `name` table reports "Version 2.1", and all 28
// original codepoints were verified to match this exact release. Bumping this
// can move codepoints — re-verify before you do.
const PHOSPHOR_PKG = '@phosphor-icons/web@2.1.1';

const ROOT = resolve(fileURLToPath(import.meta.url), '../..');
const CSS = join(ROOT, 'src/css/styles.css');
const OUT = join(ROOT, 'src/assets/fonts/Phosphor-regular-subset.woff2');

const ICON_RULE = /\.ph\.ph-([a-z0-9-]+):before\s*\{\s*content:\s*"\\([0-9a-fA-F]+)"/g;

/** Extract { iconName: codepoint } from a Phosphor-style stylesheet. */
function parseIconRules(css) {
  const map = new Map();
  for (const [, name, cp] of css.matchAll(ICON_RULE)) map.set(name, cp.toLowerCase());
  return map;
}

function fail(msg) {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

// --- 1. What do we ship? ------------------------------------------------
const ours = parseIconRules(readFileSync(CSS, 'utf8'));
if (ours.size === 0) fail(`No .ph.ph-*:before rules found in ${CSS}`);
console.log(`styles.css declares ${ours.size} icons`);

// --- 2. Fetch the upstream font ----------------------------------------
const work = mkdtempSync(join(tmpdir(), 'phosphor-'));
console.log(`Fetching ${PHOSPHOR_PKG}…`);
execFileSync('npm', ['pack', PHOSPHOR_PKG, '--pack-destination', work], { stdio: 'pipe' });
const tgz = readdirSync(work).find((f) => f.endsWith('.tgz'));
if (!tgz) fail(`npm pack produced no tarball in ${work}`);
execFileSync('tar', ['-xzf', join(work, tgz), '-C', work]);

const upstreamDir = join(work, 'package/src/regular');
const upstream = parseIconRules(readFileSync(join(upstreamDir, 'style.css'), 'utf8'));
console.log(`upstream ${PHOSPHOR_PKG} has ${upstream.size} icons`);

// --- 3. Verify every codepoint against upstream ------------------------
const problems = [];
for (const [name, cp] of ours) {
  const want = upstream.get(name);
  if (!want) problems.push(`ph-${name}: not in ${PHOSPHOR_PKG}`);
  else if (want !== cp)
    problems.push(`ph-${name}: styles.css says \\${cp}, upstream says \\${want}`);
}
if (problems.length) fail(`Codepoint mismatch:\n  ${problems.join('\n  ')}`);
console.log('✓ all codepoints match upstream');

// --- 4. Subset ----------------------------------------------------------
const unicodes = [...ours.values()]
  .sort()
  .map((cp) => `U+${cp.toUpperCase()}`)
  .join(',');
const before = statSync(OUT).size;

execFileSync(
  'python3',
  [
    '-m',
    'fontTools.subset',
    join(upstreamDir, 'Phosphor.ttf'),
    `--unicodes=${unicodes}`,
    '--flavor=woff2',
    `--output-file=${OUT}`,
  ],
  { stdio: 'inherit' },
);

const after = statSync(OUT).size;
console.log(`\n✓ ${OUT.replace(ROOT + '/', '')}`);
console.log(`  ${ours.size} icons · ${before} → ${after} bytes`);
console.log('  Rebuild and commit the .woff2 alongside your styles.css change.');
