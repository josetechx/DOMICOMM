/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      fade: 'fadeIn 0.5s ease-in',
    },
    keyframes: {
      fadeIn: {
        '0%': {transform: 'translateY(-5px)' }, // Fixed `translateX`
        '100%': {transform: 'translateY(0)' },    // Added `transform` property
      },
    },
    fontSize: {
      xs: ['16px', '22px'],
      sm: ['20px', '24px'],
      base: ['14px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '40px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', '52px'],
      '6xl': ['64px', '54px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        integral: ['var(--font-integral-cf)', 'sans-serif'],
        satoshi: ['var(--font-satoshi-medium)', 'sans-serif'],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        hero: "url('assest/images/hero-bg.png')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px"
      }
    },
  },
  plugins: [],
};
