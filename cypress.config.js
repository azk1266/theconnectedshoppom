const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://theconnectedshop.es',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
