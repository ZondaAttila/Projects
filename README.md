# Project
Started writing the test cases for the given functionalities on the website.
  - I used Jira to have track of the upcoming bug reports and test cases that needed to be implemented, created backlog
  - I created the test cases for the login functionality for the upcoming Sprint
  - Implemented the automated test for the given test cases in Cypress.

Files inside my project
- "DemoTest cases.xlsx" Test cases written in excel for correct, incorrect, no user, login 
- "Bug report1 (1).doc" The User cannot interact with the assets after selecting the "Previous" button on the front page
- "Bug report1 (2).doc" Absent currency in "Cart" tab
- "Bug report1 (3).doc" The User can place order with an empty "Cart"
- "Helpers.js" contains functions to be called for the upcoming test (here you can modify the identifiers user/pass)
- "CorrectLogin.cy.js" test for Login with the correct credentials, expected username welcome message.
- "incorrectUser.cy.js" test for logging in with incorrect credentials, expected alert "User does not exist".
- "noUserPw.cy.js" test login without entering credentials in the user/pass field, expected alert "Please fill out Username and Password".
- "story1.doc" and story2.doc" Contains two functionalities that need to be created and implemented in a new Sprint
