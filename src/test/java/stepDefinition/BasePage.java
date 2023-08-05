package stepDefinition;

import cucumber.api.java.en.Given;
import io.cucumber.java.PendingException;

import static pages.HomePage.*;

public class BasePage {
    @Given("^User navigates to the Login page$")
    public void user_navigates_to_the_Login_page() throws Throwable {
        click_hamburger_menu();
        click_signIn_link();

    }
}
