/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "anime-neon":
          "linear-gradient(135deg, #1B1F3B, #6C0BA9, #FF4E9B, #00F0FF)",
      },
    },
  },
  plugins: [],
};
