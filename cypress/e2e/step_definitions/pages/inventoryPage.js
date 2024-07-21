class inventoryPage{

    elements = {
        productTitle: () => cy.get('.product_label'),
        inventoryGrid: () => cy.get('#inventory_container'),
        productByText: (productName) => cy.contains('.inventory_item_name', productName),
        addToCartBtn: (productName) => cy.contains('.inventory_item', productName)
            .find('button'),
        shoppingCartBtn: () => cy.get('[data-icon="shopping-cart"]'),
        validateUrl: (expectedPart) => cy.url().should('include', expectedPart)
    }

    getTitleProduct(title) {
        return this.elements.productTitle().should('have.text', title)
    }
    

    getInventory(){
        this.elements.inventoryGrid().should('be.visible');
    }

    setProduct(productName) {
        this.elements.productByText(productName);
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