import{test, expect} from '@playwright/test';
test('inbuild locators', async({page})=>{

    //getByPlaceolder

    await page.goto('https://demoqa.com/text-box?utm_source=chatgpt.com');
    await page.getByPlaceholder("Full Name").fill("Ramya");
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('name@example.com').fill('ramya@gmail.com');
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('Current Address').fill('3/294 A, Udumalaipettai');
    await page.waitForTimeout(3000);
    await page.locator('#permanentAddress').fill('3/294 A, Udumalaipettai');
    await page.waitForTimeout(3000);

//getByRole()
    await page.getByRole('button',{name:'Submit'}).click();
    await page.waitForTimeout(3000);
    const output= page.locator('#output');
    await output.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(output).toBeVisible();
      
//getByText

await expect(page.getByText('Name:Ramya')).toBeVisible();




});
   