import { faker } from "@faker-js/faker";
import createvisitor from "../Pages/createvisitor.js";

export default class SearchEditVisitor {
  createEditVisitor() {
    // Ensure the visitor page is loaded
    cy.contains("Visitors").click();

    // Retrieve firstname from environment variables
    let firstname = Cypress.env("firstname");
    

    // Search by visitor's name
    cy.get('input[data-placeholder="Search by visitor name, email, phone number, tenant..."]').click().type(firstname);
cy.wait();    
    cy.contains("Tenant: ").click();
    
    cy.get(".edit-visitor").click();
    cy.get(".edit-action.ng-star-inserted").click();
    cy.get('input[formcontrolname="firstname"]').click().clear().type(firstname+faker.person.firstName);
    cy.contains(" Submit ").click();
    cy.contains("Visitor updated successfully").should('be.visible');



  }
}
