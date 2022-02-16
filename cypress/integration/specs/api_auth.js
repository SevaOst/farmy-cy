
describe('Auth', () => {
    it('Open the homepage etc...', () => {
      cy.visit("https://www.farmy.ch/")
      cy.url().get('i[class="fa fa-user"]').click({force: true})
      cy.get('[class="block-title marginbottomgw text-center-xs storefront-text-color"]').should('be.visible').contains('Anmeldung')


      cy.request({
        method: 'POST',
        url: 'api/login', // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          
            "spree_user": {
              "email": "homer1213232@example.com",
              "password": "111111"
            }
        },
      })
      
//вызов апи логина(пост запрос) и заполнение json логин пароль
//проверка элемента на странице

   // cy.get('span[class="text-muted small ng-binding"]').should('be.visible').contains('Grüezi')


    })





})