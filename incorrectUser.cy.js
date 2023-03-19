describe('Negative test', () => {
    it('incorrect username and password', () => {


        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click();
        cy.get('#loginusername').wait(500).type('dm2312');
        cy.get('#loginpassword').type('demodemo123456');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

        //expected
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('User does not exist.')
        })

        //(alert)User does not exist.



    })
})