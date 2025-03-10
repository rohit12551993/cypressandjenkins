/// <reference types="cypress-xpath" />

export default class Riselogin_PM {
  
  // Method to visit the website and maximize window
  visit_website() {
    cy.visit("https://stg.risebuildings.com");
    cy.window().then((win) => {
      win.moveTo(0, 0);
      win.resizeTo(screen.availWidth, screen.availHeight);
    });
  }

  // Method to handle login steps
  loginsteps() {
    // Check if the user is already logged in and perform logout if needed
    cy.get("body").then(($body) => {
      if ($body.find(".avatar-content.ng-star-inserted").length > 0) {
        cy.get(".avatar-content.ng-star-inserted").click();
        cy.contains("Sign Out").click();
      }
    });

    // Perform login steps
    cy.fixture('Creds').then((data) => {
      cy.get('#rise-login-email').click().type(data.Email);
      cy.get('[type="button"]').click();
      cy.get('#rise-login-password').click().type(data.Password);
      cy.get('[type="button"]').click();

      // Wait and verify dashboard visibility
      cy.contains('DASHBOARD').should('be.visible');
      cy.wait(3000);
    });
  }
}
