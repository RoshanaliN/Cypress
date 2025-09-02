/// <reference types="cypress" />
//Test case is called Spec in cypress
describe("CalendarTestSuite",function(){
    it("calendar Test",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('a[href*="offers"]').invoke("removeAttr","target").click()
        cy.get('input[name="day"]').type("30")
        cy.get('input[name="month"]').type("12")
        cy.get('input[name="year"]').type("2030")
        cy.get('.react-date-picker__calendar-button').click()
        
        const day = "22"
        const month = "8"
        const year = "2028"
        const expectedDate=[month,day,year]
        cy.get('input[name="day"]').click()
        cy.get(".react-calendar__navigation__label").dblclick()
        cy.contains("button",year).click()
        cy.get(".react-calendar__year-view__months__month").eq(Number(month)-1).click()
        cy.contains("button",day).click()
        cy.get(".react-date-picker__inputGroup input:visible").each(($el,index,$list) =>{
            cy.wrap($el).invoke('val').should('eq',expectedDate[index])
        })
    })
})