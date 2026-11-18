import {test, expect} from "../fixtures/pageFixtures";
import { Helper } from "../helper";
test.setTimeout(120000);

test('User Registration Process', async({homePage,registerPage}) =>
{
    const {rusername,rfname,rlname,remail,rcountry,rpassword} = Helper.getRegisterDetails();

    await test.step('1) Navigate to application URL', async() => {
        await homePage.navigateTo("https://www.opencart.com");
    });

    await test.step('2) Navigate to Registration option', async() => {
        await homePage.registration();
    });

    await test.step('3) Enter registration details', async() => {
        await registerPage.registerAccount(rusername,rfname,rlname,remail,rcountry,rpassword)
    });

    await test.step('4) Registration confirmation', async() => {
        const confirmation = await registerPage.registrationConfirmation();
        expect(confirmation).toMatch(/welcome to opencart|account.{0,50}created|created.{0,50}account/i);
    });






console.log("account created successfully");


});


