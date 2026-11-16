@smoke @regression
Feature: Posts API

  Scenario Outline: Get post by id
    Given the API client is ready
    When I request the post with id "<id>"
    Then the response status should be 200

    Examples:
      | id |
      | 1  |
      | 2  |
