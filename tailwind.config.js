/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        auto: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
