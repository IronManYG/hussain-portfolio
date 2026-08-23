module.exports = {
  content: ['./src/**/*.{html,js,njk,md}', './src/_data/**/*.json', './.eleventy.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Desert Oasis palette (sandstone + deep teal)
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
        display: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
