///<reference types="cypress" />


describe('Test a la pagina de amazon', () => {
    const url = 'https://www.amazon.com/'


    it('ingresar a amazon', () => {

        cy.visit(url)

        cy.get('#twotabsearchtextbox').type('alexa')
                                      .type('{enter}')
        
        
        cy.get('.s-pagination-next').click()

        cy.xpath(`/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[4]/div`).click()

        cy.get('#add-to-cart-button').click()

        cy.get('.a-size-medium-plus').should('have.equal', 'Added to Cart')


    })

})

