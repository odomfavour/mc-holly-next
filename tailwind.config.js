/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url(../public/hero_banner.jpg)",
        ticket1: "url(../public/ticket-1.png)",
        ticket2: "url(../public/ticket-2.png)",
        counter: "rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
}
