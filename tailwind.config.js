/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        text50: 'var(--text50)',
        text100: 'var(--text100)',
        text300: 'var(--text300)',
        text500: 'var(--text500)',
        line100: 'var(--line100)',
        line200: 'var(--line300)',
        primary50: 'var(--primary50)',
        primary100: 'var(--primary100)',
        primary300: 'var(--primary300)',
        primary500: 'var(--primary500)',
        error500: 'var(--error500)',
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        normal: '400',
      },
      fontSize: {
        xxsmall: 9,
        xsmall: 10,
        small: 12,
        medium: 14,
        large: 16,
        xlarge: 18,
        xxlarge: 20,
      },
      screens: {
        sm: '770px',
        md: '880px',
        lg: '1100px',
        xl: '1200px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
