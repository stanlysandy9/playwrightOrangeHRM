import {expect, test} from '@playwright/test';


test('Buttons: verification',async ({page})=>{

await page.goto('https://qaplayground.com/practice/buttons');
//Clicking on Button
await page.locator('#btn-goto-home').click()
await expect(page).toHaveURL('https://qaplayground.com/');
await page.goBack();
//Finding button location and button dimentions
const buttonLocation= await page.getByRole('button',{name: 'Find Location'}).boundingBox();
console.log(buttonLocation);
//Getting button colour
const buttonActCol= "rgb(147, 197, 253)"
const buttonColour= await page.getByRole('button',{name: 'Find my color?'}).evaluate((el)=>{
  return window.getComputedStyle(el).backgroundColor; 
    
});
expect(buttonActCol).toBe(buttonColour)
console.log(buttonColour);


//verifying if button is disabled
await page.getByTestId('btn-disabled').isDisabled();
const holdBtn= await page.getByTestId('btn-click-hold');
await holdBtn.hover();
await page.mouse.down();
await expect(page.getByTestId('btn-click-hold')).toHaveText('Keep Holding...');
await page.waitForTimeout(5000);
await expect(page.getByTestId('btn-click-hold')).toHaveText('Hold Complete!');
await page.mouse.up();

//Double click  Right click a button 
await page.getByTestId('btn-double-click').dblclick();
await expect(page.getByTestId('btn-action-result')).toHaveText('You Double-clicked on button!');

//Right click a button
await page.getByTestId('btn-right-click').click({button:'right'});
await expect(page.getByTestId('btn-action-result')).toHaveText('You Right-clicked on button!');
await expect(page.getByTestId('btn-action-result')).not.toHaveText('You Double-clicked on button!');

//
})