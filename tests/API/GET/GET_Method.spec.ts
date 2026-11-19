import {test, expect, request, APIRequestContext} from "@playwright/test";

let reqContext1:APIRequestContext;

test.beforeAll("Hook before all", async () =>
{
        reqContext1 = await request.newContext({
            baseURL : "https://restful-booker.herokuapp.com"
    })
})

/** ...................................................................................... */

test("Get method1",async ({request}) =>   // type: APIRequestContext
{
    const resp = await request.get("https://restful-booker.herokuapp.com/booking");
    console.log(await resp.json());

})

test("Get method2",async ({}) =>   // import request type and leverage as APIrequest type
{
    const reqContext = await request.newContext({         // reqContext is APIRequestConext same as above type.
        baseURL : "https://restful-booker.herokuapp.com"
    });
    const resp1 = await reqContext.get("/booking");
    console.log(await resp1.json());
})


// Creating hook for baseURL
test("Get method3",async ({}) => 
{
    const resp2 = await reqContext1.get("/booking");
    console.log(await resp2.json());

})


// Method4: Most preferred is...playwright.config.ts file && update under USE baseURL:"URL of athe application"
test("Get method4",async ({request}) =>   // type: APIRequestContext & URL will be leveraging from config.ts file
{
    const resp3 = await request.get("/booking");
    console.log(await resp3.json());

})