/**
 * Open the application
 * verify home page is visible
 */

import {test,expect} from "../fixtures/pageFixtures";


test("Valid login flow", async ({homePage}) =>{
    await test.step('1) Open the application', async() =>{
        await homePage.navigateTo("https://www.opencart.com");
    })
})