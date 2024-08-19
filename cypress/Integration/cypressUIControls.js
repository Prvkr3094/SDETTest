/// <reference types = "Cypress" />

describe("working on multiple controls", () => {

    it("playing with check boxes", () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //check boxes
        cy.get('#checkBoxOption1').as('checkbox')
        cy.get('@checkbox').check().should('be.checked').and('have.value','option1')
        cy.get('@checkbox').uncheck().should('not.be.checked')
        
        //check the checkbox for multiple boxes
        cy.get('input[type="checkbox"]').as('checkBoxOption')
        cy.get('@checkBoxOption').check(['option1','option3'])

        // Static dropdown

        cy.get ('select').select('option2').should('have.value','option2')

        //Dynamic dropdown

        cy.get('#autocomplete').type('ind')     //type the ind in dropdown field
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if($e1.text()==='India')
                {
                    cy.wrap($e1).click()
                    
                }
            
        })
        //validate the text which is selected on above code
        cy.get('#autocomplete').should('have.value','India')

        //visible invisible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')


        //window alert
        cy.get('#alertbtn').click()         //click on Alert button
               //click on Confirm button

        cy.on('window:alert',(str)=>    
        {
            console.log(str)
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str) =>
        {
          expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }
        )
    })

})