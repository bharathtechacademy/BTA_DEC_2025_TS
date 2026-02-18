import { test, expect, chromium } from '@playwright/test';
import path from 'path';

test('Validating the Parabank Application', async ({ page }) => {

    //1. Enter URL and Launch the application (https://demoqa.com/)        
    await page.goto("https://demoqa.com/");

    //2. Click on the form widget
    const formsTile = page.locator('//h5[text()="Forms"]');
    formsTile.click();

    //3. Click on the 'Practice form' menu
    const practiceForm = page.locator('//span[text()="Practice Form"]');
    practiceForm.click();

    //4. Enter First name and Last name      
    const firstName = page.locator('input#firstName');
    const lastName = page.locator('input#lastName');

    firstName.fill("Bharath");
    lastName.fill("Reddy");

    //5. Enter Email   
    const email = page.locator('input#userEmail');
    email.fill("BharathTechAcademy@Gmail.com");

    //6. Select Gender (Male)        
    await selectGender(page, 'Male');

    //7. Enter mobile number       
    const phone = page.locator('input#userNumber');
    phone.fill("9553220022");

    //8. Select DOB (1-Feb-1991)  
    selectDOB(page, "1", "February", "1991");

    //9. Search and Select Computer Science     
    await selectSubject(page, 'Computer Science');

    //10.Select Hobbies as Sports and Reading      
    const hobbies: string[] = ['Sports', 'Reading'];
    await selectHobbies(page,hobbies);

    //11.Upload photo  "
    const photoPath = "C:\\Training\\PlaywrightTrainings\\Dec_2025\\playwright-training\\files\\2.png";
    const uploadPhoto = page.locator('input#uploadPicture');
    await uploadPhoto.setInputFiles(photoPath);

    //12.Submit Details 
    const submitButton = page.locator('button#submit');
    submitButton.click();

});

//Common method to select the hobbies. 
async function selectHobbies(page: any, options: string[]) {

    for (let val of options) {
        const hobby = page.locator('//label[text()="' + val + '"]');
        if (!hobby.isChecked()) {
            hobby.click();
        }
    }
}

//Common method to search and select subjects. 
async function selectSubject(page: any, subject: string) {
    //click on input box
    const subjectInputbox = page.locator('input.subjects-auto-complete__input');
    subjectInputbox.click();

    //enter the subject name
    subjectInputbox.fill(subject);

    //select the suggestion
    const suggestion = await page.getByRole('option', { name: subject });
    await expect(suggestion).toBeVisible();
    suggestion.click();
}


//Common method to select the gender. 
async function selectGender(page: any, gender: string) {
    const genderLabel = page.locator('//label[text()="' + gender + '"]');
    genderLabel.click();
}

//Common method to select the date of birth
async function selectDOB(page: any, date: string, month: string, year: string) {

    //launch the calendar
    const calendar = page.locator('input#dateOfBirthInput');
    calendar.click();

    //select the month
    const monthDropdown = page.locator('select.react-datepicker__month-select');
    await expect(monthDropdown).toBeVisible();
    await monthDropdown.selectOption({ label: month });

    //select the year
    const yearDropdown = page.locator('select.react-datepicker__year-select');
    await yearDropdown.selectOption({ label: year });

    //select the date
    const dateField = page.locator('//div[text()="' + date + '" and contains (@aria-label, "' + month + '")]');
    dateField.click();

}