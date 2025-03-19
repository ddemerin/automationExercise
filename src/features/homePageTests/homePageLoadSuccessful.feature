@test @smoke
Feature: Homepage Functionality
    The Homepage should successfully load for the user
    Scenario: Homepage loads successfully
        Given the user navigates to the Homepage
        Then the Homepage loads
        And the Featured Items section displays
        And the Recommended Items section displays