Feature: LoggedIn User View

  @loggedInUser
  Scenario: Validate user is able to view after log in
    Given User navigates to the Login page
    When User successfully enters the log in details
    Then User should be able to view the product category page