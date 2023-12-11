describe("Navbar-test", () => {
  it("borde navigera till önskad sida när man klickar på navbaren", () => {
    cy.visit("http://localhost:5173/");

    cy.get("a[href='#/pets']").click();

    cy.url().should("include", "/pets");
  });
});
