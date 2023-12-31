/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
        MediumGray: " hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
}

