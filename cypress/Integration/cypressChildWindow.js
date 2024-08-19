/// <reference types = 'Cypress' />
/// <reference types = 'Cypress-iFrame'/>
describe('Handling child window', () =>
{
    it('should handle child window', () =>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        /*
        //handling the child tab which opens in different tab
        cy.get('#opentab').invoke('removeAttr','target').click(); //removing the target attribute before clicking
        cy.get('#opentab').click();

        //handling the page which opens in different tab with different domain
        cy.origin('https://www.qaclickacademy.com/', () =>     //origin support cross domain in same test case
        {
            cy.get('.ml-auto a[href="about.html"]').click();
            cy.get('.mt-50 h2').should('have.text','Welcome to QAClick Academy ')

        })
        */
        //handling child window using prop() jquery method
        cy.get('#opentab').then(function(el) 
        {
            //getting the link of the website
            const url = el.prop('href')         //prop method pulls the attribute value (jquery method)
            cy.log(url)
            cy.visit(url)
            cy.origin(url, () =>
            {   
                cy.get('.ml-auto a[href="about.html"]').click();                

            } )        
        })
        
    })

})