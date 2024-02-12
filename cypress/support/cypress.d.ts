// cypress/support/cypress.d.ts
declare namespace Cypress {
    interface Chainable {
    /**
       * Descrição do seu comando personalizado
       * @example cy.nomeDoComando(parametro)
       */
        visitHome(): Chainable<Element>
    }
    }
    