/// <reference types="cypress" />
const luhn = require('luhn-generator') // originally used for Health Card Numbers
import '../../../support/commands'

describe('Admin registers a user', function () {
    it('Registers a customer from the home screen link', function () {

        cy.get('.right:nth-child(1)').as("btnRegisterPatient")
        cy.get('@btnRegisterPatient').click()
        cy.title().should('eq', 'Register a User')
        cy.get('.patient-form', { timeout: 10000 }).should("exist")
        cy.xpath("//select[@name='adminId']")
            .select('76d4baf1-b4c3-4141-1234-74280191b1e5') // select Admin from drop down
        cy.get('#HealthCardNumber').type(luhn.random(10))
        cy.get('#FirstName').type('Cypress')
        cy.get('#LastName').type('Automation')
        cy.xpath("//select[@name='BirthMonth']").select('4')
        cy.xpath("//select[@name='BirthDay']").select('16')
        cy.xpath("//input[@name='BirthYear']").type("1992")
        cy.xpath("//select[@name='GenderId']").select('80b47d0b-8bc8-4945-ba6e-613cc09a1b78') // selects gender "Unknown" 
        cy.xpath("//input[@name='EmailAddress']").type(luhn.random(5) + "@CypressAutomation.com")
        cy.xpath("//input[@class='positive left']").click()
        cy.get('.notification-success').should('be.visible')

    })
})