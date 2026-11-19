import {test, expect, request} from "playwright/test";
test("Get method with id",async ({request}) =>   // type: APIRequestContext & URL will be leveraging from config.ts file
{
    const resp3 = await request.get("/booking/1");
    console.log(await resp3.json());
})