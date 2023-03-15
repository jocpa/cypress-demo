
const url = 'http://zero.webappsecurity.com/'

describe('Hacer transferencia de cuenta a cuenta', () => {
    

    it('Transferencia', () => {

       
            cy.visit(url)
            cy.get('#signin_button').click()
    
            cy.get('#user_login').type("username")
            cy.get('#user_password').type("password")
            cy.get('.btn').click()
    
            cy.get('#transfer_funds_tab > a').click()
            cy.get('#tf_fromAccountId').select('1')
            cy.get('#tf_toAccountId').select('2')
            cy.get('#tf_amount').type("500")
            cy.get('#tf_description').type("Pago mensual de matricula")
            cy.get('#btn_submit').click()
            cy.get('#btn_submit').click()
            cy.get('.alert').contains('You successfully submitted your transaction.')

        })

    })

