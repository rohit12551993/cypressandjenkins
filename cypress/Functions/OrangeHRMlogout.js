/// <reference types="Cypress-xpath" />
class logout{

  clicklogoutdropdown()
  {

cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();


  }
clicklogout()
{
  cy.get('[href="/web/index.php/auth/logout"]').click();
}
  
  }

export default logout;
