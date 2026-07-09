/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0f1c',
          secondary: '#0f1629',
          card: 'rgba(15, 22, 41, 0.75)',
          'card-solid': '#0d1424',
          'card-2': '#131b32',
          elevated: '#161f3a',
        },
        text: {
          DEFAULT: '#f0f4f8',
          soft: '#a8b5c9',
          muted: '#6b7a94',
          primary: '#f0f4f8',
          secondary: '#a8b5c9',
        },
        primary: {
          DEFAULT: '#6ea8fe',
          strong: '#4f8df0',
          glow: 'rgba(110, 168, 254, 0.4)',
        },
        secondary: {
          DEFAULT: '#30c7b5',
          glow: 'rgba(48, 199, 181, 0.4)',
        },
        accent: {
          DEFAULT: '#f6c56f',
          glow: 'rgba(246, 197, 111, 0.4)',
        },
        danger: {
          DEFAULT: '#ff6b6b',
        },
        line: {
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          strong: 'rgba(255, 255, 255, 0.14)',
          glow: 'rgba(110, 168, 254, 0.2)',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Cairo', 'sans-serif'],
        body: ['Inter', 'Cairo', 'sans-serif'],
        arabic: ['Cairo', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-2': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-3': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-1': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-2': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-3': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.05em' }],
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(110, 168, 254, 0.15)',
        'glow-secondary': '0 0 40px rgba(48, 199, 181, 0.15)',
        'glow-accent': '0 0 40px rgba(246, 197, 111, 0.15)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.glass-card': {
          background: 'rgba(15, 22, 41, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '1.5rem',
        },
        '.text-gradient': {
          background: 'linear-gradient(135deg, #6ea8fe 0%, #30c7b5 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        '.section-kicker': {
          fontSize: '0.75rem',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#6ea8fe',
        },
      });
    },
  ],
};