import { Page, Locator } from "@playwright/test";

export class LoginPage{

    private readonly page: Page;

    // Locators
    private readonly loginLink: Locator;
    private readonly emailField:Locator;
    private readonly passwordField:Locator;
    private readonly loginBtn:Locator;
    private readonly warningMessage:Locator;

    // Initialize the properties via constructor
    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator("a.btn.btn-link.navbar-btn");
        this.emailField = page.locator("//input[@id='input-email']");
        this.passwordField = page.locator('#input-password');
        this.loginBtn = page.getByRole("button", { name: "Login", exact: true });
        this.warningMessage = page.locator(".alert-danger");
    }



    // Check if the login link is visible on the home page
    async isLoginExists(): Promise<boolean> {
        return await this.loginLink.isVisible();
    }


    // Open the login page from the home page
    async clickLoginLink(): Promise<void>
    {
        await this.loginLink.click();
        await this.passwordField.waitFor({ state: "visible" });
    }

    // Enter email id
    async enterUserEmail(email:string): Promise <void>
    {
        await this.emailField.fill(email);
    }

    // Enter password
    async enterPassword(pass:string): Promise<void>
    {
        await this.passwordField.waitFor({ state: "visible" });
        await this.passwordField.fill(pass);
    }

    // click log in button
    async clickLogin(): Promise <void>
    {
        await this.loginBtn.click();
    }

    // perform log in action
    async login(email:string, pass:string): Promise<void>
    {
        await this.enterUserEmail(email);
        await this.enterPassword(pass);
        await this.clickLogin();
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