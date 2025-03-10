// <reference types="Cypress-xpath" />
import 'cypress-xpath';
export default class discoverlink_PM{
    discoverlink_PM(){
        //click on the settings button/icon
    
        cy.contains(" SETTINGS ").click();

        //click on discover links under settings
        cy.contains(" Discover Links ").click();

        //closing the side menu
        cy.get(".fas.fa-caret-left.ng-star-inserted").click();

        //clicking on create new button
        cy.contains(" Create New ").click();

        //click on link
        cy.contains(" Link ").click();










    }
}