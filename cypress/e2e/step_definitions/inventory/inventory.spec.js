import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import login from '../../step_definitions/login/login.spec'
const inventoryElements = require('../../../support/pages/inventory/elements').INVENTORY;

When("I access the inventory page", () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/inventory.html')
})

Then("The product catalog is visible", () => {
    cy.get(inventoryElements.inventoryGrid).should('be.visible')
})