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
            transform: 'translateY(0.1em) rotate(0deg)',
          },
          '10%, 30%, 40%, 50%, 70%, 80%, 90%': {
            filter: 'blur(0.03em)',
            transform: 'translateY(-0.1em) rotate(0deg)',
          },
          '20%, 60%': {
            filter: 'blur(0.09em)',
            transform: 'translate(-0.1em, 0.1em) rotate(0deg)',
          },
          '45%, 85%': {
            filter: 'blur(0.09em)',
            transform: 'translate(0.1em, -0.1em) rotate(0deg)',
          },
          '100%': {
            filter: 'blur(0.03em)',
            transform: 'translate(0) rotate(-1deg)',
          },
        },
        'marquee-infinite': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
        'float-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px) scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'float-gentle': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fadeout': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shake: 'shake 3s linear forwards',
        'shake-delay': 'shake 20s linear 5s forwards',
        'marquee-infinite': 'marquee-infinite 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-up-delay-1': 'fade-in-up 0.6s ease-out 0.2s both',
        'fade-in-up-delay-2': 'fade-in-up 0.6s ease-out 0.4s both',
        'fade-in-up-delay-3': 'fade-in-up 0.6s ease-out 0.6s both',
        'scale-in': 'scale-in 0.5s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float-in': 'float-in 0.8s ease-out',
        'float-in-delay-1': 'float-in 0.8s ease-out 0.1s both',
        'float-in-delay-2': 'float-in 0.8s ease-out 0.2s both',
        'float-in-delay-3': 'float-in 0.8s ease-out 0.3s both',
        'float-in-delay-4': 'float-in 0.8s ease-out 0.4s both',
        'float-in-delay-5': 'float-in 0.8s ease-out 0.5s both',
        'float-in-delay-6': 'float-in 0.8s ease-out 0.6s both',
        'float-gentle': 'float-gentle 3s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'slide-in-left-delay-1': 'slide-in-left 0.8s ease-out 0.2s both',
        'slide-in-right-delay-1': 'slide-in-right 0.8s ease-out 0.2s both',
        'slide-in-left-delay-2': 'slide-in-left 0.8s ease-out 0.4s both',
        'slide-in-right-delay-2': 'slide-in-right 0.8s ease-out 0.4s both',
        'slide-in-left-delay-3': 'slide-in-left 0.8s ease-out 0.6s both',
        'slide-in-right-delay-3': 'slide-in-right 0.8s ease-out 0.6s both',
        'fadeout': 'fadeout 1.5s ease-in-out forwards',
        'loading-bar': 'loading-bar 2s ease-in-out infinite',
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