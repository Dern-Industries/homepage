/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Monochrome base, matched to the logo.
        ink: {
          950: '#050506',
          900: '#0a0a0c',
          800: '#111114',
          700: '#1a1a1f',
          600: '#26262d',
          500: '#3a3a44',
        },
        smoke: {
          100: '#f5f5f4',
          200: '#e7e7e5',
          300: '#c9c9c6',
          400: '#9a9a97',
          500: '#6d6d6b',
        },
        // Orange accent.
        orange: {
          DEFAULT: '#f97316',
          soft: '#fb923c',
          deep: '#c2410c',
          glow: 'rgba(249, 115, 22, 0.55)',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Rajdhani', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.35em',
        widest3: '0.5em',
      },
      boxShadow: {
        orange: '0 0 20px rgba(249, 115, 22, 0.35), 0 0 60px rgba(249, 115, 22, 0.15)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.72' },
          '94%': { opacity: '1' },
          '97%': { opacity: '0.85' },
          '98%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        flicker: 'flicker 6s linear infinite',
        scan: 'scan 8s linear infinite',
        blink: 'blink 1.1s step-end infinite',
        rise: 'rise 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
      },
    },
  },
  plugins: [],
};
