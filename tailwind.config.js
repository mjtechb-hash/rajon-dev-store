/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          start: '#8B5CF6',
          end: '#4F46E5',
        },
        dark: {
          bg: '#050811',
          surface: 'rgba(17,24,39,0.85)',
          text: '#F9FAFB',
          secondary: '#9CA3AF',
        },
        light: {
          bg: '#F3F4F6',
          surface: 'rgba(255,255,255,0.9)',
          text: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'bubble-pop': 'bubblePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        shimmer: 'shimmer 1.4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        bubblePop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
