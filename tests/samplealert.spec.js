import{test} from '@playwright/test';
test('product base',async({page})=>{
await page.goto('https://www.myntra.com/');
await page.waitForTimeout(2000);
await page.locator("//a[@data-group='kids']").click();
await page.waitForTimeout(2000);
await page.locator('//a[@data-reactid="345"]').click();
await page.waitForTimeout(2000);
const count= await page.locator('//li[@class="product-base"]').count();
console.log(count);
await page.waitForTimeout(2000);

// All product prices

const prices = await page.locator('//li[@class="product-base"]//descendant::span[@class="product-discountedPrice"]'
  ).allTextContents();
    console.log("All Prices :", prices);

const minPrice = Math.min(
    ...prices.map(price =>
      Number(price.replace('Rs. ', '').replace(',', ''))
    )
  );

console.log('Minimum Price :', minPrice);

});

// import{test} from '@playwright/test';
// test('product base',async({page})=>{
// await page.goto('https://www.myntra.com/');
// await page.waitForTimeout(2000);
// const Allproduct= await page.locator('//li[@class="product-base"]//descendant::span[@class="product-discountedPrice"]'
//   ).allTextContents();
// console.log("All Products :", Allproduct);



// });