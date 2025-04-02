import occupantlogin from "../Pages/Occupantlogin.js";
import  createvisitoroccupant from "../Pages/occupantcreatevisitor.js";
import signoutoccupant from "../Pages/signoutoccupant.js";
describe("Creating visitor from occupant portal",()=>{

    it("Logging in through occupant portal",()=>{
        const occlogin = new occupantlogin();
        occlogin.occupantLogin();
    })

    it("Create visitor through occupant portal",()=>{
       const xyz = new createvisitoroccupant()
       xyz.createvisitorfromoccupant();

       
       })

       it("occupant will signout from portal",()=>{
        const SO = new signoutoccupant();
        SO.occupantsignout();

    })
})