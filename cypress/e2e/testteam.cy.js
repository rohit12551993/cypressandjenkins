const { faker } = require("@faker-js/faker/locale/af_ZA");

describe("Automation Practice", () => {

  it("handles alert and confirm box", () => {
    cy.visit("https://commitquality.com/practice-file-download");

    cy.get("div[class='container'] div button").click();

    // Read the file
    cy.readFile('cypress/downloads/dummy_file.txt').then((data) => {
      cy.log(data); // log the old file content

      // Write new content to the file
      cy.writeFile('cypress/downloads/dummy_file.txt', 'the world is better').then(() => {
        
        // After writing, read again to verify
        cy.readFile('cypress/downloads/dummy_file.txt').then((newData) => {
          cy.log(newData); // log the updated file content

          let words = newData.split(" ")
          cy.log(words);
        });

      });
    });

  });

});
