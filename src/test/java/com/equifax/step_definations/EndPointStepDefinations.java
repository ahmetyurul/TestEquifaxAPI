package com.equifax.step_definations;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;

import com.equifax.utilities.ApiUtility;
import com.equifax.utilities.Endpoints;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class EndPointStepDefinations implements Endpoints {

    private int id;
    private String name;
    private String last;
    private int age;
    private String gender;
    private Response response;
    private ContentType contentType;
    private JsonPath json;
  

    @Given("Content type and Accept type is application\\json")
    public void content_type_and_Accept_type_is_application_json() {
		contentType = ContentType.JSON;
	}

	@When("I send a GET request with {string} endpoint")
	public void i_send_a_GET_request_with_endpoint(String endPoint)  {
	  
		response =
                given()
                .accept(contentType)
                .pathParam("id", endPoint)
                .when()
                .get("customer/{id}");
	}

	@Then("Status code should be {int}")
	public void status_code_should_be(int statusCode) {
	   
		Assert.assertEquals(statusCode, response.statusCode());
	}

	@Then("the following customer data should be returned:")
	public void the_following_team_data_should_be_returned(Map<String, String> customer) {
		
		String expectedId = customer.get("id");
		String expectedFirstName = customer.get("name");
		String expectedLastName = customer.get("last");
		String expectedAge = customer.get("age");
		String expectedGender = customer.get("gender");
		
		String actualId = response.jsonPath().getString("id");
		String actualFistName = response.jsonPath().getString("name");
		String actualLastName = response.jsonPath().getString("last");
		String actualAge =String.valueOf(response.jsonPath().getInt("age"));
		String actualGender = response.jsonPath().getString("gender");

		assertEquals(expectedFirstName, actualFistName);
		assertEquals(expectedLastName, actualLastName);
		assertEquals(expectedId, actualId);
		assertEquals(expectedAge, actualAge);
		assertEquals(expectedGender, actualGender);
	}
	
	@Then("object data types should be appropriate")
	public void object_data_types_should_be_appropriate() {
	  
		json = given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}").jsonPath();

        boolean isValid = ApiUtility.isValidJson(json);
        Assert.assertTrue(isValid);
	}
    
    @Then("The id should be greater than zero")
    public void the_id_should_be_greater_than_zero() {
        id = response.jsonPath().getInt("id");
        Assert.assertTrue(id>0);
    }


    @Then("The name should be a String type value not longer than {int} alpha characters")
    public void the_name_should_be_a_String_type_value_not_longer_than_alpha_characters(Integer int1) {
        name = response.jsonPath().getString("name");
        Assert.assertTrue(name.matches("^[A-Za-z]{1,10}$"));
    }

 
    @Then("The last should be a String type value not longer than {int} alpha characters")
    public void the_last_should_be_a_String_type_value_not_longer_than_alpha_characters(Integer int1) {
        last = response.jsonPath().getString("last");
        Assert.assertTrue(last.matches("^[A-Za-z]{1,10}$"));
    }

    @Then("The age should be between {int} and {int}")
    public void the_age_should_be_between_and(Integer min, Integer max) {
        age = response.jsonPath().getInt("age");
        Assert.assertTrue(min<age && age<max);
    }

    @Then("The gender should be an String type value and gender should be F or M")
    public void the_gender_should_be_an_String_type_value_and_gender_should_be_F_or_M() {
        gender = response.jsonPath().getString("gender");
        Assert.assertTrue(gender.matches("^[FM]{1}$"));
    }

    @Then("The response time should be less than {int} milliseconds")
    public void the_response_time_should_be_less_than_milliseconds(Integer time) {
    	 	
        Assert.assertTrue(response.timeIn(TimeUnit.MILLISECONDS) < time);
        
        
    }

}
