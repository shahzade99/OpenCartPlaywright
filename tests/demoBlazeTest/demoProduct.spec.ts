import { test, expect } from '../../fixtures/pageFixtures';


test("DemoBlaze Product Add", async ({ page, demoProductFixture, demoLoginFixture }) => {
    await test.step('1) Navigate to the url', async () => {
        await demoLoginFixture.navigateToURL();
    })

    await test.step('2) Search for the product', async () => {
        await demoProductFixture.addProductToCart("Nokia lumia 1520");
    })

    await test.step('3) Check the cart content', async () => {
        await demoProductFixture.gotoCart();
        await expect(page.getByText("Nokia lumia 1520", { exact: true })).toBeVisible();
    })

    

})


//ai.
/**
 * 1. separate the cart page
 * 2. make the input as dynamic in both cart and product page
 * 3. expect validate it.
 */