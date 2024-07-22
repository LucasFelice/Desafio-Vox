import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import login from '../../../support/pages/login/loginPage'
import inventory from '../../../support/pages/inventory/inventoryPage'
import information from '../../../support/pages/checkout/informationPage'
import infJson from '../../../fixtures/information.json'
const inventoryElements = require('../../../support/pages/inventory/elements').INVENTORY;
const cartElements = require('../../../support/pages/cart/elements').CART;
const checkoutElements = require('../../../support/pages/checkout/elements').CHECKOUT;

Given("I valid the products in the shopping cart", () => {
    cy.visit(Cypress.config().baseUrl)
    login.doLogin('standard_user', 'secret_sauce')
    inventory.addProductsByCart()
    cy.get(inventoryElements.cartList).should('be.visible')
})

When("I click on the checkout button of the page cart", () => {
    cy.get(cartElements.checkoutBtn).click()
    cy.contains('span', 'Checkout: Your Information').should('be.visible')
})

And("I type my first name, last name, and zip postal code in the information form", () => {
    information.typeInformation(    infJson.First_Name, 
                                    infJson.Last_Name, 
                                    infJson.Postal_Code
                            )
})

And("I click on the continue button of the checkout page", () => {
    cy.get(checkoutElements.continueBtn).click()

}) 

And("I valid the overview of the checkout page and click finish button", () => {
    cy.contains('span', 'Checkout: Overview').should('be.visible')
    cy.get(checkoutElements.finishBtn).click()
}) 

Then("I have a successful purchase", () => {
    cy.contains('span', 'Checkout: Complete!').should('be.visible')
    
})