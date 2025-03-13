import { faker } from "@faker-js/faker";

describe("Creating 5 watchlist visitors at a single time", () => {
    // Use a loop to create 5 tests
    for (let i = 0; i <= 4; i++) {
        it(`Creating watchlist visitor ${i + 1}`, () => {  // Added dynamic test names
            cy.visit("https://stg.risebuildings.com");

            // Resize and position the window
            cy.window().then((win) => {
                win.moveTo(0, 0);
                win.resizeTo(screen.availWidth, screen.availHeight);
            });

            // Perform login actions
            cy.get('#rise-login-email').click().type("harish@madan.com");
            cy.get('[type="button"]').click();
            cy.get('#rise-login-password').click().type("Password@123");
            cy.get('[type="button"]').click();
            cy.wait(5000);  // It's good to avoid fixed waits; see note below

            // Navigate through the app
            cy.get("img[src='https://assets.stg.risebuildings.com/public/shared_portal/assets/images/navigation/access@2x.png']").click();
            cy.contains(" Visitors ").click();
            cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > div.view-container.side-container > app-visitors > rise-common-tabs > div > div > nav > div.mat-tab-link-container > div > div > button > span.mat-button-wrapper > mat-icon').click();
            cy.contains(" Watch List ").click();
            cy.contains(" Add New ").click();

            // Fill in visitor details using Faker
            cy.get("input[formcontrolname='firstname']").click().type(faker.person.firstName());
            cy.get("input[formcontrolname='lastname']").click().type(faker.person.lastName());
            cy.wait(2000);  // You might want to remove or replace with a proper wait condition

            // Select a specific value from the dropdown
            cy.get(".mat-select-custom-arrow-wrapper").click();
            cy.contains(" Anaya ").click();


            // Submit the form
            cy.get(".rb-c-dailog-submit.rb-font-weight600.rb-u-gap-left.clickable").click();
            cy.get(".avatar-container").click();
        cy.contains(" Sign Out ").click();
        cy.wait(2000);
        cy.url().should('eq' , 'https://stg.risebuildings.com/pm/login');
        });
    }
});
