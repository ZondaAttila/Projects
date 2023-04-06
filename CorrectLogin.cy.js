import data from "./Helpers";

describe ('Correct Credentials', () => {
    it ('user/pass', () =>{
        
        data.login();
       
        cy.contains('Welcome demotest123').should('exist');
        
    })


})