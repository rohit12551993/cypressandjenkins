// <reference types="Cypress-xpath" />
import { faker } from '@faker-js/faker';
import 'cypress-xpath';
import 'cypress-file-upload';

export default class discoverlink_PM {
  discoverlink_PM() {
    // Click on the settings button/icon
    cy.contains("SETTINGS").click();

    // Click on Discover Links under settings
    cy.contains("Discover Links").click();

    // Closing the side menu
    cy.get(".fas.fa-caret-left.ng-star-inserted").click();

    // Clicking on the Create New button
    cy.contains("Create New").click();
    
    // Wait for the element to be visible instead of using cy.wait(2000)
    //cy.contains("Select Format").should('be.visible').click();

    // Click on the 'Link' button
    cy.xpath('//button[normalize-space()="Link"]').click();

    // Click on the 'Select Format' dropdown and use keyboard to select options
    cy.contains("Select Format").click();

    // Using 'downarrow' multiple times to select the correct option
    cy.focused().type('{downarrow}{downarrow}{downarrow}{downarrow}{enter}');

    // Enter the URL
    cy.get("input[formcontrolname='link_url']").click().type("https://www.google.com");

    // Generate a random title and store it in Cypress environment variable
    let title = faker.person.firstName();
    Cypress.env("Title", title); // Set the title in the Cypress environment

    // Enter the generated title
    cy.get("input[formcontrolname='link_title']").type(title);
    cy.wait(2000);

    //upload the image from fixture

    cy.fixture("DSC_0394.JPG").then((data)=>{
        const image = data;
        


    })
    cy.get("input[type='file']").attachFile(image);// Adjust this selector based on the actual icon

    
       
    }

    


    }
    
    // If the file input is hidden, use `{ force: true }` to interact with it.
    // Also, we can check for its visibility using `.should('be.visible')` or directly trigger the file upload.
  //  cy.get("input[type='file']")
     // .should('be.visible') // Ensure it's visible before interacting (this is optional)
      //.attachFile('image.jpg', { force: true });  // Replace 'test-image.jpg' with your actual image file in the fixtures folder




