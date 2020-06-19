package com.equifax.cukesRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/com/equifax/features",
        glue = "com/equifax/step_definations",
        plugin = {
                "json:target/cucumber.json",
                "html:target/cucumber-reports",
                "rerun:target/rerun.txt",
                "pretty"
        },
        monochrome = true,
        strict = true,
        dryRun = false

)

public class CucumberRunner {
}
