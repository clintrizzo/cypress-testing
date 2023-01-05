const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "s84g4q",
  CYPRESS_RECORD_KEY: "7155a86a-977c-4f93-8c3f-359c724988b8",
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
