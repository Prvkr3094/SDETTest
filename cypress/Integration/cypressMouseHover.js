// <reference types = "Cypress" />

describe("Handling Mouse Hover and hidden elements", () => {
  it("should handle Mouse Hover and hidden elements", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //handling with jQuery method
    cy.get(".mouse-hover-content").invoke("show"); //jQuery function called by invoke method,and show the hidden element
    cy.contains("Top").click();
    cy.url().should("include", "top");

    //handling with cypress command
    cy.contains("Top").click({ force: true }); //force to click on hidden element
    cy.url().should("include", "top");
  });
});
