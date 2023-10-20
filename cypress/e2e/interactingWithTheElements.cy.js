/// <reference types="cypress" />

describe("interact with the elements", function() {

    let text

    //beforeEach(()=>{
    //    cy.visit("/buttons")
    //})

    it("double click", ()=> {
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click')
    })

    it("right click", ()=> {
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('contain', 'You have done a right click')
    })

    it("click", ()=> {
        //obtiene todos tags de tipo button y hace clic en el indice 3
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a dynamic click')
    })

    it("force click", ()=> {
        cy.visit('/dynamic-properties')
        //cy.get('#enableAfter').click({timeout:0})
        cy.get('#enableAfter').click({timeout:0, force:true})

    })

    it("click for position", ()=> {
        cy.get('button').eq(3).click().parent().parent().click('topRight')
        cy.get('button').eq(3).click().parent().parent().click('bottomLeft')
        cy.get('button').eq(3).click().parent().parent().click(5,60)
    })

    it("Input type text", ()=> {
        cy.visit("/automation-practice-form")
        cy.get('#firstName').type('luis')
        //cy.get('#firstName').type('{selectAll}{backspace}') //limpia el campo
        cy.get('#firstName').clear()
        cy.get('#firstName').type('felipe')

        cy.get('#lastName').type('estrada')
        cy.get('#userEmail').type('flip@email.com')

    })

    it("checkbox and radio button", ()=> {
        cy.visit("/automation-practice-form")

        //cy.get('#gender-radio-1').click()
        //cy.get('#gender-radio-1').click({force: true})
        //cy.get('#gender-radio-1').check({force: true})
        cy.get('label[for="gender-radio-1"]').click() //forma recomendada

        //checkbox
        cy.get('label[for="hobbies-checkbox-1"]').click() //forma recomendada

    })

    /* 
        Es importante que saber que los test entre los cuales vamos a compartir
        informacion tengan la function() para que nos entregue el contexto
    */
    
    it("extracting information", function() {
        cy.visit("/automation-practice-form")
        
        cy.get('#firstName').as('firstName') //creamos un alias para llamarlo donde sea necesario
        cy.get('@firstName').type('felipe')

        cy.get('@firstName').then(($firstName) => {
            text = $firstName.val()
            expect($firstName.val()).to.equal('felipe')
        })

        cy.get('@firstName').invoke('val').should('equal', 'felipe')
        cy.get('@firstName').invoke('val').as('nameGlobal')
        
    })

    it("share information", function() {
        cy.visit("/automation-practice-form")
        
        cy.get('#lastName').as('lastName') 

        //Estamos compartiendo texto de un valor a otro
        cy.get('@lastName').type(text)
        cy.get('#firstName').type(this.nameGlobal)

    })

    it("interacting with the dropdown(select)", function() {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        
        cy.get('select').select(2)
        //assertion
        cy.get('select').select('audi').should('have.value', 'audi')

    })

    it("interacting with the dropdown(dynamic select)", function() {
        cy.visit("https://react-select.com/home")
        
        //limpia el input y selecciona por texto
        cy.get('#react-select-4-input').click().clear().clear()
        cy.get('#react-select-4-input').type('Orange{enter}')

        //obtener los hijos(elementos de la lista)
        //con el each puedo interactuar entre esos elementos, este recibe un colback
        cy.get('#react-select-6-input').type(' ')
        cy.get('#react-select-6-listbox').children().children().each(($el, index, $list)=>{
            if($el.text()=== 'Red'){
                //$el.on('click')
                $el.click()
            }
        })
    })

    it("interacting with tables", function() {
        cy.visit("https://www.w3schools.com/html/html_tables.asp")
        
        cy.get('#customers')
            .find('th')
            .each(($element)=>{
                cy.log($element.text())
            })

        //Obtiene el primer elemento de tipo text y que sea equal Company
        cy.get('#customers')
            .find('th')
            .first()
            .invoke('text')
            .should('equal', 'Company')  

        
        cy.get('#customers')
            .find('th')
            .eq(1)
            .invoke('text')
            .should('equal', 'Contact')  
        //validamos el numero de filas sea igual a 7
        cy.get('#customers').find('tr').should('have.length', 7)

        cy.get('#customers')
            .find('tr')
            .eq(1)
            .find('td')
            .eq(1)
            .invoke('text')
            .should('equal', 'Maria Anders')

        //si no deseamos usar el invoke lo podemos hacer con el then
        cy.get('#customers')
            .find('tr')
            .eq(1)
            .find('td')
            .eq(1)
            .then($element=>{
                const text = $element.text()
                expect(text).to.equal('Maria Anders')
            })

        
    })

    it("interacting with date pickers", function() {
        cy.visit("https://material.angular.io/components/datepicker/overview")

        cy.get('datepicker-overview-example')
            .find('label')
            .eq(0)
            .type('18/10/2023')

        //para interactuar con el boton que habilita el calendario
        cy.get('datepicker-overview-example')
            .find('button')
            .click()

    })

    it("interacting with modals", function() {
        cy.visit("https://demoqa.com/modal-dialogs")

        cy.get('#showSmallModal').click()
        cy.get('#closeSmallModal').click()

    })


    // Prueba para interactuar con alertas en Cypress
    it("interacting with alerts", function() {
        // Visitar la página que contiene las alertas
        cy.visit("https://demoqa.com/alerts")

        // Escucha los eventos de ventana para confirmación
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#confirmButton')
            .click()
            .then(() => {
                // Verificar que el evento de confirmación se llamó con el mensaje correcto
                expect(stub.getCall(0)).to.be.calledWith(
                    'Do you confirm action?'
                    )
        })

        // Verificar que el mensaje "You selected Ok" existe en la página
        cy.contains('You selected Ok').should('exist')
    })


    // Otra forma de interactuar con confirmar alertas
    it("interacting with alerts", function() {
        cy.visit("https://demoqa.com/alerts")

        cy.get('#confirmButton').click()
        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.be.equal('Do you confirm action?')
        })

        cy.contains('You selected Ok').should('exist')
    })

    //Cancel alert
    it("interacting with alerts", function() {
        cy.visit("https://demoqa.com/alerts")

        cy.get('#confirmButton').click()
        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.be.equal('Do you confirm action?')
            return false
        })

        cy.contains('You selected Cancel').should('exist')
    })

    it("interacting with tool tips", function() {
        cy.visit("https://demoqa.com/tool-tips")

        //trigger dispara eventos 
        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('exist')
        cy.get('#toolTipButton').trigger('mouseout')
        cy.contains('You hovered over the Button').should('not.exist')
    })

    it.only("interacting with drag and drop", function() {
        cy.visit("https://demoqa.com/dragabble")

        //las coordenadas iniciales pueden ser cero o tomar tambien un valor
        cy.get('#dragBox').
        trigger('mousedown',{ //selecciona 
            which: 1,
            pageX: 600,
            pageY: 100,
        }).trigger('mousemove',{ //mueve el elemento a esa posicion
            which: 1,
            pageX: 600,
            pageY: 600,
        }).trigger('mouseup') //suelta el elemento
    })




})