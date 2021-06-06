package orderpage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import com.helpbrowser.Browserhelper;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CheckoutpageSteps {

	WebDriver cdriver;
	Checkoutpage checkoutobj=PageFactory.initElements(cdriver, Checkoutpage.class);
	@When("^I launch a Browser and navigate to Website$")
	public void i_launch_a_Browser_and_navigate_to_Website() throws Throwable {
	    
		cdriver=Browserhelper.browsersetup("chrome","http://www.practiceselenium.com/");
		checkoutobj.Checkoutlink(cdriver).click();
	}
	
	@When("^I enter valid data$")
	public void i_enter_valid_data() {
	   checkoutobj.Email(cdriver).sendKeys("keshav@gmail.com");
	   checkoutobj.Name(cdriver).sendKeys("keshav");
	   checkoutobj.Address(cdriver).sendKeys("nirala nagar");
	   checkoutobj.cardtype(cdriver,"Visa");
	   checkoutobj.cardnumber(cdriver);
	   checkoutobj.cardholdername(cdriver);
	   checkoutobj.verificationcode(cdriver); 
	   System.out.println("data entered");
	}
	
	@When("^Press Place order button$")
	public void press_Place_order_button() throws Throwable {
		checkoutobj.button(cdriver);
		System.out.println("button pressed");
	}
	
	@Then("^I close browser$")
	public void i_close_browser() throws Throwable {
	   System.out.println("browser session closed");
	}

	 
}
