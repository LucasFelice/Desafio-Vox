import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import login from '../../../support/pages/login/loginPage'
import inventory from '../../../support/pages/inventory/inventoryPage'
const inventoryElements = require('../../../support/pages/inventory/elements').INVENTORY;

Given("I access the inventory page", () => {
    cy.visit(Cypress.config().baseUrl)
    login.doLogin('standard_user', 'secret_sauce')
    cy.url().should('eq', Cypress.config().baseUrl + '/inventory.html')
})

When("I click on the addToCart button of product", () => {
    inventory.addProductsByCart()
})

Then("I valid the products in the shopping cart", () => {
    cy.get(inventoryElements.cartList).should('be.visible')
})

Given("I access the cart page", () => {
    cy.visit(Cypress.config().baseUrl)
    login.doLogin('standard_user', 'secret_sauce')
    inventory.addProductsByCart()
    cy.url().should('eq', Cypress.config().baseUrl + '/cart.html')
})

When("I click on the remove button of shopping cart", () => {
    cy.contains('button', 'Remove').click()
    cy.contains('button', 'Remove').click()
})

Then("I valid that the remove button does not exist", () => {
    cy.contains('button', 'Remove').should('not.exist')
})