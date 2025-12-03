const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: 'class',

  theme: {
    fontFamily: {
      para: 'Work Sans'
    },
    extend: {
      spacing: {
        '128': '32rem',
      }
    },
  },

  plugins: [],
};

module.exports = config;

