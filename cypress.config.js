const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      "defaultCommandTimeout"; 10000,  // 10 seconds for commands
    "requestTimeout"; 15000,         // 15 seconds for requests
    "responseTimeout"; 15000         // 15 seconds for response wait time
      // implement node event listeners here
      
    },
    testIsolation: false
  
  
  }
});
