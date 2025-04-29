describe("POST API", () => {
    it("should create a new user", () => {
      cy.request({
        method: "POST",
        url: "https://api.restful-api.dev/objects",
        body: {
          name: "Apple MacBook Pro 16",
          data: {
            year: 2019,
            price: 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
          }
        }
      }).its("status").should("equal", 200);
    });
  });
  