import{test} from '@playwright/test';
test('frame work',async({page})=>{
await page.goto('https://demo.automationtesting.in/Frames.html');
await page.waitForTimeout(3000);

//single frame
await page.frameLocator('#singleframe').locator('//input[@type="text"]').fill('yogesh');
await page.waitForTimeout(3000);

//multihandling

//fram text xpath

 await page.click("//a[text()='Iframe with in an Iframe']");

 //multiframe xpath

 const multiframepath=page.frameLocator('//iframe[@src="MultipleFrames.html"]');

//single and text xpath

 const innerframepath=multiframepath.frameLocator('//iframe[@src="SingleFrame.html"]');
 await innerframepath.locator('//input[@type="text"]').fill('ramya');
 await page.waitForTimeout(3000);
 
});
