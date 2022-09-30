/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "poppins":["Poppins"]
    },
    extend: { colors: {
      "custom-purple": "#7D4AEA",
      "custom-light-gray": "#F5F5F5",
      "custom-white": "#FFFFFF",
      "custom-dark-gray": "#EAEAEA",
    }},
  },
  plugins: [require('tailwindcss-font-inter',),]

}
