/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:["Oswald","sans-serif"],
        title:["Orbitron", "serif"],
      },
      fontSize: {
        '10xl': '12rem',  // Custom larger size
        '11xl': '15rem',
        '12xl': '18rem',
      },
    },
  },
  plugins: [],
}

