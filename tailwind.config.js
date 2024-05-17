/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-grey": "#F2F2F2",
        "custom-blue": "#1266f1",
        "custom-red": "#ff3d71",
        "custom-green": "#00bfa6",
      },
    },
  },
  plugins: [],
};
