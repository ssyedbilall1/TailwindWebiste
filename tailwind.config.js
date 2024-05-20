/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-grey": "#7fded1",
        "custom-blue": "#1266f1",
        "custom-red": "#ff3d71",
        "custom-green": "#00bfa6",
      },
      clipPath: {
        "clip-path":
          "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);",
        backgroundClipPath:
          "polygon(0% 15%, 6% 15%, 6% 1%, 94% 0, 94% 15%, 100% 15%, 100% 85%, 96% 96%, 85% 100%, 15% 100%, 4% 96%, 0% 85%);",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-path": {
          clipPath:
            "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);",
        },
        ".backgroundClipPath": {
          clipPath:
            "polygon(0% 15%, 6% 15%, 6% 1%, 94% 0, 94% 15%, 100% 15%, 100% 85%, 96% 96%, 85% 100%, 15% 100%, 4% 96%, 0% 85%);",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
