///<reference types="Cypress" />
require('@4tw/cypress-drag-drop');
describe('DROPDOWNS', () => {
  
  
    
    it('right click', () => {

       
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.wait(3000);
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');

    
    
    })
    it('double click', () => {

       
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[ondblclick='myFunction1()']").dblclick();
      //  cy.get("button[ondblclick='myFunction1()']").trigger('dblclick')

    
    
    })
    it('drag & drop', () => {

       
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("div[id='draggable'] p").drag("#droppable");


    
    
    })
    it.only('Scroll the page', () => {

       
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("div[id='HTML12'] h2[class='title']").scrollIntoView();
        


    
    
    })
  })
  