import { faker } from "@faker-js/faker";

export default class PDF {
    clickaccess() {
        cy.get("img[src='https://assets.stg.risebuildings.com/public/shared_portal/assets/images/navigation/access@2x.png']").click();
        cy.wait(2000);
    }

    clickvisitors() {
        cy.xpath("//div[contains(text(),'Visitors')]").click();
        cy.wait(3000);
    }

    openvisitorlog() {
        cy.get("body > app-root:nth-child(1) > div:nth-child(1) > mat-sidenav-container:nth-child(3) > mat-sidenav-content:nth-child(4) > div:nth-child(2) > app-visitors:nth-child(2) > rise-common-tabs:nth-child(1) > div:nth-child(1) > app-visitors-services:nth-child(3) > div:nth-child(2) > rise-common-table:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1)").click();
    }

    clickdownloadPDF() {
        // Step 1: Click the button to trigger the download
        cy.get("button.mat-focus-indicator.rb-fill-btn.rb-u-gap-left.mat-button.mat-button-base span.mat-button-wrapper").click();

        // Step 2: Wait for the file to be downloaded
        cy.wait(5000); 

        // Step 3: Get the latest downloaded file and rename it
        cy.task("getLatestFile", "cypress/downloads").then((latestFile) => {

            // Step 4: Rename the file
            let filename = faker.person.firstName() + "_" + Date.now() + ".pdf"; // Unique name
            cy.task("renameFile", { 
                from: `cypress/downloads/${latestFile}`,
                to: `cypress/downloads/${filename}` // New file name
            }).then(() => {
                cy.readFile(`cypress/downloads/${filename}`).should("exist"); // Verify new file exists
            });
        });
    }

   /* pdfverification() {
        cy.log("message1");
        cy.readFile("cypress/downloads/visitors_service_6703c4c641b84b2c88388b81_2025-02-21T09_50_12.945Z.pdf");
        cy.log("message2");
        cy.readFile("cypress/downloads/visitors_service_6703c4c641b84b2c88388b81_2025-02-21T09_57_36.626Z.pdf");
    }*/
}
