/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      'luckiest': ['Luckiest Guy'],
        'mclaren': ['McLaren'],
      'firaCode' : ['Fira Code'],
      'HelveticaNeueRoman' : ['HelveticaNeueRoman'],
      }
    },
  },
  plugins: [],
}

