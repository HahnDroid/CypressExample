# Cypress_Automation

Sample project with Cypress.

Note - This code will not automate anything in it's current state. Proprietary information has been removed. 



##### Note

1. I have setup scripts in the package.json file:
    ```npm run start```
    ```npm run record```
    ```npm run report```
    ```npm run run```

A) You will have to change both the --key in order to record your tests and update your projectId in the cypress.json file. 
     This information is on your personal dashboard (https://dashboard.cypress.io/#/organizations)

B) start will open the Cypress GUI, record will do the run command with recording to your dashboard, report will run my script for deleting reports and creating new
     ones, run will start cypress with no GUI and the default Electron browser

# Running the tests

1. Run one the following commands from the root of your repository, either with a terminal in VS Code, or command window 
2. Open Cypress GUI: 
    1. node ./node_modules/.bin/cypress open
3. Running with mochawesome reporter and no GUI
    1. node scripts/cypress.js
4. Use the Scripts mentioned above such as ```npm run report```
5. Use ```cy.exec('node scripts/reset.js')``` to reset the QA database

##### Built With

* [Cypress](https://www.cypress.io/) - The web framework used
* [Mochawesome](https://github.com/adamgruber/mochawesome) - Mocha's custom reporter
* [Mochawesome-Merge](https://github.com/antontelesh/mochawesome-merge) - Used to Merge several Mochawesome JSON reports
* [Mochawesome-Report-Generator](https://github.com/adamgruber/mochawesome-report-generator) - Counterpart to mochawesome to generate the html reports from the JSON files.
