/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      flexBasis: {
        "1/14": "5%",
        "13/14" : "95%"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
