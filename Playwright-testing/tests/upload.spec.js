import{test} from '@playwright/test';

// // test('file upload ,download ',async(-------o{page})=>{

//  //upload
//     const filepath='./hubby.JPG';
//     await page.goto('httpghs://demoqa.com/upload-download');
//     await page.waitForTimeout(2000);
//     await page.setInputFiles('#uploadFile',filepath);
//     await page.waitForTimeout(2000);
    
// //downloadfile
// const [download]=await Promise.all([page.waitForEvent('download'),page.click("//a[text()='Download']")]);
// await page.waitForTimeout(2000);
// await download.saveAs('./hubby.JPG');
   

// //screen Recording
test('screen recording',async({browser})=>{
   const context = await browser.newContext({

    recordVideo: {                      
        dir: './video'
    }
});
const page=await context.newPage();
await page.goto('https://demoqa.com/upload-download');
await page.waitForTimeout(2000);
await context.close();

});

