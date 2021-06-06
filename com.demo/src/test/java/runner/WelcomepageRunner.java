package runner;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features={"src//test//java//welcomepage"},glue= {"welcomepage","com.helpbrowser"},plugin={"html:target/cucumber-html-report",
        "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt"} )
@Test
public class WelcomepageRunner extends AbstractTestNGCucumberTests {
	
}
