describe("Automation Practice Mini Project Suite", () => {
  beforeEach(() => {
    cy.visit("https://practice.expandtesting.com/");
  });

  it("Executes form operations, dropdowns, checkboxes, radio buttons, file uploads, and scrolling", () => {
    cy.contains("Radio Buttons").click();
    cy.url().should("include", "/radio-buttons");

    cy.get("#blue").check().should("be.checked");
    cy.go("back");

    cy.contains("Dropdown").click();

    cy.get("#dropdown").select("Option 1").should("have.value", "1");
    cy.go("back");

    cy.contains("Checkboxes").click();

    cy.get("#checkbox1").check().should("be.checked");
    cy.get("#checkbox2").uncheck().should("not.be.checked");
    cy.contains("File Upload").click();

    cy.get('[data-testid="file-input"]').selectFile(
      "cypress/fixtures/sample.jpg",
    );
    cy.get('[data-testid="file-submit"]').click();

    cy.get("#uploaded-files").should("contain", "sample.jpg");
    cy.go("back");

    cy.contains("Form Validation").click();

    cy.get('input[name="ContactName"]').type("Jane Doe");
    cy.get('input[name="ContactPhone"]').type("123-456-7890");

    cy.get('select[name="payment"]').select("card");

    cy.get('button[type="submit"]').scrollIntoView().should("be.visible");
    cy.get('button[type="submit"]').click();

    cy.get(".alert-success")
      .should("be.visible")
      .and("contain", "Form submitted successfully");
  });
});
