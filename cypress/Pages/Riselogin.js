export const Riselogin = () => {
  describe('LOGIN', () => {
    it('TEST 1', () => {
      // Maximize window
      cy.window().then((win) => {
        win.moveTo(0, 0);
        win.resizeTo(screen.availWidth, screen.availHeight);
      });

      // Visit the website after maximizing the window
      cy.visit("https://stg.risebuildings.com");
      cy.window().then((win) => {
        win.moveTo(0, 0);
        win.resizeTo(screen.availWidth, screen.availHeight);
      });

      // Check if user is already logged in by looking for an avatar
      cy.get('body').then((body) => {
        if (body.find('.avatar-content.ng-star-inserted').length > 0) {
          // If avatar is found, the user is logged in
          cy.get(".avatar-content.ng-star-inserted").click();
          cy.wait(3000); // Wait for the menu to load
          cy.xpath('//a[normalize-space()="Sign Out"]').click(); // Click on Sign Out 
        } 

        // Perform login steps
        cy.fixture('Creds').then((data)=>{
          cy.get('#rise-login-email').click().type(data.Email);
        cy.get('[type="button"]').click();
        cy.get('#rise-login-password').click().type(data.Password);
        cy.get('[type="button"]').click();
        cy.contains('DASHBOARD').should('be.visible'); // Verify that the dashboard is visible after login
        cy.contains(".rise-vts-logo.ng-tns-c196-2").should('be.visible');

        })
        
      });
    });
  });
};

