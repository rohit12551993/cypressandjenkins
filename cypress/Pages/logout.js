export const logout = () => {
    describe('logout', () => {
      
        it('TEST 1', () => {
        // Ensure avatar is visible before clicking
        cy.get(".avatar-content.ng-star-inserted") .should('be.visible').click();
         
          
  
        // Wait for the menu to appear dynamically
        cy.xpath('//a[normalize-space()="Sign Out"]').should('be.visible').click();
           // Ensure "Sign Out" is visible before clicking
          
      });
    });
  };
  