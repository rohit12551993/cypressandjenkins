import 'cypress-xpath';

describe("How to use Hooks", () => {

  /* before(() => {
        // Runs once before all tests in the suite
        cy.log("This is before hook");
    });

   

    after(() => {
        // Runs once after all tests in the suite
        cy.log("This is after hook");
    });*/


    /*beforeEach(()=>{
        cy.log("This is before each hook")
    })*/

   afterEach(()=>{
        cy.log("This is after each hook")
    })

    it("This is first it block", () => {
        cy.log("THIS IS 1ST IT BLOCK");
    });

    it("This is second it block", () => {
        cy.log("THIS IS 2ND IT BLOCK");
    });

    it("This is third it block", () => {
        cy.log("THIS IS 3RD IT BLOCK");
    });

    it("This is the fourth it block", () => {
        cy.log("THIS IS 4TH IT BLOCK");
    });

    

});
