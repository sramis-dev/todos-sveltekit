const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },
    fontSize: {
      'heading-sm': 'var(--fs-heading-sm)',
      'heading-md': 'var(--fs-heading-md)',
      'heading-lg': 'var(--fs-heading-lg)',
      'body-xs': 'var(--fs-body-xs)',
      'body-sm': 'var(--fs-body-sm)',
      'body-md': 'var(--fs-body-md)',
      'body-lg': 'var(--fs-body-lg)',
    },
    letterSpacing: {
      1: 'var(--tracking-1)',
      2: 'var(--tracking-2)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: 'hsl(var(--color-white) / <alpha-value>)',
        almost: 'hsl(var(--color-almost-white) / <alpha-value>)',
      },
      black: {
        DEFAULT: 'hsl(var(--color-black) / <alpha-value>)',

      },
      blue: {
        light: 'hsl(var(--color-light-blue) / <alpha-value>)',
      }
    },
    extend: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      border: 'hsl(var(--border))',
    },
    boxShadow: {
      box: 'var(--box-shadow)',
    }
  },
  plugins: [],
}

