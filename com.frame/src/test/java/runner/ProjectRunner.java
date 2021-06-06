package runner;

import java.io.File;

import org.testng.annotations.AfterClass;
import org.testng.annotations.Test;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features= {"src//test//resources//featurefiles"},
				glue={"basehelper","com.framework.Pageobjects","com.signupsteps","com.loginsteps"},
				plugin={"html:target/Reports","json:target/Reports/cucumber.json","pretty:target/Reports/cucumber-pretty.txt",
						"com.cucumber.listener.ExtentCucumberFormatter:target/Reports/Extent-reports/report.html"}
			    )

@Test
public class ProjectRunner extends AbstractTestNGCucumberTests {
	
	@AfterClass
	public void ReportSetUp()
	{
		 Reporter.loadXMLConfig(new File(System.getProperty("user.dir")+"/Configurations/config.xml"));
		 Reporter.setSystemInfo("User Name",System.getProperty("user.name"));
	     Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	     Reporter.setSystemInfo("64 Bit", "Windows 10");
	     Reporter.setSystemInfo("3.10.0", "Selenium");
	     Reporter.setSystemInfo("3.5.0", "Maven");
	     Reporter.setSystemInfo("1.8.0_66", "Java Version");
	}
}
	

