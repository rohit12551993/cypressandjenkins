import "cypress-file-upload"
describe('fileupload', () => {

    it('uploading single file', () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("test.csv");
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should('be.visible');


    });

    it('Renaming a file while uploading ', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath:'test.csv' , fileName:'rohit.csv'});
        cy.get("#file-submit").click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('be.visible');
    
    
        });
        it('uplodaing a file by drag and drop ', () => {
            cy.visit("https://the-internet.herokuapp.com/upload");
            cy.get("#drag-drop-upload").attachFile("test.csv",{subjectType:"drag-n-drop"});

        
            });
            it.only('uplodaing multiple files ', () => {
                cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
                cy.get("#filesToUpload").attachFile(["test.csv" , "testing.csv"]);
    
            
                });

});