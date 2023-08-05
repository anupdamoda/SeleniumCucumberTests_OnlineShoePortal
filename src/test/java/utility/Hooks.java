package utility;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeOptions;

public class Hooks {
    public static BrowserDriver driver;
    public static ChromeOptions options;
    @Before
    public void setUp(){
        driver = new BrowserDriver();
    }

    @After
    public void tearDown(){
        driver.close();
    }
}
