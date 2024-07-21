const elements = require('./elements').CHECKOUT;

class informationPage{

    typeInformation(firstName, lastName, postalCode){
        cy.get(elements.firstNameInput).type(firstName)
        cy.get(elements.lastNameInput).type(lastName)
        cy.get(elements.postalCodeInput).type(postalCode)
    }
    
}

module.exports = new informationPage();