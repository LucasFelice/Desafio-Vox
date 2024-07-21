class finishPage{

    elements = {
        finishTitle: () => cy.get('.subheader'),
        thankYouLabel: () => cy.get('h3[data-test="error"]')
    }

    getTitleFinish(title) {
        return this.elements.finishTitle().should('have.text', title)
    }

    getThankYou(expectedMessage) {
        return this.elements.thankYouLabel().should('have.text', expectedMessage);
    }
}

module.exports = new finishPage();