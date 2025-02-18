import { faker } from "@faker-js/faker";


export const Createvisitor = () =>{
  

describe('create visitor', () => {
  
  
    it('createvisitor', () => {
      
      //STEPS
      
      cy.get("img[src='https://assets.stg.risebuildings.com/public/shared_portal/assets/images/navigation/access@2x.png']").click();
      cy.xpath("//div[contains(text(),'Visitors')]").click();
      cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > div.view-container.side-container > app-visitors > rise-common-tabs > div > div > nav > div.mat-tab-link-container > div > div > button > span.mat-button-wrapper > mat-icon').click();
   cy.get('[href="/pm/visitors/authorized-visitors"]').click();
      cy.xpath("//span[normalize-space()='Add New']").click();
      cy.contains('Select Tenant').click();
      cy.xpath("//span[normalize-space()='Andria']").click();
      cy.wait(2000);
      cy.contains('Select Occupant').click();
      cy.xpath("//span[@class='mat-option-text']").click();
      cy.get('input[formcontrolname="firstname"]').click();
      cy.get('input[formcontrolname="firstname"]').type(faker.person.firstName());
      cy.get('input[formcontrolname="lastname"]').click();
      cy.get('input[formcontrolname="lastname"]').type(faker.person.firstName());
     cy.xpath("//button[text()=' Submit ']").click();
     cy.wait(2000);
     cy.contains('Select').click();
     cy.xpath("//span[normalize-space()='Service']").click();
     cy.xpath("//button[text()=' Submit ']").click();




      
      
      
      



      
    
    })
  })
}