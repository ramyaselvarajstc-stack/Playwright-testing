import{test} from '@playwright/test';
test('Windows handling', async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://demoqa.com/browser-windows');
    const [newPage]=await Promise.all([page.context().waitForEvent('page'),page.click('#windowButton')]);
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await page.waitForTimeout(2000);


});   