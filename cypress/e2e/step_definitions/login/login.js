import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../pages/loginPage'

Given("I'm on the login page", () => {
    cy.visit("https://www.saucedemo.com/v1/")
})

When("I type a registered email and password", () => {
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();
})

Then("I have a successful login", () => {
    cy.get('.product_label')
})