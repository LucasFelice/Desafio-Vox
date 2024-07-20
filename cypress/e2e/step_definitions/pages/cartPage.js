class cartPage{

    elements = {
        removeProductBtn: (productName) => cy.contains('.cart_item', productName)
            .find('button'),
        checkoutBtn: () => cy.get('.btn_action checkout_button')
    }

    clickRemove(productName) {
        this.elements.removeProductBtn(productName).click();
    }

    removeNotExist(productName) {
        cy.contains('.cart_item', productName).should('not.exist');
    }

    clickChecout(){
        this.elements.checkoutBtn();
    }


    
}

module.exports = new cartPage();