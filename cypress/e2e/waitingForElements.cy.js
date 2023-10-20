/// <reference types="cypress" />

describe("Waiting for elements", {browser: 'chrome'},()=> {

    beforeEach(()=>{
        cy.visit("/automation-practice-form")
    })


    it("wait for a defined time", ()=> {
        cy.wait(5000)
    })

    it("wait for an element", ()=> {
        cy.get('.practice-form-wrapper', {timeout:6000})
    })

    it("wait for an element and make an assertion", ()=> {
        //cy.get('.practice-form-wrapper', {timeout:6000}).should('be.visible')

        //Deshabilitar el retry para que no espere por el elemento si ya es visible
        cy.get('.practice-form-wrapper', {timeout:0})

    })

})