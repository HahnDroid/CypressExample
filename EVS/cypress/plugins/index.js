// These functions are called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require('cypress-cucumber-preprocessor').default
const path = require("path")
const gmail = require("gmail-tester")

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())
  on('before:browser:launch', (browser = {}, args) => {
    browser = {
      name: 'chrome',
      displayName: 'Chrome',
      version: '63.0.3239.108',
      path: 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
      majorVersion: '63'
    }
    if (browser.name === 'chrome') {
      args['--start-fullscreen'] = true
      // whatever you return here becomes the new args
      return args
    }
    else if (browser.name === 'electron') {
      args['fullscreen'] = true
      // whatever you return here becomes the new args
      return args
    }

  })
}
module.exports = (on, config) => {
  on("task", {
    "gmail:get-messages": async args => {
      const messages = await gmail.get_messages(
        path.resolve(__dirname, "credentials.json"),
        path.resolve(__dirname, "gmail_token.json"),
        args.options
      )
      return messages;
    }
  })
}
module.exports = (on, config) => {
  on("task", {
    "gmail:check": async args => {
      const { from, to, subject } = args;
      const email = await gmail.check_inbox(
        path.resolve(__dirname, "credentials.json"), // credentials.json is inside plugins/ directory.
        path.resolve(__dirname, "gmail_token.json"), // gmail_token.json is inside plugins/ directory.
        subject,
        from,
        to,
        10,                                          // Poll interval (in seconds)
        30                                           // Maximum poll interval (in seconds). If reached, return null, indicating the completion of the task().
      )
      return email
    }
  })
}
