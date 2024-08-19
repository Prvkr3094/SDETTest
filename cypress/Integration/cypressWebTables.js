/// <reference types = "Cypress" />

describe('handling the web tables', () =>
{

    it('should handle the web tables', () => 
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('.table-display tr td:nth-child(2)').each(($e1, index, $list) =>
        {
            console.log($e1.text)
            const text = $e1.text()
            if(text.includes('Python'))
            {
                //without next() method
                console.log(index)
                cy.get('.table-display tr td:nth-child(3)').eq(index).should('have.text','25')
                
                
                //with next() method to go to next sibling of an element
               /* cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')    //expect is explicit assertion

                })*/
            }
        })
    })
})