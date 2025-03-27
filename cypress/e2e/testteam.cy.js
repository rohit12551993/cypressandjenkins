const { faker } = require("@faker-js/faker");

describe("Different operations using cypress",()=>{
        it.only("open website URL",()=>{
            cy.visit("https://testautomationpractice.blogspot.com/");
            
        })
       it("entering the name ",()=>{
        cy.get("#name").click().type(faker.person.firstName());
       })
       
       it("entering the email",()=>{
        cy.get("#email").click().type("Rohitmadan1993@gmail.com");
       })
       it("checking the radio button",()=>{
        cy.get("#male").check().should('be.checked');
       })

       it("checking the radio button",()=>{
        cy.get("#female").check().should('be.checked');
    })

    it("checking the checkbox",()=>{
        cy.get("#sunday").click();
       
})
it("checking the first checkbox",()=>{
    cy.get("input.form-check-input[type='checkbox']").first().click();
   
})
it("checking the last checkbox",()=>{
    cy.get("input.form-check-input[type='checkbox']").last().click();
})

it.only("dropdown with select text",()=>{
    cy.get("#country").select("China")
})
})