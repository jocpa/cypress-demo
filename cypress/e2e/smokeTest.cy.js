
const url = 'http://zero.webappsecurity.com/'

describe("Smoke Test Bank app",  () => {

    it('Validar pagina de inicio carga', () => {

        cy.visit(url)
        cy.get('.active > img').should("be.visible")
        cy.get('.active > .custom > h4').should("be.visible")

    })
    
})