Feature: Equifax API Test


Background:
    Given Content type and Accept type is application\json
	When I send a GET request with "a" endpoint 
    
Scenario: Validate endpoint status code
	Then Status code should be 200
	
	
Scenario: Validate content and response body values 
	Then the following customer data should be returned: 
     
     |id    |1	     |
	 |name  |John	 |
     |last  |Doe     |
	 |age   |40      |
     |gender|M       | 
 
Scenario: Validate template and POJO validation 
	Then object data types should be appropriate   
   
 Scenario: Verify response body values according to the acceptance criteria

    Then The id should be greater than zero
    And The name should be a String type value not longer than 10 alpha characters
    And The last should be a String type value not longer than 10 alpha characters
    And The age should be between 0 and 120
    And The gender should be an String type value and gender should be F or M
    And The response time should be less than 500 milliseconds
