import {Page,Locator} from "@playwright/test";

export class ProductPage{
    private readonly page:Page;

    // Locators

    private readonly productAdd:Locator;
    private readonly productQuantity:Locator;
    private readonly addbtn:Locator;
    private readonly CartTotal:Locator;
    private readonly CartDropdown:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.productAdd = page.getByRole('link',{name:'MacBook'}).first()
        this.productQuantity = page.locator('#input-quantity');
        this.addbtn = page.locator('#button-cart');
        this.CartTotal = page.locator("#cart-total");
        this.CartDropdown = page.locator('#cart .dropdown-menu');
    }

    async ProductCartAddition()
    {
        await this.productAdd.click();
        await this.productQuantity.fill('2');
        await this.addbtn.click();
    }


    async ViewCartTotal(): Promise<Locator>
    {
        return this.CartTotal;
    }

    async OpenCartDropdown(): Promise<Locator>
    {
        await this.CartTotal.click();
        return this.CartDropdown;
    }
}