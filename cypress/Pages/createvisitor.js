import { faker } from "@faker-js/faker";
import 'cypress-xpath';

export default class CreateVisitor {
  createvisitor() {
    // Navigate to the Visitors section
    cy.get("img[src='https://assets.stg.risebuildings.com/public/shared_portal/assets/images/navigation/access@2x.png']").click();
    cy.xpath("//div[contains(text(),'Visitors')]").click();
    cy.get(".mat-icon.notranslate.change-arrow.material-icons.mat-icon-no-color").click();
    cy.get('[href="/pm/visitors/authorized-visitors"]').click();

    // Initiate 'Add New' visitor flow
    cy.contains(" Add New ").click();
    cy.contains('Select Tenant').click();
    cy.xpath("//span[normalize-space()='Andria']").click();
    cy.wait(2000); // Ensure dropdown is loaded

    cy.contains('Select Occupant').click();
    cy.xpath("//span[@class='mat-option-text']").click();

    // Generate and store visitor details using Faker
    let firstname = faker.person.firstName();
    let lastname = faker.person.lastName();

    // Store values in Cypress environment (for cross-file use)
    Cypress.env("firstname", firstname);
    Cypress.env("lastname", lastname);

    // Fill the visitor form
    cy.get('input[formcontrolname="firstname"]').click().type(firstname);
    cy.get('input[formcontrolname="lastname"]').click().type(lastname);

    // Submit the form
    cy.xpath("//button[text()=' Submit ']").click();
    cy.wait(2000); // Wait for form submission

    // Select the visitor type
    cy.contains('Select').click();
    cy.xpath("//span[normalize-space()='Service']").click();
    cy.xpath("//button[text()=' Submit ']").click();

    // Verify successful submission
    cy.wait(1000);
    cy.contains("Visitor scheduling has been added Successfully.").should('be.visible');

    // Navigate back to the dashboard
    cy.get('img[src="https://assets.stg.risebuildings.com/public/shared_portal/assets/images/navigation/dashboard@2x.png"]').click();
    cy.wait(2000);
  }
}
