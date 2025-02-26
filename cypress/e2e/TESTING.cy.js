import belmont_login_Superadmin from "../Pages/belmont_login_Superadmin";



describe("To verify that super admin can add members", () => {

const login = new belmont_login_Superadmin(); // Use a unique name for the object

    before(() => {
        cy.fixture('creds').then((data)=>{
            // Super Admin login process
        login.openURL();
        login.clicksuperadmin();
        login.enterUsername(data.Username1);
        login.enterPassword(data.Password1);
        login.clicksignin();
        login.verifylogin(); // Fixed missing parentheses
    });
            
  })
})
