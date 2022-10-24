/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "green1": "#43B02A",
        "green2": "#007A33",
        "pink1": "#AD1AAC",
        "blue1": "#4EC3E0",
        "purple1": "#40146E",
        "blue2": "#005893",
        "black": "#4D4D4F"
      },
      fontSize: {
        "x": "32px",
        "1x": "42px",
        "2x": "50px",
        "2xx": "54px",
        "3x": "64px",
        "4x": "76px",
        "5x": "104px",
        "7x": "144px"
      }
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('>', '& > *');
    }
  ],
}