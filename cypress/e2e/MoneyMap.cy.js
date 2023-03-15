const url = 'http://zero.webappsecurity.com/'

describe('Verificar si el money map funciona correctamente', () => {

    it('debe esconder y aparecer la pestaña donde se da click', () => {

        cy.visit(url)
        //Iniciar sesion
            cy.get('#signin_button').click()
            cy.get('#user_login').type("username")
            cy.get('#user_password').type("password")
            cy.get('.btn').click()

        //Accion moneymap
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should('be.visible')


    })

})