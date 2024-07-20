class cartPage{

    elements = {
        removeBtn: (text) => cy.get('btn_secondary cart_button')
        .eq(text).find('button').contains('REMOVE'),
        checkoutBtn: () => cy.get('.btn_action checkout_button')
    }

    clickRemove(text) {
        this.elements.removeBtn(text).click();
    }

    clickChecout(){
        this.elements.checkoutBtn();
    }


    
}

module.exports = new cartPage();