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
      }
    }
  },
  plugins: [],
}
