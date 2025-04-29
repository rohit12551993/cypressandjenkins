describe("DELETE API",()=>{
    it("delete",()=>{
        cy.request("GET" , "https://api.restful-api.dev/objects/6").its("status").should("equal",200);
        
    })
})