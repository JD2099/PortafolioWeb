const { color } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217 
      },
      animation: {
        'spin-slow':'spin 8s linear infinite'
      },
      backgroundImage:{
        circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px 20%);'
      },
      boxShadow:{
        shadowCustom: '4px 4px 6px -1px rgba(0, 0, 0, 1), 2px 2px 4px -1px rgba(0, 0, 0, 1);'
      }
    },
  },
  plugins: [],
}

