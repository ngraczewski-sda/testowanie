const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://login-page-peach-seven.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
