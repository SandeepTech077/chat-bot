/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans'],
      },
      colors: {
        customGrey: '#727272',
        lineGrey: "#EDEAEA",
      },
    },
  },
  plugins: [],
}
