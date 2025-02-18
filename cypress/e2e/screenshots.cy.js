describe('Screenshot' , () => {

    it('screenshots' , () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('Creds').then((data) =>{
            cy.get("input[placeholder='Username']").click().type(data.Username);
            cy.get("input[placeholder='Password']").click().type(data.Password);
            cy.get("button[type='submit']").click();
            cy.wait(3000);

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('be.visible');
                cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
                cy.xpath("//a[normalize-space()='Logout']").click();
                
           
            

        })
    })
})
