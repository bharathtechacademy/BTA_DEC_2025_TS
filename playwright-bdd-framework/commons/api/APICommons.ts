//This class will contain all the common methods related to API response and API response validations. 

import { APIRequestContext, request, expect } from '@playwright/test'; 
import config from '../../config/config.json' with { type: 'json' };

export class ApiCommons {

    private requestContext !: APIRequestContext; //variable to store request context like base url, token , headers etc..
    private response: any; //variable to store response coming out from the request. 

    //create api request context
    async init() {
        this.requestContext = await request.newContext({
            baseURL: config.api.baseurl,
            extraHTTPHeaders: {
                'Accept': 'application/vnd.github+json',
                'Authorization': config.api.token,
            }
        });
    }

    //method to send  request
    async getResponse(requestType: string, endPoint: string, requestBody?: any) {

        switch (requestType.toLowerCase()) {
            case 'get':
                this.response = await this.requestContext.get(endPoint);
                break;
            case 'post':
                this.response = await this.requestContext.post(endPoint, { data: requestBody });
                break;
            case 'put':
                this.response = await this.requestContext.put(endPoint, { data: requestBody });
                break;
            case 'patch':
                this.response = await this.requestContext.patch(endPoint, { data: requestBody });
                break;
            case 'delete':
                this.response = await this.requestContext.delete(endPoint);
                break;
            default:
                throw new Error('Invalid request type : ' + requestType);
        }
        console.log (await this.response.text());

        //wait for 2 sec to get the response before moving to next step.
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    //Method to validate status code 
    async validateStatusCode(expectedStatusCode: number) {
        const actualStatusCode = this.response.status();
        console.log("Actual status code : " + actualStatusCode);
        expect(actualStatusCode).toBe(expectedStatusCode);
    }

    //Method to validate status message 
    async validateStatusMessage(expectedStatusMessage: string) {
        const actualStatusMessage = this.response.statusText();
        expect(actualStatusMessage).toBe(expectedStatusMessage);
    }

    //Method to validate response body 
    async validateResponseBody(key : string, expectedValue: any) {
        const responseBody = await this.response.json();//body object of response 
        const actualValue = responseBody[key];
        console.log("Actual value : " + actualValue);
        expect(actualValue).toBe(expectedValue);
    }

    //Method to validate response header 
    async validateResponseHeader(key : string, expectedValue: any) {
        const responseHeaders = await this.response.headers();
        const actualValue = responseHeaders[key];
        expect(actualValue).toBe(expectedValue);
    }

    //Method to validate the response body schema 
    async validateResponseBodySchema(key : string, expectedType:any) {
        const responseBody = await this.response.json();//body object of response 
        const actualValue = responseBody[key];
        const dataType = typeof actualValue;
        expect(dataType).toBe(expectedType);
    }

    //Method to verify the response cookies 
    async validateResponseCookies(key : string, expectedValue: any){
        const responseCookies = await this.response.cookies();
        const actualValue = responseCookies[key];
        expect(actualValue).toBe(expectedValue);
    }


}