import { test, expect } from "@playwright/test";

test('Dropdowns selection', async({page})=>{
    await page.goto('https://qaplayground.com/practice/dropdowns');
    await page.getByTestId('dropdown-fruit').click();
    await page.getByRole('option', {name:'Apple'}).click();

    await expect(page.getByText('Selected: ')).toHaveText(/apple/)

})

test('Dropdowns selection 2', async({page})=>{
    await page.goto('https://qaplayground.com/practice/dropdowns');
    await page.getByTestId('dropdown-country').click();
    await page.getByRole('option', {name:'India'}).click();
    //await page.getByText('India').click();
    await expect(page.getByText('Value: ')).toHaveText(/india/)   
})
test('Dropdowns selection 3', async({page})=>{
    await page.goto('https://qaplayground.com/practice/dropdowns');

    await page.getByText('Select Language').selectOption({value:'India'})
    await page.waitForTimeout(40000)
})
