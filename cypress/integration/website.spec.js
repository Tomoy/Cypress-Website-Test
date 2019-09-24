describe("Website test", function () {
    it("Test in existing website", function () {
        
        //Changing the scroll behavior before each test because of a buf they have with scrolling, more on: https://github.com/cypress-io/cypress/issues/871
        Cypress.on('scrolled', $el => {
            $el.get(0).scrollIntoView({
              block: 'center',
              inline: 'center'
            });
        });

        //Visit the website
        cy.visit('https://angner.se/')

        //Get the Languages button element and make a click on it
        cy.get('#language')
        .click() 

        //Get the english list element and click on it
        cy.get('#language-drop li:first').click()

        //Scroll until the portfolio section
        cy.get('.portfolio-list').scrollIntoView({ duration: 1500 })

        //Get the 'See all projects' button and click
        cy.wait(500)
        cy.get('.section-wrap .text-holder .btn').contains('See all').click()

        //Scroll into the element on top of the desired to click because of how it renders it
        cy.get('.portfolio-list li a').contains('WUD').scrollIntoView({ duration: 1500 })
        cy.wait(500)

        //Get the desired project and click on it
        cy.get('.portfolio-list li a').contains('Treated').click()
        
        //Scroll to the desire header of the page
        cy.get('.speaker-heading').contains('How do we make it a pleasure').scrollIntoView({ duration: 1500 })

    })
})

