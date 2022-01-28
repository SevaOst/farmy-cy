describe('Zipcode Modal Test', () => {
    it('Open the homepage and verify the url and the title', () => {
      // open the homepage
      cy.visit('https://www.farmy.ch/')

      // assert the url
      cy.url().should("include", "farmy")

      // assert the title
      cy.title().should("eq", "Bestelle frische Lebensmittel in deinem Online-Markt")
    })
  })


    //   cy.get("input[ng-model='zipcode']").type('8457');
    //   cy.get('#default > div.modal.fade.ng-isolate-scope.zipcode-modal.modal-rounded.in > div > div > div.modal-footer.ng-scope > div > div.col-xs-12.text-center > button').should('be.visible').click()
    //   cy.get('.notification-message').should('be.visible').contains('Standort erfolgreich erfasst')
    //   cy.contains('8457').should('be.visible')
    //   Cypress.currentTest.retries(3)
    // })
    //
    // it('Changes zipcode via header controls', () => {
    //   cy.get("span[ng-click='openZipcodeModal()']").click()
    //   cy.wait(1000)
    //   cy.get("input[ng-model='zipcode']").clear().type('8001')
    //   cy.wait(2000)
    //   cy.get("input[ng-model='zipcode']").type('{enter}').trigger('input')
    //   cy.get('.notification-message').should('be.visible').contains('Standort erfolgreich erfasst')
    //   cy.contains('8001').should('be.visible')
    //   Cypress.currentTest.retries(3)
