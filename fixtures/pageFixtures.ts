import {test as base, expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/loginPage";
import { Register } from "../pages/RegisterPage";


const APP_URL = "https://www.opencart.com";


type pageFixtures = {
    homePage : HomePage;
    loginPage: LoginPage;
    registerPage: Register;
};

/**
 * creates a customized Playwright TEST OBJECT with a homePage fixture.
 * base.extend<pageFixtures>(...) adds fixtures to Playwright’s base test, with pageFixtures providing the TypeScript types.
 * homePage: async ({ page }, use) => { ... } defines the fixture. Playwright provides the browser page.
 * await page.goto(APP_URL) opens your application before the test uses the fixture.
 * await use(new HomePage(page)) gives the test a HomePage object wrapping that page. After the test finishes using the fixture, Playwright continues with its cleanup.
 */

export const test = base.extend<pageFixtures> ({
    homePage: async ({page}, use) => {
        //await page.goto(APP_URL);
        await use(new HomePage(page));
    },

    loginPage: async({page},use) =>
    {
        await use(new LoginPage(page))
    },

    registerPage: async({page},use) =>
    {
        await use(new Register(page))
    }
});


export {expect} from "@playwright/test";

