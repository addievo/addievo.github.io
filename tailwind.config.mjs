/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0e1011',
          900: '#181a1b',
          800: '#1f2123',
          700: '#2e3031',
          600: '#3a3c3e',
        },
        accent: {
          DEFAULT: '#3b82f6',
          dark: '#0455d8',
          darker: '#013281',
        },
        fog: {
          DEFAULT: '#dcdcdc',
          muted: '#9aa0a6',
        },
      },
      fontFamily: {
        sans: ['Nunito', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Nunito', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        slab: ['"Alfa Slab One"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        ultra: '0.25em',
        snug: '-0.015em',
        tightest: '-0.03em',
      },
      maxWidth: {
        container: '1200px',
        prose: '720px',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '3px',
        md: '6px',
        lg: '8px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scroll-cue': 'scrollCue 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollCue: {
          '0%': { opacity: '0', transform: 'rotate(45deg) translate(-20px, -20px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'rotate(45deg) translate(20px, 20px)' },
        },
      },
    },
  },
  plugins: [],
};
