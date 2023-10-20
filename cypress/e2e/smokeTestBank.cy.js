describe("Test suite", ()=> {

    it("Validate paging de initio", ()=> {

        cy.visit("http://zero.webappsecurity.com/")
        cy.get(".active > img").should("be.visible")
        cy.get('.active > .custom > h4').contains("Online Banking")
    })

    it("Validate 2", ()=> {
        
    })

    it("Validate 3", ()=> {
        
    })

})