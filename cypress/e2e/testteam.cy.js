import '@percy/cypress';

describe("browser commands", () => {
    it.only("commands", () => {

        cy.fixture("occupantdetails").then((data) => { // Loading fixture data
            cy.visit("https://stg.risebuildings.com/pm/login"); // Open the website
            cy.get("#rise-login-email").click().type(data.Email);// Enter email







            cy.get("button[type='button']").click(); // Click the continue button
            cy.get("#rise-login-password").click().type(data.Password); // Enter password
            cy.get("button[type='button']").click(); // Click the sign-in button
    
    
      
        })
    })

  })
  