/// <reference types="cypress" />
//Test case is called Spec in cypress
describe("First Suite",function(){
    it("First Scenario",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.get('.search-button')
        cy.wait(2000)
        // cypress get acts as findelements of selenium
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products .product').should('have.length',4)
        // Parent Child relation-ship
        cy.get('.products').find('.product').should('have.length',4)
        // hardcoded
        cy.get('.products .product').eq(1).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegText=$el.find('h4.product-name').text()
            if(vegText.includes('Cashews')){
               cy.wrap($el).find('button').click() 
            }

        })
    })
})