

import {test, expect} from "playwright/test";

test("API Auth key creation", async ({ request }) => {
    let respPUTT = await request.post("/auth", {

        data: {
            "username" : "admin",
            "password" : "password123"
        }
    })

    console.log(await respPUTT.json());
    
})

