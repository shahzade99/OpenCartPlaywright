import {Page,Locator} from "@playwright/test";


export class demoblazeLoginPage{

    // page fixture property declaration
    private readonly page:Page;


    // Locators declaration
    private readonly loginOption:Locator;
    private readonly username:Locator;
    private readonly password:Locator;
    private readonly submitBtn: Locator;


    // Initializae the above props through constructor
    constructor(page:Page)
    {
        this.page = page;
        this.loginOption = page.getByRole('link', { name: 'Log in' })
        this.username = page.locator('#loginusername')
        this.password = page.locator('#loginpassword')
        this.submitBtn = page.getByRole('button', { name: 'Log in' })
    }


    // Navigate to the url
    async navigateToURL()
    {
        await this.page.goto("https://demoblaze.com/index.html");
    }

    // login credentials
    async performLoginAction(uname:string,pass:string)
    {
        await this.loginOption.click();
        await this.username.fill(uname);
        await this.password.fill(pass);
        await this.submitBtn.click();
    }
}

