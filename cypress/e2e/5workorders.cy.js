describe("Creating 5 work orders",()=>{
    
        it("Adding work orders",()=>{
            for(let i=0;i<=4;i++){

            cy.visit("https://stg.risebuildings.com/pm/login");
            cy.get("#rise-login-email").click().type("harish@madan.com");
            cy.get("button[type='button']").click();
            cy.get("#rise-login-password").click().type("Password@123");
            cy.get("button[type='button']").click();
            cy.wait(5000);
            cy.get('img[src="https://assets.stg.risebuildings.com/public/shared_portal/assets/images/navigation/operations@2x.png"]').click();
            cy.contains(" Work Orders ").click();


            
            cy.get('button[class="mat-focus-indicator mat-menu-trigger rb-fill-btn mat-raised-button mat-button-base"]').click();
            cy.focused().type('{downarrow}');
            cy.focused().type('{enter}');
            cy.get('input[data-placeholder="Tenant"]').click();
            cy.focused().type('{downarrow}');
            cy.focused().type('{enter}');
            cy.get('input[formcontrolname="description"]').click().type("This is Description");
            cy.get("button[class='mat-focus-indicator rb-fill-btn mat-raised-button mat-button-base'] span[class='mat-button-wrapper']").click();
            cy.get(".mat-icon.notranslate.tool-bar-icon.material-icons.mat-icon-no-color").click()
            cy.get(".avatar-container").click();
            cy.get('a[data-testid="riseSignOut"]').click();

            cy.wait(5000);
            }

            })
        })
        


