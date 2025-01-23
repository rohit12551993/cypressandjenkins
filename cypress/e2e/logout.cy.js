export const LOGOUT = () =>{
  describe('LOGOUT', () => {
  
  
    it('TEST 1', () => {
      
      //STEPS
      cy.get(".avatar-content.ng-star-inserted").click();
     
     
      cy.wait(2000);
      cy.get("[data-testid='riseSignOut']").click();
    
      
    
    })
  })
}