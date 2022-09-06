const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [],

  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    // enabled: production // disable purge in dev
  },
};

module.exports = config;
