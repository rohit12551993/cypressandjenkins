import stafflogin from "../Pages/stafflogin"
import staffvisitor from "../Pages/staffvisitor";
describe('create visitor from staff portal',() => { 
    it('login with staff portal',()=>{
        const ln = new stafflogin();
        ln.openurl();
        ln.enteremail();
        ln.clickcontinue();
        ln.enterpassword();
        ln.clicksignin();
        ln.verifydashboard();

    })
    it('creating a visitor from staff', () =>{
        const ln = new staffvisitor();
        ln.clickvisitors();
        ln.clickaddvisitor();
        ln.clickcreatevisitorpass();
        ln.selectoccupant();
        ln.enterfirstname();
        ln.enterlastname();
        ln.clicksubmitbutton();
        ln.clickcompletebutton();
        
    })

})