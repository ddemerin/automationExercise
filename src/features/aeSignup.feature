@test @regression
Feature: User Signup
    The user should be able to navigate to login page to sign up to the website
    Scenario: Successful user signup
        Given I navigate to the login page
        When I enter a valid email and password
        And I click on the signup button
        Then I should be redirected to the account creation form
        When I complete the form and submit
        And I should see a success message 