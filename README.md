# Cypress E2E Testing Project

This project contains automated end-to-end (E2E) tests using **Cypress** for different web applications.
It also integrates **Allure Reports** for beautiful and detailed test reporting.

---
## Project Structure

- `cypress/e2e/` - Test specifications:
    - `commitquality.cy.js` - Drag-and-drop tests on [commitquality.com](https://commitquality.com)
    - `theInternet.cy.js` - Tests for network statuses, alerts, downloads, new window handling on [the-internet.herokuapp.com](https://the-internet.herokuapp.com)
    - `uitestingplayground.cy.js` - File upload tests on [uitestingplayground.com](http://uitestingplayground.com)
- `cypress/pages/` - Page Object Models with selectors and helper methods.
- `cypress/support/commands.js` - Custom Cypress commands (e.g., iframe interaction, drag-and-drop).
- `clearReporter.sh` - Script to clean up previous Allure reports.
- `cypress.config.js` - Cypress configuration.

---

## Installation

```bash
# Clone the repository
git clone https://github.com/Matterlinkk/cypress-js.git
```

```bash
# Navigate into the project
cd cypress-js
```

```bash
# Install dependencies
npm install
```

---

## Running Tests

### Open Cypress Test Runner (GUI Mode)

```bash
npm run cypress:open

```
### Run All Tests in Headless Mode

```bash
npm run cypress:test
```

## Generating and Viewing Allure Reports
### Run Tests and Generate Allure Report Automatically

```bash
npm run test:allure
```

This command will:
- Run all Cypress tests
- Generate Allure results (```/allure-results```)
- Create a report (```/allure-report```)
- Open the Allure report in your browser automatically
- 
### Manually Generate and Open Allure Report

```bash
# After running tests
npm run allure:generate

# Open the generated report
npm run allure:open
```