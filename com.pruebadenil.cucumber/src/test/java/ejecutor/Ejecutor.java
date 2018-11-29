package ejecutor;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="features",
		glue= {"definiciones"},
		plugin= {"html:target/cucumber-html-report"}
		)
public class Ejecutor {

	

}
