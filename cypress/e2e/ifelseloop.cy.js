describe("if-else logic in Cypress", () => {
    it("handles different scenarios", () => {
      cy.visit("https://belmont-fe.bigsteptech.in/login", { failOnStatusCode: false });
      cy.wait(3000);
  
      cy.get("body").then(($body) => {
        // Check if the logout icon exists
        if ($body.find(".w-5.h-5").length > 0) {
          cy.get("img[class='w-8 h-8 rounded-full']").click();
          cy.contains("Logout").click();
          cy.contains("I am a super admin").click();
          cy.wait(2000);
          cy.get("#email").type("superadmin@mail.com");
          cy.get("#password").type("superadmin@123");
          cy.get("button[type='submit']").click();
        } else {
          // Perform login
          cy.contains("I am a super admin").click();
          cy.wait(2000);
          cy.get("#email").type("superadmin@mail.com");
          cy.get("#password").type("superadmin@123");
          cy.get("button[type='submit']").click();
        }
      });
    });
  });
  