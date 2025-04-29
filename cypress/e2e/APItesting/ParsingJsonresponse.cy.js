describe("Parsing", () => {
    it("Parsing simple JSON response", () => {
      cy.request({
        method: "GET",
        url: "https://fakestoreapi.com/products"
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body[0].id).to.equal(1);
        expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
        expect(response.body[0].rating.rate).to.equal(3.9);
      });
    });
  });
  