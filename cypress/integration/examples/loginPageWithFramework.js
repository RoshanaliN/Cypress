/// <reference types="cypress"/>
describe("Framework",function(){
    before(function(){
        // runs once before all tests in this describe block
        cy.fixture("example").then(function(data){
            this.data=data
        })
    })
    it("framework", function(){
        // const productName = "Samsung Note 8"
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
        cy.get("#username").type(this.data.username)
        cy.get("#password").type(this.data.password)
        cy.get("span.radiotextsty").contains("User").click()
        cy.wait(2000)
        cy.get("#okayBtn").click()
        cy.get("select.form-control").select("teach")
        cy.get("#terms").click()
        cy.get("#signInBtn").click()
        cy.contains("Shop Name").should("be.visible")
        cy.get("app-card").should('have.length',4)
        cy.get("app-card").each(($el,index,$list)=>{
            if($el.find("h4 a").text().includes(this.data.productName)){
                cy.wrap($el).find("div.card button").click()
            }
        })
        // cy.get("div.card button").eq(1).click()
        cy.contains("Checkout").click()
        cy.get("tbody").find("tr:nth-child(1) td:nth-child(3)").should("contain","85000")
        cy.contains("Checkout").click()
        cy.get("#country").type("Ind")
        Cypress.config('defaultCommandTimeout',7000)
        cy.get(".suggestions a").each(($el,index,$list)=>{
            if($el.text().includes("India"))
                cy.get(".suggestions a").eq(index).click()
        })
        cy.get("#checkbox2").next("label").click()
        cy.contains("Purchase").click()
        cy.get(".alert-success").should("contain","Success!")
        cy.get(".alert-success").should("contain","Thank you! Your order will be delivered in next few weeks :-).")
    })
})