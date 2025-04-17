import { faker } from "@faker-js/faker";

export default class classC{
    getusername(){
        cy.visit("https://testautomationpractice.blogspot.com/");
        
        let username = faker.person.firstName();
        
        return name;

    }
}