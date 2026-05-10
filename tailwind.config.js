module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#111827",
        surface2: "#1f2937",
        border: "#374151"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};
