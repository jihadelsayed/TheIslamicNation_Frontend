/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./nuxt.config.{js,ts}",

  ],
  mode: "jit",
  darkMode: "media",//class
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
        },
    },
  plugins: [],
}
