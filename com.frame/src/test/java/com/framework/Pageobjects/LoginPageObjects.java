package com.framework.Pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import basehelper.Baseutil;

public class LoginPageObjects {
	
	@SuppressWarnings("unused")
	private Baseutil obj;
	
	public LoginPageObjects(Baseutil obj)
	{
		this.obj=obj;
		PageFactory.initElements(obj.getdriver(),this);
	}
	
	@FindBy(how=How.CSS,using="a.login")@CacheLookup public WebElement signinlink;
	@FindBy(how=How.CSS,using="button#SubmitLogin")@CacheLookup public WebElement loginbutton;
	@FindBy(how=How.CSS,using="input#email")@CacheLookup public WebElement emailfield;
	@FindBy(how=How.CSS,using="input#passwd")@CacheLookup public WebElement passwordfield;
	@FindBy(how=How.XPATH,using="//div[@id='center_column']/div[1]/ol/li")@CacheLookup public WebElement errormessage;
	
	public void clicksigninlink()
	{
		signinlink.click();
	}
	
	public void clickLoginButton()
	{
		loginbutton.click();
	}
	
	public void checkblanksubmitMessage()
	{
		if(errormessage.isDisplayed())
		{
			System.out.println("Blank submit error message has been validated");
		}
	}
	
	public void enterInvalidCredentials()
	{
		emailfield.sendKeys("sdf@gmail.com");
		passwordfield.sendKeys("123456");
	}
	
	public void CheckAuthenticationErrorMessage()
	{
		if(errormessage.isDisplayed())
		{
			System.err.println("Authentication error message has been validated");
		}
	}

}
