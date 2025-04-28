export default class LoginOccupant { // Class name in PascalCase
    occupantLogin() {  // Method name camelCase
  
      try {
        cy.fixture("occupantdetails").then((data) => { // Loading fixture data
          cy.visit("https://stg.risebuildings.com/pm/login"); // Open the website
          cy.get("#rise-login-email").click().type(data.Email); // Enter email
          cy.get("button[type='button']").click(); // Click the continue button
          cy.get("#rise-login-password").click().type(data.Password); // Enter password
          cy.get("button[type='button']").click(); // Click the sign-in button
  
          // Assertion to check if "Home" text is visible (this verifies we're on the dashboard page)
          cy.contains("Home").should('be.visible');
          
        });
      } catch (error) {
        cy.log("An error occurred while logging in: " + error.message); // Log the error message
      }
  
    }
  }
  