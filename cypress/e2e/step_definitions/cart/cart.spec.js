import { Given, When, Then, inventory, inventoryElements } from '../../../support/pages/imports';

Given("I click on the addToCart button of product", () => {
    inventory.addProductsByCart()
})

Then("I valid the products in the shopping cart", () => {
    cy.get(inventoryElements.cartList).should('be.visible')
})

Given("I access the cart page", () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/cart.html')
})

When("I click on the remove button of shopping cart", () => {
    cy.contains('button', 'Remove').click()
    cy.contains('button', 'Remove').click()
})

Then("I valid that the remove button does not exist", () => {
    cy.contains('button', 'Remove').should('not.exist')
})