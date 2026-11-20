import { test, expect } from '../../fixtures/pageFixtures';


test("DemoBlaze Cart verification", async ({ page, demoProductFixture, demoCartFixture, demoLoginFixture }) => {
    await test.step('1) Navigate to the url', async () => {
        await demoLoginFixture.navigateToURL();
    })

   await test.step('2) Add the product', async () => {
        await demoProductFixture.addProductToCart("Nokia lumia 1520");
    })
    await test.step('3) Validate product in the cart', async () => {
        await demoCartFixture.viewCartProduct("Nokia lumia 1520")
        await expect(page.getByText("Nokia lumia 1520", { exact: true })).toBeVisible();
    })
}) 