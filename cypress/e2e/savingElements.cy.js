/// <reference types="cypress" />
describe("Saving elements", ()=> {

    

    it("avoid repetition", ()=> {
        cy.visit("/automation-practice-form")

        //Estilo como promesa, regresara todos los elementos padres que contengan la etiqueta form
        //form no regresa un elemento de tipo JQuery
        cy.get('input[placeholder="First Name"]').parents('form').then((form)=>{

            const inputs = form.find('input')
            const divs = form.find('div')
            const labels = form.find('label')

            //Assertion
            expect(inputs.length).to.equal(15)
            cy.wrap(inputs).should('have.length', 15) //wrap quiere decir que envuelve los elementos

            expect(divs.length).to.equal(70)
            expect(labels.length).to.equal(16)

            //console.log('soy la longitud', inputs.length)
            /cy.log('soy la longitud', inputs.length)

            //debugger

            //esta task se crea en cypress.config.js y se imprime en la terminal
            cy.task('log', inputs.length)

            
        })

        cy.get('form').find('label')
        //cy.pause()
        cy.get('input[placeholder="First Name"]').then(console.log)
        cy.get('input[placeholder="First Name"]').debug()
        
    })



})