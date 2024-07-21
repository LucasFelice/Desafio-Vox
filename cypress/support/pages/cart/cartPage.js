const elements = require('./elements').CART;

class cartPage{

    clickRemove(productName) {
        this.elements.removeProductBtn(productName).click();
    }

    removeNotExist(productName) {
        cy.contains('.cart_item', productName).should('not.exist');
    }

    clickCheckout(){
        this.elements.checkoutBtn().click();
    }

}

module.exports = new cartPage();