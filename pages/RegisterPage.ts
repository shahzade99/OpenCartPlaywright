import {Page,Locator} from "playwright/test";

export class Register{
    private readonly page: Page;


    // Locators
    private readonly userName:Locator;
    private readonly firstName:Locator;
    private readonly lastName:Locator;
    private readonly email:Locator;
    private readonly country:Locator;
    private readonly password:Locator;
    private readonly registerBtn:Locator;
    private readonly alertMessage:Locator;
    private readonly registrationHeading:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.userName = page.getByPlaceholder("Username");
        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.email = page.getByPlaceholder("E-Mail");
        this.country = page.locator("#input-country");
        this.password = page.locator("#input-password");
        this.registerBtn = page.getByRole('button',{name:'Register'});
        this.alertMessage = page.locator(".alert-danger").first();
        this.registrationHeading = page.getByText(
            /welcome to opencart|account.{0,50}created|created.{0,50}account/i
        ).first();
    }


    // Registration details
    async registerAccount(rusername:string,rfname:string,rlname:string,remail:string,rcountry:string,rpassword:string): Promise<void>
    {
        await this.userName.fill(rusername);
        await this.firstName.fill(rfname);
        await this.lastName.fill(rlname);
        await this.email.fill(remail);
        await this.country.selectOption('United States');
        await this.password.fill(rpassword);
        await this.registerBtn.click();
    }


    // Get Heading confirmation
    async registrationConfirmation(): Promise<string>{
        await this.registrationHeading.or(this.alertMessage).waitFor({ state: "visible" });

        if (await this.alertMessage.isVisible()) {
            const errorMessage = (await this.alertMessage.innerText()).trim();
            throw new Error(`Registration failed: ${errorMessage}`);
        }

        return (await this.registrationHeading.innerText()).trim();

    }
    

    

}