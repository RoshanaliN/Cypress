/// <reference types="cypress" />
describe("alertTest",function(){
    it("alertTest",function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.on('window:alert',(alertText)=>{
            // Mocha
            expect(alertText).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(alertText)=>{
            // Mocha
            expect(alertText).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})