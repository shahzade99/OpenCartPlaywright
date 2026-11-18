/*import {test, expect} from "@playwright/test";

test("Add Products to the Cart", async ({page}) => {

    // Navigate to the url
    await page.goto("https://awesomeqa.com/ui");


    // Search for MacBook
    await page.getByRole('link',{name:'MacBook'}).first().click();


    // Add to Cart
   await page.getByRole('button',{name:'Add to Cart'}).click();

  // Verify the cart total updates after adding the item
  const cartTotal = page.locator("#cart-total");
  await expect(cartTotal).toBeVisible();
  await expect(cartTotal).toContainText(/\d/);

  await cartTotal.click();
});*/

import {test, expect} from "../fixtures/pageFixtures";

test("Add Products to Cart", async ({homePage,productPage}) => {

    await test.step('1) Navigate to the url', async () => {
        await homePage.navigateTo("https://awesomeqa.com/ui");
    })

    await test.step('2) Add the product',async() => {
        await productPage.ProductCartAddition();
    })

    await test.step('3) Quantity in the cart Cart',async() => {
        const cartQ = await productPage.ViewCartTotal();
        await expect(cartQ).toContainText('2 item(s)');

        const cartContents = await productPage.OpenCartDropdown();
        await expect(cartContents).toBeVisible();
        await expect(cartContents).toContainText('MacBook');
        await expect(cartContents).toContainText('x 2');
    })

});