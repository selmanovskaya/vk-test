class formPage{

    elements = {
     submitBtn : () => cy.get('#submit'),
     nameInput: () => cy.get('#userName'),
     emailInput : () => cy.get('#userEmail'),
     output : () => cy.get('#output'),
    }

    clickOnSubmit(){
        this.elements.submitBtn().click()
    }
    

}


module.exports = new formPage();