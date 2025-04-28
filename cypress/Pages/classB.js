import ClassA from "../Pages/classA.js";
export default class ClassB {
    useUsername(username) {
      cy.visit('https://www.google.com/');
      cy.get('#APjFqb').type(username);
      cy.log(username)
    }
  }
  