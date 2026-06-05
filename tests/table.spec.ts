import { test, expect } from "@playwright/test";

//to verify table headers
test("verify table headers", async ({ page }) => {
  await page.goto("https://qaplayground.com/practice/data-table");

  const expHdrs = [
    "Sr No.",
    "Book Name",
    "Book Genre",
    "Book Author",
    "Book ISBN",
    "Book Published",
  ];
  //const table = page.locator('table').nth(1);
  console.log("expected Headers: " + expHdrs);
  const actHdrs = await page.locator("table thead th").allTextContents();
  console.log("Actual Headers: " + actHdrs);

  expect(actHdrs[0]).toEqual(expHdrs[0]);
  expect(actHdrs[1]).toEqual(expHdrs[1]);
  expect(actHdrs[2]).toEqual(expHdrs[2]);
  expect(actHdrs[3]).toEqual(expHdrs[3]);
  expect(actHdrs[4]).toEqual(expHdrs[4]);
  expect(actHdrs[5]).toEqual(expHdrs[5]);
});

test("Counting total number of rows in a table", async ({ page }) => {
  await page.goto("https://qaplayground.com/practice/data-table");

  await expect(page.locator("table thead th")).toHaveCount(10);
});

test('TC3: Reading a cell value form a cell', async({page})=>{
 await page.goto("https://qaplayground.com/practice/data-table");

 await page.waitForTimeout(4000)
 const value = await page.getByTestId('cell-genre-2').allInnerTexts();
const cellValue = await page
  .locator('table tbody tr')
  .nth(2) // Row 3 (0-based index)
  .locator('td')
  .nth(3) // Column 4 (0-based index)
  .textContent();

console.log(cellValue);
 const value2=  await page.locator("table tbody tr").nth(0).locator('td').nth(2).textContent();
  console.log(value)
  console.log(value2)

});

test('Finding book published date from a sl.no', async({page})=>{
  await page.goto("https://qaplayground.com/practice/data-table");
  await page.waitForTimeout(4000)
  //const cellVal=  await page.locator("table tbody tr").nth(0).locator('td').nth(2).textContent();
  const cell= await page.locator('table tbody').nth(0).locator('tr').nth(2).locator('td').nth(3).textContent();

  console.log(cell)
})

test('getting row and column counts', async({page})=>{
await page.goto("https://qaplayground.com/practice/data-table");
  await page.waitForTimeout(4000) 
  let rowCount  = await page.locator('table tbody').nth(0).locator('tr').count();
  console.log(rowCount)
  let clmCount  = await page.locator('table tbody').nth(0).locator('tr').nth(1).locator('td').count();
  console.log(clmCount)
})

test('Verify table is not empty ',async ({page}) => {
  await page.goto('https://qaplayground.com/practice/data-table', );
  await page.waitForTimeout(4000)

  const row = await page.locator('table tbody').nth(0)
    const rowID= await row.locator('tr').count();
    console.log(rowID)
 
  for (let i = 0; i < rowID; i++) {
    console.log(i)
    const element = await page.locator('table tbody').nth(0).locator('tr').nth(i).textContent();
     console.log(element)
    
  }
  

});


