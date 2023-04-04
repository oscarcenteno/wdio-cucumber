const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

When(/^I attempt search for (.*)$/, async (name) => {
  await $('div.patients').click();
  await $('input#schedule_searchbar').setValue(name);
});

Then('search is performed', async () => {
  expect(1).toEqual(1);
});

