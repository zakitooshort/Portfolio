/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body: ['Montserrat']
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}