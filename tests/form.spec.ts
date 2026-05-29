    import {test, expect} from '@playwright/test'

    //This Test verifies below functionalities
    /* 
    *Verify entering data in fileds 
    *Verify mandatory fields 
    *Verify dropdowns
    *Verify checkboxes
    *verify submit and reset button 
    */
    test ('Verification of forms', async ({page})=>{
    //Locators
    //Field Headers
    const pageHeader=page.getByRole('heading',{name: 'Form Automation Practice', level:1})
    const firstNmFldTitl= page.locator('label[for="firstName"]').locator('.text-red-500');
    const lastNmFldTitl= page.locator('label[for="lastname"]').locator('.text-red-500');
    const emailNmFldTil= page.locator('label[for="email"]').locator('.text-red-500');
    const pneNmFldTil= page.locator('label[for="phone"]').locator('.text-red-500');
    const dobNmFldTil= page.locator('label[for="dob"]').locator('.text-red-500');
    const genderNmFldTil= page.getByLabel('Gender');
    const maleRdioBtn=page.getByTestId('radio-gender-male');
    const femaleRdioBtn=page.getByTestId('radio-gender-female');
    const othrRdioBtn=page.getByTestId('radio-gender-other');
    const indDpdnOptn= page.getByTestId('select-country')
    const cityNmFldTil= page.locator('label[for="city"]').locator('.text-red-500');
    //Field Locators 
    const firstNameFld=page.getByTestId('input-first-name');
    const lastNameFld=page.getByTestId('input-last-name');
    const emailFld=page.getByTestId('input-email');
    const pneFld=page.getByTestId('input-phone');
    const dobfld=page.getByTestId('input-dob');
    const genderMaleNameFld=page.getByTestId('radio-gender-male');
    const genderFemaleNameFld=page.getByTestId('radio-gender-female');
    const genderOthrNameFld=page.getByTestId('radio-gender-other');
    const cityNameFld=page.getByTestId('input-city');
    const aboutFld=page.getByTestId('textarea-bio');
    const intrtSelnmFld=page.getByTestId('checkbox-interest-selenium');
    const intrtplywrtFld=page.getByTestId('checkbox-interest-playwright');
    const intrtCyprsFld=page.getByTestId('checkbox-interest-cypress');
    const intrtApumFld=page.getByTestId('checkbox-interest-appium');
    const intrtJestFld=page.getByTestId('checkbox-interest-jest');
    const pswrdFld=page.getByTestId('input-password');
    const cnfmPswrdFld=page.getByTestId('input-confirm-password');
    const tnCFld=page.getByTestId('checkbox-terms');
    const firstNamefld=page.getByTestId('input-first-name');
    const submitBtn=page.getByTestId('submit-form-btn')
    const resetBtn=page.getByTestId('reset-form-btn')
    const SubmitSuccess=page.getByRole('heading', { name: 'Form Submitted Successfully!' });
    const SuccessIcon=page.getByTestId('success-icon');



    await page.goto('https://qaplayground.com/practice/forms');
    await expect(firstNmFldTitl).toHaveText('*');


    //Form filling 
    await firstNameFld.fill('Stanly');
    await lastNameFld.fill('Nimmakuri');
    await emailFld.fill('testmail2828@ttrlf.com');
    await pneFld.fill('9988776655');
    //await dobfld.click();

    await page.locator('#dob').fill('1996-05-13');
    //await dobfld.pressSequentially('13051996');
    await genderMaleNameFld.click();
    await page.locator('select').selectOption('India');
    await cityNameFld.fill('Hyd');
    const aboutText= (`Highly skilled Software Testing Specialist with 5 years of hands-on experience in testing, 
    including 4 years in a Product-based company as QA test engineer. Proficient in Manual 
    and Automation Testing with Playwright(TypeScript) using POM model framework and 
    Subject-7 test automation tools. Experience in AI systems testing and creating automation 
    scripts using AI agents . Expertise includes SDLC, STLC, Black Box Testing, Agile 
    Methodologies, and various testing tools. Proficient in converting manual test cases into 
    automated scripts and ensuring robust test coverage across projects. And automating 
    scripts execution using CI/CD pipelines. `);
    await aboutFld.fill(aboutText);
    await intrtApumFld.click();
    await pswrdFld.fill('Monou@1998');
    await cnfmPswrdFld.fill('Monou@1998');
    await tnCFld.click();


    //Assertions
    await expect(firstNameFld).toHaveValue('Stanly');
    await expect(lastNameFld).toHaveValue('Nimmakuri');
    await expect(emailFld).toHaveValue('testmail2828@ttrlf.com');
    await expect(pneFld).toHaveValue('9988776655');
    await expect(dobfld).toHaveValue('1996-05-13');
    await expect(page.locator('#country')).toContainText('India');
    await expect(cityNameFld).toHaveValue('Hyd');
    await expect(aboutFld).toHaveValue(aboutText);
    await expect(intrtApumFld).toBeChecked();
    await expect(pswrdFld).toHaveValue('Monou@1998');
    await expect(cnfmPswrdFld).toHaveValue('Monou@1998');
    await expect(tnCFld).toBeChecked();
        //Submit form 
    await submitBtn.click();
    await expect(SubmitSuccess).toBeVisible();
    await expect(SuccessIcon).toBeVisible();

    //Refresh Page
    await page.reload();

    //Fill the form
        await expect(firstNmFldTitl).toHaveText('*');


    //Form filling 
    await firstNameFld.fill('Stanly');
    await lastNameFld.fill('Nimmakuri');
    await emailFld.fill('testmail2828@ttrlf.com');
    await pneFld.fill('9988776655');
    //await dobfld.click();

    await page.locator('#dob').fill('1996-05-13');
    //await dobfld.pressSequentially('13051996');
    await genderMaleNameFld.click();
    await page.locator('select').selectOption('India');
    await cityNameFld.fill('Hyd');
    await aboutFld.fill(aboutText);
    await intrtApumFld.click();
    await pswrdFld.fill('Monou@1998');
    await cnfmPswrdFld.fill('Monou@1998');
    await tnCFld.click();


    //Assertions
    await expect(firstNameFld).toHaveValue('Stanly');
    await expect(lastNameFld).toHaveValue('Nimmakuri');
    await expect(emailFld).toHaveValue('testmail2828@ttrlf.com');
    await expect(pneFld).toHaveValue('9988776655');
    await expect(dobfld).toHaveValue('1996-05-13');
    await expect(page.locator('#country')).toContainText('India');
    await expect(cityNameFld).toHaveValue('Hyd');
    await expect(aboutFld).toHaveValue(aboutText);
    await expect(intrtApumFld).toBeChecked();
    await expect(pswrdFld).toHaveValue('Monou@1998');
    await expect(cnfmPswrdFld).toHaveValue('Monou@1998');
    await expect(tnCFld).toBeChecked();
        //Submit form 
    await resetBtn.click();
    await expect(SubmitSuccess).not.toBeVisible();
    await expect(SuccessIcon).not.toBeVisible();

    await expect(firstNameFld).not.toHaveValue('Stanly');
    await expect(lastNameFld).not.toHaveValue('Nimmakuri');
    await expect(emailFld).not.toHaveValue('testmail2828@ttrlf.com');
    await expect(pneFld).not.toHaveValue('9988776655');
    await expect(dobfld).not.toHaveValue('1996-05-13');
    await expect(page.locator('#country')).not.toContainText('India');
    await expect(cityNameFld).not.toHaveValue('Hyd');
    await expect(aboutFld).not.toHaveValue(aboutText);
    await expect(intrtApumFld).not.toBeChecked();
    await expect(pswrdFld).not.toHaveValue('Monou@1998');
    await expect(cnfmPswrdFld).not.toHaveValue('Monou@1998');
    await expect(tnCFld).not.toBeChecked();
        //Test case completed
        console.log("test passed")
    })