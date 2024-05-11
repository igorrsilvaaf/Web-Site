Cypress.Commands.add('api_form', form => {
    cy.request({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/igorrsilvaa920@gmail.com',
        body: {
            name: form.name,
            email: form.email,
            assunto: form.assunto,
            mensagem: form.mensagem,
        }
    })
})