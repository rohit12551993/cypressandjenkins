export default class StaffLogin {
    // Open URL
    openurl() {
        cy.visit("https://stg.risebuildings.com/pm/login");
    }

    // Enter email ID
    enteremail() {
        cy.fixture("staffcreds").then((data) => {
            cy.get("#rise-login-email").click().type(data.Email);
        }); // ✅ Properly closed `.then()`
    }

    // Click Continue
    clickcontinue() {
        cy.get("button[type='button']").click();
    }

    // Enter Password
    enterpassword() {
        cy.fixture('staffcreds').then((data) => {
            cy.get("#rise-login-password").click().type(data.Password);
        }); // ✅ Properly closed `.then()`
    }

    // Click Sign In
    clicksignin() {
        cy.get("button[type='button']").click();
    }

    // Verify Dashboard
    verifydashboard() {
        cy.get("a[href='#/portal/staff/features']").should('be.visible');
    }
}
