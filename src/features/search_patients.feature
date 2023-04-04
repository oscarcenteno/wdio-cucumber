@focus
Feature: Search patients

    Scenario Outline: Can try to search for patients

        Given I go to "dashboard" page
        When I attempt search for <patient>
        Then search is performed

            Examples:
                | patient |
                | Richa |
                | John |
