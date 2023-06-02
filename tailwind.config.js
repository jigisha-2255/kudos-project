/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        xl1: "1400px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
