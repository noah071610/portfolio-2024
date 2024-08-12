/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        g: {
          blue: "#dedeff",
          "blue-strong": "#b3b3ff",
          ivory: "rgba(248,248,252,.8)",
        },
      },
      screens: {
        xs: "435px",
      },
    },
  },
  plugins: [],
}
