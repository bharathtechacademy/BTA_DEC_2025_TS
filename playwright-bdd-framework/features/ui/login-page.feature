Feature: Creatio Login Feature
    As a user of the Creatio application, I want to verify all the validations related to the login feature within the application.

    Background: Launch the Creatio application and handle cookies pop-up
        Given Launch the Creatio application
        Then Cookies pop-up should be displayed
        And Verify cookies pop-up selection buttons are displayed
        When User click on the "allow all" button
        Then Verify cookies pop-up should be closed

    Scenario: Verify that the login page is launched
        Given Login page should be displayed

    Scenario Outline: Verify login feature with <scenario> credential
        Given Login page should be displayed
        When User enter "<username>" and "<password>"
        And Click on the login button
        Then Login should be "<result>"

        Examples:
            | scenario | username                       | password                | result  |
            | valid    | bharattechacademy5@outlook.com | BharathTechAcademy#1234 | success |
            | invalid  | testuser@email.com             | abcd#12345              | failure |

    Scenario: Verify forgot password link functionality
        Given Login page should be displayed
        When user enter valid "bharattechacademy5@outlook.com" in the username field
        And  click on the forgot password link
        Then Verify forgot password confirmation message should be displayed

    Scenario: Verify social media login options
        Given Login page should be displayed
        Then Verify social media login options are displayed


