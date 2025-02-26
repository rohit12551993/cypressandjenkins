/// <reference types="Cypress-xpath" />

import { faker } from "@faker-js/faker";

export default class belmont_Addmembers {
    

   // Method 1: Click "Add Members"
   clickaddmembers() {
       cy.get("div[class='flex items-center'] button[type='button']").click();
   }

   // Method 2: Enter Email
   enteremail() {
    let email = `user_${Date.now()}@example.com`;
       cy.get("input[type='email']").click().type(email);
   }

   // Method 3: Select User Role
   selectuserrole() {
       cy.get('input[class="select__input"]').eq(1).click();
       cy.wait(2000);
       cy.get('input[class="select__input"]').eq(1).click().type('{enter}');
   }

   // Method 4: Click Send Invite
   clicksendinvite() {
       cy.get("button[type='submit']").click();
       cy.wait(2000);
   }

   // Method 5: Verify Success Message
   verifysuccessmessage() {
    cy.contains('User Created Successfully.').should('be.visible');
      
   }

}
