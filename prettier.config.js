// Prettier config. A .js file rather than .prettierrc.json so the reasoning
// behind each choice can live next to it — JSON can't carry comments.

/** @type {import("prettier").Config} */
module.exports = {
  // The repo had two indent styles: src/js used 4 spaces, while tools/,
  // .eleventy.js and tailwind.config.js used 2. Settling on 2 — it's
  // Prettier's default, the wider JS convention, and it matches the most
  // recently authored files (tools/ came out of the 2026-08 audit).
  tabWidth: 2,

  // Single quotes are what src/js and tools/ already use. Only .eleventy.js
  // was double-quoted, so this is the majority style, not a new one.
  singleQuote: true,

  // 80 (the default) would rewrap a lot of code that reads fine today —
  // the longest lines here sit around 100-115. 100 keeps the diff to real
  // inconsistencies rather than reflowing working code.
  printWidth: 100,
};
