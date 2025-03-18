@test @regression
Feature: User Login
    The user should see all the elements on the Login page display
    Scenario: Validate Login page elements load
        Given the user navigates to the Login page
        Then the Login page loads