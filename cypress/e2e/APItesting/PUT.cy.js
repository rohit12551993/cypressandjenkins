describe("PUT API", () => {
    it("should update the created user", () => {
      cy.request({
        method: "PUT",
        url: "https://api.restful-api.dev/objects/7",
        body: {
          name: "Apple MacBook Pro 16",
          data: {
            year: 2019,
            price: 2049.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
            color: "silver"
          }
        }
      }).its("status").should("equal", 405);
    });
  });
  