Feature: Login page
    As a user
    I expect that the Login page displays message with invalid credentials

    Scenario: displays message with invalid credentials
        Given I open the Login page
        When I login with user "foo" and password "bar"
        Then I expect that the flash includes "Your username is invalid!"
