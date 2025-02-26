import { faker } from "@faker-js/faker";
export default class addeditgroups{
    creategroups(){
        // click hamburger
        cy.get('.w-5.h-5').click(); 
        //click on manage groups
        cy.get("body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1) > div:nth-child(1) > span:nth-child(3)").click();
        //click on add groups
        cy.get("div[class='flex items-center'] button[type='button']").click();
        //click on group name and type
        let groupname = faker.person.firstName();
        cy.get("input[placeholder='Write name of the Group']").click().type(groupname);
        //click on create group button
        cy.get("button[type='submit']").click();
        //verify success message
        //cy.wait(2000);
       // cy.xpath("//div[contains(text(),'Group Created Successfully.')]").should('be.visible');

       //click and type into searchbox the newly created group
       cy.get("#default-search").click().type(groupname).type('{enter}');

       //click on 3 dots
       cy.get("img[alt='Open actions']").click();
       cy.wait(2000);

       //click on edit button
       cy.contains('Edit').click();

       //edit the already added name
       cy.get("#name").click().clear().type(groupname+"123");

       //click on save changes button
       cy.get("button[type='submit']").click();

        


    }
}