import belmont_signout from "./belmont_signout";


export default class belmontlogin {

    // Method 1: Open the URL
    openURL() {
        cy.visit("https://belmont-fe.bigsteptech.in/login", { failOnStatusCode: false });
    }

    // Method 2: Click Super Admin Button
    clicksuperadmin() {
        cy.get("body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").click();
        cy.wait(2000);
    }

    
        // Method 3: Enter Username
    enterUsername(Username1) 
    {
        cy.get("#email").click().type(Username1);
    }

    // Method 4: Enter Password
    enterPassword(Password1) 
    {
        cy.get("#password").click().type(Password1);
    }

    // Method 5: Click Sign In Button
    clicksignin() 
    {
        cy.get("button[type='submit']").click();
    }

    // Method 6: Verify Successful Login
    verifylogin()
     {
        cy.get("h3[class='font-inter text-2xl font-semibold leading-[29.26px] text-left mb-8 md:mb-0']").should('be.visible');
    }
        
     }
    
