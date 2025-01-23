//export const LOGIN = () =>{
describe('LOGIN', () => {
  
  
  it('TEST 1', () => {
    
    //STEPS
    cy.visit("stg.risebuildings.com")
    cy.title().should('eq','Property Portal')

    cy.get('#rise-login-email').click().type('harish@madan.com');
    
    cy.get('[type="button"]').click();
   
    cy.get('#rise-login-password').click().type('Password@123');
    
    cy.get('[type="button"]').click();
    
    cy.contains('DASHBOARD').should('be.visible');
  
  })
})



