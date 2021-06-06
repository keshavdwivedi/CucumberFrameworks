package com.helper;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Baseclass {
	
	private static WebDriver driver;
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver","F:\\selenium\\chromedriver_win32\\chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.manage().window().maximize();
		
	}
	
	@After
       public void teardown() throws Exception {
		Thread.sleep(3000);
		driver.close();
	}
	
	public static WebDriver getdriver()
	{
		return driver;
	}
	
}
