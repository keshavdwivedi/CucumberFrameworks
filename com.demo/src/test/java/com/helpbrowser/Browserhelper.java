package com.helpbrowser;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.java.After;

public class Browserhelper {
	
	static WebDriver driver;
	
	public static WebDriver browsersetup(String Browser,String URL)
	{
		if(Browser.equalsIgnoreCase("firefox"))
		{
			System.setProperty("webdriver.gecko.driver","F:\\selenium\\geckodriver32\\geckodriver.exe");
			driver=new FirefoxDriver();
		}
		
		else if (Browser.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","F:\\selenium\\chromedriver_win32\\chromedriver.exe");
			driver=new ChromeDriver();
		}
		
		driver.manage().window().maximize();
		driver.get(URL);
		return driver;
	}
	
	@After
	public static void closebrowser()
	{
		driver.quit();
		
	}
	
}
