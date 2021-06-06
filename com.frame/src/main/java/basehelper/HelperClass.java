package basehelper;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.cucumber.listener.Reporter;
import com.google.common.io.Files;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HelperClass  {
	
	private Baseutil obj;
	public HelperClass(Baseutil obj) {
		this.obj=obj;
	}
	
	@Before(order=0)
	public void driverInstanceSetup() throws IOException
	{
		
		if(obj.getdriver()==null)
		{
			System.out.println("Browser Instance Initialized");
				if(ReadpropertiesFile.getBrowser().equalsIgnoreCase("firefox"))
				{
					System.setProperty("webdriver.gecko.driver",System.getProperty("user.dir")+"/drivers/geckodriver.exe");
					DesiredCapabilities cap=new DesiredCapabilities();
					cap.setPlatform(Platform.WIN10);
					obj.driver=new FirefoxDriver();
					obj.driver.manage().window().maximize();
					System.out.println("Firefox instance created");
				}
				
				else if(ReadpropertiesFile.getBrowser().equalsIgnoreCase("Chrome"))
				{
					System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"/drivers/chromedriver.exe");
					DesiredCapabilities cap=new DesiredCapabilities();
					cap.setPlatform(Platform.WIN10);
					ChromeOptions options=new ChromeOptions();
					options.addArguments("--disable-notifications");
					options.addArguments("--start-maximized");
					options.addArguments("--no-proxy-server");
					obj.driver=new ChromeDriver(options);
					System.out.println("Chrome driver instance created");
				}
				
				obj.driver.get(ReadpropertiesFile.getURL());
				obj.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		}
	}
	
	@Before(order=1)
	public void SetscenarioAuthor(Scenario scenario) {
		Reporter.assignAuthor("Keshav Dwivedi");
	}
	
	@After(order = 1)
	public void afterScenario(Scenario scenario) {
		if (scenario.isFailed()) {
			String screenshotName = scenario.getName().replaceAll(" ", "_");
			try {
				//This takes a screenshot from the driver at save it to the specified location
				File sourcePath = ((TakesScreenshot) obj.driver).getScreenshotAs(OutputType.FILE);
				
				//Building up the destination path for the screenshot to save
				//Also make sure to create a folder 'screenshots' with in the cucumber-report folder
				File destinationPath = new File(System.getProperty("user.dir") + "/screenshots/" + screenshotName + ".png");
				
				//Copy taken screenshot from source location to destination location
				Files.copy(sourcePath, destinationPath);   
 
				//This attach the specified screenshot to the test
				Reporter.addScreenCaptureFromPath(destinationPath.toString());
			} catch (IOException e) {
				e.getStackTrace();
			} 
		}
	}
	
	@After(order=0)
	public void tearDownDriverInstance() throws InterruptedException
	{
		if(obj.driver!=null)
		{
			System.out.println("Closing driver instance");
			obj.driver.close();
			obj.driver.quit();
		}
	}
	
	
}
