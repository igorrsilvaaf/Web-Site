Cypress.Commands.add('form', () => {
  const form = () => {
    cy.get(".control[data-id='contact']").click();

    cy.wait(2000);

    cy.get('input[name="Nome"]', { timeout: 4000 }).type('Igor da Silva');
    cy.get('input[name="Nome"]').should('have.value', 'Igor da Silva');

    cy.get('input[name="Email"]').type('igorrsilvaa920@gmail.com');
    cy.get('input[name="Email"]').should('have.value', 'igorrsilvaa920@gmail.com');

    cy.get('input[name="Assunto"]').type('Teste com cypress');
    cy.get('input[name="Assunto"]').should('have.value', 'Teste com cypress');

    cy.get('[placeholder="MENSAGEM ..."]').type('Realizando teste com o cypress, validando o form');
    cy.get('[placeholder="MENSAGEM ..."]').should('have.value', 'Realizando teste com o cypress, validando o form');

    cy.wait(3000);

    cy.get('.btn-new').click();
  };

  form();
});