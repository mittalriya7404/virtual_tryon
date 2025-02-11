/** @type {import('tailwindcss').Config} */
module.exports= {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'dark': '#4C585B',
      'secdark': '#7E99A3',
      'third': '#A5BFCC',
      'seclight':'#cee1eb',
      'light': '#F4EDD3',
      'nav':'#F5F7FA'
      }
    },
  },
  plugins: [],
}