# @test @regression
# Feature: User Login
#     The user should be able to navigate to login page to log into the website
#     Scenario: Successful login with valid credentials
#         Given I navigate to the login page
#         When I enter a valid email and password
#         And I click on the login button
#         Then I should be redirected to the homepage
#         And I should see the logout button

#     Scenario: Unsuccessful login with incorrect credentials
#         Given I navigate to the login page
#         When I enter an incorrect email or password
#         And I click on the login button
#         Then I should see an error message "Your email or password is incorrect!"
#         And I should remain on the login page

#     Scenario: Unsuccessful login with empty email and/or password fields
#         Given I navigate to the login page
#         When I leave both the email and password fields blank
#         And I click the login button
#         Then I should see an error message "Please fill out this field." for the empty field   

#     Scenario: Error messages for incomplete email address
#         Given I navigate to the login page
#         When I enter a incomplete email
#         And I click the login button
#         Then I should see an error message ""