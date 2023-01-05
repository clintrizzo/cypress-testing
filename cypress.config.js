const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  viewportWidth: 1600,
  viewportHeight: 1000,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
