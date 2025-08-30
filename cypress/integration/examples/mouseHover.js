/// <reference types="cypress" />
describe("webTableTest",function(){
    it("webTableTest",function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains("Top").click()
        cy.url().should("include","top")
        cy.get(".mouse-hover-content a:nth-child(2)").click({force:true})
        cy.url().should("not.include","top")
    })
})