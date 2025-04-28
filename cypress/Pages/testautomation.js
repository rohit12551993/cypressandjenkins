import { faker } from "@faker-js/faker/locale/af_ZA";  // Correctly imported faker

export default class TestAutomation {
    testautomation() {
        cy.visit("https://testautomationpractice.blogspot.com/");  // Visit the page
        
        // Generate a random first name using Faker
        let name = faker.person.firstName();
        
        // Store the generated name in Cypress environment variables
        Cypress.env("name", name);
        
        // Interact with the 'name' input field
        cy.get("#name")
            .should("be.visible")  // Ensure the element is visible before interacting
            .click()
            .type(name);  // Type the generated name
    }
}
