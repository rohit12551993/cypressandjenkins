import * as login from "../Functions/OrangeHRMlogin.js";
import * as logout from "../Functions/OrangeHRMlogout.js";
describe('LOFINLOGOUTFLOW', () => {
  
  
    it('TEST 1', () => {
    login.login();
    cy.wait(5000);
    logout.logout();
        

      
      

      
    
    })
  })