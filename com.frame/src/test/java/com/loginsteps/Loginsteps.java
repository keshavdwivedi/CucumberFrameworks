package com.loginsteps;

import org.testng.Assert;

import com.framework.Pageobjects.LoginPageObjects;
import basehelper.Baseutil;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Loginsteps {
	
	@SuppressWarnings("unused")
	private Baseutil obj;
	private LoginPageObjects l;
	
	public Loginsteps(LoginPageObjects l,Baseutil obj) {
		this.obj=obj;
		this.l=l;
	}
	
	@Given("^I click on signin Link$")
	public void i_click_on_signin_Link() {
	    l.clicksigninlink();
	}
	
	@When("^I click on Login button$")
	public void i_click_on_Login_button() {
	  l.clickLoginButton();
	}
	
	@Then("^I validate error message shown to user$")
	public void i_validate_error_message_shown_to_user() {
	    l.checkblanksubmitMessage();
	}
	
	@When("^I Enter invalid credentials$")
	public void i_Enter_invalid_credentials() {
	l.enterInvalidCredentials();
	l.clickLoginButton();
	}
	
	@Then("^I validate error message for scenario$")
	public void i_validate_error_message_for_scenario() {
	    l.CheckAuthenticationErrorMessage();
	    //Assert.assertTrue(false);
	}

}
