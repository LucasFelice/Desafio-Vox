@login
Feature: Login

Background: Access page
    Given I'm on the login page
    
Scenario: Valid Login
    When I type a registered email and password
    Then I have a successful login

Scenario: Invalid Login
    When I type a registered email and an incorrect password
    Then I have an unsuccessful login
    
Scenario: Login email and empty password
    When I don't type the email and password fields
    Then I have unfilled required fields