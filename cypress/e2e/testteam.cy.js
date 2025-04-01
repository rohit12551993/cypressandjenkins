describe("browser commands",()=>{
        it.only("commands",()=>{


           cy.visit("https://testautomationpractice.blogspot.com/");
           cy.get("#male").check().should('be.checked')

           
                               
           
            
           
            });
        });
    
