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
        cy.get('.products').as('productElement')    //creating alias name of the element
        
        cy.get('@productElement').find('.product').should('have.length',4)
        cy.get('@productElement').find('.product').eq(1).contains('ADD TO CART').click().then(function()
        {
            //log the comments on console browser
            console.log('clicked on button')
        })

        cy.get('@productElement').find('.product').each(($e1, index, $list) => {
            var Vegname=$e1.find('h4.product-name').text()       
            if(Vegname.includes('Cashews'))
            {
                cy.wrap($e1).find('button').click()
            }
        })
        //assert if logo text is correctly displayed
        cy.get('div.brand.greenLogo').should('have.text','GREENKART')

        //handling the promise explicitly with then() function
        cy.get('div.brand.greenLogo').then(function(logoelement)
        {
            //log the comment on browser testrunner
            cy.log(logoelement.text())

        })
        //text() is not a function of cypress but jQuery
        //below logic doesn't work as const logo is not cypress command
        //const logo = cy.get('div.brand.greenLogo')                                    
        //cy.get('.brand greenLogo').text()

    })
})