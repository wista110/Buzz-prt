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
        'primary-red': '#E53E3E',
        'accent-red': '#FF6B6B',
        'light-red': '#FFF5F5',
        'dark-gray': '#2D3748',
        'light-gray': '#F7FAFC',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
} 