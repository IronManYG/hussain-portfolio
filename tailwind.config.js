module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./src/_data/**/*.json",
    "./.eleventy.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'kotlin-purple': '#7F52FF',
        'kotlin-orange': '#E7624F',
        'ide-bg': 'rgb(var(--color-ide-bg) / <alpha-value>)',
        'ide-bg-darker': 'rgb(var(--color-ide-bg-darker) / <alpha-value>)',
        'ide-surface': 'rgb(var(--color-ide-surface) / <alpha-value>)',
        'ide-surface-hover': 'rgb(var(--color-ide-surface-hover) / <alpha-value>)',
        'ide-border': 'rgb(var(--color-ide-border) / <alpha-value>)',
        'ide-text-main': 'rgb(var(--color-text-main) / <alpha-value>)',
        'ide-text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'ide-text-dim': 'rgb(var(--color-text-dim) / <alpha-value>)',
        'ide-text-strong': 'rgb(var(--color-text-strong) / <alpha-value>)',
        // Riyadh Terra redesign tokens (coexist with ide-* during migration)
        'rt-bg': 'rgb(var(--rt-bg) / <alpha-value>)',
        'rt-surface': 'rgb(var(--rt-surface) / <alpha-value>)',
        'rt-subtle': 'rgb(var(--rt-subtle) / <alpha-value>)',
        'rt-border': 'rgb(var(--rt-border) / <alpha-value>)',
        'rt-text': 'rgb(var(--rt-text) / <alpha-value>)',
        'rt-muted': 'rgb(var(--rt-muted) / <alpha-value>)',
        'rt-accent': 'rgb(var(--rt-accent) / <alpha-value>)',
        'rt-accent-2': 'rgb(var(--rt-accent-2) / <alpha-value>)',
        'rt-btn-text': 'rgb(var(--rt-btn-text) / <alpha-value>)',
      },
      fontFamily: {
        'display': ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      }
    }
  },
  plugins: [],
}
