import {test, expect, request} from "playwright/test";
test("M1 Get method with Query Params",async ({request}) =>   // type: APIRequestContext & URL will be leveraging from config.ts file
{
    const resp3 = await request.get("/booking?firstname=John&lastname=Smith");
    console.log(await resp3.json());
})


test("M2 Get method with Query Params",async ({request}) =>   
{
    const resp3 = await request.get("/booking",{
        params:{
            firstname:"John",
            lastname:"Smith"
        }
    });
    console.log(await resp3.json());
})
