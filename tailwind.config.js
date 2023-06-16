/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/masc-vue/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
