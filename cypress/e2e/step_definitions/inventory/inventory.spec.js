import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import login from '../../../support/pages/login/loginPage'
const inventoryElements = require('../../../support/pages/inventory/elements').INVENTORY;

Given("I have a successful login", () => {
    cy.visit(Cypress.config().baseUrl)
    login.doLogin('standard_user', 'secret_sauce')
})

When("I access the inventory page", () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/inventory.html')
})

Then("The product catalog is visible", () => {
    cy.get(inventoryElements.inventoryGrid).should('be.visible')
})