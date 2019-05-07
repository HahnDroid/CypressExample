/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Login to application
     * @example
     * cy.login()
     */
    login()
    /**
     * Logout of application
     * @example
     * cy.logout()
     */
    logout()
    /**
     * inherit the previous subject and trigger('mouseover').
     * @example
     * cy.hover()
     */
    hover()
    /**
     * Select the Nth element in a drop down list
     * @example
     * cy.get('selectMenu').selectNth(num)
     * 
     */
    selectNth(subject, pos)
    /**
    * Checks a Gmail account if an e-mail was received
    * ReadOnly rights - cannot edit emails
    * @example
    * "gmail:check" / "gmail:get-messages"
    * 
    * 
    */
    task(any, { from, to, subject })
  }
}