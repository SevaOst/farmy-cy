describe('Zipcode Modal Test', () => {
    it('Open the homepage and verify the url and the title', () => {
      cy.visit('https://www.farmy.ch/')
      cy.url().should("include", "farmy")
      cy.title().should("eq", "Bestelle frische Lebensmittel in deinem Online-Markt")
    })

    it('Enter zipcode and click localization buttons', () => {
      cy.get('[ng-model="zipcode"]').type('8048')
<<<<<<< HEAD
      cy.contains('FR').click()
      cy.contains('ENG').click()
      cy.contains('DE').click()
=======
      cy.contains('FR').click({force: true})
      cy.contains('ENG').click({force: true})
      cy.contains('DE').click({force: true})
>>>>>>> develop
      cy.get('[ng-click="onRegularModeClicked()"]').click()
      cy.get('.notification-message').should('be.visible').contains('Standort erfolgreich erfasst')
    })

    it('Changes zipcode via header controls', () => {
<<<<<<< HEAD
     cy.get('span[ng-click="openZipcodeModal()"]').click()
=======
     cy.get('span[ng-click="openZipcodeModal()"]').click({force: true})
>>>>>>> develop
     cy.wait(1000)
     cy.get('[ng-model="zipcode"]').clear().type('8048')
     cy.get('[ng-click="onExpressModeClicked()"]').click()
     cy.get('.notification-message').should('be.visible').contains('Standort erfolgreich erfasst')
     //closing the notification
     cy.get('[ng-click="dismiss()"]')
     cy.contains('Nächste Lieferung heute').click()
     cy.url().should("include", "x-press-lieferung")
 })
 })
