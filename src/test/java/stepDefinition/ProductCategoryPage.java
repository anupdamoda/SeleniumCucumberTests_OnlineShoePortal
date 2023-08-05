package stepDefinition;


import cucumber.api.java.en.Then;


import static org.junit.Assert.assertEquals;
import static pages.ProductCategoryPage.*;

public class ProductCategoryPage {

    @Then("^User should be able to view the product category page$")
    public void product_category_validation() {
       String actualProductCategory = visiblity_productCategory();
       assertEquals(actualProductCategory, "Formal Shoes");
    }

}
