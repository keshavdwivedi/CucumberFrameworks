package runner;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features= {"src//test//resources//featurefiles"},
				glue={"basehelper","com.framework.Pageobjects","com.signupsteps","com.loginsteps"},
				plugin={"html:target/Reports","json:target/Reports/cucumber.json","pretty:target/Reports/cucumber-pretty.txt"}
			    )

@Test
public class ProjectRunner extends AbstractTestNGCucumberTests {
	
}
