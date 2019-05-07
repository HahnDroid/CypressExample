/// <reference types="cypress" />
import '../../../support/commands'


describe("User search", function () {
    it("Searches for a user with the name, Tester", function () {
        cy.get('.navigation-container a:nth-child(3)').as("lnkUserHeader")
        cy.get('@lnkUserHeader').click()
        cy.title().should('eq', 'The title')
        cy.get('#searchTerm').type('Tester')
        cy.get('.search').as("btnSearch")
        cy.get('@btnSearch').click()

    })
})