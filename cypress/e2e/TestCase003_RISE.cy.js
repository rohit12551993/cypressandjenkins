import Riselogin_PM from "../Pages/Riselogin_PM"
import Riselogin_staff from "../Pages/Riselogin_Staff";
import createvisitor from "../Pages/createvisitor";
import logout_PM from "../Pages/logout_PM";
import search_edit_visitor from "../Pages/visitor_search_edit_staff";
describe('RISE TEST CASE',() => {
    it("RISE LOGIN AS PM",()=>{
        const riseloginPM = new Riselogin_PM();
        riseloginPM.visit_website();
        riseloginPM.loginsteps();


    })
    it("Create visitor from PM",()=>{
    const visitor =  new createvisitor();
    visitor.createvisitor();
    })
    it("logout from PM", ()=>{
        const logout = new logout_PM();
        logout.logout();
    
    })
    it("login from staff",()=>{
        const loginstaff = new Riselogin_staff
        loginstaff.stafflogin();
    })
    it("Visitor search and edit from staff",()=>{
        const searchandedit = new search_edit_visitor();
        searchandedit.createEditVisitor();
    })

})