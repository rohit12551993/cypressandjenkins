///<reference types="Cypress" />
describe('DROPDOWNS', () => {
  
  
    it('TEST 1', () => {

       
        cy.visit('https://testautomationpractice.blogspot.com/')

//this is for mouseover
        cy.get('.dropbtn').trigger('mouseover').click()
        //this is for right click

        cy.get('.dropbtn').trigger('contextmenu')

        //this is for double click
        cy.get('.dropbtn').trigger('dblclick')
        



 


    

        
        







      
      
  
  
      
  
    
    
    })
  })
  