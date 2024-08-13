/// <reference types = "Cypress" />

describe("My Description", () => {


    it("My first test case", () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       
        cy.get("input[type='search']").type('ca')
   
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //cy.get('.product:nth-child(3):visible').should('have.length',1)
        //parent child chaining
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($e1, index, $list) => {
            var Vegname=$e1.find('h4.product-name').text()       
            if(Vegname.includes('Cashews'))
            {
                cy.wrap($e1).find('button').click()
            }
        })

    })
})