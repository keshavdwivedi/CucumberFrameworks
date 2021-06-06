package com.framework.Pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import basehelper.Baseutil;


public class SignupPageobjects {

@SuppressWarnings("unused")
private Baseutil obj;



public SignupPageobjects(Baseutil obj) 
{
	this.obj = obj;
	PageFactory.initElements(obj.getdriver(), this);
}	

	
	@FindBy(how=How.CSS,using="a.login")@CacheLookup public WebElement signinlink;
	@FindBy(how=How.CSS,using="input#email_create")@CacheLookup public WebElement EmailField;
	@FindBy(how=How.CSS,using="div.submit>button")@CacheLookup public WebElement SignupButton;
	
	public void clickSigninLink()
	{
		signinlink.click();
	}
	
	public void checksignupfield()
	{
		if(EmailField.isDisplayed())
		{
			System.out.println("Signup Field Appeared on DOM");
		}
	}
	
	public void clickSignupButton()
	{
		SignupButton.click();
	}
	
	public void enterInvalidEmail()
	{
		EmailField.sendKeys("abc");
	}
	
	public void enterValidEmail()
	{
		EmailField.sendKeys("abc@gmail.com");
	}
	
	
}
