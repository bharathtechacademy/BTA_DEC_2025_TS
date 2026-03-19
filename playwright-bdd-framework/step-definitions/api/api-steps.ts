import { Given, When, Then } from "@cucumber/cucumber";
import { ApiCommons } from "../../commons/api/APICommons.js";
import data from "../../data/api-data.json" with { type: "json" };

let api: ApiCommons;

//Given the API request context is initialized
Given('the API request context is initialized', async function () {
    api = new ApiCommons();
    await api.init();
});

//When I send a "POST" request with endpoint "/user/repos" to create duplicate repository with name "JMeterRepo"
When('I send a {string} request with endpoint {string} to create duplicate repository with name {string}', async function (requestType: string, endPoint: string, repoName: string) {
    const requestBody = data.createRepo.body;
    requestBody.name = repoName;// Update the repository name in the request body
    await api.getResponse(requestType, endPoint, requestBody);
});

//Then I should receive a response with status code 422
Then('I should receive a response with status code {int}', async function (expectedStatusCode: number) {
    await api.validateStatusCode(expectedStatusCode);
});

//And I should receive a response with status message "Unprocessable Entity"
Then('I should receive a response with status message {string}', async function (expectedStatusMessage: string) {
    await api.validateStatusMessage(expectedStatusMessage);
});

//And I should receive a response with body having "message" with value "Repository creation failed."
Then('I should receive a response with body having {string} with value {string}', async function (key: string, expectedValue: string) {
    await api.validateResponseBody(key, expectedValue);
});

//When I send a "POST" request with endpoint "/user/repos" to create valid repository with name "PlaywrightRepo"
When('I send a {string} request with endpoint {string} to create valid repository with name {string}', async function (requestType: string, endPoint: string, repoName: string) {
    const requestBody = data.createRepo.body;
    requestBody.name = repoName;// Update the repository name in the request body
    await api.getResponse(requestType, endPoint, requestBody);
});

//When I send a "GET" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to get repository
When('I send a {string} request with endpoint {string} to get repository', async function (requestType: string, endPoint: string) {
    await api.getResponse(requestType, endPoint);
});

//When I send a "PATCH" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to update repository with private "true"
When('I send a {string} request with endpoint {string} to update repository with private {string}', async function (requestType: string, endPoint: string, isPrivate: string) {
    const requestBody = data.updateRepo.body;
    requestBody.private = Boolean(isPrivate);// Update the private field in the request body
    await api.getResponse(requestType, endPoint, requestBody);
});

//When I send a "DELETE" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to delete repository
When('I send a {string} request with endpoint {string} to delete repository', async function (requestType: string, endPoint: string) {
    await api.getResponse(requestType, endPoint);
});

//And I should receive a response with body having visibility "private" with value "true"
Then('I should receive a response with body having visibility {string} with value {string}', async function (key: string, expectedValue: string) {
    await api.validateResponseBody(key, Boolean(expectedValue));
});