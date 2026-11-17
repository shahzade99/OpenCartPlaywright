import { Locator, Page } from "@playwright/test";

export class HomePage {

    private readonly page: Page;

    // Locators
    private readonly loginLink: Locator;
    private readonly registerIcon:Locator;
    

    // Initialize the properties via constructor
    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator("//a[@class='btn btn-link navbar-btn']");
        this.registerIcon = page.locator("//a[@class='btn btn-black navbar-btn']");

    }



    // Navigate to application URL
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    // Navigate to Registration button
    async registration(): Promise<void> {
        await this.registerIcon.click();
    }


}