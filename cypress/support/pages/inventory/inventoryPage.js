const elements = require('./elements').INVENTORY;

class inventoryPage{
    
    getTitleProduct(title) {
        return this.elements.productTitle().should('have.text', title)
    }
    
    getInventory(){
        this.elements.inventoryGrid().should('be.visible');
    }

    setProduct(productName) {
        this.elements.productByText(productName);
    }

    getProduct(productName) {
        this.elements.productByText(productName).should('exist').and('contain.text', productName);
    }

    clickAddToCart(productName) {
        this.elements.addToCartBtn(productName).click();
    }

    clickShoppingCart(){
        this.elements.shoppingCartBtn().click();
    }

    validateUrl(expectedPart) {
        this.elements.validateUrl(expectedPart);
    }
}

module.exports = new inventoryPage();