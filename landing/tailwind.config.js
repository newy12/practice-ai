/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          deep: '#1a3a17',
          DEFAULT: '#2d5a27',
          light: '#3d7a37',
        },
        leaf: {
          DEFAULT: '#7cb342',
          light: '#a4d65e',
        },
        earth: {
          dark: '#3d2914',
          DEFAULT: '#6b4423',
          light: '#8b6914',
        },
        harvest: {
          orange: '#e67e22',
          red: '#c0392b',
        },
        cream: {
          DEFAULT: '#fdf8f0',
          dark: '#f5ebe0',
        },
        'warm-white': '#fffef9',
      },
      fontFamily: {
        display: ['var(--font-noto-serif)', 'serif'],
        body: ['var(--font-pretendard)', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-delayed': 'float 20s ease-in-out -5s infinite',
        'float-delayed-2': 'float 20s ease-in-out -10s infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'float-card': 'float-card 4s ease-in-out infinite',
        'float-card-delayed': 'float-card 4s ease-in-out -2s infinite',
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-right': 'fade-in-right 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-card': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-right': {
          from: { opacity: '0', transform: 'translateX(60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
