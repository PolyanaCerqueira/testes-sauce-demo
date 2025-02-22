# Testes Automatizados com Cypress

## Descrição
Este repositório contém testes automatizados utilizando Cypress para verificar funcionalidades essenciais de um e-commerce. O desafio inclui a automação de testes de login, adição e remoção de produtos no carrinho.

## Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end.
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem utilizada nos testes.
- [Git](https://git-scm.com/) - Versionamento de código.

## Cenários Testados
1. **Login**
   - Sucesso: Login com credenciais válidas.
   - Falha: Tentativa de login com credenciais inválidas.
2. **Carrinho de Compras**
   - Escolher um produto, adicioná-lo ao carrinho e garantir que ele está lá.
   - Remover um produto do carrinho e confirmar que ele desapareceu.

## Estrutura do Projeto
```
|-- cypress/
|   |-- e2e/               # Testes automatizados
|   |-- fixtures/          # Dados simulados
|   |-- support/           # Comandos e configurações globais
|-- cypress.config.js      # Configuração do Cypress
|-- README.md             # Documentação do repositório
```

## Como Executar os Testes
1. Clone o repositório:
   ```sh
   git clone https://github.com/PolyanaCerqueira/testes-sauce-demo.git
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute os testes em modo interativo:
   ```sh
   npx cypress open
   ```
   Ou execute os testes em modo headless:
   ```sh
   npx cypress run
   ```

## Link da Execução dos Testes
A execução dos testes foi gravada e está disponível no YouTube:
- [Login](https://youtu.be/VrDbdHps-Jc)
- [Carrinho de Compras](https://youtu.be/LUGuvvK076M)
