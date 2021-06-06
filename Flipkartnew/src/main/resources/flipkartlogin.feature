#Author: keshudwivedi17@gmail.com
Feature: To test the login feature of flipkart website

  Background: 
    
    Given I launch browser
    When I navigate to flipkart site
    When I click on login link
    Then I close the browser

  
  Scenario: To test login by blank submit
    Then I click on Submit button without entering any data

  
  Scenario: To test login by entering phone only
    Then I click on Submit button by entering phone number "7388891758" only

  
  Scenario: To test login by entering Password only
    Then I click on Submit button by entering password "123ram" only

  
  Scenario: To test login by entering invalid credentials
    Then I click on submit button by entering Credentials "7388891567" and "1234ram"
    
   
   Scenario: To Test login by entering valid credentials
   Then I click on submit button by entering credentials "7388891758" and "123sairam"
  

  

