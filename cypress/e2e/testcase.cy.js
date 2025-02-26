import Riselogin from "../Pages/Riselogin";
import PDF from "../Pages/pdfflow";
import 'cypress-xpath';
describe('To verify that user can download the PDF', ()=>{
    const ln = new Riselogin();
    before(()=>{
        
        ln.visit_website();
        ln.loginsteps();
    })
    it.skip('LOGIN',()=>{
        const ln = new Riselogin();
        ln.visit_website();
        ln.loginsteps();

    })
    it('open visitor and download pdf',()=>{
        const ln = new PDF();
        ln.clickaccess();
        ln.clickvisitors();
        ln.openvisitorlog();
        ln.clickdownloadPDF();
       // ln.pdfverification();
        

    })

   

})