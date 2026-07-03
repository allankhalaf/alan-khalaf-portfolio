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
          DEFAULT: '#0b1220',
          soft: '#121a2b',
          card: 'rgba(18, 26, 43, 0.72)',
          'card-solid': '#111a2d',
          'card-2': '#16233c',
        },
        text: {
          DEFAULT: '#f3f6fb',
          soft: '#b9c4d6',
          muted: '#8ea0bb',
        },
        primary: {
          DEFAULT: '#6ea8fe',
          strong: '#4f8df0',
        },
        secondary: {
          DEFAULT: '#30c7b5',
        },
        accent: {
          DEFAULT: '#f6c56f',
        },
        danger: {
          DEFAULT: '#ff6b6b',
        },
        line: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.16)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '28px',
        'lg': '22px',
        'md': '16px',
        'sm': '12px',
      },
      boxShadow: {
        'lg': '0 20px 60px rgba(0, 0, 0, 0.28)',
        'md': '0 14px 35px rgba(0, 0, 0, 0.18)',
        'sm': '0 10px 24px rgba(0, 0, 0, 0.14)',
        'glow': '0 0 40px rgba(110, 168, 254, 0.3)',
        'glow-secondary': '0 0 40px rgba(48, 199, 181, 0.3)',
      },
      backdropBlur: {
        'glass': '18px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(110, 168, 254, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(110, 168, 254, 0.5)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
