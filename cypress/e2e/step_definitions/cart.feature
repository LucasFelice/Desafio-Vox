Feature: Cart

Background: login and add products
    Given I'm on the login page
    When I type a registered email and password
    Then I click on the addToCart button of product

Scenario: Add products from shopping cart
    When I access the cart page
    Then I valid the products in the shopping cart

Scenario: Remove products from shopping cart
    When I click on the remove button of shopping cart
    Then I valid that the remove button does not exist