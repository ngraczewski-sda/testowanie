describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");

    cy.wait(2000);

    cy.visit("https://google.com");
    cy.wait(2000);
  });
});
