package signupsteps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.helper.Baseclass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Signupmaincode {
	
	private WebDriver sdriver;
	
	public Signupmaincode()
	{
		this.sdriver=Baseclass.getdriver();
	}
	
	@Given("^I open a browser$")
	public void i_open_a_browser() throws Throwable {
	    
		System.out.println("Browser opened successfully for signup test");
		
	}
	
	@When("^I navigate to flipkart homepage$")
	public void i_navigate_to_flipkart_homepage() throws Throwable {
		
		sdriver.get("http://www.flipkart.com");
	}
	
	@Then("^I click on Flipkart signup link$")
	public void i_click_on_Flipkart_signup_link() throws Throwable {
	    sdriver.findElement(By.xpath("//ul[@class='_3Ji-EC']//li[8]/a")).click();
	}
	
	@Then("^I click on signup button to validate blank submit$")
	public void i_click_on_signup_button_to_validate_blank_submit() throws Throwable {
		sdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[2]/button")).submit();
	}
	
	@Then("^I click on signup button by entering \"([^\"]*)\" in signup field$")
	public void i_click_on_signup_button_by_entering_in_signup_field(String num) throws Throwable {
		
		
		sdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[1]/input")).sendKeys(num);
		sdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[2]/button")).submit();
	}
   
	@Then("^I click on signup button by entering already registered number \"([^\"]*)\" in signup field$")
	public void i_click_on_signup_button_by_entering_already_registered_number_in_signup_field(String num1) throws Throwable {
		
		sdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[1]/input")).sendKeys(num1);
		sdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[2]/button")).submit();
	}
	
	@Then("^I click on signup button by entering unregistered number \"([^\"]*)\" in signup field$")
	public void i_click_on_signup_button_by_entering_unregistered_number_in_signup_field(String num2) throws Throwable {
		
		sdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[1]/input")).sendKeys(num2);
		sdriver.findElement(By.xpath("//div[@class='Km0IJL col col-3-5']/div/form/div[2]/button")).submit();
	}
	
	@Then("^I close the browser instance$")
	public void i_close_the_browser_instance() throws Throwable {
	    
		System.out.println("Browser closed successfully after signup test");
	}

}
