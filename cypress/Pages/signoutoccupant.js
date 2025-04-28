export default class signoutoccupant{
    occupantsignout(){
        cy.get('[id="profile-down-menu-arrow"]').click();
        cy.get('[data-testid="logout-link"]').click();
        cy.url().should('eq' , 'https://stg.risebuildings.com/pm/login');
        
    }
}