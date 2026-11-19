import {test, expect} from "@playwright/test";


test("Validating demoBlaze API throug web visuals", async ({request,page}) =>
{
    const respon = await request.get("https://api.demoblaze.com/entries");
    const jbody = await respon.json();
    //console.log(jbody)   // gives you all the info in the json
    //console.log(jbody.Items[0]) // body of Items at 0 index

    console.log("api title", jbody.Items[0].title)    // title of the product at index 0 THROUGH API


    // get title of fist product through webPage

    await page.goto("https://demoblaze.com")
    console.log("web title",await page.getByRole('link',{name:"Samsung galaxy s6"}).innerText())
    

    await expect(page.getByRole('link',{name:"Samsung galaxy s6"})).toContainText(jbody.Items[0].title);
})