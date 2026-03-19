Feature: GIT API performance validations 
As a user, I want to use the below scenarios to test the Git repository API performance validations. 

Scenario: Validate the git repository API performance
Given Initialize the JMeter utility
Then I run the JMeter test plan "LoadTest.jmx" and get the performance results
