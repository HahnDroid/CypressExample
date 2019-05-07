require('cypress-xpath')
/**
 * Adds x Days to the current date
 * Add 0 days to get the current date
 * @param  {} days
 */
function addDays(days) {
    var today = new Date()
    var dd = String(today.getDate() + days).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    var yyyy = today.getFullYear()

    return today = yyyy + '-' + mm + '-' + dd
}


describe("Set Availability", function () {
    it("Sets availability for current Admin", function () {
        if (cy.get('#HasSetUnavailability').should('not.be.checked')) {
            cy.get('#HasSetUnavailability').check()
        }
        cy.wait(3000)
        cy.get('[data-cy=rdtStartDate]').clear().type(addDays(0))
        cy.get('[data-cy=rdtEndDate]').clear().type(addDays(3))
        cy.get('.positive').as('btnSaveAvailability')
        cy.get('@btnSaveAvailability').click('right')
            .get('.notification-success').should('be.visible')
    })
})