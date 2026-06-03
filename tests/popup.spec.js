import{test} from '@playwright/test';
test('Popup handling', async({page})=>{
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog',async dialog=>{
        const type= dialog.type();
        const message = dialog.message();
        console.log(message);
        console.log(type);
   
        if(type ==='alert'){
            await dialog.accept();
        }
     else if(type==='confirm'){
        await dialog.accept();
     }
     else if(type==='prompt'){
        await dialog.accept('ramya');
     }

    });
    await page.click('#alertButton');
    await page.waitForTimeout(2000);
    await page.click('#confirmButton');
    await page.waitForTimeout(2000);
    await page.click('#promtButton');
    await page.waitForTimeout(3000);
    
});
