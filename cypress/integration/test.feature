Feature: Todo page test

  I want to open a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I open home page
    When I submit a todo item called "New item"
    Then I see "Todo" in the title
    Then todo item should be submitted


