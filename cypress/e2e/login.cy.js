describe('Login no Sauce Demo', () => {
    const users = [
        'standard_user',
        'locked_out_user',
        'problem_user',
        'performance_glitch_user',
        'error_user',
        'visual_user'
    ];

    function login(user) {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type(user);
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    }

    function verificarLoginSucesso() {
        cy.url().should('include', '/inventory.html');
        cy.get('.inventory_list').should('be.visible');
        cy.log(' Login bem-sucedido');
    }

    function verificarLoginFalha(user) {
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Epic sadface');
        cy.log(` Login falhou para ${user}, exibindo mensagem de erro.`);
        throw new Error(`Teste mal sucedido: Usuário ${user} não conseguiu fazer login.`);
    }

    users.forEach((user) => {
        it(`Deve testar o login com o usuário: ${user}`, () => {
            login(user);

            cy.url().then((url) => {
                if (url.includes('/inventory.html')) {
                    verificarLoginSucesso();
                } else {
                    verificarLoginFalha(user);
                }
            });
        });
    });
});