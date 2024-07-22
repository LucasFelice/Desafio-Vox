import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import login from '../../../support/pages/login/loginPage'
import loginJson from '../../../fixtures/login.json'
const loginElements = require('../../../support/pages/login/elements').LOGIN;

Given("I'm on the login page", () => {
    cy.visit(Cypress.config().baseUrl)
})

When("I type a registered email and password", () => {
    login.doLogin(loginJson.User_Name, loginJson.Password)
})

Then("I have a successful login", () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/inventory.html')
})

When("I type a registered email and an incorrect password", () => {
    login.doLogin(loginJson.User_Name, loginJson.Incorrect_Pass)
})

Then("I have an unsuccessful login", () => {
    cy.get(loginElements.alertError).should('be.visible')
})

When("I don't type the email and password fields", () => {
    cy.get(loginElements.loginButton).click()
})

Then("I have unfilled required fields", () => {
    cy.get(loginElements.alertError).should('be.visible')
})