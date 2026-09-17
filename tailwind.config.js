/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fdfcf8',
          100: '#f9f5ec',
          200: '#f2e9d5',
          300: '#e8d9bb',
        },
        sage: {
          50: '#eef4ec',
          100: '#d5e8d0',
          200: '#aed1a5',
          300: '#82b577',
          400: '#5f9e52',
          500: '#468540',   // richer, deeper
          600: '#376b31',
          700: '#2c5427',
          800: '#23421f',
          900: '#1b331a',
        },
        blue: {
          50: '#edf4f9',
          100: '#d4e7f2',
          200: '#a5cce3',
          300: '#70aed1',
          400: '#4793bc',
          500: '#3079a3',
          600: '#276188',
          700: '#1f4e6e',
          800: '#1a3f59',
          900: '#153349',
        },
        gold: {
          50: '#fdf7e8',
          100: '#f8eac4',
          200: '#f0d38c',
          300: '#e6ba52',
          400: '#d9a030',   // richer amber-gold
          500: '#c08820',
          600: '#a06e18',
          700: '#815716',
          800: '#664515',
          900: '#523815',
        },
        taupe: {
          50: '#faf8f5',
          100: '#f0ebe3',
          200: '#e2d9cc',
          300: '#cdbfa9',
          400: '#b3a085',
          500: '#9c8a6d',
          600: '#827157',
          700: '#6b5e4a',
          800: '#594f40',
          900: '#4b4337',
        },
        charcoal: {
          50: '#f5f4f2',
          100: '#e8e5e0',
          200: '#cdc8c0',
          300: '#a8a097',
          400: '#7d756b',
          500: '#5c554d',
          600: '#47423c',
          700: '#36322e',
          800: '#2a2724',
          900: '#1f1d1b',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider-2': '0.18em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(70, 133, 64, 0)' },
          '50%': { boxShadow: '0 0 20px 6px rgba(70, 133, 64, 0.25)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float-slow': 'floatSlow 12s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
