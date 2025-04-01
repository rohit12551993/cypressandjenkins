import '@percy/cypress';

describe("browser commands", () => {
    it.only("commands", () => {

        cy.visit("https://www.google.com/");
        cy.percySnapshot('google homepage');
      
      
    });
  });
  