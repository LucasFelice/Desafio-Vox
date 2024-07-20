Feature: Login

Scenario: Valid Login
Given I'm on the login page
When I type a registered email and password
Then I have a successful login

Scenario: Invalid Login
Given I'm on the login page
When I type a registered email and an incorrect password
Then I have an unsuccessful login

Scenario: Login email and empty password
Given I'm on the login page
When I don't type the email and password fields
Then I have unfilled required fields