package pages;

import org.openqa.selenium.By;

import static utility.BrowserDriver.driver;

public class ProductCategoryPage  {

    public static String productcategory_heading_xpath = "//*[@id=\"ShoeType\"]";

    public static String visiblity_productCategory(){
        String actualProductCategory = driver.findElement(By.xpath(productcategory_heading_xpath)).getText();
        return actualProductCategory;
    }

}
