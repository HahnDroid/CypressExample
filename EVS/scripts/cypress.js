const cypress = require('cypress')
const fse = require('fs-extra')
const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')

const options = {
  reportDir: "cypress/reports"
}

async function runTests() {
  await fse.remove('mochawesome-report') // remove the report folder
  await fse.remove('cypress/reports') // remove the report folder
  const { totalFailed } = await cypress.run() // get the number of failed tests
  const jsonReport = await merge(options) // generate JSON report
  await generator.create(jsonReport, options)
  process.exit(totalFailed) // exit with the number of failed tests
}
runTests()