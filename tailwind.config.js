module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // ✅ Include all files inside app/
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
