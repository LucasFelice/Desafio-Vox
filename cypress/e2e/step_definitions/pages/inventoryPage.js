class inventoryPage{

    

    elements = {
        productLabel: () => cy.get('.product_label'),
        inventoryGrid: () => cy.get('#inventory_container'),
        productByText: (productName) => cy.contains('.inventory_item_name', productName),
        addToCartBtn: (text) => cy.get('.inventory_item')
            .eq(text).find('button').contains('ADD TO CART'),
        shoppingCartBtn: () => cy.get('[data-icon="shopping-cart"]'),
        validateUrl: (expectedPart) => cy.url().should('include', expectedPart)
    }

    getProduct(){
        this.elements.productLabel().should('be.visible');
    }

    getInventory(){
        this.elements.inventoryGrid().should('be.visible');
    }

    setProduct(productName) {
        product = this.elements.productByText(productName);
        product.should('be.visible');
    }

    addToCart(text) {
        this.elements.addToCartBtn(text).click().should('be.visible', 'REMOVE');
    }

    clickShoppingCart(){
        this.elements.shoppingCartBtn.click();
    }

    validateUrl(expectedPart) {
        this.elements.validateUrl(expectedPart);
    }
}

module.exports = new inventoryPage();