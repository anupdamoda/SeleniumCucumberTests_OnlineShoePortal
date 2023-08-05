package stepDefinition;

import cucumber.api.java.en.When;

import static pages.SignInPage.*;

public class SignInPage {

    @When("^User successfully enters the log in details$")
    public void user_logsin_to_login_page(){
        sendkeys_username();
        sendkeys_password();
        click_login_btn();
    }

}
