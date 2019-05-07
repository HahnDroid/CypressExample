/// <reference types="cypress" />

describe("Testing email authentication ", function () {
  it("Checks gmail inbox for an email", function () {
    cy.task("gmail:check", {
      from: "Another_Email",
      to: "Sample@gmail.com",
      subject: "Sample Subject"
    }).then(email => {
      assert.isNotNull(email, 'Email was found')
    })
  })
  it("Checks the body of an email ", function () {
    cy.testFun("gmail:get-messages", {
      options: {
        include_body: true
      }
    }).then(emails => {
      const found_email = emails.find(email => {
        return (
          email.from.indexOf("Sample@gmail.com") >= 0 &&
          email.subject.indexOf("A new email") >= 0
        )
      })
      assert.isNotNull(found_email, "Found email!")
      const body = found_email.body.html;
      assert.isTrue(
        body.indexOf(
          "This is in the body of the email."
        ) >= 0,
        "Found reset link!"
      )
    })

  })
})