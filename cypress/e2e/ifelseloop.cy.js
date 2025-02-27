describe("if else loop",()=>{
    it("how to use if else loop" , ()=>{
        cy.visit("https://belmont-fe.bigsteptech.in/login", { failOnStatusCode: false });

        if (cy.get(".w-5.h-5").should('be.visible')) {
            cy.get("img[class='w-8 h-8 rounded-full']").click();
            cy.contains("Logout").click();

            
        } else {
            cy.contains("I am a super admin").click();
cy.wait(2000);
cy.get("#email").click().type("superadmin@mail.com");
cy.get("#password").click().type("superadmin@123");
cy.get("button[type='submit']").click();

            
        }
       
        
    })
})