Feature: To test the checkout feature of the website

  Background: 
    When I launch a Browser and navigate to Website
    Then I close browser
    

  Scenario: To test the website by valid data
    When I enter valid data
    And Press Place order button
