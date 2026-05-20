import {test, expect } from '@playwright/test'


test('TC1: input field verification test cases',async  ({page})=>{



    //Verify user able to enter text in text field

        //Navigate to page
     await page.goto('https://qaplayground.com/practice/input-fields');
     let inputData= 'Stanly Nimmakuri'

await page.getByPlaceholder('Enter hollywood movie name').fill(inputData);
await page.getByPlaceholder('Enter hollywood movie name').press('Enter');
await expect(page.getByTestId('input-movie-name')).toHaveValue(inputData);

})

test ('TC2:Append a text and press keyboard tab',async ({page})=>{

    await page.goto('https://qaplayground.com/practice/input-fields');
     let inputData= ' Human';
    await page.getByTestId('input-append-text').press('End')
     await page.getByTestId('input-append-text').type(inputData);
     await page.getByPlaceholder('Enter hollywood movie name').press('Enter');
     await expect(page.getByTestId('input-append-text')).toHaveValue('I am good Human');

})

test ('TC3:Clear,disable,readonly fields ',async  ({page})=>{

    await page.goto('https://qaplayground.com/practice/input-fields');
    await page.getByTestId('input-clear-text').clear();
    await expect(page.getByTestId('input-clear-text')).toHaveValue('');
    await page.getByTestId('input-disabled').isDisabled();
    await expect(page.getByTestId('input-readonly')).not.toBeEditable();
})


