import {test, expect} from "../fixtures/pageFixtures";
import {DataProvider} from "../utils/DataReader";

import path from "path";

interface LoginDataRow {      //[functional,abc@gmail.com,test@123,success]
    testName: string;
    email: string;
    password: string;
    expected: string;
}

const loginData: LoginDataRow[] = DataProvider.readJson(path.resolve(__dirname,''));