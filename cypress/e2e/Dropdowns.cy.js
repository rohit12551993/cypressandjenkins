///<reference types="Cypress" />
describe('DROPDOWNS', () => {
  
  
    it('TEST 1', () => {

       
        cy.visit('www.wikipedia.com/')
 //dropdown with select that is selecting any particular option from a dropdown
 cy.get("#searchInput").click().type('Delhi');
 cy.get(".suggestion-title").contains('fdsfs').click();
        



    

        
        







      
      
  
  
      
  
      
    
    })
  })
  