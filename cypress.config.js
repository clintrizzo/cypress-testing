const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "25y4om",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
