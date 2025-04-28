import { faker } from "@faker-js/faker";

export default class createvisitoroccupant{
    createvisitorfromoccupant(){


        try {
            cy.get('[data-testid="visitors"]').click(); //this will click on visitors
        cy.get(".visitor_dropdown_content.notificationsArea").click({force: true}); //this will click on create Visitor
        cy.get('[ng-click="addSingleVisitor()"]').click({force: true}); //this will click on create visitor pass

        const firstname = faker.person.firstName();
        cy.get('[ng-model="data.firstname"]').click().type(firstname); //this will enter the first name

        const lastname = faker.person.firstName();
        cy.get('[ng-model="data.lastname"]').click().type(lastname);//this will enter the lastname

        cy.get('[type="submit"]').click(); //this will click on submit button

        cy.get(".col-sm-9.form-group.resident-visitor-select").click(); //this will click on search and select occupant

        cy.contains("Gaurav Madan").type('{enter}');// this will add the host

      cy.contains(firstname).should('be.visible');
      cy.contains(lastname).should('be.visible');
        

        cy.get('[type="submit"]').click();
        } catch (error) {
            cy.log("An error occured while creating a visitor")
            
        }
        




    

    }
}