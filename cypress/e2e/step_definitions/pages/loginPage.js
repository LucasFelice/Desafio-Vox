class loginPage{

    elements = {
        usernameInput: () => cy.get('#user-name'),
        usernamePassword: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.usernamePassword().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }
}

module.exports = new loginPage();