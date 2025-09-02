/// <reference types="cypress" />
describe("childWindow",function(){
    it("childTabTest",function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com',() => {
        cy.get('#navbarSupportedContent a[href*="about"]').click()
        cy.get('.col-lg-5 h2').should('contain','Welcome to QAClick Academy')
        })
    }),
    it("childWindowTest",function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.blinkingText').invoke('removeAttr','target').click()
        cy.origin('https://qasummit.org',() => {
        cy.get('#hero_section p.hero_heading').should('contain','Welcome to the Career-Focused Software Testing Meetup')
        })
    }),
    it("childTabTest",function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el){
            const url=el.prop('href')
            cy.visit(url)
            cy.origin(url,() => {
                cy.get('#navbarSupportedContent a[href*="about"]').click()
                cy.get('.col-lg-5 h2').should('contain','Welcome to QAClick Academy')
            })
        })
    })
})