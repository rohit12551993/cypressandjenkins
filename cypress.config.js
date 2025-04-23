const fs = require("fs-extra");
const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  projectId: 'd9yqa2',
  reporter: "cypress-mochawesome-reporter", // For generating HTML reports

  e2e: {
    setupNodeEvents(on, config) {
      // Enable HTML Reports
      require("cypress-mochawesome-reporter/plugin")(on);

      // Enable file download plugin
      on("task", { downloadFile });

      // Task to get the latest downloaded file
      on("task", {
        getLatestFile(directory) {
          const files = fs.readdirSync(directory).map(file => ({
            name: file,
            time: fs.statSync(`${directory}/${file}`).mtime.getTime(),
          }));

          return files.length ? files.reduce((a, b) => (a.time > b.time ? a : b)).name : null;
        },

        // Task to rename the downloaded file
        renameFile({ from, to }) {
          return fs.rename(from, to);
        },
        parsePdf({ filePath }) {
          return fs.readFile(filePath).then(pdfParse).then(data => data.text);
        },
      });

      return config; // Return updated config
    },

    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // ✅ Add this to locate spec files
    defaultCommandTimeout: 10000, // 10 seconds for commands
    requestTimeout: 15000,        // 15 seconds for requests
    responseTimeout: 15000,       // 15 seconds for response wait time
    testIsolation: false          // Disable test isolation if needed
  },
});
