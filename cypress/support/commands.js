// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />


require('cypress-downloadfile/lib/downloadFileCommand')
import 'cypress-file-upload';

Cypress.Commands.add('clicktype',()=>{
  cy.visit("https://testautomationpractice.blogspot.com/");
  cy.get("#name").click().type("rohit madan");
  cy.get("#email").click().type("rohitmadan1993@gmail.com");
  cy.get("#phone").click().type("9999999999");
})





