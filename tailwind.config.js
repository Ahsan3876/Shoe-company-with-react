/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        media440: "440px",
        media560: "560px",
        media1200: "1200px",
      },
      backgroundImage: {
        "testimonial-section": "url('./images/background-3.png')",
      },
      variants: {
        extend: {},
      },
    },
  },
  plugins: [],
};
