$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoggedInUser.feature");
formatter.feature({
  "line": 1,
  "name": "LoggedIn User View",
  "description": "",
  "id": "loggedin-user-view",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2627069100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate user is able to view after log in",
  "description": "",
  "id": "loggedin-user-view;validate-user-is-able-to-view-after-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@loggedInUser"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User successfully enters the log in details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to view the product category page",
  "keyword": "Then "
});
formatter.match({
  "location": "BasePage.user_navigates_to_the_Login_page()"
});
formatter.result({
  "duration": 4645545500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPage.user_logsin_to_login_page()"
});
formatter.result({
  "duration": 335837000,
  "status": "passed"
});
formatter.match({
  "location": "ProductCategoryPage.product_category_validation()"
});
formatter.result({
  "duration": 60928500,
  "status": "passed"
});
formatter.after({
  "duration": 99388600,
  "status": "passed"
});
formatter.uri("NewUser.feature");
formatter.feature({
  "line": 1,
  "name": "New User View",
  "description": "",
  "id": "new-user-view",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1650385800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate new user is able to view after clicking on new Registration",
  "description": "",
  "id": "new-user-view;validate-new-user-is-able-to-view-after-clicking-on-new-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User navigates to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on new Registration button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to view the Registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "BasePage.user_navigates_to_the_Login_page()"
});
formatter.result({
  "duration": 4236641300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPage.user_clicks_on_new_registration_button()"
});
formatter.result({
  "duration": 189466100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPage.user_should_be_able_to_view_the_registration_page()"
});
formatter.result({
  "duration": 2044839700,
  "status": "passed"
});
formatter.after({
  "duration": 98979900,
  "status": "passed"
});
});