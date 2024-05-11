import form from '../API/api_form.cy.js'

describe('Testa envio de formulario', () => {
   beforeEach(() => {
      cy.visit('/')
   })

   it('Formulario enviado com sucesso', () => {
      //cy.form()
      cy.api_form(form)
      cy.contains('Mensagem enviada para Igor!').should('be.visible')

   })
})