$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/com/webapp/features/login.feature");
formatter.feature({
  "name": "To test all the functionality of OrangeHRM Demo App",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "To test login feature from OrangeHRM App",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "the user launches the url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.webapp.steps.OrangeSteps.the_user_launches_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login to the App",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.webapp.steps.OrangeSteps.the_user_login_to_the_App(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the home page \"OrangeHRM\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.webapp.steps.OrangeSteps.the_user_should_see_the_home_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});