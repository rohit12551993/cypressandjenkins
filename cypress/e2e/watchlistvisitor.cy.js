import CreateWatchlistVisitor from "../Pages/createwatchlistvisitor.js";
import Riselogin from "../Pages/Riselogin.js";
import RiseLogout from "../Pages/Riselogout.js";

describe('watchlist', () => {
    it('open website', () => {
        const ln = new Riselogin();
        ln.visit_website();
        ln.loginsteps();
        cy.wait(3000);
    });
 

    it('create watchlist visitor', () => {
        const ln = new CreateWatchlistVisitor();
        ln.clickaccess();
        ln.clickdropdown();
        ln.clickwatchlistvisitors();
        ln.clickaddnew();
        ln.enterfirstname();
        ln.enterlastname();
        ln.clicksubmitbutton();
    }); 
const ln = new RiseLogout();
ln.clickavtaar();
ln.clicksignout();
});
