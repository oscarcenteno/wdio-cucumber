@regression
Feature: Add doctors

@sanity
Scenario: Can  try to create a doctor

Given I go to "dashboard" page
When I attempt to create an invalid doctor
Then error message will be shown