try {
    describe("I want to login",()=>{
        it("open website URL",()=>{
            //open URL
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.wait(2000);
        
        })
        it("enter email",()=>{
            //user will enter email
            cy.get("input[placeholder='Username']").click().type("Admin")
            cy.wait(2000);
        })
        it("enter password",()=>{
            //user will enter password
            cy.get("input[placeholder='Password']").click().type("admin123")
            cy.wait(2000);
        })
        it("click login",()=>{
            //user will click login button
            cy.get("button[type='submit']").click();
        })
    })
    
} catch (error) {
    console.log("error caught")
    
}








