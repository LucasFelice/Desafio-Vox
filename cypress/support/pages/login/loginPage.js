// const elements = require('./elements').LOGIN;
import { Given, When, Then, login, loginJson, loginElements } from '../../../support/pages/imports';

class loginPage {

    doLogin(user, password) {
        cy.get(loginElements.username).type(user)
        cy.get(loginElements.password).type(password)
        cy.get(loginElements.loginButton).click()
    }
}

export default new loginPage();