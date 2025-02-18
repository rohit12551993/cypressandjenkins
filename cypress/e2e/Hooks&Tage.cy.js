describe('Hooks and tags',() => {

    before(() =>{
        cy.log("we are in before")
    })

    it('searching', () => {
        cy.log("searching");
        


    })
    it('advance searching', () => {
        cy.log("advance searching..........");


        
    })
    it('listing products', () => {
        cy.log("listing products..........");

        
  

        
    })
    after(()=>{
        cy.log("we are in after");
    })

})