describe('Enviando email teste', () => {
    it('E-mail enviado com sucesso', () => {
        const Form_nome = 'Igor da Silva'
        const Form_email = 'igorrsilvaa920@gmail.com'
        const Form_assunto = 'Teste cypress via API'
        const Form_mensagem = 'Teste realizado com sucesso'

        const form = {
            nome: Form_nome,
            email: Form_email,
            assunto: Form_assunto,
            mensagem: Form_mensagem
        }

        cy.api_form(form)
            .then(response => {
                expect(response.status).to.eq(200)
        })
    })
})