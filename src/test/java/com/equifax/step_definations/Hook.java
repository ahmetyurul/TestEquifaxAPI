package com.equifax.step_definations;

import com.equifax.utilities.ConfigurationReader;

import io.cucumber.java.Before;
import io.restassured.RestAssured;

public class Hook {

    @Before
    public void setupAPI() {
        RestAssured.baseURI = ConfigurationReader.get("baseURI");
    }
}
