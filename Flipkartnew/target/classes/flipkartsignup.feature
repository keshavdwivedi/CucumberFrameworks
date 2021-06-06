#Author: keshudwivedi17@gmail.com
Feature: To test the signup feature of flipkart

  Background: 
    Given I open a browser
    When I navigate to flipkart homepage
    Then I click on Flipkart signup link
    Then I close the browser instance

  
  Scenario: To test the signup by blank submit
    Then I click on signup button to validate blank submit

  
  Scenario: To test the signup by entering invalid number
    Then I click on signup button by entering "123456" in signup field

  
  Scenario: To test the signup by entering registered number
    Then I click on signup button by entering already registered number "7388891758" in signup field

 
  Scenario: To test the signup by entering unregistered number
    Then I click on signup button by entering unregistered number "7905677777" in signup field
