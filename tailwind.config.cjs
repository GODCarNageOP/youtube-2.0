/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        '500': '500ms',
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require('tailwind-scrollbar')({ nocompatible: true})]
}