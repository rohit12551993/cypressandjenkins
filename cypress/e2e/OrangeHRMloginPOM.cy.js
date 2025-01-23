import clickupgradebutton from "../Functions/clickupgradebutto.js";
import login from "../Functions/OrangeHRMlogin.js";
import logout from "../Functions/OrangeHRMlogout.js";
describe('orangehrmloginbyPOM', () => {
    before(() => {
        // Clear all cookies, localStorage, and sessionStorage before visiting the page
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((window) => {
          window.sessionStorage.clear();
        });
        //Visiting the PM Portal Homepage and vaidating the page
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); // Visiting the portal homepage
      });
  
    it('LOGIN TEST', () => {
        
   const ln=new login();
    ln.setUsername("Admin");
    ln.setPassword("admin123");
    ln.clickLogin();
    
    

    })

    it('clickupgradebutton', () => {
   const ln=new clickupgradebutton();
  ln.clickupgradebutton();  ; 
  })
  
})