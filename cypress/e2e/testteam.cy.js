

describe("Automation Practice", () => {
  it("fills and tabs through the name field", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.url().should('eq', 'https://testautomationpractice.blogspot.com/');

    //cy.clickradiobutton("male");
  });
});
