/// <reference types = "cypress-xpath"/>

import { faker } from "@faker-js/faker";

describe('Testing', () => {

  it('Test', () => {
    cy.visit("www.google.com");
    cy.get("#APjFqb").click().type("Delhi")
    cy.get(".wM6W7d").contains("delhi news").click(); 
    cy.go('back');
    cy.go('forward');
    cy.reload();
    

    
    


    


  });
});