@regression
Feature: Dashboard

@sanity
Scenario: Dashboard should have correct title

Given I go to "dashboard" page
Then page title should be equal to "Appointment Planner - Syncfusion Angular Components Showcase App"