import path from "path";
import { expect, test } from "../fixtures/pageFixtures";
import { DataProvider } from "../utils/DataReader";

interface LoginDataRow {
    testname: string;
    email: string;
    password: string;
    expected: "success" | "failure";
}

const loginData: LoginDataRow[] = DataProvider.readJson(
    path.resolve(__dirname, "../testdata/opencart_logindata.json")
);

const appUrl = "https://awesomeqa.com/ui";

loginData.forEach(({ testname, email, password, expected }, index) => {
    test(`Login data driven - ${testname} [${index + 1}]`, async ({ homePage, loginPage }) => {
        test.setTimeout(120000);
        await homePage.navigateTo(appUrl);
        await loginPage.myAccountLogin();
        await loginPage.login(email, password);

        const warningVisible = await loginPage.isWarningMessageVisible();
        expect(warningVisible).toBe(expected === "failure");
    });
});