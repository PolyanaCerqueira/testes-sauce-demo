const users = [
    'standard_user',
    'problem_user',
    'error_user',
    'visual_user'
];

const password = 'secret_sauce';

// Realizando loop para testar os produtos de todos os usuários
users.forEach((user) => {
    it.only(`Deve testar a inclusão e remoção dos produtos do carrinho. Usuario: ${user}`, () => {
        // Realizando chamada do componente de login para o usuário
        cy.login(user, password);

        cy.url().then((url) => {
            if (url.includes('inventory')) {
                let produtosNaoAdicionados = []
                let produtosNaoRemovidos = []

                // Adicionando todos os produtos no carrinho
                cy.log("ADICIONANDO ITENS NO CARRINHO")
                cy.toggleProduto()

                // Removendo todos os produtos no carrinho
                // Também verifica se o produto foi adicionado corretamente
                cy.log("REMOVENDO ITENS NO CARRINHO")
                cy.get('.inventory_item').each(($el) => {
                    const itemName = $el.find('.inventory_item_name').text();
        
                    cy.wrap($el).find('button').then(($btn) => {
                        if ($btn.text() !== 'Remove') {
                            produtosNaoAdicionados.push(itemName)
                        }else{
                            cy.wrap($btn).click();
                        }
                    });
                })

                // Verificando se os itens foram removidos corretamente
                cy.log("VERIFICANDO SE OS ITENS FORAM REMOVIDOS")
                cy.get('.inventory_item').each(($el) => {
                    const itemName = $el.find('.inventory_item_name').text();
        
                    cy.wrap($el).find('button').then(($btn) => {
                        if ($btn.text() !== 'Add to cart') {
                            // O produto não foi adicionado corretamente
                            produtosNaoRemovidos.push(itemName)
                        }else{
                            cy.wrap($btn).click();
                        }
                    });
                }).then(() => {
                    // Montando mensagem de erro (caso exista)
                    let msg = null

                    if (produtosNaoAdicionados.length > 0) {
                        msg = `Os seguintes produtos não foram ADICIONADOS ao carrinho: \n ${produtosNaoAdicionados.join('\n ')}`;
                    }

                    if(msg){
                        msg += "\n\n";
                    }

                    if(produtosNaoRemovidos.length > 0){
                        msg += `Os seguintes produtos não foram REMOVIDOS ao carrinho: \n ${produtosNaoRemovidos.join('\n ')}`;
                    }

                    if(msg){
                        throw new Error(msg)
                    }
                });
            }
        });
    });
});
