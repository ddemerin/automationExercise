@test @regression
Feature: Product Catalog
    The user should see the header of the product catalog
    Scenario: Product Catalog header matches expected value
        Given the Product page has a product header
        Then the product header matches the expected value