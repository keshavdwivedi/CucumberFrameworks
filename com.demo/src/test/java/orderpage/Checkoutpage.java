package orderpage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class Checkoutpage {
	
	private WebElement element=null;
	
	public WebElement Checkoutlink(WebDriver driver)
	{
		element=driver.findElement(By.xpath("//ul/li[5]/a"));
		return element;
	}
	
	public WebElement Email(WebDriver driver)
	{
		element=driver.findElement(By.id("email"));
		return element;
	}
	
	public WebElement Name(WebDriver driver)
	{
		element=driver.findElement(By.id("name"));
		return element;
	}
	
	public WebElement Address(WebDriver driver)
	{
		element=driver.findElement(By.id("address"));
		return element;
	}
	
	public WebElement cardnumber(WebDriver driver)
	{
		element=driver.findElement(By.id("card_number"));
		return element;
	}
	
	public WebElement cardholdername(WebDriver driver)
	{
		element=driver.findElement(By.id("cardholder_name"));
		return element;
	}
	
	public WebElement verificationcode(WebDriver driver)
	{
		element=driver.findElement(By.id("verification_code"));
		return element;
	}
	
	public WebElement button(WebDriver driver)
	{
		element=driver.findElement(By.xpath("//div[@class='form-actions']/button"));
		return element;
	}

	public WebElement cardtype(WebDriver driver,String str)
	{
		element=driver.findElement(By.id("card_type"));
	    Select drp=new Select(element);
		drp.selectByVisibleText(str);
		return element;
	}
}
