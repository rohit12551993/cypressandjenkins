
    describe('childtab', () => {
      
it('Approach 1', () => {
cy.visit("https://the-internet.herokuapp.com/windows")
cy.get("a[href='/windows/new']").invoke('removeAttr','target').click();
cy.get("div[class='example'] h3").should('be.visible');
cy.wait(3000);
cy.go('back');





        
          
      });
      
});

  