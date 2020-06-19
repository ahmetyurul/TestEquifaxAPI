$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/equifax/features/accentanceTest.feature");
formatter.feature({
  "name": "Equifax API Test",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Content type and Accept type is application\\json",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.content_type_and_Accept_type_is_application_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a GET request with \"a\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.i_send_a_GET_request_with_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate endpoint status code",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Content type and Accept type is application\\json",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.content_type_and_Accept_type_is_application_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a GET request with \"a\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.i_send_a_GET_request_with_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate content and response body values",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the following customer data should be returned:",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.the_following_team_data_should_be_returned(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Content type and Accept type is application\\json",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.content_type_and_Accept_type_is_application_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a GET request with \"a\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.i_send_a_GET_request_with_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate template and POJO validation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "object data types should be appropriate",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.object_data_types_should_be_appropriate()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Content type and Accept type is application\\json",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.content_type_and_Accept_type_is_application_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a GET request with \"a\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.i_send_a_GET_request_with_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify response body values according to the acceptance criteria",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The id should be greater than zero",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.the_id_should_be_greater_than_zero()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The name should be a String type value not longer than 10 alpha characters",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.the_name_should_be_a_String_type_value_not_longer_than_alpha_characters(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The last should be a String type value not longer than 10 alpha characters",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.the_last_should_be_a_String_type_value_not_longer_than_alpha_characters(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The age should be between 0 and 120",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.the_age_should_be_between_and(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The gender should be an String type value and gender should be F or M",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.the_gender_should_be_an_String_type_value_and_gender_should_be_F_or_M()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response time should be less than 500 milliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.step_definations.EndPointStepDefinations.the_response_time_should_be_less_than_milliseconds(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
});