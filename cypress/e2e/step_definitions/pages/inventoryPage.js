class inventoryPage{

    

    elements = {
        productLabel: () => cy.get('.product_label'),
        inventoryGrid: () => cy.get('#inventory_container'),
        productByText: (productName) => cy.contains('.inventory_item_name', productName),
        addToCartBtn: (text) => cy.get('.inventory_item')
            .eq(text).find('button').contains('ADD TO CART'),
        shoppingCartBtn: () => cy.get('[data-icon="shopping-cart"]')
    }

    getProduct(){
        this.elements.productLabel().should('be.isVisible');
    }

    getInventory(){
        this.elements.inventoryGrid().should('be.isVisible');
    }

    setProduct(productName) {
        product = this.elements.productByText(productName);
        product.should('be.visible');
    }

    addToCart(text) {
        this.elements.addToCartBtn(text).click().should('be.isVisible', 'REMOVE');
    }

    clickShoppingCart(){
        this.elements.shoppingCartBtn.click();
    }
}

module.exports = new inventoryPage();