describe("if else loop",()=>{
    it("how to use if else loop" , ()=>{
        cy.visit("https://belmont-fe.bigsteptech.in/login", { failOnStatusCode: false });
       
        
        if () {
            cy.get('img[src="https://belmont-profile-images.s3.us-east-2.amazonaws.com/images/66b49de1922beacdf0b6d408/Screenshot%202024-10-21%20at%207.51.56%20AM.png"]').should('be.visible')
            cy.get('img[src="https://belmont-profile-images.s3.us-east-2.amazonaws.com/images/66b49de1922beacdf0b6d408/Screenshot%202024-10-21%20at%207.51.56%20AM.png"]').click();
            cy.contains('Logout').click();       
        } else {
            cy.contains("I am a super admin").click();
            cy.wait(2000);
            cy.get("#email").click().type("superadmin@mail.com");
            cy.get("#password").click().type("superadmin@123");
            cy.get("button[type='submit']").click();
            
        }

    })
})