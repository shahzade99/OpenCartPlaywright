import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://awesomeqa.com/ui');
  await page.getByRole('link',{name:'MacBook'}).nth(1).click();
  await page.getByRole('button',{name:'Add to Cart'}).click();
  await page.locator('#cart-total').click();


  // work after this
  await page.getByRole('link',{name:'/View Cart/i'}).click();
  const productname = page.getByText('Product Name');
  const quantity = page.getByText('Quantity');

});