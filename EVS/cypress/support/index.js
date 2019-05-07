import './commands'
require('cypress-xpath')
/// <reference types="cypress" />

beforeEach(function () {
  cy.login()
  cy.title().should('eq', 'Home')
})

afterEach(function () {
  cy.logout()
})

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
      args.push('--use-fake-ui-for-media-stream')
      args.push('--use-fake-device-for-media-stream')
      args.push('--use-file-for-fake-video-capture=cypress/fixtures/VideoTest/ice_qcif_15fps.y4m')
    }

    return args
  })
}