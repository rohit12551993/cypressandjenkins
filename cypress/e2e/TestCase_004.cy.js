import Riselogin_PM from "../Pages/Riselogin_PM";
import discoverlink_PM from "../Pages/creatediscoverlink_PM";

describe("to verify that staff is able to open the discover link created by PM",()=>{
    it("PM login flow",()=>{
        const login = new Riselogin_PM();
        login.visit_website();
        login.loginsteps();
    })
    it("Creating a discover link from PM",()=>{
        const creatediscoverlinkPM = new discoverlink_PM();
        creatediscoverlinkPM.discoverlink_PM();
    })
})