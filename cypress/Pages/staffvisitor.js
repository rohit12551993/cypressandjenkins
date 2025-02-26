import { faker } from "@faker-js/faker";
/// <reference types="Cypress" />

export default class staffvisitor{
    //click on visitors
    clickvisitors()
    {
    cy.get("body > app-root:nth-child(2) > div:nth-child(1) > app-staff:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > mat-sidenav-container:nth-child(1) > mat-sidenav:nth-child(3) > div:nth-child(1) > mat-nav-list:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1) > span:nth-child(1)").click();
    }
    //click on add visitor
    clickaddvisitor()
    {
        cy.get("div[class='button-row text-center panel-body ng-star-inserted'] button[type='button']").click();
    
    }
    //click on create visitor pass
    clickcreatevisitorpass()
    {
        cy.get("mat-tab-body li:nth-child(1) a:nth-child(1)").click();

    }
    //select the tenant/occupant
    selectoccupant()
    {
    cy.xpath("//*[@id='mat-option-17' and @tabindex='0']").click();

    }
    //type firstname
    enterfirstname()
    {
       let firstname = "fdusyfgdf"
       cy.get("input[data-placeholder='Firstname']").click().type(firstname);
    }
    //type lastname
    enterlastname()
    {
        let lastname = "fdusyfgdf"
        cy.get("input[data-placeholder='Lirstname']").click().type(lastname);
    }
    //click on submit button
    clicksubmitbutton()
    {
        cy.get(".button-row.text-right").click()
    }
    //click on complete button
    clickcompletebutton()
    {
        cy.get(".mat-button-wrapper").click();
    }
    //verify that visitor is created
   /* visitorcreated()
    {
cy.contains(firstname)
    }*/ 
}