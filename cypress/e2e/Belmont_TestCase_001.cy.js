import belmontlogin from "../Pages/belmont_login_Superadmin";
import belmont_Addmembers from "../Pages/belmont_Addmembers";
import belmont_signout from "../Pages/belmont_signout";

describe("To verify that super admin can add members", () => {
    const login = new belmontlogin();

    before(() => {
        cy.fixture('creds').then((data) => {
            // Super Admin login process
            login.openURL();
            login.clicksuperadmin();
            login.enterUsername(data.Username1);
            login.enterPassword(data.Password1);
            login.clicksignin();
            login.verifylogin();
        });
    })

    it("To add members", () => {
        const ln = new belmont_Addmembers();
        ln.clickaddmembers();
        
        ln.enteremail();
        ln.selectuserrole();
        ln.clicksendinvite();
        ln.verifysuccessmessage();
    })
   const logout = new belmont_signout();
    after(() => {
        logout.clickavtaar();
        logout.clicklogout();
    })
})
