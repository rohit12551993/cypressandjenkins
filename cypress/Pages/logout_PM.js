export default class logout_PM{
    logout(){
        cy.get(".avatar-container").click();
        cy.xpath("//a[normalize-space()='Sign Out']").click();
        cy.wait(2000);
        cy.url().should('eq' , 'https://stg.risebuildings.com/pm/login');


    }

}