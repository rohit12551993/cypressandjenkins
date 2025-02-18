const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for generating HTML reports
  e2e: {
    setupNodeEvents(on, config) {
      
      "defaultCommandTimeout"; 10000,  // 10 seconds for commands
    "requestTimeout"; 15000,         // 15 seconds for requests
    "responseTimeout"; 15000         // 15 seconds for response wait time
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); // for HTML reports
      
      
    },
    testIsolation: false
  
  
  }
});
