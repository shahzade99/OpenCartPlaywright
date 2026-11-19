

import { test, expect } from "playwright/test";

// Step1: Token Creation
let tokenValue: string;
test.beforeAll("API Auth token creation", async ({ request }) => {
    const authResponse = await request.post("/auth", {
        data: {
            username: "admin",
            password: "password123"
        }
    });
    expect(authResponse.ok()).toBeTruthy();
    const authBody = await authResponse.json() as { token?: string };
    if (!authBody.token) {
        throw new Error("Authentication response did not contain a token.");
    }
    tokenValue = authBody.token;
});


// Step2: Booking creation
test("Delete method with new generated token", async ({ request }) => {
    const bookingResponse = await request.post("/booking", {
        data: {
            firstname: "Test",
            lastname: "Booking",
            totalprice: 121,
            depositpaid: true,
            bookingdates: {
                checkin: "2026-11-12",
                checkout: "2026-12-14"
            },
            additionalneeds: "Breakfast"
        }
    });
    expect(bookingResponse.ok()).toBeTruthy();


    // Deletion of the booking
    const booking = await bookingResponse.json() as { bookingid: number };

    const deleteResponse = await request.delete(`/booking/${booking.bookingid}`, {
        headers: {
            Cookie: "token=" + tokenValue
        }
    });
    expect(deleteResponse.status()).toBe(201);
});
