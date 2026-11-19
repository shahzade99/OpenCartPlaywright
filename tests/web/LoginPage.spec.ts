import {test, expect} from "../../fixtures/pageFixtures";
import { Helper } from "../../utils/helper;
import { HomePage } from "../../pages/HomePage";

test("validate login process", async ({homePage,loginPage}) =>
{

    test.setTimeout(120000);
    //fetch email and password
    const {uemail, upassword} = Helper.getLoginDetails();

    await test.step('1) Navigate to Application URL', async () => {
        await homePage.navigateTo("https://www.opencart.com")
    });

    
    await test.step('2) Check if login option exist', async () => {
        await loginPage.isLoginExists();
    });


    await test.step('2B) Click on Log in button', async () => {
    await loginPage.clickLoginLink()
    });
    
    await test.step('3) Enter user email id', async () => {
        await loginPage.enterUserEmail(uemail);
    });


    await test.step('4) Enter user password', async () => {
        await loginPage.enterPassword(upassword);
    });


    await test.step('5) Enter click button to Submit', async () => {
        await loginPage.clickLogin();
    });


    await test.step('6) Verify login status', async () => {
        await loginPage.isWarningMessageVisible();
    });


    console.log("Valid Log in Completed Successfully")
    
    
});