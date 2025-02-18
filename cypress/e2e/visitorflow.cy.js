import * as Riselogin from "../Functions/Riselogin.js";
import * as Createvisitor from "../Functions/createvisitor.js";
import * as logout from "../Functions/logout.js";

describe('Visitor Flow', () => {
  it('TEST 1 - Login, Create Visitor, Logout', () => {
    
    Riselogin.Riselogin();

    
    Createvisitor.Createvisitor();
   
    
    logout.logout();
  });
});
