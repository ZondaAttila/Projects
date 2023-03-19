describe('Negative test', () => {
    it('User and Pasword field left empty', () => {


        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click();
        cy.get('#loginusername').clear();
        cy.get('#loginpassword').clear();
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

        //expected
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Please fill out Username and Password.')
        })

        //(alert)Please fill out Username and Password.



    })
})