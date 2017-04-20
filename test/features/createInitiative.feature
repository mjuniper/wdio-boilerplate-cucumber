Feature: Create initiative

    As an admin
    I want to be able to create an Initiative
    Because I want citizens to see status on initiative

    Background:

        Given I am on the home page

    Scenario: I can create an initiative

        Then I should see the umbrella home page
        Then I should see the umbrella sign in button
        And I click umbrella sign in 
        And I enter my credentials
        And I click the signin button
        Then the signout button should be present
        Then I should see the umbrella home page
        And I go to sites admin
        Then I should see the initiatives tab
        And I click the initiatives tab
        And I click the initiatives gallery tab
        Then I should see the custom initiatives panel
        And I click the default initiative preview link
        Then I should be at an initiative configuration page
        And I click the initiative get started button
        And I supply a title for the initiative
        And I click the initiative create next button
        And I wait for and dismiss the initiative creation progress modal
        Then I verify the collaboration group and initiative item
