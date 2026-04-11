const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: '4px',
      },
      screens: {
        sm: '0px',
        lg: '997px',
      },
      colors: {
        primary: {
          DEFAULT:
            'rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)',
          100: 'rgb(var(--docs-color-primary-100, 26 144 255) / <alpha-value>)',
          200: 'rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)',
        },
        secondary: {
          DEFAULT:
            'rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)',
          1000: 'rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)',
          900: 'rgb(var(--docs-color-secondary-900, 25 25 25) / <alpha-value>)',
          800: 'rgb(var(--docs-color-secondary-800, 38 38 38) / <alpha-value>)',
          700: 'rgb(var(--docs-color-secondary-700, 71 71 71) / <alpha-value>)',
        },
        text: {
          400: 'rgb(var(--docs-color-text-400, 153 153 153) / <alpha-value>)',
        },
        sentinel: {
          primary: '#322DC2',
          'primary-light': '#4540D8',
          secondary: '#db5224',
          surface: '#1c1c1c',
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};