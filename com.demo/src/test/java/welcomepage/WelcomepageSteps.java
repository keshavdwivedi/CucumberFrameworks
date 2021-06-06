package welcomepage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.helpbrowser.Browserhelper;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WelcomepageSteps {
	
	WebDriver tdriver;
	Welcomepage wobj=PageFactory.initElements(tdriver,Welcomepage.class);
	@When("^I launch a browser and navigate to website$")
	public void i_launch_a_browser_and_navigate_to_website(){
		tdriver=Browserhelper.browsersetup("chrome","http://www.practiceselenium.com/");  
		wobj.mainlink(tdriver).click();
	}
	
	@When("^I click on links$")
	public void i_click_on_links() {
	   wobj.firstlink(tdriver).click();
	}
	
	@Then("^User should be redirected to respective pages$")
	public void user_should_be_redirected_to_respective_pages() {
	   tdriver.navigate().back();
	   System.out.println("browser navigated back to main page");
	}

	@Then("^close the browser$")
	public void close_the_browser() {
	   System.out.println("Browser closed successfully");
	}
	

}
