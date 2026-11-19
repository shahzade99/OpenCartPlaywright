import {test, expect} from "@playwright/test";

// Assertions demo
test("M2 Get method with Query Params",async ({request}) =>   
{
    const resp3 = await request.get("/booking/62");


    // Printing json file
    console.log(await resp3.json());

    // checking status code
    expect(resp3.status()).toBe(200);

    // checking status OK
    expect(resp3.ok).toBeTruthy;

    // checking the output response validation
    expect(await resp3.json()).toMatchObject({
        firstname: 'John',
        lastname: 'Smith',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
        })



    // validate specific field
    const jsonBody = await resp3.json();
    expect(jsonBody.firstname).toEqual("John");
})