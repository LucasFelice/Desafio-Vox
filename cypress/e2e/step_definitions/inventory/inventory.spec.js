import { When, Then, inventoryElements } from '../../../support/pages/imports';

When("I access the inventory page", () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/inventory.html')
})

Then("The product catalog is visible", () => {
    cy.get(inventoryElements.inventoryGrid).should('be.visible')
})