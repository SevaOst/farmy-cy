describe('Zipcode Modal Test', () => {
    it('Open the homepage and verify the url and the title', () => {
      // open the homepage
      cy.visit('https://www.farmy.ch/')

      // assert the url
      cy.url().should("include", "farmy")

      // assert the title
      cy.title().should("eq", "Bestelle frische Lebensmittel in deinem Online-Markt")
    })

    it('Enter zipcode and click localization buttons', () => {
      cy.get("input[ng-model='zipcode']").type('8048')
      cy.contains('FR').click()
      cy.contains('ENG').click()
      cy.contains('DE').click()
      cy.contains('Gesamtes Sortiment anzeigen').click({force: true})
    })
 })

 //Egor, hi!
 //Hello, I'm here
 // hi master
