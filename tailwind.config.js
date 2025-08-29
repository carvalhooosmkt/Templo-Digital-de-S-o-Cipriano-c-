/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          50: '#1a1625',
          100: '#13111f',
          200: '#0f0d17',
          300: '#0a0810',
          400: '#060509',
          500: '#020202',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        gold: {
          50: '#fffdf7',
          100: '#fffaee',
          200: '#fff2d4',
          300: '#ffe9bb',
          400: '#ffdd87',
          500: '#ffd700',
          600: '#e6c200',
          700: '#b8a000',
          800: '#8a7700',
          900: '#5c4e00',
        },
        sacred: {
          purple: '#2D1B4E',
          gold: '#FFD700',
          silver: '#C0C0C0',
          flame: '#FF6B35',
          dark: '#0a0810',
          darker: '#060509',
        }
      },
      fontFamily: {
        'sacred': ['Cinzel', 'serif'],
        'mystical': ['Playfair Display', 'serif'],
        'elegant': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-text': 'glowText 3s ease-in-out infinite alternate',
        'pulse-sacred': 'pulseSacred 2s ease-in-out infinite',
        'flame': 'flame 1.5s ease-in-out infinite alternate',
        'sacred-spin': 'sacredSpin 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'particle': 'particleFloat 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowText: {
          '0%': {
            textShadow: '0 0 20px rgba(255, 215, 0, 0.5), 0 0 30px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.5)',
          },
          '100%': {
            textShadow: '0 0 30px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.8), 0 0 50px rgba(255, 215, 0, 0.8)',
          },
        },
        pulseSacred: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        flame: {
          '0%': { transform: 'scale(1) rotate(-1deg)' },
          '100%': { transform: 'scale(1.1) rotate(1deg)' },
        },
        sacredSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        particleFloat: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100vh) scale(0)',
          },
          '10%': {
            opacity: '1',
            transform: 'translateY(90vh) scale(1)',
          },
          '90%': {
            opacity: '1',
            transform: 'translateY(10vh) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(0) scale(0)',
          },
        },
      },
      backgroundImage: {
        'obsidian-gradient': 'linear-gradient(135deg, #000000 0%, #0a0810 25%, #13111f 50%, #1a1625 75%, #0f0d17 100%)',
        'sacred-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
        'temple-gradient': 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
        'divine-gradient': 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(26, 22, 37, 0.3) 100%)',
      },
      backdropBlur: {
        'sacred': '10px',
      },
      boxShadow: {
        'sacred': '0 0 30px rgba(255, 215, 0, 0.3), inset 0 0 30px rgba(255, 215, 0, 0.1)',
        'divine': '0 0 40px rgba(255, 215, 0, 0.4), 0 0 80px rgba(255, 215, 0, 0.2)',
        'mystical': '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.2)',
      }
    },
  },
  plugins: [],
};