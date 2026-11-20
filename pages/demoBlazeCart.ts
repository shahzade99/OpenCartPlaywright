import {Page,Locator} from "@playwright/test";

export class demoBlazeCart{

    // page fixture property declaration
    private readonly page:Page;


    // Locators declaration
    private readonly cart:Locator;
    private readonly cartProductList:Locator;


    // Initializae the above props through constructor
    constructor(page:Page)
    {
        this.page = page;
        this.cart = page.getByRole("link",{name:'Cart', exact:true});
        this.cartProductList = page.locator('//tbody[@id="tbodyid"]/tr/td[2]');
    }


// Navigate the product
    async viewCartProduct(productName:string)
    {
        await this.cart.waitFor({state:'visible'});
        await this.cart.click()
        const productCount = await this.cartProductList.count();
        console.log("product count",productCount);

        for (let index = 0; index < productCount; index++)
        {
            const productLink = this.cartProductList.nth(index);
            if ((await productLink.innerText()).trim() === productName.trim())
            {
                console.log("product matched is", productLink);
                return;
                
            }
        }

        throw new Error(`Product "${productName}" was not found in the product list.`);
    }
}    