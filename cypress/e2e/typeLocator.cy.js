describe("Type locator", ()=> {

    it("Get it a for tag", ()=> {
        cy.visit("/automation-practice-form")
        cy.get('input') //obtiene todos los elementos de tipo input
        
    })

    it("Get it a for attribute", ()=> {
        cy.visit("/automation-practice-form")
        cy.get('[placeholder="First Name"]') //obtiene todos los elementos de tipo input
        
    })

    it("Get it a for tag and attribute", ()=> {
        cy.visit("/automation-practice-form")
        cy.get('input[placeholder="First Name"]') //obtiene todos los elementos de tipo input
        
    })

    it("Get it a for tag and attribute", ()=> {
        cy.visit("/automation-practice-form")
        cy.get('.mr-sm-2.form-control') //obtiene todos los elementos de esa clase
        
    })

    it("Use contains", ()=> {
        cy.visit("/automation-practice-form")
        cy.contains('Reading')
        cy.contains('.header-wrapper', 'Widgets')
        
    })

    it.only("Use parent", ()=> {
        cy.visit("/automation-practice-form")
        //obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()

        //obteniendo los elementos  padres
        cy.get('input[placeholder="First Name"]').parents()

        cy.get('input[placeholder="First Name"]').parents().find('label')

        cy.get('form').find('label') //del formulario obtengo las etiquetas label
        
    })

    it("Get it a for tag and attribute", ()=> {
        cy.visit("/automation-practice-form")
        cy.get('#firstName').type('felipe')
        cy.get('#lastName').type('estrada')
        cy.get('#userEmail').type('flip@email.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        
    })


})