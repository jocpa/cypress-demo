///<reference types="cypress" />
describe('Test a la pagina de orange', () => {

    const url = 'https://opensource-demo.orangehrmlive.com/'
    beforeEach( () => {
        cy.visit(url)
    } )

    it('Logo visible', () => {
        cy.get('.orangehrm-login-branding > img').should('be.visible')
    });

    it('username input visible', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.wait(10000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
    })

    it('Version de la pagina visible', () => {
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should('be.visible')
    })

    it('Boton login visible', () => {
        cy.get('.oxd-button').should('be.visible')
    });

    it('login, funcionamiento de botones y verificacion de campos', () => {
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()

        cy.get('.oxd-autocomplete-text-input > input').type('Miles Morales')
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('blackspiderman')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('IloveYouGwen12*')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('IloveYouGwen12*')


    })

   
    

})

/**
 

    it('logo siempre visibles', () => {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        cy.get('.oxd-brand-banner > img').should('be.visible')

    })
 
  
 */