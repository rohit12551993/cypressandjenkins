describe("GET API",()=>{
    it("get",()=>{
        cy.request("GET" , "https://reqres.in/api/users/2").its("status").should("equal",200);
        
    })
})