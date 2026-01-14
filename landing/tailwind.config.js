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
          deep: '#0f2a0c',
          DEFAULT: '#1a4d14',
          light: '#2d7a24',
          bright: '#3d9932',
        },
        leaf: {
          DEFAULT: '#6bbd45',
          light: '#8fd860',
          pale: '#c5f0a8',
        },
        earth: {
          dark: '#2c1810',
          DEFAULT: '#5c3d2e',
          light: '#8b6914',
          warm: '#a67c52',
        },
        harvest: {
          orange: '#ff6b35',
          red: '#e63946',
          yellow: '#ffd23f',
          pink: '#ff8fab',
        },
        cream: {
          DEFAULT: '#fef9f3',
          dark: '#f5ebe0',
          warm: '#fff8e8',
        },
        'warm-white': '#fffefb',
        night: {
          DEFAULT: '#0a0a0a',
          soft: '#1a1a1a',
          gray: '#2d2d2d',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        accent: ['var(--font-accent)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 10vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-delayed': 'float 20s ease-in-out -5s infinite',
        'float-delayed-2': 'float 20s ease-in-out -10s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'float-card': 'float-card 4s ease-in-out infinite',
        'float-card-delayed': 'float-card 4s ease-in-out -2s infinite',
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-right': 'fade-in-right 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blur-in': 'blur-in 0.6s ease forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee 30s linear infinite reverse',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(107, 189, 69, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(107, 189, 69, 0.6)' },
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
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(100%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'blur-in': {
          from: { opacity: '0', filter: 'blur(20px)' },
          to: { opacity: '1', filter: 'blur(0)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1024 1024\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.6\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(107, 189, 69, 0.3)',
        'glow-md': '0 0 30px rgba(107, 189, 69, 0.4)',
        'glow-lg': '0 0 50px rgba(107, 189, 69, 0.5)',
        'inner-glow': 'inset 0 0 30px rgba(107, 189, 69, 0.15)',
        'card': '0 20px 60px -15px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 35px 80px -15px rgba(0, 0, 0, 0.2)',
        'float': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
