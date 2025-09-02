/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe"

describe("iFrameTest",function(){
    it("iframeTest",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("[href*=mentorship]").eq(0).click()
        cy.iframe().find("h1").eq(0).should('contain',"Mentorship")
    })
})