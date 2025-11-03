/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        fallIn: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        fallIn: "fallIn 0.5s ease forwards",
        marquee: "marquee 100s linear infinite",
      },
      screens: {
        // 🔹 Min-width breakpoints (default behavior)
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",

        // 🔹 Max-width breakpoints (for “below” conditions)
        "max-xs": { max: "479px" },
        "max-sm": { max: "639px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1279px" },
        "max-2xl": { max: "1535px" },
        "max-3xl": { max: "1919px" },

         // Height-based breakpoints
        "max-h-xs": { raw: "(max-height: 479px)" },
        "max-h-sm": { raw: "(max-height: 639px)" },
        "max-h-md": { raw: "(max-height: 767px)" },
        "max-h-lg": { raw: "(max-height: 1023px)" },
        "min-h-md": { raw: "(min-height: 768px)" },
        "min-h-lg": { raw: "(min-height: 1024px)" },
      },
    },
  },
  plugins: [],
};
