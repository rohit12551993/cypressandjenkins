//export const LOGIN = () =>{
describe('LOGIN', () => {
  it('TEST 1', () => {
    cy.visit("https://stg.risebuildings.com");

    // Check if user is already logged in by looking for an avatar
    cy.get('body').then((body) => {
      if (body.find('.avatar-content.ng-star-inserted').length > 0) {
        // If avatar is found, the user is logged in
        cy.get(".avatar-content.ng-star-inserted").click();
        cy.wait(3000); // Wait for the menu to load
        cy.xpath('//a[normalize-space()="Sign Out"]').click(); // Click on Sign Out 
        cy.get('#rise-login-email').click().type('harish@madan.com');
        cy.get('[type="button"]').click();
        cy.get('#rise-login-password').click().type('Password@123');
        cy.get('[type="button"]').click();
        cy.contains('DASHBOARD').should('be.visible'); // Verify that the dashboard is visible after login
      } else {
        // If avatar is not found, the user is not logged in
        cy.get('#rise-login-email').click().type('harish@madan.com');
        cy.get('[type="button"]').click();
        cy.get('#rise-login-password').click().type('Password@123');
        cy.get('[type="button"]').click();
        cy.contains('DASHBOARD').should('be.visible'); // Verify that the dashboard is visible after login
      }
    });
  });
});
