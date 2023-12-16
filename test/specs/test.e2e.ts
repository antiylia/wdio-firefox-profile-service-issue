import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`about:config`)

        await browser.pause(40000)

        expect(true).toBeTruthy()
    })
})

