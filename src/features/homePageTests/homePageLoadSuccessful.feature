@test @smoke
Feature: Homepage Functionality
    The Homepage should successfully load for the user
    Scenario: Homepage loads successfully
        Given the user navigates to the Homepage
        Then the Homepage loads
        And the Featured Items section displays
        And the Featured Items header displays text correctly
        And the Featured Items grid displays
        And the Featured Items cards display
        And the Recommended Items section displays
        And the Recommended Items header displays text correctly