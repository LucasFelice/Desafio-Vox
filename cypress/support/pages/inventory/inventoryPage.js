const elements = require('./elements').INVENTORY;

class inventoryPage{

    addProductsByCart() {
        cy.contains('button', 'Add to cart').click()
        cy.get(elements.addBikeLightBtn).click()
        cy.get(elements.shoppingCartBtn).click()
    }
}

module.exports = new inventoryPage();