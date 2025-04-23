///<reference types="Cypress" />
describe('Alerts', () => {
  
  
    it('TEST 1', () => {

       
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        //for javascript alert window
        /*cy.get("div[class='example'] h3").should('be.visible');
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
        cy.get("#result").should('be.visible')*/

        //For confirmation alert
       cy.get("button[onclick='jsConfirm()']").click();
        cy.get("#result").should('have.text','You clicked: Ok');
        cy.on('window:confirm',(t)=>{
             expect(t).to.contains('I am a JS Confirm');
          })

          cy.get("button[onclick='jsConfirm()']").click();
          cy.on('window:confirm',()=> false);
          cy.get("#result").should('have.text', "You clicked: Cancel");


/*cy.window().then((win)=>{
    cy.stub(win,'prompt').returns('Wlcome')
})
    cy.get("button[onclick='jsPrompt()']").click();
    cy.on('window:confirm',()=> false);

    
});*/

})
})
  