const { faker } = require("@faker-js/faker/locale/af_ZA");


describe("Automation Practice", () => {

 
  it("handles alert and confirm box", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("#singleFileInput").attachFile({filePath:'test.csv',fileName:'rohitmadan'})
    cy.get("div[id='HTML1'] h2[class='title']").screenshot("particular element");
  });

 

});
