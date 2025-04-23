//const fs = require('fs'); // Importing Node.js fs module
//const path = require('path'); // For handling file paths
import 'cypress-xpath';
describe("Reading data from pdf file after downloading it ",()=>{
    it("reading data from pdf",()=>{


        cy.visit("https://stg.risebuildings.com")
        cy.get('#rise-login-email').click().type("harish@madan.com");
      cy.get('[type="button"]').click();
      cy.get('#rise-login-password').click().type("Password@123");
      cy.get('[type="button"]').click();
      cy.get("img[src='https://assets.stg.risebuildings.com/public/shared_portal/assets/images/navigation/access@2x.png']").click();
    cy.xpath("//div[contains(text(),'Visitors')]").click();
    cy.get(".mat-icon.notranslate.change-arrow.material-icons.mat-icon-no-color").click();
    cy.get('[href="/pm/visitors/authorized-visitors"]').click();
    cy.contains(" fd fdg ").click();
cy.contains(" More").click();



let file=cy.contains(" Export as PDF ").click();
cy.readFile(file).then((data)=>{
    cy.log(data);
})
})
})

