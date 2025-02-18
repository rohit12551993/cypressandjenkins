export const createwatchlistvisitor = () =>{
describe('watchlist', ()=>{

    it('watchlist visitor' , ()=>{

        cy.get("img[src='https://assets.stg.risebuildings.com/public/shared_portal/assets/images/navigation/access@2x.png']").click();
        cy.xpath("//div[contains(text(),'Visitors')]").click();
        cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > div.view-container.side-container > app-visitors > rise-common-tabs > div > div > nav > div.mat-tab-link-container > div > div > button > span.mat-button-wrapper > mat-icon').click();

    })
})
}