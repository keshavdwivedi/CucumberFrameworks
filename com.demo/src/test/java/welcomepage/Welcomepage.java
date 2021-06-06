package welcomepage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class Welcomepage {
	
	private WebElement element=null;
	//@FindBy(how=How.XPATH,using="//ul[@class='wsb-navigation-rendered-top-level-menu ']/li[1]/a")WebElement mainlink;
	//@FindBy(how=How.XPATH,using="//a[@id='wsb-button-00000000-0000-0000-0000-000450914890']")WebElement firstlink;
	
	public  WebElement mainlink(WebDriver driver)
	{
		element=driver.findElement(By.xpath("//ul/li[1]/a"));
		return element;
	}
	
	public WebElement firstlink(WebDriver driver)
	{
		element=driver.findElement(By.xpath("//a[@id='wsb-button-00000000-0000-0000-0000-000450914890']"));
		return element;
	}
}
