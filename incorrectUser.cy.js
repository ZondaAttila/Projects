import data from "./Helpers"
describe('Negative test', () => {
    it('incorrect username and password', () => {


        data.login()

        //expected (alert) "User does not exist.""
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('User does not exist.')
        })

        



    })
})