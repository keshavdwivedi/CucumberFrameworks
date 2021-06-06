package basehelper;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.Platform;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HelperClass  {
	
	private Baseutil obj;
	//private WebDriver driver;
	
	public HelperClass(Baseutil obj) {
		this.obj=obj;
	}
	
	@Before
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
	
	@After
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
