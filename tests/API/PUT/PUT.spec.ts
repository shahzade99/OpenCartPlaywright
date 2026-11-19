import {test, expect} from "playwright/test";
import payload from "../../../testdata/heroku_auth.json";

test("API with PUT Verfication", async ({ request }) => {
    let respPUT = await request.put("/booking/1", {
        headers:{
            Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
        },

        data: {
                "firstname": "Jim",
                "lastname": "Shahzad",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Lunch"
        }
        

    })

    let jparse = await respPUT.json();
    console.log(jparse);
    expect(respPUT.status()).toBe(200);
    expect(respPUT.statusText()).toBe("OK");
    expect(jparse.firstname).toEqual("Jim");


    
})


test("API with PUT data driven Verfication", async ({ request }) => {
    let respPUT = await request.put("/booking/1", {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: payload
    })

    let jparse = await respPUT.json();
    console.log(jparse);
    expect(respPUT.status()).toBe(200);
    expect(respPUT.statusText()).toBe("OK");
    expect(jparse.firstname).toEqual("Mohammed");
})