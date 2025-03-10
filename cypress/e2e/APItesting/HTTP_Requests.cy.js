describe("HTTP requests", () => {
    // GET request validation
    it("GET REQUEST", () => {
      cy.request("GET", "https://jsonplaceholder.typicode.com/posts")
        .its("status")
        .should("equal", 200); // Correct: Number, not string
    });
  
    // POST request validation
    it("POST REQUEST", () => {
      cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        body: {
          title: "te324st1 po432t",
          body: "f4324offdcx",
          userId: 432,
        },
      })
        .its("status")
        .should("equal", 201); // HTTP 201: Created
    });
  
    // PUT request validation
    it("PUT REQUEST", () => {
      cy.request({
        method: "PUT",
        url: "https://jsonplaceholder.typicode.com/posts/1", // Update post with ID 1
        body: {
          title: "Mr harish madan",
          body: "testing",
          userId: 58,
          id: 1, // Keep the ID the same as the URL path
        },
      })
        .its("status")
        .should("equal", 200); // HTTP 200: Updated
    });
  
    // DELETE request validation
    it("DELETE REQUEST", () => {
      cy.request({
        method: "DELETE",
        url: "https://jsonplaceholder.typicode.com/posts/1",
      })
        .its("status")
        .should("equal", 200); // HTTP 200: Deleted
    });
  });
  