import {test, expect, request} from "playwright/test";
test("Get method with id",async ({request}) =>   // type: APIRequestContext & URL will be leveraging from config.ts file
{
    const resp3 = await request.get("/booking/1");
    console.log(await resp3.json());
})

test("Get method with json response headers", async ({ request }) => {
    const resp4 = await request.get("/booking/1");
    const headersValue = resp4.headers();
    console.log(headersValue);
    expect(headersValue.server).toBe("Heroku");
    expect(headersValue["x-powered-by"]).toBe("Express");
})

test("Get method with json response headers Array", async ({ request }) => {
    const resp4 = await request.get("/booking/1");
    const headersArray = resp4.headersArray();
    
    console.log("length of array is",headersArray.length);
    expect(headersArray[0]?.name).toBe("Content-Length");
    expect(headersArray[3]?.name).toBe("Etag");

    headersArray.forEach((header) => {
        console.log("Header name and value",header)
        console.log("Header with value only",header.value);
    })
})