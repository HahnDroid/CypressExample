/// <reference types="cypress" />

describe("Navigate to User Management Page", function () {
    it("Accesses a Users profile", function () {
        cy.get('[data-cy=lnkPatients]').first().click()
        cy.get('#searchTerm').type('UniqueName1')
        cy.get('.search').click()
        cy.wait(3000)
        cy.get('[data-cy=lsiPatient_0]', { timeout: 5000 }).first().click()
        cy.get('.register-form-step > .columns', { timeout: 15000 })
        cy.get('[data-cy=tabAccount]').click()
        cy.get('.value').should('be.visible')
        cy.get('[data-cy=tabVisits]').click()
        cy.get('.patient-visits').should('be.visible')
        cy.get('[data-cy=tabRelatedPatients]').click()
        cy.get('.add-relationship-container').should('be.visible')

    })
})