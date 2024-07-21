class informatePage{

    elements = {
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        postalCodeInput: () => cy.get('#postal-code'),
        continueBtn: () => cy.get('button[value="CONTINUE"]'),        
    }

    typeFistName(fistName){
        this.elements.firstNameInput().type(fistName);
    }

    typeLastName(lastName){
        this.elements.lastNameInput().type(lastName);
    }

    typePostalCode(zipPostalCode){
        this.elements.postalCodeInput().type(zipPostalCode);
    }

    clickContinue(){
        this.elements.continueBtn().click();
    }    
}

module.exports = new informatePage();