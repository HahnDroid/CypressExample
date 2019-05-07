/** 
 * Login for eVisit 
 * See package.json for variables
*/
Cypress.Commands.add('login', () => {
  var env = Cypress.env("dev")

  cy.visit(env.url)
  cy.get('#username').type(env.user)
  cy.get('#password').type(env.pass)
  cy.get(".primary").click()
})
/**
 * Logout for eVisit/ePortal
 */
Cypress.Commands.add('logout', () => {
  cy.get('.avatar > .name').click()
  cy.get('.icon-logout').click({ force: true })
  cy.title().should('eq', 'A Sample Title')
})

Cypress.Commands.add('hover', { prevSubject: 'element' }, (subject, options) => {
  subject.trigger('mouseover')
  return subject
})
Cypress.Commands.add('selectNth', { prevSubject: 'element' }, (subject, pos) => {
  cy.wrap(subject)
    .children('option')
    .eq(pos)
    .then(e => {
      cy.wrap(subject).select(e.val())
    })
}
)
