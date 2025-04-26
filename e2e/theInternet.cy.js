import {TheInternet} from "../../pages/theInternet";

describe('the internet', () => {
    const theInternet = new TheInternet()

    describe("Network status code check tests", () => {
        [200, 404, 301, 500].forEach((status) => {
            it(`Check the page returns ${status} code`, () => {
                cy.visit(`${theInternet.basePage}/status_codes`)

                cy.allure().step(`Check status code ${status}`, () => {
                    theInternet.checkStatusCode(status)
                })
            })
        })
    })

    it('JQuery UI - Menu + file validation test', () => {
        cy.visit(`${theInternet.basePage}/jqueryui/menu`)

        cy.allure().step('Hover over "Enabled" item', () => {
            cy.get(theInternet.enabledItem)
                .should('be.visible')
                .realHover({position: "right"})
        })

        cy.allure().step('Hover over "Downloads" item', () => {
            cy.get(theInternet.downloadsItem)
                .should('be.visible')
                .realHover({position: "right"})
        })

        cy.allure().step('Click on "PDF" download item', () => {
            cy.get(theInternet.PDFItem)
                .should('be.visible')
                .click()
        })

        cy.allure().step('Verify the downloaded PDF file exists', () => {
            cy.readFile(`${Cypress.config('downloadsFolder')}/menu.pdf`).should('exist')
        })
    })

    it('Opening a new window', () => {
        const url = `${theInternet.basePage}/windows`

        cy.visit(url)

        cy.allure().step('Click on "Click Here" link', () => {
            cy.contains('a', 'Click Here')
                .invoke('removeAttr', 'target')
                .click()
        })

        cy.allure().step('Verify new window is opened', () => {
            cy.contains('h3', 'New Window').should('be.visible')
            cy.url().should('not.eql', url)
            cy.url().should('include', '/windows/new')
        })
    })

    it('Alert handling', () => {
        const testText = 'qwe'

        cy.visit(`${theInternet.basePage}/javascript_alerts`)

        cy.allure().step('Stub browser prompt and enter custom text', () => {
            cy.window().then((p) => {
                cy.stub(p, 'prompt').returns(testText)
            })
        })

        cy.allure().step('Click on JS Prompt button', () => {
            cy.get(theInternet.jsPromtBtn).click()
        })

        cy.allure().step('Verify entered text is displayed', () => {
            cy.contains(`You entered: ${testText}`).should('be.visible')
        })
    })
})
