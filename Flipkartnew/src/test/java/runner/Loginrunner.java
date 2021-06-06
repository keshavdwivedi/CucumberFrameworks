package runner;


import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features={"src//main//resources"},glue= {"loginsteps","signupsteps","com.helper"},plugin={"html:target/cucumber-html-report",
        "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt"} )

@Test
public class Loginrunner extends AbstractTestNGCucumberTests {
	
}
