package loginsteps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.helper.Baseclass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Flipkartmaincode {
	                                                          
	
	private WebDriver mdriver;
	
	public Flipkartmaincode()
	{
		
		this.mdriver=Baseclass.getdriver();
		
	}
	@Given("^I launch browser$")
	public void i_launch_browser() throws Throwable 
	{
		System.out.println("Browser Instance launched successfully");
	}
	
	@When("^I navigate to flipkart site$")
	public void i_navigate_to_flipkart_site() throws Throwable {
	   mdriver.get("https://www.flipkart.com");
	}
	
	@When("^I click on login link$")
	public void i_click_on_login_link() throws Throwable {
	   mdriver.findElement(By.xpath("//div[@class='AsXM8z']//ul//li[9]/a")).click();
	}
	@Then("^I click on Submit button without entering any data$")
	public void i_click_on_Submit_button_without_entering_any_data() throws Throwable {
	    
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[3]/button")).submit();
		
	}

	@Then("^I click on Submit button by entering phone number \"([^\"]*)\" only$")
	public void i_click_on_Submit_button_by_entering_phone_number_only(String phone) throws Throwable {
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[1]/input")).sendKeys(phone);
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[3]/button")).submit();
	  
	}
	@Then("^I click on Submit button by entering password \"([^\"]*)\" only$")
	public void i_click_on_Submit_button_by_entering_password_only(String password) throws Throwable {
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[2]/input")).sendKeys(password);
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[3]/button")).submit();
		 
	}
	
	@Then("^I click on submit button by entering Credentials \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_click_on_submit_button_by_entering_Credentials_and(String phone, String password) throws Throwable {
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[1]/input")).sendKeys(phone);
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[2]/input")).sendKeys(password);
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[3]/button")).submit();
		   Thread.sleep(3000);
	}

	@Then("^I click on submit button by entering credentials \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_click_on_submit_button_by_entering_credentials_and(String vphone, String vpassword) throws Throwable {
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[1]/input")).sendKeys(vphone);
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[2]/input")).sendKeys(vpassword);
		mdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[3]/button")).submit();
		/*WebElement w=mdriver.findElement(By.xpath("//ul[@class='_3Ji-EC']/li[8]/a"));
		w.click();
		mdriver.findElement(By.xpath("//ul[@class='_1u5ANM']/li[9]/a")).click();*/
	}
	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable{
		System.out.println("Browser instance closed successfully");
	}
	
}
