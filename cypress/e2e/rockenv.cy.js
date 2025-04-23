describe("using env variables file",()=>{
    it("env variables file",()=>{
        let  data = Cypress.env('Username')
        cy.log(data)
    })
})