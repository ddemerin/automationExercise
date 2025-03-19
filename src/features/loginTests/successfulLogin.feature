@test @regression
Feature: User Login
    The user should be able to successfully login to the website
    Scenario: User Successfully Logs In
        Given the user navigates to the Login page
        When the user enters their email address on the Login page
        When the user enters their password on the Login page
        When the user clicks on the Login button on the Login page
        Then the Homepage loads
