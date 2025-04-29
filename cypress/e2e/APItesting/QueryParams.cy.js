describe("API Testing",()=>{
    it("Passing query parameters",()=>{

        cy.request({
            method : "GET",
            url: "https://api.restful-api.dev/objects",
            qs: {id: 3},
            qs: {id: 5},
            qs: {id: 10}






        })
        .then((Response)=>{
            expect(Response.status).to.eq(200);
            expect(Response.status).equal(200);
          //  expect(Response.body.page).to.eq(2);
           // expect(Response.body.data).has.length(3)
           // expect(Response.body.data[0]).have.property('id',7);

        })
    })
})