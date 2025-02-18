/// <reference types= "cypress" />

export default class OrangeHRMlogin{
    visit_site(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    }
    enter_username(Username){ //enter username/email
        cy.get("input[placeholder='Username']").type(Username);
    }
    enter_password(password){ //enter password
        cy.get("input[placeholder='Password']").type(password);


    }
    press_login(){ //click on login button
    cy.get("button[type='submit']").click();


    }
}





