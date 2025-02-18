import OrangeHRMlogin from "../Pages/OrangeHRMlogin"
describe('HRMlogin',()=>{

    //using POM 

it('hrmlogin', ()=>{
const ln=new OrangeHRMlogin();
ln.visit_site();
ln.enter_username("Admin")
ln.enter_password("admin123")
ln.press_login();

})
})