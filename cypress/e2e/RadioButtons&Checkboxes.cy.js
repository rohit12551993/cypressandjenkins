describe('RadioButtons&Checkboxes', () => {
  
  
    it('TEST 1', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        
        //checking the visibility of a radio button
      //  cy.get('input#male').should('be.visible')
       // cy.get('input#female').should('be.visible')

        //checking a radio button
       // cy.get("input#male").check().should('be.checked')


        //unchecking a radio button
       // cy.get("input#male").check().should('be.checked')

        //cy.get('input#monday').click()
        //cy.get('input#tuesday').click()
        //cy.get('input#wednesday').click()
cy.wait(4000)
        //selecting all the checkboxes
       // cy.get("input.form-check-input[type='checkbox']").check()

       //selecting first and last checkboxes
       cy.get("input.form-check-input[type='checkbox']").first().check()
       cy.get("input.form-check-input[type='checkbox']").last().check()







      
      
  
  
      
  
      
    
    })
  })
  