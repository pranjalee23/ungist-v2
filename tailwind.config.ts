import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#9A2FFB',
          50: '#f5e9ff',
          100: '#e9d1fe',
          200: '#d4a3fd',
          300: '#be75fb',
          400: '#a947fc',
          500: '#9A2FFB',
          600: '#7a1fd9',
          700: '#5c12b5',
          800: '#3f0a8a',
          900: '#250462',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
} satisfies Config
