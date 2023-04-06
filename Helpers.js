function registerUser() {
  cy.visit('https://www.demoblaze.com/');
  cy.get('#signin2').click();
  cy.get('#sign-username').type('demotest123');
  cy.get('#sign-password').type('demo12345');
  cy.wait(1000);
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

}

function login() {
  //Login 
  cy.visit('https://www.demoblaze.com/');
  cy.get('#login2').click();
  //Identifiers
  cy.get('#loginusername').wait(500).type('demotest123');
  cy.get('#loginpassword').type('demo12345');

  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  //Check if Logo is visible and contains class 
  cy.get('#nava').should('be.visible').and('have.class', 'navbar-brand');
}

function addCart() {
  //Add to cart
  cy.contains('Samsung galaxy s6').click().wait(1000);
  cy.contains('Add to cart').click();
  cy.get('#cartur').click();
  //Expected
  cy.contains('Samsung galaxy s6').should('exist');
  //Place order after adding an item
  cy.contains('Place Order').click();
}

function userDetails() {
  //Card Details and User Details & confirm order
  cy.get('#name').type('John Doe').get('#country').type('Romania').get('#city').type('Cluj');
  cy.get('#card').type('5541-66654-8874-55').get('#month').type('06/03').get('#year').type('1991');
  cy.contains('Purchase').click().wait(500).get('.confirm').click();
}

//    //cy.get('#orderModal > .modal-dialog > .modal-content > .modal-header > .close > span').should('be.visible').wait(1000).click();

export default { login, addCart, userDetails, registerUser }




