## Prompt Frameworks 

## RACE Framework 
R means "role"
A means "action" 
C means "context" 
E means "Expectation"

Before RACE :
Can you write all possible test cases to given userstory ?

After RACE
Role : Act as a Senior Quality Analyst 
Action : Write all possible positive, negative, and corner case test cases to the given user story. 
Context : This application is related to creation CRM. It is a CRM-based application, and recently our developer designed the login page. Now we need to validate this login page with all possible test scenarios to identify the defects. For that, we need to generate the test cases to upload the same in Azure DFS by following the Azure DFS template. 
Expectation: Provide positive and negative edge cases in below format. 

*mandatory steps to be included in each test case: 
1.  Launch the browser. (Browser = Chrome)
2.  Enter URL and launch the application (URL = https://accounts.creatio.com/login/alm)
3.  Verify whether Cookies popup is getting displayed 
4.  Close Cookies popup and verify Login Page is displayed

Sample.csv
=========
ID,Work Item Type,Title,Test Step,Step Action,Step Expected,Area Path,Assigned To,State
,Test Case,Verify whether cookies popup is getting displayed when user launch the application,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
,Test Case,Verify Cookies Consent message displayed in the Cookies popup,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
,,,4,Verify Cookies Consent message displayed in the Cookies popup," consent message should be displayed as below

""This website uses cookies",,,
,Test Case,Verify logos displayed in the Cookies popup.,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1,"Launch the browser. 

Browser = Chrome",Browser should be launched successfully.,,,
,,,2,"Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm",application should be launched successfully.,,,
,,,3,Verify whether Cookies popup is getting displayed,cookies pop-up should get displayed before the login page to take the consent from the user.,,,
,,,4,Verify logos displayed in the Cookies popup.,Creatio logo and Cookies Bot logo should be displayed within the cookies popup.,,,
,Test Case,Verify selection buttons displayed within the Cookies pop.,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1,"Launch the browser. 

Browser = Chrome",Browser should be launched successfully.,,,
,,,2,"Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm",application should be launched successfully.,,,
,,,3,Verify whether Cookies popup is getting displayed,cookies pop-up should get displayed before the login page to take the consent from the user.,,,
,,,4,Verify selection buttons displayed within the Cookies pop.,"Cookies popup should be displayed with three different selection buttons mentioned below. 
1.Allow All
2.Allow Selection
3.Deny",,,