package com.signupsteps;

import org.testng.Assert;
import com.framework.Pageobjects.SignupPageobjects;
import basehelper.Baseutil;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignupSteps 
{
	
// is it now working as per expectation ??
// thing is that , each object pages will be defined here, and for each gherkin step we're writign agan n again
//	this things can be optimized okaym
// now from on, eaither use it inside the constructor or create SignupPageobjects s; in such ways so that whole mehtod can access
	
	//ok I'm guess done now from my end
	//tc
	
	
	private SignupPageobjects p;
	private Baseutil obj;
	public SignupSteps(SignupPageobjects p,Baseutil obj) {
	 this.p=p;
	 this.obj=obj;
	}
	
	
	@Given("^I click on signin link$")
	public void i_click_on_signin_link() {
		p.clickSigninLink();
	}
	
	@When("^Signup field is displayed$")
	public void signup_field_is_displayed() {
		p.checksignupfield();
	}
	
	@Then("^I check for Title$")
	public void i_check_for_Title(String arg) {
	  
		System.out.println("The Title asserting is:"+arg);
		Assert.assertTrue(obj.getdriver().getTitle().contains(arg),"The title is not present wrong page reached");
	}
	
	@Then("^I click on Signup button$")
	public void i_click_on_Signup_button() {
	  p.clickSignupButton();
	}
	
	@Then("^I Enter Invalid email$")
	public void i_Enter_Invalid_email() {
		p.enterInvalidEmail();
	}
	
	@Then("^I Enter valid email$")
	public void i_Enter_valid_email() {
		p.enterValidEmail();
	}
}
