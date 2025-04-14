

describe("Automation Practice", () => {
  it("fills and tabs through the name field", () => {
    cy.fixture("staffcreds").then((data)=>{
      cy.log(data.Username)
      cy.log(data.Password)
      cy.log(data.Email)
    });
  });
});
