/// <reference types="cypress" />
describe("Assertions", ()=> {

    beforeEach(()=>{
        cy.visit("/automation-practice-form")
    })

    after(()=>{
        cy.visit('/') //Al final de cada pagina regrese a la principal
    })

    it("Use assertions BDD", ()=> {
        //cy.visit("/automation-practice-form")
        
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
        
    })

    it("Use assertions BDD 2", ()=> {
        //cy.visit("/automation-practice-form")
        
        cy.url().should('include', 'demoqa.com')

        cy.get('#firstName').then((element)=>{
            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder', 'First Name')

        })
        
    })

    it("Use assertions TDD", ()=> {
        //cy.visit("/automation-practice-form")
        
        cy.url().should('include', 'demoqa.com')

        cy.get('#firstName').then((element)=>{
            assert.equal(element.attr('placeholder'), 'First Name')

        })
        
    })



})