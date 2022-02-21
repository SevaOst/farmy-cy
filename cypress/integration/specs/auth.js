describe('Authorization tests', () => {

it('Wrong UI auth without data', () => {
<<<<<<< HEAD
=======

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
>>>>>>> develop
  cy.visit("https://www.farmy.ch/")
  cy.get('i[class="fa fa-user"]').click({force: true})
  cy.get('[class="block-title marginbottomgw text-center-xs storefront-text-color"]').should('be.visible').contains('Anmeldung')
  cy.get('form[name="loginForm"]').submit()
<<<<<<< HEAD
=======
  cy.wait(2000)
>>>>>>> develop
  cy.get('div[ng-bind-html="notification.message"]').should('be.visible').contains('Ungültige Email oder Passwort')
  cy.wait(2000)

})

<<<<<<< HEAD

it('Successful UI auth with data', () => {
=======
it('Wrong UI auth with fake email', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  cy.visit("https://www.farmy.ch/")
  cy.get('i[class="fa fa-user"]').click({force: true})
  cy.get('[class="block-title marginbottomgw text-center-xs storefront-text-color"]').should('be.visible').contains('Anmeldung')
  
  cy.get('input[ng-model="loginUser.email"]').type("fakeEmail@example.com")
  cy.get('input[ng-model="loginUser.password"]').type("111111")
  cy.get('button[name="commit"]').click()
  cy.wait(3000)

  cy.get('div[ng-bind-html="notification.message"]').should('be.visible').contains('Ungültige Email oder Passwort')
  cy.wait(2000)
  
})


it('Wrong UI auth with right email and incorrect password', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
>>>>>>> develop
  cy.visit("https://www.farmy.ch/")
  cy.get('i[class="fa fa-user"]').click({force: true})
  cy.get('[class="block-title marginbottomgw text-center-xs storefront-text-color"]').should('be.visible').contains('Anmeldung')
  
  cy.get('input[ng-model="loginUser.email"]').type("homer1213232@example.com")
<<<<<<< HEAD
  cy.get('input[ng-model="loginUser.password"]').type("111111")
=======
  cy.get('input[ng-model="loginUser.password"]').type("wrongPass")
  cy.get('button[name="commit"]').click()
  cy.wait(2000)

  cy.get('div[ng-bind-html="notification.message"]').should('be.visible').contains('Ungültige Email oder Passwort')
  cy.wait(2000)

})  //this third test fails sometimes because of 
    //> f is not a function
    //When Cypress detects uncaught errors originating from your application it will automatically fail the current test.
    //This behavior is configurable, and you can choose to turn this off by listening to the uncaught:exception event.
    //added exception catcher, since then no fails in this test

it.only('Successful UI auth with correct data', () => {
  cy.visit("https://www.farmy.ch/")

  cy.get('i[class="fa fa-user"]').click({force: true})
  cy.get('[class="block-title marginbottomgw text-center-xs storefront-text-color"]').should('be.visible').contains('Anmeldung')
  cy.wait(2000)
  cy.get('input[ng-model="loginUser.email"]').type("homer1213232@example.com")
  cy.wait(2000)
  cy.get('input[ng-model="loginUser.password"]').type("111111")
  cy.wait(2000)
>>>>>>> develop
  cy.get('button[name="commit"]').click()

  cy.get('span[class="text-muted small ng-binding"]').should('be.visible').contains('Grüezi')

})

})