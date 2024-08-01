@inventory
Feature: Inventory

Background: Successful Login
    Given I'm on the login page
    When I type a registered email and password
    Then I have a successful login

Scenario: Visible Inventory List
    When I access the inventory page
    Then The product catalog is visible