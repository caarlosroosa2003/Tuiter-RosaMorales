/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#05094a",

          secondary: "#be123c",

          "accent": "#1d4ed8",

          neutral: "#111827",

          "base-100": "#040738",

          info: "#00bdff",

          success: "#16a34a",

          warning: "#f59e0b",

          error: "#f9404a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};