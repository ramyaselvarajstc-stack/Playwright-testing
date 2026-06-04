import{test} from '@playwright/test';
test('create a table', async ({ page }) => {
    let details = {
        name: 'ramya',
        age: 25,
        city: 'chennai',
    };
      console.table(details);
});
