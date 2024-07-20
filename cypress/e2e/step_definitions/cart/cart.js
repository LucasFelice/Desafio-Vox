import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'

Given("I access the inventory page", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();
    inventoryPage.validateUrl('inventory')
})

When("I click on the addToCart button of product", () => {
    inventoryPage.clickAddToCart('Sauce Labs Backpack');
    inventoryPage.clickAddToCart('Sauce Labs Bike Light')
})

Then("I valid the products in the shopping cart", () => {
    inventoryPage.clickShoppingCart();
    inventoryPage.setProduct('Sauce Labs Backpack');
    inventoryPage.setProduct('Sauce Labs Bike Light');
})