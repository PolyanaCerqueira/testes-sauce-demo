import '../support/commands'

describe('Login no Sauce Demo', () => {
    const users = [
        'standard_user',
        'locked_out_user',
        'problem_user',
        'performance_glitch_user',
        'error_user',
        'visual_user'
    ];

    const password = 'secret_sauce'

    users.forEach((user) => {
        it(`Deve testar o login com o usuário: ${user}`, () => {
            cy.login(user, password)

            cy.url().then((url) => {
                if (url.includes('/inventory.html')) {

                    cy.url().should('include', '/inventory.html');
                    cy.get('.inventory_list').should('be.visible');
                    cy.log(' Login bem-sucedido');
                } else {
                    cy.get('[data-test="error"]').should('be.visible')
                        .and('contain', 'Epic sadface');

                    cy.log(` Login falhou para ${user}, exibindo mensagem de erro.`);

                    throw new Error(`Teste mal sucedido: Usuário ${user} não conseguiu fazer login.`);
                }
            });
        });
    });

});