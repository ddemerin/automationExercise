@test @regression
Feature: User Login
    The user should be able to navigate to login page to log into the website
    Scenario: Successful login with valid credentials
        Given I navigate to the login page
        When I enter a valid email and password
        And I click on the login button
        Then I should be redirected to the homepage
        And I should see the logout button