/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        museo: ['MuseoModerno', 'sans-serif'],
        niconne: ['Niconne', 'cursive'],
        montserrat: ['Montserrat', 'sans']
      }
    },
  },
  mode: "jit",
  plugins: [],
};
