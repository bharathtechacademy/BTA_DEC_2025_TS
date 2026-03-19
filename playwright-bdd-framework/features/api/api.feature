Feature: GitHub Repository API Validations
    As a user, I want to validate all the repository-related API validations in this feature.

    Scenario: Validate request to create a duplicate repository
        Given the API request context is initialized
        When I send a "POST" request with endpoint "/user/repos" to create duplicate repository with name "JMeterRepo"
        Then I should receive a response with status code 422
        And I should receive a response with status message "Unprocessable Entity"
        And I should receive a response with body having "message" with value "Repository creation failed."

    Scenario: Validate request to create a valid repository
        Given the API request context is initialized
        When I send a "POST" request with endpoint "/user/repos" to create valid repository with name "PlaywrightRepo"
        Then I should receive a response with status code 201
        And I should receive a response with status message "Created"
        And I should receive a response with body having "name" with value "PlaywrightRepo"

    Scenario: Validate request to get a valid repository
        Given the API request context is initialized
        When I send a "GET" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to get repository
        Then I should receive a response with status code 200
        And I should receive a response with status message "OK"
        And I should receive a response with body having "name" with value "PlaywrightRepo"

    Scenario: Validate request to update an existing repository
        Given the API request context is initialized
        When I send a "PATCH" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to update repository with private "true"
        Then I should receive a response with status code 200
        And I should receive a response with status message "OK"
        And I should receive a response with body having visibility "private" with value "true"

    Scenario: Validate request to delete an existing repository
        Given the API request context is initialized
        When I send a "DELETE" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to delete repository
        Then I should receive a response with status code 204
        And I should receive a response with status message "No Content"