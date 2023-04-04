const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

When('I attempt to create an invalid doctor', async () => {
  await $('div.doctors').click();
  await $('//button[text()="Add New Doctor"]').click();
  await $('input[name="Name"]').setValue('John Doe');
  await $('//button[text()="Save"]').click();
});

Then('error message will be shown', async () => {
  const emailError = await $('label#Email-info');
  expect(await emailError.getText()).toEqual('Enter valid email');
});

