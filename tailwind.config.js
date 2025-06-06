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
        'primary': '#004aad',        // グラデーション開始色
        'secondary': '#cb6ce6',      // グラデーション終了色
        'primary-light': '#e6d4f0',  // 薄いバージョン
        'secondary-light': '#b3d1ff', // 薄いバージョン
        'light-pink': '#e6d3f8',
        'dark-gray': '#2D3748',
        'light-gray': '#f5f5f5',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #004aad 0%, #cb6ce6 100%)',
        'gradient-light': 'linear-gradient(135deg, #e6d3f8 0%,#a9c3e9 100%)',
        'gradient-reverse': 'linear-gradient(135deg, #cb6ce6 0%, #004aad 100%)',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'Inter', 'sans-serif'],
        'rounded': ['M PLUS Rounded 1c', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        shake: {
          '5%, 15%, 25%, 35%, 55%, 65%, 75%, 95%': {
            filter: 'blur(0.05em)',
            transform: 'translateY(0.05em) rotate(0deg)',
          },
          '10%, 30%, 40%, 50%, 70%, 80%, 90%': {
            filter: 'blur(0.03em)',
            transform: 'translateY(-0.05em) rotate(0deg)',
          },
          '20%, 60%': {
            filter: 'blur(0.09em)',
            transform: 'translate(-0.05em, 0.05em) rotate(0deg)',
          },
          '45%, 85%': {
            filter: 'blur(0.09em)',
            transform: 'translate(0.05em, -0.05em) rotate(0deg)',
          },
          '100%': {
            filter: 'blur(0.03em)',
            transform: 'translate(0) rotate(-0.9deg)',
          },
        },
      },
      animation: {
        shake: 'shake 3s linear forwards',
        'shake-delay': 'shake 10s linear 3s forwards',
      },
      fontSize: {
        'responsive-sm': 'clamp(1rem, 3vw, 1.5rem)',
        'responsive-md': 'clamp(1.5rem, 5vw, 2.5rem)',
        'responsive-lg': 'clamp(2rem, 6vw, 3.5rem)',
        'responsive-xl': 'clamp(2.5rem, 8vw, 4rem)',
      },
    },
  },
  plugins: [],
} 