@Regression
Feature: To test all the functionality of OrangeHRM Demo App

  @Login
  Scenario: To test login feature from OrangeHRM App
    Given the user launches the url
    When the user login to the App
      | LOGIN Panel | Forgot your password? |
    Then the user should see the home page "OrangeHRM"

  