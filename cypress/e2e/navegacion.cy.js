describe("Navigate", ()=> {

    it("Navigate in Platzi home", ()=> {
        cy.visit("https://platzi.com/")
        
    })

    it("Reload page", ()=> {
        cy.reload()
        
    })

    it("Force page reload", ()=> {
        cy.visit("https://google.com/")
        cy.reload(true)
        
    })

    //it.only quiere decir que solo correra esa prueba
    it("Navigate backwards", ()=> {
        cy.visit("https://google.com/")
        cy.visit("https://www.google.com/search?q=platzi&sca_esv=570874343&source=hp&ei=NSseZaqHDaSJwbkPnNa1mA4&iflsig=AO6bgOgAAAAAZR45RXVMdl0Biz3woK3Je2ukessuUGtT&ved=0ahUKEwjq9bK2-d2BAxWkRDABHRxrDeMQ4dUDCAo&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyERAuGIAEGLEDGIMBGMcBGNEDMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCxAuGIAEGMcBGK8BSN4pUPYIWIYjcAF4AJABAZgB2gGgAZAHqgEFMC41LjG4AQPIAQD4AQGoAgrCAhAQABgDGI8BGOUCGOoCGIwDwgIQEC4YAxiPARjlAhjqAhiMA8ICCBAAGIAEGLEDwgILEC4YigUYsQMYgwHCAgQQABgDwgILEAAYigUYsQMYgwHCAggQLhiABBixA8ICCBAuGIAEGNQC&sclient=gws-wiz")
        //cy.go("back")
        cy.go(-1)
    })

    it.only("Navigate forward", ()=> {
        cy.visit("https://google.com/")
        cy.visit("https://www.google.com/search?q=platzi&sca_esv=570874343&source=hp&ei=NSseZaqHDaSJwbkPnNa1mA4&iflsig=AO6bgOgAAAAAZR45RXVMdl0Biz3woK3Je2ukessuUGtT&ved=0ahUKEwjq9bK2-d2BAxWkRDABHRxrDeMQ4dUDCAo&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyERAuGIAEGLEDGIMBGMcBGNEDMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCxAuGIAEGMcBGK8BSN4pUPYIWIYjcAF4AJABAZgB2gGgAZAHqgEFMC41LjG4AQPIAQD4AQGoAgrCAhAQABgDGI8BGOUCGOoCGIwDwgIQEC4YAxiPARjlAhjqAhiMA8ICCBAAGIAEGLEDwgILEC4YigUYsQMYgwHCAgQQABgDwgILEAAYigUYsQMYgwHCAggQLhiABBixA8ICCBAuGIAEGNQC&sclient=gws-wiz")
        cy.go("back")
        cy.go("forward")
    
    })

})