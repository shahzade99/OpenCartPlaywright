import { test, expect, request } from "playwright/test";

test("Get method with id", async ({ request }) => {
    const resp3 = await request.delete("/booking/121",{
        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
    });
    console.log(resp3);
})