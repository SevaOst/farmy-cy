describe('Authorization tests', () => {

it.only('1. Wrong UI auth without data', () => {
  cy.visit("https://www.farmy.ch/")
  cy.get('i[class="fa fa-user"]').click({force: true})
  cy.get('[class="block-title marginbottomgw text-center-xs storefront-text-color"]').should('be.visible').contains('Anmeldung')
  cy.get('form[name="loginForm"]').submit()
  cy.get('div[ng-bind-html="notification.message"]').should('be.visible').contains('Ungültige Email oder Passwort')
  cy.wait(2000)

})


it.only('2. Successful UI auth with data', () => {
  cy.visit("https://www.farmy.ch/")
  cy.get('i[class="fa fa-user"]').click({force: true})
  cy.get('[class="block-title marginbottomgw text-center-xs storefront-text-color"]').should('be.visible').contains('Anmeldung')
  
  cy.get('input[ng-model="loginUser.email"]').type("homer1213232@example.com")
  cy.get('input[ng-model="loginUser.password"]').type("111111")
  cy.get('button[name="commit"]').click()

  cy.get('span[class="text-muted small ng-binding"]').should('be.visible').contains('Grüezi')

})

})