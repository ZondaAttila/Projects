import data from "./Helpers";

describe('Demo Blaze Testing', () => {
  it('Test register,login and order functionalities', () => {

    //register user
    data.registerUser()

    //Login with already registered user account with correct credentials
    data.login()

    //Add items to the cart inventory check item expected + Order
    data.addCart()

    //User details entered
    data.userDetails()

    // data.registerUser()
  })
})