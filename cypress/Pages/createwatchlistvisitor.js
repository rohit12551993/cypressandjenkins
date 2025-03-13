import { faker } from "@faker-js/faker";
/// <reference types="Cypress" />

export default class createwatchlistvisitor{
    clickaccess()
    {
        cy.get("img[src='https://assets.stg.risebuildings.com/public/shared_portal/assets/images/navigation/access@2x.png']").click();
    }
clickvisitors()
{
    cy.xpath("//div[contains(text(),'Visitors')]").click();
}
clickdropdown()
{
    cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > div.view-container.side-container > app-visitors > rise-common-tabs > div > div > nav > div.mat-tab-link-container > div > div > button > span.mat-button-wrapper > mat-icon').click();
}
clickwatchlistvisitors(){
    cy.get("button[class='mat-focus-indicator rb-fill-btn mat-button mat-button-base'] span[class='mat-button-wrapper']").click();

}
clickaddnew()
{
    cy.contains(" Add New ").click();
}
enterfirstname()
{
    cy.get("input[formcontrolname='firstname']").click().type(faker.person.firstName);
}
enterlastname()
{
    cy.get("input[formcontrolname='lastname']").click().type(faker.person.lastName);
}
selectreportedby()
{
    cy.get(".mat-select-custom-placeholder").click().select('Anaya')
}
clicksubmitbutton()
{
    cy.get(".rb-c-dailog-submit.rb-font-weight600.rb-u-gap-left.clickable").click();
}
}
