export default class Riselogin_staff {
    stafflogin() {
      cy.fixture('Creds').then((data) => {
        cy.get('#rise-login-email').click().type(data.staffusername);
        cy.get('[type="button"]').click();
        cy.get('#rise-login-password').click().type(data.staffpassword);
        cy.get('[type="button"]').click();
        cy.contains("Features ").should('be.visible');
        cy.log("User has successfully logged in as staff");
      });
    }
  }
  