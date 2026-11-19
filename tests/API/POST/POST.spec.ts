import {test, expect} from "playwright/test";
import payload from "../../../testdata/heroku_auth.json"

test("POST Method1", async ({ request }) => {
    const resp1 = await request.post("https://restful-booker.herokuapp.com/booking", {
        data:
        {
            firstname: "Shah",
            lastname: "Mohammed",
            totalprice: 121,
            depositpaid: true,
            bookingdates: {
                checkin: "2026-11-12",
                checkout: "2026-12-14"
            },
            additionalneeds: "Breakfast"

        }
    })
    const jresponse = await resp1.json();
    console.log("Json response", jresponse);
    expect(resp1.status()).toBe(200);           // to validate status code
    expect(resp1.statusText()).toBe("OK");     // to validate status text
    expect (resp1.ok()).toBeTruthy();          // another way to validate OK


    expect(jresponse.booking).toMatchObject({
        firstname: "Shah",
        lastname: "Mohammed",
        totalprice: 121,
        depositpaid: true,
        bookingdates: { checkin: "2026-11-12", checkout: "2026-12-14" },
        additionalneeds: "Breakfast",
    });

    expect(jresponse.booking.firstname).toBe("Shah");
})



test("API with UI Verfication", async ({ request, page }) => {
    let resp2 = await request.post("https://api.demoblaze.com/addtocart", {
        data: { 
            "id": "547dcae7-734b-9356-b5ed-d4e6b2caeda5", 
            "cookie": "user=13b9a0f6-ff44-cc8e-415a-5a3db36b8d36", 
            "prod_id": 1, "flag": false 
        }
    })

    expect(resp2.status()).toBe(200)
    
})


test("POST Method with Data Driven", async ({ request }) => {
    const resp11 = await request.post("https://restful-booker.herokuapp.com/booking", {
        data:payload
    })
    const jresponse = await resp11.json();
    console.log("payload Json response", jresponse);
    expect(resp11.status()).toBe(200);           // to validate status code
    expect(resp11.statusText()).toBe("OK");     // to validate status text
    expect (resp11.ok()).toBeTruthy();
}); 