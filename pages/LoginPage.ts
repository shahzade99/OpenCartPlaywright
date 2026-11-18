import { Page, Locator } from "@playwright/test";

export class LoginPage{

    private readonly page: Page;

    // Locators
    private readonly myAccount: Locator;   // My Account has Register and Login
    private readonly loginOption:Locator
    private readonly emailField:Locator;
    private readonly passwordField:Locator;
    private readonly loginBtn:Locator;
    private readonly warningMessage:Locator;

    // Initialize the properties via constructor
    constructor(page: Page) {
        this.page = page;
        this.myAccount = page.locator("//a[@title='My Account']");
        this.loginOption = page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Login']")
        this.emailField = page.getByLabel('E-Mail Address')
        this.passwordField = page.getByLabel('Password')
        this.loginBtn = page.locator("//input[@value='Login']")
        this.warningMessage = page.getByText('Warning: No match for E-Mail Address and/or Password.', { exact: true })
    }



    // Goto MyAccount and select log in
    async myAccountLogin()
    {
        await this.myAccount.click();
        await this.loginOption.click();
    }
    

    // perform log in action
    async login(email:string, pass:string): Promise<void>
    {
        await this.emailField.fill(email)
        await this.passwordField.fill(pass);
        await this.loginBtn.click();
    }

    // Get warning message text
    async getWarningMessage(): Promise<string>
    {
        return await this.warningMessage.textContent() ?? '';
    }

    // check if warning message is visible
    async isWarningMessageVisible():Promise<boolean>
    {
        try{
            return this.warningMessage.isVisible();
        }catch(success){
            console.log(`Login Successful ${success}`);
            return false;
        }
    }
}