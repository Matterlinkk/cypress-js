import {Uitestingplayground} from "../../pages/uitestingplayground"

import '@4tw/cypress-drag-drop'
import 'cypress-real-events/support'
import '@shelex/cypress-allure-plugin'

describe('uitestingplayground', () => {
    const uitestingplayground = new Uitestingplayground()

    it('File uploading test', () => {
        const fileName = 'test.txt'
        const filePath = `testFiles/${fileName}`
        cy.visit(`${uitestingplayground.basePage}/upload`)

        cy.getIframeBody('iframe').within(() => {
            cy.allure().step(`Upload file "${fileName}"`, () => {
                cy.get(uitestingplayground.fileUploader)
                    .selectFile(filePath, {force: true})
            })

            cy.allure().step('Check success upload message is visible', () => {
                cy.get(uitestingplayground.successFileMessage)
                    .should('be.visible')
            })

            cy.allure().step('Verify uploaded file name is displayed', () => {
                cy.get(uitestingplayground.fileList)
                    .should('contain.text', fileName)
            })
        })
    })
})
