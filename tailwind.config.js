/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/federalCourtHouse.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      backgroundSize: {
        200: "200%",
        150: "150%",
        100: "100%",
        70: "70%",
        50: "50%",
      },
    },
  },
  plugins: [],
};
