describe("How to read data from a file after downloading it", () => {
    it("should download the file and log its content", () => {
      // Visit the URL where the file is available for download
      cy.visit("https://commitquality.com/practice-file-download");
  
      // Click the button to download the file
      cy.get("div[class='container'] div button").click();
  
      // Use cy.readFile to read the downloaded file asynchronously and log its content
      cy.readFile("cypress/downloads/dummy_file.txt").then((data) => {  //yaha file read hui and usko data mei pass kr dia humney
        // Log the file content to the console
        cy.log(data);

        let words = data.split(" ");
        let  firsttwowords = words.slice(0, 2);
        cy.log(firsttwowords);

      });
    });
  });
  