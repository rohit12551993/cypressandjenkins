export default class belmont_signout{

    //method1
    clickavtaar()
    {
        cy.get("img[class='w-8 h-8 rounded-full']").click();
    
    }
    //method2
    clicklogout()
    {
        cy.contains('Logout').click();
        cy.wait(2000);
    }
    //method 3
    verifylogout()
    {
cy.url().should('eq','https://belmont-fe.bigsteptech.in/login');
    }

}