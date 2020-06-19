package com.equifax.utilities;

import com.equifax.pojos.Customer;

import groovy.json.JsonException;
import io.restassured.path.json.JsonPath;

public class ApiUtility {
	
	  public static boolean isValidJson (JsonPath json){
          try {
              Customer customer = json.getObject("", Customer.class);
              return true;
          } catch(JsonException e) {
              return false;
          }
  }

}
