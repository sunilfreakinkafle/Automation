///  <references types = "Cypress"/>

import loginPage from './pageObjects/loginPage'

describe('Test Suite', function(){
    before(function(){

        cy.fixture('testData').then(function(data){
            this.data = data
        })
    })
    it('Valid login Test', function(){
        const lg = new loginPage()
        lg.visit()
        lg.fillEmail('test1@test.com')
        lg.fillPassword('password1')
        lg.submit()
    })
})