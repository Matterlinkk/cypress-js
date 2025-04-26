export class TheInternet {
    constructor() {
        this.basePage = 'https://the-internet.herokuapp.com'

        this.enabledItem = '#ui-id-3'
        this.downloadsItem = '#ui-id-4'
        this.PDFItem = '#ui-id-5'
        this.jsPromtBtn = '[onclick="jsPrompt()"]'
    }
    checkStatusCode(code) {
        cy.intercept('GET', '**/status_codes/**').as('statusCodeResponse');
        cy.contains('a', code.toString()).click();
        cy.wait('@statusCodeResponse').its('response.statusCode').should('eq', code);
    }
}