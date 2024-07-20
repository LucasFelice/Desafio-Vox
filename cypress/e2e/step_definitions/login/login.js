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

When("I type a registered email and an incorrect password", () => {
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('incorret_password');
    loginPage.clickLogin();
})

Then("I have an unsuccessful login", () => {
    loginPage.elements.errorMessage().should('have.text',
        'Epic sadface: Username and password do not match any user in this service')
})

When("I don't type the email and password fields", () => {
    loginPage.clickLogin();
})

Then("I have unfilled required fields", () => {
    loginPage.elements.errorMessage().should('have.text',
        'Epic sadface: Username is required')
})