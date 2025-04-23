import TestAutomation from "../Pages/testautomation.js"

export default class Google {
    google() {
        cy.visit("https://www.google.com/");  // Visit Google website
        
        // Retrieve the 'name' from the Cypress environment variable
        let name = Cypress.env('name');
        cy.log(name)

        // Ensure the search input field is visible and then interact with it
        cy.get("#APjFqb")
            .should("be.visible")  // Ensure it's visible before interacting
            .click()
            .type(name);  // Type the 'name' into the search box
        
        
    }
}
