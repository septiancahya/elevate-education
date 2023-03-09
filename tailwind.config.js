/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/public/images/hero-img.png')",
        "about-bg": "url('/public/images/about-img.png')",
      },
    },
  },
  plugins: [],
};
