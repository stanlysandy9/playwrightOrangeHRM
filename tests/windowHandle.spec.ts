import { test, expect } from '@playwright/test';

test('Different window handling',async ({ page}) => {
    await page.goto('https://qaplayground.com/practice/tabs-windows');
    const [newpage] = await Promise.all([page.context().waitForEvent('page'),
        page.getByRole('button', {name:'Open Home Page'}).click()]);
    await newpage.waitForLoadState();

    console.log("New tab title:",await newpage.title())

    await expect(newpage.getByRole('button', {name:'Watch Demo'})).toBeVisible();

});

test('Different window handling 2',async ({ page}) => {
    await page.goto('https://qaplayground.com/practice/tabs-windows');
    const [newpage] = await Promise.all([page.context().waitForEvent('page'),
        page.getByRole('button', {name:'Open Home Page'}).click()]);
    await newpage.waitForLoadState();

    console.log("New tab title:",await newpage.title())

    await expect(newpage.getByRole('button', {name:'Watch Demo'})).toBeVisible();

});