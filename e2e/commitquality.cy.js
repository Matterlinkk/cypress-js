import {Commitquality} from "../../pages/commitquality";

describe('commitquality', () => {
    const commitquality = new Commitquality()

    it('Drag and drop test', () => {
        cy.visit(`${commitquality.basePage}/practice-drag-and-drop`)

        cy.allure().step('Perform drag and drop small box into large box', () => {
            cy.get(commitquality.smallBox)
                .drag(commitquality.largeBox)
        })

        cy.allure().step('Verify success message after drag and drop', () => {
            cy.get(commitquality.largeBox)
                .should('contain.text', 'Success!')
        })
    })
})