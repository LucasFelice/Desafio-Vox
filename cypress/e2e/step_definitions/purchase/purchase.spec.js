import { Given, When, Then, inventoryElements, cartElements, cartSpec, information, infJson, checkoutElements } from '../../../support/pages/imports';

Given("I valid the products in the shopping cart", () => {
    cy.get(inventoryElements.cartList).should('be.visible')
})

When("I click on the checkout button of the page cart", () => {
    cy.get(cartElements.checkoutBtn).click()
    cy.contains('span', 'Checkout: Your Information').should('be.visible')
})

And("I type my first name, last name, and zip postal code in the information form", () => {
    information.typeInformation(    infJson.firstName, 
                                    infJson.lastName, 
                                    infJson.postalCode
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