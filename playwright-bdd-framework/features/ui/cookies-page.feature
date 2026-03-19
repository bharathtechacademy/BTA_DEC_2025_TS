Feature: Cookies Feature in Creatio Application
    As a user of the Creatio application, I want to verify all the validations related to the cookies feature within the application.

    Scenario: verify that the cookies pop-up is launched
        Given Launch the Creatio application
        Then Cookies pop-up should be displayed

    Scenario: Verify cookies pop-up content
        Given Launch the Creatio application
        Then Cookies pop-up should be displayed
        And The content of the cookies pop-up should be displayed as
            """
            We may use cookies and similar technologies to collect information about the ways you interact with and use the website
            """

    Scenario: Verify cookies pop-up logos
        Given Launch the Creatio application
        Then Cookies pop-up should be displayed
        And Verify cookies pop-up logos are displayed

    Scenario: Verify cookies pop-up selection buttons
        Given Launch the Creatio application
        Then Cookies pop-up should be displayed
        And Verify cookies pop-up selection buttons are displayed

    Scenario: Verify cookies pop-up switch buttons
        Given Launch the Creatio application
        Then Cookies pop-up should be displayed
        And Verify cookies pop-up switch buttons are displayed

    Scenario: Verify cookies pop-up show-details link functionality
        Given Launch the Creatio application
        Then Cookies pop-up should be displayed
        And Verify cookies pop-up show-details link is displayed
        When User click on the show-details link
        Then Verify cookies pop-up should be displayed in expanded view

    Scenario: Verify cookies pop-up accept all button functionality
        Given Launch the Creatio application
        Then Cookies pop-up should be displayed
        And Verify cookies pop-up selection buttons are displayed
        When User click on the "allow all" button
        Then Verify cookies pop-up should be closed