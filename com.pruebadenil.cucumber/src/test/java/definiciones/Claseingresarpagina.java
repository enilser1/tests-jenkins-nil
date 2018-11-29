package definiciones;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Claseingresarpagina {
WebDriver driver;

@Given("^Ingresamos a la pagina de facebook$")
public void ingresamos_a_la_pagina_de_facebook() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "D:\\driver1\\chromedriver.exe");
	driver=new ChromeDriver();
  driver.manage().window().maximize();
  driver.get("https://www.facebook.com/");
  //https://sbcdemo.myshopify.com/
}

@When("^Ingresamos \"([^\"]*)\" y la \"([^\"]*)\"$")
public void ingresamos_y_la(String arg1, String arg2) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Thread.sleep(10000);
	   driver.findElement(By.id("email")).sendKeys(arg1);
	   driver.findElement(By.id("pass")).sendKeys(arg2);
}


@Then("^deberia logear correctamente$")
public void deberia_logear_correctamente() throws Throwable {
driver.findElement(By.id("u_0_2")).click();
}
}
