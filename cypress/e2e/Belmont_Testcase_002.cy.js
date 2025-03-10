import belmontlogin from "../Pages/belmont_login_Superadmin";
import addeditgroups from "../Pages/belmont_addeditgroups";
import belmont_signout from "../Pages/belmont_signout";

describe('to verify that user can login', () => {
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

    it('add and edit groups', () => {
        const creategroups = new addeditgroups();
        creategroups.creategroups();
    });
  const logout = new belmont_signout
    after(() => {
    logout.clickavtaar();
    logout.clicklogout();
})
});
