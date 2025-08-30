/// <reference types="cypress" />
describe("webTableTest",function(){
    it("webTableTest",function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#product').find('tr td:nth-child(2)').each(($el,index,$list)=>{
            const colName=$el.text()
            if(colName.includes("Python")){
                cy.get('tr td:nth-child(3)').eq(index).should('contain',"25")
                cy.get('tr td:nth-child(2)').eq(index).next().should('contain',"25")
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText=   price.text()
                    expect(priceText).to.equal("25")
                })
            }
        })
    })
})