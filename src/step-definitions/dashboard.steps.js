const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

// Doctors

Given('I go to {string} page', async (s) => {
  await browser.url(
    'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard',
  );
});

Then('page title should be equal to {string}', async (expected) => {
  const pageTitle = await browser.getTitle();
  
  expect(pageTitle).toEqual(expected);
});

