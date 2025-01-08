module.exports = {
  content: ["./index.html", "./pages/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "retro",
      "dracula",
      "sunset",
      "pastel",
      "nord",
    ],
  },
};
