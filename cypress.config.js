const { defineConfig } = require("cypress");

module.exports = defineConfig({
  PROJECT_ID: "s84g4q",
  CYPRESS_RECORD_KEY: "590319bd-f7c1-40af-ac61-a9940ae8dec0",
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
