Feature: To test the homepage navigation function

  Background: 
    When I launch a browser and navigate to website
    Then close the browser

  Scenario: To test the welcome page links
    When I click on links
    Then User should be redirected to respective pages
