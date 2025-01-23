describe('Assertions demo', () => {
  
  //  it('Implicit assertions', () => {
      
    //  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       
      // SHOULD AND
    //should
    //  cy.url().should('include', 'orangehrmlive.com'); // Check if the URL includes the desired keywords
     // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Match the exact URL
      //cy.url().should('contain', 'orangehrm'); // Check if the URL contains the desired keyword

      //instead of capturing the url again and again we can capture the URL only once then we can apply should assertions all together

//cy.url().should('include', 'orangehrmlive.com').should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').should('contain', 'orangehrm');

//instead of using multiple SHOULD we can also use AND
//cy.url().should('include', 'orangehrmlive.com').and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').and('contain', 'orangehrm');

//to verify the title of the page
//cy.title().should('include' , 'Orange').and('eq' , 'OrangeHRM')

//to verify a particular webelement on a page 
//cy.get('.orangehrm-login-branding > img').should('be.visible')
//cy.get('.orangehrm-login-branding > img').should('exist')





 //   });



    it('Explicit assertions', () => {

        //EXPECT ----BDD
        //ASSERT-----TDD

       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.xpath("//input[@placeholder='Username']").click().type('Admin');
        cy.xpath("//input[@placeholder='Password']").click().type('admin123');
        cy.xpath("//button[normalize-space()='Login']").click();

        //now here we have to verify the username
        //in cypress if we have to create a variable the we use LET keyword

        let name="Aruliny Bhavish";
        cy.get("//p[@class='oxd-userdropdown-name']").then(    (x)=>{
           let actName=x.text()
            expect(actName).to.equal(name) //this is a BDD assertion
            expect(actName).to.not.equal(name)//this is a BDD assertion


            assert.equal(name,actName)//this is TDD assertions
            assert.not.equal(name.actName) //this is TDD assertion






                                                                  })

        
    



      
        
  
  
  
  
      });
  

});