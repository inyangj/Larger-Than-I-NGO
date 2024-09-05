/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B8D23B",
        secondary: "#F7C322",
        "light-green": "#75D23B",
        "accent-green": "#43D23B",
        "accent-green-2": "#75D23B",
      },
      backgroundImage: {
        banner: "url('/public/images/banner.webp')",
        banner2: "url(/public/images/banner2.webp)",
      },
      boxShadow: {
        "dark" : "0px 4px 4px 0px #00000040",
        "slip": "0px 4px 8px 0px #00000040"
      },
    },
  },
  plugins: [],
};
