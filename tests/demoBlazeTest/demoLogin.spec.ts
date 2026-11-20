import { test, expect } from '../../fixtures/pageFixtures';
import { demoblazeLoginPage } from '../../pages/demoBlazePOMPages/demoBlazeLoginPage';
import {Helper} from "../../utils/helper";

const {uemail, upassword} = Helper.getdemoBlazeRegisterDetails();


test("DemoBlaze Login Process", async({demoLoginFixture}) => 
{
  await test.step('1) Navigate to the url', async() => {
    await demoLoginFixture.navigateToURL();
  })

  await test.step('2) Enter credential and hit enter', async() => {
    await demoLoginFixture.performLoginAction(uemail,upassword);

    // handlig dialogs
  
  })

  
})
